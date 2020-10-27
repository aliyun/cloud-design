import {k as _objectWithoutProperties, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, C as Component, i as func, g as _extends, o as obj, R as React, h as propTypes, J as ReactDOM, q as log, N as NextConfigProvider, d as classnames, s as NextIcon, z as zhCN, K as KEYCODE, p as polyfill} from "./index.7e05a4b9.js";
import {N as NextButton} from "./f6d96c0d.js";
import {N as NextProgress} from "./21b6a40a.js";
var now = +new Date();
function uid() {
  return (now++).toString(36);
}
function fileToObject(file) {
  if (!file.uid) {
    file.uid = uid();
  }
  return {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.filename || file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    error: file.error,
    percent: 0,
    originFileObj: file
  };
}
function getFileItem(file, fileList) {
  var matchKey = file.uid !== void 0 ? "uid" : "name";
  return fileList.filter(function(item) {
    return item[matchKey] === file[matchKey];
  })[0];
}
function previewFile(file, callback) {
  var reader = new FileReader();
  reader.onloadend = function() {
    return callback(reader.result);
  };
  reader.readAsDataURL(file);
}
var errorCode = {
  EXCEED_LIMIT: "EXCEED_LIMIT",
  BEFOREUPLOAD_REJECT: "BEFOREUPLOAD_REJECT",
  RESPONSE_FAIL: "RESPONSE_FAIL"
};
var transform = function transform2(props, deprecated) {
  var listType = props.listType, defaultFileList = props.defaultFileList, fileList = props.fileList, others = _objectWithoutProperties(props, ["listType", "defaultFileList", "fileList"]);
  var newprops = others;
  if (listType === "text-image") {
    deprecated("listType=text-image", "listType=image", "Upload");
    newprops.listType = "image";
  } else if (listType === "picture-card") {
    deprecated("listType=picture-card", "listType=card", "Upload");
    newprops.listType = "card";
  } else {
    newprops.listType = listType;
  }
  if ("defaultFileList" in props) {
    deprecated("defaultFileList", "defaultValue", "Upload");
    newprops.defaultValue = defaultFileList;
  }
  if ("fileList" in props) {
    deprecated("fileList", "value", "Upload");
    newprops.value = fileList;
  }
  return newprops;
};
var Base = function(_Component) {
  _inherits(Base2, _Component);
  function Base2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Base2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveUploaderRef = function(ref) {
      if (ref && typeof ref.getInstance === "function") {
        _this.uploaderRef = ref.getInstance();
      } else {
        _this.uploaderRef = ref;
      }
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Base2.prototype.abort = function abort(file) {
    this.uploaderRef.abort(file);
  };
  Base2.prototype.startUpload = function startUpload() {
    this.uploaderRef.startUpload();
  };
  Base2.prototype.isUploading = function isUploading() {
    return this.uploaderRef.isUploading();
  };
  return Base2;
}(Component);
Base.displayName = "Base";
function getError(option, xhr, msg) {
  msg = msg || "cannot post " + option.action + " " + xhr.status + "'";
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}
function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
function upload(option) {
  var xhr = new XMLHttpRequest();
  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }
  var formData = new FormData();
  if (option.data) {
    Object.keys(option.data).forEach(function(key) {
      formData.append(key, option.data[key]);
    });
  }
  formData.append(option.filename, option.file);
  xhr.onerror = function error(e) {
    option.onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }
    option.onSuccess(getBody(xhr), xhr);
  };
  option.method = option.method || "POST";
  xhr.open(option.method, option.action, true);
  var timeout = option.timeout;
  if (typeof timeout === "number" && timeout > 0) {
    xhr.timeout = timeout;
    xhr.ontimeout = function() {
      var msg = "Upload abort for exceeding time (timeout: " + timeout + "ms)";
      option.onError(getError(option, xhr, msg), getBody(xhr));
    };
  }
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  var headers = option.headers || {};
  if (headers["X-Requested-With"] !== null) {
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  }
  for (var h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);
  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}
var noop = func.noop;
var Uploader = function() {
  function Uploader2(options) {
    _classCallCheck(this, Uploader2);
    this.options = _extends({
      beforeUpload: noop,
      onProgress: noop,
      onSuccess: noop,
      onError: noop,
      data: {},
      name: "file",
      method: "post"
    }, options);
    this.reqs = {};
  }
  Uploader2.prototype.setOptions = function setOptions(options) {
    _extends(this.options, options);
  };
  Uploader2.prototype.startUpload = function startUpload(files) {
    var _this = this;
    var filesArr = files.length ? Array.prototype.slice.call(files) : [files];
    filesArr.forEach(function(file) {
      file.uid = file.uid || uid();
      _this.upload(file);
    });
  };
  Uploader2.prototype.abort = function abort(file) {
    var reqs = this.reqs;
    if (file) {
      var _uid = file;
      if (file && file.uid) {
        _uid = file.uid;
      }
      if (reqs[_uid]) {
        reqs[_uid].abort();
        delete reqs[_uid];
      }
    } else {
      Object.keys(reqs).forEach(function(uid2) {
        if (reqs[uid2]) {
          reqs[uid2].abort();
        }
        delete reqs[uid2];
      });
    }
  };
  Uploader2.prototype.upload = function upload2(file) {
    var _this2 = this;
    var _options = this.options, beforeUpload = _options.beforeUpload, action = _options.action, name = _options.name, headers = _options.headers, timeout = _options.timeout, withCredentials = _options.withCredentials, method = _options.method, data = _options.data;
    var before = beforeUpload(file, {
      action,
      name,
      headers,
      timeout,
      withCredentials,
      method,
      data
    });
    func.promiseCall(before, function(options) {
      if (options === false) {
        var err = new Error(errorCode.BEFOREUPLOAD_REJECT);
        err.code = errorCode.BEFOREUPLOAD_REJECT;
        return _this2.options.onError(err, null, file);
      }
      _this2.post(file, obj.isPlainObject(options) ? options : void 0);
    }, function(error) {
      var err = void 0;
      if (error) {
        err = error;
      } else {
        err = new Error(errorCode.BEFOREUPLOAD_REJECT);
        err.code = errorCode.BEFOREUPLOAD_REJECT;
      }
      _this2.options.onError(err, null, file);
    });
  };
  Uploader2.prototype.post = function post(file) {
    var _this3 = this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var requestOptions = _extends({}, this.options, options);
    var action = requestOptions.action, name = requestOptions.name, headers = requestOptions.headers, timeout = requestOptions.timeout, withCredentials = requestOptions.withCredentials, _onProgress = requestOptions.onProgress, _onSuccess = requestOptions.onSuccess, _onError = requestOptions.onError, method = requestOptions.method;
    var data = requestOptions.data;
    if (typeof data === "function") {
      data = data(file);
    }
    var uid2 = file.uid;
    var request = typeof requestOptions.request === "function" ? requestOptions.request : upload;
    this.reqs[uid2] = request({
      action,
      filename: name,
      file,
      data,
      timeout,
      headers,
      withCredentials,
      method,
      onProgress: function onProgress(e) {
        _onProgress(e, file);
      },
      onSuccess: function onSuccess(ret) {
        delete _this3.reqs[uid2];
        _onSuccess(ret, file);
      },
      onError: function onError(err, ret) {
        delete _this3.reqs[uid2];
        _onError(err, ret, file);
      }
    });
  };
  return Uploader2;
}();
var _class, _temp2;
var noop$1 = func.noop;
var Selecter = (_temp2 = _class = function(_React$Component) {
  _inherits(Selecter2, _React$Component);
  function Selecter2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Selecter2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onSelect = function(e) {
      var files = e.target.files;
      var filesArr = files.length ? Array.prototype.slice.call(files) : [files];
      filesArr.forEach(function(file) {
        file.uid = uid();
      });
      _this.props.onSelect(filesArr);
    }, _this.onClick = function() {
      var el = _this.fileRef;
      if (!el) {
        return;
      }
      el.value = "";
      el.click();
    }, _this.onKeyDown = function(e) {
      if (e.key === "Enter") {
        _this.onClick();
      }
    }, _this.onDrop = function(e) {
      e.preventDefault();
      var files = e.dataTransfer.files;
      var filesArr = Array.prototype.slice.call(files);
      _this.props.onDrop(filesArr);
    }, _this.onDragOver = function(e) {
      e.preventDefault();
      _this.props.onDragOver(e);
    }, _this.saveFileRef = function(ref) {
      _this.fileRef = ref;
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Selecter2.prototype.render = function render() {
    var _props = this.props, accept = _props.accept, multiple = _props.multiple, webkitdirectory = _props.webkitdirectory, children = _props.children, id = _props.id, disabled = _props.disabled, dragable = _props.dragable, style = _props.style, className = _props.className, name = _props.name;
    var events = {};
    if (!disabled) {
      events = _extends({
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        tabIndex: "0"
      }, dragable ? {
        onDrop: this.onDrop,
        onDragOver: this.onDragOver,
        onDragLeave: this.props.onDragLeave
      } : {});
    }
    return React.createElement("div", _extends({
      role: "application",
      style,
      className
    }, events), React.createElement("input", {
      type: "file",
      name,
      id,
      ref: this.saveFileRef,
      style: {display: "none"},
      accept,
      "aria-hidden": true,
      multiple,
      webkitdirectory: webkitdirectory ? "" : void 0,
      onChange: this.onSelect,
      disabled
    }), children);
  };
  return Selecter2;
}(React.Component), _class.propTypes = {
  id: propTypes.string,
  style: propTypes.object,
  className: propTypes.string,
  disabled: propTypes.bool,
  multiple: propTypes.bool,
  webkitdirectory: propTypes.bool,
  dragable: propTypes.bool,
  accept: propTypes.string,
  onSelect: propTypes.func,
  onDragOver: propTypes.func,
  onDragLeave: propTypes.func,
  onDrop: propTypes.func,
  children: propTypes.node,
  name: propTypes.string
}, _class.defaultProps = {
  name: "file",
  multiple: false,
  onSelect: noop$1,
  onDragOver: noop$1,
  onDragLeave: noop$1,
  onDrop: noop$1
}, _temp2);
Selecter.displayName = "Selecter";
var _class$1, _temp2$1;
var Html5Uploader = (_temp2$1 = _class$1 = function(_Component) {
  _inherits(Html5Uploader2, _Component);
  function Html5Uploader2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Html5Uploader2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getUploadOptions = function(props) {
      return {
        action: props.action,
        name: props.name,
        timeout: props.timeout,
        method: props.method,
        beforeUpload: props.beforeUpload,
        onProgress: props.onProgress,
        onSuccess: props.onSuccess,
        onError: props.onError,
        withCredentials: props.withCredentials,
        headers: props.headers,
        data: props.data,
        request: props.request
      };
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Html5Uploader2.prototype.componentDidMount = function componentDidMount() {
    var props = this.props;
    var options = this.getUploadOptions(props);
    this.uploader = new Uploader(options);
  };
  Html5Uploader2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var preOptions = this.getUploadOptions(prevProps);
    var options = this.getUploadOptions(this.props);
    var keys = Object.keys(options);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (options[key] !== preOptions[key]) {
        this.uploader.setOptions(options);
        return;
      }
    }
  };
  Html5Uploader2.prototype.componentWillUnmount = function componentWillUnmount() {
    this.abort();
  };
  Html5Uploader2.prototype.abort = function abort(file) {
    this.uploader.abort(file);
  };
  Html5Uploader2.prototype.startUpload = function startUpload(fileList) {
    this.uploader.startUpload(fileList);
  };
  Html5Uploader2.prototype.render = function render() {
    var _props = this.props, accept = _props.accept, multiple = _props.multiple, webkitdirectory = _props.webkitdirectory, children = _props.children, id = _props.id, disabled = _props.disabled, dragable = _props.dragable, style = _props.style, className = _props.className, onSelect = _props.onSelect, onDragOver = _props.onDragOver, onDragLeave = _props.onDragLeave, onDrop = _props.onDrop, name = _props.name;
    return React.createElement(Selecter, {
      id,
      accept,
      multiple,
      webkitdirectory,
      dragable,
      disabled,
      className,
      style,
      onSelect,
      onDragOver,
      onDragLeave,
      onDrop,
      name
    }, children);
  };
  return Html5Uploader2;
}(Component), _class$1.propTypes = _extends({}, Selecter.propTypes, {
  action: propTypes.string,
  accept: propTypes.string,
  data: propTypes.oneOfType([propTypes.object, propTypes.func]),
  headers: propTypes.object,
  withCredentials: propTypes.bool,
  beforeUpload: propTypes.func,
  onProgress: propTypes.func,
  onSuccess: propTypes.func,
  onError: propTypes.func,
  children: propTypes.node,
  timeout: propTypes.number,
  method: propTypes.oneOf(["post", "put"]),
  request: propTypes.func
}), _class$1.defaultProps = _extends({}, Selecter.defaultProps, {
  name: "file",
  multiple: false,
  withCredentials: true,
  beforeUpload: func.noop,
  onSelect: func.noop,
  onDragOver: func.noop,
  onDragLeave: func.noop,
  onDrop: func.noop,
  onProgress: func.noop,
  onSuccess: func.noop,
  onError: func.noop,
  onAbort: func.noop,
  method: "post"
}), _temp2$1);
Html5Uploader.displayName = "Html5Uploader";
var _class$2, _temp, _initialiseProps;
var INPUT_STYLE = {
  position: "absolute",
  top: 0,
  right: 0,
  fontSize: 9999,
  zIndex: 9999,
  opacity: 0,
  outline: "none",
  cursor: "pointer"
};
var IframeUploader = (_temp = _class$2 = function(_React$Component) {
  _inherits(IframeUploader2, _React$Component);
  function IframeUploader2(props) {
    _classCallCheck(this, IframeUploader2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    _initialiseProps.call(_this);
    _this.domain = typeof document !== "undefined" && document.domain ? document.domain : "";
    _this.uid = uid();
    return _this;
  }
  IframeUploader2.prototype.componentDidMount = function componentDidMount() {
    this.updateInputWH();
  };
  IframeUploader2.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateInputWH();
  };
  IframeUploader2.prototype.startUpload = function startUpload() {
    this.upload(this.file);
  };
  IframeUploader2.prototype.upload = function upload2(file) {
    var _this2 = this;
    if (!this.state.uploading) {
      this.state.uploading = true;
      this.setState({uploading: true});
    }
    var _props = this.props, beforeUpload = _props.beforeUpload, action = _props.action, name = _props.name, data = _props.data;
    if (!beforeUpload) {
      return this.post(file);
    }
    var requestData = {
      action,
      name,
      data
    };
    var before = beforeUpload(file, requestData);
    if (before && before.then) {
      before.then(function(data2) {
        _this2.post(file, data2);
      }, function() {
        _this2.endUpload();
      });
    } else if (before !== false) {
      this.post(file, obj.isPlainObject(before) ? before : void 0);
    } else {
      this.endUpload();
    }
  };
  IframeUploader2.prototype.endUpload = function endUpload() {
    this.file = {};
    if (this.state.uploading) {
      this.state.uploading = false;
      this.setState({uploading: false});
    }
  };
  IframeUploader2.prototype.updateInputWH = function updateInputWH() {
    var rootNode = ReactDOM.findDOMNode(this);
    var inputNode = this.inputEl;
    inputNode.style.height = rootNode.offsetHeight + "px";
    inputNode.style.width = rootNode.offsetWidth + "px";
  };
  IframeUploader2.prototype.abort = function abort(file) {
    if (file) {
      var _uid = file;
      if (file && file.uid) {
        _uid = file.uid;
      }
      if (_uid === this.file.uid) {
        this.endUpload();
      }
    } else {
      this.endUpload();
    }
  };
  IframeUploader2.prototype.post = function post(file) {
    var requestOption = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var formNode = this.formEl;
    var dataSpan = this.dataEl;
    var fileInput = this.inputEl;
    var propsData = this.props.data;
    if (typeof propsData === "function") {
      propsData = propsData(file);
    }
    var action = requestOption.action, name = requestOption.name, data = requestOption.data;
    if (name) {
      fileInput.setAttribute("name", name);
    }
    if (action) {
      formNode.setAttribute("action", action);
    }
    if (data) {
      propsData = data;
    }
    var inputs = document.createDocumentFragment();
    for (var key in propsData) {
      if (data.hasOwnProperty(key)) {
        var input = document.createElement("input");
        input.setAttribute("name", key);
        input.value = propsData[key];
        inputs.appendChild(input);
      }
    }
    dataSpan.appendChild(inputs);
    formNode.submit();
    dataSpan.innerHTML = "";
    this.props.onStart(file);
  };
  IframeUploader2.prototype.render = function render() {
    var _props2 = this.props, disabled = _props2.disabled, className = _props2.className, children = _props2.children, accept = _props2.accept, name = _props2.name, style = _props2.style;
    var uid2 = this.uid;
    var iframeName = name + "-" + uid2 + "-iframe";
    return React.createElement("span", {
      className,
      style: _extends({
        position: "relative",
        zIndex: 0,
        display: "inline-block"
      }, style)
    }, !disabled ? React.createElement("iframe", {
      ref: this.saveIFrameRef,
      name: iframeName,
      onLoad: this.onLoad,
      style: {display: "none"}
    }) : null, React.createElement("form", {
      ref: this.saveFormRef,
      method: "post",
      action: this.props.action,
      encType: "multipart/form-data",
      target: iframeName
    }, React.createElement("input", {
      name: "_documentDomain",
      value: this.domain,
      type: "hidden"
    }), React.createElement("span", {ref: this.saveDataRef}), React.createElement("input", {
      ref: this.saveInputRef,
      type: "file",
      accept,
      name,
      onChange: this.onSelect,
      style: INPUT_STYLE
    })), children);
  };
  return IframeUploader2;
}(React.Component), _class$2.propTypes = {
  style: propTypes.object,
  action: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  data: propTypes.oneOfType([propTypes.object, propTypes.func]),
  disabled: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  headers: propTypes.object,
  autoUpload: propTypes.bool,
  onSelect: propTypes.func,
  beforeUpload: propTypes.func,
  onStart: propTypes.func,
  onSuccess: propTypes.func,
  onError: propTypes.func,
  accept: propTypes.string
}, _class$2.defaultProps = {
  name: "file",
  onSelect: func.noop,
  beforeUpload: func.noop,
  onStart: func.noop,
  onSuccess: func.noop,
  onError: func.noop,
  onAbort: func.noop
}, _initialiseProps = function _initialiseProps2() {
  var _this3 = this;
  this.state = {
    uploading: false
  };
  this.file = {};
  this.uid = "";
  this.onLoad = function() {
    if (!_this3.state.uploading) {
      return;
    }
    var props = _this3.props, file = _this3.file;
    var response = void 0;
    try {
      var doc = _this3.iFrameEl.contentDocument;
      var script = doc.getElementsByTagName("script")[0];
      if (script && script.parentNode === doc.body) {
        doc.body.removeChild(script);
      }
      response = doc.body.innerHTML;
      props.onSuccess(response, file);
    } catch (err) {
      log.warning("cross domain error for Upload. Maybe server should return document.domain script.");
      response = "cross-domain";
      props.onError(err, null, file);
    }
    _this3.endUpload();
  };
  this.onSelect = function(e) {
    _this3.file = {
      uid: uid(),
      name: e.target.value
    };
    _this3.props.onSelect([_this3.file]);
  };
  this.saveIFrameRef = function(ref) {
    _this3.iFrameEl = ref;
  };
  this.saveFormRef = function(ref) {
    _this3.formEl = ref;
  };
  this.saveDataRef = function(ref) {
    _this3.dataEl = ref;
  };
  this.saveInputRef = function(ref) {
    _this3.inputEl = ref;
  };
}, _temp);
IframeUploader.displayName = "IframeUploader";
var Uploader$1 = function(_React$Component) {
  _inherits(Uploader2, _React$Component);
  function Uploader2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Uploader2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      Component: Html5Uploader
    }, _this.saveUploaderRef = function(ref) {
      _this.uploaderRef = ref;
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Uploader2.prototype.componentDidMount = function componentDidMount() {
    if (typeof File === "undefined") {
      this.setState({
        Component: IframeUploader
      });
    }
  };
  Uploader2.prototype.abort = function abort(file) {
    this.uploaderRef.abort(file);
  };
  Uploader2.prototype.startUpload = function startUpload(files) {
    this.uploaderRef.startUpload(files);
  };
  Uploader2.prototype.render = function render() {
    var Uploader3 = this.state.Component;
    return React.createElement(Uploader3, _extends({}, this.props, {ref: this.saveUploaderRef}));
  };
  return Uploader2;
}(React.Component);
Uploader$1.displayName = "Uploader";
var _class$3, _temp2$2;
var List = (_temp2$2 = _class$3 = function(_Component) {
  _inherits(List2, _Component);
  function List2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, List2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClose = function(file) {
      var _this$props = _this.props, onRemove = _this$props.onRemove, uploader = _this$props.uploader;
      var remove = onRemove(file);
      func.promiseCall(remove, function() {
        uploader && uploader.removeFile(file);
      });
    }, _this.handleCancel = function(file) {
      var _this$props2 = _this.props, onCancel = _this$props2.onCancel, uploader = _this$props2.uploader;
      var cancel = onCancel(file);
      func.promiseCall(cancel, function() {
        uploader && uploader.abort(file);
      });
    }, _this.onImageError = function(file, obj2) {
      obj2.onerror = null;
      _this.props.onImageError(obj2, file);
    }, _this.onPreview = function(file, e) {
      _this.props.onPreview(file, e);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  List2.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;
    var _props = this.props, listType = _props.listType, useDataURL = _props.useDataURL, value = _props.value;
    if (listType !== "image" && listType !== "card") {
      return;
    }
    useDataURL && value.forEach(function(file) {
      if (typeof document === "undefined" || typeof window === "undefined" || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.imgURL !== void 0) {
        return;
      }
      file.imgURL = "";
      previewFile(file.originFileObj, function(previewDataUrl) {
        file.imgURL = previewDataUrl;
        _this2.forceUpdate();
      });
    });
  };
  List2.prototype.getInfo = function getInfo(file) {
    var _classNames;
    var prefixCls = this.props.prefix + "upload";
    var downloadURL = file.downloadURL || file.url;
    var imgURL = file.imgURL || file.url;
    var size = this.sizeCaculator(file.size);
    var itemCls = classnames((_classNames = {}, _classNames[prefixCls + "-list-item"] = true, _classNames[prefixCls + "-list-item-" + file.state] = file.state, _classNames[prefixCls + "-list-item-error-with-msg"] = file.state === "error" && file.errorMsg, _classNames));
    var alt = file.name || file.alt;
    return {prefixCls, downloadURL, imgURL, size, itemCls, alt};
  };
  List2.prototype.sizeCaculator = function sizeCaculator(size) {
    var fileSize = parseFloat(size, 10);
    if (isNaN(fileSize) || fileSize < 1e-7) {
      return 0;
    }
    var SIZE_SUFFIX = ["B", "K", "M", "G", "T", "P"];
    var suffixIndex = 0;
    var BIT_NUMBER_SYSTEM = 1024;
    while (fileSize >= BIT_NUMBER_SYSTEM && suffixIndex < SIZE_SUFFIX.length) {
      suffixIndex++;
      fileSize /= BIT_NUMBER_SYSTEM;
    }
    var suffix = SIZE_SUFFIX[suffixIndex];
    fileSize = fileSize.toFixed(2);
    return "" + fileSize + suffix;
  };
  List2.prototype.getTextList = function getTextList(file) {
    var _this3 = this;
    var _props2 = this.props, locale = _props2.locale, extraRender = _props2.extraRender, actionRender = _props2.actionRender, progressProps = _props2.progressProps, rtl = _props2.rtl, fileNameRender2 = _props2.fileNameRender;
    var _getInfo = this.getInfo(file), prefixCls = _getInfo.prefixCls, downloadURL = _getInfo.downloadURL, size = _getInfo.size, itemCls = _getInfo.itemCls;
    var onClick = function onClick2() {
      return file.state === "uploading" ? _this3.handleCancel(file) : _this3.handleClose(file);
    };
    var onKeyDown = function onKeyDown2(e) {
      if (e.keyCode === KEYCODE.ENTER) {
        onClick();
      }
    };
    return React.createElement("div", {className: itemCls, key: file.uid || file.name}, React.createElement("div", {className: prefixCls + "-list-item-name-wrap"}, React.createElement("a", {
      href: downloadURL,
      target: "_blank",
      style: {pointerEvents: downloadURL ? "" : "none"},
      className: prefixCls + "-list-item-name"
    }, React.createElement("span", null, fileNameRender2(file)), !!size && React.createElement("span", {className: prefixCls + "-list-item-size", dir: rtl ? "rtl" : void 0}, "(", size, ")"), React.createElement("span", {className: prefixCls + "-extra"}, extraRender(file)))), file.state === "uploading" ? React.createElement("div", {className: prefixCls + "-list-item-progress"}, React.createElement(NextProgress, _extends({
      size: "medium",
      percent: file.percent,
      textRender: func.noop,
      rtl
    }, progressProps))) : null, file.state === "error" && file.errorMsg ? React.createElement("div", {className: prefixCls + "-list-item-error-msg"}, file.errorMsg) : null, React.createElement("span", {className: prefixCls + "-list-item-op"}, actionRender(file), this.props.closable ? React.createElement(NextIcon, {
      type: "close",
      size: "large",
      role: "button",
      "aria-label": locale.upload.delete,
      tabIndex: "0",
      onClick,
      onKeyDown
    }) : null));
  };
  List2.prototype.getImageList = function getImageList(file) {
    var _this4 = this;
    var _props3 = this.props, extraRender = _props3.extraRender, actionRender = _props3.actionRender, progressProps = _props3.progressProps, rtl = _props3.rtl, fileNameRender2 = _props3.fileNameRender;
    var _getInfo2 = this.getInfo(file), prefixCls = _getInfo2.prefixCls, downloadURL = _getInfo2.downloadURL, imgURL = _getInfo2.imgURL, size = _getInfo2.size, itemCls = _getInfo2.itemCls, alt = _getInfo2.alt;
    var img = null;
    var onClick = function onClick2() {
      return file.state === "uploading" ? _this4.handleCancel(file) : _this4.handleClose(file);
    };
    var onKeyDown = function onKeyDown2(e) {
      if (e.keyCode === KEYCODE.ENTER) {
        onClick();
      }
    };
    if (file.state === "uploading" || file.state === "selected" && !imgURL) {
      img = React.createElement(NextIcon, {type: "picture"});
    } else if (file.state === "error") {
      img = React.createElement(NextIcon, {type: "cry"});
    } else {
      img = React.createElement("img", {
        src: imgURL,
        onError: this.onImageError.bind(this, file),
        tabIndex: "0",
        alt,
        onClick: this.onPreview.bind(this, file)
      });
    }
    return React.createElement("div", {className: itemCls, key: file.uid || file.name}, React.createElement("div", {className: prefixCls + "-list-item-thumbnail"}, img), React.createElement("span", {className: prefixCls + "-list-item-op"}, actionRender(file), this.props.closable ? React.createElement(NextIcon, {
      type: "close",
      size: "large",
      tabIndex: "0",
      role: "button",
      onClick,
      onKeyDown
    }) : null), React.createElement("a", {
      href: downloadURL,
      target: "_blank",
      style: {pointerEvents: downloadURL ? "" : "none"},
      className: prefixCls + "-list-item-name"
    }, React.createElement("span", null, fileNameRender2(file)), !!size && React.createElement("span", {className: prefixCls + "-list-item-size", dir: rtl ? "rtl" : void 0}, "(", size, ")"), React.createElement("span", {className: prefixCls + "-extra"}, extraRender(file))), file.state === "uploading" ? React.createElement("div", {className: prefixCls + "-list-item-progress"}, React.createElement(NextProgress, _extends({size: "medium", percent: file.percent, textRender: func.noop}, progressProps))) : null, file.state === "error" && file.errorMsg ? React.createElement("div", {className: prefixCls + "-list-item-error-msg"}, file.errorMsg) : null);
  };
  List2.prototype.getPictureCardList = function getPictureCardList(file, isPreview) {
    var _this5 = this;
    var _props4 = this.props, locale = _props4.locale, progressProps = _props4.progressProps, fileNameRender2 = _props4.fileNameRender, itemRender = _props4.itemRender;
    var _getInfo3 = this.getInfo(file), prefixCls = _getInfo3.prefixCls, downloadURL = _getInfo3.downloadURL, imgURL = _getInfo3.imgURL, itemCls = _getInfo3.itemCls, alt = _getInfo3.alt;
    var state = isPreview ? "" : file.state;
    var img = null;
    if (state === "uploading" || state === "selected" && !imgURL) {
      img = React.createElement("div", {className: prefixCls + "-list-item-handler"}, React.createElement(NextIcon, {type: "picture"}), React.createElement(NextButton, {text: true, onClick: function onClick() {
        return _this5.handleCancel(file);
      }}, locale.card.cancel));
    } else if (state === "error") {
      img = React.createElement("div", {className: prefixCls + "-list-item-handler"}, React.createElement(NextIcon, {type: "cry"}));
    } else {
      img = React.createElement("img", {
        src: imgURL,
        tabIndex: "0",
        alt,
        onError: this.onImageError.bind(this, file),
        onClick: this.onPreview.bind(this, file)
      });
    }
    var onClose = function onClose2() {
      return _this5.handleClose(file);
    };
    var onKeyDownClose = function onKeyDownClose2(e) {
      if (e.keyCode === KEYCODE.ENTER) {
        onClose();
      }
    };
    var item = null;
    if (state === "uploading") {
      item = [React.createElement("div", {className: prefixCls + "-list-item-thumbnail", key: "img"}, img), React.createElement("div", {className: prefixCls + "-list-item-progress", key: "progress"}, React.createElement(NextProgress, _extends({size: "medium", percent: file.percent, textRender: func.noop}, progressProps)))];
    } else {
      if (typeof itemRender === "function") {
        item = itemRender(file);
      } else {
        item = [React.createElement("div", {className: prefixCls + "-list-item-thumbnail", key: "img"}, img), React.createElement("span", {
          key: "tool",
          className: prefixCls + "-tool " + (!this.props.closable ? prefixCls + "-noclose" : "")
        }, React.createElement("a", {
          href: downloadURL,
          target: "_blank",
          tabIndex: downloadURL ? "0" : "-1",
          className: prefixCls + "-tool-download-link",
          style: {
            pointerEvents: downloadURL ? "" : "none"
          }
        }, React.createElement(NextIcon, {
          type: downloadURL ? "download" : "",
          "aria-label": locale.card.download,
          className: prefixCls + "-tool-download-icon"
        })), this.props.closable && !isPreview ? React.createElement("span", {className: prefixCls + "-tool-close"}, React.createElement(NextIcon, {
          type: "ashbin",
          "aria-label": locale.card.delete,
          tabIndex: "0",
          role: "button",
          onClick: onClose,
          onKeyDown: onKeyDownClose
        })) : null)];
      }
    }
    return React.createElement("div", {className: itemCls, key: file.uid || file.name}, React.createElement("div", {className: prefixCls + "-list-item-wrapper"}, item), React.createElement("span", {className: prefixCls + "-list-item-name"}, fileNameRender2(file)));
  };
  List2.prototype.render = function render() {
    var _this6 = this, _classNames3;
    var _props5 = this.props, listType = _props5.listType, children = _props5.children, prefix = _props5.prefix, rtl = _props5.rtl, className = _props5.className, isPreview = _props5.isPreview;
    var prefixCls = prefix + "upload";
    var list = [];
    if (isPreview) {
      var _classNames2;
      var previewCls = classnames((_classNames2 = {}, _classNames2[prefix + "form-preview"] = true, _classNames2[className] = !!className, _classNames2));
      list = this.props.value.map(function(file) {
        if (!file) {
          return null;
        }
        var downloadURL = file.downloadURL, imgURL = file.imgURL, name = file.name;
        if (listType === "text") {
          return React.createElement("div", {className: previewCls}, React.createElement("a", {href: downloadURL, target: "_blank"}, name));
        } else if (listType === "image" || listType === "card") {
          return _this6.getPictureCardList(file, true);
        }
        return null;
      });
    } else {
      list = this.props.value.map(function(file) {
        if (!file) {
          return null;
        }
        if (listType === "text") {
          return _this6.getTextList(file);
        } else if (listType === "image") {
          return _this6.getImageList(file);
        } else if (listType === "card") {
          return _this6.getPictureCardList(file);
        }
        return null;
      });
    }
    if (rtl && listType === "card" && Array.isArray(list)) {
      list = list.reverse();
    }
    var _listType = isPreview && listType === "image" ? "card" : this.props.listType;
    var listclassNames = classnames((_classNames3 = {}, _classNames3[prefixCls + "-list"] = true, _classNames3[prefixCls + "-list-" + _listType] = true, _classNames3), className);
    var others = obj.pickAttrsWith(this.props, "data-");
    return React.createElement("div", _extends({}, others, {className: listclassNames, dir: rtl ? "rtl" : void 0}), rtl ? children : list, rtl ? list : children);
  };
  return List2;
}(Component), _class$3.propTypes = {
  prefix: propTypes.string,
  locale: propTypes.object,
  listType: propTypes.oneOf(["text", "image", "card"]),
  value: propTypes.array,
  closable: propTypes.bool,
  onRemove: propTypes.func,
  onCancel: propTypes.func,
  onImageError: propTypes.func,
  onPreview: propTypes.func,
  extraRender: propTypes.func,
  actionRender: propTypes.func,
  itemRender: propTypes.func,
  progressProps: propTypes.object,
  children: propTypes.node,
  uploader: propTypes.any,
  useDataURL: propTypes.bool,
  rtl: propTypes.bool,
  isPreview: propTypes.bool,
  fileNameRender: propTypes.func
}, _class$3.defaultProps = {
  prefix: "next-",
  listType: "text",
  value: [],
  locale: zhCN.Upload,
  closable: false,
  onRemove: func.noop,
  onCancel: func.noop,
  extraRender: func.noop,
  actionRender: func.noop,
  onImageError: func.noop,
  onPreview: func.noop,
  progressProps: {},
  fileNameRender: function fileNameRender(file) {
    return file.name;
  }
}, _temp2$2);
List.displayName = "List";
var List$1 = NextConfigProvider.config(List, {
  componentName: "Upload",
  transform
});
var _class$4, _temp$1, _initialiseProps$1;
var noop$2 = func.noop;
var Upload = (_temp$1 = _class$4 = function(_Base) {
  _inherits(Upload2, _Base);
  function Upload2(props) {
    _classCallCheck(this, Upload2);
    var _this = _possibleConstructorReturn(this, _Base.call(this, props));
    _initialiseProps$1.call(_this);
    var value = void 0;
    if ("value" in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    _this.state = {
      value: !Array.isArray(value) ? [] : value,
      uploading: false
    };
    return _this;
  }
  Upload2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps && nextProps.value !== prevState.value && !prevState.uploading) {
      return {
        value: !Array.isArray(nextProps.value) ? [] : nextProps.value
      };
    }
    return null;
  };
  Upload2.prototype.selectFiles = function selectFiles(files) {
    var filesArr = files.length ? Array.prototype.slice.call(files) : [files];
    this.onSelect(filesArr);
  };
  Upload2.prototype.uploadFiles = function uploadFiles(files) {
    this.state.uploading = true;
    var fileList = files.filter(function(file) {
      if (file.state === "selected") {
        file.state = "uploading";
        return true;
      }
      return false;
    }).map(function(file) {
      return file.originFileObj;
    });
    fileList.length && this.uploaderRef.startUpload(fileList);
  };
  Upload2.prototype.startUpload = function startUpload() {
    this.uploadFiles(this.state.value);
  };
  Upload2.prototype.replaceFiles = function replaceFiles(old, current) {
    var targetItem = getFileItem(old, this.state.value);
    if (!targetItem) {
      return;
    }
    current.uid = old.uid;
    targetItem.originFileObj = current;
  };
  Upload2.prototype.isUploading = function isUploading() {
    return this.state.uploading;
  };
  Upload2.prototype.render = function render() {
    var _classNames, _classNames2;
    var _props = this.props, listType = _props.listType, prefix = _props.prefix, dragable = _props.dragable, shape = _props.shape, className = _props.className, style = _props.style, useDataURL = _props.useDataURL, disabled = _props.disabled, limit = _props.limit, closable = _props.closable, beforeUpload = _props.beforeUpload, readonly = _props.readonly, onRemove = _props.onRemove, onCancel = _props.onCancel, onPreview = _props.onPreview, list = _props.list, extraRender = _props.extraRender, progressProps = _props.progressProps, rtl = _props.rtl, isPreview = _props.isPreview, renderPreview = _props.renderPreview, name = _props.name, _props$fileKeyName = _props.fileKeyName, fileKeyName = _props$fileKeyName === void 0 ? name : _props$fileKeyName, fileNameRender2 = _props.fileNameRender, actionRender = _props.actionRender, others = _objectWithoutProperties(_props, ["listType", "prefix", "dragable", "shape", "className", "style", "useDataURL", "disabled", "limit", "closable", "beforeUpload", "readonly", "onRemove", "onCancel", "onPreview", "list", "extraRender", "progressProps", "rtl", "isPreview", "renderPreview", "name", "fileKeyName", "fileNameRender", "actionRender"]);
    var cls = classnames((_classNames = {}, _classNames[prefix + "upload"] = true, _classNames[prefix + "upload-dragable"] = dragable, _classNames[prefix + "disabled"] = disabled, _classNames[prefix + "readonly"] = readonly, _classNames[className] = className, _classNames));
    var isExceedLimit = this.state.value.length >= limit;
    var innerCls = classnames((_classNames2 = {}, _classNames2[prefix + "upload-inner"] = true, _classNames2[prefix + "hidden"] = isExceedLimit, _classNames2));
    var children = this.props.children;
    if (shape === "card") {
      var _classNames3;
      var cardCls = classnames((_classNames3 = {}, _classNames3[prefix + "upload-card"] = true, _classNames3[prefix + "disabled"] = disabled, _classNames3));
      children = React.createElement("div", {className: cardCls}, React.createElement(NextIcon, {size: "large", type: "add", className: prefix + "upload-add-icon"}), React.createElement("div", {tabIndex: "0", role: "button", className: prefix + "upload-text"}, children));
    }
    if (isPreview) {
      if (typeof renderPreview === "function") {
        var _classNames4;
        var previewCls = classnames((_classNames4 = {}, _classNames4[prefix + "form-preview"] = true, _classNames4[className] = !!className, _classNames4));
        return React.createElement("div", {style, className: previewCls}, renderPreview(this.state.value, this.props));
      }
      if (listType) {
        return React.createElement(List$1, {isPreview: true, listType, style, className, value: this.state.value});
      }
      return null;
    }
    var onRemoveFunc = disabled ? func.prevent : onRemove;
    var otherAttributes = obj.pickAttrsWith(this.props, "data-");
    return React.createElement("div", _extends({className: cls, style}, otherAttributes), React.createElement(Uploader$1, _extends({}, others, {
      name: fileKeyName,
      beforeUpload,
      dragable,
      disabled: disabled || isExceedLimit,
      className: innerCls,
      onSelect: this.onSelect,
      onDrop: this.onDrop,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      onError: this.onError,
      ref: this.saveUploaderRef
    }), children), listType || list ? React.createElement(List$1, {
      useDataURL,
      fileNameRender: fileNameRender2,
      actionRender,
      uploader: this,
      listType,
      value: this.state.value,
      closable,
      onRemove: onRemoveFunc,
      progressProps,
      onCancel,
      onPreview,
      extraRender,
      rtl
    }) : null);
  };
  return Upload2;
}(Base), _class$4.displayName = "Upload", _class$4.propTypes = _extends({}, Html5Uploader.propTypes, List$1.propTypes, {
  prefix: propTypes.string.isRequired,
  action: propTypes.string,
  value: propTypes.array,
  defaultValue: propTypes.array,
  shape: propTypes.oneOf(["card"]),
  listType: propTypes.oneOf(["text", "image", "card"]),
  list: propTypes.any,
  name: propTypes.string,
  data: propTypes.oneOfType([propTypes.object, propTypes.func]),
  formatter: propTypes.func,
  limit: propTypes.number,
  timeout: propTypes.number,
  dragable: propTypes.bool,
  closable: propTypes.bool,
  useDataURL: propTypes.bool,
  disabled: propTypes.bool,
  onSelect: propTypes.func,
  onProgress: propTypes.func,
  onChange: propTypes.func,
  onSuccess: propTypes.func,
  afterSelect: propTypes.func,
  onRemove: propTypes.func,
  onError: propTypes.func,
  beforeUpload: propTypes.func,
  onDrop: propTypes.func,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
  autoUpload: propTypes.bool,
  request: propTypes.func,
  progressProps: propTypes.object,
  rtl: propTypes.bool,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  fileKeyName: propTypes.string,
  fileNameRender: propTypes.func,
  actionRender: propTypes.func
}), _class$4.defaultProps = _extends({}, Html5Uploader.defaultProps, {
  prefix: "next-",
  limit: Infinity,
  autoUpload: true,
  closable: true,
  onSelect: noop$2,
  onProgress: noop$2,
  onChange: noop$2,
  onSuccess: noop$2,
  onRemove: noop$2,
  onError: noop$2,
  onDrop: noop$2,
  beforeUpload: noop$2,
  afterSelect: noop$2
}), _initialiseProps$1 = function _initialiseProps3() {
  var _this2 = this;
  this.onSelect = function(files) {
    var _props2 = _this2.props, autoUpload = _props2.autoUpload, afterSelect = _props2.afterSelect, onSelect = _props2.onSelect, limit = _props2.limit;
    var total = _this2.state.value.length + files.length;
    var less = limit - _this2.state.value.length;
    if (less <= 0) {
      return;
    }
    var fileList = files.map(function(file) {
      var objFile = fileToObject(file);
      objFile.state = "selected";
      return objFile;
    });
    var uploadFiles = fileList;
    var discardFiles = [];
    if (total > limit) {
      uploadFiles = fileList.slice(0, less);
      discardFiles = fileList.slice(less);
    }
    var value = _this2.state.value.concat(fileList);
    _this2.state.value = value;
    if (autoUpload) {
      _this2.uploadFiles(uploadFiles);
    }
    onSelect(uploadFiles, value);
    discardFiles.forEach(function(file) {
      var err = new Error(errorCode.EXCEED_LIMIT);
      err.code = errorCode.EXCEED_LIMIT;
      _this2.onError(err, null, file);
    });
    if (!autoUpload) {
      uploadFiles.forEach(function(file) {
        var isPassed = afterSelect(file);
        func.promiseCall(isPassed, func.noop, function(error) {
          _this2.onError(error, null, file);
        });
      });
      _this2.onChange(value, uploadFiles);
    }
  };
  this.onDrop = function(files) {
    _this2.onSelect(files);
    _this2.props.onDrop(files);
  };
  this.onProgress = function(e, file) {
    _this2.state.uploading = true;
    var value = _this2.state.value;
    var targetItem = getFileItem(file, value);
    if (!targetItem) {
      return;
    }
    _extends(targetItem, {
      state: "uploading",
      percent: e.percent
    });
    _this2.setState({
      value
    });
    _this2.props.onProgress(value, targetItem);
  };
  this.onSuccess = function(response, file) {
    var formatter = _this2.props.formatter;
    if (formatter) {
      response = formatter(response, file);
    }
    try {
      if (typeof response === "string") {
        response = JSON.parse(response);
      }
    } catch (e) {
      e.code = errorCode.RESPONSE_FAIL;
      return _this2.onError(e, response, file);
    }
    if (response.success === false) {
      var err = new Error(response.message || errorCode.RESPONSE_FAIL);
      err.code = errorCode.RESPONSE_FAIL;
      return _this2.onError(err, response, file);
    }
    var value = _this2.state.value;
    var targetItem = getFileItem(file, value);
    if (!targetItem) {
      return;
    }
    _extends(targetItem, {
      state: "done",
      response,
      url: response.url,
      downloadURL: response.downloadURL || response.url
    });
    if (!_this2.props.useDataURL) {
      targetItem.imgURL = response.imgURL || response.url;
    }
    _this2.updateUploadingState();
    _this2.onChange(value, targetItem);
    _this2.props.onSuccess(targetItem, value);
  };
  this.onError = function(err, response, file) {
    var value = _this2.state.value;
    var targetItem = getFileItem(file, value);
    if (!targetItem) {
      return;
    }
    _extends(targetItem, {
      state: "error",
      error: err,
      response
    });
    _this2.updateUploadingState();
    _this2.onChange(value, targetItem);
    _this2.props.onError(targetItem, value);
  };
  this.removeFile = function(file) {
    file.state = "removed";
    _this2.uploaderRef.abort(file);
    var fileList = _this2.state.value;
    var targetItem = getFileItem(file, fileList);
    var index = fileList.indexOf(targetItem);
    if (index !== -1) {
      fileList.splice(index, 1);
      _this2.onChange(fileList, targetItem);
    }
  };
  this.updateUploadingState = function() {
    var inProgress = _this2.state.value.some(function(i) {
      return i.state === "uploading";
    });
    if (!inProgress) {
      _this2.state.uploading = false;
    }
  };
  this.abort = function(file) {
    var fileList = _this2.state.value;
    var targetItem = getFileItem(file, fileList);
    var index = fileList.indexOf(targetItem);
    if (index !== -1) {
      fileList.splice(index, 1);
      _this2.onChange(fileList, targetItem);
    }
    _this2.uploaderRef.abort(file);
  };
  this.onChange = function(value, file) {
    _this2.setState({
      value
    });
    _this2.props.onChange(value, file);
  };
}, _temp$1);
var Upload$1 = polyfill(Upload);
var _class$5, _temp$2, _initialiseProps$2;
var Card = (_temp$2 = _class$5 = function(_Base) {
  _inherits(Card2, _Base);
  function Card2(props) {
    _classCallCheck(this, Card2);
    var _this = _possibleConstructorReturn(this, _Base.call(this, props));
    _initialiseProps$2.call(_this);
    var value = void 0;
    if ("value" in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    _this.state = {
      value: !Array.isArray(value) ? [] : value,
      uploaderRef: _this.uploaderRef
    };
    return _this;
  }
  Card2.prototype.componentDidMount = function componentDidMount() {
    this.setState({uploaderRef: this.uploaderRef});
  };
  Card2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps && nextProps.value !== prevState.value) {
      return {
        value: !Array.isArray(nextProps.value) ? [] : [].concat(nextProps.value)
      };
    }
    return null;
  };
  Card2.prototype.isUploading = function isUploading() {
    return this.state.uploaderRef.isUploading();
  };
  Card2.prototype.saveRef = function saveRef(ref) {
    this.saveUploaderRef(ref);
  };
  Card2.prototype.render = function render() {
    var _classNames, _this2 = this;
    var _props = this.props, action = _props.action, disabled = _props.disabled, prefix = _props.prefix, locale = _props.locale, className = _props.className, style = _props.style, limit = _props.limit, onPreview = _props.onPreview, onRemove = _props.onRemove, onCancel = _props.onCancel, timeout = _props.timeout, isPreview = _props.isPreview, renderPreview = _props.renderPreview, itemRender = _props.itemRender;
    var isExceedLimit = this.state.value.length >= limit;
    var uploadButtonCls = classnames((_classNames = {}, _classNames[prefix + "upload-list-item"] = true, _classNames[prefix + "hidden"] = isExceedLimit, _classNames));
    var children = this.props.children || locale.card.addPhoto;
    var onRemoveFunc = disabled ? func.prevent : onRemove;
    var othersForList = obj.pickOthers(Card2.propTypes, this.props);
    var othersForUpload = obj.pickOthers(List$1.propTypes, othersForList);
    if (isPreview) {
      if (typeof renderPreview === "function") {
        var _classNames2;
        var previewCls = classnames((_classNames2 = {}, _classNames2[prefix + "form-preview"] = true, _classNames2[className] = !!className, _classNames2));
        return React.createElement("div", {style, className: previewCls}, renderPreview(this.state.value, this.props));
      }
    }
    return React.createElement(List$1, _extends({
      className,
      style,
      listType: "card",
      closable: true,
      locale,
      value: this.state.value,
      onRemove: onRemoveFunc,
      onCancel,
      onPreview,
      itemRender,
      isPreview,
      uploader: this.state.uploaderRef
    }, othersForList), React.createElement(Upload$1, _extends({}, othersForUpload, {
      shape: "card",
      prefix,
      disabled,
      action,
      timeout,
      isPreview,
      value: this.state.value,
      onProgress: this.onProgress,
      onChange: this.onChange,
      ref: function ref(_ref) {
        return _this2.saveRef(_ref);
      },
      className: uploadButtonCls
    }), children));
  };
  return Card2;
}(Base), _class$5.displayName = "Card", _class$5.propTypes = {
  prefix: propTypes.string,
  locale: propTypes.object,
  children: propTypes.object,
  value: propTypes.oneOfType([propTypes.array, propTypes.object]),
  defaultValue: propTypes.oneOfType([propTypes.array, propTypes.object]),
  onPreview: propTypes.func,
  onChange: propTypes.func,
  onRemove: propTypes.func,
  onCancel: propTypes.func,
  itemRender: propTypes.func,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func
}, _class$5.defaultProps = {
  prefix: "next-",
  locale: zhCN.Upload,
  onChange: func.noop,
  onPreview: func.noop
}, _initialiseProps$2 = function _initialiseProps4() {
  var _this3 = this;
  this.onProgress = function(value) {
    _this3.setState({
      value
    });
  };
  this.onChange = function(value, file) {
    if (!("value" in _this3.props)) {
      _this3.setState({
        value
      });
    }
    _this3.props.onChange(value, file);
  };
}, _temp$2);
var Card$1 = polyfill(Card);
var _class$6, _temp2$3;
var Dragger = (_temp2$3 = _class$6 = function(_React$Component) {
  _inherits(Dragger2, _React$Component);
  function Dragger2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Dragger2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      dragOver: false
    }, _this.onDragOver = function(e) {
      if (!_this.state.dragOver) {
        _this.setState({
          dragOver: true
        });
      }
      _this.props.onDragOver(e);
    }, _this.onDragLeave = function(e) {
      _this.setState({
        dragOver: false
      });
      _this.props.onDragLeave(e);
    }, _this.onDrop = function(e) {
      _this.setState({
        dragOver: false
      });
      _this.props.onDrop(e);
    }, _this.saveUploaderRef = function(ref) {
      if (ref && typeof ref.getInstance === "function") {
        _this.uploaderRef = ref.getInstance();
      } else {
        _this.uploaderRef = ref;
      }
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Dragger2.prototype.abort = function abort(file) {
    this.uploaderRef.abort(file);
  };
  Dragger2.prototype.startUpload = function startUpload() {
    this.uploaderRef.startUpload();
  };
  Dragger2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, className = _props.className, style = _props.style, shape = _props.shape, locale = _props.locale, prefix = _props.prefix, listType = _props.listType, others = _objectWithoutProperties(_props, ["className", "style", "shape", "locale", "prefix", "listType"]);
    var prefixCls = prefix + "upload-drag";
    var cls = classnames((_classNames = {}, _classNames["" + prefixCls] = true, _classNames[prefixCls + "-over"] = this.state.dragOver, _classNames[className] = !!className, _classNames));
    var children = this.props.children || React.createElement("div", {className: cls}, React.createElement("p", {className: prefixCls + "-icon"}, React.createElement(NextIcon, {size: "large", className: prefixCls + "-upload-icon"})), React.createElement("p", {className: prefixCls + "-text"}, locale.drag.text), React.createElement("p", {className: prefixCls + "-hint"}, locale.drag.hint));
    return React.createElement(Upload$1, _extends({}, others, {
      prefix,
      shape,
      listType,
      dragable: true,
      style,
      onDragOver: this.onDragOver,
      onDragLeave: this.onDragLeave,
      onDrop: this.onDrop,
      ref: this.saveUploaderRef
    }), children);
  };
  return Dragger2;
}(React.Component), _class$6.propTypes = {
  prefix: propTypes.string,
  locale: propTypes.object,
  shape: propTypes.string,
  onDragOver: propTypes.func,
  onDragLeave: propTypes.func,
  onDrop: propTypes.func,
  limit: propTypes.number,
  className: propTypes.string,
  style: propTypes.object,
  defaultValue: propTypes.array,
  children: propTypes.node,
  listType: propTypes.string,
  timeout: propTypes.number
}, _class$6.defaultProps = {
  prefix: "next-",
  onDragOver: func.noop,
  onDragLeave: func.noop,
  onDrop: func.noop,
  locale: zhCN.Upload
}, _temp2$3);
Dragger.displayName = "Dragger";
Upload$1.Card = NextConfigProvider.config(Card$1, {componentName: "Upload"});
Upload$1.Dragger = NextConfigProvider.config(Dragger, {componentName: "Upload"});
Upload$1.Selecter = Selecter;
Upload$1.Uploader = Uploader;
Upload$1.ErrorCode = errorCode;
Upload$1.ImageUpload = NextConfigProvider.config(Card$1, {
  componentName: "Upload",
  transform: function transform$1(props, deprecated) {
    deprecated("Upload.ImageUpload", "Upload.Card", "Upload");
    var newprops = transform(props, function() {
    });
    if (newprops.locale && newprops.locale.image) {
      newprops.locale.card = newprops.locale.image;
    }
    return newprops;
  }
});
Upload$1.DragUpload = NextConfigProvider.config(Dragger, {
  componentName: "Upload",
  transform: function transform$12(props, deprecated) {
    deprecated("Upload.DragUpload", "Upload.Dragger", "Upload");
    var newprops = transform(props, function() {
    });
    if (!newprops.listType) {
      newprops.listType = "card";
    }
    return newprops;
  }
});
Upload$1.Core = function(_React$Component) {
  _inherits(Core, _React$Component);
  function Core(props) {
    _classCallCheck(this, Core);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    _this.handleSelect = function(files) {
      _this.uploader.startUpload(files);
    };
    var _this$props = _this.props, action = _this$props.action, name = _this$props.name, method = _this$props.method, beforeUpload = _this$props.beforeUpload, onProgress = _this$props.onProgress, onError = _this$props.onError, withCredentials = _this$props.withCredentials, headers = _this$props.headers, data = _this$props.data, onSuccess = _this$props.onSuccess;
    _this.uploader = new Uploader({
      action,
      name,
      method,
      beforeUpload,
      onProgress,
      onError,
      withCredentials,
      headers,
      data,
      onSuccess
    });
    return _this;
  }
  Core.prototype.abort = function abort() {
    this.uploader.abort();
  };
  Core.prototype.render = function render() {
    log.deprecated("Upload.Core", "Upload.Selecter and Upload.Uploader", "Upload");
    var _props = this.props, action = _props.action, name = _props.name, method = _props.method, beforeUpload = _props.beforeUpload, onProgress = _props.onProgress, onError = _props.onError, withCredentials = _props.withCredentials, headers = _props.headers, data = _props.data, onSuccess = _props.onSuccess, others = _objectWithoutProperties(_props, ["action", "name", "method", "beforeUpload", "onProgress", "onError", "withCredentials", "headers", "data", "onSuccess"]);
    var props = others;
    return React.createElement(Selecter, _extends({}, transform(props, function() {
    }), {
      onSelect: this.handleSelect
    }));
  };
  return Core;
}(React.Component);
Upload$1.List = List$1;
Upload$1.CropUpload = function() {
  log.deprecated("Upload.CropUpload", "@alife/bc-next-crop-upload", "Upload");
  return null;
};
var NextUpload = NextConfigProvider.config(Upload$1, {
  transform
});
export {NextUpload as N};
