npm install

node server/server.js

docker build -t markdown-editor .

docker run -p 8080:8080 -d markdown-editor
