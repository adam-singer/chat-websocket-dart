function Isolate() {}
init();

var $ = Isolate.$isolateProperties;
Isolate.$defineClass("Closure19", "Object",
function Closure() {
}, {
 toString$0: function() {
  return 'Closure';
 },
});

Isolate.$defineClass("_ChildNodeListLazy", "Object",
function _ChildNodeListLazy(_lib4_this) {
  this._lib4_this = _lib4_this;
}, {
 operator$index$1: function(index) {
  return $.index(this.get$_lib4_this().get$$dom_childNodes(), index);
 },
 get$length: function() {
  return $.get$length(this.get$_lib4_this().get$$dom_childNodes());
 },
 getRange$2: function(start, rangeLength) {
  return $._lib4_NodeListWrapper$1($.getRange2(this, start, rangeLength, []));
 },
 indexOf$2: function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._lib4_NodeListWrapper$1($.filter3(this, [], f));
 },
 forEach$1: function(f) {
  return $.forEach3(this, f);
 },
 iterator$0: function() {
  return $.iterator(this.get$_lib4_this().get$$dom_childNodes());
 },
 operator$indexSet$2: function(index, value) {
  this.get$_lib4_this().$dom_replaceChild$2(value, this.operator$index$1(index));
 },
 clear$0: function() {
  this.get$_lib4_this().set$text('');
 },
 removeLast$0: function() {
  var result = this.last$0();
  if (!$.eqNullB(result)) {
    this.get$_lib4_this().$dom_removeChild$1(result);
  }
  return result;
 },
 addAll$1: function(collection) {
  for (var t0 = $.iterator(collection); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    this.get$_lib4_this().$dom_appendChild$1(t1);
  }
 },
 addLast$1: function(value) {
  this.get$_lib4_this().$dom_appendChild$1(value);
 },
 add$1: function(value) {
  this.get$_lib4_this().$dom_appendChild$1(value);
 },
 last$0: function() {
  return this._this.lastChild;;
 },
 get$first: function() {
  return this._this.firstChild;;
 },
 first$0: function() { return this.get$first().$call$0(); },
 get$_lib4_this: function() { return this._lib4_this; },
 is$List2: function() { return true; },
 is$Collection: function() { return true; },
});

Isolate.$defineClass("_AudioContextEventsImpl", "_EventsImpl",
function _AudioContextEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("Object", "",
function Object() {
}, {
 toString$0: function() {
  return $.objectToString(this);
 },
});

Isolate.$defineClass("_NodeListWrapper", "_ListWrapper",
function _NodeListWrapper(_ListWrapper__lib4_list) {
  this._lib4_list = _ListWrapper__lib4_list;
}, {
 getRange$2: function(start, rangeLength) {
  return $._lib4_NodeListWrapper$1($.getRange(this.get$_lib4_list(), start, rangeLength));
 },
 filter$1: function(f) {
  return $._lib4_NodeListWrapper$1($.filter(this.get$_lib4_list(), f));
 },
 is$List2: function() { return true; },
 is$Collection: function() { return true; },
});

Isolate.$defineClass("_AllMatchesIterable", "Object",
function _AllMatchesIterable(_lib3_str, _lib3_re) {
  this._lib3_str = _lib3_str;
  this._lib3_re = _lib3_re;
}, {
 iterator$0: function() {
  return $._lib3_AllMatchesIterator$2(this.get$_lib3_re(), this.get$_lib3_str());
 },
 get$_lib3_str: function() { return this._lib3_str; },
 get$_lib3_re: function() { return this._lib3_re; },
});

Isolate.$defineClass("_JsonParser", "Object",
function _JsonParser(position, length, json) {
  this.position = position;
  this.length = length;
  this.json = json;
}, {
 set$position: function(v) { this.position = v; },
 get$position: function() { return this.position; },
 get$length: function() { return this.length; },
 get$json: function() { return this.json; },
 _lib5_error$1: function(message) {
  throw $.captureStackTrace(message);
 },
 _lib5_token$0: function() {
  for (; true; ) {
    if ($.geB(this.get$position(), $.get$length(this))) {
      return;
    }
    var char$ = $.charCodeAt(this.get$json(), this.get$position());
    var token = $.index($.tokens, char$);
    if (token === 32) {
      this.set$position($.add(this.get$position(), 1));
      continue;
    }
    if (token === (void 0)) {
      return 0;
    }
    return token;
  }
 },
 _lib5_nextChar$0: function() {
  this.set$position($.add(this.get$position(), 1));
  if ($.geB(this.get$position(), $.get$length(this))) {
    return 0;
  }
  return $.charCodeAt(this.get$json(), this.get$position());
 },
 _lib5_char$0: function() {
  if ($.geB(this.get$position(), $.get$length(this))) {
    this._lib5_error$1('Unexpected end of JSON stream');
  }
  return $.charCodeAt(this.get$json(), this.get$position());
 },
 _lib5_isToken$1: function(tokenKind) {
  return $.eq(this._lib5_token$0(), tokenKind);
 },
 _lib5_isDigit$1: function(char$) {
  return $.geB(char$, 48) && $.leB(char$, 57);
 },
 _lib5_parseNumber$0: function() {
  if (!(this._lib5_isToken$1(45) === true)) {
    this._lib5_error$1('Expected number literal');
  }
  var startPos = this.get$position();
  var char$ = this._lib5_char$0();
  var char0 = char$;
  if (char$ === 45) {
    char0 = this._lib5_nextChar$0();
  }
  if (char0 === 48) {
    var char1 = this._lib5_nextChar$0();
  } else {
    if (this._lib5_isDigit$1(char0) === true) {
      for (var char2 = this._lib5_nextChar$0(); this._lib5_isDigit$1(char2) === true; ) {
        char2 = this._lib5_nextChar$0();
      }
      char1 = char2;
    } else {
      this._lib5_error$1('Expected digit when parsing number');
      char1 = char0;
    }
  }
  var char3 = char1;
  var isInt = true;
  if (char1 === 46) {
    var char4 = this._lib5_nextChar$0();
    if (this._lib5_isDigit$1(char4) === true) {
      for (var char5 = this._lib5_nextChar$0(); this._lib5_isDigit$1(char5) === true; ) {
        char5 = this._lib5_nextChar$0();
      }
      char3 = char5;
      isInt = false;
    } else {
      this._lib5_error$1('Expected digit following comma');
      char3 = char4;
      isInt = true;
    }
  }
  var isInt0 = isInt;
  if (char3 === 101 || char3 === 69) {
    var char6 = this._lib5_nextChar$0();
    var char7 = char6;
    if (char6 === 45 || char6 === 43) {
      char7 = this._lib5_nextChar$0();
    }
    if (this._lib5_isDigit$1(char7) === true) {
      for (var char8 = this._lib5_nextChar$0(); this._lib5_isDigit$1(char8) === true; ) {
        char8 = this._lib5_nextChar$0();
      }
      isInt0 = false;
    } else {
      this._lib5_error$1('Expected digit following \'e\' or \'E\'');
      isInt0 = isInt;
    }
  }
  var number = $.substring$2(this.get$json(), startPos, this.get$position());
  if (isInt0) {
    return $.parseInt(number);
  } else {
    return $.parseDouble(number);
  }
 },
 _lib5_parseString$0: function() {
  if (!(this._lib5_isToken$1(34) === true)) {
    this._lib5_error$1('Expected string literal');
  }
  this.set$position($.add(this.get$position(), 1));
  var charCodes = $.List((void 0));
  $.setRuntimeTypeInfo(charCodes, ({E: 'int'}));
  for (; true; ) {
    var c = this._lib5_char$0();
    if ($.eqB(c, 34)) {
      this.set$position($.add(this.get$position(), 1));
      break;
    }
    if ($.eqB(c, 92)) {
      this.set$position($.add(this.get$position(), 1));
      if ($.eqB(this.get$position(), $.get$length(this))) {
        this._lib5_error$1('\\ at the end of input');
      }
      $1:{
        var t0 = this._lib5_char$0();
        if (34 === t0) {
          var c = 34;
          break $1;
        } else {
          if (92 === t0) {
            var c = 92;
            break $1;
          } else {
            if (47 === t0) {
              var c = 47;
              break $1;
            } else {
              if (98 === t0) {
                var c = 8;
                break $1;
              } else {
                if (110 === t0) {
                  var c = 10;
                  break $1;
                } else {
                  if (114 === t0) {
                    var c = 13;
                    break $1;
                  } else {
                    if (102 === t0) {
                      var c = 12;
                      break $1;
                    } else {
                      if (116 === t0) {
                        var c = 9;
                        break $1;
                      } else {
                        if (117 === t0) {
                          if ($.gtB($.add(this.get$position(), 5), $.get$length(this))) {
                            this._lib5_error$1('Invalid unicode esacape sequence');
                          }
                          var codeString = $.substring$2(this.get$json(), $.add(this.get$position(), 1), $.add(this.get$position(), 5));
                          try {
                            var c = $.parseInt('0x' + $.stringToString(codeString));
                          }catch (t1) {
                            $.unwrapException(t1);
                            this._lib5_error$1('Invalid unicode esacape sequence');
                          }
                          this.set$position($.add(this.get$position(), 4));
                          break $1;
                        } else {
                          this._lib5_error$1('Invalid esacape sequence in string literal');
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    charCodes.push(c);
    this.set$position($.add(this.get$position(), 1));
  }
  return $.String$fromCharCodes(charCodes);
 },
 _lib5_parseList$0: function() {
  var list = [];
  this.set$position($.add(this.get$position(), 1));
  if (!(this._lib5_isToken$1(93) === true)) {
    for (; true; ) {
      $.add$1(list, this._lib5_parseValue$0());
      if (!(this._lib5_isToken$1(44) === true)) {
        break;
      }
      this.set$position($.add(this.get$position(), 1));
    }
    if (!(this._lib5_isToken$1(93) === true)) {
      this._lib5_error$1('Expected \']\' at end of list');
    }
  }
  this.set$position($.add(this.get$position(), 1));
  return list;
 },
 _lib5_parseObject$0: function() {
  var object = $.makeLiteralMap([]);
  if (typeof object !== 'object'||object.constructor !== Array||!!object.immutable$list) return this._lib5_parseObject$0$bailout(1, object);
  this.set$position($.add(this.get$position(), 1));
  if (!(this._lib5_isToken$1(125) === true)) {
    for (; true; ) {
      var key = this._lib5_parseString$0();
      if (!(this._lib5_isToken$1(58) === true)) {
        this._lib5_error$1('Expected \':\' when parsing object');
      }
      this.set$position($.add(this.get$position(), 1));
      var t0 = this._lib5_parseValue$0();
      if (key !== (key | 0)) throw $.iae(key);
      var t1 = object.length;
      if (key < 0 || key >= t1) throw $.ioore(key);
      object[key] = t0;
      if (!(this._lib5_isToken$1(44) === true)) {
        break;
      }
      this.set$position($.add(this.get$position(), 1));
    }
    if (!(this._lib5_isToken$1(125) === true)) {
      this._lib5_error$1('Expected \'}\' at end of object');
    }
  }
  this.set$position($.add(this.get$position(), 1));
  return object;
 },
 _lib5_parseObject$0$bailout: function(state, env0) {
  switch (state) {
    case 1:
      object = env0;
      break;
  }
  switch (state) {
    case 0:
      var object = $.makeLiteralMap([]);
    case 1:
      state = 0;
      this.set$position($.add(this.get$position(), 1));
      if (!(this._lib5_isToken$1(125) === true)) {
        L0: while (true) {
          if (!true) break L0;
          var key = this._lib5_parseString$0();
          if (!(this._lib5_isToken$1(58) === true)) {
            this._lib5_error$1('Expected \':\' when parsing object');
          }
          this.set$position($.add(this.get$position(), 1));
          $.indexSet(object, key, this._lib5_parseValue$0());
          if (!(this._lib5_isToken$1(44) === true)) {
            break;
          }
          this.set$position($.add(this.get$position(), 1));
        }
        if (!(this._lib5_isToken$1(125) === true)) {
          this._lib5_error$1('Expected \'}\' at end of object');
        }
      }
      this.set$position($.add(this.get$position(), 1));
      return object;
  }
 },
 _lib5_expectKeyword$2: function(word, value) {
  for (var i = 0; $.ltB(i, $.get$length(word)); i = i + 1) {
    if (!$.eqB(this._lib5_char$0(), $.charCodeAt(word, i))) {
      this._lib5_error$1('Expected keyword \'' + $.stringToString(word) + '\'');
    }
    this.set$position($.add(this.get$position(), 1));
  }
  return value;
 },
 _lib5_parseValue$0: function() {
  var token = this._lib5_token$0();
  if (token === (void 0)) {
    this._lib5_error$1('Nothing to parse');
  }
  $0:{
    if (34 === token) {
      return this._lib5_parseString$0();
    } else {
      if (45 === token) {
        return this._lib5_parseNumber$0();
      } else {
        if (110 === token) {
          return this._lib5_expectKeyword$2('null', (void 0));
        } else {
          if (102 === token) {
            return this._lib5_expectKeyword$2('false', false);
          } else {
            if (116 === token) {
              return this._lib5_expectKeyword$2('true', true);
            } else {
              if (123 === token) {
                return this._lib5_parseObject$0();
              } else {
                if (91 === token) {
                  return this._lib5_parseList$0();
                } else {
                  this._lib5_error$1('Unexpected token');
                }
              }
            }
          }
        }
      }
    }
  }
 },
 _lib5_parseToplevel$0: function() {
  var result = this._lib5_parseValue$0();
  if (!(this._lib5_token$0() === (void 0))) {
    this._lib5_error$1('Junk at the end of JSON input');
  }
  return result;
 },
 _lib5_JsonParser$_internal$1: function(json) {
  if (!($.tokens === (void 0))) {
    return;
  }
  var t0 = $.List(126);
  $.setRuntimeTypeInfo(t0, ({E: 'int'}));
  $.tokens = t0;
  $.indexSet($.tokens, 9, 32);
  $.indexSet($.tokens, 10, 32);
  $.indexSet($.tokens, 13, 32);
  $.indexSet($.tokens, 32, 32);
  $.indexSet($.tokens, 48, 45);
  $.indexSet($.tokens, 49, 45);
  $.indexSet($.tokens, 50, 45);
  $.indexSet($.tokens, 51, 45);
  $.indexSet($.tokens, 52, 45);
  $.indexSet($.tokens, 53, 45);
  $.indexSet($.tokens, 54, 45);
  $.indexSet($.tokens, 55, 45);
  $.indexSet($.tokens, 56, 45);
  $.indexSet($.tokens, 57, 45);
  $.indexSet($.tokens, 45, 45);
  $.indexSet($.tokens, 123, 123);
  $.indexSet($.tokens, 125, 125);
  $.indexSet($.tokens, 91, 91);
  $.indexSet($.tokens, 93, 93);
  $.indexSet($.tokens, 34, 34);
  $.indexSet($.tokens, 58, 58);
  $.indexSet($.tokens, 44, 44);
  $.indexSet($.tokens, 110, 110);
  $.indexSet($.tokens, 116, 116);
  $.indexSet($.tokens, 102, 102);
 },
});

Isolate.$defineClass("ListIterator", "Object",
function ListIterator(list, i) {
  this.list = list;
  this.i = i;
}, {
 next$0: function() {
  if (!(this.hasNext$0() === true)) {
    throw $.captureStackTrace($.NoMoreElementsException$0());
  }
  var value = (this.get$list()[this.get$i()]);
  this.set$i($.add(this.get$i(), 1));
  return value;
 },
 hasNext$0: function() {
  return $.lt(this.get$i(), (this.get$list().length));
 },
 get$list: function() { return this.list; },
 set$i: function(v) { this.i = v; },
 get$i: function() { return this.i; },
});

Isolate.$defineClass("EmptyQueueException", "Object",
function EmptyQueueException() {
}, {
 toString$0: function() {
  return 'EmptyQueueException';
 },
});

Isolate.$defineClass("IllegalJSRegExpException", "Object",
function IllegalJSRegExpException(_lib2_errmsg, _lib2_pattern) {
  this._lib2_errmsg = _lib2_errmsg;
  this._lib2_pattern = _lib2_pattern;
}, {
 get$_lib2_errmsg: function() { return this._lib2_errmsg; },
 get$_lib2_pattern: function() { return this._lib2_pattern; },
 toString$0: function() {
  return 'IllegalJSRegExpException: \'' + $.stringToString(this.get$_lib2_pattern()) + '\' \'' + $.stringToString(this.get$_lib2_errmsg()) + '\'';
 },
});

Isolate.$defineClass("DoubleLinkedQueueEntry", "Object",
function DoubleLinkedQueueEntry(_lib3_element, _lib3_next, _lib3_previous) {
  this._lib3_element = _lib3_element;
  this._lib3_next = _lib3_next;
  this._lib3_previous = _lib3_previous;
}, {
 get$element: function() {
  return this.get$_lib3_element();
 },
 previousEntry$0: function() {
  return this.get$_lib3_previous()._lib3_asNonSentinelEntry$0();
 },
 _lib3_asNonSentinelEntry$0: function() {
  return this;
 },
 remove$0: function() {
  var t0 = this.get$_lib3_next();
  this.get$_lib3_previous().set$_lib3_next(t0);
  var t1 = this.get$_lib3_previous();
  this.get$_lib3_next().set$_lib3_previous(t1);
  this.set$_lib3_next((void 0));
  this.set$_lib3_previous((void 0));
  return this.get$_lib3_element();
 },
 prepend$1: function(e) {
  var t0 = $.DoubleLinkedQueueEntry$1(e);
  $.setRuntimeTypeInfo(t0, ({E: 'E'}));
  t0._lib3_link$2(this.get$_lib3_previous(), this);
 },
 _lib3_link$2: function(p, n) {
  this.set$_lib3_next(n);
  this.set$_lib3_previous(p);
  p.set$_lib3_next(this);
  n.set$_lib3_previous(this);
 },
 set$_lib3_element: function(v) { this._lib3_element = v; },
 get$_lib3_element: function() { return this._lib3_element; },
 set$_lib3_next: function(v) { this._lib3_next = v; },
 get$_lib3_next: function() { return this._lib3_next; },
 set$_lib3_previous: function(v) { this._lib3_previous = v; },
 get$_lib3_previous: function() { return this._lib3_previous; },
 DoubleLinkedQueueEntry$1: function(e) {
  this.set$_lib3_element(e);
 },
});

Isolate.$defineClass("_WorkerEventsImpl", "_AbstractWorkerEventsImpl",
function _WorkerEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$message: function() {
  return this._lib4_get$1('message');
 },
});

Isolate.$defineClass("NullPointerException", "Object",
function NullPointerException(arguments, functionName) {
  this.arguments = arguments;
  this.functionName = functionName;
}, {
 get$arguments: function() { return this.arguments; },
 get$functionName: function() { return this.functionName; },
 get$exceptionName: function() {
  return 'NullPointerException';
 },
 toString$0: function() {
  if ($.eqNullB(this.get$functionName())) {
    return this.get$exceptionName();
  } else {
    return '' + $.stringToString(this.get$exceptionName()) + ' : method: \'' + $.stringToString(this.get$functionName()) + '\'\nReceiver: null\nArguments: ' + $.stringToString(this.get$arguments());
  }
 },
});

Isolate.$defineClass("FilteredElementList", "Object",
function FilteredElementList(_lib4_childNodes, _lib4_node) {
  this._lib4_childNodes = _lib4_childNodes;
  this._lib4_node = _lib4_node;
}, {
 last$0: function() {
  return $.last(this.get$_lib4_filtered());
 },
 indexOf$2: function(element, start) {
  return $.indexOf$2(this.get$_lib4_filtered(), element, start);
 },
 getRange$2: function(start, rangeLength) {
  return $.getRange(this.get$_lib4_filtered(), start, rangeLength);
 },
 iterator$0: function() {
  return $.iterator(this.get$_lib4_filtered());
 },
 operator$index$1: function(index) {
  return $.index(this.get$_lib4_filtered(), index);
 },
 get$length: function() {
  return $.get$length(this.get$_lib4_filtered());
 },
 isEmpty$0: function() {
  return $.isEmpty(this.get$_lib4_filtered());
 },
 filter$1: function(f) {
  return $.filter(this.get$_lib4_filtered(), f);
 },
 removeLast$0: function() {
  var result = this.last$0();
  if (!$.eqNullB(result)) {
    result.remove$0();
  }
  return result;
 },
 clear$0: function() {
  $.clear(this.get$_lib4_childNodes());
 },
 removeRange$2: function(start, rangeLength) {
  $.forEach($.getRange(this.get$_lib4_filtered(), start, rangeLength), new $.Closure12());
 },
 addLast$1: function(value) {
  this.add$1(value);
 },
 addAll$1: function(collection) {
  $.forEach(collection, this.get$add());
 },
 add$1: function(value) {
  $.add$1(this.get$_lib4_childNodes(), value);
 },
 get$add: function() { return new $.Closure24(this); },
 set$length: function(newLength) {
  var len = $.get$length(this);
  if ($.geB(newLength, len)) {
    return;
  } else {
    if ($.ltB(newLength, 0)) {
      throw $.captureStackTrace($.CTC5);
    }
  }
  this.removeRange$2($.sub(newLength, 1), $.sub(len, newLength));
 },
 operator$indexSet$2: function(index, value) {
  this.operator$index$1(index).replaceWith$1(value);
 },
 forEach$1: function(f) {
  $.forEach(this.get$_lib4_filtered(), f);
 },
 get$first: function() {
  for (var t0 = $.iterator(this.get$_lib4_childNodes()); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    if (typeof t1 === 'object' && t1.is$Element()) {
      return t1;
    }
  }
  return;
 },
 first$0: function() { return this.get$first().$call$0(); },
 get$_lib4_filtered: function() {
  return $.List$from($.filter(this.get$_lib4_childNodes(), new $.Closure10()));
 },
 get$_lib4_childNodes: function() { return this._lib4_childNodes; },
 is$List2: function() { return true; },
 is$Collection: function() { return true; },
});

Isolate.$defineClass("_FixedSizeListIterator", "_VariableSizeListIterator",
function _FixedSizeListIterator(_lib4_length, _VariableSizeListIterator__lib4_pos, _VariableSizeListIterator__lib4_array) {
  this._lib4_length = _lib4_length;
  this._lib4_pos = _VariableSizeListIterator__lib4_pos;
  this._lib4_array = _VariableSizeListIterator__lib4_array;
}, {
 get$_lib4_length: function() { return this._lib4_length; },
 hasNext$0: function() {
  return $.gt(this.get$_lib4_length(), this.get$_lib4_pos());
 },
});

Isolate.$defineClass("JSSyntaxRegExp", "Object",
function JSSyntaxRegExp(ignoreCase, multiLine, pattern) {
  this.ignoreCase = ignoreCase;
  this.multiLine = multiLine;
  this.pattern = pattern;
}, {
 allMatches$1: function(str) {
  $.checkString(str);
  return $._lib3_AllMatchesIterable$2(this, str);
 },
 hasMatch$1: function(str) {
  return $.regExpTest(this, $.checkString(str));
 },
 firstMatch$1: function(str) {
  var m = $.regExpExec(this, $.checkString(str));
  if (m === (void 0)) {
    return;
  }
  var matchStart = $.regExpMatchStart(m);
  var matchEnd = $.add(matchStart, $.get$length($.index(m, 0)));
  return $.MatchImplementation$5(this.get$pattern(), str, matchStart, matchEnd, m);
 },
 get$ignoreCase: function() { return this.ignoreCase; },
 get$multiLine: function() { return this.multiLine; },
 get$pattern: function() { return this.pattern; },
 JSSyntaxRegExp$_globalVersionOf$1: function(other) {
  $.regExpAttachGlobalNative(this);
 },
 is$JSSyntaxRegExp: true,
});

Isolate.$defineClass("_InputElementEventsImpl", "_ElementEventsImpl",
function _InputElementEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_DoubleLinkedQueueIterator", "Object",
function _DoubleLinkedQueueIterator(_lib3_currentEntry, _lib3_sentinel) {
  this._lib3_currentEntry = _lib3_currentEntry;
  this._lib3_sentinel = _lib3_sentinel;
}, {
 next$0: function() {
  if (!(this.hasNext$0() === true)) {
    throw $.captureStackTrace($.CTC2);
  }
  this.set$_lib3_currentEntry(this.get$_lib3_currentEntry().get$_lib3_next());
  return this.get$_lib3_currentEntry().get$element();
 },
 hasNext$0: function() {
  return !(this.get$_lib3_currentEntry().get$_lib3_next() === this.get$_lib3_sentinel());
 },
 set$_lib3_currentEntry: function(v) { this._lib3_currentEntry = v; },
 get$_lib3_currentEntry: function() { return this._lib3_currentEntry; },
 get$_lib3_sentinel: function() { return this._lib3_sentinel; },
 _lib3_DoubleLinkedQueueIterator$1: function(_sentinel) {
  this.set$_lib3_currentEntry(this.get$_lib3_sentinel());
 },
});

Isolate.$defineClass("_TextTrackListEventsImpl", "_EventsImpl",
function _TextTrackListEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_DeprecatedPeerConnectionEventsImpl", "_EventsImpl",
function _DeprecatedPeerConnectionEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$open: function() {
  return this._lib4_get$1('open');
 },
 get$message: function() {
  return this._lib4_get$1('message');
 },
});

Isolate.$defineClass("LinkedHashMapImplementation", "Object",
function LinkedHashMapImplementation(_lib3_map, _lib3_list) {
  this._lib3_map = _lib3_map;
  this._lib3_list = _lib3_list;
}, {
 toString$0: function() {
  return $.mapToString(this);
 },
 clear$0: function() {
  $.clear(this.get$_lib3_map());
  $.clear(this.get$_lib3_list());
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 get$length: function() {
  return $.get$length(this.get$_lib3_map());
 },
 containsKey$1: function(key) {
  return this.get$_lib3_map().containsKey$1(key);
 },
 forEach$1: function(f) {
  var t0 = ({});
  t0.f_1 = f;
  $.forEach(this.get$_lib3_list(), new $.Closure14(t0));
 },
 operator$index$1: function(key) {
  var entry = $.index(this.get$_lib3_map(), key);
  if (entry === (void 0)) {
    return;
  }
  return entry.get$element().get$value();
 },
 operator$indexSet$2: function(key, value) {
  if (this.get$_lib3_map().containsKey$1(key) === true) {
    $.index(this.get$_lib3_map(), key).get$element().set$value(value);
  } else {
    $.addLast(this.get$_lib3_list(), $.KeyValuePair$2(key, value));
    $.indexSet(this.get$_lib3_map(), key, this.get$_lib3_list().lastEntry$0());
  }
 },
 set$_lib3_map: function(v) { this._lib3_map = v; },
 get$_lib3_map: function() { return this._lib3_map; },
 set$_lib3_list: function(v) { this._lib3_list = v; },
 get$_lib3_list: function() { return this._lib3_list; },
 LinkedHashMapImplementation$0: function() {
  this.set$_lib3_map($.HashMapImplementation$0());
  var t0 = $.DoubleLinkedQueue$0();
  $.setRuntimeTypeInfo(t0, ({E: 'KeyValuePair<K, V>'}));
  this.set$_lib3_list(t0);
 },
 is$Map: function() { return true; },
});

Isolate.$defineClass("JsonStringifier", "Object",
function JsonStringifier(_lib5_seen, _lib5_sb) {
  this._lib5_seen = _lib5_seen;
  this._lib5_sb = _lib5_sb;
}, {
 _lib5_stringify$1: function(object) {
  var t0 = ({});
  $0:{
    if (typeof object === 'number') {
      $.add$1(this.get$_lib5_sb(), $._numberToString(object));
      return;
    } else {
      if (object === true) {
        $.add$1(this.get$_lib5_sb(), 'true');
        return;
      } else {
        if (object === false) {
          $.add$1(this.get$_lib5_sb(), 'false');
          return;
        } else {
          if (object === (void 0)) {
            $.add$1(this.get$_lib5_sb(), 'null');
            return;
          } else {
            if (typeof object === 'string') {
              $.add$1(this.get$_lib5_sb(), '"');
              $._escape(this.get$_lib5_sb(), object);
              $.add$1(this.get$_lib5_sb(), '"');
              return;
            } else {
              if (typeof object === 'object' && (object.constructor === Array || object.is$List2())) {
                this._lib5_checkCycle$1(object);
                $.add$1(this.get$_lib5_sb(), '[');
                if ($.gtB($.get$length(object), 0)) {
                  this._lib5_stringify$1($.index(object, 0));
                  for (var i = 1; $.ltB(i, $.get$length(object)); i = i + 1) {
                    $.add$1(this.get$_lib5_sb(), ',');
                    this._lib5_stringify$1($.index(object, i));
                  }
                }
                $.add$1(this.get$_lib5_sb(), ']');
                $.removeLast(this.get$_lib5_seen());
                return;
              } else {
                if (typeof object === 'object' && object.is$Map()) {
                  this._lib5_checkCycle$1(object);
                  $.add$1(this.get$_lib5_sb(), '{');
                  t0.first_1 = true;
                  object.forEach$1(new $.Closure15(this, t0));
                  $.add$1(this.get$_lib5_sb(), '}');
                  $.removeLast(this.get$_lib5_seen());
                  return;
                } else {
                  throw $.captureStackTrace($.CTC8);
                }
              }
            }
          }
        }
      }
    }
  }
 },
 _lib5_checkCycle$1: function(object) {
  for (var i = 0; $.ltB(i, $.get$length(this.get$_lib5_seen())); i = i + 1) {
    if ($.index(this.get$_lib5_seen(), i) === object) {
      throw $.captureStackTrace('Cyclic structure');
    }
  }
  $.add$1(this.get$_lib5_seen(), object);
 },
 get$_lib5_result: function() {
  return $.toString(this.get$_lib5_sb());
 },
 get$_lib5_seen: function() { return this._lib5_seen; },
 get$_lib5_sb: function() { return this._lib5_sb; },
 JsonStringifier$_internal$0: function() {
 },
});

Isolate.$defineClass("ExceptionImplementation", "Object",
function ExceptionImplementation(_lib3_msg) {
  this._lib3_msg = _lib3_msg;
}, {
 get$_lib3_msg: function() { return this._lib3_msg; },
 toString$0: function() {
  if (this.get$_lib3_msg() === (void 0)) {
    var t0 = 'Exception';
  } else {
    t0 = 'Exception: ' + $.stringToString(this.get$_lib3_msg());
  }
  return t0;
 },
});

Isolate.$defineClass("StringMatch", "Object",
function StringMatch(pattern, str, _lib6_start) {
  this.pattern = pattern;
  this.str = str;
  this._lib6_start = _lib6_start;
}, {
 get$pattern: function() { return this.pattern; },
 group$1: function(group_) {
  if (!$.eqB(group_, 0)) {
    throw $.captureStackTrace($.IndexOutOfRangeException$1(group_));
  }
  return this.get$pattern();
 },
 operator$index$1: function(g) {
  return this.group$1(g);
 },
});

Isolate.$defineClass("_DOMApplicationCacheEventsImpl", "_EventsImpl",
function _DOMApplicationCacheEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_EventListenerListImpl", "Object",
function _EventListenerListImpl(_lib4_type, _lib4_ptr) {
  this._lib4_type = _lib4_type;
  this._lib4_ptr = _lib4_ptr;
}, {
 _lib4_add$2: function(listener, useCapture) {
  this.get$_lib4_ptr().$dom_addEventListener$3(this.get$_lib4_type(), listener, useCapture);
 },
 add$2: function(listener, useCapture) {
  this._lib4_add$2(listener, useCapture);
  return this;
 },
 add$1: function(listener) {
  return this.add$2(listener,false)
},
 get$_lib4_type: function() { return this._lib4_type; },
 get$_lib4_ptr: function() { return this._lib4_ptr; },
});

Isolate.$defineClass("_WindowEventsImpl", "_EventsImpl",
function _WindowEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$message: function() {
  return this._lib4_get$1('message');
 },
 get$keyPress: function() {
  return this._lib4_get$1('keypress');
 },
});

Isolate.$defineClass("DoubleLinkedQueue", "Object",
function DoubleLinkedQueue(_lib3_sentinel) {
  this._lib3_sentinel = _lib3_sentinel;
}, {
 toString$0: function() {
  return $.collectionToString(this);
 },
 iterator$0: function() {
  var t0 = $._lib3_DoubleLinkedQueueIterator$1(this.get$_lib3_sentinel());
  $.setRuntimeTypeInfo(t0, ({E: 'E'}));
  return t0;
 },
 filter$1: function(f) {
  var other = $.DoubleLinkedQueue$0();
  $.setRuntimeTypeInfo(other, ({E: 'E'}));
  for (var entry = this.get$_lib3_sentinel().get$_lib3_next(); !(entry === this.get$_lib3_sentinel()); ) {
    var nextEntry = entry.get$_lib3_next();
    if (f.$call$1(entry.get$_lib3_element()) === true) {
      other.addLast$1(entry.get$_lib3_element());
    }
    entry = nextEntry;
  }
  return other;
 },
 forEach$1: function(f) {
  for (var entry = this.get$_lib3_sentinel().get$_lib3_next(); !(entry === this.get$_lib3_sentinel()); ) {
    var nextEntry = entry.get$_lib3_next();
    f.$call$1(entry.get$_lib3_element());
    entry = nextEntry;
  }
 },
 clear$0: function() {
  var t0 = this.get$_lib3_sentinel();
  this.get$_lib3_sentinel().set$_lib3_next(t0);
  var t1 = this.get$_lib3_sentinel();
  this.get$_lib3_sentinel().set$_lib3_previous(t1);
 },
 isEmpty$0: function() {
  return this.get$_lib3_sentinel().get$_lib3_next() === this.get$_lib3_sentinel();
 },
 get$length: function() {
  var t0 = ({});
  t0.counter_1 = 0;
  this.forEach$1(new $.Closure13(t0));
  return t0.counter_1;
 },
 lastEntry$0: function() {
  return this.get$_lib3_sentinel().previousEntry$0();
 },
 last$0: function() {
  return this.get$_lib3_sentinel().get$_lib3_previous().get$element();
 },
 first$0: function() {
  return this.get$_lib3_sentinel().get$_lib3_next().get$element();
 },
 get$first: function() { return new $.Closure26(this); },
 removeLast$0: function() {
  return this.get$_lib3_sentinel().get$_lib3_previous().remove$0();
 },
 addAll$1: function(collection) {
  for (var t0 = $.iterator(collection); t0.hasNext$0() === true; ) {
    this.add$1(t0.next$0());
  }
 },
 add$1: function(value) {
  this.addLast$1(value);
 },
 addLast$1: function(value) {
  this.get$_lib3_sentinel().prepend$1(value);
 },
 set$_lib3_sentinel: function(v) { this._lib3_sentinel = v; },
 get$_lib3_sentinel: function() { return this._lib3_sentinel; },
 DoubleLinkedQueue$0: function() {
  var t0 = $._lib3_DoubleLinkedQueueEntrySentinel$0();
  $.setRuntimeTypeInfo(t0, ({E: 'E'}));
  this.set$_lib3_sentinel(t0);
 },
 is$Collection: function() { return true; },
});

Isolate.$defineClass("_EventSourceEventsImpl", "_EventsImpl",
function _EventSourceEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$open: function() {
  return this._lib4_get$1('open');
 },
 get$message: function() {
  return this._lib4_get$1('message');
 },
});

Isolate.$defineClass("_DoubleLinkedQueueEntrySentinel", "DoubleLinkedQueueEntry",
function _DoubleLinkedQueueEntrySentinel(DoubleLinkedQueueEntry__lib3_element, DoubleLinkedQueueEntry__lib3_next, DoubleLinkedQueueEntry__lib3_previous) {
  this._lib3_element = DoubleLinkedQueueEntry__lib3_element;
  this._lib3_next = DoubleLinkedQueueEntry__lib3_next;
  this._lib3_previous = DoubleLinkedQueueEntry__lib3_previous;
}, {
 get$element: function() {
  throw $.captureStackTrace($.CTC6);
 },
 _lib3_asNonSentinelEntry$0: function() {
  return;
 },
 remove$0: function() {
  throw $.captureStackTrace($.CTC6);
 },
 _lib3_DoubleLinkedQueueEntrySentinel$0: function() {
  this._lib3_link$2(this, this);
 },
});

Isolate.$defineClass("_NotificationEventsImpl", "_EventsImpl",
function _NotificationEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$close: function() {
  return this._lib4_get$1('close');
 },
});

Isolate.$defineClass("_ListWrapper", "Object",
function _ListWrapper() {
}, {
 get$first: function() {
  return $.index(this.get$_lib4_list(), 0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 getRange$2: function(start, rangeLength) {
  return $.getRange(this.get$_lib4_list(), start, rangeLength);
 },
 last$0: function() {
  return $.last(this.get$_lib4_list());
 },
 removeLast$0: function() {
  return $.removeLast(this.get$_lib4_list());
 },
 clear$0: function() {
  return $.clear(this.get$_lib4_list());
 },
 indexOf$2: function(element, start) {
  return $.indexOf$2(this.get$_lib4_list(), element, start);
 },
 addAll$1: function(collection) {
  return $.addAll(this.get$_lib4_list(), collection);
 },
 addLast$1: function(value) {
  return $.addLast(this.get$_lib4_list(), value);
 },
 add$1: function(value) {
  return $.add$1(this.get$_lib4_list(), value);
 },
 set$length: function(newLength) {
  $.set$length(this.get$_lib4_list(), newLength);
 },
 operator$indexSet$2: function(index, value) {
  $.indexSet(this.get$_lib4_list(), index, value);
 },
 operator$index$1: function(index) {
  return $.index(this.get$_lib4_list(), index);
 },
 get$length: function() {
  return $.get$length(this.get$_lib4_list());
 },
 isEmpty$0: function() {
  return $.isEmpty(this.get$_lib4_list());
 },
 filter$1: function(f) {
  return $.filter(this.get$_lib4_list(), f);
 },
 forEach$1: function(f) {
  return $.forEach(this.get$_lib4_list(), f);
 },
 iterator$0: function() {
  return $.iterator(this.get$_lib4_list());
 },
 get$_lib4_list: function() { return this._lib4_list; },
 is$List2: function() { return true; },
 is$Collection: function() { return true; },
});

Isolate.$defineClass("_PeerConnection00EventsImpl", "_EventsImpl",
function _PeerConnection00EventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$open: function() {
  return this._lib4_get$1('open');
 },
});

Isolate.$defineClass("_WorkerContextEventsImpl", "_EventsImpl",
function _WorkerContextEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_ElementList", "_ListWrapper",
function _ElementList(_ListWrapper__lib4_list) {
  this._lib4_list = _ListWrapper__lib4_list;
}, {
 getRange$2: function(start, rangeLength) {
  return $._lib4_ElementList$1($._ListWrapper.prototype.getRange$2.call(this, start, rangeLength));
 },
 filter$1: function(f) {
  return $._lib4_ElementList$1($._ListWrapper.prototype.filter$1.call(this, f));
 },
 is$List2: function() { return true; },
 is$Collection: function() { return true; },
});

Isolate.$defineClass("_DocumentEventsImpl", "_ElementEventsImpl",
function _DocumentEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$keyPress: function() {
  return this._lib4_get$1('keypress');
 },
});

Isolate.$defineClass("IndexOutOfRangeException", "Object",
function IndexOutOfRangeException(_lib2_index) {
  this._lib2_index = _lib2_index;
}, {
 get$_lib2_index: function() { return this._lib2_index; },
 toString$0: function() {
  return 'IndexOutOfRangeException: ' + $.stringToString(this.get$_lib2_index());
 },
});

Isolate.$defineClass("JsonUnsupportedObjectType", "Object",
function JsonUnsupportedObjectType() {
}, {
});

Isolate.$defineClass("ChatClient", "Object",
function ChatClient(_lib_nicknameInput, _lib_messageInput, isConnected, ws) {
  this._lib_nicknameInput = _lib_nicknameInput;
  this._lib_messageInput = _lib_messageInput;
  this.isConnected = isConnected;
  this.ws = ws;
}, {
 displayMessage$1: function(message) {
  var t0 = '' + $.stringToString($.document().query$1('#status').get$innerHTML()) + ' <br/> ' + $.stringToString(message);
  $.document().query$1('#status').set$innerHTML(t0);
 },
 run$0: function() {
  this.set$_lib_messageInput($.document().query$1('#message'));
  $.add$1(this.get$_lib_messageInput().get$on().get$keyPress(), new $.Closure(this));
  this.set$_lib_nicknameInput($.document().query$1('#nickname'));
  $.add$1(this.get$_lib_nicknameInput().get$on().get$keyPress(), new $.Closure2(this));
  this.set$ws($.WebSocket('ws://' + $.stringToString($.IP) + ':' + $.stringToString($.PORT) + '/ws'));
  $.add$1(this.get$ws().get$on().get$open(), new $.Closure3(this));
  $.add$1(this.get$ws().get$on().get$close(), new $.Closure4(this));
  $.add$1(this.get$ws().get$on().get$message(), new $.Closure5(this));
 },
 sendMessage$0: function() {
  var message = this.get$_lib_messageInput().get$value();
  if (!($.isEmpty(message) === true)) {
    this.get$ws().send$1($.stringify($.makeLiteralMap(['cmd', 'sendmessage', 'args', message])));
    this.get$_lib_messageInput().set$value('');
  }
 },
 setNick$1: function(nick) {
  this.get$_lib_nicknameInput().set$value(nick);
 },
 sendNick$0: function() {
  var name$ = this.get$_lib_nicknameInput().get$value();
  this.get$ws().send$1($.stringify($.makeLiteralMap(['cmd', 'setnick', 'args', name$])));
 },
 set$_lib_nicknameInput: function(v) { this._lib_nicknameInput = v; },
 get$_lib_nicknameInput: function() { return this._lib_nicknameInput; },
 set$_lib_messageInput: function(v) { this._lib_messageInput = v; },
 get$_lib_messageInput: function() { return this._lib_messageInput; },
 set$isConnected: function(v) { this.isConnected = v; },
 set$ws: function(v) { this.ws = v; },
 get$ws: function() { return this.ws; },
 ChatClient$0: function() {
 },
});

Isolate.$defineClass("Closure18", "Closure19",
function Closure(box_0) {
  this.box_0 = box_0;
}, {
 $call$2: function(key, value) {
  if (this.box_0.f_1.$call$1(key) === true) {
    $.add$1(this.box_0.result_2, key);
  }
 },
});

Isolate.$defineClass("Closure", "Closure19",
function Closure(this_0) {
  this.this_0 = this_0;
}, {
 $call$1: function(key) {
  if ($.eqB(key.get$charCode(), 13)) {
    this.this_0.sendMessage$0();
  }
 },
});

Isolate.$defineClass("Closure2", "Closure19",
function Closure(this_1) {
  this.this_1 = this_1;
}, {
 $call$1: function(key) {
  if ($.eqB(key.get$charCode(), 13)) {
    this.this_1.sendNick$0();
  }
 },
});

Isolate.$defineClass("_BatteryManagerEventsImpl", "_EventsImpl",
function _BatteryManagerEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_EventsImpl", "Object",
function _EventsImpl(_lib4_ptr) {
  this._lib4_ptr = _lib4_ptr;
}, {
 _lib4_get$1: function(type) {
  return $._lib4_EventListenerListImpl$2(this.get$_lib4_ptr(), type);
 },
 operator$index$1: function(type) {
  return this._lib4_get$1($.toLowerCase(type));
 },
 get$_lib4_ptr: function() { return this._lib4_ptr; },
});

Isolate.$defineClass("HashSetImplementation", "Object",
function HashSetImplementation(_lib3_backingMap) {
  this._lib3_backingMap = _lib3_backingMap;
}, {
 set$_lib3_backingMap: function(v) { this._lib3_backingMap = v; },
 get$_lib3_backingMap: function() { return this._lib3_backingMap; },
 toString$0: function() {
  return $.collectionToString(this);
 },
 iterator$0: function() {
  var t0 = $.HashSetIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({E: 'E'}));
  return t0;
 },
 get$length: function() {
  return $.get$length(this.get$_lib3_backingMap());
 },
 isEmpty$0: function() {
  return $.isEmpty(this.get$_lib3_backingMap());
 },
 filter$1: function(f) {
  var t0 = ({});
  t0.f_1 = f;
  var result = $.HashSetImplementation$0();
  $.setRuntimeTypeInfo(result, ({E: 'E'}));
  t0.result_2 = result;
  $.forEach(this.get$_lib3_backingMap(), new $.Closure18(t0));
  return t0.result_2;
 },
 forEach$1: function(f) {
  var t0 = ({});
  t0.f_1 = f;
  $.forEach(this.get$_lib3_backingMap(), new $.Closure17(t0));
 },
 addAll$1: function(collection) {
  $.forEach(collection, new $.Closure16(this));
 },
 contains$1: function(value) {
  return this.get$_lib3_backingMap().containsKey$1(value);
 },
 add$1: function(value) {
  $.indexSet(this.get$_lib3_backingMap(), value, value);
 },
 clear$0: function() {
  $.clear(this.get$_lib3_backingMap());
 },
 HashSetImplementation$0: function() {
  this.set$_lib3_backingMap($.HashMapImplementation$0());
 },
 is$Collection: function() { return true; },
});

Isolate.$defineClass("_TextTrackEventsImpl", "_EventsImpl",
function _TextTrackEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("Closure3", "Closure19",
function Closure(this_2) {
  this.this_2 = this_2;
}, {
 $call$1: function(a) {
  $.print('open ' + $.stringToString(a));
  this.this_2.set$isConnected(true);
 },
});

Isolate.$defineClass("_IDBRequestEventsImpl", "_EventsImpl",
function _IDBRequestEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("Closure4", "Closure19",
function Closure(this_3) {
  this.this_3 = this_3;
}, {
 $call$1: function(c) {
  $.print('close ' + $.stringToString(c));
  this.this_3.set$isConnected(false);
 },
});

Isolate.$defineClass("Closure5", "Closure19",
function Closure(this_4) {
  this.this_4 = this_4;
}, {
 $call$1: function(m) {
  var jdata = $.parse(m.get$data());
  if ($.eqB($.index(jdata, 'cmd'), 'serversetnick')) {
    this.this_4.setNick$1($.index(jdata, 'args'));
  } else {
    if ($.eqB($.index(jdata, 'cmd'), 'newmessage')) {
      this.this_4.displayMessage$1($.index(jdata, 'args'));
    }
  }
 },
});

Isolate.$defineClass("_SpeechRecognitionEventsImpl", "_EventsImpl",
function _SpeechRecognitionEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_SVGElementInstanceEventsImpl", "_EventsImpl",
function _SVGElementInstanceEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$keyPress: function() {
  return this._lib4_get$1('keypress');
 },
});

Isolate.$defineClass("_WebSocketEventsImpl", "_EventsImpl",
function _WebSocketEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$open: function() {
  return this._lib4_get$1('open');
 },
 get$message: function() {
  return this._lib4_get$1('message');
 },
 get$close: function() {
  return this._lib4_get$1('close');
 },
});

Isolate.$defineClass("KeyValuePair", "Object",
function KeyValuePair(value, key) {
  this.value = value;
  this.key = key;
}, {
 set$value: function(v) { this.value = v; },
 get$value: function() { return this.value; },
 get$key: function() { return this.key; },
 KeyValuePair$2: function(key, value) {
 },
});

Isolate.$defineClass("MetaInfo", "Object",
function MetaInfo(set, tags, tag) {
  this.set = set;
  this.tags = tags;
  this.tag = tag;
}, {
 get$set: function() { return this.set; },
 get$tag: function() { return this.tag; },
});

Isolate.$defineClass("_VariableSizeListIterator", "Object",
function _VariableSizeListIterator() {
}, {
 set$_lib4_pos: function(v) { this._lib4_pos = v; },
 get$_lib4_pos: function() { return this._lib4_pos; },
 get$_lib4_array: function() { return this._lib4_array; },
 next$0: function() {
  if (!(this.hasNext$0() === true)) {
    throw $.captureStackTrace($.CTC2);
  }
  var t0 = this.get$_lib4_array();
  var t1 = this.get$_lib4_pos();
  this.set$_lib4_pos($.add(t1, 1));
  return $.index(t0, t1);
 },
 hasNext$0: function() {
  return $.gt($.get$length(this.get$_lib4_array()), this.get$_lib4_pos());
 },
});

Isolate.$defineClass("Closure6", "Closure19",
function Closure(box_0) {
  this.box_0 = box_0;
}, {
 $call$2: function(k, v) {
  if (!(this.box_0.first_3 === true)) {
    $.add$1(this.box_0.result_1, ', ');
  }
  this.box_0.first_3 = false;
  $._emitObject(k, this.box_0.result_1, this.box_0.visiting_2);
  $.add$1(this.box_0.result_1, ': ');
  $._emitObject(v, this.box_0.result_1, this.box_0.visiting_2);
 },
});

Isolate.$defineClass("_MediaStreamEventsImpl", "_EventsImpl",
function _MediaStreamEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("Closure7", "Closure19",
function Closure(box_0) {
  this.box_0 = box_0;
}, {
 $call$0: function() {
  return this.box_0.closure_1.$call$0();
 },
});

Isolate.$defineClass("Closure8", "Closure19",
function Closure(box_0) {
  this.box_0 = box_0;
}, {
 $call$0: function() {
  return this.box_0.closure_1.$call$1(this.box_0.arg1_2);
 },
});

Isolate.$defineClass("Closure9", "Closure19",
function Closure(box_0) {
  this.box_0 = box_0;
}, {
 $call$0: function() {
  return this.box_0.closure_1.$call$2(this.box_0.arg1_2, this.box_0.arg2_3);
 },
});

Isolate.$defineClass("ObjectNotClosureException", "Object",
function ObjectNotClosureException() {
}, {
 toString$0: function() {
  return 'Object is not closure';
 },
});

Isolate.$defineClass("Closure10", "Closure19",
function Closure() {
}, {
 $call$1: function(n) {
  return typeof n === 'object' && n.is$Element();
 },
});

Isolate.$defineClass("Closure11", "Closure19",
function Closure(box_0, output_2) {
  this.box_0 = box_0;
  this.output_2 = output_2;
}, {
 $call$1: function(element) {
  if (this.box_0.f_1.$call$1(element) === true) {
    $.add$1(this.output_2, element);
  }
 },
});

Isolate.$defineClass("_ChildrenElementList", "Object",
function _ChildrenElementList(_lib4_childElements, _lib4_element) {
  this._lib4_childElements = _lib4_childElements;
  this._lib4_element = _lib4_element;
}, {
 last$0: function() {
  return this.get$_lib4_element().get$$dom_lastElementChild();
 },
 removeLast$0: function() {
  var result = this.last$0();
  if (!$.eqNullB(result)) {
    this.get$_lib4_element().$dom_removeChild$1(result);
  }
  return result;
 },
 clear$0: function() {
  this.get$_lib4_element().set$text('');
 },
 indexOf$2: function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 },
 getRange$2: function(start, rangeLength) {
  return $._lib4_FrozenElementList$_wrap$1($.getRange2(this, start, rangeLength, []));
 },
 addAll$1: function(collection) {
  for (var t0 = $.iterator(collection); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    this.get$_lib4_element().$dom_appendChild$1(t1);
  }
 },
 iterator$0: function() {
  return $.iterator(this._lib4_toList$0());
 },
 addLast$1: function(value) {
  return this.add$1(value);
 },
 add$1: function(value) {
  this.get$_lib4_element().$dom_appendChild$1(value);
  return value;
 },
 set$length: function(newLength) {
  throw $.captureStackTrace($.CTC4);
 },
 operator$indexSet$2: function(index, value) {
  this.get$_lib4_element().$dom_replaceChild$2(value, $.index(this.get$_lib4_childElements(), index));
 },
 operator$index$1: function(index) {
  return $.index(this.get$_lib4_childElements(), index);
 },
 get$length: function() {
  return $.get$length(this.get$_lib4_childElements());
 },
 isEmpty$0: function() {
  return $.eqNull(this.get$_lib4_element().get$$dom_firstElementChild());
 },
 filter$1: function(f) {
  var t0 = ({});
  t0.f_1 = f;
  var output = [];
  this.forEach$1(new $.Closure11(t0, output));
  return $._lib4_FrozenElementList$_wrap$1(output);
 },
 forEach$1: function(f) {
  for (var t0 = $.iterator(this.get$_lib4_childElements()); t0.hasNext$0() === true; ) {
    f.$call$1(t0.next$0());
  }
 },
 get$first: function() {
  return this.get$_lib4_element().get$$dom_firstElementChild();
 },
 first$0: function() { return this.get$first().$call$0(); },
 _lib4_toList$0: function() {
  var output = $.List($.get$length(this.get$_lib4_childElements()));
  var len = $.get$length(this.get$_lib4_childElements());
  if (typeof len !== 'number') return this._lib4_toList$0$bailout(1, output, len);
  var i = 0;
  for (; i < len; i = i + 1) {
    var t0 = $.index(this.get$_lib4_childElements(), i);
    var t1 = output.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    output[i] = t0;
  }
  return output;
 },
 _lib4_toList$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      output = env0;
      len = env1;
      break;
  }
  switch (state) {
    case 0:
      var output = $.List($.get$length(this.get$_lib4_childElements()));
      var len = $.get$length(this.get$_lib4_childElements());
    case 1:
      state = 0;
      var i = 0;
      L0: while (true) {
        if (!$.ltB(i, len)) break L0;
        var t0 = $.index(this.get$_lib4_childElements(), i);
        var t1 = output.length;
        if (i < 0 || i >= t1) throw $.ioore(i);
        output[i] = t0;
        i = i + 1;
      }
      return output;
  }
 },
 get$_lib4_childElements: function() { return this._lib4_childElements; },
 get$_lib4_element: function() { return this._lib4_element; },
 is$List2: function() { return true; },
 is$Collection: function() { return true; },
});

Isolate.$defineClass("Closure12", "Closure19",
function Closure() {
}, {
 $call$1: function(el) {
  return el.remove$0();
 },
});

Isolate.$defineClass("Closure13", "Closure19",
function Closure(box_0) {
  this.box_0 = box_0;
}, {
 $call$1: function(element) {
  var counter = $.add(this.box_0.counter_1, 1);
  this.box_0.counter_1 = counter;
 },
});

Isolate.$defineClass("_DeletedKeySentinel", "Object",
function _DeletedKeySentinel() {
}, {
});

Isolate.$defineClass("_FrozenElementListIterator", "Object",
function _FrozenElementListIterator(_lib4_index, _lib4_list) {
  this._lib4_index = _lib4_index;
  this._lib4_list = _lib4_list;
}, {
 hasNext$0: function() {
  return $.lt(this.get$_lib4_index(), $.get$length(this.get$_lib4_list()));
 },
 next$0: function() {
  if (!(this.hasNext$0() === true)) {
    throw $.captureStackTrace($.CTC2);
  }
  var t0 = this.get$_lib4_list();
  var t1 = this.get$_lib4_index();
  this.set$_lib4_index($.add(t1, 1));
  return $.index(t0, t1);
 },
 set$_lib4_index: function(v) { this._lib4_index = v; },
 get$_lib4_index: function() { return this._lib4_index; },
 get$_lib4_list: function() { return this._lib4_list; },
});

Isolate.$defineClass("Closure14", "Closure19",
function Closure(box_0) {
  this.box_0 = box_0;
}, {
 $call$1: function(entry) {
  this.box_0.f_1.$call$2(entry.get$key(), entry.get$value());
 },
});

Isolate.$defineClass("_XMLHttpRequestEventsImpl", "_EventsImpl",
function _XMLHttpRequestEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_JavaScriptAudioNodeEventsImpl", "_EventsImpl",
function _JavaScriptAudioNodeEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("BadNumberFormatException", "Object",
function BadNumberFormatException(_lib2_s) {
  this._lib2_s = _lib2_s;
}, {
 get$_lib2_s: function() { return this._lib2_s; },
 toString$0: function() {
  return 'BadNumberFormatException: \'' + $.stringToString(this.get$_lib2_s()) + '\'';
 },
});

Isolate.$defineClass("_IDBDatabaseEventsImpl", "_EventsImpl",
function _IDBDatabaseEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_MessagePortEventsImpl", "_EventsImpl",
function _MessagePortEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$message: function() {
  return this._lib4_get$1('message');
 },
});

Isolate.$defineClass("_TextTrackCueEventsImpl", "_EventsImpl",
function _TextTrackCueEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("Closure15", "Closure19",
function Closure(this_2, box_0) {
  this.this_2 = this_2;
  this.box_0 = box_0;
}, {
 $call$2: function(key, value) {
  if (!(this.box_0.first_1 === true)) {
    $.add$1(this.this_2.get$_lib5_sb(), ',"');
  } else {
    $.add$1(this.this_2.get$_lib5_sb(), '"');
  }
  $._escape(this.this_2.get$_lib5_sb(), key);
  $.add$1(this.this_2.get$_lib5_sb(), '":');
  this.this_2._lib5_stringify$1(value);
  this.box_0.first_1 = false;
 },
});

Isolate.$defineClass("_ElementEventsImpl", "_EventsImpl",
function _ElementEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$keyPress: function() {
  return this._lib4_get$1('keypress');
 },
});

Isolate.$defineClass("Closure16", "Closure19",
function Closure(this_0) {
  this.this_0 = this_0;
}, {
 $call$1: function(value) {
  this.this_0.add$1(value);
 },
});

Isolate.$defineClass("MatchImplementation", "Object",
function MatchImplementation(_lib3_groups, _lib3_end, _lib3_start, str, pattern) {
  this._lib3_groups = _lib3_groups;
  this._lib3_end = _lib3_end;
  this._lib3_start = _lib3_start;
  this.str = str;
  this.pattern = pattern;
}, {
 operator$index$1: function(index) {
  return this.group$1(index);
 },
 group$1: function(index) {
  return $.index(this.get$_lib3_groups(), index);
 },
 get$_lib3_groups: function() { return this._lib3_groups; },
 get$pattern: function() { return this.pattern; },
});

Isolate.$defineClass("_XMLHttpRequestUploadEventsImpl", "_EventsImpl",
function _XMLHttpRequestUploadEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("UnsupportedOperationException", "Object",
function UnsupportedOperationException(_lib2_message) {
  this._lib2_message = _lib2_message;
}, {
 get$_lib2_message: function() { return this._lib2_message; },
 toString$0: function() {
  return 'UnsupportedOperationException: ' + $.stringToString(this.get$_lib2_message());
 },
});

Isolate.$defineClass("_DedicatedWorkerContextEventsImpl", "_WorkerContextEventsImpl",
function _DedicatedWorkerContextEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$message: function() {
  return this._lib4_get$1('message');
 },
});

Isolate.$defineClass("StackOverflowException", "Object",
function StackOverflowException() {
}, {
 toString$0: function() {
  return 'Stack Overflow';
 },
});

Isolate.$defineClass("StringBufferImpl", "Object",
function StringBufferImpl(_lib3_length, _lib3_buffer) {
  this._lib3_length = _lib3_length;
  this._lib3_buffer = _lib3_buffer;
}, {
 set$_lib3_length: function(v) { this._lib3_length = v; },
 get$_lib3_length: function() { return this._lib3_length; },
 set$_lib3_buffer: function(v) { this._lib3_buffer = v; },
 get$_lib3_buffer: function() { return this._lib3_buffer; },
 toString$0: function() {
  if ($.get$length(this.get$_lib3_buffer()) === 0) {
    return '';
  }
  if ($.get$length(this.get$_lib3_buffer()) === 1) {
    return $.index(this.get$_lib3_buffer(), 0);
  }
  var result = $.concatAll(this.get$_lib3_buffer());
  $.clear(this.get$_lib3_buffer());
  $.add$1(this.get$_lib3_buffer(), result);
  return result;
 },
 clear$0: function() {
  var t0 = $.List((void 0));
  $.setRuntimeTypeInfo(t0, ({E: 'String'}));
  this.set$_lib3_buffer(t0);
  this.set$_lib3_length(0);
  return this;
 },
 addAll$1: function(objects) {
  for (var t0 = $.iterator(objects); t0.hasNext$0() === true; ) {
    this.add$1(t0.next$0());
  }
  return this;
 },
 add$1: function(obj) {
  var str = $.toString(obj);
  if (str === (void 0) || $.isEmpty(str) === true) {
    return this;
  }
  $.add$1(this.get$_lib3_buffer(), str);
  this.set$_lib3_length($.add(this.get$_lib3_length(), $.get$length(str)));
  return this;
 },
 isEmpty$0: function() {
  return this.get$_lib3_length() === 0;
 },
 get$length: function() {
  return this.get$_lib3_length();
 },
 StringBufferImpl$1: function(content$) {
  this.clear$0();
  this.add$1(content$);
 },
});

Isolate.$defineClass("HashMapImplementation", "Object",
function HashMapImplementation(_lib3_numberOfDeleted, _lib3_numberOfEntries, _lib3_loadLimit, _lib3_values, _lib3_keys) {
  this._lib3_numberOfDeleted = _lib3_numberOfDeleted;
  this._lib3_numberOfEntries = _lib3_numberOfEntries;
  this._lib3_loadLimit = _lib3_loadLimit;
  this._lib3_values = _lib3_values;
  this._lib3_keys = _lib3_keys;
}, {
 toString$0: function() {
  return $.mapToString(this);
 },
 containsKey$1: function(key) {
  return !$.eqB(this._lib3_probeForLookup$1(key), -1);
 },
 forEach$1: function(f) {
  var length$ = $.get$length(this.get$_lib3_keys());
  if (typeof length$ !== 'number') return this.forEach$1$bailout(f, 1, length$);
  for (var i = 0; i < length$; i = i + 1) {
    var key = $.index(this.get$_lib3_keys(), i);
    if (!(key === (void 0)) && !(key === $.CTC7)) {
      f.$call$2(key, $.index(this.get$_lib3_values(), i));
    }
  }
 },
 forEach$1$bailout: function(f, state, env0) {
  switch (state) {
    case 1:
      length$ = env0;
      break;
  }
  switch (state) {
    case 0:
      var length$ = $.get$length(this.get$_lib3_keys());
    case 1:
      state = 0;
      var i = 0;
      L0: while (true) {
        if (!$.ltB(i, length$)) break L0;
        var key = $.index(this.get$_lib3_keys(), i);
        if (!(key === (void 0)) && !(key === $.CTC7)) {
          f.$call$2(key, $.index(this.get$_lib3_values(), i));
        }
        i = i + 1;
      }
  }
 },
 get$length: function() {
  return this.get$_lib3_numberOfEntries();
 },
 isEmpty$0: function() {
  return $.eq(this.get$_lib3_numberOfEntries(), 0);
 },
 operator$index$1: function(key) {
  var index = this._lib3_probeForLookup$1(key);
  if ($.ltB(index, 0)) {
    return;
  }
  return $.index(this.get$_lib3_values(), index);
 },
 operator$indexSet$2: function(key, value) {
  this._lib3_ensureCapacity$0();
  var index = this._lib3_probeForAdding$1(key);
  if ($.index(this.get$_lib3_keys(), index) === (void 0) || $.index(this.get$_lib3_keys(), index) === $.CTC7) {
    this.set$_lib3_numberOfEntries($.add(this.get$_lib3_numberOfEntries(), 1));
  }
  $.indexSet(this.get$_lib3_keys(), index, key);
  $.indexSet(this.get$_lib3_values(), index, value);
 },
 clear$0: function() {
  this.set$_lib3_numberOfEntries(0);
  this.set$_lib3_numberOfDeleted(0);
  var length$ = $.get$length(this.get$_lib3_keys());
  if (typeof length$ !== 'number') return this.clear$0$bailout(1, length$);
  for (var i = 0; i < length$; i = i + 1) {
    $.indexSet(this.get$_lib3_keys(), i, (void 0));
    $.indexSet(this.get$_lib3_values(), i, (void 0));
  }
 },
 clear$0$bailout: function(state, env0) {
  switch (state) {
    case 1:
      length$ = env0;
      break;
  }
  switch (state) {
    case 0:
      this.set$_lib3_numberOfEntries(0);
      this.set$_lib3_numberOfDeleted(0);
      var length$ = $.get$length(this.get$_lib3_keys());
    case 1:
      state = 0;
      var i = 0;
      L0: while (true) {
        if (!$.ltB(i, length$)) break L0;
        $.indexSet(this.get$_lib3_keys(), i, (void 0));
        $.indexSet(this.get$_lib3_values(), i, (void 0));
        i = i + 1;
      }
  }
 },
 _lib3_grow$1: function(newCapacity) {
  $.assert($._isPowerOfTwo(newCapacity));
  var capacity = $.get$length(this.get$_lib3_keys());
  if (typeof capacity !== 'number') return this._lib3_grow$1$bailout(newCapacity, 1, capacity);
  this.set$_lib3_loadLimit($._computeLoadLimit(newCapacity));
  var oldKeys = this.get$_lib3_keys();
  if (typeof oldKeys !== 'string' && (typeof oldKeys !== 'object'||oldKeys.constructor !== Array)) return this._lib3_grow$1$bailout(newCapacity, 2, capacity, oldKeys);
  var oldValues = this.get$_lib3_values();
  if (typeof oldValues !== 'string' && (typeof oldValues !== 'object'||oldValues.constructor !== Array)) return this._lib3_grow$1$bailout(newCapacity, 3, capacity, oldKeys, oldValues);
  this.set$_lib3_keys($.List(newCapacity));
  var t0 = $.List(newCapacity);
  $.setRuntimeTypeInfo(t0, ({E: 'V'}));
  this.set$_lib3_values(t0);
  for (var i = 0; i < capacity; i = i + 1) {
    var t1 = oldKeys.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = oldKeys[i];
    if (t2 === (void 0) || t2 === $.CTC7) {
      continue;
    }
    var t3 = oldValues.length;
    if (i < 0 || i >= t3) throw $.ioore(i);
    var t4 = oldValues[i];
    var newIndex = this._lib3_probeForAdding$1(t2);
    $.indexSet(this.get$_lib3_keys(), newIndex, t2);
    $.indexSet(this.get$_lib3_values(), newIndex, t4);
  }
  this.set$_lib3_numberOfDeleted(0);
 },
 _lib3_grow$1$bailout: function(newCapacity, state, env0, env1, env2) {
  switch (state) {
    case 1:
      capacity = env0;
      break;
    case 2:
      capacity = env0;
      oldKeys = env1;
      break;
    case 3:
      capacity = env0;
      oldKeys = env1;
      oldValues = env2;
      break;
  }
  switch (state) {
    case 0:
      $.assert($._isPowerOfTwo(newCapacity));
      var capacity = $.get$length(this.get$_lib3_keys());
    case 1:
      state = 0;
      this.set$_lib3_loadLimit($._computeLoadLimit(newCapacity));
      var oldKeys = this.get$_lib3_keys();
    case 2:
      state = 0;
      var oldValues = this.get$_lib3_values();
    case 3:
      state = 0;
      this.set$_lib3_keys($.List(newCapacity));
      var t0 = $.List(newCapacity);
      $.setRuntimeTypeInfo(t0, ({E: 'V'}));
      this.set$_lib3_values(t0);
      var i = 0;
      L0: while (true) {
        if (!$.ltB(i, capacity)) break L0;
        c$0:{
          var key = $.index(oldKeys, i);
          if (key === (void 0) || key === $.CTC7) {
            break c$0;
          }
          var value = $.index(oldValues, i);
          var newIndex = this._lib3_probeForAdding$1(key);
          $.indexSet(this.get$_lib3_keys(), newIndex, key);
          $.indexSet(this.get$_lib3_values(), newIndex, value);
        }
        i = i + 1;
      }
      this.set$_lib3_numberOfDeleted(0);
  }
 },
 _lib3_ensureCapacity$0: function() {
  var newNumberOfEntries = $.add(this.get$_lib3_numberOfEntries(), 1);
  if ($.geB(newNumberOfEntries, this.get$_lib3_loadLimit())) {
    this._lib3_grow$1($.mul($.get$length(this.get$_lib3_keys()), 2));
    return;
  }
  var numberOfFree = $.sub($.sub($.get$length(this.get$_lib3_keys()), newNumberOfEntries), this.get$_lib3_numberOfDeleted());
  if ($.gtB(this.get$_lib3_numberOfDeleted(), numberOfFree)) {
    this._lib3_grow$1($.get$length(this.get$_lib3_keys()));
  }
 },
 _lib3_probeForLookup$1: function(key) {
  for (var hash = $._firstProbe($.hashCode(key), $.get$length(this.get$_lib3_keys())), numberOfProbes = 1; true; ) {
    var existingKey = $.index(this.get$_lib3_keys(), hash);
    if (existingKey === (void 0)) {
      return -1;
    }
    if ($.eqB(existingKey, key)) {
      return hash;
    }
    var numberOfProbes0 = numberOfProbes + 1;
    var hash0 = $._nextProbe(hash, numberOfProbes, $.get$length(this.get$_lib3_keys()));
    hash = hash0;
    numberOfProbes = numberOfProbes0;
  }
 },
 _lib3_probeForAdding$1: function(key) {
  var hash = $._firstProbe($.hashCode(key), $.get$length(this.get$_lib3_keys()));
  if (hash !== (hash | 0)) return this._lib3_probeForAdding$1$bailout(key, 1, hash);
  for (var numberOfProbes = 1, hash0 = hash, insertionIndex = -1; true; ) {
    var existingKey = $.index(this.get$_lib3_keys(), hash0);
    if (existingKey === (void 0)) {
      if ($.ltB(insertionIndex, 0)) {
        return hash0;
      }
      return insertionIndex;
    } else {
      if ($.eqB(existingKey, key)) {
        return hash0;
      } else {
        if ($.ltB(insertionIndex, 0) && $.CTC7 === existingKey) {
          insertionIndex = hash0;
        }
        var numberOfProbes0 = numberOfProbes + 1;
      }
    }
    var hash1 = $._nextProbe(hash0, numberOfProbes, $.get$length(this.get$_lib3_keys()));
    numberOfProbes = numberOfProbes0;
    hash0 = hash1;
  }
 },
 _lib3_probeForAdding$1$bailout: function(key, state, env0) {
  switch (state) {
    case 1:
      hash = env0;
      break;
  }
  switch (state) {
    case 0:
      var hash = $._firstProbe($.hashCode(key), $.get$length(this.get$_lib3_keys()));
    case 1:
      state = 0;
      var numberOfProbes = 1;
      var hash0 = hash;
      var insertionIndex = -1;
      L0: while (true) {
        if (!true) break L0;
        var existingKey = $.index(this.get$_lib3_keys(), hash0);
        if (existingKey === (void 0)) {
          if ($.ltB(insertionIndex, 0)) {
            return hash0;
          }
          return insertionIndex;
        } else {
          if ($.eqB(existingKey, key)) {
            return hash0;
          } else {
            if ($.ltB(insertionIndex, 0) && $.CTC7 === existingKey) {
              insertionIndex = hash0;
            }
            var numberOfProbes0 = numberOfProbes + 1;
          }
        }
        var hash1 = $._nextProbe(hash0, numberOfProbes, $.get$length(this.get$_lib3_keys()));
        numberOfProbes = numberOfProbes0;
        hash0 = hash1;
      }
  }
 },
 set$_lib3_numberOfDeleted: function(v) { this._lib3_numberOfDeleted = v; },
 get$_lib3_numberOfDeleted: function() { return this._lib3_numberOfDeleted; },
 set$_lib3_numberOfEntries: function(v) { this._lib3_numberOfEntries = v; },
 get$_lib3_numberOfEntries: function() { return this._lib3_numberOfEntries; },
 set$_lib3_loadLimit: function(v) { this._lib3_loadLimit = v; },
 get$_lib3_loadLimit: function() { return this._lib3_loadLimit; },
 set$_lib3_values: function(v) { this._lib3_values = v; },
 get$_lib3_values: function() { return this._lib3_values; },
 set$_lib3_keys: function(v) { this._lib3_keys = v; },
 get$_lib3_keys: function() { return this._lib3_keys; },
 HashMapImplementation$0: function() {
  this.set$_lib3_numberOfEntries(0);
  this.set$_lib3_numberOfDeleted(0);
  this.set$_lib3_loadLimit($._computeLoadLimit(8));
  this.set$_lib3_keys($.List(8));
  var t0 = $.List(8);
  $.setRuntimeTypeInfo(t0, ({E: 'V'}));
  this.set$_lib3_values(t0);
 },
 is$Map: function() { return true; },
});

Isolate.$defineClass("_FileReaderEventsImpl", "_EventsImpl",
function _FileReaderEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_SharedWorkerContextEventsImpl", "_WorkerContextEventsImpl",
function _SharedWorkerContextEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_IDBVersionChangeRequestEventsImpl", "_IDBRequestEventsImpl",
function _IDBVersionChangeRequestEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("NoMoreElementsException", "Object",
function NoMoreElementsException() {
}, {
 toString$0: function() {
  return 'NoMoreElementsException';
 },
});

Isolate.$defineClass("Closure17", "Closure19",
function Closure(box_0) {
  this.box_0 = box_0;
}, {
 $call$2: function(key, value) {
  this.box_0.f_1.$call$1(key);
 },
});

Isolate.$defineClass("_FrameSetElementEventsImpl", "_ElementEventsImpl",
function _FrameSetElementEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$message: function() {
  return this._lib4_get$1('message');
 },
});

Isolate.$defineClass("_FileWriterEventsImpl", "_EventsImpl",
function _FileWriterEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("NoSuchMethodException", "Object",
function NoSuchMethodException(_lib2_existingArgumentNames, _lib2_arguments, _lib2_functionName, _lib2_receiver) {
  this._lib2_existingArgumentNames = _lib2_existingArgumentNames;
  this._lib2_arguments = _lib2_arguments;
  this._lib2_functionName = _lib2_functionName;
  this._lib2_receiver = _lib2_receiver;
}, {
 get$_lib2_existingArgumentNames: function() { return this._lib2_existingArgumentNames; },
 get$_lib2_arguments: function() { return this._lib2_arguments; },
 get$_lib2_functionName: function() { return this._lib2_functionName; },
 get$_lib2_receiver: function() { return this._lib2_receiver; },
 toString$0: function() {
  var sb = $.StringBufferImpl$1('');
  for (var i = 0; $.ltB(i, $.get$length(this.get$_lib2_arguments())); i = i + 1) {
    if (i > 0) {
      sb.add$1(', ');
    }
    sb.add$1($.index(this.get$_lib2_arguments(), i));
  }
  if (this.get$_lib2_existingArgumentNames() === (void 0)) {
    return 'NoSuchMethodException : method not found: \'' + $.stringToString(this.get$_lib2_functionName()) + '\'\nReceiver: ' + $.stringToString(this.get$_lib2_receiver()) + '\nArguments: [' + $.stringToString(sb) + ']';
  } else {
    var actualParameters = sb.toString$0();
    var sb0 = $.StringBufferImpl$1('');
    for (var i0 = 0; $.ltB(i0, $.get$length(this.get$_lib2_existingArgumentNames())); i0 = i0 + 1) {
      if (i0 > 0) {
        sb0.add$1(', ');
      }
      sb0.add$1($.index(this.get$_lib2_existingArgumentNames(), i0));
    }
    var formalParameters = sb0.toString$0();
    return 'NoSuchMethodException: incorrect number of arguments passed to method named \'' + $.stringToString(this.get$_lib2_functionName()) + '\'\nReceiver: ' + $.stringToString(this.get$_lib2_receiver()) + '\nTried calling: ' + $.stringToString(this.get$_lib2_functionName()) + '(' + $.stringToString(actualParameters) + ')\nFound: ' + $.stringToString(this.get$_lib2_functionName()) + '(' + $.stringToString(formalParameters) + ')';
  }
 },
});

Isolate.$defineClass("_FrozenElementList", "Object",
function _FrozenElementList(_lib4_nodeList) {
  this._lib4_nodeList = _lib4_nodeList;
}, {
 last$0: function() {
  return $.last(this.get$_lib4_nodeList());
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.CTC4);
 },
 clear$0: function() {
  throw $.captureStackTrace($.CTC4);
 },
 indexOf$2: function(element, start) {
  return $.indexOf$2(this.get$_lib4_nodeList(), element, start);
 },
 getRange$2: function(start, rangeLength) {
  return $._lib4_FrozenElementList$_wrap$1($.getRange(this.get$_lib4_nodeList(), start, rangeLength));
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.CTC4);
 },
 iterator$0: function() {
  return $._lib4_FrozenElementListIterator$1(this);
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.CTC4);
 },
 add$1: function(value) {
  throw $.captureStackTrace($.CTC4);
 },
 set$length: function(newLength) {
  $.set$length(this.get$_lib4_nodeList(), newLength);
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.CTC4);
 },
 operator$index$1: function(index) {
  return $.index(this.get$_lib4_nodeList(), index);
 },
 get$length: function() {
  return $.get$length(this.get$_lib4_nodeList());
 },
 isEmpty$0: function() {
  return $.isEmpty(this.get$_lib4_nodeList());
 },
 filter$1: function(f) {
  var out = $._lib4_ElementList$1([]);
  for (var t0 = this.iterator$0(); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    if (f.$call$1(t1) === true) {
      out.add$1(t1);
    }
  }
  return out;
 },
 forEach$1: function(f) {
  for (var t0 = this.iterator$0(); t0.hasNext$0() === true; ) {
    f.$call$1(t0.next$0());
  }
 },
 get$first: function() {
  return $.index(this.get$_lib4_nodeList(), 0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 get$_lib4_nodeList: function() { return this._lib4_nodeList; },
 is$List2: function() { return true; },
 is$Collection: function() { return true; },
});

Isolate.$defineClass("_AbstractWorkerEventsImpl", "_EventsImpl",
function _AbstractWorkerEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("HashSetIterator", "Object",
function HashSetIterator(_lib3_nextValidIndex, _lib3_entries) {
  this._lib3_nextValidIndex = _lib3_nextValidIndex;
  this._lib3_entries = _lib3_entries;
}, {
 set$_lib3_nextValidIndex: function(v) { this._lib3_nextValidIndex = v; },
 get$_lib3_nextValidIndex: function() { return this._lib3_nextValidIndex; },
 get$_lib3_entries: function() { return this._lib3_entries; },
 _lib3_advance$0: function() {
  var length$ = $.get$length(this.get$_lib3_entries());
  if (typeof length$ !== 'number') return this._lib3_advance$0$bailout(1, length$);
  var entry = (void 0);
  do {
    var t0 = $.add(this.get$_lib3_nextValidIndex(), 1);
    this.set$_lib3_nextValidIndex(t0);
    if ($.geB(t0, length$)) {
      break;
    }
    entry = $.index(this.get$_lib3_entries(), this.get$_lib3_nextValidIndex());
  } while (entry === (void 0) || entry === $.CTC7);
 },
 _lib3_advance$0$bailout: function(state, env0) {
  switch (state) {
    case 1:
      length$ = env0;
      break;
  }
  switch (state) {
    case 0:
      var length$ = $.get$length(this.get$_lib3_entries());
    case 1:
      state = 0;
      var entry = (void 0);
      L0: while (true) {
        var t0 = $.add(this.get$_lib3_nextValidIndex(), 1);
        this.set$_lib3_nextValidIndex(t0);
        if ($.geB(t0, length$)) {
          break;
        }
        entry = $.index(this.get$_lib3_entries(), this.get$_lib3_nextValidIndex());
        if (!(entry === (void 0) || entry === $.CTC7)) break L0;
      }
  }
 },
 next$0: function() {
  if (!(this.hasNext$0() === true)) {
    throw $.captureStackTrace($.CTC2);
  }
  var res = $.index(this.get$_lib3_entries(), this.get$_lib3_nextValidIndex());
  this._lib3_advance$0();
  return res;
 },
 hasNext$0: function() {
  if ($.geB(this.get$_lib3_nextValidIndex(), $.get$length(this.get$_lib3_entries()))) {
    return false;
  }
  if ($.index(this.get$_lib3_entries(), this.get$_lib3_nextValidIndex()) === $.CTC7) {
    this._lib3_advance$0();
  }
  return $.lt(this.get$_lib3_nextValidIndex(), $.get$length(this.get$_lib3_entries()));
 },
 HashSetIterator$1: function(set_) {
  this._lib3_advance$0();
 },
});

Isolate.$defineClass("IllegalArgumentException", "Object",
function IllegalArgumentException(_lib2_arg) {
  this._lib2_arg = _lib2_arg;
}, {
 get$_lib2_arg: function() { return this._lib2_arg; },
 toString$0: function() {
  return 'Illegal argument(s): ' + $.stringToString(this.get$_lib2_arg());
 },
});

Isolate.$defineClass("_MediaElementEventsImpl", "_ElementEventsImpl",
function _MediaElementEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_IDBTransactionEventsImpl", "_EventsImpl",
function _IDBTransactionEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
});

Isolate.$defineClass("_BodyElementEventsImpl", "_ElementEventsImpl",
function _BodyElementEventsImpl(_EventsImpl__lib4_ptr) {
  this._lib4_ptr = _EventsImpl__lib4_ptr;
}, {
 get$message: function() {
  return this._lib4_get$1('message');
 },
});

Isolate.$defineClass("_AllMatchesIterator", "Object",
function _AllMatchesIterator(_lib3_done, _lib3_next, _lib3_str, _lib3_re) {
  this._lib3_done = _lib3_done;
  this._lib3_next = _lib3_next;
  this._lib3_str = _lib3_str;
  this._lib3_re = _lib3_re;
}, {
 hasNext$0: function() {
  if (this.get$_lib3_done() === true) {
    return false;
  } else {
    if (!$.eqNullB(this.get$_lib3_next())) {
      return true;
    }
  }
  this.set$_lib3_next(this.get$_lib3_re().firstMatch$1(this.get$_lib3_str()));
  if ($.eqNullB(this.get$_lib3_next())) {
    this.set$_lib3_done(true);
    return false;
  } else {
    return true;
  }
 },
 next$0: function() {
  if (!(this.hasNext$0() === true)) {
    throw $.captureStackTrace($.CTC2);
  }
  var next = this.get$_lib3_next();
  this.set$_lib3_next((void 0));
  return next;
 },
 set$_lib3_done: function(v) { this._lib3_done = v; },
 get$_lib3_done: function() { return this._lib3_done; },
 set$_lib3_next: function(v) { this._lib3_next = v; },
 get$_lib3_next: function() { return this._lib3_next; },
 get$_lib3_str: function() { return this._lib3_str; },
 get$_lib3_re: function() { return this._lib3_re; },
});

Isolate.$defineClass("Closure19", "Object",
function Closure() {
}, {
 toString$0: function() {
  return 'Closure';
 },
});

Isolate.$defineClass('Closure20', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$2: function(arg0, arg1) {
  return this.self.close$2(arg0, arg1);
},
$call$0: function() {
  return this.$call$2((void 0),(void 0))
},
$call$1: function(code) {
  return this.$call$2(code,(void 0))
},
});
Isolate.$defineClass('Closure21', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure22', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure23', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure24', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$1: function(arg0) {
  return this.self.add$1(arg0);
},
});
Isolate.$defineClass('Closure25', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$1: function(arg0) {
  return this.self.open$1(arg0);
},
});
Isolate.$defineClass('Closure26', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.first$0();
},
});
Isolate.$defineClass('Closure27', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$5: function(arg0, arg1, arg2, arg3, arg4) {
  return this.self.open$5(arg0, arg1, arg2, arg3, arg4);
},
$call$2: function(method,url) {
  return this.$call$5(method,url,(void 0),(void 0),(void 0))
},
});
Isolate.$defineClass('Closure28', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure29', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$3: function(arg0, arg1, arg2) {
  return this.self.open$3(arg0, arg1, arg2);
},
$call$2: function(url,name$) {
  return this.$call$3(url,name$,(void 0))
},
});
Isolate.$defineClass('Closure30', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure31', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure32', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure33', 'Closure19', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
$._lib4_ChildNodeListLazy$1 = function(_this) {
  return new $._ChildNodeListLazy(_this);
};

$._lib4_AudioContextEventsImpl$1 = function(_ptr) {
  return new $._AudioContextEventsImpl(_ptr);
};

$.floor = function(receiver) {
  if (!(typeof receiver === 'number')) {
    return receiver.floor$0();
  }
  return Math.floor(receiver);
};

$.eqB = function(a, b) {
  return $.eq(a, b) === true;
};

$._containsRef = function(c, ref) {
  for (var t0 = $.iterator(c); t0.hasNext$0() === true; ) {
    if (t0.next$0() === ref) {
      return true;
    }
  }
  return false;
};

$.forEach2 = function(iterable, f) {
  for (var t0 = $.iterator(iterable); t0.hasNext$0() === true; ) {
    f.$call$1(t0.next$0());
  }
};

$._lib4_NodeListWrapper$1 = function(list) {
  return new $._NodeListWrapper(list);
};

$.isJsArray = function(value) {
  return !(value === (void 0)) && (value.constructor === Array);
};

$._nextProbe = function(currentProbe, numberOfProbes, length$) {
  return $.and($.add(currentProbe, numberOfProbes), $.sub(length$, 1));
};

$.allMatches = function(receiver, str) {
  if (!(typeof receiver === 'string')) {
    return receiver.allMatches$1(str);
  }
  $.checkString(str);
  return $.allMatchesInStringUnchecked(receiver, str);
};

$.substringUnchecked = function(receiver, startIndex, endIndex) {
  return receiver.substring(startIndex, endIndex);
};

$.get$length = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver) === true) {
    return receiver.length;
  } else {
    return receiver.get$length();
  }
};

$.IllegalJSRegExpException$2 = function(_pattern, _errmsg) {
  return new $.IllegalJSRegExpException(_errmsg, _pattern);
};

$.clear = function(receiver) {
  if (!($.isJsArray(receiver) === true)) {
    return receiver.clear$0();
  }
  $.set$length(receiver, 0);
};

$.regExpMatchStart = function(m) {
  return m.index;
};

$.constructorNameFallback = function(obj) {
  var constructor$ = (obj.constructor);
  if ((typeof(constructor$)) === 'function') {
    var name$ = (constructor$.name);
    if ((typeof(name$)) === 'string' && !($.isEmpty(name$) === true) && !(name$ === 'Object')) {
      return name$;
    }
  }
  var string = (Object.prototype.toString.call(obj));
  return $.substring$2(string, 8, string.length - 1);
};

$.NullPointerException$2 = function(functionName, arguments$) {
  return new $.NullPointerException(arguments$, functionName);
};

$.typeNameInIE = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if ($.eqB(name$, 'Window')) {
    return 'DOMWindow';
  }
  if ($.eqB(name$, 'Document')) {
    if (!!obj.xmlVersion) {
      return 'Document';
    }
    return 'HTMLDocument';
  }
  if ($.eqB(name$, 'HTMLTableDataCellElement')) {
    return 'HTMLTableCellElement';
  }
  if ($.eqB(name$, 'HTMLTableHeaderCellElement')) {
    return 'HTMLTableCellElement';
  }
  if ($.eqB(name$, 'MSStyleCSSProperties')) {
    return 'CSSStyleDeclaration';
  }
  if ($.eqB(name$, 'CanvasPixelArray')) {
    return 'Uint8ClampedArray';
  }
  if ($.eqB(name$, 'HTMLPhraseElement')) {
    return 'HTMLElement';
  }
  return name$;
};

$.JSSyntaxRegExp$_globalVersionOf$1 = function(other) {
  var t0 = other.get$pattern();
  var t1 = other.get$multiLine();
  var t2 = new $.JSSyntaxRegExp(other.get$ignoreCase(), t1, t0);
  t2.JSSyntaxRegExp$_globalVersionOf$1(other);
  return t2;
};

$.tdiv = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return $.truncate($.div(a, b));
  }
  return a.operator$tdiv$1(b);
};

$.printString = function(string) {
  if (typeof console == "object") {
    console.log(string);
  } else {
    write(string);
    write("\n");
  }
};

$.typeNameInChrome = function(obj) {
  var name$ = (obj.constructor.name);
  if (name$ === 'Window') {
    return 'DOMWindow';
  }
  if (name$ === 'CanvasPixelArray') {
    return 'Uint8ClampedArray';
  }
  return name$;
};

$.shr = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    if ($.ltB(b, 0)) {
      throw $.captureStackTrace($.IllegalArgumentException$1(b));
    }
    return a >>> b;
  }
  return a.operator$shr$1(b);
};

$.eqNull = function(a) {
  if (typeof a === "object") {
    if (!!a.operator$eq$1) {
      return a.operator$eq$1((void 0));
    } else {
      return false;
    }
  } else {
    return typeof a === "undefined";
  }
};

$.and = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return (a & b) >>> 0;
  }
  return a.operator$and$1(b);
};

$.substring$2 = function(receiver, startIndex, endIndex) {
  if (!(typeof receiver === 'string')) {
    return receiver.substring$2(startIndex, endIndex);
  }
  $.checkNum(startIndex);
  var length$ = receiver.length;
  var endIndex0 = endIndex;
  if (endIndex === (void 0)) {
    endIndex0 = length$;
  }
  $.checkNum(endIndex0);
  if ($.ltB(startIndex, 0)) {
    throw $.captureStackTrace($.IndexOutOfRangeException$1(startIndex));
  }
  if ($.gtB(startIndex, endIndex0)) {
    throw $.captureStackTrace($.IndexOutOfRangeException$1(startIndex));
  }
  if ($.gtB(endIndex0, length$)) {
    throw $.captureStackTrace($.IndexOutOfRangeException$1(endIndex0));
  }
  return $.substringUnchecked(receiver, startIndex, endIndex0);
};

$.indexSet = function(a, index, value) {
  if ($.isJsArray(a) === true) {
    if (!((typeof index === 'number') && (index === (index | 0)))) {
      throw $.captureStackTrace($.IllegalArgumentException$1(index));
    }
    if (index < 0 || $.geB(index, $.get$length(a))) {
      throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
    }
    $.checkMutable(a, 'indexed set');
    a[index] = value;
    return;
  }
  a.operator$indexSet$2(index, value);
};

$._lib4_DOMApplicationCacheEventsImpl$1 = function(_ptr) {
  return new $._DOMApplicationCacheEventsImpl(_ptr);
};

$.ExceptionImplementation$1 = function(msg) {
  return new $.ExceptionImplementation(msg);
};

$.StringMatch$3 = function(_start, str, pattern) {
  return new $.StringMatch(pattern, str, _start);
};

$.DoubleLinkedQueueEntry$1 = function(e) {
  var t0 = new $.DoubleLinkedQueueEntry((void 0), (void 0), (void 0));
  t0.DoubleLinkedQueueEntry$1(e);
  return t0;
};

$.invokeClosure = function(closure, isolate, numberOfArguments, arg1, arg2) {
  var t0 = ({});
  t0.arg2_3 = arg2;
  t0.arg1_2 = arg1;
  t0.closure_1 = closure;
  if ($.eqB(numberOfArguments, 0)) {
    return new $.Closure7(t0).$call$0();
  } else {
    if ($.eqB(numberOfArguments, 1)) {
      return new $.Closure8(t0).$call$0();
    } else {
      if ($.eqB(numberOfArguments, 2)) {
        return new $.Closure9(t0).$call$0();
      } else {
        throw $.captureStackTrace($.ExceptionImplementation$1('Unsupported number of arguments for wrapped closure'));
      }
    }
  }
};

$.last = function(receiver) {
  if (!($.isJsArray(receiver) === true)) {
    return receiver.last$0();
  }
  return $.index(receiver, $.sub($.get$length(receiver), 1));
};

$.gt = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a > b;
  }
  return a.operator$gt$1(b);
};

$.String$fromCharCodes = function(charCodes) {
  return $.createFromCharCodes(charCodes);
};

$.assert = function(condition) {
};

$.filter = function(receiver, predicate) {
  if (!($.isJsArray(receiver) === true)) {
    return receiver.filter$1(predicate);
  } else {
    return $.filter2(receiver, [], predicate);
  }
};

$.buildDynamicMetadata = function(inputTable) {
  if (typeof inputTable !== 'string' && (typeof inputTable !== 'object'||inputTable.constructor !== Array)) return $.buildDynamicMetadata$bailout(inputTable,  0);
  var result = [];
  for (var i = 0; i < inputTable.length; i = i + 1) {
    var t0 = inputTable.length;
    if (i < 0 || i >= t0) throw $.ioore(i);
    var tag = $.index(inputTable[i], 0);
    var t1 = inputTable.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var tags = $.index(inputTable[i], 1);
    var set = $.HashSetImplementation$0();
    $.setRuntimeTypeInfo(set, ({E: 'String'}));
    var tagNames = $.split(tags, '|');
    if (typeof tagNames !== 'string' && (typeof tagNames !== 'object'||tagNames.constructor !== Array)) return $.buildDynamicMetadata$bailout(inputTable, 2, inputTable, result, tag, i, tags, set, tagNames);
    for (var j = 0; j < tagNames.length; j = j + 1) {
      var t2 = tagNames.length;
      if (j < 0 || j >= t2) throw $.ioore(j);
      set.add$1(tagNames[j]);
    }
    $.add$1(result, $.MetaInfo$3(tag, tags, set));
  }
  return result;
};

$.filter2 = function(source, destination, f) {
  for (var t0 = $.iterator(source); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    if (f.$call$1(t1) === true) {
      $.add$1(destination, t1);
    }
  }
  return destination;
};

$.contains$1 = function(receiver, other) {
  if (!(typeof receiver === 'string')) {
    return receiver.contains$1(other);
  }
  return $.contains$2(receiver, other, 0);
};

$._lib4_EventSourceEventsImpl$1 = function(_ptr) {
  return new $._EventSourceEventsImpl(_ptr);
};

$.filter3 = function(source, destination, f) {
  for (var t0 = $.iterator(source); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    if (f.$call$1(t1) === true) {
      $.add$1(destination, t1);
    }
  }
  return destination;
};

$.mul = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a * b;
  }
  return a.operator$mul$1(b);
};

$.parseInt = function(str) {
  return $.parseInt2(str);
};

$._lib4_NotificationEventsImpl$1 = function(_ptr) {
  return new $._NotificationEventsImpl(_ptr);
};

$.parseInt2 = function(str) {
  $.checkString(str);
  if (!(/^\s*[+-]?(?:0[xX][abcdefABCDEF0-9]+|\d+)\s*$/.test(str))) {
    throw $.captureStackTrace($.BadNumberFormatException$1(str));
  }
  var trimmed = $.trim(str);
  var base = 10;
  if ($.gtB($.get$length(trimmed), 2) && ($.eqB($.index(trimmed, 1), 'x') || $.eqB($.index(trimmed, 1), 'X')) || $.gtB($.get$length(trimmed), 3) && ($.eqB($.index(trimmed, 2), 'x') || $.eqB($.index(trimmed, 2), 'X'))) {
    base = 16;
  }
  var ret = (parseInt(trimmed, base));
  if ($.isNaN(ret) === true) {
    throw $.captureStackTrace($.BadNumberFormatException$1(str));
  }
  return ret;
};

$._browserPrefix = function() {
  if ($._cachedBrowserPrefix === (void 0)) {
    if ($.isFirefox() === true) {
      $._cachedBrowserPrefix = '-moz-';
    } else {
      $._cachedBrowserPrefix = '-webkit-';
    }
  }
  return $._cachedBrowserPrefix;
};

$._emitCollection = function(c, result, visiting) {
  $.add$1(visiting, c);
  var isList = typeof c === 'object' && (c.constructor === Array || c.is$List2());
  if (isList) {
    var t0 = '[';
  } else {
    t0 = '{';
  }
  $.add$1(result, t0);
  for (var t1 = $.iterator(c), first = true; t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    if (!first) {
      $.add$1(result, ', ');
    }
    $._emitObject(t2, result, visiting);
    first = false;
  }
  if (isList) {
    var t3 = ']';
  } else {
    t3 = '}';
  }
  $.add$1(result, t3);
  $.removeLast(visiting);
};

$.checkMutable = function(list, reason) {
  if (!!(list.immutable$list)) {
    throw $.captureStackTrace($.UnsupportedOperationException$1(reason));
  }
};

$._numberToString = function(x) {
  $0:{
    if (typeof x === 'number' && x === (x | 0)) {
      return $.toString(x);
    } else {
      if (typeof x === 'number') {
        return $.toString(x);
      } else {
        return $.toString($.toDouble(x));
      }
    }
  }
};

$.toStringWrapper = function() {
  return $.toString((this.dartException));
};

$._lib4_PeerConnection00EventsImpl$1 = function(_ptr) {
  return new $._PeerConnection00EventsImpl(_ptr);
};

$._lib4_ElementList$1 = function(list) {
  return new $._ElementList(list);
};

$._lib4_WorkerContextEventsImpl$1 = function(_ptr) {
  return new $._WorkerContextEventsImpl(_ptr);
};

$._lib4_DocumentEventsImpl$1 = function(_ptr) {
  return new $._DocumentEventsImpl(_ptr);
};

$.regExpTest = function(regExp, str) {
  return $.regExpGetNative(regExp).test(str);
};

$.WebSocket = function(url) {
  return new WebSocket(url);;
};

$.isEmpty = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver) === true) {
    return receiver.length === 0;
  }
  return receiver.isEmpty$0();
};

$._lib4_EventsImpl$1 = function(_ptr) {
  return new $._EventsImpl(_ptr);
};

$.HashSetImplementation$0 = function() {
  var t0 = new $.HashSetImplementation((void 0));
  t0.HashSetImplementation$0();
  return t0;
};

$._lib4_IDBRequestEventsImpl$1 = function(_ptr) {
  return new $._IDBRequestEventsImpl(_ptr);
};

$.stringSplitUnchecked = function(receiver, pattern) {
  if (typeof pattern === 'string') {
    return receiver.split(pattern);
  } else {
    if (typeof pattern === 'object' && !!pattern.is$JSSyntaxRegExp) {
      return receiver.split($.regExpGetNative(pattern));
    } else {
      throw $.captureStackTrace('StringImplementation.split(Pattern) UNIMPLEMENTED');
    }
  }
};

$.checkGrowable = function(list, reason) {
  if (!!(list.fixed$length)) {
    throw $.captureStackTrace($.UnsupportedOperationException$1(reason));
  }
};

$._lib4_SpeechRecognitionEventsImpl$1 = function(_ptr) {
  return new $._SpeechRecognitionEventsImpl(_ptr);
};

$._lib4_SVGElementInstanceEventsImpl$1 = function(_ptr) {
  return new $._SVGElementInstanceEventsImpl(_ptr);
};

$._lib5_JsonParser$_internal$1 = function(json) {
  var t0 = new $._JsonParser(0, $.get$length(json), json);
  t0._lib5_JsonParser$_internal$1(json);
  return t0;
};

$.add$1 = function(receiver, value) {
  if ($.isJsArray(receiver) === true) {
    $.checkGrowable(receiver, 'add');
    receiver.push(value);
    return;
  }
  return receiver.add$1(value);
};

$.iterator = function(receiver) {
  if ($.isJsArray(receiver) === true) {
    return $.ListIterator$1(receiver);
  }
  return receiver.iterator$0();
};

$.regExpExec = function(regExp, str) {
  var result = ($.regExpGetNative(regExp).exec(str));
  if (result === null) {
    return;
  }
  return result;
};

$.geB = function(a, b) {
  return $.ge(a, b) === true;
};

$.stringContainsUnchecked = function(receiver, other, startIndex) {
  if (typeof other === 'string') {
    return !($.indexOf$2(receiver, other, startIndex) === -1);
  } else {
    if (typeof other === 'object' && !!other.is$JSSyntaxRegExp) {
      return other.hasMatch$1($.substring$1(receiver, startIndex));
    } else {
      return $.iterator($.allMatches(other, $.substring$1(receiver, startIndex))).hasNext$0();
    }
  }
};

$.ObjectNotClosureException$0 = function() {
  return new $.ObjectNotClosureException();
};

$.window = function() {
  return window;;
};

$.add = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a + b;
  } else {
    if (typeof a === 'string') {
      var b0 = $.toString(b);
      if (typeof b0 === 'string') {
        return a + b0;
      }
      $.checkNull(b0);
      throw $.captureStackTrace($.IllegalArgumentException$1(b0));
    }
  }
  return a.operator$add$1(b);
};

$.regExpAttachGlobalNative = function(regExp) {
  regExp._re = $.regExpMakeNative(regExp, true);
};

$.leB = function(a, b) {
  return $.le(a, b) === true;
};

$.regExpMakeNative = function(regExp, global) {
  var pattern = regExp.get$pattern();
  var multiLine = regExp.get$multiLine();
  var ignoreCase = regExp.get$ignoreCase();
  $.checkString(pattern);
  var sb = $.StringBufferImpl$1('');
  if (multiLine === true) {
    $.add$1(sb, 'm');
  }
  if (ignoreCase === true) {
    $.add$1(sb, 'i');
  }
  if (global === true) {
    $.add$1(sb, 'g');
  }
  try {
    return new RegExp(pattern, $.toString(sb));
  }catch (t0) {
    var t1 = $.unwrapException(t0);
    var e = t1;
    throw $.captureStackTrace($.IllegalJSRegExpException$2(pattern, (String(e))));
  }
};

$.BadNumberFormatException$1 = function(_s) {
  return new $.BadNumberFormatException(_s);
};

$.stringify = function(object) {
  return $.stringify2(object);
};

$.stringify2 = function(object) {
  var stringifier = $.JsonStringifier$_internal$0();
  stringifier._lib5_stringify$1(object);
  return stringifier.get$_lib5_result();
};

$._lib4_FrozenElementListIterator$1 = function(_list) {
  return new $._FrozenElementListIterator(0, _list);
};

$.mapToString = function(m) {
  var result = $.StringBufferImpl$1('');
  $._emitMap(m, result, $.List((void 0)));
  return result.toString$0();
};

$._lib4_XMLHttpRequestEventsImpl$1 = function(_ptr) {
  return new $._XMLHttpRequestEventsImpl(_ptr);
};

$._lib4_JavaScriptAudioNodeEventsImpl$1 = function(_ptr) {
  return new $._JavaScriptAudioNodeEventsImpl(_ptr);
};

$._emitObject = function(o, result, visiting) {
  if (typeof o === 'object' && (o.constructor === Array || o.is$Collection())) {
    if ($._containsRef(visiting, o) === true) {
      if (typeof o === 'object' && (o.constructor === Array || o.is$List2())) {
        var t0 = '[...]';
      } else {
        t0 = '{...}';
      }
      $.add$1(result, t0);
    } else {
      $._emitCollection(o, result, visiting);
    }
  } else {
    if (typeof o === 'object' && o.is$Map()) {
      if ($._containsRef(visiting, o) === true) {
        $.add$1(result, '{...}');
      } else {
        $._emitMap(o, result, visiting);
      }
    } else {
      if ($.eqNullB(o)) {
        var t1 = 'null';
      } else {
        t1 = o;
      }
      $.add$1(result, t1);
    }
  }
};

$._emitMap = function(m, result, visiting) {
  var t0 = ({});
  t0.visiting_2 = visiting;
  t0.result_1 = result;
  $.add$1(t0.visiting_2, m);
  $.add$1(t0.result_1, '{');
  t0.first_3 = true;
  $.forEach(m, new $.Closure6(t0));
  $.add$1(t0.result_1, '}');
  $.removeLast(t0.visiting_2);
};

$._lib4_IDBDatabaseEventsImpl$1 = function(_ptr) {
  return new $._IDBDatabaseEventsImpl(_ptr);
};

$.isFirefox = function() {
  return $.contains$2($.userAgent(), 'Firefox', 0);
};

$.ge = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a >= b;
  }
  return a.operator$ge$1(b);
};

$._lib4_TextTrackCueEventsImpl$1 = function(_ptr) {
  return new $._TextTrackCueEventsImpl(_ptr);
};

$.MatchImplementation$5 = function(pattern, str, _start, _end, _groups) {
  return new $.MatchImplementation(_groups, _end, _start, str, pattern);
};

$.UnsupportedOperationException$1 = function(_message) {
  return new $.UnsupportedOperationException(_message);
};

$.indexOf$2 = function(receiver, element, start) {
  if ($.isJsArray(receiver) === true) {
    if (!((typeof start === 'number') && (start === (start | 0)))) {
      throw $.captureStackTrace($.IllegalArgumentException$1(start));
    }
    return $.indexOf(receiver, element, start, (receiver.length));
  } else {
    if (typeof receiver === 'string') {
      $.checkNull(element);
      if (!((typeof start === 'number') && (start === (start | 0)))) {
        throw $.captureStackTrace($.IllegalArgumentException$1(start));
      }
      if (!(typeof element === 'string')) {
        throw $.captureStackTrace($.IllegalArgumentException$1(element));
      }
      if (start < 0) {
        return -1;
      }
      return receiver.indexOf(element, start);
    }
  }
  return receiver.indexOf$2(element, start);
};

$._lib4_DedicatedWorkerContextEventsImpl$1 = function(_ptr) {
  return new $._DedicatedWorkerContextEventsImpl(_ptr);
};

$._lib4_FileReaderEventsImpl$1 = function(_ptr) {
  return new $._FileReaderEventsImpl(_ptr);
};

$.NoMoreElementsException$0 = function() {
  return new $.NoMoreElementsException();
};

$.eqNullB = function(a) {
  return $.eqNull(a) === true;
};

$.Element$tag = function(tag) {
  return document.createElement(tag);
};

$._lib4_FrameSetElementEventsImpl$1 = function(_ptr) {
  return new $._FrameSetElementEventsImpl(_ptr);
};

$.List$from = function(other) {
  var result = $.List((void 0));
  $.setRuntimeTypeInfo(result, ({E: 'E'}));
  var iterator = $.iterator(other);
  for (; iterator.hasNext$0() === true; ) {
    result.push(iterator.next$0());
  }
  return result;
};

$.newList = function(length$) {
  if (length$ === (void 0)) {
    return new Array();
  }
  var t0 = typeof length$ === 'number' && length$ === (length$ | 0);
  var t1 = !t0;
  if (t0) {
    t1 = length$ < 0;
  }
  if (t1) {
    throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  }
  var result = (new Array(length$));
  result.fixed$length = true;
  return result;
};

$.main = function() {
  $.ChatClient$0().run$0();
};

$._lib4_AbstractWorkerEventsImpl$1 = function(_ptr) {
  return new $._AbstractWorkerEventsImpl(_ptr);
};

$._computeLoadLimit = function(capacity) {
  return $.tdiv($.mul(capacity, 3), 4);
};

$.HashSetIterator$1 = function(set_) {
  var t0 = new $.HashSetIterator(-1, set_.get$_lib3_backingMap().get$_lib3_keys());
  t0.HashSetIterator$1(set_);
  return t0;
};

$.IllegalArgumentException$1 = function(arg) {
  return new $.IllegalArgumentException(arg);
};

$._lib4_MediaElementEventsImpl$1 = function(_ptr) {
  return new $._MediaElementEventsImpl(_ptr);
};

$._lib4_BodyElementEventsImpl$1 = function(_ptr) {
  return new $._BodyElementEventsImpl(_ptr);
};

$._lib4_IDBTransactionEventsImpl$1 = function(_ptr) {
  return new $._IDBTransactionEventsImpl(_ptr);
};

$._lib3_AllMatchesIterator$2 = function(re, _str) {
  return new $._AllMatchesIterator(false, (void 0), _str, $.JSSyntaxRegExp$_globalVersionOf$1(re));
};

$.iae = function(argument) {
  throw $.captureStackTrace($.IllegalArgumentException$1(argument));
};

$.truncate = function(receiver) {
  if (!(typeof receiver === 'number')) {
    return receiver.truncate$0();
  }
  if (receiver < 0) {
    var t0 = $.ceil(receiver);
  } else {
    t0 = $.floor(receiver);
  }
  return t0;
};

$.isNaN = function(receiver) {
  if (typeof receiver === 'number') {
    return isNaN(receiver);
  } else {
    return receiver.isNegative$0();
  }
};

$.allMatchesInStringUnchecked = function(needle, haystack) {
  var result = $.List((void 0));
  $.setRuntimeTypeInfo(result, ({E: 'Match'}));
  var length$ = $.get$length(haystack);
  var patternLength = $.get$length(needle);
  if (patternLength !== (patternLength | 0)) return $.allMatchesInStringUnchecked$bailout(needle, haystack, 1, length$, result, patternLength);
  for (var startIndex = 0; true; ) {
    var position = $.indexOf$2(haystack, needle, startIndex);
    if ($.eqB(position, -1)) {
      break;
    }
    result.push($.StringMatch$3(position, haystack, needle));
    var endIndex = $.add(position, patternLength);
    if ($.eqB(endIndex, length$)) {
      break;
    } else {
      if ($.eqB(position, endIndex)) {
        startIndex = $.add(startIndex, 1);
      } else {
        startIndex = endIndex;
      }
    }
  }
  return result;
};

$._lib4_ChildrenElementList$_wrap$1 = function(element) {
  return new $._ChildrenElementList(element.get$$dom_children(), element);
};

$._lib3_AllMatchesIterable$2 = function(_re, _str) {
  return new $._AllMatchesIterable(_str, _re);
};

$.dynamicSetMetadata = function(inputTable) {
  var t0 = $.buildDynamicMetadata(inputTable);
  $._dynamicMetadata(t0);
};

$.addLast = function(receiver, value) {
  if (!($.isJsArray(receiver) === true)) {
    return receiver.addLast$1(value);
  }
  $.checkGrowable(receiver, 'addLast');
  receiver.push(value);
};

$.ListIterator$1 = function(list) {
  return new $.ListIterator(list, 0);
};

$.checkNum = function(value) {
  if (!(typeof value === 'number')) {
    $.checkNull(value);
    throw $.captureStackTrace($.IllegalArgumentException$1(value));
  }
  return value;
};

$._lib4_WorkerEventsImpl$1 = function(_ptr) {
  return new $._WorkerEventsImpl(_ptr);
};

$.ltB = function(a, b) {
  return $.lt(a, b) === true;
};

$.FilteredElementList$1 = function(node) {
  return new $.FilteredElementList(node.get$nodes(), node);
};

$.convertDartClosureToJS = function(closure) {
  if (closure === (void 0)) {
    return;
  }
  var function$ = (closure.$identity);
  if (!!function$) {
    return function$;
  }
  var function0 = (function() {
    return $.invokeClosure.$call$5(closure, $, arguments.length, arguments[0], arguments[1]);
  });
  closure.$identity = function0;
  return function0;
};

$.parse = function(json) {
  return $.parse2(json);
};

$._lib4_FixedSizeListIterator$1 = function(array) {
  return new $._FixedSizeListIterator($.get$length(array), 0, array);
};

$.parse2 = function(json) {
  return $._lib5_JsonParser$_internal$1(json)._lib5_parseToplevel$0();
};

$._lib4_FrozenElementList$_wrap$1 = function(_nodeList) {
  return new $._FrozenElementList(_nodeList);
};

$.split = function(receiver, pattern) {
  if (!(typeof receiver === 'string')) {
    return receiver.split$1(pattern);
  }
  $.checkNull(pattern);
  return $.stringSplitUnchecked(receiver, pattern);
};

$.concatAll = function(strings) {
  $.checkNull(strings);
  for (var t0 = $.iterator(strings), result = ''; t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    $.checkNull(t1);
    if (!(typeof t1 === 'string')) {
      throw $.captureStackTrace($.IllegalArgumentException$1(t1));
    }
    result = result + t1;
  }
  return result;
};

$.userAgent = function() {
  return $.window().get$navigator().get$userAgent();
};

$._lib4_InputElementEventsImpl$1 = function(_ptr) {
  return new $._InputElementEventsImpl(_ptr);
};

$.getRange = function(receiver, start, length$) {
  if (!($.isJsArray(receiver) === true)) {
    return receiver.getRange$2(start, length$);
  }
  if (0 === length$) {
    return [];
  }
  $.checkNull(start);
  $.checkNull(length$);
  if (!((typeof start === 'number') && (start === (start | 0)))) {
    throw $.captureStackTrace($.IllegalArgumentException$1(start));
  }
  if (!((typeof length$ === 'number') && (length$ === (length$ | 0)))) {
    throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  }
  if (length$ < 0) {
    throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  }
  if (start < 0) {
    throw $.captureStackTrace($.IndexOutOfRangeException$1(start));
  }
  var end = start + length$;
  if ($.gtB(end, $.get$length(receiver))) {
    throw $.captureStackTrace($.IndexOutOfRangeException$1(length$));
  }
  if ($.ltB(length$, 0)) {
    throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  }
  return receiver.slice(start, end);
};

$._lib3_DoubleLinkedQueueIterator$1 = function(_sentinel) {
  var t0 = new $._DoubleLinkedQueueIterator((void 0), _sentinel);
  t0._lib3_DoubleLinkedQueueIterator$1(_sentinel);
  return t0;
};

$.JsonStringifier$_internal$0 = function() {
  var t0 = $.StringBufferImpl$1('');
  var t1 = $.List((void 0));
  $.setRuntimeTypeInfo(t1, ({E: 'Object'}));
  var t2 = new $.JsonStringifier(t1, t0);
  t2.JsonStringifier$_internal$0();
  return t2;
};

$.getRange2 = function(a, start, length$, accumulator) {
  if (typeof a !== 'string' && (typeof a !== 'object'||a.constructor !== Array)) return $.getRange2$bailout(a, start, length$, accumulator,  0);
  if (typeof start !== 'number') return $.getRange2$bailout(a, start, length$, accumulator,  0);
  if ($.ltB(length$, 0)) {
    throw $.captureStackTrace($.IllegalArgumentException$1('length'));
  }
  if (start < 0) {
    throw $.captureStackTrace($.IndexOutOfRangeException$1(start));
  }
  var end = $.add(start, length$);
  if (end > a.length) {
    throw $.captureStackTrace($.IndexOutOfRangeException$1(end));
  }
  for (var i = start; i < end; i = i + 1) {
    if (i !== (i | 0)) throw $.iae(i);
    var t0 = a.length;
    if (i < 0 || i >= t0) throw $.ioore(i);
    $.add$1(accumulator, a[i]);
  }
  return accumulator;
};

$._lib4_TextTrackListEventsImpl$1 = function(_ptr) {
  return new $._TextTrackListEventsImpl(_ptr);
};

$._dynamicMetadata = function(table) {
  $dynamicMetadata = table;
};

$._dynamicMetadata2 = function() {
  if ((typeof($dynamicMetadata)) === 'undefined') {
    var t0 = [];
    $._dynamicMetadata(t0);
  }
  return $dynamicMetadata;
};

$.LinkedHashMapImplementation$0 = function() {
  var t0 = new $.LinkedHashMapImplementation((void 0), (void 0));
  t0.LinkedHashMapImplementation$0();
  return t0;
};

$._lib4_DeprecatedPeerConnectionEventsImpl$1 = function(_ptr) {
  return new $._DeprecatedPeerConnectionEventsImpl(_ptr);
};

$.regExpGetNative = function(regExp) {
  var r = (regExp._re);
  var r0 = r;
  if (r === (void 0)) {
    r0 = (regExp._re = $.regExpMakeNative(regExp, false));
  }
  return r0;
};

$.throwNoSuchMethod = function(obj, name$, arguments$) {
  throw $.captureStackTrace($.NoSuchMethodException$4(obj, name$, arguments$, (void 0)));
};

$.checkNull = function(object) {
  if (object === (void 0)) {
    throw $.captureStackTrace($.NullPointerException$2((void 0), $.CTC));
  }
  return object;
};

$._lib4_EventListenerListImpl$2 = function(_ptr, _type) {
  return new $._EventListenerListImpl(_type, _ptr);
};

$._lib4_WindowEventsImpl$1 = function(_ptr) {
  return new $._WindowEventsImpl(_ptr);
};

$.DoubleLinkedQueue$0 = function() {
  var t0 = new $.DoubleLinkedQueue((void 0));
  t0.DoubleLinkedQueue$0();
  return t0;
};

$.checkNumbers = function(a, b) {
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      return true;
    } else {
      $.checkNull(b);
      throw $.captureStackTrace($.IllegalArgumentException$1(b));
    }
  }
  return false;
};

$._lib3_DoubleLinkedQueueEntrySentinel$0 = function() {
  var t0 = new $._DoubleLinkedQueueEntrySentinel((void 0), (void 0), (void 0));
  t0.DoubleLinkedQueueEntry$1((void 0));
  t0._lib3_DoubleLinkedQueueEntrySentinel$0();
  return t0;
};

$.stringToString = function(value) {
  var res = $.toString(value);
  if (!(typeof res === 'string')) {
    throw $.captureStackTrace($.IllegalArgumentException$1(value));
  }
  return res;
};

$.contains$2 = function(receiver, other, startIndex) {
  if (!(typeof receiver === 'string')) {
    return receiver.contains$2(other, startIndex);
  }
  $.checkNull(other);
  return $.stringContainsUnchecked(receiver, other, startIndex);
};

$._escape = function(sb, s) {
  var length$ = $.get$length(s);
  if (typeof length$ !== 'number') return $._escape$bailout(sb, s, 1, length$);
  var charCodes = $.List((void 0));
  $.setRuntimeTypeInfo(charCodes, ({E: 'int'}));
  for (var needsEscape = false, i = 0; i < length$; i = i0) {
    var charCode = $.charCodeAt(s, i);
    if ($.ltB(charCode, 32)) {
      charCodes.push(92);
      $1:{
        if (8 === charCode) {
          charCodes.push(98);
          break $1;
        } else {
          if (9 === charCode) {
            charCodes.push(116);
            break $1;
          } else {
            if (10 === charCode) {
              charCodes.push(110);
              break $1;
            } else {
              if (12 === charCode) {
                charCodes.push(102);
                break $1;
              } else {
                if (13 === charCode) {
                  charCodes.push(114);
                  break $1;
                } else {
                  charCodes.push(117);
                  charCodes.push($._hexDigit($.and($.shr(charCode, 12), 15)));
                  charCodes.push($._hexDigit($.and($.shr(charCode, 8), 15)));
                  charCodes.push($._hexDigit($.and($.shr(charCode, 4), 15)));
                  charCodes.push($._hexDigit($.and(charCode, 15)));
                  break $1;
                }
              }
            }
          }
        }
      }
      needsEscape = true;
    } else {
      if ($.eqB(charCode, 34) || $.eqB(charCode, 92)) {
        charCodes.push(92);
        charCodes.push(charCode);
        needsEscape = true;
      } else {
        charCodes.push(charCode);
      }
    }
    var i0 = i + 1;
  }
  if (needsEscape) {
    var t0 = $.String$fromCharCodes(charCodes);
  } else {
    t0 = s;
  }
  $.add$1(sb, t0);
};

$.ChatClient$0 = function() {
  var t0 = new $.ChatClient((void 0), (void 0), false, (void 0));
  t0.ChatClient$0();
  return t0;
};

$.IndexOutOfRangeException$1 = function(_index) {
  return new $.IndexOutOfRangeException(_index);
};

$._lib4_TextTrackEventsImpl$1 = function(_ptr) {
  return new $._TextTrackEventsImpl(_ptr);
};

$.charCodeAt = function(receiver, index) {
  if (typeof receiver === 'string') {
    if (!(typeof index === 'number')) {
      throw $.captureStackTrace($.IllegalArgumentException$1(index));
    }
    if (index < 0) {
      throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
    }
    if (index >= receiver.length) {
      throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
    }
    return receiver.charCodeAt(index);
  } else {
    return receiver.charCodeAt$1(index);
  }
};

$._lib4_BatteryManagerEventsImpl$1 = function(_ptr) {
  return new $._BatteryManagerEventsImpl(_ptr);
};

$._lib4_WebSocketEventsImpl$1 = function(_ptr) {
  return new $._WebSocketEventsImpl(_ptr);
};

$.collectionToString = function(c) {
  var result = $.StringBufferImpl$1('');
  $._emitCollection(c, result, $.List((void 0)));
  return result.toString$0();
};

$.MetaInfo$3 = function(tag, tags, set) {
  return new $.MetaInfo(set, tags, tag);
};

$.KeyValuePair$2 = function(key, value) {
  var t0 = new $.KeyValuePair(value, key);
  t0.KeyValuePair$2(key, value);
  return t0;
};

$._lib4_MediaStreamEventsImpl$1 = function(_ptr) {
  return new $._MediaStreamEventsImpl(_ptr);
};

$.defineProperty = function(obj, property, value) {
  Object.defineProperty(obj, property,
      {value: value, enumerable: false, writable: false, configurable: true});;
};

$.dynamicFunction = function(name$) {
  var f = (Object.prototype[name$]);
  if (!(f === (void 0)) && (!!f.methods)) {
    return f.methods;
  }
  var methods = ({});
  var dartMethod = (Object.getPrototypeOf($.CTC10)[name$]);
  if (!(dartMethod === (void 0))) {
    methods['Object'] = dartMethod;
  }
  var bind = (function() {return $.dynamicBind.$call$4(this, name$, methods, Array.prototype.slice.call(arguments));});
  bind.methods = methods;
  $.defineProperty((Object.prototype), name$, bind);
  return methods;
};

$.print = function(obj) {
  return $.printString($.toString(obj));
};

$.checkString = function(value) {
  if (!(typeof value === 'string')) {
    $.checkNull(value);
    throw $.captureStackTrace($.IllegalArgumentException$1(value));
  }
  return value;
};

$.div = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a / b;
  }
  return a.operator$div$1(b);
};

$.addAll = function(receiver, collection) {
  if (!($.isJsArray(receiver) === true)) {
    return receiver.addAll$1(collection);
  }
  var iterator = $.iterator(collection);
  for (; iterator.hasNext$0() === true; ) {
    $.add$1(receiver, iterator.next$0());
  }
};

$.stringFromCharCodes = function(charCodes) {
  for (var t0 = $.iterator(charCodes); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    if (!((typeof t1 === 'number') && (t1 === (t1 | 0)))) {
      throw $.captureStackTrace($.IllegalArgumentException$1(t1));
    }
  }
  return String.fromCharCode.apply((void 0), charCodes);
};

$.objectToString = function(object) {
  var name$ = (object.constructor.name);
  if (name$ === (void 0)) {
    var name0 = (object.constructor.toString().match(/^\s*function\s*\$?(\S*)\s*\(/)[1]);
  } else {
    name0 = name$;
    if ($.charCodeAt(name$, 0) === 36) {
      name0 = $.substring$1(name$, 1);
    }
  }
  return 'Instance of \'' + $.stringToString(name0) + '\'';
};

$.indexOf = function(a, element, startIndex, endIndex) {
  if (typeof a !== 'string' && (typeof a !== 'object'||a.constructor !== Array)) return $.indexOf$bailout(a, element, startIndex, endIndex,  0);
  if (typeof endIndex !== 'number') return $.indexOf$bailout(a, element, startIndex, endIndex,  0);
  if ($.geB(startIndex, a.length)) {
    return -1;
  }
  var startIndex0 = startIndex;
  if ($.ltB(startIndex, 0)) {
    startIndex0 = 0;
  }
  if (typeof startIndex0 !== 'number') return $.indexOf$bailout(a, element, startIndex, endIndex, 3, a, endIndex, startIndex0);
  for (var i = startIndex0; i < endIndex; i = i + 1) {
    if (i !== (i | 0)) throw $.iae(i);
    var t0 = a.length;
    if (i < 0 || i >= t0) throw $.ioore(i);
    if ($.eqB(a[i], element)) {
      return i;
    }
  }
  return -1;
};

$._firstProbe = function(hashCode, length$) {
  return $.and(hashCode, $.sub(length$, 1));
};

$._hexDigit = function(x) {
  if ($.ltB(x, 10)) {
    var t0 = $.add(48, x);
  } else {
    t0 = $.add(87, x);
  }
  return t0;
};

$.set$length = function(receiver, newLength) {
  if ($.isJsArray(receiver) === true) {
    $.checkNull(newLength);
    if (!((typeof newLength === 'number') && (newLength === (newLength | 0)))) {
      throw $.captureStackTrace($.IllegalArgumentException$1(newLength));
    }
    if (newLength < 0) {
      throw $.captureStackTrace($.IndexOutOfRangeException$1(newLength));
    }
    $.checkGrowable(receiver, 'set length');
    receiver.length = newLength;
  } else {
    receiver.set$length(newLength);
  }
  return newLength;
};

$.ioore = function(index) {
  throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
};

$.typeNameInFirefox = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if ($.eqB(name$, 'Window')) {
    return 'DOMWindow';
  }
  if ($.eqB(name$, 'Document')) {
    return 'HTMLDocument';
  }
  if ($.eqB(name$, 'XMLDocument')) {
    return 'Document';
  }
  if ($.eqB(name$, 'WorkerMessageEvent')) {
    return 'MessageEvent';
  }
  return name$;
};

$.removeLast = function(receiver) {
  if ($.isJsArray(receiver) === true) {
    $.checkGrowable(receiver, 'removeLast');
    if ($.get$length(receiver) === 0) {
      throw $.captureStackTrace($.IndexOutOfRangeException$1(-1));
    }
    return receiver.pop();
  }
  return receiver.removeLast$0();
};

$.indexOf2 = function(a, element, startIndex, endIndex) {
  if (typeof a !== 'string' && (typeof a !== 'object'||a.constructor !== Array)) return $.indexOf2$bailout(a, element, startIndex, endIndex,  0);
  if (typeof endIndex !== 'number') return $.indexOf2$bailout(a, element, startIndex, endIndex,  0);
  if ($.geB(startIndex, a.length)) {
    return -1;
  }
  var startIndex0 = startIndex;
  if ($.ltB(startIndex, 0)) {
    startIndex0 = 0;
  }
  if (typeof startIndex0 !== 'number') return $.indexOf2$bailout(a, element, startIndex, endIndex, 3, a, endIndex, startIndex0);
  for (var i = startIndex0; i < endIndex; i = i + 1) {
    if (i !== (i | 0)) throw $.iae(i);
    var t0 = a.length;
    if (i < 0 || i >= t0) throw $.ioore(i);
    if ($.eqB(a[i], element)) {
      return i;
    }
  }
  return -1;
};

$.hashCode = function(receiver) {
  if (typeof receiver === 'number') {
    return receiver & 0x1FFFFFFF;
  }
  if (!(typeof receiver === 'string')) {
    return receiver.hashCode$0();
  }
  var length$ = (receiver.length);
  for (var hash = 0, i = 0; i < length$; i = i0) {
    var hash0 = 536870911 & hash + (receiver.charCodeAt(i)) >>> 0;
    var hash1 = 536870911 & hash0 + (524287 & hash0 >>> 0 << 10) >>> 0;
    hash = hash1 ^ $.shr(hash1, 6) >>> 0;
    var i0 = i + 1;
  }
  var hash2 = 536870911 & hash + (67108863 & hash >>> 0 << 3) >>> 0;
  var hash3 = hash2 ^ $.shr(hash2, 11) >>> 0;
  return 536870911 & hash3 + (16383 & hash3 >>> 0 << 15) >>> 0;
};

$.toString = function(value) {
  if (typeof value == "object") {
    if ($.isJsArray(value) === true) {
      return $.collectionToString(value);
    } else {
      return value.toString$0();
    }
  }
  if (value === 0 && (1 / value) < 0) {
    return '-0.0';
  }
  if (value === (void 0)) {
    return 'null';
  }
  if (typeof value == "function") {
    return 'Closure';
  }
  return String(value);
};

$.makeLiteralMap = function(keyValuePairs) {
  var iterator = $.iterator(keyValuePairs);
  var result = $.LinkedHashMapImplementation$0();
  for (; iterator.hasNext$0() === true; ) {
    result.operator$indexSet$2(iterator.next$0(), iterator.next$0());
  }
  return result;
};

$.startsWith = function(receiver, other) {
  if (!(typeof receiver === 'string')) {
    return receiver.startsWith$1(other);
  }
  $.checkString(other);
  var length$ = $.get$length(other);
  if ($.gtB(length$, receiver.length)) {
    return false;
  }
  return other == receiver.substring(0, length$);
};

$.createFromCharCodes = function(charCodes) {
  $.checkNull(charCodes);
  var charCodes0 = charCodes;
  if (!($.isJsArray(charCodes) === true)) {
    if (!((typeof charCodes === 'object') && (((charCodes.constructor === Array) || charCodes.is$List2())))) {
      throw $.captureStackTrace($.IllegalArgumentException$1(charCodes));
    }
    charCodes0 = $.List$from(charCodes);
  }
  return $.stringFromCharCodes(charCodes0);
};

$.le = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a <= b;
  }
  return a.operator$le$1(b);
};

$.toStringForNativeObject = function(obj) {
  return 'Instance of ' + $.stringToString($.getTypeNameOf(obj));
};

$.trim = function(receiver) {
  if (!(typeof receiver === 'string')) {
    return receiver.trim$0();
  }
  return receiver.trim();
};

$.forEach3 = function(iterable, f) {
  for (var t0 = $.iterator(iterable); t0.hasNext$0() === true; ) {
    f.$call$1(t0.next$0());
  }
};

$.dynamicBind = function(obj, name$, methods, arguments$) {
  var tag = $.getTypeNameOf(obj);
  var method = (methods[tag]);
  var method0 = method;
  if (method === (void 0) && !($._dynamicMetadata2() === (void 0))) {
    for (var method1 = method, i = 0; method0 = method1, $.ltB(i, $.get$length($._dynamicMetadata2())); i = i0) {
      var entry = $.index($._dynamicMetadata2(), i);
      if ($.contains$1(entry.get$set(), tag) === true) {
        var method2 = (methods[entry.get$tag()]);
        if (!(method2 === (void 0))) {
          method0 = method2;
          break;
        }
        method1 = method2;
      }
      var i0 = i + 1;
    }
  }
  var method3 = method0;
  if (method0 === (void 0)) {
    method3 = (methods['Object']);
  }
  var proto = (Object.getPrototypeOf(obj));
  var method4 = method3;
  if (method3 === (void 0)) {
    method4 = (function () {if (Object.getPrototypeOf(this) === proto) {$.throwNoSuchMethod.$call$3(this, name$, Array.prototype.slice.call(arguments));} else {return Object.prototype[name$].apply(this, arguments);}});
  }
  var nullCheckMethod = (function() {var res = method4.apply(this, Array.prototype.slice.call(arguments));return res === null ? (void 0) : res;});
  if (!proto.hasOwnProperty(name$)) {
    $.defineProperty(proto, name$, nullCheckMethod);
  }
  return nullCheckMethod.apply(obj, arguments$);
};

$._lib4_MessagePortEventsImpl$1 = function(_ptr) {
  return new $._MessagePortEventsImpl(_ptr);
};

$.getFunctionForTypeNameOf = function() {
  if (!((typeof(navigator)) === 'object')) {
    return $.typeNameInChrome;
  }
  var userAgent = (navigator.userAgent);
  if ($.contains$1(userAgent, $.CTC9) === true) {
    return $.typeNameInChrome;
  } else {
    if ($.contains$1(userAgent, 'Firefox') === true) {
      return $.typeNameInFirefox;
    } else {
      if ($.contains$1(userAgent, 'MSIE') === true) {
        return $.typeNameInIE;
      } else {
        return $.constructorNameFallback;
      }
    }
  }
};

$.index = function(a, index) {
  if (typeof a === 'string' || $.isJsArray(a) === true) {
    if (!((typeof index === 'number') && (index === (index | 0)))) {
      if (!(typeof index === 'number')) {
        throw $.captureStackTrace($.IllegalArgumentException$1(index));
      }
      if (!($.truncate(index) === index)) {
        throw $.captureStackTrace($.IllegalArgumentException$1(index));
      }
    }
    if ($.ltB(index, 0) || $.geB(index, $.get$length(a))) {
      throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
    }
    return a[index];
  }
  return a.operator$index$1(index);
};

$._lib4_ElementEventsImpl$1 = function(_ptr) {
  return new $._ElementEventsImpl(_ptr);
};

$.toLowerCase = function(receiver) {
  if (!(typeof receiver === 'string')) {
    return receiver.toLowerCase$0();
  }
  return receiver.toLowerCase();
};

$.parseDouble = function(str) {
  return $.parseDouble2(str);
};

$.toDouble = function(receiver) {
  if (!(typeof receiver === 'number')) {
    return receiver.toDouble$0();
  }
  return receiver;
};

$.parseDouble2 = function(str) {
  $.checkString(str);
  var ret = (parseFloat(str));
  var ret0 = ret;
  if (ret === 0 && ($.startsWith(str, '0x') === true || $.startsWith(str, '0X') === true)) {
    ret0 = (parseInt(str));
  }
  if ($.isNaN(ret0) === true && !$.eqB(str, 'NaN') && !$.eqB(str, '-NaN')) {
    throw $.captureStackTrace($.BadNumberFormatException$1(str));
  }
  return ret0;
};

$.List = function(length$) {
  return $.newList(length$);
};

$._isPowerOfTwo = function(x) {
  return $.eq($.and(x, $.sub(x, 1)), 0);
};

$._lib4_XMLHttpRequestUploadEventsImpl$1 = function(_ptr) {
  return new $._XMLHttpRequestUploadEventsImpl(_ptr);
};

$.captureStackTrace = function(ex) {
  var jsError = (new Error());
  jsError.dartException = ex;
  jsError.toString = $.toStringWrapper.$call$0;
  return jsError;
};

$.StackOverflowException$0 = function() {
  return new $.StackOverflowException();
};

$.StringBufferImpl$1 = function(content$) {
  var t0 = new $.StringBufferImpl((void 0), (void 0));
  t0.StringBufferImpl$1(content$);
  return t0;
};

$.HashMapImplementation$0 = function() {
  var t0 = new $.HashMapImplementation((void 0), (void 0), (void 0), (void 0), (void 0));
  t0.HashMapImplementation$0();
  return t0;
};

$.eq = function(a, b) {
  if (typeof a === "object") {
    if (!!a.operator$eq$1) {
      return a.operator$eq$1(b);
    } else {
      return a === b;
    }
  }
  return a === b;
};

$.substring$1 = function(receiver, startIndex) {
  if (!(typeof receiver === 'string')) {
    return receiver.substring$1(startIndex);
  }
  return $.substring$2(receiver, startIndex, (void 0));
};

$._lib4_SharedWorkerContextEventsImpl$1 = function(_ptr) {
  return new $._SharedWorkerContextEventsImpl(_ptr);
};

$._lib4_IDBVersionChangeRequestEventsImpl$1 = function(_ptr) {
  return new $._IDBVersionChangeRequestEventsImpl(_ptr);
};

$.gtB = function(a, b) {
  return $.gt(a, b) === true;
};

$.setRuntimeTypeInfo = function(target, typeInfo) {
  if (!(target === (void 0))) {
    target.builtin$typeInfo = typeInfo;
  }
};

$.document = function() {
  return document;;
};

$._lib4_FileWriterEventsImpl$1 = function(_ptr) {
  return new $._FileWriterEventsImpl(_ptr);
};

$.forEach = function(receiver, f) {
  if (!($.isJsArray(receiver) === true)) {
    return receiver.forEach$1(f);
  } else {
    return $.forEach2(receiver, f);
  }
};

$.NoSuchMethodException$4 = function(_receiver, _functionName, _arguments, _existingArgumentNames) {
  return new $.NoSuchMethodException(_existingArgumentNames, _arguments, _functionName, _receiver);
};

$.lt = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a < b;
  }
  return a.operator$lt$1(b);
};

$.unwrapException = function(ex) {
  if ("dartException" in ex) {
    return ex.dartException;
  } else {
    if (ex instanceof TypeError) {
      var type = (ex.type);
      var name$ = $.index((ex.arguments), 0);
      if (type === 'property_not_function' || type === 'called_non_callable' || type === 'non_object_property_call' || type === 'non_object_property_load') {
        if (!(name$ === (void 0)) && $.startsWith(name$, '$call$') === true) {
          return $.ObjectNotClosureException$0();
        } else {
          return $.NullPointerException$2((void 0), $.CTC);
        }
      } else {
        if (type === 'undefined_method') {
          if (typeof name$ === 'string' && $.startsWith(name$, '$call$') === true) {
            return $.ObjectNotClosureException$0();
          } else {
            return $.NoSuchMethodException$4('', name$, [], (void 0));
          }
        }
      }
    } else {
      if (ex instanceof RangeError) {
        if ($.contains$1((ex.message), 'call stack') === true) {
          return $.StackOverflowException$0();
        }
      }
    }
  }
  return ex;
};

$.ceil = function(receiver) {
  if (!(typeof receiver === 'number')) {
    return receiver.ceil$0();
  }
  return Math.ceil(receiver);
};

$.getTypeNameOf = function(obj) {
  if ($._getTypeNameOf === (void 0)) {
    $._getTypeNameOf = $.getFunctionForTypeNameOf();
  }
  return $._getTypeNameOf.$call$1(obj);
};

$.sub = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a - b;
  }
  return a.operator$sub$1(b);
};

$.allMatchesInStringUnchecked$bailout = function(needle, haystack, state, env0, env1, env2) {
  switch (state) {
    case 1:
      length$ = env0;
      result = env1;
      patternLength = env2;
      break;
  }
  switch (state) {
    case 0:
      var result = $.List((void 0));
      $.setRuntimeTypeInfo(result, ({E: 'Match'}));
      var length$ = $.get$length(haystack);
      var patternLength = $.get$length(needle);
    case 1:
      state = 0;
      var startIndex = 0;
      L0: while (true) {
        if (!true) break L0;
        var position = $.indexOf$2(haystack, needle, startIndex);
        if ($.eqB(position, -1)) {
          break;
        }
        result.push($.StringMatch$3(position, haystack, needle));
        var endIndex = $.add(position, patternLength);
        if ($.eqB(endIndex, length$)) {
          break;
        } else {
          if ($.eqB(position, endIndex)) {
            startIndex = $.add(startIndex, 1);
          } else {
            startIndex = endIndex;
          }
        }
      }
      return result;
  }
};

$.getRange2$bailout = function(a, start, length$, accumulator, state, env0, env1) {
  switch (state) {
    case 1:
      t0 = env0;
      break;
    case 2:
      t0 = env0;
      i = env1;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 2:
      state = 0;
      if ($.ltB(length$, 0)) {
        throw $.captureStackTrace($.IllegalArgumentException$1('length'));
      }
      if ($.ltB(start, 0)) {
        throw $.captureStackTrace($.IndexOutOfRangeException$1(start));
      }
      var end = $.add(start, length$);
      if ($.gtB(end, $.get$length(a))) {
        throw $.captureStackTrace($.IndexOutOfRangeException$1(end));
      }
      var i0 = start;
      L0: while (true) {
        if (!$.ltB(i0, end)) break L0;
        $.add$1(accumulator, $.index(a, i0));
        i0 = $.add(i0, 1);
      }
      return accumulator;
  }
};

$._escape$bailout = function(sb, s, state, env0) {
  switch (state) {
    case 1:
      length$ = env0;
      break;
  }
  switch (state) {
    case 0:
      var length$ = $.get$length(s);
    case 1:
      state = 0;
      var charCodes = $.List((void 0));
      $.setRuntimeTypeInfo(charCodes, ({E: 'int'}));
      var needsEscape = false;
      var i = 0;
      L0: while (true) {
        if (!$.ltB(i, length$)) break L0;
        var charCode = $.charCodeAt(s, i);
        if ($.ltB(charCode, 32)) {
          charCodes.push(92);
          $1:{
            if (8 === charCode) {
              charCodes.push(98);
              break $1;
            } else {
              if (9 === charCode) {
                charCodes.push(116);
                break $1;
              } else {
                if (10 === charCode) {
                  charCodes.push(110);
                  break $1;
                } else {
                  if (12 === charCode) {
                    charCodes.push(102);
                    break $1;
                  } else {
                    if (13 === charCode) {
                      charCodes.push(114);
                      break $1;
                    } else {
                      charCodes.push(117);
                      charCodes.push($._hexDigit($.and($.shr(charCode, 12), 15)));
                      charCodes.push($._hexDigit($.and($.shr(charCode, 8), 15)));
                      charCodes.push($._hexDigit($.and($.shr(charCode, 4), 15)));
                      charCodes.push($._hexDigit($.and(charCode, 15)));
                      break $1;
                    }
                  }
                }
              }
            }
          }
          needsEscape = true;
        } else {
          if ($.eqB(charCode, 34) || $.eqB(charCode, 92)) {
            charCodes.push(92);
            charCodes.push(charCode);
            needsEscape = true;
          } else {
            charCodes.push(charCode);
          }
        }
        var i0 = i + 1;
        i = i0;
      }
      if (needsEscape) {
        var t0 = $.String$fromCharCodes(charCodes);
      } else {
        t0 = s;
      }
      $.add$1(sb, t0);
  }
};

$.indexOf2$bailout = function(a, element, startIndex, endIndex, state, env0, env1, env2) {
  switch (state) {
    case 1:
      t0 = env0;
      break;
    case 2:
      t0 = env0;
      t1 = env1;
      break;
    case 3:
      t0 = env0;
      t1 = env1;
      startIndex0 = env2;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 2:
      state = 0;
      if ($.geB(startIndex, $.get$length(a))) {
        return -1;
      }
      var startIndex0 = startIndex;
      if ($.ltB(startIndex, 0)) {
        startIndex0 = 0;
      }
    case 3:
      state = 0;
      var i = startIndex0;
      L0: while (true) {
        if (!$.ltB(i, endIndex)) break L0;
        if ($.eqB($.index(a, i), element)) {
          return i;
        }
        i = $.add(i, 1);
      }
      return -1;
  }
};

$.indexOf$bailout = function(a, element, startIndex, endIndex, state, env0, env1, env2) {
  switch (state) {
    case 1:
      t0 = env0;
      break;
    case 2:
      t0 = env0;
      t1 = env1;
      break;
    case 3:
      t0 = env0;
      t1 = env1;
      startIndex0 = env2;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 2:
      state = 0;
      if ($.geB(startIndex, $.get$length(a))) {
        return -1;
      }
      var startIndex0 = startIndex;
      if ($.ltB(startIndex, 0)) {
        startIndex0 = 0;
      }
    case 3:
      state = 0;
      var i = startIndex0;
      L0: while (true) {
        if (!$.ltB(i, endIndex)) break L0;
        if ($.eqB($.index(a, i), element)) {
          return i;
        }
        i = $.add(i, 1);
      }
      return -1;
  }
};

$.buildDynamicMetadata$bailout = function(inputTable, state, env0, env1, env2, env3, env4, env5, env6) {
  switch (state) {
    case 1:
      t0 = env0;
      break;
    case 2:
      t0 = env0;
      result = env1;
      tag = env2;
      i = env3;
      tags = env4;
      set = env5;
      tagNames = env6;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      var result = [];
      var i = 0;
    case 2:
      L0: while (true) {
        switch (state) {
          case 0:
            if (!$.ltB(i, $.get$length(inputTable))) break L0;
            var tag = $.index($.index(inputTable, i), 0);
            var tags = $.index($.index(inputTable, i), 1);
            var set = $.HashSetImplementation$0();
            $.setRuntimeTypeInfo(set, ({E: 'String'}));
            var tagNames = $.split(tags, '|');
          case 2:
            state = 0;
            var j = 0;
            L1: while (true) {
              if (!$.ltB(j, $.get$length(tagNames))) break L1;
              set.add$1($.index(tagNames, j));
              j = j + 1;
            }
            $.add$1(result, $.MetaInfo$3(tag, tags, set));
            i = i + 1;
        }
      }
      return result;
  }
};

$.dynamicBind.$call$4 = $.dynamicBind;
$.throwNoSuchMethod.$call$3 = $.throwNoSuchMethod;
$.typeNameInIE.$call$1 = $.typeNameInIE;
$.typeNameInChrome.$call$1 = $.typeNameInChrome;
$.toStringWrapper.$call$0 = $.toStringWrapper;
$.invokeClosure.$call$5 = $.invokeClosure;
$.typeNameInFirefox.$call$1 = $.typeNameInFirefox;
$.constructorNameFallback.$call$1 = $.constructorNameFallback;
Isolate.$finishClasses();
Isolate.makeConstantList = function(list) {
  list.immutable$list = true;
  list.fixed$length = true;
  return list;
};
$.CTC = Isolate.makeConstantList([]);
$.CTC8 = new Isolate.$isolateProperties.JsonUnsupportedObjectType();
$.CTC9 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, 'Chrome|DumpRenderTree');
$.CTC7 = new Isolate.$isolateProperties._DeletedKeySentinel();
$.CTC5 = new Isolate.$isolateProperties.IllegalArgumentException('Invalid list length');
$.CTC4 = new Isolate.$isolateProperties.UnsupportedOperationException('');
$.CTC2 = new Isolate.$isolateProperties.NoMoreElementsException();
$.CTC10 = new Isolate.$isolateProperties.Object();
$.CTC6 = new Isolate.$isolateProperties.EmptyQueueException();
$.CTC3 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^#[_a-zA-Z]\\w*$');
$._cachedBrowserPrefix = (void 0);
$.IP = '127.0.0.1';
$.PORT = 8080;
$._getTypeNameOf = (void 0);
$.tokens = (void 0);
var $ = null;
Isolate.$finishClasses();
Isolate = Isolate.$finishIsolateConstructor(Isolate);
var $ = new Isolate();
(function() {
$.defineProperty(Object.prototype, 'is$List2', function() { return false; });
$.defineProperty(Object.prototype, 'is$Collection', function() { return false; });
$.defineProperty(Object.prototype, 'is$Element', function() { return false; });
$.defineProperty(Object.prototype, 'is$Map', function() { return false; });
$.defineProperty(Object.prototype, 'toString$0', function() { return $.toStringForNativeObject(this); });
$.dynamicFunction('is$Element').SVGRadialGradientElement = function() { return true; };
$.dynamicFunction('get$data').ImageData = function() { return this.data; };
$.dynamicFunction('send$1').WebSocket = function(data) {
  return this.send(data);
 };
$.dynamicFunction('close$2').WebSocket = function(code, reason) {
  return this.close(code,reason);
 };
$.dynamicFunction('get$close').WebSocket = function() { return new $.Closure20(this); };
$.dynamicFunction('$dom_addEventListener$3').WebSocket = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').WebSocket = function() {
  return $._lib4_WebSocketEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').SVGFETurbulenceElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLDListElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFETileElement = function() { return true; };
$.dynamicFunction('set$value').HTMLOutputElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLOutputElement = function() { return this.value; };
$.dynamicFunction('is$Element').HTMLOutputElement = function() { return true; };
$.dynamicFunction('set$value').SVGNumber = function(v) { this.value = v; };
$.dynamicFunction('get$value').SVGNumber = function() { return this.value; };
$.dynamicFunction('getRange$2').Int8Array = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').Int8Array = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').Int8Array = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').Int8Array = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').Int8Array = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').Int8Array = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').Int8Array = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').Int8Array = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').Int8Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').Int8Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').Int8Array = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'int'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').Int8Array = function(index, value) {
  this[index] = value;
 };
$.dynamicFunction('operator$index$1').Int8Array = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').Int8Array = function() { return this.length; };
$.dynamicFunction('is$List2').Int8Array = function() { return true; };
$.dynamicFunction('is$Collection').Int8Array = function() { return true; };
$.dynamicFunction('is$Element').HTMLOptGroupElement = function() { return true; };
$.dynamicFunction('get$userAgent').WorkerNavigator = function() { return this.userAgent; };
$.dynamicFunction('is$Element').HTMLAppletElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEBlendElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTableCaptionElement = function() { return true; };
$.dynamicFunction('set$value').HTMLLIElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLLIElement = function() { return this.value; };
$.dynamicFunction('is$Element').HTMLLIElement = function() { return true; };
$.dynamicFunction('set$innerHTML').ShadowRoot = function(v) { this.innerHTML = v; };
$.dynamicFunction('get$innerHTML').ShadowRoot = function() { return this.innerHTML; };
$.dynamicFunction('is$Element').ShadowRoot = function() { return true; };
$.dynamicFunction('is$Element').HTMLQuoteElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLMenuElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLHeadElement = function() { return true; };
$.dynamicFunction('get$length').SQLResultSetRowList = function() { return this.length; };
$.dynamicFunction('filter$1').NodeIterator = function(arg0) { return this.filter.$call$1(arg0); };
$.dynamicFunction('get$length').CSSRuleList = function() { return this.length; };
$.dynamicFunction('getRange$2').Uint8Array = function(start, rangeLength) {
  if (Object.getPrototypeOf(this).hasOwnProperty('getRange$2')) {
    return $.getRange2(this, start, rangeLength, []);
  } else {
    return Object.prototype.getRange$2.call(this, start, rangeLength);
  }
 };
$.dynamicFunction('removeLast$0').Uint8Array = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('removeLast$0')) {
    throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
  } else {
    return Object.prototype.removeLast$0.call(this);
  }
 };
$.dynamicFunction('last$0').Uint8Array = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('last$0')) {
    return this.operator$index$1($.sub($.get$length(this), 1));
  } else {
    return Object.prototype.last$0.call(this);
  }
 };
$.dynamicFunction('indexOf$2').Uint8Array = function(element, start) {
  if (Object.getPrototypeOf(this).hasOwnProperty('indexOf$2')) {
    return $.indexOf2(this, element, start, $.get$length(this));
  } else {
    return Object.prototype.indexOf$2.call(this, element, start);
  }
 };
$.dynamicFunction('isEmpty$0').Uint8Array = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('isEmpty$0')) {
    return $.eq($.get$length(this), 0);
  } else {
    return Object.prototype.isEmpty$0.call(this);
  }
 };
$.dynamicFunction('filter$1').Uint8Array = function(f) {
  if (Object.getPrototypeOf(this).hasOwnProperty('filter$1')) {
    return $.filter3(this, [], f);
  } else {
    return Object.prototype.filter$1.call(this, f);
  }
 };
$.dynamicFunction('forEach$1').Uint8Array = function(f) {
  if (Object.getPrototypeOf(this).hasOwnProperty('forEach$1')) {
    return $.forEach3(this, f);
  } else {
    return Object.prototype.forEach$1.call(this, f);
  }
 };
$.dynamicFunction('addAll$1').Uint8Array = function(collection) {
  if (Object.getPrototypeOf(this).hasOwnProperty('addAll$1')) {
    throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
  } else {
    return Object.prototype.addAll$1.call(this, collection);
  }
 };
$.dynamicFunction('addLast$1').Uint8Array = function(value) {
  if (Object.getPrototypeOf(this).hasOwnProperty('addLast$1')) {
    throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
  } else {
    return Object.prototype.addLast$1.call(this, value);
  }
 };
$.dynamicFunction('add$1').Uint8Array = function(value) {
  if (Object.getPrototypeOf(this).hasOwnProperty('add$1')) {
    throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
  } else {
    return Object.prototype.add$1.call(this, value);
  }
 };
$.dynamicFunction('iterator$0').Uint8Array = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('iterator$0')) {
    var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'int'}));
  return t0;
  } else {
    return Object.prototype.iterator$0.call(this);
  }
 };
$.dynamicFunction('operator$indexSet$2').Uint8Array = function(index, value) {
  if (Object.getPrototypeOf(this).hasOwnProperty('operator$indexSet$2')) {
    this[index] = value;
  } else {
    return Object.prototype.operator$indexSet$2.call(this, index, value);
  }
 };
$.dynamicFunction('operator$index$1').Uint8Array = function(index) {
  if (Object.getPrototypeOf(this).hasOwnProperty('operator$index$1')) {
    return this[index];;
  } else {
    return Object.prototype.operator$index$1.call(this, index);
  }
 };
$.dynamicFunction('get$length').Uint8Array = function() { return this.length; };
$.dynamicFunction('is$List2').Uint8Array = function() { return true; };
$.dynamicFunction('is$Collection').Uint8Array = function() { return true; };
$.dynamicFunction('get$length').CSSValueList = function() { return this.length; };
$.dynamicFunction('is$Element').SVGGElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAnimateMotionElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTRefElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLBaseElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEGaussianBlurElement = function() { return true; };
$.dynamicFunction('is$Element').SVGStyleElement = function() { return true; };
$.dynamicFunction('get$data').ProcessingInstruction = function() { return this.data; };
$.dynamicFunction('get$length').DOMPlugin = function() { return this.length; };
$.dynamicFunction('$dom_addEventListener$3').MediaStream = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').MediaStream = function() {
  return $._lib4_MediaStreamEventsImpl$1(this);
 };
$.dynamicFunction('get$charCode').UIEvent = function() { return this.charCode; };
$.dynamicFunction('get$length').SpeechRecognitionResult = function() { return this.length; };
$.dynamicFunction('$dom_addEventListener$3').SpeechRecognition = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').SpeechRecognition = function() {
  return $._lib4_SpeechRecognitionEventsImpl$1(this);
 };
$.dynamicFunction('set$value').SVGLength = function(v) { this.value = v; };
$.dynamicFunction('get$value').SVGLength = function() { return this.value; };
$.dynamicFunction('close$0').MessagePort = function() {
  return this.close();
 };
$.dynamicFunction('get$close').MessagePort = function() { return new $.Closure21(this); };
$.dynamicFunction('$dom_addEventListener$3').MessagePort = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').MessagePort = function() {
  return $._lib4_MessagePortEventsImpl$1(this);
 };
$.dynamicFunction('get$length').EntryArraySync = function() { return this.length; };
$.dynamicFunction('is$Element').SVGFEFuncGElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFontFaceElement = function() { return true; };
$.dynamicFunction('toString$0').IDBDatabaseException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').IDBDatabaseException = function() { return this.message; };
$.dynamicFunction('is$Element').SVGImageElement = function() { return true; };
$.dynamicFunction('close$0').Notification = function() {
  return this.close();
 };
$.dynamicFunction('get$close').Notification = function() { return new $.Closure22(this); };
$.dynamicFunction('get$tag').Notification = function() { return this.tag; };
$.dynamicFunction('get$on').Notification = function() {
  return $._lib4_NotificationEventsImpl$1(this);
 };
$.dynamicFunction('close$0').WorkerContext = function() {
  return this.close();
 };
$.dynamicFunction('get$close').WorkerContext = function() { return new $.Closure23(this); };
$.dynamicFunction('$dom_addEventListener$3').WorkerContext = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$navigator').WorkerContext = function() { return this.navigator; };
$.dynamicFunction('get$on').WorkerContext = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._lib4_WorkerContextEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('is$Element').HTMLTableCellElement = function() { return true; };
$.dynamicFunction('set$value').HTMLInputElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLInputElement = function() { return this.value; };
$.dynamicFunction('get$pattern').HTMLInputElement = function() { return this.pattern; };
$.dynamicFunction('get$on').HTMLInputElement = function() {
  return $._lib4_InputElementEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLInputElement = function() { return true; };
$.dynamicFunction('get$length').TextTrackCueList = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLFieldSetElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEDropShadowElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').EventTarget = function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 };
$.dynamicFunction('get$on').EventTarget = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._lib4_EventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('getRange$2').HTMLCollection = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').HTMLCollection = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').HTMLCollection = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').HTMLCollection = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').HTMLCollection = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').HTMLCollection = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').HTMLCollection = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').HTMLCollection = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').HTMLCollection = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').HTMLCollection = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').HTMLCollection = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'Node'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').HTMLCollection = function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 };
$.dynamicFunction('operator$index$1').HTMLCollection = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').HTMLCollection = function() { return this.length; };
$.dynamicFunction('is$List2').HTMLCollection = function() { return true; };
$.dynamicFunction('is$Collection').HTMLCollection = function() { return true; };
$.dynamicFunction('is$Element').SVGAnimateColorElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTableColElement = function() { return true; };
$.dynamicFunction('get$length').ClientRectList = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLAudioElement = function() { return true; };
$.dynamicFunction('is$Element').SVGScriptElement = function() { return true; };
$.dynamicFunction('is$Element').SVGMarkerElement = function() { return true; };
$.dynamicFunction('get$message').MediaKeyEvent = function() { return this.message; };
$.dynamicFunction('is$Element').SVGLineElement = function() { return true; };
$.dynamicFunction('getRange$2').Int16Array = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').Int16Array = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').Int16Array = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').Int16Array = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').Int16Array = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').Int16Array = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').Int16Array = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').Int16Array = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').Int16Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').Int16Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').Int16Array = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'int'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').Int16Array = function(index, value) {
  this[index] = value;
 };
$.dynamicFunction('operator$index$1').Int16Array = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').Int16Array = function() { return this.length; };
$.dynamicFunction('is$List2').Int16Array = function() { return true; };
$.dynamicFunction('is$Collection').Int16Array = function() { return true; };
$.dynamicFunction('is$Element').SVGMaskElement = function() { return true; };
$.dynamicFunction('set$value').HTMLButtonElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLButtonElement = function() { return this.value; };
$.dynamicFunction('is$Element').HTMLButtonElement = function() { return true; };
$.dynamicFunction('set$innerHTML').SVGElement = function(svg) {
  var container = $.Element$tag('div');
  container.set$innerHTML('<svg version="1.1">' + $.stringToString(svg) + '</svg>');
  this.set$elements(container.get$elements().get$first().get$elements());
 };
$.dynamicFunction('get$innerHTML').SVGElement = function() {
  var container = $.Element$tag('div');
  var cloned = this.clone$1(true);
  $.addAll(container.get$elements(), cloned.get$elements());
  return container.get$innerHTML();
 };
$.dynamicFunction('set$elements').SVGElement = function(value) {
  var elements = this.get$elements();
  $.clear(elements);
  $.addAll(elements, value);
 };
$.dynamicFunction('get$elements').SVGElement = function() {
  return $.FilteredElementList$1(this);
 };
$.dynamicFunction('is$Element').SVGElement = function() { return true; };
$.dynamicFunction('filter$1').TreeWalker = function(arg0) { return this.filter.$call$1(arg0); };
$.dynamicFunction('is$Element').SVGFEPointLightElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEMergeNodeElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLLinkElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAnimationElement = function() { return true; };
$.dynamicFunction('getRange$2').Float32Array = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').Float32Array = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').Float32Array = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').Float32Array = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').Float32Array = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').Float32Array = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').Float32Array = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').Float32Array = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').Float32Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').Float32Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').Float32Array = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'num'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').Float32Array = function(index, value) {
  this[index] = value;
 };
$.dynamicFunction('operator$index$1').Float32Array = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').Float32Array = function() { return this.length; };
$.dynamicFunction('is$List2').Float32Array = function() { return true; };
$.dynamicFunction('is$Collection').Float32Array = function() { return true; };
$.dynamicFunction('is$Element').SVGFEImageElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').FileReader = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').FileReader = function() {
  return $._lib4_FileReaderEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').SVGFilterElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLHRElement = function() { return true; };
$.dynamicFunction('get$length').SpeechInputResultList = function() { return this.length; };
$.dynamicFunction('is$Element').SVGFEConvolveMatrixElement = function() { return true; };
$.dynamicFunction('getRange$2').MediaList = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').MediaList = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').MediaList = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').MediaList = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').MediaList = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').MediaList = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').MediaList = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').MediaList = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').MediaList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').MediaList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').MediaList = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'String'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').MediaList = function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 };
$.dynamicFunction('operator$index$1').MediaList = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').MediaList = function() { return this.length; };
$.dynamicFunction('is$List2').MediaList = function() { return true; };
$.dynamicFunction('is$Collection').MediaList = function() { return true; };
$.dynamicFunction('is$Element').HTMLSpanElement = function() { return true; };
$.dynamicFunction('toString$0').SVGException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').SVGException = function() { return this.message; };
$.dynamicFunction('is$Element').SVGAElement = function() { return true; };
$.dynamicFunction('get$data').MessageEvent = function() { return this.data; };
$.dynamicFunction('toString$0').DOMSelection = function() {
  return this.toString();
 };
$.dynamicFunction('is$Element').SVGAltGlyphDefElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEMergeElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTextPathElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTableSectionElement = function() { return true; };
$.dynamicFunction('open$1').IDBFactory = function(name) {
  return this.open(name);
 };
$.dynamicFunction('get$open').IDBFactory = function() { return new $.Closure25(this); };
$.dynamicFunction('$dom_replaceChild$2').Node = function(newChild, oldChild) {
  return this.replaceChild(newChild,oldChild);
 };
$.dynamicFunction('$dom_removeChild$1').Node = function(oldChild) {
  return this.removeChild(oldChild);
 };
$.dynamicFunction('contains$1').Node = function(other) {
  return this.contains(other);
 };
$.dynamicFunction('clone$1').Node = function(deep) {
  return this.cloneNode(deep);
 };
$.dynamicFunction('$dom_appendChild$1').Node = function(newChild) {
  return this.appendChild(newChild);
 };
$.dynamicFunction('set$text').Node = function(value) {
  this.textContent = value;;
 };
$.dynamicFunction('get$parent').Node = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$parent')) {
    return this.parentNode;;
  } else {
    return Object.prototype.get$parent.call(this);
  }
 };
$.dynamicFunction('get$$dom_childNodes').Node = function() {
  return this.childNodes;;
 };
$.dynamicFunction('replaceWith$1').Node = function(otherNode) {
  try {
    var parent$ = this.get$parent();
    parent$.$dom_replaceChild$2(otherNode, this);
  }catch (t0) {
    $.unwrapException(t0);
  }
  return this;
 };
$.dynamicFunction('remove$0').Node = function() {
  if (!$.eqNullB(this.get$parent())) {
    this.get$parent().$dom_removeChild$1(this);
  }
  return this;
 };
$.dynamicFunction('get$nodes').Node = function() {
  return $._lib4_ChildNodeListLazy$1(this);
 };
$.dynamicFunction('is$Element').HTMLScriptElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTextPositioningElement = function() { return true; };
$.dynamicFunction('toString$0').OperationNotAllowedException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').OperationNotAllowedException = function() { return this.message; };
$.dynamicFunction('get$length').FileWriterSync = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLLegendElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLContentElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFontFaceUriElement = function() { return true; };
$.dynamicFunction('query$1').DocumentFragment = function(selectors) {
  return this.querySelector(selectors);
 };
$.dynamicFunction('get$on').DocumentFragment = function() {
  return $._lib4_ElementEventsImpl$1(this);
 };
$.dynamicFunction('get$parent').DocumentFragment = function() {
  return;
 };
$.dynamicFunction('get$$dom_lastElementChild').DocumentFragment = function() {
  return $.last(this.get$elements());
 };
$.dynamicFunction('get$$dom_firstElementChild').DocumentFragment = function() {
  return this.get$elements().first$0();
 };
$.dynamicFunction('set$innerHTML').DocumentFragment = function(value) {
  if (Object.getPrototypeOf(this).hasOwnProperty('set$innerHTML')) {
    $.clear(this.get$nodes());
  var e = $.Element$tag('div');
  e.set$innerHTML(value);
  var nodes = $.List$from(e.get$nodes());
  $.addAll(this.get$nodes(), nodes);
  } else {
    return Object.prototype.set$innerHTML.call(this, value);
  }
 };
$.dynamicFunction('get$innerHTML').DocumentFragment = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$innerHTML')) {
    var e = $.Element$tag('div');
  $.add$1(e.get$nodes(), this.clone$1(true));
  return e.get$innerHTML();
  } else {
    return Object.prototype.get$innerHTML.call(this);
  }
 };
$.dynamicFunction('get$elements').DocumentFragment = function() {
  if ($.eqNullB(this.get$_lib4_elements())) {
    this.set$_lib4_elements($.FilteredElementList$1(this));
  }
  return this.get$_lib4_elements();
 };
$.dynamicFunction('set$_lib4_elements').DocumentFragment = function(v) { this._lib4_elements = v; };
$.dynamicFunction('get$_lib4_elements').DocumentFragment = function() { return this._lib4_elements; };
$.dynamicFunction('is$Element').DocumentFragment = function() { return true; };
$.dynamicFunction('get$length').MediaStreamList = function() { return this.length; };
$.dynamicFunction('is$Element').SVGFontFaceFormatElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTrackElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').FileWriter = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$length').FileWriter = function() { return this.length; };
$.dynamicFunction('get$on').FileWriter = function() {
  return $._lib4_FileWriterEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').SVGFEOffsetElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').IDBRequest = function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 };
$.dynamicFunction('get$on').IDBRequest = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._lib4_IDBRequestEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('set$value').AudioParam = function(v) { this.value = v; };
$.dynamicFunction('get$value').AudioParam = function() { return this.value; };
$.dynamicFunction('set$value').Attr = function(v) { this.value = v; };
$.dynamicFunction('get$value').Attr = function() { return this.value; };
$.dynamicFunction('get$length').History = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLUnknownElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEDiffuseLightingElement = function() { return true; };
$.dynamicFunction('is$Element').SVGSetElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').TextTrackList = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$length').TextTrackList = function() { return this.length; };
$.dynamicFunction('get$on').TextTrackList = function() {
  return $._lib4_TextTrackListEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').SVGViewElement = function() { return true; };
$.dynamicFunction('toString$0').XMLHttpRequestException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').XMLHttpRequestException = function() { return this.message; };
$.dynamicFunction('clear$0').SVGNumberList = function() {
  return this.clear();
 };
$.dynamicFunction('toString$0').WorkerLocation = function() {
  return this.toString();
 };
$.dynamicFunction('is$Element').SVGFEColorMatrixElement = function() { return true; };
$.dynamicFunction('is$Element').SVGPolylineElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLMapElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLDirectoryElement = function() { return true; };
$.dynamicFunction('send$1').XMLHttpRequest = function(data) {
  return this.send(data);
 };
$.dynamicFunction('open$5').XMLHttpRequest = function(method, url, async, user, password) {
  return this.open(method,url,async,user,password);
 };
$.dynamicFunction('get$open').XMLHttpRequest = function() { return new $.Closure27(this); };
$.dynamicFunction('$dom_addEventListener$3').XMLHttpRequest = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').XMLHttpRequest = function() {
  return $._lib4_XMLHttpRequestEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').SVGComponentTransferFunctionElement = function() { return true; };
$.dynamicFunction('is$Element').SVGClipPathElement = function() { return true; };
$.dynamicFunction('get$length').SpeechGrammarList = function() { return this.length; };
$.dynamicFunction('clear$0').SVGPathSegList = function() {
  return this.clear();
 };
$.dynamicFunction('get$data').CompositionEvent = function() { return this.data; };
$.dynamicFunction('is$Element').SVGForeignObjectElement = function() { return true; };
$.dynamicFunction('getRange$2').StyleSheetList = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').StyleSheetList = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').StyleSheetList = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').StyleSheetList = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').StyleSheetList = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').StyleSheetList = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').StyleSheetList = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').StyleSheetList = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').StyleSheetList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').StyleSheetList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').StyleSheetList = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'StyleSheet'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').StyleSheetList = function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 };
$.dynamicFunction('operator$index$1').StyleSheetList = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').StyleSheetList = function() { return this.length; };
$.dynamicFunction('is$List2').StyleSheetList = function() { return true; };
$.dynamicFunction('is$Collection').StyleSheetList = function() { return true; };
$.dynamicFunction('is$Element').HTMLEmbedElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEMorphologyElement = function() { return true; };
$.dynamicFunction('get$key').StorageEvent = function() { return this.key; };
$.dynamicFunction('is$Element').SVGFEFuncAElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLCanvasElement = function() { return true; };
$.dynamicFunction('get$length').HTMLFormElement = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLFormElement = function() { return true; };
$.dynamicFunction('toString$0').EventException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').EventException = function() { return this.message; };
$.dynamicFunction('is$Element').SVGVKernElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').DOMApplicationCache = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').DOMApplicationCache = function() {
  return $._lib4_DOMApplicationCacheEventsImpl$1(this);
 };
$.dynamicFunction('get$data').HTMLObjectElement = function() { return this.data; };
$.dynamicFunction('is$Element').HTMLObjectElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').IDBTransaction = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').IDBTransaction = function() {
  return $._lib4_IDBTransactionEventsImpl$1(this);
 };
$.dynamicFunction('close$0').EventSource = function() {
  return this.close();
 };
$.dynamicFunction('get$close').EventSource = function() { return new $.Closure28(this); };
$.dynamicFunction('$dom_addEventListener$3').EventSource = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').EventSource = function() {
  return $._lib4_EventSourceEventsImpl$1(this);
 };
$.dynamicFunction('get$length').WebKitAnimationList = function() { return this.length; };
$.dynamicFunction('is$Element').SVGFEDisplacementMapElement = function() { return true; };
$.dynamicFunction('open$3').DOMWindow = function(url, name, options) {
  return this.open(url,name,options);
 };
$.dynamicFunction('get$open').DOMWindow = function() { return new $.Closure29(this); };
$.dynamicFunction('close$0').DOMWindow = function() {
  return this.close();
 };
$.dynamicFunction('get$close').DOMWindow = function() { return new $.Closure30(this); };
$.dynamicFunction('$dom_addEventListener$3').DOMWindow = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$navigator').DOMWindow = function() { return this.navigator; };
$.dynamicFunction('get$length').DOMWindow = function() { return this.length; };
$.dynamicFunction('get$on').DOMWindow = function() {
  return $._lib4_WindowEventsImpl$1(this);
 };
$.dynamicFunction('set$value').HTMLMeterElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLMeterElement = function() { return this.value; };
$.dynamicFunction('is$Element').HTMLMeterElement = function() { return true; };
$.dynamicFunction('toString$0').WebKitCSSMatrix = function() {
  return this.toString();
 };
$.dynamicFunction('get$length').HTMLAllCollection = function() { return this.length; };
$.dynamicFunction('remove$0').EntrySync = function() {
  return this.remove();
 };
$.dynamicFunction('is$Element').SVGDocument = function() { return true; };
$.dynamicFunction('is$Element').HTMLAreaElement = function() { return true; };
$.dynamicFunction('is$Element').SVGUseElement = function() { return true; };
$.dynamicFunction('is$Element').SVGGradientElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLMetaElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').JavaScriptAudioNode = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').JavaScriptAudioNode = function() {
  return $._lib4_JavaScriptAudioNodeEventsImpl$1(this);
 };
$.dynamicFunction('get$userAgent').Navigator = function() { return this.userAgent; };
$.dynamicFunction('is$Element').SVGPolygonElement = function() { return true; };
$.dynamicFunction('is$Element').SVGSymbolElement = function() { return true; };
$.dynamicFunction('getRange$2').Uint32Array = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').Uint32Array = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').Uint32Array = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').Uint32Array = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').Uint32Array = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').Uint32Array = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').Uint32Array = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').Uint32Array = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').Uint32Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').Uint32Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').Uint32Array = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'int'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').Uint32Array = function(index, value) {
  this[index] = value;
 };
$.dynamicFunction('operator$index$1').Uint32Array = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').Uint32Array = function() { return this.length; };
$.dynamicFunction('is$List2').Uint32Array = function() { return true; };
$.dynamicFunction('is$Collection').Uint32Array = function() { return true; };
$.dynamicFunction('is$Element').SVGStopElement = function() { return true; };
$.dynamicFunction('toString$0').RangeException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').RangeException = function() { return this.message; };
$.dynamicFunction('set$value').HTMLProgressElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLProgressElement = function() { return this.value; };
$.dynamicFunction('is$Element').HTMLProgressElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTableElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').MediaController = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('is$Element').SVGRectElement = function() { return true; };
$.dynamicFunction('toString$0').Range = function() {
  return this.toString();
 };
$.dynamicFunction('getRange$2').Uint16Array = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').Uint16Array = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').Uint16Array = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').Uint16Array = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').Uint16Array = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').Uint16Array = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').Uint16Array = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').Uint16Array = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').Uint16Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').Uint16Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').Uint16Array = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'int'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').Uint16Array = function(index, value) {
  this[index] = value;
 };
$.dynamicFunction('operator$index$1').Uint16Array = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').Uint16Array = function() { return this.length; };
$.dynamicFunction('is$List2').Uint16Array = function() { return true; };
$.dynamicFunction('is$Collection').Uint16Array = function() { return true; };
$.dynamicFunction('is$Element').HTMLFontElement = function() { return true; };
$.dynamicFunction('is$Element').SVGCircleElement = function() { return true; };
$.dynamicFunction('is$Element').SVGCursorElement = function() { return true; };
$.dynamicFunction('$dom_querySelector$1').HTMLDocument = function(selectors) {
  return this.querySelector(selectors);;
 };
$.dynamicFunction('query$1').HTMLDocument = function(selectors) {
  if ($.CTC3.hasMatch$1(selectors) === true) {
    return this.$dom_getElementById$1($.substring$1(selectors, 1));
  }
  return this.$dom_querySelector$1(selectors);
 };
$.dynamicFunction('$dom_getElementById$1').HTMLDocument = function(elementId) {
  return this.getElementById(elementId);
 };
$.dynamicFunction('get$on').HTMLDocument = function() {
  return $._lib4_DocumentEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLDocument = function() { return true; };
$.dynamicFunction('is$Element').SVGFESpotLightElement = function() { return true; };
$.dynamicFunction('get$message').SQLError = function() { return this.message; };
$.dynamicFunction('is$Element').SVGAltGlyphElement = function() { return true; };
$.dynamicFunction('get$message').PositionError = function() { return this.message; };
$.dynamicFunction('is$Element').SVGMetadataElement = function() { return true; };
$.dynamicFunction('get$length').DOMPluginArray = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLOListElement = function() { return true; };
$.dynamicFunction('set$value').HTMLTextAreaElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLTextAreaElement = function() { return this.value; };
$.dynamicFunction('is$Element').HTMLTextAreaElement = function() { return true; };
$.dynamicFunction('getRange$2').Int32Array = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').Int32Array = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').Int32Array = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').Int32Array = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').Int32Array = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').Int32Array = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').Int32Array = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').Int32Array = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').Int32Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').Int32Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').Int32Array = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'int'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').Int32Array = function(index, value) {
  this[index] = value;
 };
$.dynamicFunction('operator$index$1').Int32Array = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').Int32Array = function() { return this.length; };
$.dynamicFunction('is$List2').Int32Array = function() { return true; };
$.dynamicFunction('is$Collection').Int32Array = function() { return true; };
$.dynamicFunction('set$value').HTMLParamElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLParamElement = function() { return this.value; };
$.dynamicFunction('is$Element').HTMLParamElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLUListElement = function() { return true; };
$.dynamicFunction('is$Element').SVGHKernElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTitleElement = function() { return true; };
$.dynamicFunction('getRange$2').Float64Array = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').Float64Array = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').Float64Array = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').Float64Array = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').Float64Array = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').Float64Array = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').Float64Array = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').Float64Array = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').Float64Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').Float64Array = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').Float64Array = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'num'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').Float64Array = function(index, value) {
  this[index] = value;
 };
$.dynamicFunction('operator$index$1').Float64Array = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').Float64Array = function() { return this.length; };
$.dynamicFunction('is$List2').Float64Array = function() { return true; };
$.dynamicFunction('is$Collection').Float64Array = function() { return true; };
$.dynamicFunction('contains$1').DOMStringList = function(string) {
  return this.contains(string);
 };
$.dynamicFunction('getRange$2').DOMStringList = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').DOMStringList = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').DOMStringList = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').DOMStringList = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').DOMStringList = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').DOMStringList = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').DOMStringList = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').DOMStringList = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').DOMStringList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').DOMStringList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').DOMStringList = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'String'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').DOMStringList = function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 };
$.dynamicFunction('operator$index$1').DOMStringList = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').DOMStringList = function() { return this.length; };
$.dynamicFunction('is$List2').DOMStringList = function() { return true; };
$.dynamicFunction('is$Collection').DOMStringList = function() { return true; };
$.dynamicFunction('is$Element').HTMLPreElement = function() { return true; };
$.dynamicFunction('getRange$2').NamedNodeMap = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').NamedNodeMap = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').NamedNodeMap = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').NamedNodeMap = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').NamedNodeMap = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').NamedNodeMap = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').NamedNodeMap = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').NamedNodeMap = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').NamedNodeMap = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').NamedNodeMap = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').NamedNodeMap = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'Node'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').NamedNodeMap = function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 };
$.dynamicFunction('operator$index$1').NamedNodeMap = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').NamedNodeMap = function() { return this.length; };
$.dynamicFunction('is$List2').NamedNodeMap = function() { return true; };
$.dynamicFunction('is$Collection').NamedNodeMap = function() { return true; };
$.dynamicFunction('toString$0').XPathException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').XPathException = function() { return this.message; };
$.dynamicFunction('get$length').MediaStreamTrackList = function() { return this.length; };
$.dynamicFunction('toString$0').HTMLAnchorElement = function() {
  return this.toString();
 };
$.dynamicFunction('is$Element').HTMLAnchorElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEFloodElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLModElement = function() { return true; };
$.dynamicFunction('get$length').DOMMimeTypeArray = function() { return this.length; };
$.dynamicFunction('get$message').SpeechRecognitionError = function() { return this.message; };
$.dynamicFunction('is$Element').SVGPathElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLBaseFontElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFECompositeElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAltGlyphItemElement = function() { return true; };
$.dynamicFunction('is$Element').SVGSwitchElement = function() { return true; };
$.dynamicFunction('get$value').IDBCursorWithValue = function() { return this.value; };
$.dynamicFunction('is$Element').HTMLKeygenElement = function() { return true; };
$.dynamicFunction('get$message').ErrorEvent = function() { return this.message; };
$.dynamicFunction('$dom_addEventListener$3').AbstractWorker = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').AbstractWorker = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._lib4_AbstractWorkerEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('clear$0').SVGStringList = function() {
  return this.clear();
 };
$.dynamicFunction('is$Element').SVGSVGElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFESpecularLightingElement = function() { return true; };
$.dynamicFunction('is$Element').SVGMissingGlyphElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAnimateTransformElement = function() { return true; };
$.dynamicFunction('query$1').Element = function(selectors) {
  return this.querySelector(selectors);
 };
$.dynamicFunction('get$$dom_lastElementChild').Element = function() {
  return this.lastElementChild;;
 };
$.dynamicFunction('set$innerHTML').Element = function(v) { this.innerHTML = v; };
$.dynamicFunction('get$innerHTML').Element = function() { return this.innerHTML; };
$.dynamicFunction('get$$dom_firstElementChild').Element = function() {
  return this.firstElementChild;;
 };
$.dynamicFunction('get$$dom_children').Element = function() {
  return this.children;;
 };
$.dynamicFunction('get$on').Element = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._lib4_ElementEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('get$elements').Element = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$elements')) {
    return $._lib4_ChildrenElementList$_wrap$1(this);
  } else {
    return Object.prototype.get$elements.call(this);
  }
 };
$.dynamicFunction('set$elements').Element = function(value) {
  if (Object.getPrototypeOf(this).hasOwnProperty('set$elements')) {
    var elements = this.get$elements();
  $.clear(elements);
  $.addAll(elements, value);
  } else {
    return Object.prototype.set$elements.call(this, value);
  }
 };
$.dynamicFunction('is$Element').Element = function() { return true; };
$.dynamicFunction('is$Element').SVGDescElement = function() { return true; };
$.dynamicFunction('set$value').DOMSettableTokenList = function(v) { this.value = v; };
$.dynamicFunction('get$value').DOMSettableTokenList = function() { return this.value; };
$.dynamicFunction('get$length').FileList = function() { return this.length; };
$.dynamicFunction('is$Element').SVGTSpanElement = function() { return true; };
$.dynamicFunction('get$filter').CSSStyleDeclaration = function() {
  return this.getPropertyValue$1('' + $.stringToString($._browserPrefix()) + 'filter');
 };
$.dynamicFunction('filter$1').CSSStyleDeclaration = function(arg0) { return this.get$filter().$call$1(arg0); };
$.dynamicFunction('get$clear').CSSStyleDeclaration = function() {
  return this.getPropertyValue$1('clear');
 };
$.dynamicFunction('clear$0').CSSStyleDeclaration = function() { return this.get$clear().$call$0(); };
$.dynamicFunction('getPropertyValue$1').CSSStyleDeclaration = function(propertyName) {
  return this.getPropertyValue(propertyName);
 };
$.dynamicFunction('get$length').CSSStyleDeclaration = function() { return this.length; };
$.dynamicFunction('get$length').AudioBuffer = function() { return this.length; };
$.dynamicFunction('is$Element').SVGGlyphRefElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEComponentTransferElement = function() { return true; };
$.dynamicFunction('$dom_setItem$2').Storage = function(key, data) {
  return this.setItem(key,data);
 };
$.dynamicFunction('$dom_key$1').Storage = function(index) {
  return this.key(index);
 };
$.dynamicFunction('$dom_getItem$1').Storage = function(key) {
  return this.getItem(key);
 };
$.dynamicFunction('$dom_clear$0').Storage = function() {
  return this.clear();
 };
$.dynamicFunction('get$$dom_length').Storage = function() {
  return this.length;;
 };
$.dynamicFunction('isEmpty$0').Storage = function() {
  return $.eqNull(this.$dom_key$1(0));
 };
$.dynamicFunction('get$length').Storage = function() {
  return this.get$$dom_length();
 };
$.dynamicFunction('forEach$1').Storage = function(f) {
  for (var i = 0; true; i = i + 1) {
    var key = this.$dom_key$1(i);
    if ($.eqNullB(key)) {
      return;
    }
    f.$call$2(key, this.operator$index$1(key));
  }
 };
$.dynamicFunction('clear$0').Storage = function() {
  return this.$dom_clear$0();
 };
$.dynamicFunction('operator$indexSet$2').Storage = function(key, value) {
  return this.$dom_setItem$2(key, value);
 };
$.dynamicFunction('operator$index$1').Storage = function(key) {
  return this.$dom_getItem$1(key);
 };
$.dynamicFunction('containsKey$1').Storage = function(key) {
  return !$.eqNullB(this.$dom_getItem$1(key));
 };
$.dynamicFunction('is$Map').Storage = function() { return true; };
$.dynamicFunction('is$Element').HTMLStyleElement = function() { return true; };
$.dynamicFunction('get$on').DedicatedWorkerContext = function() {
  return $._lib4_DedicatedWorkerContextEventsImpl$1(this);
 };
$.dynamicFunction('clear$0').HTMLBRElement = function() { return this.clear.$call$0(); };
$.dynamicFunction('is$Element').HTMLBRElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEFuncRElement = function() { return true; };
$.dynamicFunction('get$on').Worker = function() {
  return $._lib4_WorkerEventsImpl$1(this);
 };
$.dynamicFunction('clear$0').SVGPointList = function() {
  return this.clear();
 };
$.dynamicFunction('clear$0').SVGTransformList = function() {
  return this.clear();
 };
$.dynamicFunction('$dom_addEventListener$3').TextTrack = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').TextTrack = function() {
  return $._lib4_TextTrackEventsImpl$1(this);
 };
$.dynamicFunction('get$message').SQLException = function() { return this.message; };
$.dynamicFunction('is$Element').SVGFEDistantLightElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLLabelElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLMarqueeElement = function() { return true; };
$.dynamicFunction('clear$0').SVGLengthList = function() {
  return this.clear();
 };
$.dynamicFunction('query$1').NodeSelector = function(selectors) {
  return this.querySelector(selectors);
 };
$.dynamicFunction('is$Element').SVGEllipseElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').BatteryManager = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').BatteryManager = function() {
  return $._lib4_BatteryManagerEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').SVGAnimateElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTextContentElement = function() { return true; };
$.dynamicFunction('get$length').SVGElementInstanceList = function() { return this.length; };
$.dynamicFunction('get$length').SpeechRecognitionResultList = function() { return this.length; };
$.dynamicFunction('get$on').AudioContext = function() {
  return $._lib4_AudioContextEventsImpl$1(this);
 };
$.dynamicFunction('getRange$2').TouchList = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').TouchList = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').TouchList = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').TouchList = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').TouchList = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').TouchList = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').TouchList = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').TouchList = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').TouchList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').TouchList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').TouchList = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'Touch'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').TouchList = function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 };
$.dynamicFunction('operator$index$1').TouchList = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').TouchList = function() { return this.length; };
$.dynamicFunction('is$List2').TouchList = function() { return true; };
$.dynamicFunction('is$Collection').TouchList = function() { return true; };
$.dynamicFunction('get$on').HTMLFrameSetElement = function() {
  return $._lib4_FrameSetElementEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLFrameSetElement = function() { return true; };
$.dynamicFunction('get$on').SVGElementInstance = function() {
  return $._lib4_SVGElementInstanceEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').SVGLinearGradientElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFontFaceNameElement = function() { return true; };
$.dynamicFunction('get$on').SharedWorkerContext = function() {
  return $._lib4_SharedWorkerContextEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').SVGFontFaceSrcElement = function() { return true; };
$.dynamicFunction('toString$0').DOMTokenList = function() {
  return this.toString();
 };
$.dynamicFunction('contains$1').DOMTokenList = function(token) {
  return this.contains(token);
 };
$.dynamicFunction('add$1').DOMTokenList = function(token) {
  return this.add(token);
 };
$.dynamicFunction('get$length').DOMTokenList = function() { return this.length; };
$.dynamicFunction('is$Element').SVGDefsElement = function() { return true; };
$.dynamicFunction('toString$0').Location = function() {
  return this.toString();
 };
$.dynamicFunction('is$Element').HTMLFrameElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLVideoElement = function() { return true; };
$.dynamicFunction('toString$0').FileException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').FileException = function() { return this.message; };
$.dynamicFunction('set$value').HTMLSelectElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLSelectElement = function() { return this.value; };
$.dynamicFunction('set$length').HTMLSelectElement = function(v) { this.length = v; };
$.dynamicFunction('get$length').HTMLSelectElement = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLSelectElement = function() { return true; };
$.dynamicFunction('is$Element').SVGGlyphElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLDivElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').TextTrackCue = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('set$text').TextTrackCue = function(v) { this.text = v; };
$.dynamicFunction('get$on').TextTrackCue = function() {
  return $._lib4_TextTrackCueEventsImpl$1(this);
 };
$.dynamicFunction('$dom_addEventListener$3').XMLHttpRequestUpload = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').XMLHttpRequestUpload = function() {
  return $._lib4_XMLHttpRequestUploadEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').SVGPatternElement = function() { return true; };
$.dynamicFunction('get$length').CharacterData = function() { return this.length; };
$.dynamicFunction('get$data').CharacterData = function() { return this.data; };
$.dynamicFunction('get$on').HTMLMediaElement = function() {
  return $._lib4_MediaElementEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLMediaElement = function() { return true; };
$.dynamicFunction('get$key').IDBCursor = function() { return this.key; };
$.dynamicFunction('set$value').HTMLOptionElement = function(v) { this.value = v; };
$.dynamicFunction('get$value').HTMLOptionElement = function() { return this.value; };
$.dynamicFunction('is$Element').HTMLOptionElement = function() { return true; };
$.dynamicFunction('get$length').EntryArray = function() { return this.length; };
$.dynamicFunction('get$open').HTMLDetailsElement = function() { return this.open; };
$.dynamicFunction('is$Element').HTMLDetailsElement = function() { return true; };
$.dynamicFunction('clear$0').DataTransferItemList = function() {
  return this.clear();
 };
$.dynamicFunction('add$2').DataTransferItemList = function(data_OR_file, type) {
  return this.add(data_OR_file,type);
 };
$.dynamicFunction('add$1').DataTransferItemList = function(data_OR_file) {
  return this.add(data_OR_file);
};
$.dynamicFunction('get$length').DataTransferItemList = function() { return this.length; };
_ConsoleImpl = (typeof console == 'undefined' ? {} : console);
$.dynamicFunction('is$Element').SVGFEFuncBElement = function() { return true; };
$.dynamicFunction('send$1').DeprecatedPeerConnection = function(text) {
  return this.send(text);
 };
$.dynamicFunction('close$0').DeprecatedPeerConnection = function() {
  return this.close();
 };
$.dynamicFunction('get$close').DeprecatedPeerConnection = function() { return new $.Closure31(this); };
$.dynamicFunction('$dom_addEventListener$3').DeprecatedPeerConnection = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').DeprecatedPeerConnection = function() {
  return $._lib4_DeprecatedPeerConnectionEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLImageElement = function() { return true; };
$.dynamicFunction('get$data').TextEvent = function() { return this.data; };
$.dynamicFunction('$dom_addEventListener$3').IDBVersionChangeRequest = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').IDBVersionChangeRequest = function() {
  return $._lib4_IDBVersionChangeRequestEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLIFrameElement = function() { return true; };
$.dynamicFunction('toString$0').DOMException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').DOMException = function() { return this.message; };
$.dynamicFunction('get$length').TimeRanges = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLHeadingElement = function() { return true; };
$.dynamicFunction('close$0').PeerConnection00 = function() {
  return this.close();
 };
$.dynamicFunction('get$close').PeerConnection00 = function() { return new $.Closure32(this); };
$.dynamicFunction('$dom_addEventListener$3').PeerConnection00 = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').PeerConnection00 = function() {
  return $._lib4_PeerConnection00EventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLSourceElement = function() { return true; };
$.dynamicFunction('close$0').IDBDatabase = function() {
  return this.close();
 };
$.dynamicFunction('get$close').IDBDatabase = function() { return new $.Closure33(this); };
$.dynamicFunction('$dom_addEventListener$3').IDBDatabase = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').IDBDatabase = function() {
  return $._lib4_IDBDatabaseEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLTableRowElement = function() { return true; };
$.dynamicFunction('set$value').SVGAngle = function(v) { this.value = v; };
$.dynamicFunction('get$value').SVGAngle = function() { return this.value; };
$.dynamicFunction('is$Element').SVGFontElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLHtmlElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTextElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTitleElement = function() { return true; };
$.dynamicFunction('clear$0').IDBObjectStore = function() {
  return this.clear();
 };
$.dynamicFunction('add$2').IDBObjectStore = function(value, key) {
  return this.add(value,key);
 };
$.dynamicFunction('add$1').IDBObjectStore = function(value) {
  return this.add(value);
};
$.dynamicFunction('is$Element').HTMLShadowElement = function() { return true; };
$.dynamicFunction('set$length').HTMLOptionsCollection = function(value) {
  this.length = value;;
 };
$.dynamicFunction('get$length').HTMLOptionsCollection = function() {
  return this.length;;
 };
$.dynamicFunction('is$List2').HTMLOptionsCollection = function() { return true; };
$.dynamicFunction('is$Collection').HTMLOptionsCollection = function() { return true; };
$.dynamicFunction('operator$index$1').NodeList = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').NodeList = function() { return this.length; };
$.dynamicFunction('getRange$2').NodeList = function(start, rangeLength) {
  return $._lib4_NodeListWrapper$1($.getRange2(this, start, rangeLength, []));
 };
$.dynamicFunction('get$first').NodeList = function() {
  return this.operator$index$1(0);
 };
$.dynamicFunction('first$0').NodeList = function() { return this.get$first().$call$0(); };
$.dynamicFunction('last$0').NodeList = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').NodeList = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').NodeList = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').NodeList = function(f) {
  return $._lib4_NodeListWrapper$1($.filter3(this, [], f));
 };
$.dynamicFunction('forEach$1').NodeList = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('operator$indexSet$2').NodeList = function(index, value) {
  this.get$_lib4_parent().$dom_replaceChild$2(value, this.operator$index$1(index));
 };
$.dynamicFunction('clear$0').NodeList = function() {
  this.get$_lib4_parent().set$text('');
 };
$.dynamicFunction('removeLast$0').NodeList = function() {
  var result = this.last$0();
  if (!$.eqNullB(result)) {
    this.get$_lib4_parent().$dom_removeChild$1(result);
  }
  return result;
 };
$.dynamicFunction('addAll$1').NodeList = function(collection) {
  for (var t0 = $.iterator(collection); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    this.get$_lib4_parent().$dom_appendChild$1(t1);
  }
 };
$.dynamicFunction('addLast$1').NodeList = function(value) {
  this.get$_lib4_parent().$dom_appendChild$1(value);
 };
$.dynamicFunction('add$1').NodeList = function(value) {
  this.get$_lib4_parent().$dom_appendChild$1(value);
 };
$.dynamicFunction('iterator$0').NodeList = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'Node'}));
  return t0;
 };
$.dynamicFunction('get$_lib4_parent').NodeList = function() { return this._lib4_parent; };
$.dynamicFunction('is$List2').NodeList = function() { return true; };
$.dynamicFunction('is$Collection').NodeList = function() { return true; };
$.dynamicFunction('get$on').HTMLBodyElement = function() {
  return $._lib4_BodyElementEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLBodyElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLParagraphElement = function() { return true; };
$.dynamicFunction('getRange$2').Uint8ClampedArray = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').Uint8ClampedArray = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').Uint8ClampedArray = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').Uint8ClampedArray = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').Uint8ClampedArray = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').Uint8ClampedArray = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').Uint8ClampedArray = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').Uint8ClampedArray = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').Uint8ClampedArray = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').Uint8ClampedArray = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').Uint8ClampedArray = function() {
  var t0 = $._lib4_FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'int'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').Uint8ClampedArray = function(index, value) {
  this[index] = value;
 };
$.dynamicFunction('operator$index$1').Uint8ClampedArray = function(index) {
  return this[index];;
 };
$.dynamicFunction('is$List2').Uint8ClampedArray = function() { return true; };
$.dynamicFunction('is$Collection').Uint8ClampedArray = function() { return true; };
$.dynamicFunction('is$Element').SVGMPathElement = function() { return true; };
// 287 dynamic classes.
// 307 classes
// 26 !leaf
(function(){
  var v0/*class(_SVGTextPositioningElementImpl)*/ = 'SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement';
  var v1/*class(_SVGTextContentElementImpl)*/ = [v0/*class(_SVGTextPositioningElementImpl)*/,'SVGTextContentElement|SVGTextPathElement'].join('|');
  var v2/*class(_SVGGradientElementImpl)*/ = 'SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement';
  var v3/*class(_SVGComponentTransferFunctionElementImpl)*/ = 'SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement';
  var v4/*class(_SVGAnimationElementImpl)*/ = 'SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement';
  var v5/*class(_SVGElementImpl)*/ = [v1/*class(_SVGTextContentElementImpl)*/,v2/*class(_SVGGradientElementImpl)*/,v3/*class(_SVGComponentTransferFunctionElementImpl)*/,v4/*class(_SVGAnimationElementImpl)*/,'SVGElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGClipPathElement|SVGCircleElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement'].join('|');
  var v6/*class(_MediaElementImpl)*/ = 'HTMLMediaElement|HTMLVideoElement|HTMLAudioElement';
  var v7/*class(_ElementImpl)*/ = [v5/*class(_SVGElementImpl)*/,v6/*class(_MediaElementImpl)*/,'Element|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement'].join('|');
  var v8/*class(_DocumentFragmentImpl)*/ = 'DocumentFragment|ShadowRoot';
  var v9/*class(_DocumentImpl)*/ = 'HTMLDocument|SVGDocument';
  var v10/*class(_CharacterDataImpl)*/ = 'CharacterData|Text|CDATASection|Comment';
  var v11/*class(_WorkerContextImpl)*/ = 'WorkerContext|SharedWorkerContext|DedicatedWorkerContext';
  var v12/*class(_NodeImpl)*/ = [v7/*class(_ElementImpl)*/,v8/*class(_DocumentFragmentImpl)*/,v9/*class(_DocumentImpl)*/,v10/*class(_CharacterDataImpl)*/,'Node|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr'].join('|');
  var v13/*class(_MediaStreamImpl)*/ = 'MediaStream|LocalMediaStream';
  var v14/*class(_IDBRequestImpl)*/ = 'IDBRequest|IDBVersionChangeRequest';
  var v15/*class(_AbstractWorkerImpl)*/ = 'AbstractWorker|Worker|SharedWorker';
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['SVGGradientElement', v2/*class(_SVGGradientElementImpl)*/],
    ['Uint8Array', 'Uint8Array|Uint8ClampedArray'],
    ['HTMLDocument', v9/*class(_DocumentImpl)*/],
    ['CSSValueList', 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue'],
    ['MediaStream', v13/*class(_MediaStreamImpl)*/],
    ['UIEvent', 'UIEvent|WheelEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|KeyboardEvent|CompositionEvent'],
    ['WorkerContext', v11/*class(_WorkerContextImpl)*/],
    ['SVGTextPositioningElement', v0/*class(_SVGTextPositioningElementImpl)*/],
    ['SVGTextContentElement', v1/*class(_SVGTextContentElementImpl)*/],
    ['SVGComponentTransferFunctionElement', v3/*class(_SVGComponentTransferFunctionElementImpl)*/],
    ['SVGAnimationElement', v4/*class(_SVGAnimationElementImpl)*/],
    ['SVGElement', v5/*class(_SVGElementImpl)*/],
    ['HTMLMediaElement', v6/*class(_MediaElementImpl)*/],
    ['Element', v7/*class(_ElementImpl)*/],
    ['DocumentFragment', v8/*class(_DocumentFragmentImpl)*/],
    ['CharacterData', v10/*class(_CharacterDataImpl)*/],
    ['Node', v12/*class(_NodeImpl)*/],
    ['IDBRequest', v14/*class(_IDBRequestImpl)*/],
    ['AbstractWorker', v15/*class(_AbstractWorkerImpl)*/],
    ['EventTarget', [v11/*class(_WorkerContextImpl)*/,v12/*class(_NodeImpl)*/,v13/*class(_MediaStreamImpl)*/,v14/*class(_IDBRequestImpl)*/,v15/*class(_AbstractWorkerImpl)*/,'EventTarget|XMLHttpRequestUpload|XMLHttpRequest|DOMWindow|WebSocket|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|PeerConnection00|Notification|MessagePort|MediaController|IDBTransaction|IDBDatabase|FileWriter|FileReader|EventSource|DeprecatedPeerConnection|DOMApplicationCache|BatteryManager|AudioContext'].join('|')],
    ['HTMLCollection', 'HTMLCollection|HTMLOptionsCollection'],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList'],
    ['AudioParam', 'AudioParam|AudioGain'],
    ['IDBCursor', 'IDBCursor|IDBCursorWithValue'],
    ['EntrySync', 'EntrySync|FileEntrySync|DirectoryEntrySync']];
$.dynamicSetMetadata(table);
})();

})();
if (typeof window != 'undefined' && typeof document != 'undefined' &&
    window.addEventListener && document.readyState == 'loading') {
  window.addEventListener('DOMContentLoaded', function(e) {
    $.main();
  });
} else {
  $.main();
}
function init() {
  Isolate.$isolateProperties = {};
Isolate.$defineClass = function(cls, superclass, constructor, prototype) {
  Isolate.$isolateProperties[cls] = constructor;
  constructor.prototype = prototype;
  if (superclass !== "") {
    Isolate.$pendingClasses[cls] = superclass;
  }
};
Isolate.$pendingClasses = {};
Isolate.$finishClasses = function() {
  var pendingClasses = Isolate.$pendingClasses;
  Isolate.$pendingClasses = {};
  var finishedClasses = {};
  function finishClass(cls) {
    if (finishedClasses[cls]) return;
    finishedClasses[cls] = true;
    var superclass = pendingClasses[cls];
    if (!superclass) return;
    finishClass(superclass);
    var constructor = Isolate.$isolateProperties[cls];
    var superConstructor = Isolate.$isolateProperties[superclass];
    var prototype = constructor.prototype;
    if (prototype.__proto__) {
      prototype.__proto__ = superConstructor.prototype;
      prototype.constructor = constructor;
    } else {
      function tmp() {};
      tmp.prototype = superConstructor.prototype;
      var newPrototype = new tmp();
      constructor.prototype = newPrototype;
      newPrototype.constructor = constructor;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      for (var member in prototype) {
        if (hasOwnProperty.call(prototype, member)) {
          newPrototype[member] = prototype[member];
        }
      }
    }
  }
  for (var cls in pendingClasses) finishClass(cls);
};
Isolate.$finishIsolateConstructor = function(oldIsolate) {
  var isolateProperties = oldIsolate.$isolateProperties;
  var isolatePrototype = oldIsolate.prototype;
  var str = "{\n";
  str += "var isolateProperties = Isolate.$isolateProperties;\n";
  for (var staticName in isolateProperties) {
    if (Object.prototype.hasOwnProperty.call(isolateProperties, staticName)) {
      str += "this." + staticName + "= isolateProperties." + staticName + ";\n";
    }
  }
  str += "}\n";
  var newIsolate = new Function(str);
  newIsolate.prototype = isolatePrototype;
  isolatePrototype.constructor = newIsolate;
  newIsolate.$isolateProperties = isolateProperties;
  return newIsolate;
};
}
