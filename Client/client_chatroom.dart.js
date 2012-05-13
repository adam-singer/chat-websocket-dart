function Isolate() {}
init();

var $ = Isolate.$isolateProperties;
Isolate.$defineClass("ExceptionImplementation", "Object", ["_msg"], {
 toString$0: function() {
  if (this._msg === (void 0)) {
    var t0 = 'Exception';
  } else {
    t0 = 'Exception: ' + $.stringToString(this._msg);
  }
  return t0;
 }
});

Isolate.$defineClass("HashMapImplementation", "Object", ["_numberOfDeleted", "_numberOfEntries", "_loadLimit", "_values", "_keys?"], {
 toString$0: function() {
  return $.mapToString(this);
 },
 containsKey$1: function(key) {
  return !$.eqB(this._probeForLookup$1(key), -1);
 },
 forEach$1: function(f) {
  var length$ = $.get$length(this._keys);
  if (typeof length$ !== 'number') return this.forEach$1$bailout(f, 1, length$);
  for (var i = 0; i < length$; i = i + 1) {
    var key = $.index(this._keys, i);
    if (!(key === (void 0)) && !(key === $.CTC7)) {
      f.$call$2(key, $.index(this._values, i));
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
      var length$ = $.get$length(this._keys);
    case 1:
      state = 0;
      var i = 0;
      L0: while (true) {
        if (!$.ltB(i, length$)) break L0;
        var key = $.index(this._keys, i);
        if (!(key === (void 0)) && !(key === $.CTC7)) {
          f.$call$2(key, $.index(this._values, i));
        }
        i = i + 1;
      }
  }
 },
 get$length: function() {
  return this._numberOfEntries;
 },
 isEmpty$0: function() {
  return $.eq(this._numberOfEntries, 0);
 },
 operator$index$1: function(key) {
  var index = this._probeForLookup$1(key);
  if ($.ltB(index, 0)) {
    return;
  }
  return $.index(this._values, index);
 },
 operator$indexSet$2: function(key, value) {
  this._ensureCapacity$0();
  var index = this._probeForAdding$1(key);
  if ($.index(this._keys, index) === (void 0) || $.index(this._keys, index) === $.CTC7) {
    this._numberOfEntries = $.add(this._numberOfEntries, 1);
  }
  $.indexSet(this._keys, index, key);
  $.indexSet(this._values, index, value);
 },
 clear$0: function() {
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  var length$ = $.get$length(this._keys);
  if (typeof length$ !== 'number') return this.clear$0$bailout(1, length$);
  for (var i = 0; i < length$; i = i + 1) {
    $.indexSet(this._keys, i, (void 0));
    $.indexSet(this._values, i, (void 0));
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
      this._numberOfEntries = 0;
      this._numberOfDeleted = 0;
      var length$ = $.get$length(this._keys);
    case 1:
      state = 0;
      var i = 0;
      L0: while (true) {
        if (!$.ltB(i, length$)) break L0;
        $.indexSet(this._keys, i, (void 0));
        $.indexSet(this._values, i, (void 0));
        i = i + 1;
      }
  }
 },
 _grow$1: function(newCapacity) {
  $.assert($._isPowerOfTwo(newCapacity));
  var capacity = $.get$length(this._keys);
  if (typeof capacity !== 'number') return this._grow$1$bailout(newCapacity, 1, capacity);
  this._loadLimit = $._computeLoadLimit(newCapacity);
  var oldKeys = this._keys;
  if (typeof oldKeys !== 'string' && (typeof oldKeys !== 'object'||oldKeys.constructor !== Array)) return this._grow$1$bailout(newCapacity, 2, capacity, oldKeys);
  var oldValues = this._values;
  if (typeof oldValues !== 'string' && (typeof oldValues !== 'object'||oldValues.constructor !== Array)) return this._grow$1$bailout(newCapacity, 3, capacity, oldKeys, oldValues);
  this._keys = $.List(newCapacity);
  var t0 = $.List(newCapacity);
  $.setRuntimeTypeInfo(t0, ({E: 'V'}));
  this._values = t0;
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
    var newIndex = this._probeForAdding$1(t2);
    $.indexSet(this._keys, newIndex, t2);
    $.indexSet(this._values, newIndex, t4);
  }
  this._numberOfDeleted = 0;
 },
 _grow$1$bailout: function(newCapacity, state, env0, env1, env2) {
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
      var capacity = $.get$length(this._keys);
    case 1:
      state = 0;
      this._loadLimit = $._computeLoadLimit(newCapacity);
      var oldKeys = this._keys;
    case 2:
      state = 0;
      var oldValues = this._values;
    case 3:
      state = 0;
      this._keys = $.List(newCapacity);
      var t0 = $.List(newCapacity);
      $.setRuntimeTypeInfo(t0, ({E: 'V'}));
      this._values = t0;
      var i = 0;
      L0: while (true) {
        if (!$.ltB(i, capacity)) break L0;
        c$0:{
          var key = $.index(oldKeys, i);
          if (key === (void 0) || key === $.CTC7) {
            break c$0;
          }
          var value = $.index(oldValues, i);
          var newIndex = this._probeForAdding$1(key);
          $.indexSet(this._keys, newIndex, key);
          $.indexSet(this._values, newIndex, value);
        }
        i = i + 1;
      }
      this._numberOfDeleted = 0;
  }
 },
 _ensureCapacity$0: function() {
  var newNumberOfEntries = $.add(this._numberOfEntries, 1);
  if ($.geB(newNumberOfEntries, this._loadLimit)) {
    this._grow$1($.mul($.get$length(this._keys), 2));
    return;
  }
  var numberOfFree = $.sub($.sub($.get$length(this._keys), newNumberOfEntries), this._numberOfDeleted);
  if ($.gtB(this._numberOfDeleted, numberOfFree)) {
    this._grow$1($.get$length(this._keys));
  }
 },
 _probeForLookup$1: function(key) {
  for (var hash = $._firstProbe($.hashCode(key), $.get$length(this._keys)), numberOfProbes = 1; true; hash = hash0, numberOfProbes = numberOfProbes0) {
    var numberOfProbes0 = numberOfProbes;
    var hash0 = hash;
    var existingKey = $.index(this._keys, hash);
    if (existingKey === (void 0)) {
      return -1;
    }
    if ($.eqB(existingKey, key)) {
      return hash;
    }
    var numberOfProbes1 = numberOfProbes + 1;
    var hash1 = $._nextProbe(hash, numberOfProbes, $.get$length(this._keys));
    numberOfProbes0 = numberOfProbes1;
    hash0 = hash1;
  }
 },
 _probeForAdding$1: function(key) {
  var hash = $._firstProbe($.hashCode(key), $.get$length(this._keys));
  if (hash !== (hash | 0)) return this._probeForAdding$1$bailout(key, 1, hash);
  for (var numberOfProbes = 1, hash0 = hash, insertionIndex = -1; true; numberOfProbes = numberOfProbes0, hash0 = hash1, insertionIndex = insertionIndex0) {
    var numberOfProbes0 = numberOfProbes;
    var hash1 = hash0;
    var insertionIndex0 = insertionIndex;
    var existingKey = $.index(this._keys, hash0);
    if (existingKey === (void 0)) {
      if ($.ltB(insertionIndex, 0)) {
        return hash0;
      }
      return insertionIndex;
    } else {
      if ($.eqB(existingKey, key)) {
        return hash0;
      } else {
        insertionIndex0 = insertionIndex;
        if ($.ltB(insertionIndex, 0) && $.CTC7 === existingKey) {
          insertionIndex0 = hash0;
        }
        var numberOfProbes1 = numberOfProbes + 1;
      }
    }
    var hash2 = $._nextProbe(hash0, numberOfProbes, $.get$length(this._keys));
    numberOfProbes0 = numberOfProbes1;
    hash1 = hash2;
  }
 },
 _probeForAdding$1$bailout: function(key, state, env0) {
  switch (state) {
    case 1:
      hash = env0;
      break;
  }
  switch (state) {
    case 0:
      var hash = $._firstProbe($.hashCode(key), $.get$length(this._keys));
    case 1:
      state = 0;
      var numberOfProbes = 1;
      var hash0 = hash;
      var insertionIndex = -1;
      L0: while (true) {
        if (!true) break L0;
        var numberOfProbes0 = numberOfProbes;
        var hash1 = hash0;
        var insertionIndex0 = insertionIndex;
        var existingKey = $.index(this._keys, hash0);
        if (existingKey === (void 0)) {
          if ($.ltB(insertionIndex, 0)) {
            return hash0;
          }
          return insertionIndex;
        } else {
          if ($.eqB(existingKey, key)) {
            return hash0;
          } else {
            insertionIndex0 = insertionIndex;
            if ($.ltB(insertionIndex, 0) && $.CTC7 === existingKey) {
              insertionIndex0 = hash0;
            }
            var numberOfProbes1 = numberOfProbes + 1;
          }
        }
        var hash2 = $._nextProbe(hash0, numberOfProbes, $.get$length(this._keys));
        numberOfProbes0 = numberOfProbes1;
        hash1 = hash2;
        numberOfProbes = numberOfProbes0;
        hash0 = hash1;
        insertionIndex = insertionIndex0;
      }
  }
 },
 HashMapImplementation$0: function() {
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  this._loadLimit = $._computeLoadLimit(8);
  this._keys = $.List(8);
  var t0 = $.List(8);
  $.setRuntimeTypeInfo(t0, ({E: 'V'}));
  this._values = t0;
 },
 is$Map: function() { return true; }
});

Isolate.$defineClass("HashSetImplementation", "Object", ["_backingMap?"], {
 toString$0: function() {
  return $.collectionToString(this);
 },
 iterator$0: function() {
  var t0 = $.HashSetIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({E: 'E'}));
  return t0;
 },
 get$length: function() {
  return $.get$length(this._backingMap);
 },
 isEmpty$0: function() {
  return $.isEmpty(this._backingMap);
 },
 filter$1: function(f) {
  var t0 = ({});
  t0.f_1 = f;
  var result = $.HashSetImplementation$0();
  $.setRuntimeTypeInfo(result, ({E: 'E'}));
  t0.result_2 = result;
  $.forEach(this._backingMap, new $.Closure18(t0));
  return t0.result_2;
 },
 forEach$1: function(f) {
  var t0 = ({});
  t0.f_1 = f;
  $.forEach(this._backingMap, new $.Closure17(t0));
 },
 addAll$1: function(collection) {
  $.forEach(collection, new $.Closure16(this));
 },
 contains$1: function(value) {
  return this._backingMap.containsKey$1(value);
 },
 add$1: function(value) {
  $.indexSet(this._backingMap, value, value);
 },
 clear$0: function() {
  $.clear(this._backingMap);
 },
 HashSetImplementation$0: function() {
  this._backingMap = $.HashMapImplementation$0();
 },
 is$Collection: function() { return true; }
});

Isolate.$defineClass("HashSetIterator", "Object", ["_nextValidIndex", "_entries"], {
 _advance$0: function() {
  var length$ = $.get$length(this._entries);
  if (typeof length$ !== 'number') return this._advance$0$bailout(1, length$);
  var entry = (void 0);
  do {
    var t0 = $.add(this._nextValidIndex, 1);
    this._nextValidIndex = t0;
    if ($.geB(t0, length$)) {
      break;
    }
    entry = $.index(this._entries, this._nextValidIndex);
  } while (entry === (void 0) || entry === $.CTC7);
 },
 _advance$0$bailout: function(state, env0) {
  switch (state) {
    case 1:
      length$ = env0;
      break;
  }
  switch (state) {
    case 0:
      var length$ = $.get$length(this._entries);
    case 1:
      state = 0;
      var entry = (void 0);
      L0: while (true) {
        var t0 = $.add(this._nextValidIndex, 1);
        this._nextValidIndex = t0;
        if ($.geB(t0, length$)) {
          break;
        }
        entry = $.index(this._entries, this._nextValidIndex);
        if (!(entry === (void 0) || entry === $.CTC7)) break L0;
      }
  }
 },
 next$0: function() {
  if (this.hasNext$0() !== true) {
    throw $.captureStackTrace($.CTC2);
  }
  var res = $.index(this._entries, this._nextValidIndex);
  this._advance$0();
  return res;
 },
 hasNext$0: function() {
  if ($.geB(this._nextValidIndex, $.get$length(this._entries))) {
    return false;
  }
  if ($.index(this._entries, this._nextValidIndex) === $.CTC7) {
    this._advance$0();
  }
  return $.lt(this._nextValidIndex, $.get$length(this._entries));
 },
 HashSetIterator$1: function(set_) {
  this._advance$0();
 }
});

Isolate.$defineClass("_DeletedKeySentinel", "Object", [], {
});

Isolate.$defineClass("KeyValuePair", "Object", ["value=", "key?"], {
});

Isolate.$defineClass("LinkedHashMapImplementation", "Object", ["_map", "_lib2_list"], {
 toString$0: function() {
  return $.mapToString(this);
 },
 clear$0: function() {
  $.clear(this._map);
  $.clear(this._lib2_list);
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 get$length: function() {
  return $.get$length(this._map);
 },
 containsKey$1: function(key) {
  return this._map.containsKey$1(key);
 },
 forEach$1: function(f) {
  var t0 = ({});
  t0.f_1 = f;
  $.forEach(this._lib2_list, new $.Closure14(t0));
 },
 operator$index$1: function(key) {
  var entry = $.index(this._map, key);
  if (entry === (void 0)) {
    return;
  }
  return entry.get$element().get$value();
 },
 operator$indexSet$2: function(key, value) {
  if (this._map.containsKey$1(key) === true) {
    $.index(this._map, key).get$element().set$value(value);
  } else {
    $.addLast(this._lib2_list, $.KeyValuePair$2(key, value));
    $.indexSet(this._map, key, this._lib2_list.lastEntry$0());
  }
 },
 LinkedHashMapImplementation$0: function() {
  this._map = $.HashMapImplementation$0();
  var t0 = $.DoubleLinkedQueue$0();
  $.setRuntimeTypeInfo(t0, ({E: 'KeyValuePair<K, V>'}));
  this._lib2_list = t0;
 },
 is$Map: function() { return true; }
});

Isolate.$defineClass("DoubleLinkedQueueEntry", "Object", ["_lib2_element?", "_next=", "_previous="], {
 get$element: function() {
  return this._lib2_element;
 },
 previousEntry$0: function() {
  return this._previous._asNonSentinelEntry$0();
 },
 _asNonSentinelEntry$0: function() {
  return this;
 },
 remove$0: function() {
  var t0 = this._next;
  this._previous.set$_next(t0);
  var t1 = this._previous;
  this._next.set$_previous(t1);
  this._next = (void 0);
  this._previous = (void 0);
  return this._lib2_element;
 },
 prepend$1: function(e) {
  var t0 = $.DoubleLinkedQueueEntry$1(e);
  $.setRuntimeTypeInfo(t0, ({E: 'E'}));
  t0._link$2(this._previous, this);
 },
 _link$2: function(p, n) {
  this._next = n;
  this._previous = p;
  p.set$_next(this);
  n.set$_previous(this);
 },
 DoubleLinkedQueueEntry$1: function(e) {
  this._lib2_element = e;
 }
});

Isolate.$defineClass("_DoubleLinkedQueueEntrySentinel", "DoubleLinkedQueueEntry", ["_lib2_element", "_next", "_previous"], {
 get$element: function() {
  throw $.captureStackTrace($.CTC6);
 },
 _asNonSentinelEntry$0: function() {
  return;
 },
 remove$0: function() {
  throw $.captureStackTrace($.CTC6);
 },
 _DoubleLinkedQueueEntrySentinel$0: function() {
  this._link$2(this, this);
 }
});

Isolate.$defineClass("DoubleLinkedQueue", "Object", ["_sentinel"], {
 toString$0: function() {
  return $.collectionToString(this);
 },
 iterator$0: function() {
  var t0 = $._DoubleLinkedQueueIterator$1(this._sentinel);
  $.setRuntimeTypeInfo(t0, ({E: 'E'}));
  return t0;
 },
 filter$1: function(f) {
  var other = $.DoubleLinkedQueue$0();
  $.setRuntimeTypeInfo(other, ({E: 'E'}));
  for (var entry = this._sentinel.get$_next(); !(entry === this._sentinel); entry = entry0) {
    var entry0 = entry;
    var nextEntry = entry.get$_next();
    if (f.$call$1(entry.get$_lib2_element()) === true) {
      other.addLast$1(entry.get$_lib2_element());
    }
    entry0 = nextEntry;
  }
  return other;
 },
 forEach$1: function(f) {
  for (var entry = this._sentinel.get$_next(); !(entry === this._sentinel); entry = entry0) {
    var entry0 = entry;
    var nextEntry = entry.get$_next();
    f.$call$1(entry.get$_lib2_element());
    entry0 = nextEntry;
  }
 },
 clear$0: function() {
  var t0 = this._sentinel;
  this._sentinel.set$_next(t0);
  var t1 = this._sentinel;
  this._sentinel.set$_previous(t1);
 },
 isEmpty$0: function() {
  return this._sentinel.get$_next() === this._sentinel;
 },
 get$length: function() {
  var t0 = ({});
  t0.counter_1 = 0;
  this.forEach$1(new $.Closure13(t0));
  return t0.counter_1;
 },
 lastEntry$0: function() {
  return this._sentinel.previousEntry$0();
 },
 last$0: function() {
  return this._sentinel.get$_previous().get$element();
 },
 first$0: function() {
  return this._sentinel.get$_next().get$element();
 },
 get$first: function() { return new $.Closure19(this); },
 removeLast$0: function() {
  return this._sentinel.get$_previous().remove$0();
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
  this._sentinel.prepend$1(value);
 },
 DoubleLinkedQueue$0: function() {
  var t0 = $._DoubleLinkedQueueEntrySentinel$0();
  $.setRuntimeTypeInfo(t0, ({E: 'E'}));
  this._sentinel = t0;
 },
 is$Collection: function() { return true; }
});

Isolate.$defineClass("_DoubleLinkedQueueIterator", "Object", ["_currentEntry", "_sentinel"], {
 next$0: function() {
  if (this.hasNext$0() !== true) {
    throw $.captureStackTrace($.CTC2);
  }
  this._currentEntry = this._currentEntry.get$_next();
  return this._currentEntry.get$element();
 },
 hasNext$0: function() {
  return !(this._currentEntry.get$_next() === this._sentinel);
 },
 _DoubleLinkedQueueIterator$1: function(_sentinel) {
  this._currentEntry = this._sentinel;
 }
});

Isolate.$defineClass("StringBufferImpl", "Object", ["_length", "_buffer"], {
 toString$0: function() {
  if ($.get$length(this._buffer) === 0) {
    return '';
  }
  if ($.get$length(this._buffer) === 1) {
    return $.index(this._buffer, 0);
  }
  var result = $.concatAll(this._buffer);
  $.clear(this._buffer);
  $.add$1(this._buffer, result);
  return result;
 },
 clear$0: function() {
  var t0 = $.List((void 0));
  $.setRuntimeTypeInfo(t0, ({E: 'String'}));
  this._buffer = t0;
  this._length = 0;
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
  $.add$1(this._buffer, str);
  this._length = $.add(this._length, $.get$length(str));
  return this;
 },
 isEmpty$0: function() {
  return this._length === 0;
 },
 get$length: function() {
  return this._length;
 },
 StringBufferImpl$1: function(content$) {
  this.clear$0();
  this.add$1(content$);
 }
});

Isolate.$defineClass("JSSyntaxRegExp", "Object", ["ignoreCase?", "multiLine?", "pattern?"], {
 allMatches$1: function(str) {
  $.checkString(str);
  return $._AllMatchesIterable$2(this, str);
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
  return $.MatchImplementation$5(this.pattern, str, matchStart, matchEnd, m);
 },
 JSSyntaxRegExp$_globalVersionOf$1: function(other) {
  $.regExpAttachGlobalNative(this);
 },
 is$JSSyntaxRegExp: true
});

Isolate.$defineClass("MatchImplementation", "Object", ["_groups", "_end", "_start", "str", "pattern?"], {
 operator$index$1: function(index) {
  return this.group$1(index);
 },
 group$1: function(index) {
  return $.index(this._groups, index);
 }
});

Isolate.$defineClass("_AllMatchesIterable", "Object", ["_str", "_re"], {
 iterator$0: function() {
  return $._AllMatchesIterator$2(this._re, this._str);
 }
});

Isolate.$defineClass("_AllMatchesIterator", "Object", ["_done", "_next=", "_str", "_re"], {
 hasNext$0: function() {
  if (this._done === true) {
    return false;
  } else {
    if (!$.eqNullB(this._next)) {
      return true;
    }
  }
  this._next = this._re.firstMatch$1(this._str);
  if ($.eqNullB(this._next)) {
    this._done = true;
    return false;
  } else {
    return true;
  }
 },
 next$0: function() {
  if (this.hasNext$0() !== true) {
    throw $.captureStackTrace($.CTC2);
  }
  var next = this._next;
  this._next = (void 0);
  return next;
 }
});

Isolate.$defineClass("ListIterator", "Object", ["list", "i"], {
 next$0: function() {
  if (this.hasNext$0() !== true) {
    throw $.captureStackTrace($.NoMoreElementsException$0());
  }
  var value = (this.list[this.i]);
  this.i = $.add(this.i, 1);
  return value;
 },
 hasNext$0: function() {
  return $.lt(this.i, (this.list.length));
 }
});

Isolate.$defineClass("Closure20", "Object", [], {
 toString$0: function() {
  return 'Closure';
 }
});

Isolate.$defineClass("MetaInfo", "Object", ["set?", "tags", "tag?"], {
});

Isolate.$defineClass("StringMatch", "Object", ["pattern?", "str", "_lib3_start"], {
 group$1: function(group_) {
  if (!$.eqB(group_, 0)) {
    throw $.captureStackTrace($.IndexOutOfRangeException$1(group_));
  }
  return this.pattern;
 },
 operator$index$1: function(g) {
  return this.group$1(g);
 }
});

Isolate.$defineClass("Object", "", [], {
 toString$0: function() {
  return $.objectToString(this);
 }
});

Isolate.$defineClass("IndexOutOfRangeException", "Object", ["_index"], {
 toString$0: function() {
  return 'IndexOutOfRangeException: ' + $.stringToString(this._index);
 }
});

Isolate.$defineClass("NoSuchMethodException", "Object", ["_existingArgumentNames", "_arguments", "_functionName", "_receiver"], {
 toString$0: function() {
  var sb = $.StringBufferImpl$1('');
  for (var i = 0; $.ltB(i, $.get$length(this._arguments)); i = i + 1) {
    if (i > 0) {
      sb.add$1(', ');
    }
    sb.add$1($.index(this._arguments, i));
  }
  if (this._existingArgumentNames === (void 0)) {
    return 'NoSuchMethodException : method not found: \'' + $.stringToString(this._functionName) + '\'\nReceiver: ' + $.stringToString(this._receiver) + '\nArguments: [' + $.stringToString(sb) + ']';
  } else {
    var actualParameters = sb.toString$0();
    var sb0 = $.StringBufferImpl$1('');
    for (var i0 = 0; $.ltB(i0, $.get$length(this._existingArgumentNames)); i0 = i0 + 1) {
      if (i0 > 0) {
        sb0.add$1(', ');
      }
      sb0.add$1($.index(this._existingArgumentNames, i0));
    }
    var formalParameters = sb0.toString$0();
    return 'NoSuchMethodException: incorrect number of arguments passed to method named \'' + $.stringToString(this._functionName) + '\'\nReceiver: ' + $.stringToString(this._receiver) + '\nTried calling: ' + $.stringToString(this._functionName) + '(' + $.stringToString(actualParameters) + ')\nFound: ' + $.stringToString(this._functionName) + '(' + $.stringToString(formalParameters) + ')';
  }
 }
});

Isolate.$defineClass("ObjectNotClosureException", "Object", [], {
 toString$0: function() {
  return 'Object is not closure';
 }
});

Isolate.$defineClass("IllegalArgumentException", "Object", ["_arg"], {
 toString$0: function() {
  return 'Illegal argument(s): ' + $.stringToString(this._arg);
 }
});

Isolate.$defineClass("StackOverflowException", "Object", [], {
 toString$0: function() {
  return 'Stack Overflow';
 }
});

Isolate.$defineClass("BadNumberFormatException", "Object", ["_s"], {
 toString$0: function() {
  return 'BadNumberFormatException: \'' + $.stringToString(this._s) + '\'';
 }
});

Isolate.$defineClass("NullPointerException", "Object", ["arguments", "functionName"], {
 get$exceptionName: function() {
  return 'NullPointerException';
 },
 toString$0: function() {
  if ($.eqNullB(this.functionName)) {
    return this.get$exceptionName();
  } else {
    return '' + $.stringToString(this.get$exceptionName()) + ' : method: \'' + $.stringToString(this.functionName) + '\'\nReceiver: null\nArguments: ' + $.stringToString(this.arguments);
  }
 }
});

Isolate.$defineClass("NoMoreElementsException", "Object", [], {
 toString$0: function() {
  return 'NoMoreElementsException';
 }
});

Isolate.$defineClass("EmptyQueueException", "Object", [], {
 toString$0: function() {
  return 'EmptyQueueException';
 }
});

Isolate.$defineClass("UnsupportedOperationException", "Object", ["_message"], {
 toString$0: function() {
  return 'UnsupportedOperationException: ' + $.stringToString(this._message);
 }
});

Isolate.$defineClass("IllegalJSRegExpException", "Object", ["_errmsg", "_pattern"], {
 toString$0: function() {
  return 'IllegalJSRegExpException: \'' + $.stringToString(this._pattern) + '\' \'' + $.stringToString(this._errmsg) + '\'';
 }
});

Isolate.$defineClass("ChatClient", "Object", ["_nicknameInput", "_messageInput", "isConnected!", "ws"], {
 displayMessage$1: function(message) {
  var t0 = '' + $.stringToString($.document().query$1('#status').get$innerHTML()) + ' <br/> ' + $.stringToString(message);
  $.document().query$1('#status').set$innerHTML(t0);
 },
 run$0: function() {
  this._messageInput = $.document().query$1('#message');
  $.add$1(this._messageInput.get$on().get$keyPress(), new $.Closure(this));
  this._nicknameInput = $.document().query$1('#nickname');
  $.add$1(this._nicknameInput.get$on().get$keyPress(), new $.Closure2(this));
  this.ws = $.WebSocket('ws://' + $.stringToString($.IP) + ':' + $.stringToString($.PORT) + '/ws');
  $.add$1(this.ws.get$on().get$open(), new $.Closure3(this));
  $.add$1(this.ws.get$on().get$close(), new $.Closure4(this));
  $.add$1(this.ws.get$on().get$message(), new $.Closure5(this));
 },
 sendMessage$0: function() {
  var message = this._messageInput.get$value();
  if ($.isEmpty(message) !== true) {
    this.ws.send$1($.stringify($.makeLiteralMap(['cmd', 'sendmessage', 'args', message])));
    this._messageInput.set$value('');
  }
 },
 setNick$1: function(nick) {
  this._nicknameInput.set$value(nick);
 },
 sendNick$0: function() {
  var name$ = this._nicknameInput.get$value();
  this.ws.send$1($.stringify($.makeLiteralMap(['cmd', 'setnick', 'args', name$])));
 }
});

Isolate.$defineClass("_AbstractWorkerEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_AudioContextEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_BatteryManagerEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_BodyElementEventsImpl", "_ElementEventsImpl", ["_ptr"], {
 get$message: function() {
  return this._get$1('message');
 }
});

Isolate.$defineClass("_DOMApplicationCacheEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_DedicatedWorkerContextEventsImpl", "_WorkerContextEventsImpl", ["_ptr"], {
 get$message: function() {
  return this._get$1('message');
 }
});

Isolate.$defineClass("_DeprecatedPeerConnectionEventsImpl", "_EventsImpl", ["_ptr"], {
 get$open: function() {
  return this._get$1('open');
 },
 get$message: function() {
  return this._get$1('message');
 }
});

Isolate.$defineClass("_DocumentEventsImpl", "_ElementEventsImpl", ["_ptr"], {
 get$keyPress: function() {
  return this._get$1('keypress');
 }
});

Isolate.$defineClass("FilteredElementList", "Object", ["_childNodes", "_node"], {
 last$0: function() {
  return $.last(this.get$_filtered());
 },
 indexOf$2: function(element, start) {
  return $.indexOf$2(this.get$_filtered(), element, start);
 },
 getRange$2: function(start, rangeLength) {
  return $.getRange(this.get$_filtered(), start, rangeLength);
 },
 iterator$0: function() {
  return $.iterator(this.get$_filtered());
 },
 operator$index$1: function(index) {
  return $.index(this.get$_filtered(), index);
 },
 get$length: function() {
  return $.get$length(this.get$_filtered());
 },
 isEmpty$0: function() {
  return $.isEmpty(this.get$_filtered());
 },
 filter$1: function(f) {
  return $.filter(this.get$_filtered(), f);
 },
 removeLast$0: function() {
  var result = this.last$0();
  if (!$.eqNullB(result)) {
    result.remove$0();
  }
  return result;
 },
 clear$0: function() {
  $.clear(this._childNodes);
 },
 removeRange$2: function(start, rangeLength) {
  $.forEach($.getRange(this.get$_filtered(), start, rangeLength), new $.Closure12());
 },
 addLast$1: function(value) {
  this.add$1(value);
 },
 addAll$1: function(collection) {
  $.forEach(collection, this.get$add());
 },
 add$1: function(value) {
  $.add$1(this._childNodes, value);
 },
 get$add: function() { return new $.Closure22(this); },
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
  $.forEach(this.get$_filtered(), f);
 },
 get$first: function() {
  for (var t0 = $.iterator(this._childNodes); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    if (typeof t1 === 'object' && t1.is$Element()) {
      return t1;
    }
  }
  return;
 },
 first$0: function() { return this.get$first().$call$0(); },
 get$_filtered: function() {
  return $.List$from($.filter(this._childNodes, new $.Closure10()));
 },
 is$List2: function() { return true; },
 is$Collection: function() { return true; }
});

Isolate.$defineClass("_ChildrenElementList", "Object", ["_childElements", "_element?"], {
 last$0: function() {
  return this._element.get$$$dom_lastElementChild();
 },
 removeLast$0: function() {
  var result = this.last$0();
  if (!$.eqNullB(result)) {
    this._element.$dom_removeChild$1(result);
  }
  return result;
 },
 clear$0: function() {
  this._element.set$text('');
 },
 indexOf$2: function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 },
 getRange$2: function(start, rangeLength) {
  return $._FrozenElementList$_wrap$1($.getRange2(this, start, rangeLength, []));
 },
 addAll$1: function(collection) {
  for (var t0 = $.iterator(collection); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    this._element.$dom_appendChild$1(t1);
  }
 },
 iterator$0: function() {
  return $.iterator(this._toList$0());
 },
 addLast$1: function(value) {
  return this.add$1(value);
 },
 add$1: function(value) {
  this._element.$dom_appendChild$1(value);
  return value;
 },
 set$length: function(newLength) {
  throw $.captureStackTrace($.CTC4);
 },
 operator$indexSet$2: function(index, value) {
  this._element.$dom_replaceChild$2(value, $.index(this._childElements, index));
 },
 operator$index$1: function(index) {
  return $.index(this._childElements, index);
 },
 get$length: function() {
  return $.get$length(this._childElements);
 },
 isEmpty$0: function() {
  return $.eqNull(this._element.get$$$dom_firstElementChild());
 },
 filter$1: function(f) {
  var t0 = ({});
  t0.f_1 = f;
  var output = [];
  this.forEach$1(new $.Closure11(t0, output));
  return $._FrozenElementList$_wrap$1(output);
 },
 forEach$1: function(f) {
  for (var t0 = $.iterator(this._childElements); t0.hasNext$0() === true; ) {
    f.$call$1(t0.next$0());
  }
 },
 get$first: function() {
  return this._element.get$$$dom_firstElementChild();
 },
 first$0: function() { return this.get$first().$call$0(); },
 _toList$0: function() {
  var output = $.List($.get$length(this._childElements));
  var len = $.get$length(this._childElements);
  if (typeof len !== 'number') return this._toList$0$bailout(1, output, len);
  var i = 0;
  for (; i < len; i = i + 1) {
    var t0 = $.index(this._childElements, i);
    var t1 = output.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    output[i] = t0;
  }
  return output;
 },
 _toList$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      output = env0;
      len = env1;
      break;
  }
  switch (state) {
    case 0:
      var output = $.List($.get$length(this._childElements));
      var len = $.get$length(this._childElements);
    case 1:
      state = 0;
      var i = 0;
      L0: while (true) {
        if (!$.ltB(i, len)) break L0;
        var t0 = $.index(this._childElements, i);
        var t1 = output.length;
        if (i < 0 || i >= t1) throw $.ioore(i);
        output[i] = t0;
        i = i + 1;
      }
      return output;
  }
 },
 is$List2: function() { return true; },
 is$Collection: function() { return true; }
});

Isolate.$defineClass("_FrozenElementList", "Object", ["_nodeList"], {
 last$0: function() {
  return $.last(this._nodeList);
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.CTC4);
 },
 clear$0: function() {
  throw $.captureStackTrace($.CTC4);
 },
 indexOf$2: function(element, start) {
  return $.indexOf$2(this._nodeList, element, start);
 },
 getRange$2: function(start, rangeLength) {
  return $._FrozenElementList$_wrap$1($.getRange(this._nodeList, start, rangeLength));
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.CTC4);
 },
 iterator$0: function() {
  return $._FrozenElementListIterator$1(this);
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.CTC4);
 },
 add$1: function(value) {
  throw $.captureStackTrace($.CTC4);
 },
 set$length: function(newLength) {
  $.set$length(this._nodeList, newLength);
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.CTC4);
 },
 operator$index$1: function(index) {
  return $.index(this._nodeList, index);
 },
 get$length: function() {
  return $.get$length(this._nodeList);
 },
 isEmpty$0: function() {
  return $.isEmpty(this._nodeList);
 },
 filter$1: function(f) {
  var out = $._ElementList$1([]);
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
  return $.index(this._nodeList, 0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 is$List2: function() { return true; },
 is$Collection: function() { return true; }
});

Isolate.$defineClass("_FrozenElementListIterator", "Object", ["_lib_index", "_list"], {
 hasNext$0: function() {
  return $.lt(this._lib_index, $.get$length(this._list));
 },
 next$0: function() {
  if (this.hasNext$0() !== true) {
    throw $.captureStackTrace($.CTC2);
  }
  var t0 = this._list;
  var t1 = this._lib_index;
  this._lib_index = $.add(t1, 1);
  return $.index(t0, t1);
 }
});

Isolate.$defineClass("_ElementList", "_ListWrapper", ["_list"], {
 getRange$2: function(start, rangeLength) {
  return $._ElementList$1($._ListWrapper.prototype.getRange$2.call(this, start, rangeLength));
 },
 filter$1: function(f) {
  return $._ElementList$1($._ListWrapper.prototype.filter$1.call(this, f));
 },
 is$List2: function() { return true; },
 is$Collection: function() { return true; }
});

Isolate.$defineClass("_ElementEventsImpl", "_EventsImpl", ["_ptr"], {
 get$keyPress: function() {
  return this._get$1('keypress');
 }
});

Isolate.$defineClass("_EventSourceEventsImpl", "_EventsImpl", ["_ptr"], {
 get$open: function() {
  return this._get$1('open');
 },
 get$message: function() {
  return this._get$1('message');
 }
});

Isolate.$defineClass("_EventsImpl", "Object", ["_ptr"], {
 _get$1: function(type) {
  return $._EventListenerListImpl$2(this._ptr, type);
 },
 operator$index$1: function(type) {
  return this._get$1($.toLowerCase(type));
 }
});

Isolate.$defineClass("_EventListenerListImpl", "Object", ["_type", "_ptr"], {
 _add$2: function(listener, useCapture) {
  this._ptr.$dom_addEventListener$3(this._type, listener, useCapture);
 },
 add$2: function(listener, useCapture) {
  this._add$2(listener, useCapture);
  return this;
 },
 add$1: function(listener) {
  return this.add$2(listener,false)
}
});

Isolate.$defineClass("_FileReaderEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_FileWriterEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_FrameSetElementEventsImpl", "_ElementEventsImpl", ["_ptr"], {
 get$message: function() {
  return this._get$1('message');
 }
});

Isolate.$defineClass("_IDBDatabaseEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_IDBRequestEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_IDBTransactionEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_IDBVersionChangeRequestEventsImpl", "_IDBRequestEventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_InputElementEventsImpl", "_ElementEventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_JavaScriptAudioNodeEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_MediaElementEventsImpl", "_ElementEventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_MediaStreamEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_MessagePortEventsImpl", "_EventsImpl", ["_ptr"], {
 get$message: function() {
  return this._get$1('message');
 }
});

Isolate.$defineClass("_ChildNodeListLazy", "Object", ["_this"], {
 operator$index$1: function(index) {
  return $.index(this._this.get$$$dom_childNodes(), index);
 },
 get$length: function() {
  return $.get$length(this._this.get$$$dom_childNodes());
 },
 getRange$2: function(start, rangeLength) {
  return $._NodeListWrapper$1($.getRange2(this, start, rangeLength, []));
 },
 indexOf$2: function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._NodeListWrapper$1($.filter3(this, [], f));
 },
 forEach$1: function(f) {
  return $.forEach3(this, f);
 },
 iterator$0: function() {
  return $.iterator(this._this.get$$$dom_childNodes());
 },
 operator$indexSet$2: function(index, value) {
  this._this.$dom_replaceChild$2(value, this.operator$index$1(index));
 },
 clear$0: function() {
  this._this.set$text('');
 },
 removeLast$0: function() {
  var result = this.last$0();
  if (!$.eqNullB(result)) {
    this._this.$dom_removeChild$1(result);
  }
  return result;
 },
 addAll$1: function(collection) {
  for (var t0 = $.iterator(collection); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    this._this.$dom_appendChild$1(t1);
  }
 },
 addLast$1: function(value) {
  this._this.$dom_appendChild$1(value);
 },
 add$1: function(value) {
  this._this.$dom_appendChild$1(value);
 },
 last$0: function() {
  return this._this.lastChild;;
 },
 get$first: function() {
  return this._this.firstChild;;
 },
 first$0: function() { return this.get$first().$call$0(); },
 is$List2: function() { return true; },
 is$Collection: function() { return true; }
});

Isolate.$defineClass("_ListWrapper", "Object", [], {
 get$first: function() {
  return $.index(this._list, 0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 getRange$2: function(start, rangeLength) {
  return $.getRange(this._list, start, rangeLength);
 },
 last$0: function() {
  return $.last(this._list);
 },
 removeLast$0: function() {
  return $.removeLast(this._list);
 },
 clear$0: function() {
  return $.clear(this._list);
 },
 indexOf$2: function(element, start) {
  return $.indexOf$2(this._list, element, start);
 },
 addAll$1: function(collection) {
  return $.addAll(this._list, collection);
 },
 addLast$1: function(value) {
  return $.addLast(this._list, value);
 },
 add$1: function(value) {
  return $.add$1(this._list, value);
 },
 set$length: function(newLength) {
  $.set$length(this._list, newLength);
 },
 operator$indexSet$2: function(index, value) {
  $.indexSet(this._list, index, value);
 },
 operator$index$1: function(index) {
  return $.index(this._list, index);
 },
 get$length: function() {
  return $.get$length(this._list);
 },
 isEmpty$0: function() {
  return $.isEmpty(this._list);
 },
 filter$1: function(f) {
  return $.filter(this._list, f);
 },
 forEach$1: function(f) {
  return $.forEach(this._list, f);
 },
 iterator$0: function() {
  return $.iterator(this._list);
 },
 is$List2: function() { return true; },
 is$Collection: function() { return true; }
});

Isolate.$defineClass("_NodeListWrapper", "_ListWrapper", ["_list"], {
 getRange$2: function(start, rangeLength) {
  return $._NodeListWrapper$1($.getRange(this._list, start, rangeLength));
 },
 filter$1: function(f) {
  return $._NodeListWrapper$1($.filter(this._list, f));
 },
 is$List2: function() { return true; },
 is$Collection: function() { return true; }
});

Isolate.$defineClass("_NotificationEventsImpl", "_EventsImpl", ["_ptr"], {
 get$close: function() {
  return this._get$1('close');
 }
});

Isolate.$defineClass("_PeerConnection00EventsImpl", "_EventsImpl", ["_ptr"], {
 get$open: function() {
  return this._get$1('open');
 }
});

Isolate.$defineClass("_SVGElementInstanceEventsImpl", "_EventsImpl", ["_ptr"], {
 get$keyPress: function() {
  return this._get$1('keypress');
 }
});

Isolate.$defineClass("_SharedWorkerContextEventsImpl", "_WorkerContextEventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_SpeechRecognitionEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_TextTrackEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_TextTrackCueEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_TextTrackListEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_WebSocketEventsImpl", "_EventsImpl", ["_ptr"], {
 get$open: function() {
  return this._get$1('open');
 },
 get$message: function() {
  return this._get$1('message');
 },
 get$close: function() {
  return this._get$1('close');
 }
});

Isolate.$defineClass("_WindowEventsImpl", "_EventsImpl", ["_ptr"], {
 get$message: function() {
  return this._get$1('message');
 },
 get$keyPress: function() {
  return this._get$1('keypress');
 }
});

Isolate.$defineClass("_WorkerEventsImpl", "_AbstractWorkerEventsImpl", ["_ptr"], {
 get$message: function() {
  return this._get$1('message');
 }
});

Isolate.$defineClass("_WorkerContextEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_XMLHttpRequestEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_XMLHttpRequestUploadEventsImpl", "_EventsImpl", ["_ptr"], {
});

Isolate.$defineClass("_FixedSizeListIterator", "_VariableSizeListIterator", ["_lib_length", "_pos", "_array"], {
 hasNext$0: function() {
  return $.gt(this._lib_length, this._pos);
 }
});

Isolate.$defineClass("_VariableSizeListIterator", "Object", [], {
 next$0: function() {
  if (this.hasNext$0() !== true) {
    throw $.captureStackTrace($.CTC2);
  }
  var t0 = this._array;
  var t1 = this._pos;
  this._pos = $.add(t1, 1);
  return $.index(t0, t1);
 },
 hasNext$0: function() {
  return $.gt($.get$length(this._array), this._pos);
 }
});

Isolate.$defineClass("_JsonParser", "Object", ["position", "length?", "json"], {
 _error$1: function(message) {
  throw $.captureStackTrace(message);
 },
 _token$0: function() {
  for (; true; ) {
    if ($.geB(this.position, $.get$length(this))) {
      return;
    }
    var char$ = $.charCodeAt(this.json, this.position);
    var token = $.index($.tokens, char$);
    if (token === 32) {
      this.position = $.add(this.position, 1);
      continue;
    }
    if (token === (void 0)) {
      return 0;
    }
    return token;
  }
 },
 _nextChar$0: function() {
  this.position = $.add(this.position, 1);
  if ($.geB(this.position, $.get$length(this))) {
    return 0;
  }
  return $.charCodeAt(this.json, this.position);
 },
 _char$0: function() {
  if ($.geB(this.position, $.get$length(this))) {
    this._error$1('Unexpected end of JSON stream');
  }
  return $.charCodeAt(this.json, this.position);
 },
 _isToken$1: function(tokenKind) {
  return $.eq(this._token$0(), tokenKind);
 },
 _isDigit$1: function(char$) {
  return $.geB(char$, 48) && $.leB(char$, 57);
 },
 _parseNumber$0: function() {
  if (this._isToken$1(45) !== true) {
    this._error$1('Expected number literal');
  }
  var startPos = this.position;
  var char$ = this._char$0();
  var char0 = char$;
  if (char$ === 45) {
    char0 = this._nextChar$0();
  }
  if (char0 === 48) {
    var char1 = this._nextChar$0();
  } else {
    if (this._isDigit$1(char0) === true) {
      for (var char2 = this._nextChar$0(); this._isDigit$1(char2) === true; char2 = char3) {
        var char3 = char2;
        char3 = this._nextChar$0();
      }
      char1 = char2;
    } else {
      this._error$1('Expected digit when parsing number');
      char1 = char0;
    }
  }
  var char4 = char1;
  var isInt = true;
  if (char1 === 46) {
    var char5 = this._nextChar$0();
    if (this._isDigit$1(char5) === true) {
      for (var char6 = this._nextChar$0(); this._isDigit$1(char6) === true; char6 = char7) {
        var char7 = char6;
        char7 = this._nextChar$0();
      }
      char4 = char6;
      isInt = false;
    } else {
      this._error$1('Expected digit following comma');
      char4 = char5;
      isInt = true;
    }
  }
  var isInt0 = isInt;
  if (char4 === 101 || char4 === 69) {
    var char8 = this._nextChar$0();
    var char9 = char8;
    if (char8 === 45 || char8 === 43) {
      char9 = this._nextChar$0();
    }
    if (this._isDigit$1(char9) === true) {
      for (var char10 = this._nextChar$0(); this._isDigit$1(char10) === true; char10 = char11) {
        var char11 = char10;
        char11 = this._nextChar$0();
      }
      isInt0 = false;
    } else {
      this._error$1('Expected digit following \'e\' or \'E\'');
      isInt0 = isInt;
    }
  }
  var number = $.substring$2(this.json, startPos, this.position);
  if (isInt0) {
    return $.parseInt(number);
  } else {
    return $.parseDouble(number);
  }
 },
 _parseString$0: function() {
  if (this._isToken$1(34) !== true) {
    this._error$1('Expected string literal');
  }
  this.position = $.add(this.position, 1);
  var charCodes = $.List((void 0));
  $.setRuntimeTypeInfo(charCodes, ({E: 'int'}));
  for (; true; ) {
    var c = this._char$0();
    if ($.eqB(c, 34)) {
      this.position = $.add(this.position, 1);
      break;
    }
    if ($.eqB(c, 92)) {
      this.position = $.add(this.position, 1);
      if ($.eqB(this.position, $.get$length(this))) {
        this._error$1('\\ at the end of input');
      }
      $1:{
        var t0 = this._char$0();
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
                          if ($.gtB($.add(this.position, 5), $.get$length(this))) {
                            this._error$1('Invalid unicode esacape sequence');
                          }
                          var codeString = $.substring$2(this.json, $.add(this.position, 1), $.add(this.position, 5));
                          try {
                            var c = $.parseInt('0x' + $.stringToString(codeString));
                          }catch (t1) {
                            $.unwrapException(t1);
                            this._error$1('Invalid unicode esacape sequence');
                          }
                          this.position = $.add(this.position, 4);
                          break $1;
                        } else {
                          this._error$1('Invalid esacape sequence in string literal');
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
    this.position = $.add(this.position, 1);
  }
  return $.String$fromCharCodes(charCodes);
 },
 _parseList$0: function() {
  var list = [];
  this.position = $.add(this.position, 1);
  if (this._isToken$1(93) !== true) {
    for (; true; ) {
      $.add$1(list, this._parseValue$0());
      if (this._isToken$1(44) !== true) {
        break;
      }
      this.position = $.add(this.position, 1);
    }
    if (this._isToken$1(93) !== true) {
      this._error$1('Expected \']\' at end of list');
    }
  }
  this.position = $.add(this.position, 1);
  return list;
 },
 _parseObject$0: function() {
  var object = $.makeLiteralMap([]);
  if (typeof object !== 'object'||object.constructor !== Array||!!object.immutable$list) return this._parseObject$0$bailout(1, object);
  this.position = $.add(this.position, 1);
  if (this._isToken$1(125) !== true) {
    for (; true; ) {
      var key = this._parseString$0();
      if (this._isToken$1(58) !== true) {
        this._error$1('Expected \':\' when parsing object');
      }
      this.position = $.add(this.position, 1);
      var t0 = this._parseValue$0();
      if (key !== (key | 0)) throw $.iae(key);
      var t1 = object.length;
      if (key < 0 || key >= t1) throw $.ioore(key);
      object[key] = t0;
      if (this._isToken$1(44) !== true) {
        break;
      }
      this.position = $.add(this.position, 1);
    }
    if (this._isToken$1(125) !== true) {
      this._error$1('Expected \'}\' at end of object');
    }
  }
  this.position = $.add(this.position, 1);
  return object;
 },
 _parseObject$0$bailout: function(state, env0) {
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
      this.position = $.add(this.position, 1);
      if (this._isToken$1(125) !== true) {
        L0: while (true) {
          if (!true) break L0;
          var key = this._parseString$0();
          if (this._isToken$1(58) !== true) {
            this._error$1('Expected \':\' when parsing object');
          }
          this.position = $.add(this.position, 1);
          $.indexSet(object, key, this._parseValue$0());
          if (this._isToken$1(44) !== true) {
            break;
          }
          this.position = $.add(this.position, 1);
        }
        if (this._isToken$1(125) !== true) {
          this._error$1('Expected \'}\' at end of object');
        }
      }
      this.position = $.add(this.position, 1);
      return object;
  }
 },
 _expectKeyword$2: function(word, value) {
  for (var i = 0; $.ltB(i, $.get$length(word)); i = i + 1) {
    if (!$.eqB(this._char$0(), $.charCodeAt(word, i))) {
      this._error$1('Expected keyword \'' + $.stringToString(word) + '\'');
    }
    this.position = $.add(this.position, 1);
  }
  return value;
 },
 _parseValue$0: function() {
  var token = this._token$0();
  if (token === (void 0)) {
    this._error$1('Nothing to parse');
  }
  $0:{
    if (34 === token) {
      return this._parseString$0();
    } else {
      if (45 === token) {
        return this._parseNumber$0();
      } else {
        if (110 === token) {
          return this._expectKeyword$2('null', (void 0));
        } else {
          if (102 === token) {
            return this._expectKeyword$2('false', false);
          } else {
            if (116 === token) {
              return this._expectKeyword$2('true', true);
            } else {
              if (123 === token) {
                return this._parseObject$0();
              } else {
                if (91 === token) {
                  return this._parseList$0();
                } else {
                  this._error$1('Unexpected token');
                }
              }
            }
          }
        }
      }
    }
  }
 },
 _parseToplevel$0: function() {
  var result = this._parseValue$0();
  if (!(this._token$0() === (void 0))) {
    this._error$1('Junk at the end of JSON input');
  }
  return result;
 },
 _JsonParser$_internal$1: function(json) {
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
 }
});

Isolate.$defineClass("JsonUnsupportedObjectType", "Object", [], {
});

Isolate.$defineClass("JsonStringifier", "Object", ["_seen", "_sb?"], {
 _stringify$1: function(object) {
  var t0 = ({});
  $0:{
    if (typeof object === 'number') {
      $.add$1(this._sb, $._numberToString(object));
      return;
    } else {
      if (object === true) {
        $.add$1(this._sb, 'true');
        return;
      } else {
        if (object === false) {
          $.add$1(this._sb, 'false');
          return;
        } else {
          if (object === (void 0)) {
            $.add$1(this._sb, 'null');
            return;
          } else {
            if (typeof object === 'string') {
              $.add$1(this._sb, '"');
              $._escape(this._sb, object);
              $.add$1(this._sb, '"');
              return;
            } else {
              if (typeof object === 'object' && (object.constructor === Array || object.is$List2())) {
                if (typeof object !== 'object'||object.constructor !== Array) return this._stringify$1$bailout(object, 1, object);
                this._checkCycle$1(object);
                $.add$1(this._sb, '[');
                if (object.length > 0) {
                  var t1 = object.length;
                  if (0 >= t1) throw $.ioore(0);
                  this._stringify$1(object[0]);
                  for (var i = 1; i < object.length; i = i + 1) {
                    $.add$1(this._sb, ',');
                    var t2 = object.length;
                    if (i < 0 || i >= t2) throw $.ioore(i);
                    this._stringify$1(object[i]);
                  }
                }
                $.add$1(this._sb, ']');
                $.removeLast(this._seen);
                return;
              } else {
                if (typeof object === 'object' && object.is$Map()) {
                  this._checkCycle$1(object);
                  $.add$1(this._sb, '{');
                  t0.first_1 = true;
                  object.forEach$1(new $.Closure15(this, t0));
                  $.add$1(this._sb, '}');
                  $.removeLast(this._seen);
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
 _stringify$1$bailout: function(object, state, env0) {
  switch (state) {
    case 1:
      a = env0;
      break;
  }
  switch (state) {
    case 0:
      var t0 = ({});
    case 1:
      $0:{
        switch (state) {
          case 0:
          case 1:
            if ((state == 0 && typeof object === 'number')) {
              $.add$1(this._sb, $._numberToString(object));
              return;
            } else {
              switch (state) {
                case 0:
                case 1:
                  if ((state == 0 && object === true)) {
                    $.add$1(this._sb, 'true');
                    return;
                  } else {
                    switch (state) {
                      case 0:
                      case 1:
                        if ((state == 0 && object === false)) {
                          $.add$1(this._sb, 'false');
                          return;
                        } else {
                          switch (state) {
                            case 0:
                            case 1:
                              if ((state == 0 && object === (void 0))) {
                                $.add$1(this._sb, 'null');
                                return;
                              } else {
                                switch (state) {
                                  case 0:
                                  case 1:
                                    if ((state == 0 && typeof object === 'string')) {
                                      $.add$1(this._sb, '"');
                                      $._escape(this._sb, object);
                                      $.add$1(this._sb, '"');
                                      return;
                                    } else {
                                      switch (state) {
                                        case 0:
                                        case 1:
                                          if (state == 1 || (state == 0 && (typeof object === 'object' && ((object.constructor === Array || object.is$List2()))))) {
                                            switch (state) {
                                              case 0:
                                              case 1:
                                                state = 0;
                                                this._checkCycle$1(object);
                                                $.add$1(this._sb, '[');
                                                if ($.gtB($.get$length(object), 0)) {
                                                  this._stringify$1($.index(object, 0));
                                                  var i = 1;
                                                  L0: while (true) {
                                                    if (!$.ltB(i, $.get$length(object))) break L0;
                                                    $.add$1(this._sb, ',');
                                                    this._stringify$1($.index(object, i));
                                                    i = i + 1;
                                                  }
                                                }
                                                $.add$1(this._sb, ']');
                                                $.removeLast(this._seen);
                                                return;
                                            }
                                          } else {
                                            if (typeof object === 'object' && object.is$Map()) {
                                              this._checkCycle$1(object);
                                              $.add$1(this._sb, '{');
                                              t0.first_1 = true;
                                              object.forEach$1(new $.Closure15(this, t0));
                                              $.add$1(this._sb, '}');
                                              $.removeLast(this._seen);
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
                    }
                  }
              }
            }
        }
      }
  }
 },
 _checkCycle$1: function(object) {
  for (var i = 0; $.ltB(i, $.get$length(this._seen)); i = i + 1) {
    if ($.index(this._seen, i) === object) {
      throw $.captureStackTrace('Cyclic structure');
    }
  }
  $.add$1(this._seen, object);
 },
 get$_result: function() {
  return $.toString(this._sb);
 }
});

Isolate.$defineClass("Closure", "Closure20", ["this_0"], {
 $call$1: function(key) {
  if ($.eqB(key.get$charCode(), 13)) {
    this.this_0.sendMessage$0();
  }
 }
});

Isolate.$defineClass("Closure2", "Closure20", ["this_1"], {
 $call$1: function(key) {
  if ($.eqB(key.get$charCode(), 13)) {
    this.this_1.sendNick$0();
  }
 }
});

Isolate.$defineClass("Closure3", "Closure20", ["this_2"], {
 $call$1: function(a) {
  $.print('open ' + $.stringToString(a));
  this.this_2.set$isConnected(true);
 }
});

Isolate.$defineClass("Closure4", "Closure20", ["this_3"], {
 $call$1: function(c) {
  $.print('close ' + $.stringToString(c));
  this.this_3.set$isConnected(false);
 }
});

Isolate.$defineClass("Closure5", "Closure20", ["this_4"], {
 $call$1: function(m) {
  var jdata = $.parse(m.get$data());
  if ($.eqB($.index(jdata, 'cmd'), 'serversetnick')) {
    this.this_4.setNick$1($.index(jdata, 'args'));
  } else {
    if ($.eqB($.index(jdata, 'cmd'), 'newmessage')) {
      this.this_4.displayMessage$1($.index(jdata, 'args'));
    }
  }
 }
});

Isolate.$defineClass("Closure6", "Closure20", ["box_0"], {
 $call$2: function(k, v) {
  if (this.box_0.first_3 !== true) {
    $.add$1(this.box_0.result_1, ', ');
  }
  this.box_0.first_3 = false;
  $._emitObject(k, this.box_0.result_1, this.box_0.visiting_2);
  $.add$1(this.box_0.result_1, ': ');
  $._emitObject(v, this.box_0.result_1, this.box_0.visiting_2);
 }
});

Isolate.$defineClass("Closure7", "Closure20", ["box_0"], {
 $call$0: function() {
  return this.box_0.closure_1.$call$0();
 }
});

Isolate.$defineClass("Closure8", "Closure20", ["box_0"], {
 $call$0: function() {
  return this.box_0.closure_1.$call$1(this.box_0.arg1_2);
 }
});

Isolate.$defineClass("Closure9", "Closure20", ["box_0"], {
 $call$0: function() {
  return this.box_0.closure_1.$call$2(this.box_0.arg1_2, this.box_0.arg2_3);
 }
});

Isolate.$defineClass("Closure10", "Closure20", [], {
 $call$1: function(n) {
  return typeof n === 'object' && n.is$Element();
 }
});

Isolate.$defineClass("Closure11", "Closure20", ["box_0", "output_2"], {
 $call$1: function(element) {
  if (this.box_0.f_1.$call$1(element) === true) {
    $.add$1(this.output_2, element);
  }
 }
});

Isolate.$defineClass("Closure12", "Closure20", [], {
 $call$1: function(el) {
  return el.remove$0();
 }
});

Isolate.$defineClass("Closure13", "Closure20", ["box_0"], {
 $call$1: function(element) {
  var counter = $.add(this.box_0.counter_1, 1);
  this.box_0.counter_1 = counter;
 }
});

Isolate.$defineClass("Closure14", "Closure20", ["box_0"], {
 $call$1: function(entry) {
  this.box_0.f_1.$call$2(entry.get$key(), entry.get$value());
 }
});

Isolate.$defineClass("Closure15", "Closure20", ["this_2", "box_0"], {
 $call$2: function(key, value) {
  if (this.box_0.first_1 !== true) {
    $.add$1(this.this_2.get$_sb(), ',"');
  } else {
    $.add$1(this.this_2.get$_sb(), '"');
  }
  $._escape(this.this_2.get$_sb(), key);
  $.add$1(this.this_2.get$_sb(), '":');
  this.this_2._stringify$1(value);
  this.box_0.first_1 = false;
 }
});

Isolate.$defineClass("Closure16", "Closure20", ["this_0"], {
 $call$1: function(value) {
  this.this_0.add$1(value);
 }
});

Isolate.$defineClass("Closure17", "Closure20", ["box_0"], {
 $call$2: function(key, value) {
  this.box_0.f_1.$call$1(key);
 }
});

Isolate.$defineClass("Closure18", "Closure20", ["box_0"], {
 $call$2: function(key, value) {
  if (this.box_0.f_1.$call$1(key) === true) {
    $.add$1(this.box_0.result_2, key);
  }
 }
});

Isolate.$defineClass("Closure20", "Object", [], {
 toString$0: function() {
  return 'Closure';
 }
});

Isolate.$defineClass('Closure19', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.first$0();
},
});
Isolate.$defineClass('Closure21', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure22', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$1: function(arg0) {
  return this.self.add$1(arg0);
},
});
Isolate.$defineClass('Closure23', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure24', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure25', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$1: function(arg0) {
  return this.self.open$1(arg0);
},
});
Isolate.$defineClass('Closure26', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure27', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure28', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure29', 'Closure20', function BoundClosure(self) { this.self = self; }, {
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
Isolate.$defineClass('Closure30', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$3: function(arg0, arg1, arg2) {
  return this.self.open$3(arg0, arg1, arg2);
},
$call$2: function(url,name$) {
  return this.$call$3(url,name$,(void 0))
},
});
Isolate.$defineClass('Closure31', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure32', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$0: function() {
  return this.self.close$0();
},
});
Isolate.$defineClass('Closure33', 'Closure20', function BoundClosure(self) { this.self = self; }, {
$call$5: function(arg0, arg1, arg2, arg3, arg4) {
  return this.self.open$5(arg0, arg1, arg2, arg3, arg4);
},
$call$2: function(method,url) {
  return this.$call$5(method,url,(void 0),(void 0),(void 0))
},
});
$._ChildNodeListLazy$1 = function(_this) {
  return new $._ChildNodeListLazy(_this);
};

$._AudioContextEventsImpl$1 = function(_ptr) {
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

$.forEach = function(receiver, f) {
  if ($.isJsArray(receiver) !== true) {
    return receiver.forEach$1(f);
  } else {
    return $.forEach2(receiver, f);
  }
};

$._NodeListWrapper$1 = function(list) {
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

$.forEach2 = function(iterable, f) {
  for (var t0 = $.iterator(iterable); t0.hasNext$0() === true; ) {
    f.$call$1(t0.next$0());
  }
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
  if ($.isJsArray(receiver) !== true) {
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
    if ((typeof(name$)) === 'string' && $.isEmpty(name$) !== true && !(name$ === 'Object')) {
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
    if ($.gtB(b, 31)) {
      return 0;
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

$._DOMApplicationCacheEventsImpl$1 = function(_ptr) {
  return new $._DOMApplicationCacheEventsImpl(_ptr);
};

$.ExceptionImplementation$1 = function(msg) {
  return new $.ExceptionImplementation(msg);
};

$.StringMatch$3 = function(_start, str, pattern) {
  return new $.StringMatch(pattern, str, _start);
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
  if ($.isJsArray(receiver) !== true) {
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

$.filter = function(receiver, predicate) {
  if ($.isJsArray(receiver) !== true) {
    return receiver.filter$1(predicate);
  } else {
    return $.filter2(receiver, [], predicate);
  }
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

$._EventSourceEventsImpl$1 = function(_ptr) {
  return new $._EventSourceEventsImpl(_ptr);
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

$.filter3 = function(source, destination, f) {
  for (var t0 = $.iterator(source); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    if (f.$call$1(t1) === true) {
      $.add$1(destination, t1);
    }
  }
  return destination;
};

$._NotificationEventsImpl$1 = function(_ptr) {
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

$.DoubleLinkedQueueEntry$1 = function(e) {
  var t0 = new $.DoubleLinkedQueueEntry((void 0), (void 0), (void 0));
  t0.DoubleLinkedQueueEntry$1(e);
  return t0;
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
  for (var t1 = $.iterator(c), first = true; t1.hasNext$0() === true; first = first0) {
    var first0 = first;
    var t2 = t1.next$0();
    if (!first) {
      $.add$1(result, ', ');
    }
    $._emitObject(t2, result, visiting);
    first0 = false;
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

$._PeerConnection00EventsImpl$1 = function(_ptr) {
  return new $._PeerConnection00EventsImpl(_ptr);
};

$._ElementList$1 = function(list) {
  return new $._ElementList(list);
};

$._WorkerContextEventsImpl$1 = function(_ptr) {
  return new $._WorkerContextEventsImpl(_ptr);
};

$.isEmpty = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver) === true) {
    return receiver.length === 0;
  }
  return receiver.isEmpty$0();
};

$._DocumentEventsImpl$1 = function(_ptr) {
  return new $._DocumentEventsImpl(_ptr);
};

$.regExpTest = function(regExp, str) {
  return $.regExpGetNative(regExp).test(str);
};

$.WebSocket = function(url) {
  return new WebSocket(url);;
};

$._EventsImpl$1 = function(_ptr) {
  return new $._EventsImpl(_ptr);
};

$.HashSetImplementation$0 = function() {
  var t0 = new $.HashSetImplementation((void 0));
  t0.HashSetImplementation$0();
  return t0;
};

$._IDBRequestEventsImpl$1 = function(_ptr) {
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

$._SpeechRecognitionEventsImpl$1 = function(_ptr) {
  return new $._SpeechRecognitionEventsImpl(_ptr);
};

$._SVGElementInstanceEventsImpl$1 = function(_ptr) {
  return new $._SVGElementInstanceEventsImpl(_ptr);
};

$._JsonParser$_internal$1 = function(json) {
  var t0 = new $._JsonParser(0, $.get$length(json), json);
  t0._JsonParser$_internal$1(json);
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

$.iterator = function(receiver) {
  if ($.isJsArray(receiver) === true) {
    return $.ListIterator$1(receiver);
  }
  return receiver.iterator$0();
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
  stringifier._stringify$1(object);
  return stringifier.get$_result();
};

$._FrozenElementListIterator$1 = function(_list) {
  return new $._FrozenElementListIterator(0, _list);
};

$.mapToString = function(m) {
  var result = $.StringBufferImpl$1('');
  $._emitMap(m, result, $.List((void 0)));
  return result.toString$0();
};

$._XMLHttpRequestEventsImpl$1 = function(_ptr) {
  return new $._XMLHttpRequestEventsImpl(_ptr);
};

$._JavaScriptAudioNodeEventsImpl$1 = function(_ptr) {
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

$._IDBDatabaseEventsImpl$1 = function(_ptr) {
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

$._TextTrackCueEventsImpl$1 = function(_ptr) {
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

$._DedicatedWorkerContextEventsImpl$1 = function(_ptr) {
  return new $._DedicatedWorkerContextEventsImpl(_ptr);
};

$._FileReaderEventsImpl$1 = function(_ptr) {
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

$._FrameSetElementEventsImpl$1 = function(_ptr) {
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

$._AbstractWorkerEventsImpl$1 = function(_ptr) {
  return new $._AbstractWorkerEventsImpl(_ptr);
};

$._computeLoadLimit = function(capacity) {
  return $.tdiv($.mul(capacity, 3), 4);
};

$.HashSetIterator$1 = function(set_) {
  var t0 = new $.HashSetIterator(-1, set_.get$_backingMap().get$_keys());
  t0.HashSetIterator$1(set_);
  return t0;
};

$.IllegalArgumentException$1 = function(arg) {
  return new $.IllegalArgumentException(arg);
};

$._MediaElementEventsImpl$1 = function(_ptr) {
  return new $._MediaElementEventsImpl(_ptr);
};

$._BodyElementEventsImpl$1 = function(_ptr) {
  return new $._BodyElementEventsImpl(_ptr);
};

$._IDBTransactionEventsImpl$1 = function(_ptr) {
  return new $._IDBTransactionEventsImpl(_ptr);
};

$._AllMatchesIterator$2 = function(re, _str) {
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
  for (var startIndex = 0; true; startIndex = startIndex0) {
    var startIndex0 = startIndex;
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
        startIndex0 = $.add(startIndex, 1);
      } else {
        startIndex0 = endIndex;
      }
    }
  }
  return result;
};

$._ChildrenElementList$_wrap$1 = function(element) {
  return new $._ChildrenElementList(element.get$$$dom_children(), element);
};

$._AllMatchesIterable$2 = function(_re, _str) {
  return new $._AllMatchesIterable(_str, _re);
};

$.dynamicSetMetadata = function(inputTable) {
  var t0 = $.buildDynamicMetadata(inputTable);
  $._dynamicMetadata(t0);
};

$.ListIterator$1 = function(list) {
  return new $.ListIterator(list, 0);
};

$.addLast = function(receiver, value) {
  if ($.isJsArray(receiver) !== true) {
    return receiver.addLast$1(value);
  }
  $.checkGrowable(receiver, 'addLast');
  receiver.push(value);
};

$.checkNum = function(value) {
  if (!(typeof value === 'number')) {
    $.checkNull(value);
    throw $.captureStackTrace($.IllegalArgumentException$1(value));
  }
  return value;
};

$._WorkerEventsImpl$1 = function(_ptr) {
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

$._FixedSizeListIterator$1 = function(array) {
  return new $._FixedSizeListIterator($.get$length(array), 0, array);
};

$.parse2 = function(json) {
  return $._JsonParser$_internal$1(json)._parseToplevel$0();
};

$._FrozenElementList$_wrap$1 = function(_nodeList) {
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
  for (var t0 = $.iterator(strings), result = ''; t0.hasNext$0() === true; result = result0) {
    var result0 = result;
    var t1 = t0.next$0();
    $.checkNull(t1);
    if (!(typeof t1 === 'string')) {
      throw $.captureStackTrace($.IllegalArgumentException$1(t1));
    }
    result0 = result + t1;
  }
  return result;
};

$.userAgent = function() {
  return $.window().get$navigator().get$userAgent();
};

$._InputElementEventsImpl$1 = function(_ptr) {
  return new $._InputElementEventsImpl(_ptr);
};

$._DoubleLinkedQueueIterator$1 = function(_sentinel) {
  var t0 = new $._DoubleLinkedQueueIterator((void 0), _sentinel);
  t0._DoubleLinkedQueueIterator$1(_sentinel);
  return t0;
};

$.getRange = function(receiver, start, length$) {
  if ($.isJsArray(receiver) !== true) {
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

$.JsonStringifier$_internal$0 = function() {
  var t0 = $.StringBufferImpl$1('');
  var t1 = $.List((void 0));
  $.setRuntimeTypeInfo(t1, ({E: 'Object'}));
  return new $.JsonStringifier(t1, t0);
};

$._TextTrackListEventsImpl$1 = function(_ptr) {
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

$.LinkedHashMapImplementation$0 = function() {
  var t0 = new $.LinkedHashMapImplementation((void 0), (void 0));
  t0.LinkedHashMapImplementation$0();
  return t0;
};

$._DeprecatedPeerConnectionEventsImpl$1 = function(_ptr) {
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

$._EventListenerListImpl$2 = function(_ptr, _type) {
  return new $._EventListenerListImpl(_type, _ptr);
};

$._WindowEventsImpl$1 = function(_ptr) {
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

$._DoubleLinkedQueueEntrySentinel$0 = function() {
  var t0 = new $._DoubleLinkedQueueEntrySentinel((void 0), (void 0), (void 0));
  t0.DoubleLinkedQueueEntry$1((void 0));
  t0._DoubleLinkedQueueEntrySentinel$0();
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
  for (var needsEscape = false, i = 0; i < length$; needsEscape = needsEscape0, i = i0) {
    var needsEscape0 = needsEscape;
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
      needsEscape0 = true;
    } else {
      if ($.eqB(charCode, 34) || $.eqB(charCode, 92)) {
        charCodes.push(92);
        charCodes.push(charCode);
        needsEscape0 = true;
      } else {
        charCodes.push(charCode);
        needsEscape0 = needsEscape;
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
  return new $.ChatClient((void 0), (void 0), false, (void 0));
};

$.IndexOutOfRangeException$1 = function(_index) {
  return new $.IndexOutOfRangeException(_index);
};

$._TextTrackEventsImpl$1 = function(_ptr) {
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

$._BatteryManagerEventsImpl$1 = function(_ptr) {
  return new $._BatteryManagerEventsImpl(_ptr);
};

$._WebSocketEventsImpl$1 = function(_ptr) {
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
  return new $.KeyValuePair(value, key);
};

$._MediaStreamEventsImpl$1 = function(_ptr) {
  return new $._MediaStreamEventsImpl(_ptr);
};

$.defineProperty = function(obj, property, value) {
  Object.defineProperty(obj, property,
      {value: value, enumerable: false, writable: true, configurable: true});;
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
  if ($.isJsArray(receiver) !== true) {
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
  var name0 = name$;
  if ($.charCodeAt(name$, 0) === 36) {
    name0 = $.substring$1(name$, 1);
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

$.hashCode = function(receiver) {
  if (typeof receiver === 'number') {
    return receiver & 0x1FFFFFFF;
  }
  if (!(typeof receiver === 'string')) {
    return receiver.hashCode$0();
  }
  var length$ = (receiver.length);
  for (var hash = 0, i = 0; i < length$; hash = hash0, i = i0) {
    var hash0 = hash;
    var hash1 = (536870911 & hash + (receiver.charCodeAt(i))) >>> 0;
    var hash2 = (536870911 & hash1 + ((524287 & hash1) >>> 0 << 10)) >>> 0;
    hash0 = (hash2 ^ $.shr(hash2, 6)) >>> 0;
    var i0 = i + 1;
  }
  var hash3 = (536870911 & hash + ((67108863 & hash) >>> 0 << 3)) >>> 0;
  var hash4 = (hash3 ^ $.shr(hash3, 11)) >>> 0;
  return (536870911 & hash4 + ((16383 & hash4) >>> 0 << 15)) >>> 0;
};

$.makeLiteralMap = function(keyValuePairs) {
  var iterator = $.iterator(keyValuePairs);
  var result = $.LinkedHashMapImplementation$0();
  for (; iterator.hasNext$0() === true; ) {
    result.operator$indexSet$2(iterator.next$0(), iterator.next$0());
  }
  return result;
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

$.createFromCharCodes = function(charCodes) {
  $.checkNull(charCodes);
  var charCodes0 = charCodes;
  if ($.isJsArray(charCodes) !== true) {
    if (!((typeof charCodes === 'object') && (((charCodes.constructor === Array) || charCodes.is$List2())))) {
      throw $.captureStackTrace($.IllegalArgumentException$1(charCodes));
    }
    charCodes0 = $.List$from(charCodes);
  }
  return $.stringFromCharCodes(charCodes0);
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

$.dynamicBind = function(obj, name$, methods, arguments$) {
  var tag = $.getTypeNameOf(obj);
  var method = (methods[tag]);
  var method0 = method;
  if (method === (void 0) && !($._dynamicMetadata2() === (void 0))) {
    for (var method1 = method, i = 0; method0 = method1, $.ltB(i, $.get$length($._dynamicMetadata2())); method1 = method2, i = i0) {
      var method2 = method1;
      var entry = $.index($._dynamicMetadata2(), i);
      method2 = method1;
      if ($.contains$1(entry.get$set(), tag) === true) {
        var method3 = (methods[entry.get$tag()]);
        if (!(method3 === (void 0))) {
          method0 = method3;
          break;
        }
        method2 = method3;
      }
      var i0 = i + 1;
    }
  }
  var method4 = method0;
  if (method0 === (void 0)) {
    method4 = (methods['Object']);
  }
  var proto = (Object.getPrototypeOf(obj));
  var method5 = method4;
  if (method4 === (void 0)) {
    method5 = (function () {if (Object.getPrototypeOf(this) === proto) {$.throwNoSuchMethod.$call$3(this, name$, Array.prototype.slice.call(arguments));} else {return Object.prototype[name$].apply(this, arguments);}});
  }
  var nullCheckMethod = (function() {var res = method5.apply(this, Array.prototype.slice.call(arguments));return res === null ? (void 0) : res;});
  if (!proto.hasOwnProperty(name$)) {
    $.defineProperty(proto, name$, nullCheckMethod);
  }
  return nullCheckMethod.apply(obj, arguments$);
};

$._MessagePortEventsImpl$1 = function(_ptr) {
  return new $._MessagePortEventsImpl(_ptr);
};

$.forEach3 = function(iterable, f) {
  for (var t0 = $.iterator(iterable); t0.hasNext$0() === true; ) {
    f.$call$1(t0.next$0());
  }
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

$._ElementEventsImpl$1 = function(_ptr) {
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

$._XMLHttpRequestUploadEventsImpl$1 = function(_ptr) {
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

$._SharedWorkerContextEventsImpl$1 = function(_ptr) {
  return new $._SharedWorkerContextEventsImpl(_ptr);
};

$._IDBVersionChangeRequestEventsImpl$1 = function(_ptr) {
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

$._FileWriterEventsImpl$1 = function(_ptr) {
  return new $._FileWriterEventsImpl(_ptr);
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
        var startIndex0 = startIndex;
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
            startIndex0 = $.add(startIndex, 1);
          } else {
            startIndex0 = endIndex;
          }
        }
        startIndex = startIndex0;
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
        var needsEscape0 = needsEscape;
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
          needsEscape0 = true;
        } else {
          if ($.eqB(charCode, 34) || $.eqB(charCode, 92)) {
            charCodes.push(92);
            charCodes.push(charCode);
            needsEscape0 = true;
          } else {
            charCodes.push(charCode);
            needsEscape0 = needsEscape;
          }
        }
        var i0 = i + 1;
        needsEscape = needsEscape0;
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
$.CTC4 = new Isolate.$isolateProperties.UnsupportedOperationException('');
$.CTC5 = new Isolate.$isolateProperties.IllegalArgumentException('Invalid list length');
$.CTC8 = new Isolate.$isolateProperties.JsonUnsupportedObjectType();
$.CTC3 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^#[_a-zA-Z]\\w*$');
$.CTC7 = new Isolate.$isolateProperties._DeletedKeySentinel();
$.CTC9 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, 'Chrome|DumpRenderTree');
$.CTC10 = new Isolate.$isolateProperties.Object();
$.CTC2 = new Isolate.$isolateProperties.NoMoreElementsException();
$.CTC6 = new Isolate.$isolateProperties.EmptyQueueException();
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
$.defineProperty(Object.prototype, 'is$Map', function() { return false; });
$.defineProperty(Object.prototype, 'is$Element', function() { return false; });
$.defineProperty(Object.prototype, 'is$Collection', function() { return false; });
$.defineProperty(Object.prototype, 'toString$0', function() { return $.toStringForNativeObject(this); });
$.dynamicFunction('$dom_addEventListener$3').AbstractWorker = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').AbstractWorker = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._AbstractWorkerEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('toString$0').HTMLAnchorElement = function() {
  return this.toString();
 };
$.dynamicFunction('is$Element').HTMLAnchorElement = function() { return true; };
$.dynamicFunction('get$length').WebKitAnimationList = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLAppletElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLAreaElement = function() { return true; };
$.dynamicFunction('get$value').Attr = function() { return this.value; };
$.dynamicFunction('set$value').Attr = function(v) { this.value = v; };
$.dynamicFunction('get$length').AudioBuffer = function() { return this.length; };
$.dynamicFunction('get$on').AudioContext = function() {
  return $._AudioContextEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLAudioElement = function() { return true; };
$.dynamicFunction('get$value').AudioParam = function() { return this.value; };
$.dynamicFunction('set$value').AudioParam = function(v) { this.value = v; };
$.dynamicFunction('clear$0').HTMLBRElement = function() { return this.clear.$call$0(); };
$.dynamicFunction('is$Element').HTMLBRElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLBaseElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLBaseFontElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').BatteryManager = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').BatteryManager = function() {
  return $._BatteryManagerEventsImpl$1(this);
 };
$.dynamicFunction('get$on').HTMLBodyElement = function() {
  return $._BodyElementEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLBodyElement = function() { return true; };
$.dynamicFunction('get$value').HTMLButtonElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLButtonElement = function(v) { this.value = v; };
$.dynamicFunction('is$Element').HTMLButtonElement = function() { return true; };
$.dynamicFunction('toString$0').WebKitCSSMatrix = function() {
  return this.toString();
 };
$.dynamicFunction('get$length').CSSRuleList = function() { return this.length; };
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
$.dynamicFunction('get$length').CSSValueList = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLCanvasElement = function() { return true; };
$.dynamicFunction('get$length').CharacterData = function() { return this.length; };
$.dynamicFunction('get$data').CharacterData = function() { return this.data; };
$.dynamicFunction('get$length').ClientRectList = function() { return this.length; };
$.dynamicFunction('get$data').CompositionEvent = function() { return this.data; };
_ConsoleImpl = (typeof console == 'undefined' ? {} : console);
$.dynamicFunction('is$Element').HTMLContentElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLDListElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').DOMApplicationCache = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').DOMApplicationCache = function() {
  return $._DOMApplicationCacheEventsImpl$1(this);
 };
$.dynamicFunction('toString$0').DOMException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').DOMException = function() { return this.message; };
$.dynamicFunction('get$length').DOMMimeTypeArray = function() { return this.length; };
$.dynamicFunction('get$length').DOMPlugin = function() { return this.length; };
$.dynamicFunction('get$length').DOMPluginArray = function() { return this.length; };
$.dynamicFunction('toString$0').DOMSelection = function() {
  return this.toString();
 };
$.dynamicFunction('get$value').DOMSettableTokenList = function() { return this.value; };
$.dynamicFunction('set$value').DOMSettableTokenList = function(v) { this.value = v; };
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
  var t0 = $._FixedSizeListIterator$1(this);
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
$.dynamicFunction('get$on').DedicatedWorkerContext = function() {
  return $._DedicatedWorkerContextEventsImpl$1(this);
 };
$.dynamicFunction('send$1').DeprecatedPeerConnection = function(text) {
  return this.send(text);
 };
$.dynamicFunction('close$0').DeprecatedPeerConnection = function() {
  return this.close();
 };
$.dynamicFunction('get$close').DeprecatedPeerConnection = function() { return new $.Closure21(this); };
$.dynamicFunction('$dom_addEventListener$3').DeprecatedPeerConnection = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').DeprecatedPeerConnection = function() {
  return $._DeprecatedPeerConnectionEventsImpl$1(this);
 };
$.dynamicFunction('get$open').HTMLDetailsElement = function() { return this.open; };
$.dynamicFunction('is$Element').HTMLDetailsElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLDirectoryElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLDivElement = function() { return true; };
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
  return $._DocumentEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLDocument = function() { return true; };
$.dynamicFunction('query$1').DocumentFragment = function(selectors) {
  return this.querySelector(selectors);
 };
$.dynamicFunction('get$on').DocumentFragment = function() {
  return $._ElementEventsImpl$1(this);
 };
$.dynamicFunction('get$parent').DocumentFragment = function() {
  return;
 };
$.dynamicFunction('get$$$dom_lastElementChild').DocumentFragment = function() {
  return $.last(this.get$elements());
 };
$.dynamicFunction('get$$$dom_firstElementChild').DocumentFragment = function() {
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
  if ($.eqNullB(this._elements)) {
    this._elements = $.FilteredElementList$1(this);
  }
  return this._elements;
 };
$.dynamicFunction('is$Element').DocumentFragment = function() { return true; };
$.dynamicFunction('query$1').Element = function(selectors) {
  return this.querySelector(selectors);
 };
$.dynamicFunction('get$$$dom_lastElementChild').Element = function() {
  return this.lastElementChild;;
 };
$.dynamicFunction('get$innerHTML').Element = function() { return this.innerHTML; };
$.dynamicFunction('set$innerHTML').Element = function(v) { this.innerHTML = v; };
$.dynamicFunction('get$$$dom_firstElementChild').Element = function() {
  return this.firstElementChild;;
 };
$.dynamicFunction('get$$$dom_children').Element = function() {
  return this.children;;
 };
$.dynamicFunction('get$on').Element = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._ElementEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('get$elements').Element = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$elements')) {
    return $._ChildrenElementList$_wrap$1(this);
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
$.dynamicFunction('is$Element').HTMLEmbedElement = function() { return true; };
$.dynamicFunction('get$length').EntryArray = function() { return this.length; };
$.dynamicFunction('get$length').EntryArraySync = function() { return this.length; };
$.dynamicFunction('remove$0').EntrySync = function() {
  return this.remove();
 };
$.dynamicFunction('get$message').ErrorEvent = function() { return this.message; };
$.dynamicFunction('toString$0').EventException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').EventException = function() { return this.message; };
$.dynamicFunction('close$0').EventSource = function() {
  return this.close();
 };
$.dynamicFunction('get$close').EventSource = function() { return new $.Closure23(this); };
$.dynamicFunction('$dom_addEventListener$3').EventSource = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').EventSource = function() {
  return $._EventSourceEventsImpl$1(this);
 };
$.dynamicFunction('$dom_addEventListener$3').EventTarget = function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 };
$.dynamicFunction('get$on').EventTarget = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._EventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('is$Element').HTMLFieldSetElement = function() { return true; };
$.dynamicFunction('toString$0').FileException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').FileException = function() { return this.message; };
$.dynamicFunction('getRange$2').FileList = function(start, rangeLength) {
  return $.getRange2(this, start, rangeLength, []);
 };
$.dynamicFunction('removeLast$0').FileList = function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 };
$.dynamicFunction('last$0').FileList = function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 };
$.dynamicFunction('indexOf$2').FileList = function(element, start) {
  return $.indexOf2(this, element, start, $.get$length(this));
 };
$.dynamicFunction('isEmpty$0').FileList = function() {
  return $.eq($.get$length(this), 0);
 };
$.dynamicFunction('filter$1').FileList = function(f) {
  return $.filter3(this, [], f);
 };
$.dynamicFunction('forEach$1').FileList = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('addAll$1').FileList = function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('addLast$1').FileList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('add$1').FileList = function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 };
$.dynamicFunction('iterator$0').FileList = function() {
  var t0 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'File'}));
  return t0;
 };
$.dynamicFunction('operator$indexSet$2').FileList = function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 };
$.dynamicFunction('operator$index$1').FileList = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').FileList = function() { return this.length; };
$.dynamicFunction('is$List2').FileList = function() { return true; };
$.dynamicFunction('is$Collection').FileList = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').FileReader = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').FileReader = function() {
  return $._FileReaderEventsImpl$1(this);
 };
$.dynamicFunction('$dom_addEventListener$3').FileWriter = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$length').FileWriter = function() { return this.length; };
$.dynamicFunction('get$on').FileWriter = function() {
  return $._FileWriterEventsImpl$1(this);
 };
$.dynamicFunction('get$length').FileWriterSync = function() { return this.length; };
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
  var t0 = $._FixedSizeListIterator$1(this);
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
  var t0 = $._FixedSizeListIterator$1(this);
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
$.dynamicFunction('is$Element').HTMLFontElement = function() { return true; };
$.dynamicFunction('get$length').HTMLFormElement = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLFormElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLFrameElement = function() { return true; };
$.dynamicFunction('get$on').HTMLFrameSetElement = function() {
  return $._FrameSetElementEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLFrameSetElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLHRElement = function() { return true; };
$.dynamicFunction('get$length').HTMLAllCollection = function() { return this.length; };
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
  var t0 = $._FixedSizeListIterator$1(this);
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
$.dynamicFunction('set$length').HTMLOptionsCollection = function(value) {
  this.length = value;;
 };
$.dynamicFunction('get$length').HTMLOptionsCollection = function() {
  return this.length;;
 };
$.dynamicFunction('is$List2').HTMLOptionsCollection = function() { return true; };
$.dynamicFunction('is$Collection').HTMLOptionsCollection = function() { return true; };
$.dynamicFunction('is$Element').HTMLHeadElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLHeadingElement = function() { return true; };
$.dynamicFunction('get$length').History = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLHtmlElement = function() { return true; };
$.dynamicFunction('get$key').IDBCursor = function() { return this.key; };
$.dynamicFunction('get$value').IDBCursorWithValue = function() { return this.value; };
$.dynamicFunction('close$0').IDBDatabase = function() {
  return this.close();
 };
$.dynamicFunction('get$close').IDBDatabase = function() { return new $.Closure24(this); };
$.dynamicFunction('$dom_addEventListener$3').IDBDatabase = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').IDBDatabase = function() {
  return $._IDBDatabaseEventsImpl$1(this);
 };
$.dynamicFunction('toString$0').IDBDatabaseException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').IDBDatabaseException = function() { return this.message; };
$.dynamicFunction('open$1').IDBFactory = function(name) {
  return this.open(name);
 };
$.dynamicFunction('get$open').IDBFactory = function() { return new $.Closure25(this); };
$.dynamicFunction('clear$0').IDBObjectStore = function() {
  return this.clear();
 };
$.dynamicFunction('add$2').IDBObjectStore = function(value, key) {
  return this.add(value,key);
 };
$.dynamicFunction('add$1').IDBObjectStore = function(value) {
  return this.add(value);
};
$.dynamicFunction('$dom_addEventListener$3').IDBRequest = function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 };
$.dynamicFunction('get$on').IDBRequest = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._IDBRequestEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('$dom_addEventListener$3').IDBTransaction = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').IDBTransaction = function() {
  return $._IDBTransactionEventsImpl$1(this);
 };
$.dynamicFunction('$dom_addEventListener$3').IDBVersionChangeRequest = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').IDBVersionChangeRequest = function() {
  return $._IDBVersionChangeRequestEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLIFrameElement = function() { return true; };
$.dynamicFunction('get$data').ImageData = function() { return this.data; };
$.dynamicFunction('is$Element').HTMLImageElement = function() { return true; };
$.dynamicFunction('get$value').HTMLInputElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLInputElement = function(v) { this.value = v; };
$.dynamicFunction('get$pattern').HTMLInputElement = function() { return this.pattern; };
$.dynamicFunction('get$on').HTMLInputElement = function() {
  return $._InputElementEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLInputElement = function() { return true; };
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
  var t0 = $._FixedSizeListIterator$1(this);
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
  var t0 = $._FixedSizeListIterator$1(this);
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
  var t0 = $._FixedSizeListIterator$1(this);
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
$.dynamicFunction('$dom_addEventListener$3').JavaScriptAudioNode = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').JavaScriptAudioNode = function() {
  return $._JavaScriptAudioNodeEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLKeygenElement = function() { return true; };
$.dynamicFunction('get$value').HTMLLIElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLLIElement = function(v) { this.value = v; };
$.dynamicFunction('is$Element').HTMLLIElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLLabelElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLLegendElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLLinkElement = function() { return true; };
$.dynamicFunction('toString$0').Location = function() {
  return this.toString();
 };
$.dynamicFunction('is$Element').HTMLMapElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLMarqueeElement = function() { return true; };
$.dynamicFunction('$dom_addEventListener$3').MediaController = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').HTMLMediaElement = function() {
  return $._MediaElementEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLMediaElement = function() { return true; };
$.dynamicFunction('get$message').MediaKeyEvent = function() { return this.message; };
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
  var t0 = $._FixedSizeListIterator$1(this);
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
$.dynamicFunction('$dom_addEventListener$3').MediaStream = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').MediaStream = function() {
  return $._MediaStreamEventsImpl$1(this);
 };
$.dynamicFunction('get$length').MediaStreamList = function() { return this.length; };
$.dynamicFunction('get$length').MediaStreamTrackList = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLMenuElement = function() { return true; };
$.dynamicFunction('get$data').MessageEvent = function() { return this.data; };
$.dynamicFunction('close$0').MessagePort = function() {
  return this.close();
 };
$.dynamicFunction('get$close').MessagePort = function() { return new $.Closure26(this); };
$.dynamicFunction('$dom_addEventListener$3').MessagePort = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').MessagePort = function() {
  return $._MessagePortEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLMetaElement = function() { return true; };
$.dynamicFunction('get$value').HTMLMeterElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLMeterElement = function(v) { this.value = v; };
$.dynamicFunction('is$Element').HTMLMeterElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLModElement = function() { return true; };
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
  var t0 = $._FixedSizeListIterator$1(this);
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
$.dynamicFunction('get$userAgent').Navigator = function() { return this.userAgent; };
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
$.dynamicFunction('get$$$dom_childNodes').Node = function() {
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
  return $._ChildNodeListLazy$1(this);
 };
$.dynamicFunction('filter$1').NodeIterator = function(arg0) { return this.filter.$call$1(arg0); };
$.dynamicFunction('operator$index$1').NodeList = function(index) {
  return this[index];;
 };
$.dynamicFunction('get$length').NodeList = function() { return this.length; };
$.dynamicFunction('getRange$2').NodeList = function(start, rangeLength) {
  return $._NodeListWrapper$1($.getRange2(this, start, rangeLength, []));
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
  return $._NodeListWrapper$1($.filter3(this, [], f));
 };
$.dynamicFunction('forEach$1').NodeList = function(f) {
  return $.forEach3(this, f);
 };
$.dynamicFunction('operator$indexSet$2').NodeList = function(index, value) {
  this._parent.$dom_replaceChild$2(value, this.operator$index$1(index));
 };
$.dynamicFunction('clear$0').NodeList = function() {
  this._parent.set$text('');
 };
$.dynamicFunction('removeLast$0').NodeList = function() {
  var result = this.last$0();
  if (!$.eqNullB(result)) {
    this._parent.$dom_removeChild$1(result);
  }
  return result;
 };
$.dynamicFunction('addAll$1').NodeList = function(collection) {
  for (var t0 = $.iterator(collection); t0.hasNext$0() === true; ) {
    var t1 = t0.next$0();
    this._parent.$dom_appendChild$1(t1);
  }
 };
$.dynamicFunction('addLast$1').NodeList = function(value) {
  this._parent.$dom_appendChild$1(value);
 };
$.dynamicFunction('add$1').NodeList = function(value) {
  this._parent.$dom_appendChild$1(value);
 };
$.dynamicFunction('iterator$0').NodeList = function() {
  var t0 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t0, ({T: 'Node'}));
  return t0;
 };
$.dynamicFunction('is$List2').NodeList = function() { return true; };
$.dynamicFunction('is$Collection').NodeList = function() { return true; };
$.dynamicFunction('query$1').NodeSelector = function(selectors) {
  return this.querySelector(selectors);
 };
$.dynamicFunction('close$0').Notification = function() {
  return this.close();
 };
$.dynamicFunction('get$close').Notification = function() { return new $.Closure27(this); };
$.dynamicFunction('get$tag').Notification = function() { return this.tag; };
$.dynamicFunction('get$on').Notification = function() {
  return $._NotificationEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLOListElement = function() { return true; };
$.dynamicFunction('get$data').HTMLObjectElement = function() { return this.data; };
$.dynamicFunction('is$Element').HTMLObjectElement = function() { return true; };
$.dynamicFunction('toString$0').OperationNotAllowedException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').OperationNotAllowedException = function() { return this.message; };
$.dynamicFunction('is$Element').HTMLOptGroupElement = function() { return true; };
$.dynamicFunction('get$value').HTMLOptionElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLOptionElement = function(v) { this.value = v; };
$.dynamicFunction('is$Element').HTMLOptionElement = function() { return true; };
$.dynamicFunction('get$value').HTMLOutputElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLOutputElement = function(v) { this.value = v; };
$.dynamicFunction('is$Element').HTMLOutputElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLParagraphElement = function() { return true; };
$.dynamicFunction('get$value').HTMLParamElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLParamElement = function(v) { this.value = v; };
$.dynamicFunction('is$Element').HTMLParamElement = function() { return true; };
$.dynamicFunction('close$0').PeerConnection00 = function() {
  return this.close();
 };
$.dynamicFunction('get$close').PeerConnection00 = function() { return new $.Closure28(this); };
$.dynamicFunction('$dom_addEventListener$3').PeerConnection00 = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').PeerConnection00 = function() {
  return $._PeerConnection00EventsImpl$1(this);
 };
$.dynamicFunction('get$message').PositionError = function() { return this.message; };
$.dynamicFunction('is$Element').HTMLPreElement = function() { return true; };
$.dynamicFunction('get$data').ProcessingInstruction = function() { return this.data; };
$.dynamicFunction('get$value').HTMLProgressElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLProgressElement = function(v) { this.value = v; };
$.dynamicFunction('is$Element').HTMLProgressElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLQuoteElement = function() { return true; };
$.dynamicFunction('toString$0').Range = function() {
  return this.toString();
 };
$.dynamicFunction('toString$0').RangeException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').RangeException = function() { return this.message; };
$.dynamicFunction('get$message').SQLError = function() { return this.message; };
$.dynamicFunction('get$message').SQLException = function() { return this.message; };
$.dynamicFunction('get$length').SQLResultSetRowList = function() { return this.length; };
$.dynamicFunction('is$Element').SVGAElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAltGlyphDefElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAltGlyphElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAltGlyphItemElement = function() { return true; };
$.dynamicFunction('get$value').SVGAngle = function() { return this.value; };
$.dynamicFunction('set$value').SVGAngle = function(v) { this.value = v; };
$.dynamicFunction('is$Element').SVGAnimateColorElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAnimateElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAnimateMotionElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAnimateTransformElement = function() { return true; };
$.dynamicFunction('is$Element').SVGAnimationElement = function() { return true; };
$.dynamicFunction('is$Element').SVGCircleElement = function() { return true; };
$.dynamicFunction('is$Element').SVGClipPathElement = function() { return true; };
$.dynamicFunction('is$Element').SVGComponentTransferFunctionElement = function() { return true; };
$.dynamicFunction('is$Element').SVGCursorElement = function() { return true; };
$.dynamicFunction('is$Element').SVGDefsElement = function() { return true; };
$.dynamicFunction('is$Element').SVGDescElement = function() { return true; };
$.dynamicFunction('is$Element').SVGDocument = function() { return true; };
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
$.dynamicFunction('get$on').SVGElementInstance = function() {
  return $._SVGElementInstanceEventsImpl$1(this);
 };
$.dynamicFunction('get$length').SVGElementInstanceList = function() { return this.length; };
$.dynamicFunction('is$Element').SVGEllipseElement = function() { return true; };
$.dynamicFunction('toString$0').SVGException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').SVGException = function() { return this.message; };
$.dynamicFunction('is$Element').SVGFEBlendElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEColorMatrixElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEComponentTransferElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFECompositeElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEConvolveMatrixElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEDiffuseLightingElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEDisplacementMapElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEDistantLightElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEDropShadowElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEFloodElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEFuncAElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEFuncBElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEFuncGElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEFuncRElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEGaussianBlurElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEImageElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEMergeElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEMergeNodeElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEMorphologyElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEOffsetElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFEPointLightElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFESpecularLightingElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFESpotLightElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFETileElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFETurbulenceElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFilterElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFontElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFontFaceElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFontFaceFormatElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFontFaceNameElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFontFaceSrcElement = function() { return true; };
$.dynamicFunction('is$Element').SVGFontFaceUriElement = function() { return true; };
$.dynamicFunction('is$Element').SVGForeignObjectElement = function() { return true; };
$.dynamicFunction('is$Element').SVGGElement = function() { return true; };
$.dynamicFunction('is$Element').SVGGlyphElement = function() { return true; };
$.dynamicFunction('is$Element').SVGGlyphRefElement = function() { return true; };
$.dynamicFunction('is$Element').SVGGradientElement = function() { return true; };
$.dynamicFunction('is$Element').SVGHKernElement = function() { return true; };
$.dynamicFunction('is$Element').SVGImageElement = function() { return true; };
$.dynamicFunction('get$value').SVGLength = function() { return this.value; };
$.dynamicFunction('set$value').SVGLength = function(v) { this.value = v; };
$.dynamicFunction('clear$0').SVGLengthList = function() {
  return this.clear();
 };
$.dynamicFunction('is$Element').SVGLineElement = function() { return true; };
$.dynamicFunction('is$Element').SVGLinearGradientElement = function() { return true; };
$.dynamicFunction('is$Element').SVGMPathElement = function() { return true; };
$.dynamicFunction('is$Element').SVGMarkerElement = function() { return true; };
$.dynamicFunction('is$Element').SVGMaskElement = function() { return true; };
$.dynamicFunction('is$Element').SVGMetadataElement = function() { return true; };
$.dynamicFunction('is$Element').SVGMissingGlyphElement = function() { return true; };
$.dynamicFunction('get$value').SVGNumber = function() { return this.value; };
$.dynamicFunction('set$value').SVGNumber = function(v) { this.value = v; };
$.dynamicFunction('clear$0').SVGNumberList = function() {
  return this.clear();
 };
$.dynamicFunction('is$Element').SVGPathElement = function() { return true; };
$.dynamicFunction('clear$0').SVGPathSegList = function() {
  return this.clear();
 };
$.dynamicFunction('is$Element').SVGPatternElement = function() { return true; };
$.dynamicFunction('clear$0').SVGPointList = function() {
  return this.clear();
 };
$.dynamicFunction('is$Element').SVGPolygonElement = function() { return true; };
$.dynamicFunction('is$Element').SVGPolylineElement = function() { return true; };
$.dynamicFunction('is$Element').SVGRadialGradientElement = function() { return true; };
$.dynamicFunction('is$Element').SVGRectElement = function() { return true; };
$.dynamicFunction('is$Element').SVGSVGElement = function() { return true; };
$.dynamicFunction('is$Element').SVGScriptElement = function() { return true; };
$.dynamicFunction('is$Element').SVGSetElement = function() { return true; };
$.dynamicFunction('is$Element').SVGStopElement = function() { return true; };
$.dynamicFunction('clear$0').SVGStringList = function() {
  return this.clear();
 };
$.dynamicFunction('is$Element').SVGStyleElement = function() { return true; };
$.dynamicFunction('is$Element').SVGSwitchElement = function() { return true; };
$.dynamicFunction('is$Element').SVGSymbolElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTRefElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTSpanElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTextContentElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTextElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTextPathElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTextPositioningElement = function() { return true; };
$.dynamicFunction('is$Element').SVGTitleElement = function() { return true; };
$.dynamicFunction('clear$0').SVGTransformList = function() {
  return this.clear();
 };
$.dynamicFunction('is$Element').SVGUseElement = function() { return true; };
$.dynamicFunction('is$Element').SVGVKernElement = function() { return true; };
$.dynamicFunction('is$Element').SVGViewElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLScriptElement = function() { return true; };
$.dynamicFunction('get$value').HTMLSelectElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLSelectElement = function(v) { this.value = v; };
$.dynamicFunction('get$length').HTMLSelectElement = function() { return this.length; };
$.dynamicFunction('set$length').HTMLSelectElement = function(v) { this.length = v; };
$.dynamicFunction('is$Element').HTMLSelectElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLShadowElement = function() { return true; };
$.dynamicFunction('get$innerHTML').ShadowRoot = function() { return this.innerHTML; };
$.dynamicFunction('set$innerHTML').ShadowRoot = function(v) { this.innerHTML = v; };
$.dynamicFunction('is$Element').ShadowRoot = function() { return true; };
$.dynamicFunction('get$on').SharedWorkerContext = function() {
  return $._SharedWorkerContextEventsImpl$1(this);
 };
$.dynamicFunction('is$Element').HTMLSourceElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLSpanElement = function() { return true; };
$.dynamicFunction('get$length').SpeechGrammarList = function() { return this.length; };
$.dynamicFunction('get$length').SpeechInputResultList = function() { return this.length; };
$.dynamicFunction('$dom_addEventListener$3').SpeechRecognition = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').SpeechRecognition = function() {
  return $._SpeechRecognitionEventsImpl$1(this);
 };
$.dynamicFunction('get$message').SpeechRecognitionError = function() { return this.message; };
$.dynamicFunction('get$length').SpeechRecognitionResult = function() { return this.length; };
$.dynamicFunction('get$length').SpeechRecognitionResultList = function() { return this.length; };
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
$.dynamicFunction('get$$$dom_length').Storage = function() {
  return this.length;;
 };
$.dynamicFunction('isEmpty$0').Storage = function() {
  return $.eqNull(this.$dom_key$1(0));
 };
$.dynamicFunction('get$length').Storage = function() {
  return this.get$$$dom_length();
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
$.dynamicFunction('get$key').StorageEvent = function() { return this.key; };
$.dynamicFunction('is$Element').HTMLStyleElement = function() { return true; };
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
  var t0 = $._FixedSizeListIterator$1(this);
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
$.dynamicFunction('is$Element').HTMLTableCaptionElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTableCellElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTableColElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTableElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTableRowElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLTableSectionElement = function() { return true; };
$.dynamicFunction('get$value').HTMLTextAreaElement = function() { return this.value; };
$.dynamicFunction('set$value').HTMLTextAreaElement = function(v) { this.value = v; };
$.dynamicFunction('is$Element').HTMLTextAreaElement = function() { return true; };
$.dynamicFunction('get$data').TextEvent = function() { return this.data; };
$.dynamicFunction('$dom_addEventListener$3').TextTrack = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').TextTrack = function() {
  return $._TextTrackEventsImpl$1(this);
 };
$.dynamicFunction('$dom_addEventListener$3').TextTrackCue = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('set$text').TextTrackCue = function(v) { this.text = v; };
$.dynamicFunction('get$on').TextTrackCue = function() {
  return $._TextTrackCueEventsImpl$1(this);
 };
$.dynamicFunction('get$length').TextTrackCueList = function() { return this.length; };
$.dynamicFunction('$dom_addEventListener$3').TextTrackList = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$length').TextTrackList = function() { return this.length; };
$.dynamicFunction('get$on').TextTrackList = function() {
  return $._TextTrackListEventsImpl$1(this);
 };
$.dynamicFunction('get$length').TimeRanges = function() { return this.length; };
$.dynamicFunction('is$Element').HTMLTitleElement = function() { return true; };
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
  var t0 = $._FixedSizeListIterator$1(this);
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
$.dynamicFunction('is$Element').HTMLTrackElement = function() { return true; };
$.dynamicFunction('filter$1').TreeWalker = function(arg0) { return this.filter.$call$1(arg0); };
$.dynamicFunction('get$charCode').UIEvent = function() { return this.charCode; };
$.dynamicFunction('is$Element').HTMLUListElement = function() { return true; };
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
  var t0 = $._FixedSizeListIterator$1(this);
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
  var t0 = $._FixedSizeListIterator$1(this);
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
    var t0 = $._FixedSizeListIterator$1(this);
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
  var t0 = $._FixedSizeListIterator$1(this);
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
$.dynamicFunction('is$Element').HTMLUnknownElement = function() { return true; };
$.dynamicFunction('is$Element').HTMLVideoElement = function() { return true; };
$.dynamicFunction('send$1').WebSocket = function(data) {
  return this.send(data);
 };
$.dynamicFunction('close$2').WebSocket = function(code, reason) {
  return this.close(code,reason);
 };
$.dynamicFunction('get$close').WebSocket = function() { return new $.Closure29(this); };
$.dynamicFunction('$dom_addEventListener$3').WebSocket = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').WebSocket = function() {
  return $._WebSocketEventsImpl$1(this);
 };
$.dynamicFunction('open$3').DOMWindow = function(url, name, options) {
  return this.open(url,name,options);
 };
$.dynamicFunction('get$open').DOMWindow = function() { return new $.Closure30(this); };
$.dynamicFunction('close$0').DOMWindow = function() {
  return this.close();
 };
$.dynamicFunction('get$close').DOMWindow = function() { return new $.Closure31(this); };
$.dynamicFunction('$dom_addEventListener$3').DOMWindow = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$navigator').DOMWindow = function() { return this.navigator; };
$.dynamicFunction('get$length').DOMWindow = function() { return this.length; };
$.dynamicFunction('get$on').DOMWindow = function() {
  return $._WindowEventsImpl$1(this);
 };
$.dynamicFunction('get$on').Worker = function() {
  return $._WorkerEventsImpl$1(this);
 };
$.dynamicFunction('close$0').WorkerContext = function() {
  return this.close();
 };
$.dynamicFunction('get$close').WorkerContext = function() { return new $.Closure32(this); };
$.dynamicFunction('$dom_addEventListener$3').WorkerContext = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$navigator').WorkerContext = function() { return this.navigator; };
$.dynamicFunction('get$on').WorkerContext = function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._WorkerContextEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 };
$.dynamicFunction('toString$0').WorkerLocation = function() {
  return this.toString();
 };
$.dynamicFunction('get$userAgent').WorkerNavigator = function() { return this.userAgent; };
$.dynamicFunction('send$1').XMLHttpRequest = function(data) {
  return this.send(data);
 };
$.dynamicFunction('open$5').XMLHttpRequest = function(method, url, async, user, password) {
  return this.open(method,url,async,user,password);
 };
$.dynamicFunction('get$open').XMLHttpRequest = function() { return new $.Closure33(this); };
$.dynamicFunction('$dom_addEventListener$3').XMLHttpRequest = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').XMLHttpRequest = function() {
  return $._XMLHttpRequestEventsImpl$1(this);
 };
$.dynamicFunction('toString$0').XMLHttpRequestException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').XMLHttpRequestException = function() { return this.message; };
$.dynamicFunction('$dom_addEventListener$3').XMLHttpRequestUpload = function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener),useCapture);
 };
$.dynamicFunction('get$on').XMLHttpRequestUpload = function() {
  return $._XMLHttpRequestUploadEventsImpl$1(this);
 };
$.dynamicFunction('toString$0').XPathException = function() {
  return this.toString();
 };
$.dynamicFunction('get$message').XPathException = function() { return this.message; };
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
    ['SVGTextPositioningElement', v0/*class(_SVGTextPositioningElementImpl)*/],
    ['SVGTextContentElement', v1/*class(_SVGTextContentElementImpl)*/],
    ['AbstractWorker', v15/*class(_AbstractWorkerImpl)*/],
    ['UIEvent', 'UIEvent|WheelEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|KeyboardEvent|CompositionEvent'],
    ['Uint8Array', 'Uint8Array|Uint8ClampedArray'],
    ['AudioParam', 'AudioParam|AudioGain'],
    ['WorkerContext', v11/*class(_WorkerContextImpl)*/],
    ['CSSValueList', 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue'],
    ['CharacterData', v10/*class(_CharacterDataImpl)*/],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList'],
    ['HTMLDocument', v9/*class(_DocumentImpl)*/],
    ['DocumentFragment', v8/*class(_DocumentFragmentImpl)*/],
    ['SVGGradientElement', v2/*class(_SVGGradientElementImpl)*/],
    ['SVGComponentTransferFunctionElement', v3/*class(_SVGComponentTransferFunctionElementImpl)*/],
    ['SVGAnimationElement', v4/*class(_SVGAnimationElementImpl)*/],
    ['SVGElement', v5/*class(_SVGElementImpl)*/],
    ['HTMLMediaElement', v6/*class(_MediaElementImpl)*/],
    ['Element', v7/*class(_ElementImpl)*/],
    ['EntrySync', 'EntrySync|FileEntrySync|DirectoryEntrySync'],
    ['Node', v12/*class(_NodeImpl)*/],
    ['MediaStream', v13/*class(_MediaStreamImpl)*/],
    ['IDBRequest', v14/*class(_IDBRequestImpl)*/],
    ['EventTarget', [v11/*class(_WorkerContextImpl)*/,v12/*class(_NodeImpl)*/,v13/*class(_MediaStreamImpl)*/,v14/*class(_IDBRequestImpl)*/,v15/*class(_AbstractWorkerImpl)*/,'EventTarget|XMLHttpRequestUpload|XMLHttpRequest|DOMWindow|WebSocket|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|PeerConnection00|Notification|MessagePort|MediaController|IDBTransaction|IDBDatabase|FileWriter|FileReader|EventSource|DeprecatedPeerConnection|DOMApplicationCache|BatteryManager|AudioContext'].join('|')],
    ['HTMLCollection', 'HTMLCollection|HTMLOptionsCollection'],
    ['IDBCursor', 'IDBCursor|IDBCursorWithValue']];
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
Isolate.$defineClass = function(cls, superclass, fields, prototype) {
  var constructor;
  if (typeof fields == 'function') {
    constructor = fields;
  } else {
    var str = "function " + cls + "(";
    var body = "";
    for (var i = 0; i < fields.length; i++) {
      if (i != 0) str += ", ";
      var field = fields[i];
      var len = field.length;
      var lastChar = field[len - 1];
      var needsGetter = lastChar == '?' || lastChar == '=';
      var needsSetter = lastChar == '!' || lastChar == '=';
      if (needsGetter || needsSetter) field = field.substring(0, len - 1);
      str += field;
      body += "this." + field + " = " + field + ";\n";
      if (needsGetter) {
        var getterString = "return this." + field + ";";
        prototype["get$" + field] = new Function(getterString);
      }
      if (needsSetter) {
        var setterString = "this." + field + " = v;";
        prototype["set$" + field] = new Function("v", setterString);
      }
    }
    str += ") {" + body + "}\n";
    str += "return " + cls + ";";
    constructor = new Function(str)();
  }
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
  str += "var properties = Isolate.$isolateProperties;\n";
  for (var staticName in isolateProperties) {
    if (Object.prototype.hasOwnProperty.call(isolateProperties, staticName)) {
      str += "this." + staticName + "= properties." + staticName + ";\n";
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
