#import('dart:html');
#import('dart:json');

class ChatClient {
  WebSocket ws;
  bool isConnected = false;
  InputElement _messageInput;
  InputElement _nicknameInput;
  
  ChatClient() {
  }
  
  // Send nickname to server
  sendNick() {
    var name = _nicknameInput.value;
    ws.send(JSON.stringify({"cmd": "setnick", "args": name}));
  }
  
  // Server sets nickname
  setNick(nick) {
    _nicknameInput.value = nick;
  }
  
  // Send the server a message
  sendMessage() {
    String message = _messageInput.value;
    if (!message.isEmpty()) {
      ws.send(JSON.stringify({"cmd": "sendmessage", "args": message}));
      _messageInput.value = "";
    }
  }

  void run() {
    _messageInput = document.query("#message");
    _messageInput.on.keyPress.add((key) {
      if (key.charCode == 13) { // Enter
        sendMessage();
      }      
    });
    _nicknameInput = document.query("#nickname");
    _nicknameInput.on.keyPress.add((key) {
      if (key.charCode == 13) { // Enter
        sendNick();
      }  
    });
  
    ws = new WebSocket("ws://127.0.0.1:8000/ws");
    ws.on.open.add((a) {
      print("open $a");
      isConnected = true;
    });
    
    ws.on.close.add((c) {
      print("close $c");
      isConnected = false;
    });
    
    ws.on.message.add((m) {
      var jdata = JSON.parse(m.data);
      if (jdata["cmd"] == "serversetnick") {
        setNick(jdata["args"]);
      } else if (jdata["cmd"] == "newmessage") {
        displayMessage(jdata["args"]);
      }
    });
  }

  void displayMessage(String message) {
    document.query('#status').innerHTML = "${document.query('#status').innerHTML} <br/> $message";
  }
}

void main() {
  new ChatClient().run();
}
