docker build --tag profjordanov/smplapp:1.0 .

docker run --publish 8080:8080 --detach --name smplapp profjordanov/smplapp:1.0

docker run -p 8080:8080 profjordanov/smplapp:1.0

docker push profjordanov/smplapp:1.0