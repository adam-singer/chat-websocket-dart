#import('dart:io');
#import('dart:json');

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
  
  wsHandler.onOpen = (WebSocketConnection conn) {
    token+=1;
    var c = new ClientNick("new_nick_${token}", token, conn);
    print("adding connection token = ${token}");
    connections[token.toString()] = c;
  };
  
  print('listing on localhost');
  server.listen('127.0.0.1', 8000);
}