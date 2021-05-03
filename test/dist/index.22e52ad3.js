// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"51Zw2":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "a6b4334c9034d66f4ad0e68422e52ad3";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"2d83k":[function(require,module,exports) {
var _gsap = require("gsap");
var _scroll = require("./scroll");
var _gsapScrollTrigger = require("gsap/ScrollTrigger");
var _gsapDrawSVGPlugin = require("gsap/DrawSVGPlugin");
var _gsapSplitText = require("gsap/SplitText");
var _easing = require("./easing");
_gsap.gsap.registerPlugin(_gsapDrawSVGPlugin.DrawSVGPlugin);
_gsap.gsap.registerPlugin(_gsapScrollTrigger.ScrollTrigger);
// ARROW BTN ANIMATION
let arrow_btn = document.querySelectorAll(".c-project-info");
arrow_btn.forEach(arrow);
let btn_anim = _gsap.gsap.timeline({
  ease: _easing.smooth
});
function arrow(btn) {
  btn.addEventListener("mouseenter", () => {
    btn_anim.set(btn.querySelector("#line1"), {
      drawSVG: "100%"
    }).set(btn.querySelector("#line2"), {
      drawSVG: 0
    }).set(btn.querySelector("#arrow-head-1"), {
      drawSVG: "100%"
    }).set(btn.querySelector("#arrow-head-2"), {
      drawSVG: 0
    }).to(btn.querySelector("#line1"), {
      drawSVG: "100% 100%",
      duration: .2
    }).to(btn.querySelector("#arrow-head-1"), {
      drawSVG: "100% 100%",
      duration: .2
    }).to(btn.querySelector("#arrow-head-2"), {
      drawSVG: "100%",
      duration: .4
    }).to(btn.querySelector("#line2"), {
      drawSVG: "100%",
      duration: .2
    });
  });
}
// SPLIT THE TEXT
let parent = new _gsapSplitText.SplitText(".js-split", {
  type: "lines",
  linesClass: "line-parent"
});
let child = new _gsapSplitText.SplitText(".js-split > .line-parent", {
  type: "lines",
  linesClass: "line-child"
});
// ONLOAD ANIMATION
let first_reveal = _gsap.gsap.timeline({
  paused: true,
  defaults: {
    ease: _easing.smooth
  }
}), home_title_anim = _gsap.gsap.timeline({
  paused: true,
  defaults: {
    ease: _easing.smooth
  }
});
first_reveal.to(".js-split .line-child", {
  y: "-100%"
}).to(".js-loader-title-child", {
  y: 0,
  rotate: 0,
  stagger: .4,
  duration: 1.4
}).to(".js-loader-title-child", {
  y: "-108%",
  rotate: -3,
  stagger: .4,
  duration: 1.4
}, "+=1").fromTo(".c-loader__bg", {
  y: "0",
  stagger: .4
}, {
  y: "-100%",
  duration: 1,
  stagger: .1,
  onComplete: () => {
    home_title_anim.play();
  }
}).set(".c-loader__bg", {
  y: "100%"
}).set(".js-loader-title-child", {
  clearProps: "y,rotate"
});
home_title_anim.from(".js-hero-title .line-child", {
  y: "100%",
  stagger: .4,
  duration: 1.9
}).from(".c-visual-line", {
  scaleX: 0,
  duration: .6
}).fromTo("#v_path", {
  drawSVG: 0
}, {
  drawSVG: "100%",
  duration: .2,
  ease: "power1.out"
}, "-=1").fromTo("#i_path", {
  drawSVG: 0
}, {
  drawSVG: "100%",
  duration: .3,
  ease: "power1.out"
}).fromTo("#s_path", {
  drawSVG: 0
}, {
  drawSVG: "100%",
  duration: .4,
  ease: "power1.out"
}).fromTo("#u_path", {
  drawSVG: 0
}, {
  drawSVG: "100%",
  duration: .5,
  ease: "power1.out"
}).fromTo("#a_path", {
  drawSVG: 0
}, {
  drawSVG: "100%",
  duration: .6,
  ease: "power1.out"
}).fromTo("#l_path", {
  drawSVG: 0
}, {
  drawSVG: "100%",
  duration: .8,
  ease: _easing.smooth
}).fromTo("#dot_path", {
  drawSVG: 0
}, {
  drawSVG: "100%",
  duration: .3,
  ease: "power1.out"
}).from(".c-title .o-title-small .line-child", {
  y: "100%",
  duration: .8
}, "-=1");
window.onload = () => {
  first_reveal.play();
};
// MAKE SCROLL TRIGGER WORK WITH LOCO
_scroll.lscroll.on("scroll", _gsapScrollTrigger.ScrollTrigger.update);
_gsapScrollTrigger.ScrollTrigger.scrollerProxy("#js-scroll", {
  scrollTop(value) {
    return arguments.length ? _scroll.lscroll.scrollTo(value, 0, 0) : _scroll.lscroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector("#js-scroll").style.transform ? "transform" : "fixed"
});
_gsapScrollTrigger.ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
});
// SCROLL TRIGGER ANIMATIONS
_gsap.gsap.utils.toArray(".js-reveal").forEach(section => {
  _gsap.gsap.from(section.querySelectorAll(".line-child"), {
    scrollTrigger: {
      trigger: section,
      scroller: "#js-scroll"
    },
    y: "100%",
    ease: _easing.smooth,
    duration: 1.8,
    stagger: 0.2
  });
});
_gsap.gsap.utils.toArray(".c-project").forEach(section => {
  _gsap.gsap.from(section.querySelectorAll("a > img"), {
    scrollTrigger: {
      trigger: section,
      scroller: "#js-scroll"
    },
    scale: 1.4,
    ease: "Power4.out",
    duration: .9
  });
});
_gsap.gsap.utils.toArray(".c-project").forEach(section => {
  _gsap.gsap.from(section.querySelectorAll("a > img"), {
    scrollTrigger: {
      trigger: section,
      scroller: "#js-scroll",
      scrub: true
    },
    y: "-20%",
    ease: "Power4.out",
    duration: .8
  });
});
// window.addEventListener("resize", resize)
// resize();
// function resize() {
// if (window.matchMedia("(min-width: 900px)").matches) {
// let card = document.querySelectorAll(".js-cards > div");
// gsap.from(card[0], {scrollTrigger:{trigger: ".c-about", scroller: "#js-scroll", scrub: true}, y: "-10%", rotate:"-20deg"})
// gsap.from(card[1], {scrollTrigger:{trigger: ".c-about", scroller: "#js-scroll", scrub: true}, y: "-5%", rotate:"-10deg"})
// gsap.from(card[2], {scrollTrigger:{trigger: ".c-about", scroller: "#js-scroll", scrub: true}, y: "-5%", rotate:"-5deg"})
// }
// }
// MAKE SCROLLTRIGGER WORK AGAIN
_gsapScrollTrigger.ScrollTrigger.addEventListener("refresh", () => _scroll.lscroll.update());
_gsapScrollTrigger.ScrollTrigger.refresh();
// TIME FUNCTIONS
function calcTime(offset) {
  let d = new Date();
  let utc = d.getTime() + d.getTimezoneOffset() * 60000;
  let nd = new Date(utc + 3600000 * offset);
  return nd.getHours() + ":" + nd.getMinutes();
}
(() => {
  if (window.matchMedia("(min-width: 900px)").matches) {
    let card = document.querySelectorAll(".js-cards > div");
    _gsap.gsap.from(card[0], {
      scrollTrigger: {
        trigger: ".c-about",
        scroller: "#js-scroll",
        scrub: true
      },
      y: "-10%",
      rotate: "-20deg"
    });
    _gsap.gsap.from(card[1], {
      scrollTrigger: {
        trigger: ".c-about",
        scroller: "#js-scroll",
        scrub: true
      },
      y: "-5%",
      rotate: "-10deg"
    });
    _gsap.gsap.from(card[2], {
      scrollTrigger: {
        trigger: ".c-about",
        scroller: "#js-scroll",
        scrub: true
      },
      y: "-5%",
      rotate: "-5deg"
    });
  }
  document.querySelectorAll(".js-year").forEach(elm => {
    elm.innerHTML = "©" + new Date().getFullYear();
  });
  document.querySelectorAll(".js-time")[0].innerHTML = calcTime(+5.5);
})();
setInterval(() => {
  document.querySelectorAll(".js-time")[0].innerHTML = calcTime(+5.5);
}, 60000);

},{"gsap":"1iecp","./scroll":"3JuFm","gsap/ScrollTrigger":"5s7rm","gsap/DrawSVGPlugin":"5Uk0L","gsap/SplitText":"2iSdi","./easing":"4PGiB"}]},["51Zw2","2d83k"], "2d83k", "parcelRequire8232")

//# sourceMappingURL=index.22e52ad3.js.map
