import {x as createCommonjsModule, y as commonjsGlobal, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, f as findDOMNode, j as _objectWithoutProperties, R as React, e as _extends, C as Component, g as propTypes, d as classnames, p as polyfill, i as _typeof, k as Children, n as cloneElement} from "./index.2dd166ed.js";
import {f as func, o as obj, K as KEYCODE, d as dom} from "./2c811738.js";
import {N as NextConfigProvider} from "./399cb00c.js";
import {A as Animate} from "./17ebea95.js";
import {N as NextIcon} from "./f9e612ff.js";
import {N as NextInput} from "./cf19697e.js";
import {C as Checkbox} from "./bb5f28c2.js";
import {N as NextVirtualList} from "./b6c4c22f.js";
var lodash_clonedeep = createCommonjsModule(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", promiseTag = "[object Promise]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reFlags = /\w*$/;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  function addMapEntry(map, pair) {
    map.set(pair[0], pair[1]);
    return map;
  }
  function addSetEntry(set, value) {
    set.add(value);
    return set;
  }
  function arrayEach(array, iteratee) {
    var index = -1, length = array ? array.length : 0;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array ? array.length : 0;
    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != "function") {
      try {
        result = !!(value + "");
      } catch (e) {
      }
    }
    return result;
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func2, transform) {
    return function(arg) {
      return func2(transform(arg));
    };
  }
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Buffer = moduleExports ? root.Buffer : void 0, Symbol = root.Symbol, Uint8Array = root.Uint8Array, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView = getNative(root, "DataView"), Map = getNative(root, "Map"), Promise = getNative(root, "Promise"), Set = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
  var symbolProto = Symbol ? Symbol.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.__data__ = {
      hash: new Hash(),
      map: new (Map || ListCache)(),
      string: new Hash()
    };
  }
  function mapCacheDelete(key) {
    return getMapData(this, key)["delete"](key);
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack(entries) {
    this.__data__ = new ListCache(entries);
  }
  function stackClear() {
    this.__data__ = new ListCache();
  }
  function stackDelete(key) {
    return this.__data__["delete"](key);
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        return this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value);
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      object[key] = value;
    }
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        if (isHostObject(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
    });
    return result;
  }
  function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag(value) {
    return objectToString.call(value);
  }
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor());
  }
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor());
  }
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  function copyObject(source, props, object, customizer) {
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      assignValue(object, key, newValue === void 0 ? source[key] : newValue);
    }
    return object;
  }
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
  var getTag = baseGetTag;
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function(value) {
      var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function initCloneArray(array) {
    var length = array.length, result = array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);
      case boolTag:
      case dateTag:
        return new Ctor(+object);
      case dataViewTag:
        return cloneDataView(object, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);
      case mapTag:
        return cloneMap(object, isDeep, cloneFunc);
      case numberTag:
      case stringTag:
        return new Ctor(object);
      case regexpTag:
        return cloneRegExp(object);
      case setTag:
        return cloneSet(object, isDeep, cloneFunc);
      case symbolTag:
        return cloneSymbol(object);
    }
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func2) {
    return !!maskSrcKey && maskSrcKey in func2;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function toSource(func2) {
    if (func2 != null) {
      try {
        return funcToString.call(func2);
      } catch (e) {
      }
      try {
        return func2 + "";
      } catch (e) {
      }
    }
    return "";
  }
  function cloneDeep(value) {
    return baseClone(value, true, true);
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
  }
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module.exports = cloneDeep;
});
var _class, _temp;
var TreeNodeInput = (_temp = _class = function(_Component) {
  _inherits(TreeNodeInput2, _Component);
  function TreeNodeInput2() {
    _classCallCheck(this, TreeNodeInput2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  TreeNodeInput2.prototype.componentDidMount = function componentDidMount() {
    var inputWrapperNode = findDOMNode(this);
    inputWrapperNode.querySelector("input").focus();
  };
  TreeNodeInput2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, others = _objectWithoutProperties(_props, ["prefix"]);
    return React.createElement(NextInput, _extends({
      size: "small",
      className: prefix + "tree-node-input"
    }, others));
  };
  return TreeNodeInput2;
}(Component), _class.propTypes = {
  prefix: propTypes.string
}, _temp);
TreeNodeInput.displayName = "TreeNodeInput";
var _class$1, _temp$1;
var TreeNodeIndent = (_temp$1 = _class$1 = function(_Component) {
  _inherits(TreeNodeIndent2, _Component);
  function TreeNodeIndent2() {
    _classCallCheck(this, TreeNodeIndent2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  TreeNodeIndent2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, level = _props.level, isLastChild = _props.isLastChild, showLine = _props.showLine;
    var indents = [];
    for (var i = 1; i < level; i++) {
      var _cx;
      var classNames = classnames(prefix + "tree-node-indent-unit", (_cx = {}, _cx[prefix + "line"] = !isLastChild[i - 1] && showLine, _cx));
      indents.push(React.createElement("span", {className: classNames, key: i - 1}));
    }
    return indents;
  };
  return TreeNodeIndent2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  level: propTypes.number,
  isLastChild: propTypes.arrayOf(propTypes.bool),
  showLine: propTypes.bool
}, _class$1.defaultProps = {
  isLastChild: []
}, _temp$1);
TreeNodeIndent.displayName = "TreeNodeIndent";
var _class$2, _temp$2;
var Expand = Animate.Expand;
var bindCtx = func.bindCtx;
var isPromise = obj.isPromise, pickOthers = obj.pickOthers, pickAttrsWith = obj.pickAttrsWith;
var isRoot = function isRoot2(pos) {
  return /^0-(\d)+$/.test(pos);
};
var TreeNode = (_temp$2 = _class$2 = function(_Component) {
  _inherits(TreeNode2, _Component);
  function TreeNode2(props) {
    _classCallCheck(this, TreeNode2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.saveRef = function(ref) {
      _this.nodeEl = ref;
    };
    _this.saveLabelWrapperRef = function(ref) {
      _this.labelWrapperEl = ref;
    };
    _this.state = {
      editing: false,
      loading: false,
      label: props.label
    };
    bindCtx(_this, ["handleExpand", "handleSelect", "handleCheck", "handleEditStart", "handleEditFinish", "handleRightClick", "handleDragStart", "handleDragEnter", "handleDragOver", "handleDragLeave", "handleDragEnd", "handleDrop", "handleInputKeyDown", "handleKeyDown"]);
    return _this;
  }
  TreeNode2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    if ("label" in props) {
      return {
        label: props.label
      };
    }
    return null;
  };
  TreeNode2.prototype.componentDidMount = function componentDidMount() {
    this.itemNode = findDOMNode(this.nodeEl);
    this.setFocus();
  };
  TreeNode2.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setFocus();
  };
  TreeNode2.prototype.getParentNode = function getParentNode() {
    return this.props.root.getParentNode(this.props.pos);
  };
  TreeNode2.prototype.focusable = function focusable() {
    var _props = this.props, root = _props.root, disabled = _props.disabled;
    var focusable2 = root.props.focusable;
    return focusable2 && !disabled;
  };
  TreeNode2.prototype.getFocused = function getFocused() {
    var _props2 = this.props, _key = _props2._key, root = _props2.root;
    var focusedKey = root.state.focusedKey;
    return focusedKey === _key;
  };
  TreeNode2.prototype.setFocus = function setFocus() {
    var focused = this.getFocused();
    if (focused && this.focusable()) {
      this.itemNode.focus({preventScroll: true});
    }
  };
  TreeNode2.prototype.handleExpand = function handleExpand(e) {
    var _this2 = this;
    var _props3 = this.props, root = _props3.root, expanded = _props3.expanded, eventKey = _props3.eventKey;
    if (root.props.isNodeBlock) {
      e.stopPropagation();
    }
    var loading = this.state.loading;
    if (loading) {
      return;
    }
    var returnValue = root.handleExpand(!expanded, eventKey, this);
    if (isPromise(returnValue)) {
      this.setLoading(true);
      return returnValue.then(function() {
        _this2.setLoading(false);
      }, function() {
        _this2.setLoading(false);
      });
    }
  };
  TreeNode2.prototype.setLoading = function setLoading(loading) {
    this.setState({loading});
  };
  TreeNode2.prototype.handleSelect = function handleSelect(e) {
    e.preventDefault();
    var _props4 = this.props, root = _props4.root, selected = _props4.selected, eventKey = _props4.eventKey;
    root.handleSelect(!selected, eventKey, this, e);
  };
  TreeNode2.prototype.handleCheck = function handleCheck() {
    var _props5 = this.props, root = _props5.root, checked = _props5.checked, eventKey = _props5.eventKey;
    root.handleCheck(!checked, eventKey, this);
  };
  TreeNode2.prototype.handleEditStart = function handleEditStart(e) {
    e.preventDefault();
    this.setState({
      editing: true
    });
  };
  TreeNode2.prototype.handleEditFinish = function handleEditFinish(e) {
    var label = e.target.value;
    this.setState({
      editing: false
    });
    var _props6 = this.props, root = _props6.root, eventKey = _props6.eventKey;
    root.props.onEditFinish(eventKey, label, this);
  };
  TreeNode2.prototype.handleRightClick = function handleRightClick(e) {
    this.props.root.props.onRightClick({
      event: e,
      node: this
    });
  };
  TreeNode2.prototype.handleDragStart = function handleDragStart(e) {
    e.stopPropagation();
    this.props.root.handleDragStart(e, this);
  };
  TreeNode2.prototype.handleDragEnter = function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.root.handleDragEnter(e, this);
  };
  TreeNode2.prototype.handleDragOver = function handleDragOver(e) {
    if (this.props.root.canDrop(this)) {
      e.preventDefault();
      this.props.root.handleDragOver(e, this);
    }
    e.stopPropagation();
  };
  TreeNode2.prototype.handleDragLeave = function handleDragLeave(e) {
    e.stopPropagation();
    this.props.root.handleDragLeave(e, this);
  };
  TreeNode2.prototype.handleDragEnd = function handleDragEnd(e) {
    e.stopPropagation();
    this.props.root.handleDragEnd(e, this);
  };
  TreeNode2.prototype.handleDrop = function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.root.handleDrop(e, this);
  };
  TreeNode2.prototype.handleInputKeyDown = function handleInputKeyDown(e) {
    if (e.keyCode === KEYCODE.ENTER) {
      this.handleEditFinish(e);
    }
    e.stopPropagation();
  };
  TreeNode2.prototype.handleKeyDown = function handleKeyDown(e) {
    var _props7 = this.props, _key = _props7._key, root = _props7.root, disabled = _props7.disabled;
    if (disabled) {
      return;
    }
    if (this.focusable()) {
      root.handleItemKeyDown(_key, this, e);
    }
    this.props.onKeyDown && this.props.onKeyDown(e);
  };
  TreeNode2.prototype.addCallbacks = function addCallbacks(props) {
    var _props8 = this.props, disabled = _props8.disabled, root = _props8.root;
    if (!disabled) {
      var selectable = typeof this.props.selectable !== "undefined" ? this.props.selectable : root.props.selectable;
      if (selectable) {
        props.onClick = this.handleSelect;
      }
      var editable = typeof this.props.editable !== "undefined" ? this.props.editable : root.props.editable;
      if (editable) {
        props.onDoubleClick = this.handleEditStart;
      }
      var draggable = typeof this.props.draggable !== "undefined" ? this.props.draggable : root.props.draggable;
      if (draggable) {
        props.draggable = true;
        props.onDragStart = this.handleDragStart;
        props.onDragEnd = this.handleDragEnd;
      }
      props.onContextMenu = this.handleRightClick;
    }
  };
  TreeNode2.prototype.renderSwitcher = function renderSwitcher(showLine) {
    var _cx, _cx2;
    var _props9 = this.props, prefix = _props9.prefix, disabled = _props9.disabled, expanded = _props9.expanded, root = _props9.root;
    var loadData = root.props.loadData;
    var loading = this.state.loading;
    var lineState = showLine ? "line" : "noline";
    var className = classnames((_cx = {}, _cx[prefix + "tree-switcher"] = true, _cx["" + prefix + lineState] = !loading, _cx[prefix + "close"] = !loading && !showLine && !expanded, _cx[prefix + "disabled"] = disabled, _cx[prefix + "loading"] = loading, _cx[prefix + "loading-" + lineState] = loading, _cx));
    var iconType = loadData && loading ? "loading" : showLine ? expanded ? "minus" : "add" : "arrow-down";
    var iconCls = classnames((_cx2 = {}, _cx2[prefix + "tree-switcher-icon"] = true, _cx2[prefix + "tree-fold-icon"] = iconType === "arrow-down", _cx2));
    return React.createElement("span", {className, onClick: disabled ? null : this.handleExpand}, this.renderRightAngle(showLine), React.createElement(NextIcon, {className: iconCls, type: iconType}));
  };
  TreeNode2.prototype.renderNoopSwitcher = function renderNoopSwitcher(showLine) {
    var _cx3;
    var _props10 = this.props, prefix = _props10.prefix, pos = _props10.pos;
    var lineState = showLine ? "line" : "noline";
    var className = classnames((_cx3 = {}, _cx3[prefix + "tree-switcher"] = true, _cx3[prefix + "noop-" + lineState] = true, _cx3[prefix + "noop-line-noroot"] = showLine && !isRoot(pos), _cx3));
    return React.createElement("span", {className}, this.renderRightAngle(showLine));
  };
  TreeNode2.prototype.renderRightAngle = function renderRightAngle(showLine) {
    var _props11 = this.props, prefix = _props11.prefix, pos = _props11.pos;
    return showLine && !isRoot(pos) ? React.createElement("span", {className: prefix + "tree-right-angle"}) : null;
  };
  TreeNode2.prototype.renderCheckbox = function renderCheckbox() {
    var _props12 = this.props, checked = _props12.checked, indeterminate = _props12.indeterminate, disabled = _props12.disabled, checkboxDisabled = _props12.checkboxDisabled;
    var label = this.state.label;
    return React.createElement(Checkbox, {
      "aria-label": typeof label === "string" ? label : null,
      checked,
      tabIndex: -1,
      indeterminate,
      disabled: disabled || checkboxDisabled,
      onChange: this.handleCheck
    });
  };
  TreeNode2.prototype.renderLabel = function renderLabel() {
    var _cx4;
    var _props13 = this.props, prefix = _props13.prefix, root = _props13.root, disabled = _props13.disabled, icon = _props13.icon;
    var isNodeBlock = root.props.isNodeBlock;
    var label = this.state.label;
    var selectable = typeof this.props.selectable !== "undefined" ? this.props.selectable : root.props.selectable;
    var labelProps = {
      className: classnames((_cx4 = {}, _cx4[prefix + "tree-node-label"] = true, _cx4[prefix + "tree-node-label-selectable"] = selectable && !disabled, _cx4))
    };
    if (!isNodeBlock) {
      this.addCallbacks(labelProps);
    }
    var iconEl = typeof icon === "string" ? React.createElement(NextIcon, {type: icon}) : icon;
    return React.createElement("div", {className: prefix + "tree-node-label-wrapper", ref: this.saveLabelWrapperRef}, React.createElement("div", labelProps, iconEl, label));
  };
  TreeNode2.prototype.renderInput = function renderInput() {
    var prefix = this.props.prefix;
    var label = this.state.label;
    return React.createElement("div", {className: prefix + "tree-node-label-wrapper", ref: this.saveLabelWrapperRef}, React.createElement(TreeNodeInput, {
      prefix,
      defaultValue: label,
      onBlur: this.handleEditFinish,
      onKeyDown: this.handleInputKeyDown
    }));
  };
  TreeNode2.prototype.renderChildTree = function renderChildTree() {
    var _props14 = this.props, prefix = _props14.prefix, children = _props14.children;
    return children && this.addAnimationIfNeeded(React.createElement("ul", {role: "group", className: prefix + "tree-child-tree"}, children));
  };
  TreeNode2.prototype.addAnimationIfNeeded = function addAnimationIfNeeded(node) {
    var root = this.props.root;
    return root && root.props.animation ? React.createElement(Expand, {animationAppear: false}, node) : node;
  };
  TreeNode2.prototype.render = function render() {
    var _cx5, _cx6, _ref;
    var _props15 = this.props, prefix = _props15.prefix, rtl = _props15.rtl, className = _props15.className, isLeaf = _props15.isLeaf, level = _props15.level, root = _props15.root, selected = _props15.selected, checked = _props15.checked, disabled = _props15.disabled, dragOver = _props15.dragOver, dragOverGapTop = _props15.dragOverGapTop, dragOverGapBottom = _props15.dragOverGapBottom, _key = _props15._key, size = _props15.size, posinset = _props15.posinset, children = _props15.children, expanded = _props15.expanded, isLastChild = _props15.isLastChild;
    var _root$props = root.props, isNodeBlock = _root$props.isNodeBlock, showLine = _root$props.showLine, rootDraggable = _root$props.draggable, filterTreeNode = _root$props.filterTreeNode;
    var label = this.state.label;
    var ARIA_PREFIX = "aria-";
    var ariaProps = pickAttrsWith(this.props, ARIA_PREFIX);
    var others = pickOthers(Object.keys(TreeNode2.propTypes), this.props);
    var hasRenderChildNodes = root && root.props.renderChildNodes;
    var shouldShouldLine = !isNodeBlock && showLine && !hasRenderChildNodes;
    var useVirtual = root && root.props.useVirtual;
    Object.keys(others).forEach(function(key) {
      if (key.match(ARIA_PREFIX)) {
        delete others[key];
      }
    });
    if (rootDraggable) {
      others.onDragEnter = this.handleDragEnter;
      others.onDragOver = this.handleDragOver;
      others.onDragLeave = this.handleDragLeave;
      others.onDrop = this.handleDrop;
    }
    var newClassName = classnames((_cx5 = {}, _cx5[prefix + "tree-node"] = true, _cx5[prefix + "filtered"] = !!filterTreeNode && !!root.filterTreeNode(this), _cx5[className] = !!className, _cx5));
    var innerClassName = classnames((_cx6 = {}, _cx6[prefix + "tree-node-inner"] = true, _cx6[prefix + "selected"] = selected, _cx6[prefix + "disabled"] = disabled, _cx6[prefix + "drag-over"] = dragOver, _cx6[prefix + "drag-over-gap-top"] = dragOverGapTop, _cx6[prefix + "drag-over-gap-bottom"] = dragOverGapBottom, _cx6));
    var defaultPaddingLeft = (typeof isNodeBlock === "undefined" ? "undefined" : _typeof(isNodeBlock)) === "object" ? parseInt(isNodeBlock.defaultPaddingLeft || 0) : 0;
    var paddingLeftProp = rtl ? "paddingRight" : "paddingLeft";
    var indent = (typeof isNodeBlock === "undefined" ? "undefined" : _typeof(isNodeBlock)) === "object" ? parseInt(isNodeBlock.indent || 24) : 24;
    var innerStyle = isNodeBlock ? (_ref = {}, _ref[paddingLeftProp] = (useVirtual ? 0 : indent * (level - 1)) + defaultPaddingLeft + "px", _ref) : null;
    var innerProps = _extends({
      className: innerClassName,
      style: innerStyle,
      onKeyDown: this.handleKeyDown
    }, ariaProps);
    if (isNodeBlock) {
      this.addCallbacks(innerProps);
    }
    var checkable = typeof this.props.checkable !== "undefined" ? this.props.checkable : root.props.checkable;
    var editing = this.state.editing;
    innerProps.tabIndex = root.tabbableKey === _key ? "0" : "-1";
    if (rtl) {
      others.dir = "rtl";
    }
    return this.addAnimationIfNeeded(React.createElement("li", _extends({role: "presentation", className: newClassName}, others), React.createElement("div", _extends({
      ref: this.saveRef,
      role: "treeitem",
      "aria-selected": selected,
      "aria-disabled": disabled,
      "aria-checked": checked,
      "aria-expanded": !isLeaf,
      "aria-label": typeof label === "string" ? label : null,
      "aria-level": level,
      "aria-posinset": posinset,
      "aria-setsize": size
    }, innerProps), useVirtual && !hasRenderChildNodes && React.createElement(TreeNodeIndent, {
      prefix,
      level,
      isLastChild,
      showLine: shouldShouldLine
    }), isLeaf ? this.renderNoopSwitcher(shouldShouldLine) : this.renderSwitcher(shouldShouldLine), checkable ? this.renderCheckbox() : null, editing ? this.renderInput() : this.renderLabel()), expanded && (hasRenderChildNodes ? children : this.renderChildTree(children))));
  };
  return TreeNode2;
}(Component), _class$2.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  _key: propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
  label: propTypes.node,
  selectable: propTypes.bool,
  checkable: propTypes.bool,
  editable: propTypes.bool,
  draggable: propTypes.bool,
  disabled: propTypes.bool,
  checkboxDisabled: propTypes.bool,
  isLeaf: propTypes.bool,
  root: propTypes.object,
  eventKey: propTypes.string,
  pos: propTypes.string,
  expanded: propTypes.bool,
  selected: propTypes.bool,
  checked: propTypes.bool,
  indeterminate: propTypes.bool,
  dragOver: propTypes.bool,
  dragOverGapTop: propTypes.bool,
  dragOverGapBottom: propTypes.bool,
  parentNode: propTypes.object,
  onKeyDown: propTypes.func,
  size: propTypes.number,
  posinset: propTypes.number,
  isLastChild: propTypes.arrayOf(propTypes.bool),
  icon: propTypes.oneOfType([propTypes.string, propTypes.node])
}, _class$2.defaultProps = {
  label: "---",
  rtl: false,
  disabled: false,
  checkboxDisabled: false,
  size: 1,
  posinset: 1
}, _temp$2);
TreeNode.displayName = "TreeNode";
var TreeNode$1 = polyfill(TreeNode);
function normalizeToArray(keys) {
  if (keys !== void 0 && keys !== null) {
    if (Array.isArray(keys)) {
      return [].concat(keys);
    }
    return [keys];
  }
  return [];
}
function isNodeChecked(node, checkedKeys) {
  if (node.disabled || node.checkboxDisabled)
    return true;
  if (node.checkable === false) {
    return !node.children || node.children.length === 0 || node.children.every(function(c) {
      return isNodeChecked(c, checkedKeys);
    });
  }
  return checkedKeys.indexOf(node.key) > -1;
}
function forEachEnableNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  };
  if (node.disabled || node.checkboxDisabled)
    return;
  callback(node);
  if (node.children && node.children.length > 0) {
    node.children.forEach(function(child) {
      return forEachEnableNode(child, callback);
    });
  }
}
function isNodeDisabledChecked(node) {
  if (node.disabled || node.checkboxDisabled)
    return true;
  if (node.checkable === false) {
    return !node.children || node.children.length === 0 || node.children.every(isNodeDisabledChecked);
  }
  return false;
}
function getCheckableParentNode(node, _p2n) {
  var parentPos = node.pos.split(["-"]);
  if (parentPos.length === 2)
    return node;
  parentPos.splice(parentPos.length - 1, 1);
  parentPos = parentPos.join("-");
  var parentNode = _p2n[parentPos];
  if (parentNode.disabled || parentNode.checkboxDisabled)
    return false;
  if (parentNode.checkable === false) {
    return getCheckableParentNode(parentNode, _p2n);
  }
  return parentNode;
}
function filterChildKey(keys, _k2n, _p2n) {
  var newKeys = [];
  keys.forEach(function(key) {
    var node = getCheckableParentNode(_k2n[key], _p2n);
    if (!node || node.checkable === false || node === _k2n[key] || keys.indexOf(node.key) === -1) {
      newKeys.push(key);
    }
  });
  return newKeys;
}
function filterParentKey(keys, _k2n) {
  var newKeys = [];
  for (var i = 0; i < keys.length; i++) {
    var node = _k2n[keys[i]];
    if (!node.children || node.children.length === 0 || node.children.every(isNodeDisabledChecked)) {
      newKeys.push(keys[i]);
    }
  }
  return newKeys;
}
function isDescendantOrSelf(currentPos, targetPos) {
  if (!currentPos || !targetPos) {
    return false;
  }
  var currentNums = currentPos.split("-");
  var targetNums = targetPos.split("-");
  return currentNums.length <= targetNums.length && currentNums.every(function(num, index) {
    return num === targetNums[index];
  });
}
function isSiblingOrSelf(currentPos, targetPos) {
  var currentNums = currentPos.split("-").slice(0, -1);
  var targetNums = targetPos.split("-").slice(0, -1);
  return currentNums.length === targetNums.length && currentNums.every(function(num, index) {
    return num === targetNums[index];
  });
}
function getAllCheckedKeys(checkedKeys, _k2n, _p2n) {
  checkedKeys = normalizeToArray(checkedKeys);
  var filteredKeys = checkedKeys.filter(function(key) {
    return !!_k2n[key];
  });
  var flatKeys = [].concat(filterChildKey(filteredKeys, _k2n, _p2n).filter(function(key) {
    return !(_k2n[key].disabled || _k2n[key].checkboxDisabled);
  }), filteredKeys.filter(function(key) {
    return _k2n[key].disabled || _k2n[key].checkboxDisabled;
  }));
  var removeKey = function removeKey2(child) {
    if (child.disabled || child.checkboxDisabled)
      return;
    if (child.checkable === false && child.children && child.children.length > 0) {
      return child.children.forEach(removeKey2);
    }
    flatKeys.splice(flatKeys.indexOf(child.key), 1);
  };
  var addParentKey = function addParentKey2(i2, parent2) {
    return flatKeys.splice(i2, 0, parent2.key);
  };
  var keys = [].concat(flatKeys);
  for (var i = 0; i < keys.length; i++) {
    var pos = _k2n[keys[i]].pos;
    var nums = pos.split("-");
    if (nums.length === 2) {
      break;
    }
    for (var j = nums.length - 2; j > 0; j--) {
      var parentPos = nums.slice(0, j + 1).join("-");
      var parent = _p2n[parentPos];
      if (parent.checkable === false || parent.disabled || parent.checkboxDisabled)
        continue;
      var parentChecked = parent.children.every(function(child) {
        return isNodeChecked(child, flatKeys);
      });
      if (parentChecked) {
        parent.children.forEach(removeKey);
        addParentKey(i, parent);
      } else {
        break;
      }
    }
  }
  var newKeys = [];
  flatKeys.forEach(function(key) {
    if (_k2n[key].disabled || _k2n[key].checkboxDisabled) {
      newKeys.push(key);
      return;
    }
    forEachEnableNode(_k2n[key], function(node) {
      if (node.checkable === false)
        return;
      newKeys.push(node.key);
    });
  });
  return newKeys;
}
function convertChildren2Data(children) {
  function convert(treeNodes) {
    treeNodes = normalizeToArray(treeNodes);
    return treeNodes.map(function(node) {
      if (node.type && node.type !== TreeNode$1 && node.type.target !== TreeNode$1) {
        return {
          illegalFlag: true,
          node
        };
      }
      var key = node.key, _node$props = node.props, children2 = _node$props.children, rest = _objectWithoutProperties(_node$props, ["children"]);
      var nodeData = _extends({key}, rest);
      if (children2 && !(Array.isArray(children2) && !children2.length)) {
        nodeData.children = convert(children2);
      }
      return nodeData;
    }).filter(function(treeNodeData) {
      return treeNodeData;
    });
  }
  return convert(children);
}
function getAllDescendantKeys(nodeData, p2n) {
  var posList = nodeData.pos.split("-");
  var keys = [];
  var pos = posList[0];
  for (var i = 1; i < posList.length - 1; i++) {
    pos = [pos, posList[i]].join("-");
    keys.push(p2n[pos].key);
  }
  return keys;
}
var _class$3, _temp$3;
var bindCtx$1 = func.bindCtx, noop = func.noop;
var getOffset = dom.getOffset;
var pickOthers$1 = obj.pickOthers, isPlainObject = obj.isPlainObject;
var getExpandedKeys = function getExpandedKeys2(props, willReceiveProps, _k2n, _p2n) {
  var expandedKeys = void 0;
  if (!willReceiveProps && props.defaultExpandAll) {
    expandedKeys = Object.keys(_k2n).filter(function(key) {
      var children = _k2n[key].children;
      return children && children.length;
    });
  } else {
    expandedKeys = "expandedKeys" in props ? props.expandedKeys : willReceiveProps ? [] : props.defaultExpandedKeys;
    expandedKeys = normalizeToArray(expandedKeys);
    if (props.autoExpandParent) {
      var newExpandedKeys = [];
      var expandedPoss = expandedKeys.reduce(function(ret, key) {
        var pos = _k2n[key] && _k2n[key].pos;
        if (pos) {
          ret.push(pos);
          newExpandedKeys.push(key);
        }
        return ret;
      }, []);
      expandedPoss.forEach(function(pos) {
        var nums = pos.split("-");
        if (nums.length === 2) {
          return;
        }
        for (var i = 1; i <= nums.length - 2; i++) {
          var ancestorPos = nums.slice(0, i + 1).join("-");
          var ancestorKey = _p2n[ancestorPos].key;
          if (newExpandedKeys.indexOf(ancestorKey) === -1) {
            newExpandedKeys.push(ancestorKey);
          }
        }
      });
      return newExpandedKeys;
    }
  }
  return expandedKeys;
};
var getSelectedKeys = function getSelectedKeys2(props, willReceiveProps, _k2n) {
  var selectedKeys = "selectedKeys" in props ? props.selectedKeys : willReceiveProps ? [] : props.defaultSelectedKeys;
  selectedKeys = normalizeToArray(selectedKeys);
  return selectedKeys.filter(function(key) {
    return _k2n[key];
  });
};
var getIndeterminateKeys = function getIndeterminateKeys2(checkedKeys, checkStrictly, _k2n, _p2n) {
  if (checkStrictly) {
    return [];
  }
  var indeterminateKeys = [];
  var poss = filterChildKey(checkedKeys.filter(function(key) {
    return !!_k2n[key];
  }).filter(function(key) {
    return !_k2n[key].disabled && !_k2n[key].checkboxDisabled && _k2n[key].checkable !== false;
  }), _k2n, _p2n).map(function(key) {
    return _k2n[key].pos;
  });
  poss.forEach(function(pos) {
    var nums = pos.split("-");
    for (var i = nums.length; i > 2; i--) {
      var parentPos = nums.slice(0, i - 1).join("-");
      var parent = _p2n[parentPos];
      if (parent.disabled || parent.checkboxDisabled)
        break;
      var parentKey = parent.key;
      if (indeterminateKeys.indexOf(parentKey) === -1) {
        indeterminateKeys.push(parentKey);
      }
    }
  });
  return indeterminateKeys;
};
var getCheckedKeys = function getCheckedKeys2(props, willReceiveProps, _k2n, _p2n) {
  var checkedKeys = props.defaultCheckedKeys;
  var indeterminateKeys = void 0;
  if ("checkedKeys" in props) {
    checkedKeys = props.checkedKeys;
  } else if (willReceiveProps) {
    checkedKeys = [];
  }
  var checkStrictly = props.checkStrictly;
  if (checkStrictly) {
    if (isPlainObject(checkedKeys)) {
      var _checkedKeys = checkedKeys, checked = _checkedKeys.checked, indeterminate = _checkedKeys.indeterminate;
      checkedKeys = normalizeToArray(checked);
      indeterminateKeys = normalizeToArray(indeterminate);
    } else {
      checkedKeys = normalizeToArray(checkedKeys);
    }
    checkedKeys = checkedKeys.filter(function(key) {
      return !!_k2n[key];
    });
  } else {
    checkedKeys = getAllCheckedKeys(checkedKeys, _k2n, _p2n);
    checkedKeys = checkedKeys.filter(function(key) {
      return !!_k2n[key];
    });
    indeterminateKeys = getIndeterminateKeys(checkedKeys, props.checkStrictly, _k2n, _p2n);
  }
  return {checkedKeys, indeterminateKeys};
};
var preHandleData = function preHandleData2(dataSource, props) {
  var k2n = {};
  var p2n = {};
  var drill = function drill2() {
    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var prefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
    var parent = arguments[3];
    return data.map(function(item, index) {
      if (item.illegalFlag) {
        return item;
      }
      var children = item.children;
      var pos = prefix + "-" + index;
      var key = item.key;
      item.pos = pos;
      item.level = level;
      if (!("isLeaf" in item)) {
        item.isLeaf = !(children && children.length || props.loadData);
      }
      item.isLastChild = parent ? [].concat(parent.isLastChild || [], index === data.length - 1) : [];
      if (key === void 0 || key === null) {
        item.key = key = pos;
      }
      !item.isLeaf && drill2(children, level + 1, pos, item);
      k2n[key] = p2n[pos] = _extends({}, item);
      return item;
    });
  };
  return {dataSource: drill(dataSource), k2n, p2n};
};
var preHandleChildren = function preHandleChildren2(props) {
  var k2n = {};
  var p2n = {};
  var loop = function loop2(children) {
    var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0";
    var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return Children.map(children, function(node, index) {
      if (!React.isValidElement(node)) {
        return;
      }
      var pos = prefix + "-" + index;
      var key = node.key;
      key = key || pos;
      var item = _extends({}, node.props, {key, pos, level});
      var children2 = node.props.children;
      var hasChildren = children2 && Children.count(children2);
      if (!("isLeaf" in item)) {
        item.isLeaf = !(hasChildren || props.loadData);
      }
      if (hasChildren) {
        item.children = loop2(children2, pos, level + 1);
      }
      k2n[key] = p2n[pos] = item;
      return item;
    });
  };
  loop(props.children);
  return {k2n, p2n};
};
var getData = function getData2(props) {
  var dataSource = props.dataSource, renderChildNodes = props.renderChildNodes, _props$children = props.children, children = _props$children === void 0 ? [] : _props$children, useVirtual = props.useVirtual;
  var data = dataSource;
  if ((renderChildNodes || useVirtual) && !("dataSource" in props)) {
    data = convertChildren2Data(children);
  }
  if (data) {
    try {
      return preHandleData(data, props);
    } catch (err) {
      if ((err.message || "").match("object is not extensible")) {
        return preHandleData(lodash_clonedeep(data), props);
      } else {
        throw err;
      }
    }
  } else {
    return preHandleChildren(props);
  }
};
var Tree = (_temp$3 = _class$3 = function(_Component) {
  _inherits(Tree2, _Component);
  function Tree2(props) {
    _classCallCheck(this, Tree2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    var _getData = getData(props), _getData$dataSource = _getData.dataSource, dataSource = _getData$dataSource === void 0 ? [] : _getData$dataSource, k2n = _getData.k2n, p2n = _getData.p2n;
    var _this$props = _this.props, focusable = _this$props.focusable, autoFocus = _this$props.autoFocus, focusedKey = _this$props.focusedKey;
    var willReceiveProps = false;
    var _getCheckedKeys = getCheckedKeys(props, willReceiveProps, k2n, p2n), checkedKeys = _getCheckedKeys.checkedKeys, _getCheckedKeys$indet = _getCheckedKeys.indeterminateKeys, indeterminateKeys = _getCheckedKeys$indet === void 0 ? [] : _getCheckedKeys$indet;
    _this.state = {
      _k2n: k2n,
      _p2n: p2n,
      dataSource,
      willReceiveProps,
      expandedKeys: getExpandedKeys(props, willReceiveProps, k2n, p2n),
      selectedKeys: getSelectedKeys(props, willReceiveProps, k2n),
      checkedKeys,
      indeterminateKeys
    };
    if (focusable) {
      _this.tabbableKey = _this.getFirstAvaliablelChildKey("0");
    }
    _this.state.focusedKey = "focusedKey" in props ? focusedKey : focusable && autoFocus ? _this.tabbableKey : null;
    if (focusable) {
      _this.tabbableKey = _this.getFirstAvaliablelChildKey("0");
    }
    bindCtx$1(_this, ["handleExpand", "handleSelect", "handleCheck", "handleBlur"]);
    return _this;
  }
  Tree2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var _getData2 = getData(props), _getData2$dataSource = _getData2.dataSource, dataSource = _getData2$dataSource === void 0 ? [] : _getData2$dataSource, k2n = _getData2.k2n, p2n = _getData2.p2n;
    var st = {};
    if (!state.willReceiveProps) {
      return {
        willReceiveProps: true,
        _k2n: k2n,
        _p2n: p2n
      };
    }
    if ("expandedKeys" in props) {
      st.expandedKeys = getExpandedKeys(props, state.willReceiveProps, k2n, p2n);
    }
    if ("selectedKeys" in props) {
      st.selectedKeys = getSelectedKeys(props, state.willReceiveProps, k2n);
    }
    if ("checkedKeys" in props) {
      var _getCheckedKeys2 = getCheckedKeys(props, state.willReceiveProps, k2n, p2n), checkedKeys = _getCheckedKeys2.checkedKeys;
      st.checkedKeys = checkedKeys;
    }
    st.indeterminateKeys = props.checkStrictly ? props.checkedKeys && props.checkedKeys.indeterminate || [] : getIndeterminateKeys(st.checkedKeys || state.checkedKeys || [], props.checkStrictly, k2n, p2n);
    return _extends({}, st, {
      dataSource,
      _k2n: k2n,
      _p2n: p2n
    });
  };
  Tree2.prototype.setFocusKey = function setFocusKey() {
    var _state$selectedKeys = this.state.selectedKeys, selectedKeys = _state$selectedKeys === void 0 ? [] : _state$selectedKeys;
    this.setState({
      focusedKey: selectedKeys.length > 0 ? selectedKeys[0] : this.getFirstAvaliablelChildKey("0")
    });
  };
  Tree2.prototype.getAvailableKey = function getAvailableKey(pos, prev) {
    var _this2 = this;
    var ps = Object.keys(this.state._p2n).filter(function(p) {
      return _this2.isAvailablePos(pos, p);
    });
    if (ps.length > 1) {
      var index = ps.indexOf(pos);
      var targetIndex = void 0;
      if (prev) {
        targetIndex = index === 0 ? ps.length - 1 : index - 1;
      } else {
        targetIndex = index === ps.length - 1 ? 0 : index + 1;
      }
      return this.state._p2n[ps[targetIndex]].key;
    }
    return null;
  };
  Tree2.prototype.getFirstAvaliablelChildKey = function getFirstAvaliablelChildKey(parentPos) {
    var _this3 = this;
    var pos = Object.keys(this.state._p2n).find(function(p) {
      return _this3.isAvailablePos(parentPos + "-0", p);
    });
    return pos ? this.state._p2n[pos].key : null;
  };
  Tree2.prototype.isAvailablePos = function isAvailablePos(refPos, targetPos) {
    var disabled = this.state._p2n[targetPos].disabled;
    return this.isSibling(refPos, targetPos) && !disabled;
  };
  Tree2.prototype.isSibling = function isSibling(currentPos, targetPos) {
    var currentNums = currentPos.split("-").slice(0, -1);
    var targetNums = targetPos.split("-").slice(0, -1);
    return currentNums.length === targetNums.length && currentNums.every(function(num, index) {
      return num === targetNums[index];
    });
  };
  Tree2.prototype.getParentKey = function getParentKey(pos) {
    return this.state._p2n[pos.slice(0, pos.length - 2)].key;
  };
  Tree2.prototype.processKey = function processKey(keys, key, add) {
    var index = keys.indexOf(key);
    if (add && index === -1) {
      keys.push(key);
    } else if (!add && index > -1) {
      keys.splice(index, 1);
    }
    return keys;
  };
  Tree2.prototype.handleItemKeyDown = function handleItemKeyDown(key, item, e) {
    if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.RIGHT, KEYCODE.LEFT, KEYCODE.ENTER, KEYCODE.ESC, KEYCODE.SPACE].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      e.stopPropagation();
    }
    var focusedKey = this.state.focusedKey;
    var node = this.state._k2n[key];
    var pos = this.state._k2n[key].pos;
    var level = pos.split("-").length - 1;
    switch (e.keyCode) {
      case KEYCODE.UP: {
        var avaliableKey = this.getAvailableKey(pos, true);
        if (avaliableKey) {
          focusedKey = avaliableKey;
        }
        break;
      }
      case KEYCODE.DOWN: {
        var _avaliableKey = this.getAvailableKey(pos, false);
        if (_avaliableKey) {
          focusedKey = _avaliableKey;
        }
        break;
      }
      case KEYCODE.RIGHT: {
        this.handleExpand(true, key, node);
        var _avaliableKey2 = this.getFirstAvaliablelChildKey(pos);
        if (_avaliableKey2) {
          focusedKey = _avaliableKey2;
        }
        break;
      }
      case KEYCODE.LEFT:
      case KEYCODE.ESC: {
        if (level === 1) {
          var _avaliableKey3 = this.getAvailableKey(pos, true);
          if (_avaliableKey3) {
            focusedKey = _avaliableKey3;
          }
        } else if (level > 1) {
          var parentKey = this.getParentKey(pos);
          this.handleExpand(false, parentKey, node);
          focusedKey = parentKey;
        }
        break;
      }
      case KEYCODE.ENTER:
      case KEYCODE.SPACE: {
        var checkable = "checkable" in item.props ? item.props.checkable : this.props.checkable;
        var selectable = "selectable" in item.props ? item.props.selectable : this.props.selectable;
        if (checkable) {
          this.handleCheck(!item.props.checked, key, node);
        } else if (selectable) {
          this.handleSelect(!item.props.selected, key, node, e);
        }
        break;
      }
      case KEYCODE.TAB:
        focusedKey = null;
        break;
    }
    if (focusedKey !== this.state.focusedKey) {
      if (!("focusedKey" in this.props)) {
        this.setState({
          focusedKey
        });
      }
    }
    this.props.onItemKeyDown(focusedKey, item, e);
    this.props.onItemFocus(focusedKey, e);
  };
  Tree2.prototype.handleBlur = function handleBlur(e) {
    this.setState({
      focusedKey: ""
    });
    this.props.onBlur && this.props.onBlur(e);
  };
  Tree2.prototype.handleExpand = function handleExpand(expand, key, node) {
    var _this4 = this;
    var _props = this.props, onExpand = _props.onExpand, loadData = _props.loadData;
    var expandedKeys = this.state.expandedKeys;
    this.processKey(expandedKeys, key, expand);
    var setExpandedState = function setExpandedState2() {
      if (!("expandedKeys" in _this4.props)) {
        _this4.setState({expandedKeys});
      }
      onExpand(expandedKeys, {expanded: expand, node});
    };
    if (expand && loadData) {
      return loadData(node).then(setExpandedState);
    } else {
      setExpandedState();
    }
  };
  Tree2.prototype.handleSelect = function handleSelect(select, key, node, e) {
    var _props2 = this.props, multiple = _props2.multiple, onSelect = _props2.onSelect;
    var selectedKeys = [].concat(this.state.selectedKeys);
    if (multiple) {
      this.processKey(selectedKeys, key, select);
    } else {
      selectedKeys = select ? [key] : [];
    }
    if (!("selectedKeys" in this.props)) {
      this.setState({selectedKeys});
    }
    onSelect(selectedKeys, {
      selectedNodes: this.getNodes(selectedKeys),
      node,
      selected: select,
      event: e
    });
  };
  Tree2.prototype.handleCheck = function handleCheck(check, key, node) {
    var _this5 = this;
    var _props3 = this.props, checkStrictly = _props3.checkStrictly, checkedStrategy = _props3.checkedStrategy, onCheck = _props3.onCheck;
    var _state = this.state, _k2n = _state._k2n, _p2n = _state._p2n;
    var checkedKeys = [].concat(this.state.checkedKeys);
    if (checkStrictly) {
      this.processKey(checkedKeys, key, check);
      var _newCheckedKeys = isPlainObject(this.props.checkedKeys) ? {
        checked: checkedKeys,
        indeterminate: this.state.indeterminateKeys
      } : checkedKeys;
      onCheck(_newCheckedKeys, {
        checkedNodes: this.getNodes(checkedKeys),
        checkedNodesPositions: checkedKeys.map(function(key2) {
          if (!_k2n[key2])
            return null;
          var _k2n$key = _k2n[key2], node2 = _k2n$key.node, pos2 = _k2n$key.pos;
          return {node: node2, pos: pos2};
        }).filter(function(v) {
          return !!v;
        }),
        node,
        indeterminateKeys: this.state.indeterminateKeys,
        checked: check,
        key
      });
      return;
    }
    var pos = _k2n[key].pos;
    forEachEnableNode(_k2n[key], function(node2) {
      if (node2.checkable === false)
        return;
      _this5.processKey(checkedKeys, node2.key, check);
    });
    var ps = Object.keys(_p2n);
    var currentPos = pos;
    var nums = pos.split("-");
    for (var i = nums.length; i > 2; i--) {
      var parentCheck = true;
      var parentPos = nums.slice(0, i - 1).join("-");
      if (_p2n[parentPos].disabled || _p2n[parentPos].checkboxDisabled || _p2n[parentPos].checkable === false) {
        currentPos = parentPos;
        continue;
      }
      var parentKey = _p2n[parentPos].key;
      var parentChecked = checkedKeys.indexOf(parentKey) > -1;
      if (!check && !parentChecked) {
        break;
      }
      for (var j = 0; j < ps.length; j++) {
        var p = ps[j];
        var pnode = _p2n[p];
        if (isSiblingOrSelf(currentPos, p) && !pnode.disabled && !pnode.checkboxDisabled) {
          var k = pnode.key;
          if (pnode.checkable === false) {
            if (!pnode.children || pnode.children.length === 0)
              continue;
            for (var m = 0; m < pnode.children.length; m++) {
              if (!pnode.children.every(function(child) {
                return isNodeChecked(child, checkedKeys);
              })) {
                parentCheck = false;
                break;
              }
            }
          } else if (checkedKeys.indexOf(k) === -1) {
            parentCheck = false;
          }
          if (!parentCheck)
            break;
        }
      }
      this.processKey(checkedKeys, parentKey, parentCheck);
      currentPos = parentPos;
    }
    var indeterminateKeys = getIndeterminateKeys(checkedKeys, checkStrictly, _k2n, _p2n);
    if (!("checkedKeys" in this.props)) {
      this.setState({
        checkedKeys,
        indeterminateKeys
      });
    }
    var newCheckedKeys = void 0;
    switch (checkedStrategy) {
      case "parent":
        newCheckedKeys = filterChildKey(checkedKeys, _k2n, _p2n);
        break;
      case "child":
        newCheckedKeys = filterParentKey(checkedKeys, _k2n);
        break;
      default:
        newCheckedKeys = checkedKeys;
        break;
    }
    onCheck(newCheckedKeys, {
      checkedNodes: this.getNodes(newCheckedKeys),
      checkedNodesPositions: newCheckedKeys.map(function(key2) {
        if (!_k2n[key2])
          return null;
        var _k2n$key2 = _k2n[key2], node2 = _k2n$key2.node, pos2 = _k2n$key2.pos;
        return {node: node2, pos: pos2};
      }).filter(function(v) {
        return !!v;
      }),
      node,
      indeterminateKeys,
      checked: check,
      key
    });
  };
  Tree2.prototype.getNodeProps = function getNodeProps(key) {
    var prefix = this.props.prefix;
    var _state2 = this.state, expandedKeys = _state2.expandedKeys, selectedKeys = _state2.selectedKeys, checkedKeys = _state2.checkedKeys, dragOverNodeKey = _state2.dragOverNodeKey, _k2n = _state2._k2n, indeterminateKeys = _state2.indeterminateKeys;
    var _k2n$key3 = _k2n[key], pos = _k2n$key3.pos, isLeaf = _k2n$key3.isLeaf, level = _k2n$key3.level;
    return {
      prefix,
      root: this,
      eventKey: key,
      pos,
      isLeaf,
      level,
      expanded: expandedKeys.indexOf(key) > -1,
      selected: selectedKeys.indexOf(key) > -1,
      checked: checkedKeys.indexOf(key) > -1,
      indeterminate: indeterminateKeys.indexOf(key) > -1,
      dragOver: dragOverNodeKey === key && this.dropPosition === 0,
      dragOverGapTop: dragOverNodeKey === key && this.dropPosition === -1,
      dragOverGapBottom: dragOverNodeKey === key && this.dropPosition === 1
    };
  };
  Tree2.prototype.getNodes = function getNodes(keys) {
    var _this6 = this;
    return keys.map(function(key) {
      return _this6.state._k2n[key] && _this6.state._k2n[key].node;
    }).filter(function(v) {
      return !!v;
    });
  };
  Tree2.prototype.handleDragStart = function handleDragStart(e, node) {
    var _this7 = this;
    var dragNodeKey = node.props.eventKey;
    this.dragNode = node;
    this.dragNodesKeys = Object.keys(this.state._k2n).filter(function(k) {
      return isDescendantOrSelf(_this7.state._k2n[dragNodeKey].pos, _this7.state._k2n[k].pos);
    });
    var expandedKeys = this.processKey([].concat(this.state.expandedKeys), dragNodeKey, false);
    this.setState({expandedKeys});
    this.props.onDragStart({
      event: e,
      node,
      expandedKeys
    });
  };
  Tree2.prototype.handleDragEnter = function handleDragEnter(e, node) {
    var dragOverNodeKey = node.props.eventKey;
    this.dropPosition = this.getDropPosition(e, node);
    if (this.dragNode && this.dragNode.props.eventKey === dragOverNodeKey && this.dropPosition === 0) {
      this.setState({
        dragOverNodeKey: null
      });
      return;
    }
    var expandedKeys = this.processKey([].concat(this.state.expandedKeys), dragOverNodeKey, true);
    this.setState({
      dragOverNodeKey,
      expandedKeys
    });
    this.props.onDragEnter({
      event: e,
      node,
      expandedKeys
    });
  };
  Tree2.prototype.getDropPosition = function getDropPosition(e, node) {
    var labelWrapperNode = node.labelWrapperEl;
    var offsetTop = getOffset(labelWrapperNode).top;
    var offsetHeight = labelWrapperNode.offsetHeight;
    var pageY = e.pageY;
    var gapHeight = 2;
    if (pageY > offsetTop + offsetHeight - gapHeight) {
      return 1;
    }
    if (pageY < offsetTop + gapHeight) {
      return -1;
    }
    return 0;
  };
  Tree2.prototype.handleDragOver = function handleDragOver(e, node) {
    this.props.onDragOver({event: e, node});
  };
  Tree2.prototype.handleDragLeave = function handleDragLeave(e, node) {
    this.props.onDragLeave({event: e, node});
  };
  Tree2.prototype.handleDragEnd = function handleDragEnd(e, node) {
    this.setState({
      dragOverNodeKey: null
    });
    this.props.onDragEnd({event: e, node});
  };
  Tree2.prototype.handleDrop = function handleDrop(e, node) {
    if (this.dragNode && isDescendantOrSelf(this.state._k2n[this.dragNode.props.eventKey].pos, this.state._k2n[node.props.eventKey].pos)) {
      return;
    }
    this.setState({
      dragOverNodeKey: null
    });
    var params = this.generateDropParams(node);
    this.props.onDrop(_extends({
      event: e
    }, params));
  };
  Tree2.prototype.canDrop = function canDrop2(node) {
    var params = this.generateDropParams(node);
    return this.props.canDrop(params);
  };
  Tree2.prototype.generateDropParams = function generateDropParams(node) {
    return {
      dragNode: this.dragNode,
      dragNodesKeys: [].concat(this.dragNodesKeys),
      node,
      dropPosition: this.dropPosition
    };
  };
  Tree2.prototype.filterTreeNode = function filterTreeNode(node) {
    return this.props.filterTreeNode.call(this, node);
  };
  Tree2.prototype.shouldNodeShow = function shouldNodeShow(nodeData) {
    var _state3 = this.state, expandedKeys = _state3.expandedKeys, _p2n = _state3._p2n;
    return getAllDescendantKeys(nodeData, _p2n).every(function(k) {
      return expandedKeys.includes(k);
    });
  };
  Tree2.prototype.renderTreeNode = function renderTreeNode(props, childNodes) {
    var rtl = this.props.rtl;
    var key = props.key;
    var nodeProps = _extends({
      _key: key
    }, props, this.getNodeProps(key));
    return React.createElement(TreeNode$1, _extends({rtl, key}, nodeProps), childNodes);
  };
  Tree2.prototype.renderNodeList = function renderNodeList(dataSource) {
    var _this8 = this;
    var nodeList = [];
    var _k2n = this.state._k2n;
    var drill = function drill2(list) {
      list.forEach(function(item) {
        if (item.illegalFlag) {
          nodeList.push(item);
          return;
        }
        var children = item.children, nodeProps = _objectWithoutProperties(item, ["children"]);
        if (!_this8.shouldNodeShow(item)) {
          return;
        }
        nodeList.push(nodeProps);
        children && children.length && drill2(children);
      });
    };
    drill(dataSource);
    return nodeList.map(function(nodeProps, index) {
      if (nodeProps.illegalFlag) {
        return nodeProps.node;
      }
      nodeProps.size = nodeList.length;
      nodeProps.posinset = index + 1;
      return _k2n[nodeProps.key].node = _this8.renderTreeNode(nodeProps);
    });
  };
  Tree2.prototype.renderWithCustomChildNodes = function renderWithCustomChildNodes(dataSource) {
    var _this9 = this;
    var renderChildNodes = this.props.renderChildNodes;
    var _k2n = this.state._k2n;
    var drill = function drill2(list) {
      return list.map(function(_ref, index) {
        var children = _ref.children, nodeProps = _objectWithoutProperties(_ref, ["children"]);
        var childNodes = void 0;
        if (children && children.length) {
          childNodes = renderChildNodes(drill2(children));
        }
        nodeProps.size = list.length;
        nodeProps.posinset = index + 1;
        return _k2n[nodeProps.key].node = _this9.renderTreeNode(nodeProps, childNodes);
      });
    };
    return drill(dataSource);
  };
  Tree2.prototype.renderByDataSource = function renderByDataSource(dataSource) {
    var _this10 = this;
    var rtl = this.props.rtl;
    var drill = function drill2(data) {
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0";
      return data.map(function(item, index) {
        if (item.illegalFlag) {
          return item.node;
        }
        var pos = prefix + "-" + index;
        var _item$key = item.key, key = _item$key === void 0 ? pos : _item$key, children = item.children, others = _objectWithoutProperties(item, ["key", "children"]);
        var props = _extends({}, others, _this10.getNodeProps("" + key), {
          _key: key
        });
        if (children && children.length) {
          props.children = drill2(children, pos);
        }
        var node = React.createElement(TreeNode$1, _extends({rtl, key, size: data.length}, props));
        _this10.state._k2n[key].node = node;
        return node;
      });
    };
    return drill(dataSource);
  };
  Tree2.prototype.renderByChildren = function renderByChildren() {
    var _this11 = this;
    var rtl = this.props.rtl;
    var _k2n = this.state._k2n;
    var loop = function loop2(children) {
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0";
      return Children.map(children, function(child, index) {
        if (!React.isValidElement(child)) {
          return;
        }
        var pos = prefix + "-" + index;
        var key = child.key || pos;
        var props = _this11.getNodeProps("" + key);
        if (child.props.children) {
          props.children = loop2(child.props.children, pos);
        }
        props._key = key;
        props.rtl = rtl;
        props.size = Children.count(children);
        var node = cloneElement(child, props);
        _k2n[key].node = node;
        return node;
      });
    };
    return loop(this.props.children);
  };
  Tree2.prototype.render = function render() {
    var _cx, _this12 = this;
    var _props4 = this.props, prefix = _props4.prefix, rtl = _props4.rtl, className = _props4.className, showLine = _props4.showLine, isNodeBlock = _props4.isNodeBlock, isLabelBlock = _props4.isLabelBlock, multiple = _props4.multiple, useVirtual = _props4.useVirtual, renderChildNodes = _props4.renderChildNodes;
    var dataSource = this.state.dataSource;
    var _pickOthers = pickOthers$1(Object.keys(Tree2.propTypes), this.props), style = _pickOthers.style, others = _objectWithoutProperties(_pickOthers, ["style"]);
    if (rtl) {
      others.dir = "rtl";
    }
    var newClassName = classnames((_cx = {}, _cx[prefix + "tree"] = true, _cx[prefix + "label-block"] = isLabelBlock, _cx[prefix + "node-block"] = isNodeBlock, _cx[prefix + "node-indent"] = !isNodeBlock, _cx[prefix + "show-line"] = !isNodeBlock && showLine, _cx[className] = !!className, _cx));
    var treeRender = function treeRender2(items, ref) {
      return React.createElement("ul", _extends({
        role: "tree",
        ref,
        "aria-multiselectable": multiple,
        onBlur: _this12.handleBlur,
        className: newClassName,
        style: useVirtual ? null : style
      }, others), items);
    };
    var virtualTreeRender = function virtualTreeRender2(dataSource2) {
      return React.createElement("div", {className: prefix + "virtual-tree-container", style}, React.createElement(NextVirtualList, {itemsRenderer: function itemsRenderer(items, ref) {
        return treeRender(items, ref);
      }}, _this12.renderNodeList(dataSource2)));
    };
    return useVirtual ? virtualTreeRender(dataSource) : renderChildNodes ? treeRender(this.renderWithCustomChildNodes(dataSource)) : !this.props.dataSource ? treeRender(this.renderByChildren()) : treeRender(this.renderByDataSource(dataSource));
  };
  return Tree2;
}(Component), _class$3.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  pure: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  dataSource: propTypes.array,
  showLine: propTypes.bool,
  selectable: propTypes.bool,
  selectedKeys: propTypes.arrayOf(propTypes.string),
  defaultSelectedKeys: propTypes.arrayOf(propTypes.string),
  onSelect: propTypes.func,
  multiple: propTypes.bool,
  checkable: propTypes.bool,
  checkedKeys: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.object]),
  defaultCheckedKeys: propTypes.arrayOf(propTypes.string),
  checkStrictly: propTypes.bool,
  checkedStrategy: propTypes.oneOf(["all", "parent", "child"]),
  onCheck: propTypes.func,
  expandedKeys: propTypes.arrayOf(propTypes.string),
  defaultExpandedKeys: propTypes.arrayOf(propTypes.string),
  defaultExpandAll: propTypes.bool,
  autoExpandParent: propTypes.bool,
  onExpand: propTypes.func,
  editable: propTypes.bool,
  onEditFinish: propTypes.func,
  draggable: propTypes.bool,
  onDragStart: propTypes.func,
  onDragEnter: propTypes.func,
  onDragOver: propTypes.func,
  onDragLeave: propTypes.func,
  onDragEnd: propTypes.func,
  onDrop: propTypes.func,
  canDrop: propTypes.func,
  loadData: propTypes.func,
  filterTreeNode: propTypes.func,
  onRightClick: propTypes.func,
  isLabelBlock: propTypes.bool,
  isNodeBlock: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  animation: propTypes.bool,
  focusedKey: propTypes.string,
  renderChildNodes: propTypes.func,
  focusable: propTypes.bool,
  autoFocus: propTypes.bool,
  onItemFocus: propTypes.func,
  onBlur: propTypes.func,
  onItemKeyDown: propTypes.func,
  useVirtual: propTypes.bool
}, _class$3.defaultProps = {
  prefix: "next-",
  rtl: false,
  pure: false,
  showLine: false,
  selectable: true,
  editable: false,
  multiple: false,
  checkable: false,
  checkStrictly: false,
  checkedStrategy: "all",
  draggable: false,
  autoExpandParent: true,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  onExpand: noop,
  onCheck: noop,
  onSelect: noop,
  onDragStart: noop,
  onDragEnter: noop,
  onDragOver: noop,
  onDragLeave: noop,
  onDragEnd: noop,
  onDrop: noop,
  canDrop: function canDrop() {
    return true;
  },
  onEditFinish: noop,
  onRightClick: noop,
  isLabelBlock: false,
  isNodeBlock: false,
  animation: true,
  focusable: true,
  autoFocus: false,
  onItemFocus: noop,
  onItemKeyDown: noop,
  useVirtual: false
}, _temp$3);
Tree.displayName = "Tree";
var Tree$1 = polyfill(Tree);
Tree$1.Node = TreeNode$1;
var NextTree = NextConfigProvider.config(Tree$1, {
  exportNames: ["setFocusKey"]
});
export {NextTree as N, filterChildKey as a, filterParentKey as f, getAllCheckedKeys as g, isDescendantOrSelf as i, lodash_clonedeep as l, normalizeToArray as n};
