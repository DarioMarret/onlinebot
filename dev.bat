@echo off
set /a whole=(%RANDOM%*65536/32768)+1
git pull
git add .
set /p cometario="Ingresa un comentario para la commit: "
git commit -m "%cometario%"
git push
echo "Conetarminado: " %cometario%
echo random dev_%whole%