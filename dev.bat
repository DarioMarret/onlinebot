@echo off
set /a whole=(%RANDOM%*65536/32768)+1
git pull
git add .
set /p cometario="Ingresa un comentario para la commit: "
git commit -m "%cometario%"
git push
echo Conetarminado:  %cometario%

@REM docker build -t xfiv-onlinebot .
@REM docker tag xfiv-onlinebot intelnexoec/xfiv-onlinebot:dev_%whole%
@REM docker push intelnexoec/xfiv-onlinebot:dev_%whole%

@REM echo tag: dev_%whole%