import { createServer } from "http";

// createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("Hello World\n");
//   res.end();
// }).listen(8080);

const server = createServer;

server.listen(8080);
server.on("request", function (req, res) {
  console.log("method:", req.method);
  console.log("URL:", req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World\n");
  res.end();
});
