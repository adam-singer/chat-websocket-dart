#import('dart:html');
#import('dart:json');

final IP = '127.0.0.1';
final PORT = 8080;


class ChatClientController {
  ChatClientController() {
  }
  // Send nickname to server
  void sendNick(WebSocket ws, String nickname) {
    ws.send(JSON.stringify({"cmd": "setnick", "args": nickname}));
  }
  
  // Send the server a message
  void sendMessage(WebSocket ws, String message) {
    if (!message.isEmpty()) {
      ws.send(JSON.stringify({"cmd": "sendmessage", "args": message}));
    }
  }
}

class ChatClientView {
  DivElement _chatWindow; 
  
  ChatClientView() {
    _chatWindow = document.query('#status');
  }
  
  void displayMessage(String message) {
    _chatWindow.innerHTML = "${_chatWindow.innerHTML} <br/> $message";
  }
  
  void clearMessageBox(InputElement messageInput) {
    messageInput.value = "";
  }
  
  void updateNicknameBox(InputElement _nicknameInput, nickname) {
    _nicknameInput.value = nickname;
  }
}


class ChatClient {
  WebSocket _ws;
  bool _isConnected = false;
  InputElement _messageInput;
  InputElement _nicknameInput;
  ChatClientView _view;
  ChatClientController _controller;
  
  
  ChatClient() {
    _view = new ChatClientView();
    _controller = new ChatClientController();
  }
  
  void setupWebsocket() {
    _ws = new WebSocket("ws://$IP:$PORT/ws");
    _ws.on.open.add((a) {
      print("open $a");
      _isConnected = true;
    });
    
    _ws.on.close.add((c) {
      print("close $c");
      _isConnected = false;
    });
    
    _ws.on.message.add((m) {
      var jdata = JSON.parse(m.data);
      if (jdata["cmd"] == "serversetnick") {
        _view.updateNicknameBox(_nicknameInput, jdata["args"]);
      } else if (jdata["cmd"] == "newmessage") {
        _view.displayMessage(jdata["args"]);
      }
    });
  }
  
  void setupUserInputEvents() {
    _messageInput = document.query("#message");
    _messageInput.on.keyPress.add((key) {
      if (key.charCode == 13) { // Enter
        _controller.sendMessage(_ws, _messageInput.value);
        _view.clearMessageBox(_messageInput);
      }      
    });
    _nicknameInput = document.query("#nickname");
    _nicknameInput.on.keyPress.add((key) {
      if (key.charCode == 13) { // Enter
        _controller.sendNick(_ws, _nicknameInput.value);
      }  
    });
  }

  void run() {
    setupUserInputEvents();    
    setupWebsocket();
  }
}

void main() {
  new ChatClient().run();
}
