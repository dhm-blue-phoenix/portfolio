@echo off
cls

:main
echo.
echo Starte die Anwendung...
echo (Beende mit STRG+C)

REM Starte OpenDev
call npm run dev-open

echo.
echo Anwendung wurde beendet oder abgebrochen.

REM Benutzer fragen, ob neu gestartet werden soll
choice /M "Den OpenDev neu starten"
if errorlevel 2 goto end
if errorlevel 1 goto main

:end
echo.
echo Skript wird beendet. Drücke eine Taste...
pause >nul
exit