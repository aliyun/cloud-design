import {R as React, r as reactIs, h as hoistNonReactStatics_cjs, u as useContext, c as createElement, i as _typeof, e as _extends} from "./index.e76f7845.js";
function stylis_min(W2) {
  function M2(d, c, e, h, a) {
    for (var m = 0, b2 = 0, v2 = 0, n = 0, q2, g2, x2 = 0, K2 = 0, k2, u = k2 = q2 = 0, l = 0, r = 0, I2 = 0, t = 0, B3 = e.length, J2 = B3 - 1, y, f = "", p = "", F3 = "", G3 = "", C; l < B3; ) {
      g2 = e.charCodeAt(l);
      l === J2 && b2 + n + v2 + m !== 0 && (b2 !== 0 && (g2 = b2 === 47 ? 10 : 47), n = v2 = m = 0, B3++, J2++);
      if (b2 + n + v2 + m === 0) {
        if (l === J2 && (0 < r && (f = f.replace(N2, "")), 0 < f.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e.charAt(l);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f = f.trim();
            q2 = f.charCodeAt(0);
            k2 = 1;
            for (t = ++l; l < B3; ) {
              switch (g2 = e.charCodeAt(l)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J2; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (g2 === 42 && e.charCodeAt(u - 1) === 42 && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g2 === 47) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }
                        l = u;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l++ < J2 && e.charCodeAt(l) !== g2; ) {
                  }
              }
              if (k2 === 0)
                break;
              l++;
            }
            k2 = e.substring(t, l);
            q2 === 0 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r && (f = f.replace(N2, ""));
                g2 = f.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;
                  default:
                    r = O2;
                }
                k2 = M2(c, r, k2, g2, a + 1);
                t = k2.length;
                0 < A2 && (r = X2(O2, f, I2), C = H2(3, k2, r, c, D2, z2, t, g2, a, h), f = r.join(""), C !== void 0 && (t = (k2 = C.trim()).length) === 0 && (g2 = 0, k2 = ""));
                if (0 < t)
                  switch (g2) {
                    case 115:
                      f = f.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f + "{" + k2 + "}";
                      break;
                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k2 = f + "{" + k2 + "}";
                      k2 = w2 === 1 || w2 === 2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f + k2, h === 112 && (k2 = (p += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c, X2(c, f, I2), k2, h, a + 1);
            }
            F3 += k2;
            k2 = I2 = r = u = q2 = 0;
            f = "";
            g2 = e.charCodeAt(++l);
            break;
          case 125:
          case 59:
            f = (0 < r ? f.replace(N2, "") : f).trim();
            if (1 < (t = f.length))
              switch (u === 0 && (q2 = f.charCodeAt(0), q2 === 45 || 96 < q2 && 123 > q2) && (t = (f = f.replace(" ", ":")).length), 0 < A2 && (C = H2(1, f, c, d, D2, z2, p.length, h, a, h)) !== void 0 && (t = (f = C.trim()).length) === 0 && (f = "\0\0"), q2 = f.charCodeAt(0), g2 = f.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (g2 === 105 || g2 === 99) {
                    G3 += f + e.charAt(l);
                    break;
                  }
                default:
                  f.charCodeAt(t - 1) !== 58 && (p += P(f, q2, g2, f.charCodeAt(2)));
              }
            I2 = r = u = q2 = 0;
            f = "";
            g2 = e.charCodeAt(++l);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          b2 === 47 ? b2 = 0 : 1 + q2 === 0 && h !== 107 && 0 < f.length && (r = 1, f += "\0");
          0 < A2 * Y2 && H2(0, f, c, d, D2, z2, p.length, h, a, h);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (b2 + n + v2 + m === 0) {
            z2++;
            break;
          }
        default:
          z2++;
          y = e.charAt(l);
          switch (g2) {
            case 9:
            case 32:
              if (n + m + b2 === 0)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y = "";
                    break;
                  default:
                    g2 !== 32 && (y = " ");
                }
              break;
            case 0:
              y = "\\0";
              break;
            case 12:
              y = "\\f";
              break;
            case 11:
              y = "\\v";
              break;
            case 38:
              n + b2 + m === 0 && (r = I2 = 1, y = "\f" + y);
              break;
            case 108:
              if (n + b2 + m + E2 === 0 && 0 < u)
                switch (l - u) {
                  case 2:
                    x2 === 112 && e.charCodeAt(l - 3) === 58 && (E2 = x2);
                  case 8:
                    K2 === 111 && (E2 = K2);
                }
              break;
            case 58:
              n + b2 + m === 0 && (u = l);
              break;
            case 44:
              b2 + v2 + n + m === 0 && (r = 1, y += "\r");
              break;
            case 34:
            case 39:
              b2 === 0 && (n = n === g2 ? 0 : n === 0 ? g2 : n);
              break;
            case 91:
              n + b2 + v2 === 0 && m++;
              break;
            case 93:
              n + b2 + v2 === 0 && m--;
              break;
            case 41:
              n + b2 + m === 0 && v2--;
              break;
            case 40:
              if (n + b2 + m === 0) {
                if (q2 === 0)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              b2 + v2 + n + m + u + k2 === 0 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n + m + v2))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e.charCodeAt(l + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t = l, b2 = 42;
                    }
                    break;
                  case 42:
                    g2 === 47 && x2 === 42 && t + 2 !== l && (e.charCodeAt(t + 2) === 33 && (p += e.substring(t, l + 1)), y = "", b2 = 0);
                }
          }
          b2 === 0 && (f += y);
      }
      K2 = x2;
      x2 = g2;
      l++;
    }
    t = p.length;
    if (0 < t) {
      r = c;
      if (0 < A2 && (C = H2(2, p, r, d, D2, z2, t, h, a, h), C !== void 0 && (p = C).length === 0))
        return G3 + p + F3;
      p = r.join(",") + "{" + p + "}";
      if (w2 * E2 !== 0) {
        w2 !== 2 || L2(p, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;
          case 112:
            p = p.replace(Q2, "::-webkit-input-$1") + p.replace(Q2, "::-moz-$1") + p.replace(Q2, ":-ms-input-$1") + p;
        }
        E2 = 0;
      }
    }
    return G3 + p + F3;
  }
  function X2(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length, m = d.length;
    switch (m) {
      case 0:
      case 1:
        var b2 = 0;
        for (d = m === 0 ? "" : d[0] + " "; b2 < a; ++b2) {
          c[b2] = Z2(d, c[b2], e).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c = []; b2 < a; ++b2) {
          for (var n = 0; n < m; ++n) {
            c[v2++] = Z2(d[n] + " ", h[b2], e).trim();
          }
        }
    }
    return c;
  }
  function Z2(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c.replace(F2, "$1" + d.trim());
      case 58:
        return d.trim() + c.replace(F2, "$1" + d.trim());
      default:
        if (0 < 1 * e && 0 < c.indexOf("\f"))
          return c.replace(F2, (d.charCodeAt(0) === 58 ? "" : "$1") + d.trim());
    }
    return d + c;
  }
  function P(d, c, e, h) {
    var a = d + ";", m = 2 * c + 3 * e + 4 * h;
    if (m === 944) {
      d = a.indexOf(":", 9) + 1;
      var b2 = a.substring(d, a.length - 1).trim();
      b2 = a.substring(0, d).trim() + b2 + ";";
      return w2 === 1 || w2 === 2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (w2 === 0 || w2 === 2 && !L2(a, 1))
      return a;
    switch (m) {
      case 1015:
        return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (a.charCodeAt(8) === 45)
          return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(ja, "$1-webkit-$2") + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45)
          switch (a.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
            case 115:
              return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
            case 98:
              return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
          }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99)
          break;
        b2 = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a + "-ms-flex-pack" + b2 + a;
      case 1005:
        return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;
      case 1e3:
        b2 = a.substring(13).trim();
        c = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c)) {
          case 226:
            b2 = a.replace(G2, "tb");
            break;
          case 232:
            b2 = a.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a.replace(G2, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + b2 + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c = (a = d).length - 10;
        b2 = (a.charCodeAt(c) === 33 ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();
        switch (m = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8))
              break;
          case 115:
            a = a.replace(b2, "-webkit-" + b2) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(b2, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a.replace(b2, "-webkit-" + b2) + ";" + a.replace(b2, "-ms-" + b2 + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (a.charCodeAt(5) === 45)
          switch (a.charCodeAt(6)) {
            case 105:
              return b2 = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a;
            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la.test(d) === true)
          return (b2 = d.substring(d.indexOf(":") + 1)).charCodeAt(0) === 115 ? P(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch") : a.replace(b2, "-webkit-" + b2) + a.replace(b2, "-moz-" + b2.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, e + h === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
    }
    return a;
  }
  function L2(d, c) {
    var e = d.indexOf(c === 1 ? ":" : "{"), h = d.substring(0, c !== 3 ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R2(c !== 2 ? h : h.replace(na, "$1"), e, c);
  }
  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
  }
  function H2(d, c, e, h, a, m, b2, v2, n, q2) {
    for (var g2 = 0, x2 = c, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d, x2, e, h, a, m, b2, v2, n, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c)
      return x2;
  }
  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if (typeof d === "function")
          S2[A2++] = d;
        else if (typeof d === "object")
          for (var c = 0, e = d.length; c < e; ++c) {
            T(d[c]);
          }
        else
          Y2 = !!d | 0;
    }
    return T;
  }
  function U2(d) {
    d = d.prefix;
    d !== void 0 && (R2 = null, d ? typeof d !== "function" ? w2 = 1 : (w2 = 2, R2 = d) : w2 = 0);
    return U2;
  }
  function B2(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V2 = e;
    e = [V2];
    if (0 < A2) {
      var h = H2(-1, c, e, e, D2, z2, 0, 0, 0, 0);
      h !== void 0 && typeof h === "string" && (c = h);
    }
    var a = M2(O2, e, c, 0, 0);
    0 < A2 && (h = H2(-2, a, e, e, D2, z2, a.length, 0, 0, 0), h !== void 0 && (a = h));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a;
  }
  var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R2 = null, Y2 = 0, V2 = "";
  B2.use = T;
  B2.set = U2;
  W2 !== void 0 && U2(W2);
  return B2;
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index = memoize(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
function v() {
  return (v = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var g = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}, S = function(t) {
  return t !== null && typeof t == "object" && (t.toString ? t.toString() : Object.prototype.toString.call(t)) === "[object Object]" && !reactIs.typeOf(t);
}, w = Object.freeze([]), b = Object.freeze({});
function N(e) {
  return typeof e == "function";
}
function E(e) {
  return e.displayName || e.name || "Component";
}
function _(e) {
  return e && typeof e.styledComponentId == "string";
}
var I = typeof process != "undefined" && {}.SC_ATTR || "data-styled", A = typeof window != "undefined" && "HTMLElement" in window, O = typeof SC_DISABLE_SPEEDY == "boolean" && SC_DISABLE_SPEEDY || typeof process != "undefined" && {}.SC_DISABLE_SPEEDY || false, R = function() {
  return typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : null;
};
function D(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var k = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(e2) {
    for (var t2 = e2.childNodes, n2 = t2.length; n2 >= 0; n2--) {
      var r2 = t2[n2];
      if (r2 && r2.nodeType === 1 && r2.hasAttribute(I))
        return r2;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(I, "active"), r.setAttribute("data-styled-version", "5.2.0");
  var s = R();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, x = function() {
  function e(e2) {
    var t2 = this.element = k(e2);
    t2.appendChild(document.createTextNode("")), this.sheet = function(e3) {
      if (e3.sheet)
        return e3.sheet;
      for (var t3 = document.styleSheets, n = 0, r = t3.length; n < r; n++) {
        var o = t3[n];
        if (o.ownerNode === e3)
          return o;
      }
      D(17);
    }(t2), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(e2, t2) {
    try {
      return this.sheet.insertRule(t2, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }, t.deleteRule = function(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }, t.getRule = function(e2) {
    var t2 = this.sheet.cssRules[e2];
    return t2 !== void 0 && typeof t2.cssText == "string" ? t2.cssText : "";
  }, e;
}(), V = function() {
  function e(e2) {
    var t2 = this.element = k(e2);
    this.nodes = t2.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(e2, t2) {
    if (e2 <= this.length && e2 >= 0) {
      var n = document.createTextNode(t2), r = this.nodes[e2];
      return this.element.insertBefore(n, r || null), this.length++, true;
    }
    return false;
  }, t.deleteRule = function(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }, t.getRule = function(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }, e;
}(), M = function() {
  function e(e2) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(e2, t2) {
    return e2 <= this.length && (this.rules.splice(e2, 0, t2), this.length++, true);
  }, t.deleteRule = function(e2) {
    this.rules.splice(e2, 1), this.length--;
  }, t.getRule = function(e2) {
    return e2 < this.length ? this.rules[e2] : "";
  }, e;
}(), z = function() {
  function e(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(e2) {
    for (var t2 = 0, n = 0; n < e2; n++)
      t2 += this.groupSizes[n];
    return t2;
  }, t.insertRules = function(e2, t2) {
    if (e2 >= this.groupSizes.length) {
      for (var n = this.groupSizes, r = n.length, o = r; e2 >= o; )
        (o <<= 1) < 0 && D(16, "" + e2);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
      for (var i = r; i < o; i++)
        this.groupSizes[i] = 0;
    }
    for (var s = this.indexOfGroup(e2 + 1), a = 0, c = t2.length; a < c; a++)
      this.tag.insertRule(s, t2[a]) && (this.groupSizes[e2]++, s++);
  }, t.clearGroup = function(e2) {
    if (e2 < this.length) {
      var t2 = this.groupSizes[e2], n = this.indexOfGroup(e2), r = n + t2;
      this.groupSizes[e2] = 0;
      for (var o = n; o < r; o++)
        this.tag.deleteRule(n);
    }
  }, t.getGroup = function(e2) {
    var t2 = "";
    if (e2 >= this.length || this.groupSizes[e2] === 0)
      return t2;
    for (var n = this.groupSizes[e2], r = this.indexOfGroup(e2), o = r + n, i = r; i < o; i++)
      t2 += this.tag.getRule(i) + "/*!sc*/\n";
    return t2;
  }, e;
}(), G = new Map(), F = new Map(), B = 1, L = function(e) {
  if (G.has(e))
    return G.get(e);
  var t = B++;
  return G.set(e, t), F.set(t, e), t;
}, q = function(e) {
  return F.get(e);
}, H = function(e, t) {
  t >= B && (B = t + 1), G.set(e, t), F.set(t, e);
}, $ = "style[" + I + '][data-styled-version="5.2.0"]', Y = new RegExp("^" + I + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), W = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(t, r);
}, U = function(e, t) {
  for (var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, i = n.length; o < i; o++) {
    var s = n[o].trim();
    if (s) {
      var a = s.match(Y);
      if (a) {
        var c = 0 | parseInt(a[1], 10), u = a[2];
        c !== 0 && (H(u, c), W(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
      } else
        r.push(s);
    }
  }
}, J = A, X = {isServer: !A, useCSSOMInjection: !O}, Z = function() {
  function e(e2, t2, n) {
    e2 === void 0 && (e2 = X), t2 === void 0 && (t2 = {}), this.options = v({}, X, {}, e2), this.gs = t2, this.names = new Map(n), !this.options.isServer && A && J && (J = false, function(e3) {
      for (var t3 = document.querySelectorAll($), n2 = 0, r = t3.length; n2 < r; n2++) {
        var o = t3[n2];
        o && o.getAttribute(I) !== "active" && (U(e3, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }
  e.registerId = function(e2) {
    return L(e2);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(t2, n) {
    return n === void 0 && (n = true), new e(v({}, this.options, {}, t2), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (n = (t2 = this.options).isServer, r = t2.useCSSOMInjection, o = t2.target, e2 = n ? new M(o) : r ? new x(o) : new V(o), new z(e2)));
    var e2, t2, n, r, o;
  }, t.hasNameForId = function(e2, t2) {
    return this.names.has(e2) && this.names.get(e2).has(t2);
  }, t.registerName = function(e2, t2) {
    if (L(e2), this.names.has(e2))
      this.names.get(e2).add(t2);
    else {
      var n = new Set();
      n.add(t2), this.names.set(e2, n);
    }
  }, t.insertRules = function(e2, t2, n) {
    this.registerName(e2, t2), this.getTag().insertRules(L(e2), n);
  }, t.clearNames = function(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }, t.clearRules = function(e2) {
    this.getTag().clearGroup(L(e2)), this.clearNames(e2);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(e2) {
      for (var t2 = e2.getTag(), n = t2.length, r = "", o = 0; o < n; o++) {
        var i = q(o);
        if (i !== void 0) {
          var s = e2.names.get(i), a = t2.getGroup(o);
          if (s !== void 0 && a.length !== 0) {
            var c = I + ".g" + o + '[id="' + i + '"]', u = "";
            s !== void 0 && s.forEach(function(e3) {
              e3.length > 0 && (u += e3 + ",");
            }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
          }
        }
      }
      return r;
    }(this);
  }, e;
}(), K = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Q = function(e) {
  return K(5381, e);
}, ee = /^\s*\/\/.*$/gm, te = [":", "[", ".", "#"];
function ne(e) {
  var t, n, r, o, i = e === void 0 ? b : e, s = i.options, a = s === void 0 ? b : s, c = i.plugins, u = c === void 0 ? w : c, l = new stylis_min(a), d = [], h = function(e2) {
    function t2(t3) {
      if (t3)
        try {
          e2(t3 + "}");
        } catch (e3) {
        }
    }
    return function(n2, r2, o2, i2, s2, a2, c2, u2, l2, d2) {
      switch (n2) {
        case 1:
          if (l2 === 0 && r2.charCodeAt(0) === 64)
            return e2(r2 + ";"), "";
          break;
        case 2:
          if (u2 === 0)
            return r2 + "/*|*/";
          break;
        case 3:
          switch (u2) {
            case 102:
            case 112:
              return e2(o2[0] + r2), "";
            default:
              return r2 + (d2 === 0 ? "/*|*/" : "");
          }
        case -2:
          r2.split("/*|*/}").forEach(t2);
      }
    };
  }(function(e2) {
    d.push(e2);
  }), f = function(e2, r2, i2) {
    return r2 === 0 && te.includes(i2[n.length]) || i2.match(o) ? e2 : "." + t;
  };
  function m(e2, i2, s2, a2) {
    a2 === void 0 && (a2 = "&");
    var c2 = e2.replace(ee, ""), u2 = i2 && s2 ? s2 + " " + i2 + " { " + c2 + " }" : c2;
    return t = a2, n = i2, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(s2 || !i2 ? "" : i2, u2);
  }
  return l.use([].concat(u, [function(e2, t2, o2) {
    e2 === 2 && o2.length && o2[0].lastIndexOf(n) > 0 && (o2[0] = o2[0].replace(r, f));
  }, h, function(e2) {
    if (e2 === -2) {
      var t2 = d;
      return d = [], t2;
    }
  }])), m.hash = u.length ? u.reduce(function(e2, t2) {
    return t2.name || D(15), K(e2, t2.name);
  }, 5381).toString() : "", m;
}
var re = React.createContext(), oe = re.Consumer, ie = React.createContext(), se = (ie.Consumer, new Z()), ae = ne();
function ce() {
  return useContext(re) || se;
}
function ue() {
  return useContext(ie) || ae;
}
var de = function() {
  function e(e2, t) {
    var n = this;
    this.inject = function(e3, t2) {
      t2 === void 0 && (t2 = ae);
      var r = n.name + t2.hash;
      e3.hasNameForId(n.id, r) || e3.insertRules(n.id, r, t2(n.rules, r, "@keyframes"));
    }, this.toString = function() {
      return D(12, String(n.name));
    }, this.name = e2, this.id = "sc-keyframes-" + e2, this.rules = t;
  }
  return e.prototype.getName = function(e2) {
    return e2 === void 0 && (e2 = ae), this.name + e2.hash;
  }, e;
}(), he = /([A-Z])/, pe = new RegExp(he, "g"), fe = /^ms-/, me = function(e) {
  return "-" + e.toLowerCase();
};
function ye(e) {
  return he.test(e) ? e.replace(pe, me).replace(fe, "-ms-") : e;
}
var ve = function(e) {
  return e == null || e === false || e === "";
};
function ge(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var i, s = [], a = 0, c = e.length; a < c; a += 1)
      (i = ge(e[a], n, r, o)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (ve(e))
    return "";
  if (_(e))
    return "." + e.styledComponentId;
  if (N(e)) {
    if (typeof (l = e) != "function" || l.prototype && l.prototype.isReactComponent || !n)
      return e;
    var u = e(n);
    return ge(u, n, r, o);
  }
  var l;
  return e instanceof de ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e2(t, n2) {
    var r2, o2, i2 = [];
    for (var s2 in t)
      t.hasOwnProperty(s2) && !ve(t[s2]) && (S(t[s2]) ? i2.push.apply(i2, e2(t[s2], s2)) : N(t[s2]) ? i2.push(ye(s2) + ":", t[s2], ";") : i2.push(ye(s2) + ": " + (r2 = s2, (o2 = t[s2]) == null || typeof o2 == "boolean" || o2 === "" ? "" : typeof o2 != "number" || o2 === 0 || r2 in unitlessKeys ? String(o2).trim() : o2 + "px") + ";"));
    return n2 ? [n2 + " {"].concat(i2, ["}"]) : i2;
  }(e) : e.toString();
}
function Se(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return N(e) || S(e) ? ge(g(w, [e].concat(n))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ge(g(e, n));
}
var we = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, be = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ne(e, t, n) {
  var r = e[n];
  we(t) && we(r) ? Ee(r, t) : e[n] = t;
}
function Ee(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var s = i[o];
    if (we(s))
      for (var a in s)
        be(a) && Ne(e, s[a], a);
  }
  return e;
}
var _e = /(a)(d)/gi, Ie = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ce(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Ie(t % 52) + n;
  return (Ie(t % 52) + n).replace(_e, "$1-$2");
}
function Ae(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (N(n) && !_(n))
      return false;
  }
  return true;
}
var Oe = Q("5.2.0"), Pe = function() {
  function e(e2, t, n) {
    this.rules = e2, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Ae(e2), this.componentId = t, this.baseHash = K(Oe, t), this.baseStyle = n, Z.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(e2, t, n) {
    var r = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e2, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var i = ge(this.rules, e2, t, n).join(""), s = Ce(K(this.baseHash, i.length) >>> 0);
        if (!t.hasNameForId(r, s)) {
          var a = n(i, "." + s, void 0, r);
          t.insertRules(r, s, a);
        }
        o.push(s), this.staticRulesId = s;
      }
    else {
      for (var c = this.rules.length, u = K(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          l += h, false;
        else if (h) {
          var p = ge(h, e2, t, n), f = Array.isArray(p) ? p.join("") : p;
          u = K(u, f + d), l += f;
        }
      }
      if (l) {
        var m = Ce(u >>> 0);
        if (!t.hasNameForId(r, m)) {
          var y = n(l, "." + m, void 0, r);
          t.insertRules(r, m, y);
        }
        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(), De = function(e, t, n) {
  return n === void 0 && (n = b), e.theme !== n.theme && e.theme || t || n.theme;
}, ke = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, xe = /(^-|-$)/g;
function Ve(e) {
  return e.replace(ke, "-").replace(xe, "");
}
function Me(e) {
  return typeof e == "string" && true;
}
var ze = function(e) {
  return Ce(Q(e) >>> 0);
}, Ge = React.createContext(), Fe = Ge.Consumer;
var Le = {};
function qe(e, t, n) {
  var o = _(e), s = !Me(e), a = t.displayName, c = a === void 0 ? function(e2) {
    return Me(e2) ? "styled." + e2 : "Styled(" + E(e2) + ")";
  }(e) : a, d = t.componentId, h = d === void 0 ? function(e2, t2) {
    var n2 = typeof e2 != "string" ? "sc" : Ve(e2);
    Le[n2] = (Le[n2] || 0) + 1;
    var r = n2 + "-" + ze("5.2.0" + n2 + Le[n2]);
    return t2 ? t2 + "-" + r : r;
  }(t.displayName, t.parentComponentId) : d, p = t.attrs, f = p === void 0 ? w : p, g2 = t.displayName && t.componentId ? Ve(t.displayName) + "-" + t.componentId : t.componentId || h, S2 = o && e.attrs ? Array.prototype.concat(e.attrs, f).filter(Boolean) : f, I2 = t.shouldForwardProp;
  o && e.shouldForwardProp && (I2 = I2 ? function(n2, r) {
    return e.shouldForwardProp(n2, r) && t.shouldForwardProp(n2, r);
  } : e.shouldForwardProp);
  var C, A2 = new Pe(n, g2, o ? e.componentStyle : void 0), O2 = function(e2, t2) {
    return function(e3, t3, n2) {
      var r = e3.attrs, o2 = e3.componentStyle, s2 = e3.defaultProps, a2 = e3.foldedComponentIds, c2 = e3.shouldForwardProp, d2 = e3.styledComponentId, h2 = e3.target;
      var p2 = function(e4, t4, n3) {
        e4 === void 0 && (e4 = b);
        var r2 = v({}, t4, {theme: e4}), o3 = {};
        return n3.forEach(function(e5) {
          var t5, n4, i, s3 = e5;
          for (t5 in N(s3) && (s3 = s3(r2)), s3)
            r2[t5] = o3[t5] = t5 === "className" ? (n4 = o3[t5], i = s3[t5], n4 && i ? n4 + " " + i : n4 || i) : s3[t5];
        }), [r2, o3];
      }(De(t3, useContext(Ge), s2) || b, t3, r), f2 = p2[0], y = p2[1], g3 = function(e4, t4, n3, r2) {
        var o3 = ce(), i = ue(), s3 = e4.isStatic && !t4, a3 = s3 ? e4.generateAndInjectStyles(b, o3, i) : e4.generateAndInjectStyles(n3, o3, i);
        return a3;
      }(o2, r.length > 0, f2), S3 = n2, w2 = y.$as || t3.$as || y.as || t3.as || h2, E2 = Me(w2), _2 = y !== t3 ? v({}, t3, {}, y) : t3, I3 = c2 || E2 && index, C2 = {};
      for (var A3 in _2)
        A3[0] !== "$" && A3 !== "as" && (A3 === "forwardedAs" ? C2.as = _2[A3] : I3 && !I3(A3, index) || (C2[A3] = _2[A3]));
      return t3.style && y.style !== t3.style && (C2.style = v({}, t3.style, {}, y.style)), C2.className = Array.prototype.concat(a2, d2, g3 !== d2 ? g3 : null, t3.className, y.className).filter(Boolean).join(" "), C2.ref = S3, createElement(w2, C2);
    }(C, e2, t2);
  };
  return O2.displayName = c, (C = React.forwardRef(O2)).attrs = S2, C.componentStyle = A2, C.displayName = c, C.shouldForwardProp = I2, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w, C.styledComponentId = g2, C.target = o ? e.target : e, C.withComponent = function(e2) {
    var r = t.componentId, o2 = function(e3, t2) {
      if (e3 == null)
        return {};
      var n2, r2, o3 = {}, i2 = Object.keys(e3);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || (o3[n2] = e3[n2]);
      return o3;
    }(t, ["componentId"]), i = r && r + "-" + (Me(e2) ? e2 : Ve(E(e2)));
    return qe(e2, v({}, o2, {attrs: S2, componentId: i}), n);
  }, Object.defineProperty(C, "defaultProps", {get: function() {
    return this._foldedDefaultProps;
  }, set: function(t2) {
    this._foldedDefaultProps = o ? Ee({}, e.defaultProps, t2) : t2;
  }}), C.toString = function() {
    return "." + C.styledComponentId;
  }, s && hoistNonReactStatics_cjs(C, e, {attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, self: true, styledComponentId: true, target: true, withComponent: true}), C;
}
var He = function(e) {
  return function e2(t, r, o) {
    if (o === void 0 && (o = b), !reactIs.isValidElementType(r))
      return D(1, String(r));
    var i = function() {
      return t(r, o, Se.apply(void 0, arguments));
    };
    return i.withConfig = function(n) {
      return e2(t, r, v({}, o, {}, n));
    }, i.attrs = function(n) {
      return e2(t, r, v({}, o, {attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)}));
    }, i;
  }(qe, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(e) {
  He[e] = He(e);
});
var ieVersion = typeof document !== "undefined" ? document.documentMode : void 0;
var isProduction = function isProduction2() {
  var PRODUCTION_ENV = "production";
  var result = false;
  try {
    if (PRODUCTION_ENV === "production") {
      result = true;
    }
  } catch (err) {
  }
  return result;
};
var env = {
  ieVersion,
  isProduction
};
var _env = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ieVersion,
  isProduction,
  default: env
});
function deprecated(props, instead, component) {
  if (!isProduction() && typeof console !== "undefined" && console.error) {
    return console.error("Warning: [ " + props + " ] is deprecated at [ " + component + " ], " + ("use [ " + instead + " ] instead of it."));
  }
}
function warning(msg) {
  if (!isProduction() && typeof console !== "undefined" && console.error) {
    return console.error("Warning: " + msg);
  }
}
var _log = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  deprecated,
  warning
});
function typeOf(obj2) {
  return Object.prototype.toString.call(obj2).replace(/\[object\s|]/g, "");
}
function isArrayLike(obj2) {
  var length = !!obj2 && "length" in obj2 && obj2.length;
  var type = typeOf(obj2);
  return type === "Array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj2;
}
function isPromise(obj2) {
  return !!obj2 && ((typeof obj2 === "undefined" ? "undefined" : _typeof(obj2)) === "object" || typeof obj2 === "function") && typeof obj2.then === "function";
}
function isPlainObject(obj2) {
  if (typeOf(obj2) !== "Object") {
    return false;
  }
  var ctor = obj2.constructor;
  if (typeof ctor !== "function") {
    return false;
  }
  var prot = ctor.prototype;
  if (typeOf(prot) !== "Object") {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function shallowEqual(objA, objB, compare) {
  if (objA === objB) {
    return true;
  }
  if (!objA || !objB || (typeof objA === "undefined" ? "undefined" : _typeof(objA)) + (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== "objectobject") {
    return false;
  }
  var keyA = Object.keys(objA);
  var keyB = Object.keys(objB);
  var len = keyA.length;
  if (len !== keyB.length) {
    return false;
  }
  var hasCallback = typeof compare === "function";
  for (var i = 0; i < len; i++) {
    var key = keyA[i];
    if (!Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
    var valA = objA[key];
    var valB = objB[key];
    var ret = hasCallback ? compare(valA, valB, key) : void 0;
    if (ret === false || ret === void 0 && valA !== valB) {
      return false;
    }
  }
  return true;
}
function each(obj2, callback, direction) {
  var reversed = direction === -1;
  var length = obj2.length;
  var value = void 0, i = reversed ? length - 1 : 0;
  if (isArrayLike(obj2)) {
    for (; i < length && i >= 0; reversed ? i-- : i++) {
      value = callback.call(obj2[i], obj2[i], i);
      if (value === false) {
        break;
      }
    }
  } else {
    for (i in obj2) {
      if (obj2.hasOwnProperty(i)) {
        value = callback.call(obj2[i], obj2[i], i);
        if (value === false) {
          break;
        }
      }
    }
  }
  return obj2;
}
var _isInObj = function _isInObj2(key, obj2, isArray) {
  return isArray ? obj2.indexOf(key) > -1 : key in obj2;
};
function pickOthers(holdProps, props) {
  var others = {};
  var isArray = typeOf(holdProps) === "Array";
  for (var key in props) {
    if (!_isInObj(key, holdProps, isArray)) {
      others[key] = props[key];
    }
  }
  return others;
}
function pickAttrsWith(holdProps, prefix) {
  var others = {};
  for (var key in holdProps) {
    if (key.match(prefix)) {
      others[key] = holdProps[key];
    }
  }
  return others;
}
function isNil(value) {
  return value == null;
}
function deepMerge(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length)
    return target;
  var source = sources.shift();
  if (!isPlainObject(target)) {
    target = {};
  }
  if (isPlainObject(target) && isPlainObject(source)) {
    for (var key in source) {
      if (isPlainObject(source[key]) && !React.isValidElement(source[key])) {
        var _extends2;
        if (!target[key])
          _extends(target, (_extends2 = {}, _extends2[key] = {}, _extends2));
        if (!isPlainObject(target[key])) {
          target[key] = source[key];
        }
        deepMerge(target[key], source[key]);
      } else {
        var _extends3;
        _extends(target, (_extends3 = {}, _extends3[key] = source[key], _extends3));
      }
    }
  }
  return deepMerge.apply(void 0, [target].concat(sources));
}
function isFunctionComponent(component) {
  return typeOf(component) === "Function" && component.prototype && component.prototype.isReactComponent === void 0;
}
function isClassComponent(component) {
  return typeOf(component) === "Function" && component.prototype && component.prototype.isReactComponent !== void 0;
}
function isReactFragment(component) {
  if (isNil(component)) {
    return false;
  }
  if (component.type) {
    return component.type === React.Fragment;
  }
  return component === React.Fragment;
}
var _object = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  typeOf,
  isArrayLike,
  isPromise,
  isPlainObject,
  shallowEqual,
  each,
  pickOthers,
  pickAttrsWith,
  isNil,
  deepMerge,
  isFunctionComponent,
  isClassComponent,
  isReactFragment
});
function camelcase(str2) {
  if (!/-/.test(str2)) {
    return str2 || "";
  }
  return str2.toLowerCase().replace(/-([a-z])/g, function($0, $1) {
    return $1.toUpperCase();
  });
}
function hyphenate(str2) {
  var strType = typeOf(str2);
  if (strType !== "String") {
    warning("[ hyphenate(str: string): string ] " + ("Expected arguments[0] to be a string but get a " + strType + ".") + "It will return an empty string without any processing.");
    return "";
  }
  return str2.replace(/([A-Z])/g, function($0) {
    return "-" + $0.toLowerCase();
  });
}
function template(tpl) {
  var object = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var tplType = typeOf(tpl);
  if (tplType !== "String") {
    warning("[ template(tpl: string, object: object): string ] " + ("Expected arguments[0] to be a string but get a " + tplType + ".") + "It will return an empty string without any processing.");
    return "";
  }
  return tpl.replace(/\{[a-z]*\}/g, function(str2) {
    var key = str2.substring(1, str2.length - 1);
    return object[key] || "";
  });
}
var _string = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  camelcase,
  hyphenate,
  template
});
var hasDOM = typeof window !== "undefined" && !!window.document && !!document.createElement;
function hasClass(node, className) {
  if (!hasDOM || !node) {
    return false;
  }
  if (node.classList) {
    return node.classList.contains(className);
  } else {
    return node.className.indexOf(className) > -1;
  }
}
function addClass(node, className, _force) {
  if (!hasDOM || !node) {
    return;
  }
  if (node.classList) {
    node.classList.add(className);
  } else if (_force === true || !hasClass(node, className)) {
    node.className += " " + className;
  }
}
function removeClass(node, className, _force) {
  if (!hasDOM || !node) {
    return;
  }
  if (node.classList) {
    node.classList.remove(className);
  } else if (_force === true || hasClass(node, className)) {
    node.className = node.className.replace(className, "").replace(/\s+/g, " ").trim();
  }
}
function toggleClass(node, className) {
  if (!hasDOM || !node) {
    return false;
  }
  if (node.classList) {
    return node.classList.toggle(className);
  } else {
    var flag = hasClass(node, className);
    flag ? removeClass(node, className, true) : addClass(node, className, true);
    return !flag;
  }
}
var matches = function() {
  var matchesFn = null;
  if (hasDOM) {
    var _body = document.body || document.head;
    matchesFn = _body.matches ? "matches" : _body.webkitMatchesSelector ? "webkitMatchesSelector" : _body.msMatchesSelector ? "msMatchesSelector" : _body.mozMatchesSelector ? "mozMatchesSelector" : null;
  }
  return function(node, selector) {
    if (!hasDOM || !node) {
      return false;
    }
    return matchesFn ? node[matchesFn](selector) : false;
  };
}();
function _getComputedStyle(node) {
  return node && node.nodeType === 1 ? window.getComputedStyle(node, null) : {};
}
var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset|size|top/i;
var removePixel = {left: 1, top: 1, right: 1, bottom: 1};
function _getStyleValue(node, type, value) {
  type = type.toLowerCase();
  if (value === "auto") {
    if (type === "height") {
      return node.offsetHeight || 0;
    }
    if (type === "width") {
      return node.offsetWidth || 0;
    }
  }
  if (!(type in removePixel)) {
    removePixel[type] = PIXEL_PATTERN.test(type);
  }
  return removePixel[type] ? parseFloat(value) || 0 : value;
}
var floatMap = {cssFloat: 1, styleFloat: 1, float: 1};
function getStyle(node, name) {
  if (!hasDOM || !node) {
    return null;
  }
  var style = _getComputedStyle(node);
  if (arguments.length === 1) {
    return style;
  }
  name = floatMap[name] ? "cssFloat" in node.style ? "cssFloat" : "styleFloat" : name;
  return _getStyleValue(node, name, style.getPropertyValue(hyphenate(name)) || node.style[camelcase(name)]);
}
function setStyle(node, name, value) {
  if (!hasDOM || !node) {
    return false;
  }
  if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object" && arguments.length === 2) {
    each(name, function(val, key) {
      return setStyle(node, key, val);
    });
  } else {
    name = floatMap[name] ? "cssFloat" in node.style ? "cssFloat" : "styleFloat" : name;
    if (typeof value === "number" && PIXEL_PATTERN.test(name)) {
      value = value + "px";
    }
    node.style[camelcase(name)] = value;
  }
}
function scrollbar() {
  var scrollDiv = document.createElement("div");
  scrollDiv.className += "just-to-get-scrollbar-size";
  setStyle(scrollDiv, {
    position: "absolute",
    width: "100px",
    height: "100px",
    overflow: "scroll",
    top: "-9999px"
  });
  document.body && document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
  document.body.removeChild(scrollDiv);
  return {
    width: scrollbarWidth,
    height: scrollbarHeight
  };
}
function getOffset(node) {
  var rect = node.getBoundingClientRect();
  var win = node.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
}
function getPixels(len) {
  var win = document.defaultView;
  if (typeof +len === "number" && !isNaN(+len)) {
    return +len;
  }
  if (typeof len === "string") {
    var PX_REG = /(\d+)px/;
    var VH_REG = /(\d+)vh/;
    if (Array.isArray(len.match(PX_REG))) {
      return +len.match(PX_REG)[1] || 0;
    }
    if (Array.isArray(len.match(VH_REG))) {
      var _1vh = win.innerHeight / 100;
      return +(len.match(VH_REG)[1] * _1vh) || 0;
    }
  }
  return 0;
}
function getClosest(dom2, selector) {
  if (!hasDOM || !dom2) {
    return null;
  }
  if (!Element.prototype.closest) {
    if (!document.documentElement.contains(dom2))
      return null;
    do {
      if (getMatches(dom2, selector))
        return dom2;
      dom2 = dom2.parentElement;
    } while (dom2 !== null);
  } else {
    return dom2.closest(selector);
  }
  return null;
}
function getMatches(dom2, selector) {
  if (!hasDOM || !dom2) {
    return null;
  }
  if (Element.prototype.matches) {
    return dom2.matches(selector);
  } else if (Element.prototype.msMatchesSelector) {
    return dom2.msMatchesSelector(selector);
  } else if (Element.prototype.webkitMatchesSelector) {
    return dom2.webkitMatchesSelector(selector);
  }
  return null;
}
var _dom = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasDOM,
  hasClass,
  addClass,
  removeClass,
  toggleClass,
  matches,
  getStyle,
  setStyle,
  scrollbar,
  getOffset,
  getPixels,
  getClosest,
  getMatches
});
function _off(node, eventName, callback, useCapture) {
  if (node.removeEventListener) {
    node.removeEventListener(eventName, callback, useCapture || false);
  }
}
function on(node, eventName, callback, useCapture) {
  if (node.addEventListener) {
    node.addEventListener(eventName, callback, useCapture || false);
  }
  return {
    off: function off() {
      return _off(node, eventName, callback, useCapture);
    }
  };
}
function once(node, eventName, callback, useCapture) {
  return on(node, eventName, function __fn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    callback.apply(this, args);
    _off(node, eventName, __fn, useCapture);
  }, useCapture);
}
var _events = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  off: _off,
  on,
  once
});
var noop = function noop2() {
};
var prevent = function prevent2() {
  return false;
};
function makeChain() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function chainedFunction() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    for (var i = 0, j = fns.length; i < j; i++) {
      if (fns[i] && fns[i].apply) {
        fns[i].apply(this, args);
      }
    }
  };
}
function bindCtx(ctx, fns, ns) {
  if (typeof fns === "string") {
    fns = [fns];
  }
  ns = ns || ctx;
  fns.forEach(function(fnName) {
    ns[fnName] = ns[fnName].bind(ctx);
  });
}
function promiseCall(ret, success) {
  var failure = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : noop;
  if (isPromise(ret)) {
    return ret.then(function(result) {
      success(result);
      return result;
    }).catch(function(e) {
      failure(e);
    });
  }
  return ret !== false ? success(ret) : failure(ret);
}
var _func = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  noop,
  prevent,
  makeChain,
  bindCtx,
  promiseCall
});
var animationEndEventNames = {
  WebkitAnimation: "webkitAnimationEnd",
  OAnimation: "oAnimationEnd",
  animation: "animationend"
};
var transitionEventNames = {
  WebkitTransition: "webkitTransitionEnd",
  OTransition: "oTransitionEnd",
  transition: "transitionend"
};
function _supportEnd(names) {
  if (!hasDOM) {
    return false;
  }
  var el = document.createElement("div");
  var ret = false;
  each(names, function(val, key) {
    if (el.style[key] !== void 0) {
      ret = {end: val};
      return false;
    }
  });
  return ret;
}
function _supportCSS(names) {
  if (!hasDOM) {
    return false;
  }
  var el = document.createElement("div");
  var ret = false;
  each(names, function(val, key) {
    each(val, function(item) {
      try {
        el.style[key] = item;
        ret = ret || el.style[key] === item;
      } catch (e) {
      }
      return !ret;
    });
    return !ret;
  });
  return ret;
}
var animation = _supportEnd(animationEndEventNames);
var transition = _supportEnd(transitionEventNames);
var flex = _supportCSS({
  display: ["flex", "-webkit-flex", "-moz-flex", "-ms-flexbox"]
});
var _support = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  animation,
  transition,
  flex
});
var _KEYCODE = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  ESCAPE: 27,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40,
  CONTROL: 17,
  OPTION: 18,
  CMD: 91,
  COMMAND: 91,
  DELETE: 8
};
function _isVisible(node) {
  while (node) {
    if (node === document.body || node === document.documentElement) {
      break;
    }
    if (node.style.display === "none" || node.style.visibility === "hidden") {
      return false;
    }
    node = node.parentNode;
  }
  return true;
}
function _isFocusable(node) {
  var nodeName = node.nodeName.toLowerCase();
  var tabIndex = parseInt(node.getAttribute("tabindex"), 10);
  var hasTabIndex = !isNaN(tabIndex) && tabIndex > -1;
  if (_isVisible(node)) {
    if (nodeName === "input") {
      return !node.disabled && node.type !== "hidden";
    } else if (["select", "textarea", "button"].indexOf(nodeName) > -1) {
      return !node.disabled;
    } else if (nodeName === "a") {
      return node.getAttribute("href") || hasTabIndex;
    } else {
      return hasTabIndex;
    }
  }
  return false;
}
function getFocusNodeList(node) {
  var res = [];
  var nodeList = node.querySelectorAll("*");
  each(nodeList, function(item) {
    if (_isFocusable(item)) {
      var method = item.getAttribute("data-auto-focus") ? "unshift" : "push";
      res[method](item);
    }
  });
  if (_isFocusable(node)) {
    res.unshift(node);
  }
  return res;
}
var lastFocusElement = null;
function saveLastFocusNode() {
  lastFocusElement = document.activeElement;
}
function clearLastFocusNode() {
  lastFocusElement = null;
}
function backLastFocusNode() {
  if (lastFocusElement) {
    try {
      lastFocusElement.focus();
    } catch (e) {
    }
  }
}
function limitTabRange(node, e) {
  if (e.keyCode === _KEYCODE.TAB) {
    var tabNodeList = getFocusNodeList(node);
    var maxIndex = tabNodeList.length - 1;
    var index2 = tabNodeList.indexOf(document.activeElement);
    if (index2 > -1) {
      var targetIndex = index2 + (e.shiftKey ? -1 : 1);
      targetIndex < 0 && (targetIndex = maxIndex);
      targetIndex > maxIndex && (targetIndex = 0);
      tabNodeList[targetIndex].focus();
      e.preventDefault();
    }
  }
}
var _focus = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getFocusNodeList,
  saveLastFocusNode,
  clearLastFocusNode,
  backLastFocusNode,
  limitTabRange
});
var timestamp = Date.now();
function uuid(prefix) {
  prefix = prefix || "";
  return prefix + (timestamp++).toString(36);
}
function randomId(prefix) {
  var max = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e6;
  var rand = Math.ceil(Math.random() * max);
  return prefix ? escapeForId(prefix) + "-" + rand : rand.toString(10);
}
function escapeForId(text) {
  if (!text) {
    return "";
  }
  if ((typeof text === "undefined" ? "undefined" : _typeof(text)) === "object") {
    text = JSON.stringify(text);
  } else if (typeof text !== "string") {
    text = String(text);
  }
  return text.replace(/['"]/gm, "").replace(/[\s'"]/gm, "-");
}
var _htmlId = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  randomId,
  escapeForId
});
var dom = _dom;
var env$1 = _env;
var events = _events;
var func = _func;
var log = _log;
var obj = _object;
var str = _string;
var support = _support;
var focus = _focus;
var guid = uuid;
var KEYCODE = _KEYCODE;
var htmlId = _htmlId;
export {He as H, KEYCODE as K, env$1 as a, str as b, focus as c, dom as d, events as e, func as f, guid as g, htmlId as h, stylis_min as i, uuid as j, log as l, memoize as m, obj as o, support as s, unitlessKeys as u};
