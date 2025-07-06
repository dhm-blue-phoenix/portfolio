<?php
header('Access-Control-Allow-Origin: *');      //  CORS
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'OPTIONS':            // Preflight
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        exit;

    case 'POST':
        // ---------- JSON einlesen ----------
        $rawData = file_get_contents('php://input');
        $data    = json_decode($rawData, true);

        if (!$data || empty($data['email']) || empty($data['name']) || empty($data['message'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Bad Request – missing fields']);
            exit;
        }

        // ---------- Mail zusammenbauen ----------
        $name    = htmlspecialchars($data['name']);
        $email   = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
        $message = nl2br(htmlspecialchars($data['message']));

        $to      = 'dmozelt@gmail.com';
        $subject = "Kontaktformular von <$email>";

        $headers = [
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=utf-8',
            "From: $name <$email>",
            "Reply-To: $email"
        ];

        // ---------- Mail senden ----------
        if (mail($to, $subject, $message, implode("\r\n", $headers))) {
            echo json_encode(['status' => 'ok']);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Mail function failed']);
        }
        exit;

    default:
        http_response_code(405);             // Method Not Allowed
        header('Allow: POST, OPTIONS');
        exit;
}