import {F as createCommonjsModule, H as getDefaultExportFromCjs, l as isValidElement, W as cloneElement, J as ReactDOM, _ as _inherits, I as useState, X as useMemo, q as log, a as _classCallCheck$1, g as _extends, b as _possibleConstructorReturn} from "./index.0d610fb8.js";
var interopRequireDefault = createCommonjsModule(function(module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  module.exports = _interopRequireDefault;
});
var runtime_1 = createCommonjsModule(function(module) {
  var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);
      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }
    exports.wrap = wrap;
    function tryCatch(fn, obj, arg) {
      try {
        return {type: "normal", arg: fn.call(obj, arg)};
      } catch (err) {
        return {type: "throw", arg: err};
      }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function() {
      return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype = NativeIteratorPrototype;
    }
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };
    exports.awrap = function(arg) {
      return {__await: arg};
    };
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value2) {
              invoke("next", value2, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }
          return PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            return invoke("throw", error, resolve, reject);
          });
        }
      }
      var previousPromise;
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
      this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0)
        PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    };
    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }
          return doneResult();
        }
        context.method = method;
        context.arg = arg;
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if (context.method === "next") {
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }
            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }
          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
            if (record.arg === ContinueSentinel) {
              continue;
            }
            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        context.delegate = null;
        if (context.method === "throw") {
          if (delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);
            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }
          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }
      var info = record.arg;
      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }
      if (info.done) {
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        return info;
      }
      context.delegate = null;
      return ContinueSentinel;
    }
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    Gp[iteratorSymbol] = function() {
      return this;
    };
    Gp.toString = function() {
      return "[object Generator]";
    };
    function pushTryEntry(locs) {
      var entry = {tryLoc: locs[0]};
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
      this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{tryLoc: "root"}];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();
      return function next() {
        while (keys.length) {
          var key2 = keys.pop();
          if (key2 in object) {
            next.value = key2;
            next.done = false;
            return next;
          }
        }
        next.done = true;
        return next;
      };
    };
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
        if (typeof iterable.next === "function") {
          return iterable;
        }
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next2() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next2.value = iterable[i];
                next2.done = false;
                return next2;
              }
            }
            next2.value = undefined$1;
            next2.done = true;
            return next2;
          };
          return next.next = next;
        }
      }
      return {next: doneResult};
    }
    exports.values = values;
    function doneResult() {
      return {value: undefined$1, done: true};
    }
    Context.prototype = {
      constructor: Context,
      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);
        if (!skipTempReset) {
          for (var name in this) {
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
        return this.rval;
      },
      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          if (caught) {
            context.method = "next";
            context.arg = undefined$1;
          }
          return !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
          if (entry.tryLoc === "root") {
            return handle("end");
          }
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          finallyEntry = null;
        }
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }
        return this.complete(record);
      },
      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
        return ContinueSentinel;
      },
      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      catch: function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName,
          nextLoc
        };
        if (this.method === "next") {
          this.arg = undefined$1;
        }
        return ContinueSentinel;
      }
    };
    return exports;
  }(module.exports);
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});
var regenerator = runtime_1;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var asyncToGenerator = _asyncToGenerator;
var _typeof_1 = createCommonjsModule(function(module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      module.exports = _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  module.exports = _typeof;
});
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var defineProperty = _defineProperty;
var _extends_1 = createCommonjsModule(function(module) {
  function _extends2() {
    module.exports = _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  module.exports = _extends2;
});
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var arrayWithHoles = _arrayWithHoles;
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
var iterableToArrayLimit = _iterableToArrayLimit;
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var arrayLikeToArray = _arrayLikeToArray;
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return arrayLikeToArray(o, minLen);
}
var unsupportedIterableToArray = _unsupportedIterableToArray;
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var nonIterableRest = _nonIterableRest;
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
var slicedToArray = _slicedToArray;
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var classCallCheck = _classCallCheck;
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var createClass = _createClass;
var util = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.format = format;
  exports.asyncMap = asyncMap;
  exports.asyncMapPromise = asyncMapPromise;
  exports.complementError = complementError;
  exports.processErrorResults = processErrorResults;
  var _regenerator = interopRequireDefault(regenerator);
  var _asyncToGenerator2 = interopRequireDefault(asyncToGenerator);
  var formatRegExp = /%[sdj%]/g;
  function format() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var i = 1;
    var f = args[0];
    var len = args.length;
    if (typeof f === "function") {
      return f(args.slice(1));
    }
    if (typeof f === "string") {
      var str = String(f).replace(formatRegExp, function(x) {
        if (x === "%%") {
          return "%";
        }
        if (i >= len) {
          return x;
        }
        switch (x) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
          default:
            return x;
        }
      });
      return str;
    }
    return f;
  }
  function asyncSerialArray(arr, func, callback) {
    var index = 0;
    var arrLength = arr.length;
    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      var original = index;
      index = index + 1;
      if (original < arrLength) {
        func(arr[original], next);
      } else {
        return callback([]);
      }
    }
    next([]);
  }
  function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function(k) {
      Object.keys(objArr[k]).forEach(function(r) {
        ret.push(objArr[k][r]);
      });
    });
    return ret;
  }
  function asyncMap(objArr, option, func, callback) {
    if (option.first) {
      var flattenArr = flattenObjArr(objArr);
      return asyncSerialArray(flattenArr, func, callback);
    }
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var next = function next2(errors) {
      results.push(errors);
      total++;
      if (total === objArrLength) {
        return callback(results);
      }
    };
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      asyncSerialArray(arr, func, next);
    });
  }
  function resolveErrorPromiseInSeries(_x, _x2) {
    return _resolveErrorPromiseInSeries.apply(this, arguments);
  }
  function _resolveErrorPromiseInSeries() {
    _resolveErrorPromiseInSeries = (0, _asyncToGenerator2.default)(/* @__PURE__ */ _regenerator.default.mark(function _callee2(arr, func) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", arr.reduce(/* @__PURE__ */ function() {
                var _ref = (0, _asyncToGenerator2.default)(/* @__PURE__ */ _regenerator.default.mark(function _callee(prevPromise, next) {
                  var errors;
                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return prevPromise;
                        case 3:
                          errors = _context.sent;
                          _context.next = 9;
                          break;
                        case 6:
                          _context.prev = 6;
                          _context.t0 = _context["catch"](0);
                          errors = _context.t0;
                        case 9:
                          if (!(errors && errors.length)) {
                            _context.next = 11;
                            break;
                          }
                          return _context.abrupt("return", errors);
                        case 11:
                          return _context.abrupt("return", func(next));
                        case 12:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 6]]);
                }));
                return function(_x6, _x7) {
                  return _ref.apply(this, arguments);
                };
              }(), Promise.resolve()));
            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _resolveErrorPromiseInSeries.apply(this, arguments);
  }
  function asyncMapPromise(_x3, _x4, _x5) {
    return _asyncMapPromise.apply(this, arguments);
  }
  function _asyncMapPromise() {
    _asyncMapPromise = (0, _asyncToGenerator2.default)(/* @__PURE__ */ _regenerator.default.mark(function _callee3(objArr, option, func) {
      var flatObjArr, objArrValues;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!option.first) {
                _context3.next = 3;
                break;
              }
              flatObjArr = flattenObjArr(objArr);
              return _context3.abrupt("return", resolveErrorPromiseInSeries(flatObjArr, func));
            case 3:
              objArrValues = Object.values(objArr);
              return _context3.abrupt("return", Promise.all(objArrValues.map(function(val) {
                return resolveErrorPromiseInSeries(val, func);
              })));
            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _asyncMapPromise.apply(this, arguments);
  }
  function complementError(rule) {
    return function(oe) {
      if (oe && oe.message) {
        oe.field = rule.field;
        return oe;
      }
      return {
        message: oe,
        field: rule.field
      };
    };
  }
  function processErrorResults() {
    var results = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var errors = [];
    var fields = {};
    function add(e) {
      if (Array.isArray(e)) {
        errors = errors.concat(e);
      } else {
        errors.push(e);
      }
    }
    for (var i = 0; i < results.length; i++) {
      add(results[i]);
    }
    if (!errors.length) {
      errors = null;
      fields = null;
    } else {
      for (var _i = 0; _i < errors.length; _i++) {
        var field = errors[_i].field;
        if (field) {
          fields[field] = fields[field] || [];
          fields[field].push(errors[_i]);
        }
      }
    }
    return {
      errors,
      fields
    };
  }
});
var messages = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _default = {
    default: "%s 校验失败",
    required: "%s 是必填字段",
    format: {
      number: "%s 不是合法的数字",
      email: "%s 不是合法的 email 地址",
      url: "%s 不是合法的 URL 地址",
      tel: "%s 不是合法的电话号码"
    },
    number: {
      length: "%s 长度必须是 %s",
      min: "%s 字段数值不得小于 %s",
      max: "%s 字段数值不得大于 %s",
      minLength: "%s 字段字符长度不得少于 %s",
      maxLength: "%s 字段字符长度不得超过 %s"
    },
    string: {
      length: "%s 长度必须是 %s",
      min: "%s 字段数值不得小于 %s",
      max: "%s 字段数值不得大于 %s",
      minLength: "%s 字段字符长度不得少于 %s",
      maxLength: "%s 字段字符长度不得超过 %s"
    },
    array: {
      length: "%s 个数必须是 %s",
      minLength: "%s 个数不得少于 %s",
      maxLength: "%s 个数不得超过 %s"
    },
    pattern: "%s 字段数值 %s 不匹配正则 %s"
  };
  exports.default = _default;
});
var interopRequireWildcard = createCommonjsModule(function(module) {
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof_1(obj) !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  module.exports = _interopRequireWildcard;
});
var required_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var util$1 = interopRequireWildcard(util);
  function required(rule, value, errors, options) {
    if (value === void 0 || value === null || value === "" || value.length === 0) {
      errors.push(util$1.format(options.messages.required, rule.aliasName || rule.field));
    }
  }
  var _default = required;
  exports.default = _default;
});
var format_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var util$1 = interopRequireWildcard(util);
  var pattern = {
    email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    number: /\d*/,
    tel: /^(1\d{10})$|(((400)-(\d{3})-(\d{4}))|^((\d{7,8})|(\d{3,4})-(\d{7,8})|(\d{7,8})-(\d{1,4}))$)$|^([ ]?)$/
  };
  var types = {
    number: function number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number" || typeof value === "string" && !!value.match(pattern.number);
    },
    email: function email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url: function url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    tel: function tel(value) {
      return typeof value === "string" && !!value.match(pattern.tel);
    }
  };
  function format(rule, value, errors, options) {
    var custom = ["email", "number", "url", "tel"];
    var ruleType = rule.format;
    if (custom.indexOf(ruleType) > -1 && !types[ruleType](value)) {
      errors.push(util$1.format(options.messages.format[ruleType], rule.aliasName || rule.field, rule.format));
    }
  }
  var _default = format;
  exports.default = _default;
});
var size_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var util$1 = interopRequireWildcard(util);
  function size(rule, value, errors, options) {
    var key = null;
    var isNum = typeof value === "number";
    var isStr = typeof value === "string";
    if (isNum) {
      key = "number";
    } else if (isStr) {
      key = "string";
    }
    if (!key) {
      return false;
    }
    var val = value;
    var max = Number(rule.max);
    var min = Number(rule.min);
    if (min || max) {
      if (isStr) {
        val = Number(val);
      }
      if (val < min) {
        errors.push(util$1.format(options.messages[key].min, rule.aliasName || rule.field, rule.min));
      } else if (val > max) {
        errors.push(util$1.format(options.messages[key].max, rule.aliasName || rule.field, rule.max));
      }
    }
  }
  var _default = size;
  exports.default = _default;
});
var length_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var util$1 = interopRequireWildcard(util);
  function length(rule, value, errors, options) {
    var key = null;
    var isNum = typeof value === "number";
    var isStr = typeof value === "string";
    var isArr = Array.isArray(value);
    if (isNum) {
      key = "number";
    } else if (isStr) {
      key = "string";
    } else if (isArr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    var val = value;
    var length2 = Number(rule.length);
    var maxLength = Number(rule.maxLength);
    var minLength = Number(rule.minLength);
    if (minLength || maxLength || length2) {
      if (isNum) {
        val = "".concat(val);
      }
      val = val.length;
      if (length2 && val !== rule.length) {
        errors.push(util$1.format(options.messages[key].length, rule.aliasName || rule.field, rule.length));
      } else if (val < minLength) {
        errors.push(util$1.format(options.messages[key].minLength, rule.aliasName || rule.field, rule.minLength));
      } else if (val > maxLength) {
        errors.push(util$1.format(options.messages[key].maxLength, rule.aliasName || rule.field, rule.maxLength));
      }
    }
  }
  var _default = length;
  exports.default = _default;
});
var pattern_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var util$1 = interopRequireWildcard(util);
  function pattern(rule, value, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        if (!rule.pattern.test(value)) {
          errors.push(util$1.format(options.messages.pattern, rule.aliasName || rule.field, value, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        var _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value)) {
          errors.push(util$1.format(options.messages.pattern, rule.aliasName || rule.field, value, rule.pattern));
        }
      }
    }
  }
  var _default = pattern;
  exports.default = _default;
});
var rules = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _required = interopRequireDefault(required_1);
  var _format = interopRequireDefault(format_1);
  var _size = interopRequireDefault(size_1);
  var _length = interopRequireDefault(length_1);
  var _pattern = interopRequireDefault(pattern_1);
  var _default = {
    required: _required.default,
    format: _format.default,
    min: _size.default,
    max: _size.default,
    minLength: _length.default,
    maxLength: _length.default,
    length: _length.default,
    pattern: _pattern.default
  };
  exports.default = _default;
});
var validator = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.validateFunc = validateFunc;
  exports.getValidationMethod = getValidationMethod;
  var _rules = interopRequireDefault(rules);
  function validateFunc(validator2, ruleType) {
    return function(rule, value, cb, options) {
      var errors = [];
      if (ruleType !== "required") {
        var _errors = [];
        _rules.default.required(rule, value, _errors, options);
        if (_errors.length > 0) {
          if ("required" in rule && rule.required) {
            if (cb) {
              return cb(_errors);
            } else {
              return Promise.reject(_errors);
            }
          } else if (cb) {
            return cb([]);
          } else {
            return Promise.resolve(null);
          }
        }
      }
      validator2(rule, value, errors, options);
      if (cb) {
        return cb(errors);
      }
      if (Promise) {
        return Promise.resolve(errors);
      }
    };
  }
  function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    for (var i = 0; i < keys.length; i++) {
      var ruleType = keys[i];
      if (ruleType === "required") {
        continue;
      }
      if (ruleType in _rules.default) {
        return validateFunc(_rules.default[ruleType], ruleType);
      }
    }
    if ("required" in rule && rule.required) {
      return validateFunc(_rules.default.required, "required");
    }
    return null;
  }
});
var lib = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _regenerator = interopRequireDefault(regenerator);
  var _asyncToGenerator2 = interopRequireDefault(asyncToGenerator);
  var _defineProperty2 = interopRequireDefault(defineProperty);
  var _classCallCheck2 = interopRequireDefault(classCallCheck);
  var _createClass2 = interopRequireDefault(createClass);
  var _messages2 = interopRequireDefault(messages);
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(source, true).forEach(function(key) {
          (0, _defineProperty2.default)(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function noop() {
  }
  function serializeRules(source, rules2) {
    var arr;
    var value;
    var series = {};
    var names = Object.keys(rules2);
    names.forEach(function(name) {
      arr = rules2[name];
      value = source[name];
      if (!Array.isArray(arr)) {
        arr = [arr];
      }
      arr.forEach(function(rule) {
        rule.validator = (0, validator.getValidationMethod)(rule);
        rule.field = name;
        if (!rule.validator) {
          return;
        }
        series[name] = series[name] || [];
        series[name].push({
          rule,
          value,
          source,
          field: name
        });
      });
    });
    return series;
  }
  var Schema = /* @__PURE__ */ function() {
    function Schema2(rules2) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _classCallCheck2.default)(this, Schema2);
      this._rules = rules2;
      this._options = _objectSpread({}, options, {
        messages: _objectSpread({}, _messages2.default, {}, options.messages)
      });
      this.complete = [];
    }
    (0, _createClass2.default)(Schema2, [{
      key: "abort",
      value: function abort() {
        for (var i = 0; i < this.complete.length; i++) {
          this.complete[i] = noop;
        }
      }
    }, {
      key: "messages",
      value: function messages2(_messages) {
        this._options.messages = Object.assign({}, this._options.messages, _messages);
      }
    }, {
      key: "validate",
      value: function validate(source, callback) {
        var _this = this;
        if (!callback) {
          return this.validatePromise(source);
        }
        if (!this._rules || Object.keys(this._rules).length === 0) {
          if (callback) {
            callback(null);
          }
          return;
        }
        var series = serializeRules(source, this._rules);
        if (Object.keys(series).length === 0) {
          callback(null);
        }
        function complete(results) {
          var i;
          var field;
          var errors = [];
          var fields = {};
          function add(e) {
            if (Array.isArray(e)) {
              errors = errors.concat(e);
            } else {
              errors.push(e);
            }
          }
          for (i = 0; i < results.length; i++) {
            add(results[i]);
          }
          if (!errors.length) {
            errors = null;
            fields = null;
          } else {
            for (i = 0; i < errors.length; i++) {
              field = errors[i].field;
              fields[field] = fields[field] || [];
              fields[field].push(errors[i]);
            }
          }
          callback(errors, fields);
        }
        this.complete.push(complete);
        var idx = this.complete.length;
        (0, util.asyncMap)(series, this._options, function(data, doIt) {
          var rule = data.rule;
          rule.field = data.field;
          function cb() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            var errors = e;
            if (!Array.isArray(errors)) {
              errors = [errors];
            }
            if (errors.length && rule.message) {
              errors = [].concat(rule.message);
            }
            errors = errors.map((0, util.complementError)(rule));
            doIt(errors);
          }
          var res = rule.validator(rule, data.value, cb, _this._options);
          if (res && res.then) {
            res.then(function() {
              return cb();
            }, function(e) {
              return cb(e);
            });
          }
        }, function(results) {
          _this.complete[idx - 1](results);
        });
      }
    }, {
      key: "validatePromise",
      value: function() {
        var _validatePromise = (0, _asyncToGenerator2.default)(/* @__PURE__ */ _regenerator.default.mark(function _callee2(source) {
          var _this2 = this;
          var series, results;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this._rules || Object.keys(this._rules).length === 0)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return", Promise.resolve({
                    errors: null
                  }));
                case 2:
                  series = serializeRules(source, this._rules);
                  if (!(Object.keys(series).length === 0)) {
                    _context2.next = 5;
                    break;
                  }
                  return _context2.abrupt("return", Promise.resolve({
                    errors: null
                  }));
                case 5:
                  _context2.next = 7;
                  return (0, util.asyncMapPromise)(series, this._options, /* @__PURE__ */ function() {
                    var _ref = (0, _asyncToGenerator2.default)(/* @__PURE__ */ _regenerator.default.mark(function _callee(data) {
                      var rule, errors;
                      return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              rule = data.rule;
                              rule.field = data.field;
                              _context.prev = 2;
                              _context.next = 5;
                              return rule.validator(rule, data.value, null, _this2._options);
                            case 5:
                              errors = _context.sent;
                              _context.next = 11;
                              break;
                            case 8:
                              _context.prev = 8;
                              _context.t0 = _context["catch"](2);
                              errors = _context.t0;
                            case 11:
                              if (!errors) {
                                _context.next = 17;
                                break;
                              }
                              if (!Array.isArray(errors)) {
                                errors = [errors];
                              }
                              if (errors.length && rule.message) {
                                errors = [].concat(rule.message);
                              }
                              return _context.abrupt("return", errors.map((0, util.complementError)(rule)));
                            case 17:
                              return _context.abrupt("return", []);
                            case 18:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, null, [[2, 8]]);
                    }));
                    return function(_x2) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                case 7:
                  results = _context2.sent;
                  return _context2.abrupt("return", (0, util.processErrorResults)(results));
                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
        function validatePromise(_x) {
          return _validatePromise.apply(this, arguments);
        }
        return validatePromise;
      }()
    }]);
    return Schema2;
  }();
  var _default = Schema;
  exports.default = _default;
});
var utils = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getIn = getIn;
  exports.setIn = setIn;
  exports.deleteIn = deleteIn;
  exports.getErrorStrs = getErrorStrs;
  exports.getParams = getParams;
  exports.getValueFromEvent = getValueFromEvent;
  exports.mapValidateRules = mapValidateRules;
  exports.warning = void 0;
  var _defineProperty2 = interopRequireDefault(defineProperty);
  var _extends3 = interopRequireDefault(_extends_1);
  function getIn(state, name) {
    if (!state) {
      return state;
    }
    var path = typeof name === "string" ? name.replace(/\[/, ".").replace(/\]/, "").split(".") : "";
    var length = path.length;
    if (!length) {
      return void 0;
    }
    var result = state;
    for (var i = 0; i < length && !!result; ++i) {
      result = result[path[i]];
    }
    return result;
  }
  var setInWithPath = function setInWithPath2(state, value, path, pathIndex) {
    if (pathIndex >= path.length) {
      return value;
    }
    var first = path[pathIndex];
    var next = setInWithPath2(state && state[first], value, path, pathIndex + 1);
    if (!state) {
      var initialized = isNaN(first) ? {} : [];
      initialized[first] = next;
      return initialized;
    }
    if (Array.isArray(state)) {
      var copy = [].concat(state);
      copy[first] = next;
      return copy;
    }
    return (0, _extends3.default)({}, state, (0, _defineProperty2.default)({}, first, next));
  };
  function setIn(state, name, value) {
    return setInWithPath(state, value, typeof name === "string" ? name.replace(/\[/, ".").replace(/\]/, "").split(".") : "", 0);
  }
  function deleteIn(state, name) {
    if (!state) {
      return;
    }
    var path = typeof name === "string" ? name.replace(/\[/, ".").replace(/\]/, "").split(".") : "";
    var length = path.length;
    if (!length) {
      return state;
    }
    var result = state;
    for (var i = 0; i < length && !!result; ++i) {
      if (i === length - 1) {
        delete result[path[i]];
      } else {
        result = result[path[i]];
      }
    }
    return state;
  }
  function getErrorStrs(errors, processErrorMessage) {
    if (errors) {
      return errors.map(function(e) {
        var message = e.message || e;
        if (typeof processErrorMessage === "function") {
          return processErrorMessage(message);
        }
        return message;
      });
    }
    return errors;
  }
  function getParams(ns, cb) {
    var names = typeof ns === "string" ? [ns] : ns;
    var callback = cb;
    if (cb === void 0 && typeof names === "function") {
      callback = names;
      names = void 0;
    }
    return {
      names,
      callback
    };
  }
  function getValueFromEvent(e) {
    if (!e || !e.target) {
      return e;
    }
    var target = e.target;
    if (target.type === "checkbox") {
      return target.checked;
    } else if (target.type === "radio") {
      if (target.value) {
        return target.value;
      } else {
        return target.checked;
      }
    }
    return target.value;
  }
  function validateMap(rulesMap, rule, defaultTrigger) {
    var nrule = (0, _extends3.default)({}, rule);
    if (!nrule.trigger) {
      nrule.trigger = [defaultTrigger];
    }
    if (typeof nrule.trigger === "string") {
      nrule.trigger = [nrule.trigger];
    }
    for (var i = 0; i < nrule.trigger.length; i++) {
      var trigger = nrule.trigger[i];
      if (trigger in rulesMap) {
        rulesMap[trigger].push(nrule);
      } else {
        rulesMap[trigger] = [nrule];
      }
    }
    delete nrule.trigger;
  }
  function mapValidateRules(rules2, defaultTrigger) {
    var rulesMap = {};
    rules2.forEach(function(rule) {
      validateMap(rulesMap, rule, defaultTrigger);
    });
    return rulesMap;
  }
  var warn = function warn2() {
  };
  if (typeof process !== "undefined" && {NODE_ENV: "production"} && false && typeof window !== "undefined" && typeof document !== "undefined") {
    warn = function warn2() {
      if (typeof console !== "undefined" && console.error) {
        var _console;
        (_console = console).error.apply(_console, arguments);
      }
    };
  }
  var warning = warn;
  exports.warning = warning;
});
var lib$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _regenerator = interopRequireDefault(regenerator);
  var _asyncToGenerator2 = interopRequireDefault(asyncToGenerator);
  var _typeof2 = interopRequireDefault(_typeof_1);
  var _defineProperty2 = interopRequireDefault(defineProperty);
  var _extends2 = interopRequireDefault(_extends_1);
  var _slicedToArray2 = interopRequireDefault(slicedToArray);
  var _classCallCheck2 = interopRequireDefault(classCallCheck);
  var _createClass2 = interopRequireDefault(createClass);
  var _validate2 = interopRequireDefault(lib);
  var initMeta = {
    state: "",
    valueName: "value",
    trigger: "onChange"
  };
  var Field2 = /* @__PURE__ */ function() {
    (0, _createClass2.default)(Field3, null, [{
      key: "create",
      value: function create(com) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return new this(com, options);
      }
    }, {
      key: "getUseField",
      value: function getUseField(_ref) {
        var _this = this;
        var useState2 = _ref.useState, useMemo2 = _ref.useMemo;
        return function() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var _useState = useState2(), _useState2 = (0, _slicedToArray2.default)(_useState, 2), setState = _useState2[1];
          var field = useMemo2(function() {
            return _this.create({
              setState
            }, options);
          }, [setState]);
          return field;
        };
      }
    }]);
    function Field3(com) {
      var _this2 = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _classCallCheck2.default)(this, Field3);
      if (!com) {
        (0, utils.warning)("`this` is missing in `Field`, you should use like `new Field(this)`");
      }
      this.com = com;
      this.fieldsMeta = {};
      this.cachedBind = {};
      this.instance = {};
      this.values = (0, _extends2.default)({}, options.values);
      this.processErrorMessage = options.processErrorMessage;
      this.afterValidateRerender = options.afterValidateRerender;
      this.options = (0, _extends2.default)({
        parseName: false,
        forceUpdate: false,
        scrollToFirstError: true,
        first: false,
        onChange: function onChange() {
        },
        autoUnmount: true,
        autoValidate: true
      }, options);
      ["init", "getValue", "getValues", "setValue", "setValues", "getError", "getErrors", "setError", "setErrors", "validateCallback", "validatePromise", "getState", "reset", "resetToDefault", "remove", "spliceArray", "addArrayValue", "deleteArrayValue", "getNames"].forEach(function(m) {
        _this2[m] = _this2[m].bind(_this2);
      });
    }
    (0, _createClass2.default)(Field3, [{
      key: "setOptions",
      value: function setOptions(options) {
        (0, _extends2.default)(this.options, options);
      }
    }, {
      key: "init",
      value: function init(name) {
        var _this3 = this;
        var fieldOption = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var rprops = arguments.length > 2 ? arguments[2] : void 0;
        var id = fieldOption.id, initValue = fieldOption.initValue, _fieldOption$valueNam = fieldOption.valueName, valueName = _fieldOption$valueNam === void 0 ? "value" : _fieldOption$valueNam, _fieldOption$trigger = fieldOption.trigger, trigger = _fieldOption$trigger === void 0 ? "onChange" : _fieldOption$trigger, _fieldOption$rules = fieldOption.rules, rules2 = _fieldOption$rules === void 0 ? [] : _fieldOption$rules, _fieldOption$props = fieldOption.props, props = _fieldOption$props === void 0 ? {} : _fieldOption$props, _fieldOption$getValue = fieldOption.getValueFromEvent, getValueFromEvent = _fieldOption$getValue === void 0 ? null : _fieldOption$getValue, _fieldOption$getValue2 = fieldOption.getValueFormatter, getValueFormatter = _fieldOption$getValue2 === void 0 ? getValueFromEvent : _fieldOption$getValue2, setValueFormatter = fieldOption.setValueFormatter, _fieldOption$autoVali = fieldOption.autoValidate, autoValidate = _fieldOption$autoVali === void 0 ? true : _fieldOption$autoVali;
        var parseName = this.options.parseName;
        if (getValueFromEvent) {
          (0, utils.warning)("`getValueFromEvent` has been deprecated in `Field`, use `getValueFormatter` instead of it");
        }
        var originalProps = (0, _extends2.default)({}, props, rprops);
        var defaultValueName = "default".concat(valueName[0].toUpperCase()).concat(valueName.slice(1));
        var defaultValue;
        if (typeof initValue !== "undefined") {
          defaultValue = initValue;
        } else if (typeof originalProps[defaultValueName] !== "undefined") {
          defaultValue = originalProps[defaultValueName];
        }
        var field = this._getInitMeta(name);
        (0, _extends2.default)(field, {
          valueName,
          initValue: defaultValue,
          disabled: "disabled" in originalProps ? originalProps.disabled : false,
          getValueFormatter,
          setValueFormatter,
          rules: Array.isArray(rules2) ? rules2 : [rules2],
          ref: originalProps.ref
        });
        if (valueName in originalProps) {
          field.value = originalProps[valueName];
          if (parseName) {
            this.values = (0, utils.setIn)(this.values, name, field.value);
          } else {
            this.values[name] = field.value;
          }
        }
        if (!("value" in field)) {
          if (parseName) {
            var cachedValue = (0, utils.getIn)(this.values, name);
            if (typeof cachedValue !== "undefined") {
              field.value = cachedValue;
            } else {
              field.value = defaultValue;
              this.values = (0, utils.setIn)(this.values, name, field.value);
            }
          } else {
            var _cachedValue = this.values[name];
            if (typeof _cachedValue !== "undefined") {
              field.value = _cachedValue;
            } else if (typeof defaultValue !== "undefined") {
              field.value = defaultValue;
              this.values[name] = field.value;
            }
          }
        }
        var inputProps = (0, _defineProperty2.default)({
          "data-meta": "Field",
          id: id || name,
          ref: this._getCacheBind(name, "".concat(name, "__ref"), this._saveRef)
        }, valueName, setValueFormatter ? setValueFormatter(field.value) : field.value);
        var rulesMap = {};
        if (this.options.autoValidate && autoValidate !== false) {
          rulesMap = (0, utils.mapValidateRules)(field.rules, trigger);
          var _loop = function _loop2(action2) {
            if (action2 === trigger) {
              return "continue";
            }
            var actionRule = rulesMap[action2];
            inputProps[action2] = function() {
              _this3._validate(name, actionRule, action2);
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              _this3._callPropsEvent.apply(_this3, [action2, originalProps].concat(args));
              _this3._reRender();
            };
          };
          for (var action in rulesMap) {
            var _ret = _loop(action);
            if (_ret === "continue")
              continue;
          }
        }
        inputProps[trigger] = function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this3._callOnChange.apply(_this3, [name, rulesMap[trigger], trigger].concat(args));
          _this3._callPropsEvent.apply(_this3, [trigger, originalProps].concat(args));
          _this3.options.onChange(name, field.value);
          _this3._reRender();
        };
        delete originalProps[defaultValueName];
        return (0, _extends2.default)({}, originalProps, inputProps);
      }
    }, {
      key: "_callPropsEvent",
      value: function _callPropsEvent(action, props) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          args[_key3 - 2] = arguments[_key3];
        }
        action in props && typeof props[action] === "function" && props[action].apply(props, args);
      }
    }, {
      key: "_getInitMeta",
      value: function _getInitMeta(name) {
        if (!(name in this.fieldsMeta)) {
          this.fieldsMeta[name] = (0, _extends2.default)({}, initMeta);
        }
        return this.fieldsMeta[name];
      }
    }, {
      key: "_callOnChange",
      value: function _callOnChange(name, rule, trigger) {
        for (var _len4 = arguments.length, others = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
          others[_key4 - 3] = arguments[_key4];
        }
        var e = others[0];
        var field = this._get(name);
        if (!field) {
          return;
        }
        field.value = field.getValueFormatter ? field.getValueFormatter.apply(this, others) : (0, utils.getValueFromEvent)(e);
        if (this.options.parseName) {
          this.values = (0, utils.setIn)(this.values, name, field.value);
        } else {
          this.values[name] = field.value;
        }
        this._resetError(name);
        rule && this._validate(name, rule, trigger);
      }
    }, {
      key: "_getCacheBind",
      value: function _getCacheBind(name, action, fn) {
        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
          cache[action] = fn.bind(this, name);
        }
        return cache[action];
      }
    }, {
      key: "_setCache",
      value: function _setCache(name, action, hander) {
        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
        cache[action] = hander;
      }
    }, {
      key: "_getCache",
      value: function _getCache(name, action) {
        var cache = this.cachedBind[name] || {};
        return cache[action];
      }
    }, {
      key: "_saveRef",
      value: function _saveRef(name, component) {
        var key = "".concat(name, "_field");
        var autoUnmount = this.options.autoUnmount;
        if (!component && autoUnmount) {
          var cache = this.fieldsMeta[name];
          cache && this._setCache(name, key, cache);
          delete this.instance[name];
          this.remove(name);
          return;
        }
        if (autoUnmount && !this.fieldsMeta[name] && this._getCache(name, key)) {
          this.fieldsMeta[name] = this._getCache(name, key);
          this.setValue(name, this.fieldsMeta[name] && this.fieldsMeta[name].value, false);
        }
        var field = this._get(name);
        if (field) {
          var ref = field.ref;
          if (ref) {
            if (typeof ref === "string") {
              throw new Error("can not set string ref for ".concat(name));
            } else if (typeof ref === "function") {
              ref(component);
            } else if ((0, _typeof2.default)(ref) === "object" && "current" in ref) {
              ref.current = component;
            }
          }
          this.instance[name] = component;
        }
      }
    }, {
      key: "_validate",
      value: function _validate(name, rule, trigger) {
        var _this4 = this;
        var field = this._get(name);
        var value = field.value;
        field.state = "loading";
        var validate = this._getCache(name, trigger);
        if (validate && typeof validate.abort === "function") {
          validate.abort();
        }
        validate = new _validate2.default((0, _defineProperty2.default)({}, name, rule));
        this._setCache(name, trigger, validate);
        validate.validate((0, _defineProperty2.default)({}, name, value), function(errors) {
          if (errors && errors.length) {
            field.errors = (0, utils.getErrorStrs)(errors, _this4.processErrorMessage);
            field.state = "error";
          } else {
            field.errors = [];
            field.state = "success";
          }
          _this4._reRender();
        });
      }
    }, {
      key: "getValue",
      value: function getValue(name) {
        if (this.options.parseName) {
          return (0, utils.getIn)(this.values, name);
        }
        return this.values[name];
      }
    }, {
      key: "getValues",
      value: function getValues(names) {
        var _this5 = this;
        var allValues = {};
        if (names && names.length) {
          names.forEach(function(name) {
            allValues[name] = _this5.getValue(name);
          });
        } else {
          (0, _extends2.default)(allValues, this.values);
        }
        return allValues;
      }
    }, {
      key: "setValue",
      value: function setValue(name, value) {
        var reRender = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        if (name in this.fieldsMeta) {
          this.fieldsMeta[name].value = value;
        }
        if (this.options.parseName) {
          this.values = (0, utils.setIn)(this.values, name, value);
        } else {
          this.values[name] = value;
        }
        reRender && this._reRender();
      }
    }, {
      key: "setValues",
      value: function setValues() {
        var _this6 = this;
        var fieldsValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var reRender = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        if (!this.options.parseName) {
          Object.keys(fieldsValue).forEach(function(name) {
            _this6.setValue(name, fieldsValue[name], false);
          });
        } else {
          this.values = (0, _extends2.default)({}, this.values, fieldsValue);
          var fields = this.getNames();
          fields.forEach(function(name) {
            var value = (0, utils.getIn)(_this6.values, name);
            if (value !== void 0) {
              _this6.fieldsMeta[name].value = value;
            } else {
              _this6.values = (0, utils.setIn)(_this6.values, name, _this6.fieldsMeta[name].value);
            }
          });
        }
        reRender && this._reRender();
      }
    }, {
      key: "setError",
      value: function setError(name, errors) {
        var err = Array.isArray(errors) ? errors : errors ? [errors] : [];
        if (name in this.fieldsMeta) {
          this.fieldsMeta[name].errors = err;
        } else {
          this.fieldsMeta[name] = {
            errors: err
          };
        }
        if (this.fieldsMeta[name].errors && this.fieldsMeta[name].errors.length > 0) {
          this.fieldsMeta[name].state = "error";
        } else {
          this.fieldsMeta[name].state = "";
        }
        this._reRender();
      }
    }, {
      key: "setErrors",
      value: function setErrors() {
        var _this7 = this;
        var fieldsErrors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Object.keys(fieldsErrors).forEach(function(name) {
          _this7.setError(name, fieldsErrors[name]);
        });
      }
    }, {
      key: "getError",
      value: function getError(name) {
        var field = this._get(name);
        if (field && field.errors && field.errors.length) {
          return field.errors;
        }
        return null;
      }
    }, {
      key: "getErrors",
      value: function getErrors(names) {
        var _this8 = this;
        var fields = names || this.getNames();
        var allErrors = {};
        fields.forEach(function(f) {
          allErrors[f] = _this8.getError(f);
        });
        return allErrors;
      }
    }, {
      key: "getState",
      value: function getState(name) {
        var field = this._get(name);
        if (field && field.state) {
          return field.state;
        }
        return "";
      }
    }, {
      key: "formatGetErrors",
      value: function formatGetErrors(fieldNames) {
        var errors = this.getErrors(fieldNames);
        var formattedErrors = null;
        for (var field in errors) {
          if (errors.hasOwnProperty(field) && errors[field]) {
            var errorsObj = errors[field];
            if (!formattedErrors) {
              formattedErrors = {};
            }
            formattedErrors[field] = {
              errors: errorsObj
            };
          }
        }
        return formattedErrors;
      }
    }, {
      key: "validateCallback",
      value: function validateCallback(ns, cb) {
        var _this9 = this;
        var _getParams = (0, utils.getParams)(ns, cb), names = _getParams.names, callback = _getParams.callback;
        var fieldNames = names || this.getNames();
        var descriptor = {};
        var values = {};
        var hasRule = false;
        for (var i = 0; i < fieldNames.length; i++) {
          var name = fieldNames[i];
          var field = this._get(name);
          if (!field) {
            continue;
          }
          if (field.rules && field.rules.length) {
            descriptor[name] = field.rules;
            values[name] = this.getValue(name);
            hasRule = true;
            field.errors = [];
            field.state = "";
          }
        }
        if (!hasRule) {
          var errors = this.formatGetErrors(fieldNames);
          callback && callback(errors, this.getValues(names ? fieldNames : []));
          return;
        }
        var validate = new _validate2.default(descriptor, {
          first: this.options.first
        });
        validate.validate(values, function(errors2) {
          var errorsGroup = null;
          if (errors2 && errors2.length) {
            errorsGroup = {};
            errors2.forEach(function(e) {
              var fieldName = e.field;
              if (!errorsGroup[fieldName]) {
                errorsGroup[fieldName] = {
                  errors: []
                };
              }
              var fieldErrors = errorsGroup[fieldName].errors;
              fieldErrors.push(e.message);
            });
          }
          if (errorsGroup) {
            Object.keys(errorsGroup).forEach(function(i2) {
              var field2 = _this9._get(i2);
              field2.errors = (0, utils.getErrorStrs)(errorsGroup[i2].errors, _this9.processErrorMessage);
              field2.state = "error";
            });
          }
          var formattedGetErrors = _this9.formatGetErrors(fieldNames);
          if (formattedGetErrors) {
            errorsGroup = (0, _extends2.default)({}, formattedGetErrors, errorsGroup);
          }
          for (var _i = 0; _i < fieldNames.length; _i++) {
            var _name = fieldNames[_i];
            var _field = _this9._get(_name);
            if (_field && _field.rules && !(errorsGroup && _name in errorsGroup)) {
              _field.state = "success";
            }
          }
          callback && callback(errorsGroup, _this9.getValues(names ? fieldNames : []));
          _this9._reRender();
          if (typeof _this9.afterValidateRerender === "function") {
            _this9.afterValidateRerender({
              errorsGroup,
              options: _this9.options,
              instance: _this9.instance
            });
          }
        });
      }
    }, {
      key: "validatePromise",
      value: function() {
        var _validatePromise = (0, _asyncToGenerator2.default)(/* @__PURE__ */ _regenerator.default.mark(function _callee(ns, cb) {
          var _getParams2, names, callback, fieldNames, descriptor, values, hasRule, i, name, field, _errors, validate, results, errors, errorsGroup, callbackResults;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _getParams2 = (0, utils.getParams)(ns, cb), names = _getParams2.names, callback = _getParams2.callback;
                  fieldNames = names || this.getNames();
                  descriptor = {};
                  values = {};
                  hasRule = false;
                  i = 0;
                case 6:
                  if (!(i < fieldNames.length)) {
                    _context.next = 15;
                    break;
                  }
                  name = fieldNames[i];
                  field = this._get(name);
                  if (field) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("continue", 12);
                case 11:
                  if (field.rules && field.rules.length) {
                    descriptor[name] = field.rules;
                    values[name] = this.getValue(name);
                    hasRule = true;
                    field.errors = [];
                    field.state = "";
                  }
                case 12:
                  i++;
                  _context.next = 6;
                  break;
                case 15:
                  if (hasRule) {
                    _context.next = 22;
                    break;
                  }
                  _errors = this.formatGetErrors(fieldNames);
                  if (!callback) {
                    _context.next = 21;
                    break;
                  }
                  return _context.abrupt("return", callback({
                    errors: _errors,
                    values: this.getValues(names ? fieldNames : [])
                  }));
                case 21:
                  return _context.abrupt("return", {
                    errors: _errors,
                    values: this.getValues(names ? fieldNames : [])
                  });
                case 22:
                  validate = new _validate2.default(descriptor, {
                    first: this.options.first
                  });
                  _context.next = 25;
                  return validate.validatePromise(values);
                case 25:
                  results = _context.sent;
                  errors = results && results.errors || [];
                  errorsGroup = this._getErrorsGroup({
                    errors,
                    fieldNames
                  });
                  callbackResults = {
                    errors: errorsGroup,
                    values: this.getValues(names ? fieldNames : [])
                  };
                  _context.prev = 29;
                  if (!callback) {
                    _context.next = 34;
                    break;
                  }
                  _context.next = 33;
                  return callback(callbackResults);
                case 33:
                  callbackResults = _context.sent;
                case 34:
                  _context.next = 39;
                  break;
                case 36:
                  _context.prev = 36;
                  _context.t0 = _context["catch"](29);
                  return _context.abrupt("return", _context.t0);
                case 39:
                  this._reRender();
                  return _context.abrupt("return", callbackResults);
                case 41:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[29, 36]]);
        }));
        function validatePromise(_x, _x2) {
          return _validatePromise.apply(this, arguments);
        }
        return validatePromise;
      }()
    }, {
      key: "_getErrorsGroup",
      value: function _getErrorsGroup(_ref3) {
        var _this10 = this;
        var errors = _ref3.errors, fieldNames = _ref3.fieldNames;
        var errorsGroup = null;
        if (errors && errors.length) {
          errorsGroup = {};
          errors.forEach(function(e) {
            var fieldName = e.field;
            if (!errorsGroup[fieldName]) {
              errorsGroup[fieldName] = {
                errors: []
              };
            }
            var fieldErrors = errorsGroup[fieldName].errors;
            fieldErrors.push(e.message);
          });
        }
        if (errorsGroup) {
          Object.keys(errorsGroup).forEach(function(i2) {
            var field2 = _this10._get(i2);
            if (field2) {
              field2.errors = (0, utils.getErrorStrs)(errorsGroup[i2].errors, _this10.processErrorMessage);
              field2.state = "error";
            }
          });
        }
        var formattedGetErrors = this.formatGetErrors(fieldNames);
        if (formattedGetErrors) {
          errorsGroup = (0, _extends2.default)({}, formattedGetErrors, errorsGroup);
        }
        for (var i = 0; i < fieldNames.length; i++) {
          var name = fieldNames[i];
          var field = this._get(name);
          if (field && field.rules && !(errorsGroup && name in errorsGroup)) {
            field.state = "success";
          }
        }
        return errorsGroup;
      }
    }, {
      key: "_reset",
      value: function _reset(ns, backToDefault) {
        var _this11 = this;
        if (typeof ns === "string") {
          ns = [ns];
        }
        var changed = false;
        var names = ns || Object.keys(this.fieldsMeta);
        if (!ns) {
          this.values = {};
        }
        names.forEach(function(name) {
          var field = _this11._get(name);
          if (field) {
            changed = true;
            field.value = backToDefault ? field.initValue : void 0;
            field.state = "";
            delete field.errors;
            delete field.rules;
            delete field.rulesMap;
            if (_this11.options.parseName) {
              _this11.values = (0, utils.setIn)(_this11.values, name, field.value);
            } else {
              _this11.values[name] = field.value;
            }
          }
        });
        if (changed) {
          this._reRender();
        }
      }
    }, {
      key: "reset",
      value: function reset(ns) {
        this._reset(ns, false);
      }
    }, {
      key: "resetToDefault",
      value: function resetToDefault(ns) {
        this._reset(ns, true);
      }
    }, {
      key: "getNames",
      value: function getNames() {
        var fieldsMeta = this.fieldsMeta;
        return Object.keys(fieldsMeta).filter(function() {
          return true;
        });
      }
    }, {
      key: "remove",
      value: function remove(ns) {
        var _this12 = this;
        if (typeof ns === "string") {
          ns = [ns];
        }
        if (!ns) {
          this.values = {};
        }
        var names = ns || Object.keys(this.fieldsMeta);
        names.forEach(function(name) {
          if (name in _this12.fieldsMeta) {
            delete _this12.fieldsMeta[name];
          }
          if (_this12.options.parseName) {
            _this12.values = (0, utils.deleteIn)(_this12.values, name);
          } else {
            delete _this12.values[name];
          }
        });
      }
    }, {
      key: "addArrayValue",
      value: function addArrayValue(key, index) {
        for (var _len5 = arguments.length, argv = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
          argv[_key5 - 2] = arguments[_key5];
        }
        return this._spliceArrayValue.apply(this, [key, index, 0].concat(argv));
      }
    }, {
      key: "deleteArrayValue",
      value: function deleteArrayValue(key, index) {
        var howmany = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        return this._spliceArrayValue(key, index, howmany);
      }
    }, {
      key: "_spliceArrayValue",
      value: function _spliceArrayValue(key, index, howmany) {
        var _this13 = this;
        for (var _len6 = arguments.length, argv = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
          argv[_key6 - 3] = arguments[_key6];
        }
        var argc = argv.length;
        var offset = howmany - argc;
        var startIndex = index + howmany;
        var listMap = {};
        var keyReg = new RegExp("^(".concat(key, ".)(\\d+)"));
        var replaceArgv = [];
        var names = this.getNames();
        names.forEach(function(n) {
          var ret = keyReg.exec(n);
          if (ret) {
            var idx = parseInt(ret[2]);
            if (idx >= startIndex) {
              var l = listMap[idx];
              var item = {
                from: n,
                to: n.replace(keyReg, function(match, p1) {
                  return "".concat(p1).concat(idx - offset);
                })
              };
              if (!l) {
                listMap[idx] = [item];
              } else {
                l.push(item);
              }
            }
            if (offset <= 0 && idx >= index && idx < index + argc) {
              replaceArgv.push(n);
            }
          }
        });
        var idxList = Object.keys(listMap).map(function(i) {
          return {
            index: Number(i),
            list: listMap[i]
          };
        }).sort(function(a, b) {
          return offset > 0 ? a.index - b.index : b.index - a.index;
        });
        if (idxList.length > 0) {
          idxList.forEach(function(l) {
            var list = l.list;
            list.forEach(function(i) {
              _this13.fieldsMeta[i.to] = _this13.fieldsMeta[i.from];
            });
          });
          if (offset > 0) {
            var removeList = idxList.slice(idxList.length - offset, idxList.length);
            removeList.forEach(function(item) {
              item.list.forEach(function(i) {
                delete _this13.fieldsMeta[i.from];
              });
            });
          } else {
            replaceArgv.forEach(function(i) {
              delete _this13.fieldsMeta[i];
            });
          }
        }
        var p = this.getValue(key);
        if (p) {
          p.splice.apply(p, [index, howmany].concat(argv));
        }
        this._reRender();
      }
    }, {
      key: "spliceArray",
      value: function spliceArray(keyMatch, startIndex, howmany) {
        var _this14 = this;
        if (keyMatch.match(/{index}$/) === -1) {
          (0, utils.warning)("key should match /{index}$/");
          return;
        }
        var reg = keyMatch.replace("{index}", "(\\d+)");
        var keyReg = new RegExp("^".concat(reg));
        var listMap = {};
        var names = this.getNames();
        names.forEach(function(n) {
          var ret = keyReg.exec(n);
          if (ret) {
            var index = parseInt(ret[1]);
            if (index > startIndex) {
              var l = listMap[index];
              var item = {
                from: n,
                to: "".concat(keyMatch.replace("{index}", index - 1)).concat(n.replace(ret[0], ""))
              };
              if (!l) {
                listMap[index] = [item];
              } else {
                l.push(item);
              }
            }
          }
        });
        var idxList = Object.keys(listMap).map(function(i) {
          return {
            index: Number(i),
            list: listMap[i]
          };
        }).sort(function(a, b) {
          return a.index < b.index;
        });
        if (idxList.length > 0 && idxList[0].index === startIndex + 1) {
          idxList.forEach(function(l) {
            var list = l.list;
            list.forEach(function(i) {
              var v = _this14.getValue(i.from);
              _this14.setValue(i.to, v, false);
            });
          });
          var lastIdxList = idxList[idxList.length - 1];
          lastIdxList.list.forEach(function(i) {
            _this14.remove(i.from);
          });
          var parentName = keyMatch.replace(".{index}", "");
          parentName = parentName.replace("[{index}]", "");
          var parent = this.getValue(parentName);
          if (parent) {
            parent.length--;
          }
        }
      }
    }, {
      key: "_resetError",
      value: function _resetError(name) {
        var field = this._get(name);
        delete field.errors;
        field.state = "";
      }
    }, {
      key: "_reRender",
      value: function _reRender() {
        if (this.com) {
          if (!this.options.forceUpdate && this.com.setState) {
            this.com.setState({});
          } else if (this.com.forceUpdate) {
            this.com.forceUpdate();
          }
        }
      }
    }, {
      key: "_get",
      value: function _get(name) {
        return name in this.fieldsMeta ? this.fieldsMeta[name] : null;
      }
    }]);
    return Field3;
  }();
  var _default = Field2;
  exports.default = _default;
});
var Field = /* @__PURE__ */ getDefaultExportFromCjs(lib$1);
function cloneAndAddKey(element) {
  if (element && isValidElement(element)) {
    var key = element.key || "error";
    return cloneElement(element, {key});
  }
  return element;
}
function scrollToFirstError(_ref) {
  var errorsGroup = _ref.errorsGroup, options = _ref.options, instance = _ref.instance;
  if (errorsGroup && options.scrollToFirstError) {
    var firstNode = void 0;
    var firstTop = void 0;
    for (var i in errorsGroup) {
      if (errorsGroup.hasOwnProperty(i)) {
        var node = ReactDOM.findDOMNode(instance[i]);
        if (!node) {
          return;
        }
        var top = node.offsetTop;
        if (firstTop === void 0 || firstTop > top) {
          firstTop = top;
          firstNode = node;
        }
      }
    }
    if (firstNode) {
      if (typeof options.scrollToFirstError === "number" && window && typeof window.scrollTo === "function") {
        var offsetLeft = document && document.body && document.body.offsetLeft ? document.body.offsetLeft : 0;
        window.scrollTo(offsetLeft, firstTop + options.scrollToFirstError);
      } else if (firstNode.scrollIntoViewIfNeeded) {
        firstNode.scrollIntoViewIfNeeded(true);
      }
    }
  }
}
var NextField = function(_Field) {
  _inherits(NextField2, _Field);
  NextField2.useField = function useField() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!useState || !useMemo) {
      log.warning("need react version > 16.8.0");
      return;
    }
    return this.getUseField({useMemo, useState})(options);
  };
  function NextField2(com) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck$1(this, NextField2);
    var newOptions = _extends({}, options, {
      afterValidateRerender: scrollToFirstError,
      processErrorMessage: cloneAndAddKey
    });
    var _this = _possibleConstructorReturn(this, _Field.call(this, com, newOptions));
    _this.validate = _this.validate.bind(_this);
    return _this;
  }
  NextField2.prototype.validate = function validate(ns, cb) {
    this.validateCallback(ns, cb);
  };
  NextField2.prototype.reset = function reset(ns) {
    var backToDefault = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (ns === true) {
      log.deprecated("reset(true)", "resetToDefault()", "Field");
      this.resetToDefault();
    } else if (backToDefault === true) {
      log.deprecated("reset(ns,true)", "resetToDefault(ns)", "Field");
      this.resetToDefault(ns);
    } else {
      this._reset(ns, false);
    }
  };
  return NextField2;
}(Field);
export {NextField as N};
