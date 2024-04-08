(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/lodash.camelcase/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.camelcase/index.js"(exports, module) {
      var INFINITY = 1 / 0;
      var symbolTag = "[object Symbol]";
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
      var rsComboSymbolsRange = "\\u20d0-\\u20f0";
      var rsDingbatRange = "\\u2700-\\u27bf";
      var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
      var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
      var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
      var rsPunctuationRange = "\\u2000-\\u206f";
      var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
      var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsBreak = "[" + rsBreakRange + "]";
      var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
      var rsDigits = "\\d+";
      var rsDingbat = "[" + rsDingbatRange + "]";
      var rsLower = "[" + rsLowerRange + "]";
      var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsUpper = "[" + rsUpperRange + "]";
      var rsZWJ = "\\u200d";
      var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
      var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
      var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
      var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
        rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
        rsUpper + "+" + rsOptUpperContr,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "ss"
      };
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
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
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? void 0 : object[key];
        };
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var Symbol2 = root.Symbol;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === void 0 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var camelCase = createCompounder(function(result, word, index) {
        word = word.toLowerCase();
        return result + (index ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? void 0 : pattern;
        if (pattern === void 0) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      module.exports = camelCase;
    }
  });

  // node_modules/@remote-ui/rpc/build/esm/memory.mjs
  function isBasicObject(value) {
    if (value == null || typeof value !== "object")
      return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype == null || prototype === Object.prototype;
  }

  // node_modules/@remote-ui/core/build/esm/component.mjs
  function createRemoteComponent(componentType) {
    return componentType;
  }

  // node_modules/@remote-ui/core/build/esm/types.mjs
  var ACTION_MOUNT = 0;
  var ACTION_INSERT_CHILD = 1;
  var ACTION_REMOVE_CHILD = 2;
  var ACTION_UPDATE_TEXT = 3;
  var ACTION_UPDATE_PROPS = 4;
  var KIND_ROOT = 0;
  var KIND_COMPONENT = 1;
  var KIND_TEXT = 2;
  var KIND_FRAGMENT = 3;

  // node_modules/@remote-ui/core/build/esm/utilities.mjs
  function isRemoteFragment(object) {
    return object != null && object.kind === KIND_FRAGMENT;
  }

  // node_modules/@remote-ui/core/build/esm/root.mjs
  var FUNCTION_CURRENT_IMPLEMENTATION_KEY = "__current";
  var EMPTY_OBJECT = {};
  var EMPTY_ARRAY = [];
  function createRemoteRoot(channel, {
    strict = true,
    components
  } = {}) {
    let currentId = 0;
    const rootInternals = {
      strict,
      mounted: false,
      channel,
      children: EMPTY_ARRAY,
      nodes: /* @__PURE__ */ new WeakSet(),
      parents: /* @__PURE__ */ new WeakMap(),
      tops: /* @__PURE__ */ new WeakMap(),
      components: /* @__PURE__ */ new WeakMap(),
      fragments: /* @__PURE__ */ new WeakMap()
    };
    if (strict)
      Object.freeze(components);
    const remoteRoot = {
      kind: KIND_ROOT,
      options: strict ? Object.freeze({
        strict,
        components
      }) : {
        strict,
        components
      },
      get children() {
        return rootInternals.children;
      },
      createComponent(type, ...rest) {
        if (components && components.indexOf(type) < 0) {
          throw new Error(`Unsupported component: ${type}`);
        }
        const [initialProps, initialChildren, ...moreChildren] = rest;
        const normalizedInitialProps = initialProps !== null && initialProps !== void 0 ? initialProps : {};
        const normalizedInitialChildren = [];
        const normalizedInternalProps = {};
        if (initialProps) {
          for (const key of Object.keys(initialProps)) {
            if (key === "children")
              continue;
            normalizedInternalProps[key] = makeValueHotSwappable(serializeProp(initialProps[key]));
          }
        }
        if (initialChildren) {
          if (Array.isArray(initialChildren)) {
            for (const child of initialChildren) {
              normalizedInitialChildren.push(normalizeChild(child, remoteRoot));
            }
          } else {
            normalizedInitialChildren.push(normalizeChild(initialChildren, remoteRoot));
            for (const child of moreChildren) {
              normalizedInitialChildren.push(normalizeChild(child, remoteRoot));
            }
          }
        }
        const id = `${currentId++}`;
        const internals = {
          externalProps: strict ? Object.freeze(normalizedInitialProps) : normalizedInitialProps,
          internalProps: normalizedInternalProps,
          children: strict ? Object.freeze(normalizedInitialChildren) : normalizedInitialChildren
        };
        const component = __spreadValues({
          kind: KIND_COMPONENT,
          get children() {
            return internals.children;
          },
          get props() {
            return internals.externalProps;
          },
          get remoteProps() {
            return internals.internalProps;
          },
          remove: () => remove(component),
          updateProps: (newProps) => updateProps(component, newProps, internals, rootInternals),
          append: (...children) => append(component, children.map((child) => normalizeChild(child, remoteRoot)), internals, rootInternals),
          appendChild: (child) => appendChild(component, normalizeChild(child, remoteRoot), internals, rootInternals),
          removeChild: (child) => removeChild(component, child, internals, rootInternals),
          replaceChildren: (...children) => replaceChildren(component, children.map((child) => normalizeChild(child, remoteRoot)), internals, rootInternals),
          insertBefore: (child, before) => insertBefore(component, normalizeChild(child, remoteRoot), before, internals, rootInternals),
          insertChildBefore: (child, before) => insertBefore(component, normalizeChild(child, remoteRoot), before, internals, rootInternals)
        }, EMPTY_OBJECT);
        rootInternals.components.set(component, internals);
        Object.defineProperty(component, "type", {
          value: type,
          configurable: false,
          writable: false,
          enumerable: true
        });
        makePartOfTree(component, rootInternals);
        makeRemote(component, id, remoteRoot);
        for (const child of internals.children) {
          moveNodeToContainer(component, child, rootInternals);
        }
        return component;
      },
      createText(content = "") {
        const id = `${currentId++}`;
        const internals = {
          text: content
        };
        const update = (newText) => updateText(text, newText, internals, rootInternals);
        const text = __spreadValues({
          kind: KIND_TEXT,
          get text() {
            return internals.text;
          },
          update,
          updateText: update,
          remove: () => remove(text)
        }, EMPTY_OBJECT);
        makePartOfTree(text, rootInternals);
        makeRemote(text, id, remoteRoot);
        return text;
      },
      createFragment() {
        const id = `${currentId++}`;
        const internals = {
          children: strict ? Object.freeze([]) : []
        };
        const fragment = __spreadValues({
          kind: KIND_FRAGMENT,
          get children() {
            return internals.children;
          },
          append: (...children) => append(fragment, children.map((child) => normalizeChild(child, remoteRoot)), internals, rootInternals),
          appendChild: (child) => appendChild(fragment, normalizeChild(child, remoteRoot), internals, rootInternals),
          removeChild: (child) => removeChild(fragment, child, internals, rootInternals),
          replaceChildren: (...children) => replaceChildren(fragment, children.map((child) => normalizeChild(child, remoteRoot)), internals, rootInternals),
          insertBefore: (child, before) => insertBefore(fragment, normalizeChild(child, remoteRoot), before, internals, rootInternals),
          insertChildBefore: (child, before) => insertBefore(fragment, normalizeChild(child, remoteRoot), before, internals, rootInternals)
        }, EMPTY_OBJECT);
        rootInternals.fragments.set(fragment, internals);
        makePartOfTree(fragment, rootInternals);
        makeRemote(fragment, id, remoteRoot);
        return fragment;
      },
      append: (...children) => append(remoteRoot, children.map((child) => normalizeChild(child, remoteRoot)), rootInternals, rootInternals),
      appendChild: (child) => appendChild(remoteRoot, normalizeChild(child, remoteRoot), rootInternals, rootInternals),
      replaceChildren: (...children) => replaceChildren(remoteRoot, children.map((child) => normalizeChild(child, remoteRoot)), rootInternals, rootInternals),
      removeChild: (child) => removeChild(remoteRoot, child, rootInternals, rootInternals),
      insertBefore: (child, before) => insertBefore(remoteRoot, normalizeChild(child, remoteRoot), before, rootInternals, rootInternals),
      insertChildBefore: (child, before) => insertBefore(remoteRoot, normalizeChild(child, remoteRoot), before, rootInternals, rootInternals),
      mount() {
        if (rootInternals.mounted)
          return Promise.resolve();
        rootInternals.mounted = true;
        return Promise.resolve(channel(ACTION_MOUNT, rootInternals.children.map(serializeChild)));
      }
    };
    return remoteRoot;
  }
  function connected(element, {
    tops
  }) {
    var _tops$get;
    return ((_tops$get = tops.get(element)) === null || _tops$get === void 0 ? void 0 : _tops$get.kind) === KIND_ROOT;
  }
  function allDescendants(element, withEach) {
    const recurse = (element2) => {
      if ("children" in element2) {
        for (const child of element2.children) {
          withEach(child);
          recurse(child);
        }
      }
    };
    recurse(element);
  }
  function perform(element, rootInternals, {
    remote,
    local
  }) {
    const {
      mounted,
      channel
    } = rootInternals;
    if (mounted && (element.kind === KIND_ROOT || connected(element, rootInternals))) {
      remote(channel);
    }
    local();
  }
  function updateText(text, newText, internals, rootInternals) {
    return perform(text, rootInternals, {
      remote: (channel) => channel(ACTION_UPDATE_TEXT, text.id, newText),
      local: () => {
        internals.text = newText;
      }
    });
  }
  var IGNORE = Symbol("ignore");
  function updateProps(component, newProps, internals, rootInternals) {
    const {
      strict
    } = rootInternals;
    const {
      internalProps: currentProps,
      externalProps: currentExternalProps
    } = internals;
    const normalizedNewProps = {};
    const hotSwapFunctions = [];
    let hasRemoteChange = false;
    for (const key of Object.keys(newProps)) {
      if (key === "children")
        continue;
      const currentExternalValue = currentExternalProps[key];
      const newExternalValue = newProps[key];
      const currentValue = currentProps[key];
      const newValue = serializeProp(newExternalValue);
      if (currentValue === newValue && (newValue == null || typeof newValue !== "object")) {
        continue;
      }
      const [value, hotSwaps] = tryHotSwappingValues(currentValue, newValue);
      if (hotSwaps) {
        hotSwapFunctions.push(...hotSwaps);
      }
      if (value === IGNORE)
        continue;
      hasRemoteChange = true;
      normalizedNewProps[key] = value;
      if (isRemoteFragment(currentExternalValue)) {
        removeNodeFromContainer(currentExternalValue, rootInternals);
      }
      if (isRemoteFragment(newExternalValue)) {
        moveNodeToContainer(component, newExternalValue, rootInternals);
      }
    }
    return perform(component, rootInternals, {
      remote: (channel) => {
        if (hasRemoteChange) {
          channel(ACTION_UPDATE_PROPS, component.id, normalizedNewProps);
        }
      },
      local: () => {
        const mergedExternalProps = __spreadValues(__spreadValues({}, currentExternalProps), newProps);
        internals.externalProps = strict ? Object.freeze(mergedExternalProps) : mergedExternalProps;
        internals.internalProps = __spreadValues(__spreadValues({}, internals.internalProps), normalizedNewProps);
        for (const [hotSwappable, newValue] of hotSwapFunctions) {
          hotSwappable[FUNCTION_CURRENT_IMPLEMENTATION_KEY] = newValue;
        }
      }
    });
  }
  function tryHotSwappingValues(currentValue, newValue, seen = /* @__PURE__ */ new Set()) {
    if (seen.has(currentValue)) {
      return [IGNORE];
    }
    seen.add(currentValue);
    if (typeof currentValue === "function" && FUNCTION_CURRENT_IMPLEMENTATION_KEY in currentValue) {
      const result2 = [typeof newValue === "function" ? IGNORE : makeValueHotSwappable(newValue), [[currentValue, newValue]]];
      return result2;
    }
    if (Array.isArray(currentValue)) {
      const result2 = tryHotSwappingArrayValues(currentValue, newValue, seen);
      return result2;
    }
    if (isBasicObject(currentValue) && !isRemoteFragment(currentValue)) {
      const result2 = tryHotSwappingObjectValues(currentValue, newValue, seen);
      return result2;
    }
    const result = [currentValue === newValue ? IGNORE : newValue];
    return result;
  }
  function makeValueHotSwappable(value, seen = /* @__PURE__ */ new Map()) {
    const seenValue = seen.get(value);
    if (seenValue)
      return seenValue;
    if (isRemoteFragment(value)) {
      seen.set(value, value);
      return value;
    }
    if (Array.isArray(value)) {
      const result = [];
      seen.set(value, result);
      for (const nested of value) {
        result.push(makeValueHotSwappable(nested, seen));
      }
      return result;
    }
    if (isBasicObject(value)) {
      const result = {};
      seen.set(value, result);
      for (const key of Object.keys(value)) {
        result[key] = makeValueHotSwappable(value[key], seen);
      }
      return result;
    }
    if (typeof value === "function") {
      const wrappedFunction = (...args) => {
        return wrappedFunction[FUNCTION_CURRENT_IMPLEMENTATION_KEY](...args);
      };
      Object.defineProperty(wrappedFunction, FUNCTION_CURRENT_IMPLEMENTATION_KEY, {
        enumerable: false,
        configurable: false,
        writable: true,
        value
      });
      seen.set(value, wrappedFunction);
      return wrappedFunction;
    }
    seen.set(value, value);
    return value;
  }
  function collectNestedHotSwappableValues(value, seen = /* @__PURE__ */ new Set()) {
    if (seen.has(value))
      return void 0;
    seen.add(value);
    if (Array.isArray(value)) {
      return value.reduce((all, element) => {
        const nested = collectNestedHotSwappableValues(element, seen);
        return nested ? [...all, ...nested] : all;
      }, []);
    }
    if (isBasicObject(value)) {
      return Object.keys(value).reduce((all, key) => {
        const nested = collectNestedHotSwappableValues(value[key], seen);
        return nested ? [...all, ...nested] : all;
      }, []);
    }
    if (typeof value === "function") {
      return FUNCTION_CURRENT_IMPLEMENTATION_KEY in value ? [value] : void 0;
    }
    return void 0;
  }
  function remove(child) {
    var _child$parent;
    (_child$parent = child.parent) === null || _child$parent === void 0 ? void 0 : _child$parent.removeChild(child);
  }
  function append(container, children, internals, rootInternals) {
    for (const child of children) {
      appendChild(container, child, internals, rootInternals);
    }
  }
  function appendChild(container, child, internals, rootInternals) {
    var _currentParent$childr;
    const {
      nodes,
      strict
    } = rootInternals;
    if (!nodes.has(child)) {
      throw new Error(`Cannot append a node that was not created by this remote root`);
    }
    const currentParent = child.parent;
    const existingIndex = (_currentParent$childr = currentParent === null || currentParent === void 0 ? void 0 : currentParent.children.indexOf(child)) !== null && _currentParent$childr !== void 0 ? _currentParent$childr : -1;
    return perform(container, rootInternals, {
      remote: (channel) => {
        channel(ACTION_INSERT_CHILD, container.id, existingIndex < 0 ? container.children.length : container.children.length - 1, serializeChild(child), currentParent ? currentParent.id : false);
      },
      local: () => {
        moveNodeToContainer(container, child, rootInternals);
        let newChildren;
        if (currentParent) {
          const currentInternals = getCurrentInternals(currentParent, rootInternals);
          const currentChildren = [...currentInternals.children];
          currentChildren.splice(existingIndex, 1);
          if (currentParent === container) {
            newChildren = currentChildren;
          } else {
            currentInternals.children = strict ? Object.freeze(currentChildren) : currentChildren;
            newChildren = [...internals.children];
          }
        } else {
          newChildren = [...internals.children];
        }
        newChildren.push(child);
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function replaceChildren(container, children, internals, rootInternals) {
    for (const child of container.children) {
      removeChild(container, child, internals, rootInternals);
    }
    append(container, children, internals, rootInternals);
  }
  function removeChild(container, child, internals, rootInternals) {
    const {
      strict
    } = rootInternals;
    return perform(container, rootInternals, {
      remote: (channel) => channel(ACTION_REMOVE_CHILD, container.id, container.children.indexOf(child)),
      local: () => {
        removeNodeFromContainer(child, rootInternals);
        const newChildren = [...internals.children];
        newChildren.splice(newChildren.indexOf(child), 1);
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function insertBefore(container, child, before, internals, rootInternals) {
    var _currentParent$childr2;
    const {
      strict,
      nodes
    } = rootInternals;
    if (!nodes.has(child)) {
      throw new Error(`Cannot insert a node that was not created by this remote root`);
    }
    const currentParent = child.parent;
    const existingIndex = (_currentParent$childr2 = currentParent === null || currentParent === void 0 ? void 0 : currentParent.children.indexOf(child)) !== null && _currentParent$childr2 !== void 0 ? _currentParent$childr2 : -1;
    return perform(container, rootInternals, {
      remote: (channel) => {
        const beforeIndex = before == null ? container.children.length - 1 : container.children.indexOf(before);
        channel(ACTION_INSERT_CHILD, container.id, beforeIndex < existingIndex || existingIndex < 0 ? beforeIndex : beforeIndex - 1, serializeChild(child), currentParent ? currentParent.id : false);
      },
      local: () => {
        moveNodeToContainer(container, child, rootInternals);
        let newChildren;
        if (currentParent) {
          const currentInternals = getCurrentInternals(currentParent, rootInternals);
          const currentChildren = [...currentInternals.children];
          currentChildren.splice(existingIndex, 1);
          if (currentParent === container) {
            newChildren = currentChildren;
          } else {
            currentInternals.children = strict ? Object.freeze(currentChildren) : currentChildren;
            newChildren = [...internals.children];
          }
        } else {
          newChildren = [...internals.children];
        }
        if (before == null) {
          newChildren.push(child);
        } else {
          newChildren.splice(newChildren.indexOf(before), 0, child);
        }
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function normalizeChild(child, root) {
    return typeof child === "string" ? root.createText(child) : child;
  }
  function moveNodeToContainer(container, node, rootInternals) {
    const {
      tops,
      parents
    } = rootInternals;
    const newTop = container.kind === KIND_ROOT ? container : tops.get(container);
    tops.set(node, newTop);
    parents.set(node, container);
    moveFragmentToContainer(node, rootInternals);
    allDescendants(node, (descendant) => {
      tops.set(descendant, newTop);
      moveFragmentToContainer(descendant, rootInternals);
    });
  }
  function moveFragmentToContainer(node, rootInternals) {
    if (node.kind !== KIND_COMPONENT)
      return;
    const props = node.props;
    if (!props)
      return;
    Object.values(props).forEach((prop) => {
      if (!isRemoteFragment(prop))
        return;
      moveNodeToContainer(node, prop, rootInternals);
    });
  }
  function removeNodeFromContainer(node, rootInternals) {
    const {
      tops,
      parents
    } = rootInternals;
    tops.delete(node);
    parents.delete(node);
    allDescendants(node, (descendant) => {
      tops.delete(descendant);
      removeFragmentFromContainer(descendant, rootInternals);
    });
    removeFragmentFromContainer(node, rootInternals);
  }
  function removeFragmentFromContainer(node, rootInternals) {
    if (node.kind !== KIND_COMPONENT)
      return;
    const props = node.remoteProps;
    for (const key of Object.keys(props !== null && props !== void 0 ? props : {})) {
      const prop = props[key];
      if (!isRemoteFragment(prop))
        continue;
      removeNodeFromContainer(prop, rootInternals);
    }
  }
  function makePartOfTree(node, {
    parents,
    tops,
    nodes
  }) {
    nodes.add(node);
    Object.defineProperty(node, "parent", {
      get() {
        return parents.get(node);
      },
      configurable: true,
      enumerable: true
    });
    Object.defineProperty(node, "top", {
      get() {
        return tops.get(node);
      },
      configurable: true,
      enumerable: true
    });
  }
  function serializeChild(value) {
    return value.kind === KIND_TEXT ? {
      id: value.id,
      kind: value.kind,
      text: value.text
    } : {
      id: value.id,
      kind: value.kind,
      type: value.type,
      props: value.remoteProps,
      children: value.children.map((child) => serializeChild(child))
    };
  }
  function serializeProp(prop) {
    if (isRemoteFragment(prop)) {
      return serializeFragment(prop);
    }
    return prop;
  }
  function serializeFragment(value) {
    return {
      id: value.id,
      kind: value.kind,
      get children() {
        return value.children.map((child) => serializeChild(child));
      }
    };
  }
  function getCurrentInternals(currentParent, rootInternals) {
    if (currentParent.kind === KIND_ROOT) {
      return rootInternals;
    }
    if (currentParent.kind === KIND_FRAGMENT) {
      return rootInternals.fragments.get(currentParent);
    }
    return rootInternals.components.get(currentParent);
  }
  function makeRemote(value, id, root) {
    Object.defineProperty(value, "id", {
      value: id,
      configurable: true,
      writable: false,
      enumerable: false
    });
    Object.defineProperty(value, "root", {
      value: root,
      configurable: true,
      writable: false,
      enumerable: false
    });
  }
  function tryHotSwappingObjectValues(currentValue, newValue, seen) {
    if (!isBasicObject(newValue)) {
      var _collectNestedHotSwap;
      return [makeValueHotSwappable(newValue), (_collectNestedHotSwap = collectNestedHotSwappableValues(currentValue)) === null || _collectNestedHotSwap === void 0 ? void 0 : _collectNestedHotSwap.map((hotSwappable) => [hotSwappable, void 0])];
    }
    let hasChanged = false;
    const hotSwaps = [];
    const normalizedNewValue = {};
    for (const key in currentValue) {
      const currentObjectValue = currentValue[key];
      if (!(key in newValue)) {
        hasChanged = true;
        const nestedHotSwappables = collectNestedHotSwappableValues(currentObjectValue);
        if (nestedHotSwappables) {
          hotSwaps.push(...nestedHotSwappables.map((hotSwappable) => [hotSwappable, void 0]));
        }
      }
      const newObjectValue = newValue[key];
      const [updatedValue, elementHotSwaps] = tryHotSwappingValues(currentObjectValue, newObjectValue, seen);
      if (elementHotSwaps) {
        hotSwaps.push(...elementHotSwaps);
      }
      if (updatedValue !== IGNORE) {
        hasChanged = true;
        normalizedNewValue[key] = updatedValue;
      }
    }
    for (const key in newValue) {
      if (key in normalizedNewValue)
        continue;
      hasChanged = true;
      normalizedNewValue[key] = makeValueHotSwappable(newValue[key]);
    }
    return [hasChanged ? normalizedNewValue : IGNORE, hotSwaps];
  }
  function tryHotSwappingArrayValues(currentValue, newValue, seen) {
    if (!Array.isArray(newValue)) {
      var _collectNestedHotSwap2;
      return [makeValueHotSwappable(newValue), (_collectNestedHotSwap2 = collectNestedHotSwappableValues(currentValue)) === null || _collectNestedHotSwap2 === void 0 ? void 0 : _collectNestedHotSwap2.map((hotSwappable) => [hotSwappable, void 0])];
    }
    let hasChanged = false;
    const hotSwaps = [];
    const newLength = newValue.length;
    const currentLength = currentValue.length;
    const maxLength = Math.max(currentLength, newLength);
    const normalizedNewValue = [];
    for (let i = 0; i < maxLength; i++) {
      const currentArrayValue = currentValue[i];
      const newArrayValue = newValue[i];
      if (i < newLength) {
        if (i >= currentLength) {
          hasChanged = true;
          normalizedNewValue[i] = makeValueHotSwappable(newArrayValue);
          continue;
        }
        const [updatedValue, elementHotSwaps] = tryHotSwappingValues(currentArrayValue, newArrayValue, seen);
        if (elementHotSwaps)
          hotSwaps.push(...elementHotSwaps);
        if (updatedValue === IGNORE) {
          normalizedNewValue[i] = currentArrayValue;
          continue;
        }
        hasChanged = true;
        normalizedNewValue[i] = updatedValue;
      } else {
        hasChanged = true;
        const nestedHotSwappables = collectNestedHotSwappableValues(currentArrayValue);
        if (nestedHotSwappables) {
          hotSwaps.push(...nestedHotSwappables.map((hotSwappable) => [hotSwappable, void 0]));
        }
      }
    }
    return [hasChanged ? normalizedNewValue : IGNORE, hotSwaps];
  }

  // node_modules/@shopify/ui-extensions/build/esm/utilities/registration.mjs
  function createExtensionRegistrationFunction() {
    const extensionWrapper = (target, implementation) => {
      var _shopify;
      function extension2(...args) {
        return __async(this, null, function* () {
          if (args.length === 1) {
            return implementation(...args);
          }
          const [{
            channel,
            components
          }, api] = args;
          const root = createRemoteRoot(channel, {
            components,
            strict: true
          });
          let renderResult = implementation(root, api);
          if (typeof renderResult === "object" && renderResult != null && "then" in renderResult) {
            renderResult = yield renderResult;
          }
          root.mount();
          return renderResult;
        });
      }
      (_shopify = globalThis.shopify) === null || _shopify === void 0 ? void 0 : _shopify.extend(target, extension2);
      return extension2;
    };
    return extensionWrapper;
  }

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/extension.mjs
  var extension = createExtensionRegistrationFunction();

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/style/memoize.mjs
  var NOT_FOUND = "NOT_FOUND";
  function createSingletonCache(equals) {
    let entry;
    return {
      get(key) {
        if (entry && equals(entry.key, key)) {
          return entry.value;
        }
        return NOT_FOUND;
      },
      put(key, value) {
        entry = {
          key,
          value
        };
      },
      getEntries() {
        return entry ? [entry] : [];
      },
      clear() {
        entry = void 0;
      }
    };
  }
  function createLruCache(maxSize, equals) {
    let entries = [];
    function get(key) {
      const cacheIndex = entries.findIndex((entry) => equals(key, entry.key));
      if (cacheIndex > -1) {
        const entry = entries[cacheIndex];
        if (cacheIndex > 0) {
          entries.splice(cacheIndex, 1);
          entries.unshift(entry);
        }
        return entry.value;
      }
      return NOT_FOUND;
    }
    function put(key, value) {
      if (get(key) === NOT_FOUND) {
        entries.unshift({
          key,
          value
        });
        if (entries.length > maxSize) {
          entries.pop();
        }
      }
    }
    function getEntries() {
      return entries;
    }
    function clear() {
      entries = [];
    }
    return {
      get,
      put,
      getEntries,
      clear
    };
  }
  var defaultEqualityCheck = (first, second) => {
    return first === second;
  };
  function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
      if (prev === null || next === null || prev.length !== next.length) {
        return false;
      }
      const length = prev.length;
      for (let i = 0; i < length; i++) {
        if (!equalityCheck(prev[i], next[i])) {
          return false;
        }
      }
      return true;
    };
  }
  function memoize(func, equalityCheckOrOptions) {
    const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
      equalityCheck: equalityCheckOrOptions
    };
    const {
      equalityCheck = defaultEqualityCheck,
      maxSize = 1,
      resultEqualityCheck
    } = providedOptions;
    const comparator = createCacheKeyComparator(equalityCheck);
    const cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
    function memoized() {
      let value = cache.get(arguments);
      if (value === NOT_FOUND) {
        value = func.apply(null, arguments);
        if (resultEqualityCheck) {
          const entries = cache.getEntries();
          const matchingEntry = entries.find((entry) => resultEqualityCheck(entry.value, value));
          if (matchingEntry) {
            value = matchingEntry.value;
          }
        }
        cache.put(arguments, value);
      }
      return value;
    }
    memoized.clearCache = () => cache.clear();
    return memoized;
  }

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/style/isEqual.mjs
  function isEqual(first, second) {
    if (Object.is(first, second)) {
      return true;
    }
    if (typeof first === "object" && typeof second === "object") {
      if (Array.isArray(first) && Array.isArray(second)) {
        if (first.length === second.length) {
          return first.every((value, index) => isEqual(value, second[index]));
        }
      } else {
        const firstEntries = Object.entries(first);
        const secondEntries = Object.entries(second);
        if (firstEntries.length === secondEntries.length) {
          return firstEntries.every(([key]) => isEqual(first[key], second[key]));
        }
      }
    }
    return false;
  }

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/style/style.mjs
  var MAX_CACHE_SIZE = 50;
  var MEMOIZE_OPTIONS = {
    equalityCheck: isEqual,
    maxSize: MAX_CACHE_SIZE
  };
  var when = function when2(conditions, value) {
    const config = isConditionalStyle(this) ? {
      default: this.default,
      conditionals: [...this.conditionals, {
        conditions,
        value
      }]
    } : {
      conditionals: [{
        conditions,
        value
      }]
    };
    return createChainableConditionalStyle(config);
  };
  var Style = {
    /**
     * Sets an optional default value to use when no other condition is met.
     *
     * @param defaultValue The default value
     * @returns The chainable condition style
     */
    default: memoize((defaultValue) => createChainableConditionalStyle({
      default: defaultValue,
      conditionals: []
    }), MEMOIZE_OPTIONS),
    /**
     * Adjusts the style based on different conditions. All conditions, expressed
     * as a literal object, must be met for the associated value to be applied.
     *
     * The `when` method can be chained together to build more complex styles.
     *
     * @param conditions The condition(s)
     * @param value The conditional value that can be applied if the conditions are met
     * @returns The chainable condition style
     */
    when: memoize(when, MEMOIZE_OPTIONS)
  };
  function createChainableConditionalStyle(conditionalStyle) {
    const proto = {};
    const returnConditionalStyle = Object.create(proto);
    Object.assign(returnConditionalStyle, conditionalStyle);
    proto.when = memoize(when.bind(returnConditionalStyle), MEMOIZE_OPTIONS);
    return returnConditionalStyle;
  }
  function isConditionalStyle(value) {
    return value !== null && typeof value === "object" && "conditionals" in value;
  }

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/BlockLayout/BlockLayout.mjs
  var BlockLayout = createRemoteComponent("BlockLayout");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/BlockSpacer/BlockSpacer.mjs
  var BlockSpacer = createRemoteComponent("BlockSpacer");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/Checkbox/Checkbox.mjs
  var Checkbox = createRemoteComponent("Checkbox");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/Image/Image.mjs
  var Image = createRemoteComponent("Image");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/InlineLayout/InlineLayout.mjs
  var InlineLayout = createRemoteComponent("InlineLayout");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/InlineStack/InlineStack.mjs
  var InlineStack = createRemoteComponent("InlineStack");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/InlineSpacer/InlineSpacer.mjs
  var InlineSpacer = createRemoteComponent("InlineSpacer");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/Link/Link.mjs
  var Link = createRemoteComponent("Link");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/Text/Text.mjs
  var Text = createRemoteComponent("Text");

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/checkout/components/View/View.mjs
  var View = createRemoteComponent("View");

  // extensions/delivery-guarantee/src/components/widget.js
  var queryNodeByProps = (root, selector) => {
    var _a;
    for (let i = 0, len = (_a = root == null ? void 0 : root.children) == null ? void 0 : _a.length; i < len; i++) {
      const child = root.children[i];
      if (child == null ? void 0 : child.props) {
        let matched = true;
        Object.entries(selector).forEach(([key, value]) => {
          if (child.props[key] !== value) {
            matched = false;
          }
        });
        if (matched) {
          return child;
        } else if (child.children) {
          return queryNodeByProps(child, selector);
        }
      } else {
        if (child.children) {
          return queryNodeByProps(child, selector);
        }
      }
    }
  };
  var renderDescription = (root, quotation) => {
    const { currencyCode, price } = quotation;
    let amount = null;
    let currencySymbol = null;
    if (currencyCode.toLocaleUpperCase() === "EUR") {
      const numberFormat = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: currencyCode
      });
      const parts = numberFormat.formatToParts(price);
      const partValues = parts.map((p) => p.value);
      currencySymbol = partValues.pop();
      partValues.pop();
      amount = partValues.join("");
    } else {
      const numberFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyCode
      });
      const parts = numberFormat.formatToParts(price);
      const partValues = parts.map((p) => p.value);
      currencySymbol = partValues.shift();
      amount = partValues.join("");
    }
    const description = `Protect against shipping loss, damage, theft & offset emissions for ${currencySymbol}${amount} ${currencyCode}`;
    return root.createComponent(Text, void 0, description);
  };
  var changeHandler = (checked, api, quotation) => __async(void 0, null, function* () {
    const { lines, applyCartLinesChange } = api;
    if (checked) {
      const resp = yield applyCartLinesChange({
        type: "addCartLine",
        merchandiseId: `gid://shopify/ProductVariant/${quotation.variantId}`,
        quantity: 1
      }).catch(console.log);
      console.log("cart updated:", "add seel variant due to user action", resp);
      return resp;
    } else {
      const cartLine = lines.current.find(
        (line) => line.merchandise.id.includes(quotation.variantId)
      );
      if (cartLine == null ? void 0 : cartLine.id) {
        const resp = yield applyCartLinesChange({
          type: "removeCartLine",
          id: cartLine.id,
          quantity: cartLine.quantity || 1
        }).catch(console.log);
        console.log(
          "cart updated:",
          "remove seel variant due to user action",
          resp
        );
        return resp;
      }
    }
  });
  var widget_default = (root, api, { initialCheckboxStatus, quotation }) => {
    return root.createComponent(
      BlockLayout,
      {
        rows: ["auto", "auto", "auto"],
        border: "base",
        cornerRadius: "base",
        padding: "base"
      },
      [
        root.createComponent(
          InlineStack,
          {
            spacing: "base",
            padding: "none",
            blockAlignment: "center"
          },
          [
            root.createComponent(
              Checkbox,
              {
                id: "delivery-guarantee-checkbox",
                name: "delivery-guarantee-checkbox",
                value: Boolean(initialCheckboxStatus),
                onChange: (value) => __async(void 0, null, function* () {
                  changeHandler(value, api, quotation);
                  const target = queryNodeByProps(root, {
                    id: "delivery-guarantee-checkbox"
                  });
                  if (target) {
                    target.updateProps({ value });
                  }
                })
              },
              ""
            ),
            root.createComponent(
              Text,
              {
                emphasis: "bold"
              },
              "Delivery Guarantee\u2122"
            ),
            // https://static.seel.com/image/widget-info-icon.svg
            root.createComponent(
              View,
              {
                border: "none",
                padding: "none",
                maxInlineSize: Style.default(14)
              },
              root.createComponent(
                Link,
                { to: "https://www.seel.com/" },
                root.createComponent(Image, {
                  loading: "lazy",
                  source: "https://static.seel.com/image/widget-info-icon.svg"
                })
              )
            )
          ]
        ),
        root.createComponent(BlockSpacer, { spacing: "extraTight" }),
        root.createComponent(
          InlineLayout,
          {
            columns: ["auto", "auto", "fill"],
            blockAlignment: "center"
          },
          [
            root.createComponent(
              View,
              {
                border: "none",
                padding: "none",
                maxInlineSize: Style.default(20)
              },
              root.createComponent(Image, {
                loading: "lazy",
                source: "https://static.seel.com/image/spo-sp-widget-icon.png"
              })
            ),
            root.createComponent(InlineSpacer, { spacing: "base" }),
            renderDescription(root, quotation)
          ]
        )
      ]
    );
  };

  // extensions/delivery-guarantee/src/common/constant.js
  var SEEL_SESSION_ID_STORAGE = "seel-session-id";
  var SEEL_USER_ID_STORAGE = "seel-user-id";
  var SP_QUOTE_ID_IN_ATTRIBUTE = "sp_quote_id";
  var extensionTarget = "purchase.checkout.delivery-address.render-after";

  // extensions/delivery-guarantee/src/utils/index.js
  var import_lodash = __toESM(require_lodash());
  var convertGidToId = (gid) => {
    return gid.split("/").pop();
  };
  var calculatePrices = ({ variant, cartLine }) => {
    const { compareAtPrice, price } = variant;
    const { quantity } = cartLine;
    return {
      price: parseInt(price.amount * 100),
      discounted_price: parseInt(price.amount * 100),
      line_price: parseInt(price.amount * quantity * 100),
      final_price: parseInt(price.amount * 100),
      final_line_price: parseInt(price.amount * quantity * 100)
    };
  };
  var formatQuotation = (quotation) => {
    const {
      status,
      quote_id,
      currencyCode,
      currencySymbol,
      bp_price,
      bp_variant_id,
      bp_product_id,
      bp_value,
      eligible_items
    } = quotation;
    const eligibleItems = eligible_items.map((obj) => {
      return Object.entries(obj).map(([key, value]) => {
        return {
          [(0, import_lodash.default)(key)]: value
        };
      });
    });
    return {
      status,
      quoteId: quote_id,
      currencyCode,
      currencySymbol,
      price: bp_price,
      variantId: bp_variant_id,
      productId: bp_product_id,
      value: bp_value,
      eligibleItems
    };
  };
  var detectSeelVariantsInCart = ({ cart, quotation }) => {
    const { productId, variantId } = quotation;
    const { items } = cart;
    const seelVariants = items.filter(
      (item) => item["product_id"] == productId ? true : false
    );
    if (!(seelVariants == null ? void 0 : seelVariants.length)) {
      return [];
    }
    let seelVariantMatchedWithQuotation = null;
    const seelVariantsNotMatchedWithQuotation = [];
    seelVariants.forEach((variant) => {
      if (variant["variant_id"] == variantId) {
        seelVariantMatchedWithQuotation = variant;
      } else {
        seelVariantsNotMatchedWithQuotation.push(variant);
      }
    });
    return [seelVariantMatchedWithQuotation, seelVariantsNotMatchedWithQuotation];
  };
  var cleanCart = (_0, _1) => __async(void 0, [_0, _1], function* (api, { seelVariantMatchedWithQuotation, seelVariantsNotMatchedWithQuotation }) {
    if (!seelVariantMatchedWithQuotation && !(seelVariantsNotMatchedWithQuotation == null ? void 0 : seelVariantsNotMatchedWithQuotation.length)) {
      return true;
    }
    const { lines, applyCartLinesChange } = api;
    for (let i = 0, len = seelVariantsNotMatchedWithQuotation.length; i < len; i++) {
      const notMatchedItem = seelVariantsNotMatchedWithQuotation[i];
      const found = lines.current.find(
        (l) => l.merchandise.id.includes(notMatchedItem.id)
      );
      const resp = yield applyCartLinesChange({
        type: "removeCartLine",
        id: found.id,
        quantity: found.quantity
      }).catch(console.log);
      console.log("cart updated:", "remove not matched seel variants", resp);
    }
    if (seelVariantMatchedWithQuotation && (seelVariantMatchedWithQuotation == null ? void 0 : seelVariantMatchedWithQuotation.quantity) !== 1) {
      const found = lines.current.find(
        (l) => l.merchandise.id.includes(seelVariantMatchedWithQuotation == null ? void 0 : seelVariantMatchedWithQuotation.id)
      );
      if (found) {
        const resp = yield applyCartLinesChange({
          type: "updateCartLine",
          id: String(found.id),
          merchandiseId: found.merchandise.id,
          quantity: 1
        }).catch(console.log);
        console.log(
          "cart updated:",
          "keep matched seel variant with quantity 1 only",
          resp
        );
      }
    }
  });
  var getInitialCheckboxStatus = (_0, _1) => __async(void 0, [_0, _1], function* (api, { profile, seelVariantMatchedWithQuotation }) {
    if (Boolean(seelVariantMatchedWithQuotation)) {
      return Boolean(seelVariantMatchedWithQuotation);
    } else {
      return profile.defaultOpt === "true" || profile.defaultOpt === true;
    }
  });
  var syncCartWithCheckboxStatus = (_0, _1) => __async(void 0, [_0, _1], function* (api, {
    initialCheckboxStatus,
    profile,
    quotation,
    seelVariantMatchedWithQuotation
  }) {
    const { applyCartLinesChange } = api;
    if (initialCheckboxStatus) {
      if (seelVariantMatchedWithQuotation) {
      } else {
        const resp = yield applyCartLinesChange({
          type: "addCartLine",
          merchandiseId: `gid://shopify/ProductVariant/${quotation.variantId}`,
          quantity: 1
        });
        console.log("cart updated:", "add seel variant due to default-on", resp);
        return resp;
      }
    } else {
      if (seelVariantMatchedWithQuotation) {
      } else {
      }
    }
  });

  // node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
  }

  // node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // extensions/delivery-guarantee/src/apis/index.js
  var getProductVariant = (_0, _1) => __async(void 0, [_0, _1], function* ({ shop }, line) {
    const queryProductVariant = {
      query: `query {
      product(id: "${btoa(line.productId)}") {
        ... on Product {
          id
          title
          handle
          description
          isGiftCard
          productType
          featuredImage {
            altText
            height
            width
            url
          }
        }
      }
      node(id: "${btoa(line.variantId)}") {
        ... on ProductVariant {
          id
          title
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          sku
          taxable
          image {
            altText
            height
            width
            url
          }
        }
      }
    }`
    };
    const resp = yield fetch(`${shop.storefrontUrl}api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(queryProductVariant)
    }).catch(console.log);
    try {
      const { data } = yield resp.json();
      const { node: variant, product } = data;
      return { variant, product, cartLine: line.cartLine };
    } catch (e) {
      return null;
    }
  });
  var constructCart = (_0) => __async(void 0, [_0], function* ({ lines, shop }) {
    const itemsInCart = lines.current.map((line) => {
      const { merchandise, quantity, cost, attributes } = line;
      const { id, product } = merchandise;
      return {
        variantId: id,
        productId: product.id,
        cartLine: { quantity, cost, attributes, merchandise }
      };
    });
    const result = yield Promise.all(
      itemsInCart.map((item) => getProductVariant({ lines, shop }, item))
    ).catch(console.log);
    const items = result.filter(Boolean) || [];
    const cartLines = items.map(({ variant, product, cartLine }) => {
      const { quantity, merchandise } = cartLine;
      const {
        price,
        discounted_price,
        line_price,
        final_price,
        final_line_price
      } = calculatePrices({ variant, product, cartLine });
      return {
        id: convertGidToId(variant.id),
        quantity,
        variant_id: convertGidToId(variant.id),
        title: `${product.title} - ${variant.title}`,
        price,
        discounted_price,
        line_price,
        final_price,
        final_line_price,
        sku: variant.sku,
        product_id: convertGidToId(product.id),
        requires_shipping: merchandise.requiresShipping,
        product_title: product.title,
        variant_title: variant.title
      };
    });
    return cartLines;
  });
  var getOrCreateSessionId = (_0) => __async(void 0, [_0], function* ({ storage }) {
    let sessionId = yield storage.read(SEEL_SESSION_ID_STORAGE);
    if (!sessionId) {
      sessionId = v4_default();
      storage.write(SEEL_SESSION_ID_STORAGE, sessionId);
    }
    return sessionId;
  });
  var getOrCreateUserId = (_0) => __async(void 0, [_0], function* ({ storage }) {
    let userId = yield storage.read(SEEL_USER_ID_STORAGE);
    if (!userId) {
      userId = v4_default();
      storage.write(SEEL_USER_ID_STORAGE, userId);
    }
    return userId;
  });
  var updateCartAttributes = (_0, _1) => __async(void 0, [_0, _1], function* ({ applyAttributeChange }, attributes) {
    const result = yield Promise.all(
      Object.entries(attributes).map(
        ([key, value]) => applyAttributeChange({
          type: "updateAttribute",
          key,
          value
        })
      )
    ).catch(console.log);
    return result;
  });

  // extensions/delivery-guarantee/src/apis/services.js
  var getMerchantProfile = (api) => __async(void 0, null, function* () {
    const { shop } = api;
    const { myshopifyDomain } = shop;
    const resp = yield fetch(
      `https://api.seel.com/gateway/merchant-service/api/query-shopify-bp-config?shopDomain=${myshopifyDomain}`,
      {
        headers: {
          "x-request-id": `${v4_default()}__${Date.now()}`
        },
        method: "GET"
      }
    );
    const { code, data } = yield resp.json();
    if (code === 0 && data) {
      return data;
    } else {
      return null;
    }
  });
  var getQuotation = (_0, _1) => __async(void 0, [_0, _1], function* (api, { source, cartInfo, sessionId, userId }) {
    var _a;
    const payload = {
      source: source || "checkout",
      cart_info: cartInfo,
      customer_info: {
        timestamp_in_ms: Date.now(),
        device_id: userId,
        user_id: sessionId
      },
      shop_domain: ((_a = api == null ? void 0 : api.shop) == null ? void 0 : _a.myshopifyDomain) || ""
    };
    const resp = yield fetch(
      "https://api.seel.com/gateway/quotes-service/api/bp-quotes",
      {
        headers: {
          "x-request-id": `${v4_default()}__${Date.now()}`,
          "content-type": "application/json"
        },
        body: JSON.stringify(payload),
        method: "POST"
      }
    ).catch(console.log);
    const { code, data } = yield resp.json();
    if (code === 0 && data) {
      return formatQuotation(data);
    } else {
      return null;
    }
  });

  // extensions/delivery-guarantee/src/index.js
  var src_default = extension(extensionTarget, (root, api) => __async(void 0, null, function* () {
    const {
      cost,
      lines,
      query,
      shop,
      checkoutToken,
      storage,
      applyAttributeChange,
      applyCartLinesChange
    } = api;
    const profile = yield getMerchantProfile(api).catch(console.log);
    const sessionId = yield getOrCreateSessionId(api);
    const userId = yield getOrCreateUserId(api);
    if ((profile == null ? void 0 : profile.status) !== "active") {
      return null;
    }
    const items = yield constructCart(api).catch(console.log);
    const cart = {
      items,
      token: checkoutToken.current,
      currency: cost.totalAmount.current.currencyCode
    };
    const quotation = yield getQuotation(api, {
      source: "checkout",
      cartInfo: cart,
      sessionId,
      userId
    }).catch(console.log);
    console.log(root, api, cart, profile, quotation);
    if ((quotation == null ? void 0 : quotation.status) !== "accepted") {
      return null;
    }
    const [seelVariantMatchedWithQuotation, seelVariantsNotMatchedWithQuotation] = detectSeelVariantsInCart({ cart, quotation });
    yield cleanCart(api, {
      seelVariantMatchedWithQuotation,
      seelVariantsNotMatchedWithQuotation
    });
    const initialCheckboxStatus = yield getInitialCheckboxStatus(api, {
      profile,
      seelVariantMatchedWithQuotation
    });
    yield syncCartWithCheckboxStatus(api, {
      initialCheckboxStatus,
      profile,
      quotation,
      seelVariantMatchedWithQuotation
    });
    updateCartAttributes(api, {
      [SP_QUOTE_ID_IN_ATTRIBUTE]: quotation.quoteId
    }).catch(console.log);
    const widget = widget_default(root, api, { initialCheckboxStatus, quotation });
    if (widget) {
      root.appendChild(widget);
    }
  }));
})();
//# sourceMappingURL=delivery-guarantee.js.map
