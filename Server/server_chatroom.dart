#import('dart:io');
#import('dart:json');

final IP = '127.0.0.1';
final PORT = 8080;

Map<String, ClientNick> connections;
List chatText;

class ClientNick {
  int token;
  String name;
  WebSocketConnection conn;
  
  ClientNick(this.name, this.token, this.conn) {
    conn.send(JSON.stringify({"cmd":"serversetnick", "args":this.name}));
    conn.onMessage = (message) {
      print("message is $message");
      var jdata = JSON.parse(message);
      if (jdata["cmd"] == "setnick") { 
        if (name == jdata["args"]) {
          return;
        }
        var oldname = name;
        name = jdata["args"]; 
        print("setting nick $name");
        connections.forEach((k,v) {
          v.conn.send(JSON.stringify({"cmd":"newmessage", "args": '${oldname} has changed name to ${name}'}));
        });
        print(connections);
      } else if (jdata["cmd"] == "sendmessage") {
        chatText.add(jdata["args"]);
        print("message: ${jdata["args"]}");
        connections.forEach((k,v) {
          v.conn.send(JSON.stringify({"cmd":"newmessage", "args": '${name} : ${jdata["args"]}'}));
        });
      }
    };
    
    conn.onClosed = (int status, String reason) {
      print('closed with $status for $reason');
      connections.remove(token.toString());
    };
          
    conn.onError = (e) {
      print('Error was $e');
      connections.remove(token.toString());
    };
  }
  
  String toString() {
    return "${name}_${token}";
  }
}

void main() {
  chatText = [];
  int token = 0;
  connections = new Map();
  
  HttpServer server = new HttpServer();
  WebSocketHandler wsHandler = new WebSocketHandler();
  server.addRequestHandler((req) => req.path == "/ws", wsHandler.onRequest);
  
  server.addRequestHandler((req) => req.path == "/", (HttpRequest req, HttpResponse res) {
    File file = new File("../Client/client_chatroom.html"); 
    file.openInputStream().pipe(res.outputStream); 
  });
  server.addRequestHandler((req) => req.path == "/client_chatroom.html", (HttpRequest req, HttpResponse res) {
    File file = new File("../Client/client_chatroom.html"); 
    file.openInputStream().pipe(res.outputStream); 
  });
  server.addRequestHandler((req) => req.path == "/client_chatroom.dart", (HttpRequest req, HttpResponse res) {
    File file = new File("../Client/client_chatroom.dart"); 
    file.openInputStream().pipe(res.outputStream); 
  });
  server.addRequestHandler((req) => req.path == "/client_chatroom.dart.js", (HttpRequest req, HttpResponse res) {
    File file = new File("../Client/client_chatroom.dart.js"); 
    file.openInputStream().pipe(res.outputStream); 
  });
  
  
  wsHandler.onOpen = (WebSocketConnection conn) {
    token+=1;
    var c = new ClientNick("new_nick_${token}", token, conn);
    print("adding connection token = ${token}");
    connections[token.toString()] = c;
  };
  
  print('listing on http://$IP:$PORT');
  server.listen(IP, PORT);
}
