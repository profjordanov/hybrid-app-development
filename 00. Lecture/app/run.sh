docker build --tag smplapp:1.0 .

docker run --publish 8080:8080 --detach --name smplapp smplapp:1.0