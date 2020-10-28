import {f as _extends, J as ReactDOM, j as findDOMNode, R as React, l as func, _ as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, o as obj, e as classnames, N as NextIcon, C as Component, p as propTypes, i as dom, g as polyfill, k as events, a as NextConfigProvider, m as _objectWithoutProperties, c as createElement, S as Select} from "./index.c1c37145.js";
import "./01ac0d7e.js";
import {e as exported$1} from "./0ec833f0.js";
import "./bddee8d8.js";
import {e as exported} from "./9d632cff.js";
import {H as He} from "./1c117732.js";
var checkSpecKeys = function checkSpecKeys2(spec, keysArray) {
  return keysArray.reduce(function(value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing", spec);
};
var getTrackCSS = function getTrackCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth = void 0;
  var trackHeight = void 0;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
  if (!spec.vertical) {
    if (spec.variableWidth) {
      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
    } else if (spec.centerMode) {
      trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
    } else {
      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
    }
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }
  var style = {
    opacity: 1
  };
  var transform2 = {
    WebkitTransform: !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)",
    transform: !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)",
    transition: "",
    WebkitTransition: "",
    msTransform: !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)"
  };
  if (trackWidth) {
    style = _extends({}, style, {width: trackWidth});
  }
  if (trackHeight) {
    style = _extends({}, style, {height: trackHeight});
  }
  if (spec.animation !== "fade") {
    style = _extends({}, style, transform2);
  }
  return style;
};
var getTrackAnimateCSS = function getTrackAnimateCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec);
  style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
  style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  return style;
};
var getTrackLeft = function getTrackLeft2(spec) {
  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideOffset = 0;
  var targetLeft = void 0;
  var targetSlide = void 0;
  var verticalOffset = 0;
  if (spec.animation === "fade") {
    return 0;
  }
  if (spec.infinite) {
    if (spec.slideCount > spec.slidesToShow) {
      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
      verticalOffset = spec.slideHeight * spec.slidesToShow * -1;
    }
    if (spec.slideCount % spec.slidesToScroll !== 0) {
      var condition = spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow;
      if (spec.rtl) {
        var slideIndex = spec.slideIndex >= spec.slideCount ? spec.slideCount - spec.slideIndex : spec.slideIndex;
        condition = slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow;
      }
      if (condition) {
        if (spec.slideIndex > spec.slideCount) {
          slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
          verticalOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight * -1;
        } else {
          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
          verticalOffset = spec.slideCount % spec.slidesToScroll * spec.slideHeight * -1;
        }
      }
    }
  } else {
    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
        var slidesToOffset = spec.slidesToShow - spec.slideCount % spec.slidesToScroll;
        slideOffset = slidesToOffset * spec.slideWidth;
      }
    }
  }
  if (spec.centerMode) {
    if (spec.infinite) {
      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    } else {
      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    }
  }
  if (!spec.vertical) {
    targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
  } else {
    targetLeft = spec.slideIndex * spec.slideHeight * -1 + verticalOffset;
  }
  if (spec.variableWidth === true) {
    var targetSlideIndex = void 0;
    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
      targetSlide = ReactDOM.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
    } else {
      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
      targetSlide = ReactDOM.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
    }
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (spec.centerMode === true) {
      if (spec.infinite === false) {
        targetSlide = ReactDOM.findDOMNode(spec.trackRef).children[spec.slideIndex];
      } else {
        targetSlide = ReactDOM.findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
      }
      if (targetSlide) {
        targetLeft = targetSlide.offsetLeft * -1 + (spec.listWidth - targetSlide.offsetWidth) / 2;
      }
    }
  }
  return targetLeft;
};
var EventHandlers = {
  changeSlide: function changeSlide(options) {
    var slideOffset = void 0, targetSlide = void 0;
    var unevenOffset = this.state.slideCount % this.props.slidesToScroll !== 0;
    var indexOffset = unevenOffset ? 0 : (this.state.slideCount - this.state.currentSlide) % this.props.slidesToScroll;
    if (options.message === "previous") {
      slideOffset = indexOffset === 0 ? this.props.slidesToScroll : this.props.slidesToShow - indexOffset;
      targetSlide = this.state.currentSlide - slideOffset;
    } else if (options.message === "next") {
      slideOffset = indexOffset === 0 ? this.props.slidesToScroll : indexOffset;
      targetSlide = this.state.currentSlide + slideOffset;
    } else if (options.message === "dots" || options.message === "children") {
      targetSlide = options.index * options.slidesToScroll;
      if (targetSlide === options.currentSlide) {
        return;
      }
    } else if (options.message === "index") {
      targetSlide = options.index;
      if (targetSlide === options.currentSlide) {
        return;
      }
    }
    this.slideHandler(targetSlide);
  },
  keyHandler: function keyHandler(e) {
    if (!e.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
      if (e.keyCode === 37 && this.props.accessibility === true) {
        this.changeSlide({
          message: this.props.rtl === true ? "next" : "previous"
        });
      } else if (e.keyCode === 39 && this.props.accessibility === true) {
        this.changeSlide({
          message: this.props.rtl === true ? "previous" : "next"
        });
      }
    }
  },
  selectHandler: function selectHandler(options) {
    this.changeSlide(options);
  },
  swipeStart: function swipeStart(e) {
    if (this.props.swipe === false || "ontouchend" in document && this.props.swipe === false) {
      return;
    } else if (this.props.draggable === false && e.type.indexOf("mouse") !== -1) {
      return;
    }
    var posX = e.touches !== void 0 ? e.touches[0].pageX : e.clientX;
    var posY = e.touches !== void 0 ? e.touches[0].pageY : e.clientY;
    this.setState({
      dragging: true,
      touchObject: {
        startX: posX,
        startY: posY,
        curX: posX,
        curY: posY
      }
    });
  },
  swipeMove: function swipeMove(e) {
    if (!this.state.dragging) {
      return;
    }
    if (this.state.animating) {
      return;
    }
    var touchObject = this.state.touchObject;
    var curLeft = getTrackLeft(_extends({
      slideIndex: this.state.currentSlide,
      trackRef: this.refs.track
    }, this.props, this.state));
    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    var positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
    if (this.props.verticalSwiping === true) {
      touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
      positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
    }
    var currentSlide = this.state.currentSlide;
    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll);
    var swipeDirection2 = this.swipeDirection(this.state.touchObject);
    var touchSwipeLength = touchObject.swipeLength;
    if (this.props.infinite === false) {
      if (currentSlide === 0 && swipeDirection2 === "right" || currentSlide + 1 >= dotCount && swipeDirection2 === "left") {
        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;
        if (this.state.edgeDragged === false && this.props.edgeEvent) {
          this.props.edgeEvent(swipeDirection2);
          this.setState({edgeDragged: true});
        }
      }
    }
    if (this.state.swiped === false && this.props.swipeEvent) {
      this.props.swipeEvent(swipeDirection2);
      this.setState({swiped: true});
    }
    var swipeLeft = curLeft + touchSwipeLength * positionOffset;
    this.setState({
      touchObject,
      swipeLeft,
      trackStyle: getTrackCSS(_extends({
        left: swipeLeft
      }, this.props, this.state))
    });
    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
      return;
    }
    if (touchObject.swipeLength > 4) {
      e.preventDefault();
    }
  },
  getNavigableIndexes: function getNavigableIndexes() {
    var max = void 0;
    var breakPoint = 0;
    var counter = 0;
    var indexes = [];
    if (!this.props.infinite) {
      max = this.state.slideCount;
    } else {
      breakPoint = this.props.slidesToShow * -1;
      counter = this.props.slidesToShow * -1;
      max = this.state.slideCount * 2;
    }
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + this.props.slidesToScroll;
      counter += this.props.slidesToScroll <= this.props.slidesToShow ? this.props.slidesToScroll : this.props.slidesToShow;
    }
    return indexes;
  },
  checkNavigable: function checkNavigable(index) {
    var navigables = this.getNavigableIndexes();
    var prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    return index;
  },
  getSlideCount: function getSlideCount() {
    var _this = this;
    var centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;
    if (this.props.swipeToSlide) {
      var swipedSlide = void 0;
      var slickList = findDOMNode(this.list);
      var slides2 = slickList.querySelectorAll(this.props.prefix + "slick-slide");
      Array.from(slides2).every(function(slide) {
        if (!_this.props.vertical) {
          if (slide.offsetLeft - centerOffset + _this.getWidth(slide) / 2 > _this.state.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        } else if (slide.offsetTop + _this.getHeight(slide) / 2 > _this.state.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
        return true;
      });
      var slidesTraversed = Math.abs(swipedSlide.dataset.index - this.state.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return this.props.slidesToScroll;
    }
  },
  swipeEnd: function swipeEnd(e) {
    if (!this.state.dragging) {
      if (this.props.swipe) {
        e.preventDefault();
      }
      return;
    }
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth / this.props.touchThreshold;
    var swipeDirection2 = this.swipeDirection(touchObject);
    if (this.props.verticalSwiping) {
      minSwipe = this.state.listHeight / this.props.touchThreshold;
    }
    this.setState({
      dragging: false,
      edgeDragged: false,
      swiped: false,
      swipeLeft: null,
      touchObject: {}
    });
    if (!touchObject.swipeLength) {
      return;
    }
    if (touchObject.swipeLength > minSwipe) {
      e.preventDefault();
      var slideCount = void 0;
      var newSlide = void 0;
      switch (swipeDirection2) {
        case "left":
        case "down":
          newSlide = this.state.currentSlide + this.getSlideCount();
          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
          this.setState({currentDirection: 0});
          break;
        case "right":
        case "up":
          newSlide = this.state.currentSlide - this.getSlideCount();
          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
          this.setState({currentDirection: 1});
          break;
        default:
          slideCount = this.state.currentSlide;
      }
      this.slideHandler(slideCount);
    } else {
      var currentLeft = getTrackLeft(_extends({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, this.props, this.state));
      this.setState({
        trackStyle: getTrackAnimateCSS(_extends({
          left: currentLeft
        }, this.props, this.state))
      });
    }
  },
  onInnerSliderEnter: function onInnerSliderEnter() {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause();
    }
  },
  onInnerSliderLeave: function onInnerSliderLeave() {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.autoPlay();
    }
  }
};
var helpers = {
  initialize: function initialize(props) {
    var _this = this;
    var slickList = ReactDOM.findDOMNode(this.list);
    var slideCount = React.Children.count(props.children);
    var listWidth = this.getWidth(slickList);
    var trackWidth = this.getWidth(ReactDOM.findDOMNode(this.track));
    var slideWidth = void 0;
    if (!props.vertical) {
      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
      slideWidth = (listWidth - centerPaddingAdj) / props.slidesToShow;
    } else {
      slideWidth = listWidth;
    }
    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
    var listHeight = slideHeight * props.slidesToShow;
    var slidesToShow = props.slidesToShow || 1;
    var currentSlide = props.rtl ? slideCount - 1 - (slidesToShow - 1) - props.defaultActiveIndex : props.defaultActiveIndex;
    this.setState({
      slideCount,
      slideWidth,
      listWidth,
      trackWidth,
      currentSlide,
      slideHeight,
      listHeight
    }, function() {
      var targetLeft = getTrackLeft(_extends({
        slideIndex: _this.state.currentSlide,
        trackRef: _this.track
      }, props, _this.state));
      var trackStyle = getTrackCSS(_extends({
        left: targetLeft
      }, props, _this.state));
      _this.setState({trackStyle});
      _this.autoPlay();
    });
  },
  update: function update(props) {
    this.initialize(props);
  },
  getWidth: function getWidth(elem) {
    return elem.getBoundingClientRect().width || elem.offsetWidth;
  },
  getHeight: function getHeight(elem) {
    return elem.getBoundingClientRect().height || elem.offsetHeight;
  },
  adaptHeight: function adaptHeight() {
    if (this.props.adaptiveHeight) {
      var selector = '[data-index="' + this.state.currentSlide + '"]';
      if (this.list) {
        var slickList = ReactDOM.findDOMNode(this.list);
        var listHeight = slickList.querySelector(selector).offsetHeight;
        slickList.style.height = listHeight + "px";
      }
    }
  },
  canGoNext: function canGoNext(opts) {
    var canGo = true;
    if (!opts.infinite) {
      if (opts.centerMode) {
        if (opts.currentSlide >= opts.slideCount - 1) {
          canGo = false;
        }
      } else if (opts.slideCount <= opts.slidesToShow || opts.currentSlide >= opts.slideCount - opts.slidesToShow) {
        canGo = false;
      }
    }
    return canGo;
  },
  slideHandler: function slideHandler(index) {
    var _this2 = this;
    var rtl = this.props.rtl;
    var targetSlide = void 0, currentSlide = void 0;
    var callback = void 0;
    if (this.props.waitForAnimate && this.state.animating) {
      return;
    }
    if (this.props.animation === "fade") {
      currentSlide = this.state.currentSlide;
      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
        return;
      }
      if (index < 0) {
        targetSlide = index + this.state.slideCount;
      } else if (index >= this.state.slideCount) {
        targetSlide = index - this.state.slideCount;
      } else {
        targetSlide = index;
      }
      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(targetSlide) < 0) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList.concat(targetSlide)
        });
      }
      callback = function callback2() {
        _this2.setState({
          animating: false
        });
        _this2.props.onChange(targetSlide);
        delete _this2.animationEndCallback;
      };
      this.props.onBeforeChange(this.state.currentSlide, targetSlide);
      this.setState({
        animating: true,
        currentSlide: targetSlide
      }, function() {
        this.animationEndCallback = setTimeout(callback, this.props.speed + 20);
      });
      this.autoPlay();
      return;
    }
    targetSlide = index;
    if (rtl) {
      if (targetSlide < 0) {
        if (this.props.infinite === false) {
          currentSlide = 0;
        } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
          if (targetSlide + this.props.slidesToScroll <= 0) {
            currentSlide = this.state.slideCount + targetSlide;
            targetSlide = this.state.slideCount - this.props.slidesToScroll;
          } else {
            currentSlide = targetSlide = 0;
          }
        } else {
          currentSlide = this.state.slideCount + targetSlide;
        }
      } else if (targetSlide >= this.state.slideCount) {
        if (this.props.infinite === false) {
          currentSlide = this.state.slideCount - this.props.slidesToShow;
        } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
          currentSlide = 0;
        } else {
          currentSlide = targetSlide - this.state.slideCount;
        }
      } else {
        currentSlide = targetSlide;
      }
    } else if (targetSlide < 0) {
      if (this.props.infinite === false) {
        currentSlide = 0;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = this.state.slideCount - this.state.slideCount % this.props.slidesToScroll;
      } else {
        currentSlide = this.state.slideCount + targetSlide;
      }
    } else if (targetSlide >= this.state.slideCount) {
      if (this.props.infinite === false) {
        currentSlide = this.state.slideCount - this.props.slidesToShow;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = 0;
      } else {
        currentSlide = targetSlide - this.state.slideCount;
      }
    } else {
      currentSlide = targetSlide;
    }
    var targetLeft = getTrackLeft(_extends({
      slideIndex: targetSlide,
      trackRef: this.track
    }, this.props, this.state));
    var currentLeft = getTrackLeft(_extends({
      slideIndex: currentSlide,
      trackRef: this.track
    }, this.props, this.state));
    if (this.props.infinite === false) {
      targetLeft = currentLeft;
    }
    if (this.props.lazyLoad) {
      var loaded = true;
      var slidesToLoad = [];
      var slidesLen = this.state.slideCount;
      var sliderIndex = targetSlide < 0 ? slidesLen + targetSlide : currentSlide;
      for (var i = sliderIndex; i < sliderIndex + this.props.slidesToShow; i++) {
        var k = i;
        if (rtl) {
          k = i >= slidesLen ? slidesLen * 2 - i - 1 : slidesLen - i - 1;
        }
        var pre = k - 1 < 0 ? slidesLen - 1 : k - 1;
        var next = k + 1 >= slidesLen ? 0 : k + 1;
        this.state.lazyLoadedList.indexOf(k) < 0 && slidesToLoad.push(k);
        this.state.lazyLoadedList.indexOf(pre) < 0 && slidesToLoad.push(pre);
        this.state.lazyLoadedList.indexOf(next) < 0 && slidesToLoad.push(next);
      }
      slidesToLoad.forEach(function(i2) {
        if (_this2.state.lazyLoadedList.indexOf(i2) < 0) {
          loaded = false;
        }
      });
      if (!loaded) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad)
        });
      }
    }
    this.props.onBeforeChange(this.state.currentSlide, currentSlide);
    if (this.props.useCSS === false) {
      this.setState({
        currentSlide,
        trackStyle: getTrackCSS(_extends({
          left: currentLeft
        }, this.props, this.state))
      }, function() {
        _this2.props.onChange(currentSlide);
      });
    } else {
      var nextStateChanges = {
        animating: false,
        currentSlide,
        trackStyle: getTrackCSS(_extends({
          left: currentLeft
        }, this.props, this.state)),
        swipeLeft: null
      };
      callback = function callback2() {
        _this2.setState(nextStateChanges);
        _this2.props.onChange(currentSlide);
        delete _this2.animationEndCallback;
      };
      this.setState({
        animating: true,
        currentSlide,
        trackStyle: getTrackAnimateCSS(_extends({
          left: targetLeft
        }, this.props, this.state))
      }, function() {
        this.animationEndCallback = setTimeout(callback, this.props.speed + 20);
      });
    }
    this.autoPlay();
  },
  arrowHoverHandler: function arrowHoverHandler(msg) {
    var offset = 30;
    var targetLeft = getTrackLeft(_extends({
      slideIndex: this.state.currentSlide,
      trackRef: this.track
    }, this.props, this.state));
    var left = void 0;
    if (msg === "next") {
      left = targetLeft - offset;
    } else if (msg === "prev") {
      left = targetLeft + offset;
    } else {
      left = targetLeft;
    }
    this.setState({
      trackStyle: getTrackAnimateCSS(_extends({
        left
      }, this.props, this.state))
    });
  },
  swipeDirection: function swipeDirection(touchObject) {
    var swipeAngle = void 0;
    var xDist = touchObject.startX - touchObject.curX;
    var yDist = touchObject.startY - touchObject.curY;
    var r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
      return this.props.rtl === false ? "left" : "right";
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return this.props.rtl === false ? "right" : "left";
    }
    if (this.props.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return "down";
      } else {
        return "up";
      }
    }
    return "vertical";
  },
  play: function play() {
    var nextIndex = void 0;
    if (!this.hasMounted) {
      return false;
    }
    if (this.props.rtl) {
      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
    } else if (this.canGoNext(_extends({}, this.props, this.state))) {
      nextIndex = this.state.currentSlide + this.props.slidesToScroll;
    } else {
      return false;
    }
    this.slideHandler(nextIndex);
  },
  autoPlay: function autoPlay() {
    if (this.state.autoPlayTimer) {
      clearTimeout(this.state.autoPlayTimer);
    }
    if (this.props.autoplay) {
      this.setState({
        autoPlayTimer: setTimeout(this.play.bind(this), this.props.autoplaySpeed)
      });
    }
  },
  pause: function pause() {
    if (this.state.autoPlayTimer) {
      clearTimeout(this.state.autoPlayTimer);
      this.setState({
        autoPlayTimer: null
      });
    }
  }
};
var _class, _temp;
var noop = func.noop;
var Arrow = (_temp = _class = function(_Component) {
  _inherits(Arrow2, _Component);
  function Arrow2() {
    _classCallCheck(this, Arrow2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Arrow2.isDisabled = function isDisabled(props) {
    var infinite = props.infinite, type = props.type, centerMode = props.centerMode, currentSlide = props.currentSlide, slideCount = props.slideCount, slidesToShow = props.slidesToShow;
    if (infinite) {
      return false;
    }
    if (type === "prev") {
      return currentSlide <= 0;
    }
    if (centerMode && currentSlide >= slideCount - 1) {
      return true;
    } else if (currentSlide >= slideCount - slidesToShow) {
      return true;
    }
    return false;
  };
  Arrow2.prototype.handleClick = function handleClick(options, e) {
    e && e.preventDefault();
    if (options.message === "prev") {
      options.message = "previous";
    }
    this.props.clickHandler(options, e);
  };
  Arrow2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, type = _props.type, arrowSize = _props.arrowSize, arrowPosition = _props.arrowPosition, arrowDirection = _props.arrowDirection, onMouseEnter = _props.onMouseEnter, onMouseLeave = _props.onMouseLeave, children = _props.children;
    var others = obj.pickOthers(Arrow2.propTypes, this.props);
    var iconType = Arrow2.ARROW_ICON_TYPES[arrowDirection][type];
    var disabled = Arrow2.isDisabled(this.props);
    var arrowClazz = classnames([prefix + "slick-arrow", prefix + "slick-" + type, arrowPosition, arrowSize, arrowDirection], {disabled});
    var arrowProps = _extends({}, others, {
      key: type,
      "data-role": "none",
      className: arrowClazz,
      style: {display: "block"},
      onClick: disabled ? null : this.handleClick.bind(this, {message: type}),
      onMouseEnter: disabled ? null : onMouseEnter,
      onMouseLeave: disabled ? null : onMouseLeave
    });
    if (children) {
      return React.cloneElement(React.Children.only(children), arrowProps);
    } else {
      return React.createElement("button", _extends({type: "button", role: "button"}, arrowProps), React.createElement(NextIcon, {type: iconType}));
    }
  };
  return Arrow2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  type: propTypes.oneOf(["prev", "next"]).isRequired,
  centerMode: propTypes.bool,
  currentSlide: propTypes.number,
  infinite: propTypes.bool,
  clickHandler: propTypes.func,
  slideCount: propTypes.number,
  slidesToShow: propTypes.number,
  arrow: propTypes.element,
  arrowSize: propTypes.string,
  arrowPosition: propTypes.string,
  arrowDirection: propTypes.oneOf(["hoz", "ver"]),
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  children: propTypes.node
}, _class.defaultProps = {
  onMouseEnter: noop,
  onMouseLeave: noop
}, _class.ARROW_ICON_TYPES = {
  hoz: {prev: "arrow-left", next: "arrow-right"},
  ver: {prev: "arrow-up", next: "arrow-down"}
}, _temp);
Arrow.displayName = "Arrow";
var _class$1, _temp$1;
var getSlideClasses = function getSlideClasses2(specProps) {
  var _classNames;
  var prefix = specProps.prefix;
  var slickActive = void 0, slickCenter = void 0;
  var centerOffset = void 0, index = void 0;
  if (specProps.rtl) {
    index = specProps.slideCount - 1 - specProps.activeIndex;
  } else {
    index = specProps.activeIndex;
  }
  var slickCloned = index < 0 || index >= specProps.slideCount;
  if (specProps.centerMode) {
    centerOffset = Math.floor(specProps.slidesToShow / 2);
    slickCenter = (index - specProps.currentSlide) % specProps.slideCount === 0;
    if (index > specProps.currentSlide - centerOffset - 1 && index <= specProps.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = specProps.currentSlide <= index && index < specProps.currentSlide + specProps.slidesToShow;
  }
  return classnames(prefix + "slick-slide", (_classNames = {}, _classNames[prefix + "slick-active"] = slickActive, _classNames[prefix + "slick-center"] = slickCenter, _classNames[prefix + "slick-cloned"] = slickCloned, _classNames));
};
var getSlideStyle = function getSlideStyle2(specProps) {
  var style = {};
  if (specProps.variableWidth === void 0 || specProps.variableWidth === false) {
    style.width = specProps.slideWidth;
  }
  if (specProps.animation === "fade") {
    style.position = "relative";
    style.opacity = specProps.currentSlide === specProps.activeIndex ? 1 : 0;
    style.visibility = specProps.currentSlide >= specProps.activeIndex ? "visible" : "hidden";
    style.transition = "opacity " + specProps.speed + "ms " + specProps.cssEase;
    style.WebkitTransition = "opacity " + specProps.speed + "ms " + specProps.cssEase;
    if (specProps.vertical) {
      style.top = -specProps.activeIndex * specProps.slideHeight;
    } else {
      style.left = -specProps.activeIndex * specProps.slideWidth;
    }
  }
  if (specProps.vertical) {
    style.width = "100%";
  }
  return style;
};
var getKey = function getKey2(child, fallbackKey) {
  return child.key === null || child.key === void 0 ? fallbackKey : child.key;
};
var renderSlides = function renderSlides2(specProps) {
  var key = void 0;
  var slides2 = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var count = React.Children.count(specProps.children);
  var child = void 0;
  React.Children.forEach(specProps.children, function(elem, index) {
    var childOnClickOptions = {
      message: "children",
      index,
      slidesToScroll: specProps.slidesToScroll,
      currentSlide: specProps.currentSlide
    };
    if (!specProps.lazyLoad | (specProps.lazyLoad && specProps.lazyLoadedList.indexOf(index) >= 0)) {
      child = elem;
    } else {
      child = elem.key ? React.createElement("div", {key: elem.key}) : React.createElement("div", null);
    }
    var childStyle = getSlideStyle(_extends({}, specProps, {activeIndex: index}));
    var slickClasses = getSlideClasses(_extends({
      activeIndex: index
    }, specProps));
    var cssClasses = void 0;
    if (child.props.className) {
      cssClasses = classnames(slickClasses, child.props.className);
    } else {
      cssClasses = slickClasses;
    }
    var onClick = function onClick2(e) {
      child.props && child.props.onClick && elem.props.onClick(e);
      if (specProps.focusOnSelect) {
        specProps.focusOnSelect(childOnClickOptions);
      }
    };
    slides2.push(React.cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: cssClasses,
      tabIndex: "-1",
      "aria-posinset": index,
      "aria-setsize": count,
      role: "listitem",
      dir: specProps.rtl ? "rtl" : "ltr",
      style: !dom.hasDOM ? _extends({outline: "none"}, childStyle, child.props.style) : _extends({outline: "none"}, child.props.style, childStyle),
      onClick
    }));
    if (specProps.infinite && specProps.animation !== "fade") {
      var infiniteCount = specProps.variableWidth ? specProps.slidesToShow + 1 : specProps.slidesToShow;
      if (index >= count - infiniteCount) {
        key = -(count - index);
        preCloneSlides.push(React.cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          className: cssClasses,
          style: _extends({}, child.props.style, childStyle)
        }));
      }
      if (index < infiniteCount) {
        key = count + index;
        postCloneSlides.push(React.cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          className: cssClasses,
          style: _extends({}, child.props.style, childStyle)
        }));
      }
    }
  });
  if (!dom.hasDOM) {
    return slides2.slice(specProps.currentSlide, specProps.currentSlide + specProps.slidesToShow);
  }
  if (specProps.rtl) {
    return preCloneSlides.concat(slides2, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides2, postCloneSlides);
  }
};
var Track = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Track2, _Component);
  function Track2() {
    _classCallCheck(this, Track2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Track2.prototype.render = function render() {
    var slides2 = renderSlides(this.props);
    return React.createElement("div", {
      role: "list",
      className: this.props.prefix + "slick-track",
      style: this.props.trackStyle
    }, slides2);
  };
  return Track2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  trackStyle: propTypes.object
}, _class$1.defaultProps = {
  prefix: "next-"
}, _temp$1);
Track.displayName = "Track";
var _class$2, _temp$2;
var noop$1 = func.noop;
var Dots = (_temp$2 = _class$2 = function(_React$Component) {
  _inherits(Dots2, _React$Component);
  function Dots2() {
    _classCallCheck(this, Dots2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Dots2.prototype.handleChangeSlide = function handleChangeSlide(options, e) {
    e.preventDefault();
    this.props.changeSlide(options);
  };
  Dots2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, slideCount = _props.slideCount, slidesToScroll = _props.slidesToScroll, currentSlide = _props.currentSlide, dotsClass = _props.dotsClass, dotsDirection = _props.dotsDirection, dotsRender = _props.dotsRender, triggerType = _props.triggerType, rtl = _props.rtl;
    var dotsClazz = classnames(prefix + "slick-dots", dotsDirection, dotsClass);
    var dotCount = Math.ceil(slideCount / slidesToScroll);
    var children = [];
    for (var i = 0; i < dotCount; i++) {
      var _handleProp;
      var leftBound = i * slidesToScroll;
      var rightBound = leftBound + slidesToScroll - 1;
      var itemClazz = classnames(prefix + "slick-dots-item", {
        active: currentSlide >= leftBound && currentSlide <= rightBound
      });
      var dotOptions = {
        message: "dots",
        index: i,
        slidesToScroll,
        currentSlide
      };
      var handleProp = (_handleProp = {}, _handleProp[triggerType.toLowerCase() === "hover" ? "onMouseEnter" : "onClick"] = this.handleChangeSlide.bind(this, dotOptions), _handleProp);
      var docIndex = i;
      var currentSlideIndex = currentSlide;
      if (rtl) {
        docIndex = dotCount - 1 - i;
        currentSlideIndex = dotCount - 1 - currentSlide;
      }
      children.push(React.createElement("li", _extends({key: i, className: itemClazz}, handleProp), dotsRender instanceof Function ? React.createElement("span", null, dotsRender(docIndex, currentSlideIndex)) : React.createElement("button", {tabIndex: "-1"})));
    }
    return React.createElement("ul", {className: dotsClazz, "aria-hidden": "true"}, children);
  };
  return Dots2;
}(React.Component), _class$2.propTypes = {
  prefix: propTypes.string,
  currentSlide: propTypes.number,
  changeSlide: propTypes.func,
  dotsClass: propTypes.string,
  slideCount: propTypes.number,
  slidesToScroll: propTypes.number,
  dotsDirection: propTypes.oneOf(["hoz", "ver"]),
  dotsRender: propTypes.func,
  triggerType: propTypes.string
}, _class$2.defaultProps = {
  changeSlide: noop$1
}, _temp$2);
Dots.displayName = "Dots";
var _class$3, _temp$3;
var noop$2 = func.noop;
var InnerSlider = (_temp$3 = _class$3 = function(_React$Component) {
  _inherits(InnerSlider2, _React$Component);
  function InnerSlider2(props) {
    _classCallCheck(this, InnerSlider2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    _this.state = {
      animating: false,
      dragging: false,
      autoPlayTimer: null,
      currentDirection: 0,
      currentLeft: null,
      currentSlide: "activeIndex" in props ? props.activeIndex : props.defaultActiveIndex,
      direction: 1,
      listWidth: null,
      listHeight: null,
      slideCount: null,
      slideWidth: null,
      slideHeight: null,
      swipeLeft: null,
      touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
      },
      lazyLoadedList: [],
      initialized: false,
      edgeDragged: false,
      swiped: false,
      trackStyle: {},
      trackWidth: 0
    };
    func.bindCtx(_this, ["onWindowResized", "selectHandler", "changeSlide", "onInnerSliderEnter", "onInnerSliderLeave", "swipeStart", "swipeMove", "swipeEnd"]);
    return _this;
  }
  InnerSlider2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var state = {};
    var lazyLoad = nextProps.lazyLoad, children = nextProps.children, slidesToShow = nextProps.slidesToShow, activeIndex = nextProps.activeIndex;
    var currentSlide = prevState.currentSlide;
    var lazyLoadedList = [];
    if (lazyLoad) {
      for (var i = 0, j = React.Children.count(children); i < j; i++) {
        if (i >= currentSlide && i < currentSlide + slidesToShow) {
          lazyLoadedList.push(i);
          var pre = i - 1 < 0 ? j - 1 : i - 1;
          var next = i + 1 >= j ? 0 : i + 1;
          lazyLoadedList.push(pre);
          lazyLoadedList.push(next);
        }
      }
      if (prevState.lazyLoadedList.length === 0) {
        state.lazyLoadedList = lazyLoadedList;
      }
    }
    return state;
  };
  InnerSlider2.prototype.componentDidMount = function componentDidMount() {
    this.hasMounted = true;
    this.initialize(this.props);
    this.adaptHeight();
    if (this.props.activeIndex) {
      this.slickGoTo(this.props.activeIndex);
    }
    if (window) {
      events.on(window, "resize", this.onWindowResized);
    }
  };
  InnerSlider2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeIndex !== this.props.activeIndex) {
      this.slickGoTo(this.props.activeIndex);
    } else if (prevState.currentSlide >= this.props.children.length) {
      this.update(this.props);
      this.changeSlide({
        message: "index",
        index: this.props.children.length - this.props.slidesToShow,
        currentSlide: this.state.currentSlide
      });
    } else {
      var others = ["children"];
      var update2 = !obj.shallowEqual(obj.pickOthers(others, prevProps), obj.pickOthers(others, this.props));
      if (update2) {
        this.update(this.props);
      }
    }
    this.adaptHeight();
  };
  InnerSlider2.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationEndCallback) {
      clearTimeout(this.animationEndCallback);
    }
    events.off(window, "resize", this.onWindowResized);
    if (this.state.autoPlayTimer) {
      clearInterval(this.state.autoPlayTimer);
    }
  };
  InnerSlider2.prototype.onWindowResized = function onWindowResized() {
    this.update(this.props);
    this.setState({animating: false});
    clearTimeout(this.animationEndCallback);
    delete this.animationEndCallback;
  };
  InnerSlider2.prototype.slickGoTo = function slickGoTo(slide) {
    typeof slide === "number" && this.changeSlide({
      message: "index",
      index: slide,
      currentSlide: this.state.currentSlide
    });
  };
  InnerSlider2.prototype.onEnterArrow = function onEnterArrow(msg) {
    this.arrowHoverHandler(msg);
  };
  InnerSlider2.prototype.onLeaveArrow = function onLeaveArrow() {
    this.arrowHoverHandler();
  };
  InnerSlider2.prototype._instanceRefHandler = function _instanceRefHandler(attr, ref) {
    this[attr] = ref;
  };
  InnerSlider2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, animation = _props.animation, arrows = _props.arrows, arrowSize = _props.arrowSize, arrowPosition = _props.arrowPosition, arrowDirection = _props.arrowDirection, dots = _props.dots, dotsClass = _props.dotsClass, cssEase = _props.cssEase, speed = _props.speed, infinite = _props.infinite, centerMode = _props.centerMode, centerPadding = _props.centerPadding, lazyLoad = _props.lazyLoad, dotsDirection = _props.dotsDirection, rtl = _props.rtl, slidesToShow = _props.slidesToShow, slidesToScroll = _props.slidesToScroll, variableWidth = _props.variableWidth, vertical = _props.vertical, verticalSwiping = _props.verticalSwiping, focusOnSelect = _props.focusOnSelect, children = _props.children, dotsRender = _props.dotsRender, triggerType = _props.triggerType;
    var _state = this.state, currentSlide = _state.currentSlide, lazyLoadedList = _state.lazyLoadedList, slideCount = _state.slideCount, slideWidth = _state.slideWidth, slideHeight = _state.slideHeight, trackStyle = _state.trackStyle, listHeight = _state.listHeight, dragging = _state.dragging;
    var trackProps = {
      prefix,
      animation,
      cssEase,
      speed,
      infinite,
      centerMode,
      focusOnSelect: focusOnSelect ? this.selectHandler : null,
      currentSlide,
      lazyLoad,
      lazyLoadedList,
      rtl,
      slideWidth,
      slideHeight,
      slidesToShow,
      slidesToScroll,
      slideCount,
      trackStyle,
      variableWidth,
      vertical,
      verticalSwiping,
      triggerType
    };
    var dotsEle = void 0;
    if (dots === true && slideCount > slidesToShow) {
      var dotProps = {
        prefix,
        rtl,
        dotsClass,
        slideCount,
        slidesToShow,
        currentSlide,
        slidesToScroll,
        dotsDirection,
        changeSlide: this.changeSlide,
        dotsRender,
        triggerType
      };
      dotsEle = React.createElement(Dots, dotProps);
    }
    var prevArrow = void 0, nextArrow = void 0;
    var arrowProps = {
      prefix,
      rtl,
      arrowSize,
      arrowPosition,
      arrowDirection,
      infinite,
      centerMode,
      currentSlide,
      slideCount,
      slidesToShow,
      clickHandler: this.changeSlide
    };
    if (arrows) {
      prevArrow = React.createElement(Arrow, _extends({}, arrowProps, {
        type: "prev",
        "aria-label": "Previous",
        ref: this._instanceRefHandler.bind(this, "pArrow"),
        onMouseEnter: animation ? this.onEnterArrow.bind(this, "prev") : noop$2,
        onMouseLeave: animation ? this.onLeaveArrow.bind(this, "prev") : noop$2
      }), this.props.prevArrow);
      nextArrow = React.createElement(Arrow, _extends({}, arrowProps, {
        type: "next",
        "aria-label": "Next",
        ref: this._instanceRefHandler.bind(this, "nArrow"),
        onMouseEnter: animation ? this.onEnterArrow.bind(this, "next") : noop$2,
        onMouseLeave: animation ? this.onLeaveArrow.bind(this, "next") : noop$2
      }), this.props.nextArrow);
    }
    var verticalHeightStyle = vertical ? {
      height: listHeight
    } : null;
    var centerPaddingStyle = void 0;
    if (centerMode) {
      centerPaddingStyle = vertical ? {padding: centerPadding + " 0px"} : {padding: "0px " + centerPadding};
    }
    return React.createElement("div", {
      className: prefix + "slick-container " + prefix + "slick-initialized",
      onMouseEnter: this.onInnerSliderEnter,
      onMouseLeave: this.onInnerSliderLeave
    }, React.createElement("div", {
      ref: this._instanceRefHandler.bind(this, "list"),
      className: prefix + "slick-list",
      style: _extends({}, verticalHeightStyle, centerPaddingStyle),
      onMouseDown: this.swipeStart,
      onMouseUp: this.swipeEnd,
      onTouchStart: this.swipeStart,
      onTouchEnd: this.swipeEnd,
      onMouseMove: dragging ? this.swipeMove : null,
      onMouseLeave: dragging ? this.swipeEnd : null,
      onTouchMove: dragging ? this.swipeMove : null,
      onTouchCancel: dragging ? this.swipeEnd : null
    }, React.createElement(Track, _extends({
      ref: this._instanceRefHandler.bind(this, "track")
    }, trackProps), children)), prevArrow, nextArrow, dotsEle);
  };
  return InnerSlider2;
}(React.Component), _class$3.propTypes = {
  prefix: propTypes.string,
  animation: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  arrows: propTypes.bool,
  arrowSize: propTypes.oneOf(["medium", "large"]),
  arrowPosition: propTypes.oneOf(["inner", "outer"]),
  arrowDirection: propTypes.oneOf(["hoz", "ver"]),
  centerPadding: propTypes.any,
  children: propTypes.any,
  centerMode: propTypes.bool,
  dots: propTypes.bool,
  dotsDirection: propTypes.oneOf(["hoz", "ver"]),
  dotsClass: propTypes.string,
  focusOnSelect: propTypes.bool,
  cssEase: propTypes.string,
  speed: propTypes.number,
  infinite: propTypes.bool,
  defaultActiveIndex: propTypes.number,
  rtl: propTypes.bool,
  slidesToShow: propTypes.number,
  lazyLoad: propTypes.bool,
  activeIndex: propTypes.number,
  slidesToScroll: propTypes.number,
  variableWidth: propTypes.bool,
  vertical: propTypes.bool,
  verticalSwiping: propTypes.bool,
  prevArrow: propTypes.element,
  nextArrow: propTypes.element,
  dotsRender: propTypes.func,
  triggerType: propTypes.string
}, _class$3.defaultProps = {
  prefix: "next-",
  arrowDirection: "hoz",
  triggerType: "click"
}, _temp$3);
InnerSlider.displayName = "InnerSlider";
_extends(InnerSlider.prototype, helpers);
_extends(InnerSlider.prototype, EventHandlers);
var InnerSlider$1 = polyfill(InnerSlider);
var _class$4, _temp2;
var Slider = (_temp2 = _class$4 = function(_Component) {
  _inherits(Slider2, _Component);
  function Slider2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Slider2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.resize = function() {
      _this.innerSlider.onWindowResized();
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Slider2.prototype.render = function render() {
    var _this2 = this;
    var _props = this.props, prefix = _props.prefix, arrowPosition = _props.arrowPosition, slideDirection = _props.slideDirection, style = _props.style, className = _props.className, children = _props.children;
    var globalProps = {};
    Object.keys(NextConfigProvider.propTypes).forEach(function(key) {
      globalProps[key] = _this2.props[key];
    });
    var sliderProps = obj.pickOthers(["className", "style", "slideDirection"], this.props);
    var slideCount = React.Children.count(children);
    if (slideCount === 0) {
      return null;
    } else if (slideCount === 1) {
      sliderProps.arrows = false;
      sliderProps.autoplay = false;
      sliderProps.draggable = false;
    }
    var clazz = classnames([prefix + "slick", prefix + "slick-" + arrowPosition, prefix + "slick-" + slideDirection], className);
    if (slideDirection === "ver") {
      sliderProps.vertical = true;
      sliderProps.verticalSwiping = true;
    }
    return React.createElement(NextConfigProvider, _extends({}, globalProps, {rtl: false}), React.createElement("div", _extends({
      dir: "ltr",
      className: clazz,
      style
    }, obj.pickOthers(_extends({}, Slider2.propTypes, InnerSlider$1.propTypes), sliderProps)), React.createElement(InnerSlider$1, _extends({
      ref: function ref(InnerSlider2) {
        return _this2.innerSlider = InnerSlider2;
      }
    }, sliderProps))));
  };
  return Slider2;
}(Component), _class$4.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  className: propTypes.any,
  adaptiveHeight: propTypes.bool,
  animation: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  arrows: propTypes.bool,
  arrowSize: propTypes.oneOf(["medium", "large"]),
  arrowPosition: propTypes.oneOf(["inner", "outer"]),
  arrowDirection: propTypes.oneOf(["hoz", "ver"]),
  autoplay: propTypes.bool,
  autoplaySpeed: propTypes.number,
  nextArrow: propTypes.element,
  prevArrow: propTypes.element,
  centerMode: propTypes.bool,
  dots: propTypes.bool,
  dotsDirection: propTypes.oneOf(["hoz", "ver"]),
  dotsClass: propTypes.string,
  dotsRender: propTypes.func,
  draggable: propTypes.bool,
  infinite: propTypes.bool,
  defaultActiveIndex: propTypes.number,
  lazyLoad: propTypes.bool,
  slide: propTypes.string,
  slideDirection: propTypes.oneOf(["hoz", "ver"]),
  slidesToShow: propTypes.number,
  slidesToScroll: propTypes.number,
  speed: propTypes.number,
  activeIndex: propTypes.number,
  triggerType: propTypes.oneOf(["click", "hover"]),
  onChange: propTypes.func,
  onBeforeChange: propTypes.func,
  children: propTypes.any,
  style: propTypes.object,
  centerPadding: propTypes.string,
  cssEase: propTypes.string,
  edgeFriction: propTypes.number,
  focusOnSelect: propTypes.bool,
  pauseOnHover: propTypes.bool,
  swipe: propTypes.bool,
  swipeToSlide: propTypes.bool,
  touchMove: propTypes.bool,
  touchThreshold: propTypes.number,
  useCSS: propTypes.bool,
  variableWidth: propTypes.bool,
  waitForAnimate: propTypes.bool,
  edgeEvent: propTypes.any,
  swipeEvent: propTypes.any
}, _class$4.defaultProps = {
  prefix: "next-",
  animation: "slide",
  arrowSize: "medium",
  arrowPosition: "inner",
  vertical: false,
  verticalSwiping: false,
  dots: true,
  dotsDirection: "hoz",
  arrows: true,
  arrowDirection: "hoz",
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3e3,
  speed: 600,
  adaptiveHeight: false,
  centerMode: false,
  centerPadding: "50px",
  cssEase: "ease",
  draggable: true,
  edgeFriction: 0.35,
  focusOnSelect: false,
  defaultActiveIndex: 0,
  lazyLoad: false,
  pauseOnHover: false,
  rtl: false,
  slide: "div",
  slideDirection: "hoz",
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  variableWidth: false,
  waitForAnimate: true,
  onChange: function onChange() {
  },
  onBeforeChange: function onBeforeChange() {
  },
  edgeEvent: null,
  swipeEvent: null,
  nextArrow: null,
  prevArrow: null,
  style: null,
  dotsRender: null,
  triggerType: "click"
}, _temp2);
Slider.displayName = "Slider";
var NextSlider = NextConfigProvider.config(Slider, {
  exportNames: ["resize"],
  transform: function transform(props, deprecated) {
    if ("fade" in props) {
      deprecated("fade", "animation", "Slider");
      var _props = props, fade = _props.fade, others = _objectWithoutProperties(_props, ["fade"]);
      if (fade) {
        props = _extends({animation: "fade"}, others);
      } else {
        props = others;
      }
    }
    if ("arrowPos" in props) {
      if (props.arrowPos === "inline") {
        deprecated("arrowPos=inline", "arrowPosition=inner", "Slider");
        props.arrowPos = "inner";
      } else {
        deprecated("arrowPos", "arrowPosition", "Slider");
      }
      var _props2 = props, arrowPos = _props2.arrowPos, _others = _objectWithoutProperties(_props2, ["arrowPos"]);
      props = _extends({arrowPosition: arrowPos}, _others);
    }
    ["arrowDirection", "dotsDirection", "slideDirection"].forEach(function(propName) {
      if (props[propName] === "horizontal") {
        deprecated(propName + "=horizontal", propName + "=hoz", "Slider");
        props[propName] = "hoz";
      } else if (props[propName] === "vertical") {
        deprecated(propName + "=vertical", propName + "=ver", "Slider");
        props[propName] = "ver";
      }
    });
    if ("initialSlide" in props) {
      deprecated("initialSlide", "defaultActiveIndex", "Slider");
      var _props3 = props, initialSlide = _props3.initialSlide, _others2 = _objectWithoutProperties(_props3, ["initialSlide"]);
      props = _extends({defaultActiveIndex: initialSlide}, _others2);
    }
    if ("slickGoTo" in props) {
      deprecated("slickGoTo", "activeIndex", "Slider");
      var _props4 = props, slickGoTo = _props4.slickGoTo, _others3 = _objectWithoutProperties(_props4, ["slickGoTo"]);
      props = _extends({activeIndex: slickGoTo}, _others3);
    }
    if ("afterChange" in props) {
      deprecated("afterChange", "onChange", "Slider");
      var _props5 = props, afterChange = _props5.afterChange, _others4 = _objectWithoutProperties(_props5, ["afterChange"]);
      props = _extends({onChange: afterChange}, _others4);
    }
    if ("beforeChange" in props) {
      deprecated("beforeChange", "onBeforeChange", "Slider");
      var _props6 = props, beforeChange = _props6.beforeChange, _others5 = _objectWithoutProperties(_props6, ["beforeChange"]);
      props = _extends({onBeforeChange: beforeChange}, _others5);
    }
    return props;
  }
});
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSlider, {
    slidesToShow: 4,
    arrowPosition: "outer"
  }, /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "1")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "2")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "3")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "4")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "5"))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSlider, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "4")))));
}
const Style = He.div`
  .next-slick .h3,
  .h4 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .next-slick .h4 {
    margin: 0 5px;
    position: relative;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", {
    style: {width: "600px"}
  }, /* @__PURE__ */ createElement(NextSlider, {
    slidesToShow: 4,
    arrowPosition: "outer",
    lazyLoad: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1e3
  }, /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "1")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "2")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "3")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "4")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "5")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "6")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "7")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "8")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "9"))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSlider, {
    speed: 1e3,
    autoplay: true,
    autoplaySpeed: 2e3
  }, /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "1")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "2")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "3")))));
}
const Style$1 = He.div`
  .next-slick .h3,
  .h4 {
    margin: 0 5px;
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const slides = [
  {
    url: "https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png",
    text: "Tape Player Skin Design Competition"
  },
  {
    url: "https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg",
    text: "Mobile Phone Taobao Skin Call"
  },
  {
    url: "https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg",
    text: "Design Enabling Public Welfare"
  },
  {
    url: "https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg",
    text: "Amoy Doll Design Competition"
  }
];
const itemNodes = slides.map((item, index) => /* @__PURE__ */ createElement("div", {
  key: index,
  className: "slider-img-wrapper"
}, /* @__PURE__ */ createElement("img", {
  draggable: false,
  src: item.url,
  alt: item.text
})));
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(NextSlider, null, itemNodes));
}
const Style$2 = He.div`
  .slider-img-wrapper img {
    width: 100%;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const bigSlides = [
  {
    url: "https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png",
    text: "Tape Player Skin Design Competition"
  },
  {
    url: "https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg",
    text: "Mobile Phone Taobao Skin Call"
  },
  {
    url: "https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg",
    text: "Design Enabling Public Welfare"
  },
  {
    url: "https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg",
    text: "Amoy Doll Design Competition"
  }
];
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSlider, null, bigSlides.map((item, index) => /* @__PURE__ */ createElement("div", {
    key: index,
    className: "slider-img-wrapper"
  }, /* @__PURE__ */ createElement("img", {
    src: item.url,
    alt: item.text
  })))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSlider, {
    arrowSize: "large"
  }, bigSlides.map((item, index) => /* @__PURE__ */ createElement("div", {
    key: index,
    className: "slider-img-wrapper"
  }, /* @__PURE__ */ createElement("img", {
    src: item.url,
    alt: item.text
  }))))));
}
const Style$3 = He.div`
  .slider-img-wrapper img {
    width: 100%;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const settings = {
  className: "custom-slide center",
  centerMode: true,
  infinite: true,
  dots: false,
  arrowPosition: "outer",
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500
};
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(NextSlider, {
    ...settings
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "4")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "5")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "6")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "7")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "8")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "9"))));
}
const Style$4 = He.div`
  .custom-slide h3 {
    background: #4f74b3;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }

  .center h3 {
    opacity: 0.8;
    transition: all 300ms ease;
  }

  .center .next-slick-center h3 {
    color: #e67e22;
    opacity: 1;
    transform: scale(1.08);
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const slides$1 = [
  {
    url: "https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png",
    text: "Tape Player Skin Design Competition"
  },
  {
    url: "https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg",
    text: "Mobile Phone Taobao Skin Call"
  },
  {
    url: "https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg",
    text: "Design Enabling Public Welfare"
  },
  {
    url: "https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg",
    text: "Amoy Doll Design Competition"
  }
];
const arrowStyle = {
  display: "block",
  background: "red",
  opacity: 1,
  margin: "0 20px"
};
const CustomNextArrow = (props) => {
  return /* @__PURE__ */ createElement("div", {
    ...props,
    style: arrowStyle
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "arrow-double-right"
  }));
};
const CustomPrevArrow = (props) => {
  return /* @__PURE__ */ createElement("div", {
    ...props,
    style: arrowStyle
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "arrow-double-left"
  }));
};
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(NextSlider, {
    nextArrow: /* @__PURE__ */ createElement(CustomNextArrow, null),
    prevArrow: /* @__PURE__ */ createElement(CustomPrevArrow, null),
    lazyLoad: true
  }, slides$1.map((item, index) => /* @__PURE__ */ createElement("div", {
    key: index,
    className: "slider-img-wrapper"
  }, /* @__PURE__ */ createElement("img", {
    src: item.url,
    alt: item.text
  })))));
}
const Style$5 = He.div`
  .slider-img-wrapper img {
    width: 100%;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const pages = [1, 2, 3, 4];
function Inner({children, ...others}) {
  return /* @__PURE__ */ createElement("div", {
    ...others
  }, children);
}
Inner.propTypes = {
  children: propTypes.any
};
const slider = /* @__PURE__ */ createElement(NextSlider, null, pages.map((page, index) => {
  return /* @__PURE__ */ createElement(Inner, {
    className: "custom-inner",
    key: index
  }, "custom ", page);
}));
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, slider));
}
const Style$6 = He.div`
  .custom-inner {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSlider, {
    dotsDirection: "hoz",
    arrows: false
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "4"))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSlider, {
    dotsDirection: "ver",
    arrows: false
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "4")))));
}
const Style$7 = He.div`
  .next-slick .h3,
  .h4 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .next-slick .h4 {
    margin-right: 5px;
    position: relative;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSlider, {
    dotsClass: "dots-cust",
    dotsDirection: "hoz",
    arrows: false,
    dotsRender: (index, current) => {
      console.log("current", current);
      return /* @__PURE__ */ createElement("a", null, index);
    }
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "0")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "4")))));
}
const Style$8 = He.div`
  .next-slick .h3,
  .h4 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .next-slick .h4 {
    margin-right: 5px;
    position: relative;
  }

  .dots-cust {
    color: #fff;
  }
  .dots-cust a {
    dispaly: block;
    background: rgba(200, 200, 200, 0.4);
    padding: 0 4px;
  }
  .dots-cust .active a {
    color: rgb(70, 188, 2);
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
function DemoComponent$9() {
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSlider, {
    triggerType: "click",
    arrows: false
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "4"))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSlider, {
    triggerType: "hover",
    arrows: false
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "4")))));
}
const Style$9 = He.div`
  .next-slick .h3,
  .h4 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .next-slick .h4 {
    margin-right: 5px;
    position: relative;
  }
`;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const settings$1 = {
  arrowPosition: "outer",
  dots: false,
  animation: "fade",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "custom-slide",
  onChange: function(index) {
    console.log("change Slide index", index);
  }
};
function DemoComponent$a() {
  return /* @__PURE__ */ createElement(Style$a, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSlider, {
    ...settings$1
  }, [1, 2, 3, 4, 5, 6].map(function(d) {
    return /* @__PURE__ */ createElement("div", {
      key: d
    }, /* @__PURE__ */ createElement("h3", {
      onClick: () => console.log(d)
    }, d));
  })), /* @__PURE__ */ createElement(NextSlider, {
    ...settings$1
  }, [1, 2, 3, 4, 5, 6].map(function(d) {
    return /* @__PURE__ */ createElement("div", {
      key: d
    }, /* @__PURE__ */ createElement("a", {
      href: `https://www.taobao.com/?some=${d}`,
      target: "_blank"
    }, d));
  }))));
}
const Style$a = He.div`
  .custom-slide h3,
  .custom-slide a {
    display: block;
    background: #4f74b3;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
`;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
function DemoComponent$b() {
  return /* @__PURE__ */ createElement(Style$b, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSlider, {
    slidesToShow: 4,
    arrowPosition: "outer",
    infinite: false,
    dots: false
  }, /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "1")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "2")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "3")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "4")), /* @__PURE__ */ createElement("div", {
    style: {width: "25%"}
  }, /* @__PURE__ */ createElement("h4", {
    className: "h4"
  }, "5"))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSlider, {
    infinite: false,
    lazyLoad: true
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, "4")))));
}
const Style$b = He.div`
  .next-slick .h3,
  .h4 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .next-slick .h4 {
    margin: 0 5px;
    position: relative;
  }
`;
var m11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$b
});
const slides$2 = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => /* @__PURE__ */ createElement("div", {
  style: {width: "25%"},
  key: item
}, /* @__PURE__ */ createElement("h4", {
  className: "h4"
}, item)));
function DemoComponent$c() {
  return /* @__PURE__ */ createElement(Style$c, null, /* @__PURE__ */ createElement("div", {
    style: {width: "600px"}
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "slide one picture one at a time"), /* @__PURE__ */ createElement(NextSlider, {
    slidesToShow: 4,
    arrowPosition: "outer",
    dots: false,
    lazyLoad: true
  }, slides$2), /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "slide multiple picture one at a time"), /* @__PURE__ */ createElement(NextSlider, {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrowPosition: "outer",
    lazyLoad: true,
    dots: false
  }, slides$2)));
}
const Style$c = He.div`
  .next-slick .h3,
  .h4 {
    margin: 0 5px;
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 20px 0 10px 0;
  }
`;
var m12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$c
});
const settings$2 = {
  className: "custom-slide",
  arrowPosition: "outer",
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2e3,
  pauseOnHover: true
};
function DemoComponent$d() {
  return /* @__PURE__ */ createElement(Style$d, null, /* @__PURE__ */ createElement(NextSlider, {
    ...settings$2
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "4")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "5")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "6")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "7")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "8")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "9"))));
}
const Style$d = He.div`
  .custom-slide h3 {
    background: #4f74b3;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
`;
var m13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$d
});
const slides$3 = [
  {
    url: "https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png",
    text: "Tape Player Skin Design Competition"
  },
  {
    url: "https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg",
    text: "Mobile Phone Taobao Skin Call"
  },
  {
    url: "https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg",
    text: "Design Enabling Public Welfare"
  },
  {
    url: "https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg",
    text: "Amoy Doll Design Competition"
  }
];
class SlickGoTo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e) {
    this.setState({
      index: parseInt(e.target.value)
    });
  }
  render() {
    const settings2 = {
      dots: false,
      infinite: true,
      activeIndex: this.state.index
    };
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "demo-item-title"
    }, "Pull the scroll bar to switch:"), /* @__PURE__ */ createElement("input", {
      onChange: this.changeHandler,
      defaultValue: 0,
      type: "range",
      min: 0,
      max: 3
    }), /* @__PURE__ */ createElement(NextSlider, {
      ...settings2
    }, slides$3.map((item, index) => /* @__PURE__ */ createElement("div", {
      key: index,
      className: "slider-img-wrapper"
    }, /* @__PURE__ */ createElement("img", {
      src: item.url,
      alt: item.text
    })))));
  }
}
function DemoComponent$e() {
  return /* @__PURE__ */ createElement(Style$e, null, /* @__PURE__ */ createElement(SlickGoTo, null));
}
const Style$e = He.div`
  .slider-img-wrapper img {
    width: 100%;
  }

  .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 20px 0 10px 0;
  }
`;
var m14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$e
});
const settings$3 = {
  className: "custom-slide",
  arrowPosition: "outer",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  onChange: function(index) {
    console.log("change Slide index", index);
  }
};
function DemoComponent$f() {
  return /* @__PURE__ */ createElement(Style$f, null, /* @__PURE__ */ createElement(NextSlider, {
    ...settings$3
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "4")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "5")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "6")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "7")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "8")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "9"))));
}
const Style$f = He.div`
  .custom-slide h3 {
    background: #4f74b3;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
`;
var m15 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$f
});
function DemoComponent$g() {
  return /* @__PURE__ */ createElement(Style$g, null, /* @__PURE__ */ createElement("div", {
    style: {width: "200px"}
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Vertical multi-picture mode"), /* @__PURE__ */ createElement(NextSlider, {
    slideDirection: "ver",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrowPosition: "inner",
    arrowDirection: "ver",
    className: "ver-slick"
  }, [1, 2, 3, 4, 5].map((item, index) => /* @__PURE__ */ createElement("div", {
    key: index,
    className: "custom-slider",
    style: {border: "1px solid transparent"}
  }, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, item)))), /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Vertical single-picture mode"), /* @__PURE__ */ createElement(NextSlider, {
    slideDirection: "ver",
    dots: false,
    arrowPosition: "inner",
    arrowDirection: "ver",
    className: "ver-slick"
  }, [1, 2, 3, 4, 5].map((item, index) => /* @__PURE__ */ createElement("div", {
    key: index,
    className: "custom-slider"
  }, /* @__PURE__ */ createElement("h3", {
    className: "h3"
  }, item))))));
}
const Style$g = He.div`
  .ver-slick .h3 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 20px 0 10px 0;
  }
`;
var m16 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$g
});
const slides$4 = [
  {
    url: "https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png",
    text: "Tape Player Skin Design Competition"
  },
  {
    url: "https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg",
    text: "Mobile Phone Taobao Skin Call"
  },
  {
    url: "https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg",
    text: "Design Enabling Public Welfare"
  },
  {
    url: "https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg",
    text: "Amoy Doll Design Competition"
  }
];
const dialogStyle = {
  width: "800px"
};
class FlappySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.setVisible = this.setVisible.bind(this);
  }
  setVisible() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "demo-wrapper"
    }, /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.setVisible
    }, "Marquee Banner"), /* @__PURE__ */ createElement(exported$1, {
      visible: this.state.visible,
      title: "Alibaba.com",
      footer: false,
      style: dialogStyle,
      animation: false,
      onClose: this.setVisible
    }, /* @__PURE__ */ createElement(NextSlider, null, this.props.slides.map((item, index) => /* @__PURE__ */ createElement("div", {
      key: index,
      className: "slider-img-wrapper"
    }, /* @__PURE__ */ createElement("img", {
      key: index,
      src: item.url,
      alt: item.text
    }))))));
  }
}
FlappySlider.propTypes = {
  slides: propTypes.array
};
function DemoComponent$h() {
  return /* @__PURE__ */ createElement(Style$h, null, /* @__PURE__ */ createElement(FlappySlider, {
    slides: slides$4
  }));
}
const Style$h = He.div`
  .slider-img-wrapper img {
    width: 100%;
  }
`;
var m17 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$h
});
const {Option} = Select;
class SliderWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false,
      autoplaySpeed: 1e3
    };
  }
  onSelectAutoplay(value) {
    this.setState({autoplay: value});
  }
  onSelectAutoplaySpeed(value) {
    this.setState({autoplaySpeed: value});
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Select, {
      placeholder: "Autoplay",
      onChange: this.onSelectAutoplay.bind(this)
    }, /* @__PURE__ */ createElement(Option, {
      value: true
    }, "True"), /* @__PURE__ */ createElement(Option, {
      value: false
    }, "False")), "  ", /* @__PURE__ */ createElement(Select, {
      placeholder: "Autoplay Speed",
      onChange: this.onSelectAutoplaySpeed.bind(this)
    }, /* @__PURE__ */ createElement(Option, {
      value: 1e3
    }, "1 second"), /* @__PURE__ */ createElement(Option, {
      value: 2e3
    }, "2 seconds"), /* @__PURE__ */ createElement(Option, {
      value: 3e3
    }, "3 seconds")), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSlider, {
      autoplay: this.state.autoplay,
      autoplaySpeed: this.state.autoplaySpeed
    }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
      className: "h3"
    }, "1")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
      className: "h3"
    }, "2")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
      className: "h3"
    }, "3")), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", {
      className: "h3"
    }, "4"))));
  }
}
function DemoComponent$i() {
  return /* @__PURE__ */ createElement(Style$i, null, /* @__PURE__ */ createElement(SliderWrapper, null));
}
const Style$i = He.div`
  .next-slick .h3,
  .h4 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
var m18 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$i
});
const settings$4 = {
  className: "custom-slide variable-width",
  arrowPosition: "outer",
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
};
function DemoComponent$j() {
  return /* @__PURE__ */ createElement(Style$j, null, /* @__PURE__ */ createElement(NextSlider, {
    ...settings$4
  }, /* @__PURE__ */ createElement("div", {
    style: {width: 100}
  }, /* @__PURE__ */ createElement("p", null, "100")), /* @__PURE__ */ createElement("div", {
    style: {width: 200}
  }, /* @__PURE__ */ createElement("p", null, "200")), /* @__PURE__ */ createElement("div", {
    style: {width: 75}
  }, /* @__PURE__ */ createElement("p", null, "75")), /* @__PURE__ */ createElement("div", {
    style: {width: 300}
  }, /* @__PURE__ */ createElement("p", null, "300")), /* @__PURE__ */ createElement("div", {
    style: {width: 225}
  }, /* @__PURE__ */ createElement("p", null, "225")), /* @__PURE__ */ createElement("div", {
    style: {width: 175}
  }, /* @__PURE__ */ createElement("p", null, "175"))));
}
const Style$j = He.div`
  .variable-width .next-slick-slide p {
    background: #4f74b3;
    height: 100px;
    color: #fff;
    margin: 5px;
    line-height: 100px;
    text-align: center;
  }
`;
var m19 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$j
});
const modules = {};
modules["_arrow-position"] = m0;
modules["_autoplay"] = m1;
modules["_basic"] = m2;
modules["_button-size"] = m3;
modules["_center-mode"] = m4;
modules["_custom-arrow"] = m5;
modules["_custom-slide"] = m6;
modules["_dots-direction"] = m7;
modules["_dots-render"] = m8;
modules["_dots-triggerType"] = m9;
modules["_fade"] = m10;
modules["_infinite"] = m11;
modules["_multiple"] = m12;
modules["_pause-on-hover"] = m13;
modules["_slick-goto"] = m14;
modules["_slide-change-hook"] = m15;
modules["_slide-direction"] = m16;
modules["_slider-with-dialog"] = m17;
modules["_slider-wrapper"] = m18;
modules["_variable-width"] = m19;
export default modules;
