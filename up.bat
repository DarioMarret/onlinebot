docker build -t xfiv-onlinebot .
docker run -it -p 4000:3000 --name xfiv-onlinebot -d xfiv-onlinebot