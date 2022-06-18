@REM @echo off
set /a whole=(%RANDOM%*65536/32768)+1
git pull
git add .
set /p cometario="Ingresa un comentario para la commit: "
git commit -m "%cometario%"
git push
echo Conetarminado:  %cometario%

docker build -t name-image .
docker tag name-image intelnexoec/name-image:%whole%
docker push intelnexoec/name-image:%whole%

echo tag: dev_%whole%