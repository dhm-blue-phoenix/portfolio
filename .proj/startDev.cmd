@echo off
cls

:main
echo.
echo Starte die Anwendung...
echo (Beende mit STRG+C)

REM Starte VSCodium
start ./portfolio.code-workspace

REM Öffne Localhost
start http://localhost:4200/

REM Starte Dev Server
call npm run dev-start

echo.
echo Anwendung wurde beendet oder abgebrochen.

REM Benutzer fragen, ob neu gestartet werden soll
choice /M "Den Dev Server neu starten"
if errorlevel 2 goto end
if errorlevel 1 goto main

:end
echo.
echo Skript wird beendet. Drücke eine Taste...
pause >nul
exit