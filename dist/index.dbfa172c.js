// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3eBdr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "00bb1a78dbfa172c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8QaIK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gameJs = require("./game.js");
var _inputManagerJs = require("./inputManager.js");
var _inputManagerJsDefault = parcelHelpers.interopDefault(_inputManagerJs);
var _tileJs = require("./tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _scoreboardJs = require("./scoreboard.js");
var _scoreboardJsDefault = parcelHelpers.interopDefault(_scoreboardJs);
document.addEventListener("DOMContentLoaded", ()=>{
    const gridContainer = document.getElementById("game-grid");
    const gridSize = 5; // Set the grid size you want (e.g. 5x5)
    const cellSize = 50; // Set the size of each hexagonal cell
    const cellMargin = 5; // Set the margin between cells
    (0, _gameJs.createHexagonalGrid)(gridContainer, gridSize, cellSize, cellMargin);
    const game = new (0, _gameJs.Game)(gridSize);
    const inputManager = new (0, _inputManagerJsDefault.default)();
    const powerUp = new PowerUp();
    const scoreboard = new (0, _scoreboardJsDefault.default)();
    inputManager.on("move", (direction)=>{
        game.move(direction);
        powerUp.checkAndUpdate(game);
        scoreboard.updateScore(game.score);
    });
    inputManager.on("newGame", ()=>{
        game.newGame();
        powerUp.reset();
        scoreboard.updateScore(0);
    });
    powerUp.on("powerUpActivated", (type)=>{
        game.activatePowerUp(type);
    });
    scoreboard.displayDailyScores();
});
document.addEventListener("DOMContentLoaded", ()=>{
    resetGame();
});

},{"./game.js":"4Je2L","./inputManager.js":"6J22J","./scoreboard.js":"4wxdE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./tile.js":"V1Pge"}],"4Je2L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tileJs = require("./tile.js");
var _hexGridJs = require("./hexGrid.js");
var _hexGridJsDefault = parcelHelpers.interopDefault(_hexGridJs);
var _powerUpJs = require("./powerUp.js");
var _inputManagerJs = require("./inputManager.js");
var _inputManagerJsDefault = parcelHelpers.interopDefault(_inputManagerJs);
var _scoreboardJs = require("./scoreboard.js");
var _scoreboardJsDefault = parcelHelpers.interopDefault(_scoreboardJs);
class Game {
    constructor(size = 4){
        this.size = size;
        this.grid = new (0, _hexGridJsDefault.default)(size);
        this.powerUpManager = new (0, _powerUpJs.PowerUpManager)();
        this.inputManager = new (0, _inputManagerJsDefault.default)();
        this.scoreboard = new (0, _scoreboardJsDefault.default)();
        this.timer = 0;
        this.currentScore = 0;
    }
    initialize() {
        // Set up event listeners
        this.inputManager.on("move", (direction)=>this.move(direction));
        this.inputManager.on("restart", ()=>this.restart());
        console.log("Initializing game..."); // Debugging
        // Hide the power-up feature for now
        /*
    // Initialize power-ups in the PowerUpManager
    this.powerUpManager.powerUps = [
      // Add your power-up instances here, e.g.:
      // new PowerUp("type1", "PowerUp 1", effectFunction1, "icon1"),
      // new PowerUp("type2", "PowerUp 2", effectFunction2, "icon2"),
    ];
    
    // Set up event listeners for power-ups
    this.powerUpManager.powerUps.forEach((powerUp) => {
      document.querySelector(`#power-up-${powerUp.type}`).addEventListener("click", () => {
        this.powerUpManager.activatePowerUp(powerUp.type, this.grid);
        this.updateUI();
      });
    });
    */ // Place initial tiles
        this.addRandomTile();
        this.startTimer();
        this.updateUI();
        // Update UI for the first time
        this.updateUI();
    }
    // Timer
    startTimer() {
        setInterval(()=>{
            this.timer++;
            this.updateTimer();
        }, 1000); // Increment the timer every 1000ms (1s)
    }
    addRandomTile() {
        const tile = this.grid.randomAvailableCell();
        console.log("Adding random tile..."); // Debugging
        if (tile) {
            const newTile = new (0, _tileJs.Tile)(tile.x, tile.y, this.randomColor());
            this.grid.addTile(newTile);
        }
    }
    randomColor() {
        const colors = [
            "red",
            "blue",
            "green",
            "yellow"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    move(direction) {
        const previousGrid = this.grid.serialize();
        // Call the move method and get the score in the same line
        const moveScore = this.grid.move(direction);
        const moved = this.grid.serialize() !== previousGrid;
        if (moved) {
            this.grid.addRandomTile();
            this.grid.checkAndExpandBoard();
            this.updateUI();
        }
        // Update the current game score
        this.currentScore += moveScore;
    }
    updateUI() {
        const gridContainer = document.getElementById("game-grid");
        gridContainer.innerHTML = "";
        const cellSize = 50; // Set the size of each hexagonal cell
        const cellMargin = 5; // Set the margin between cells
        for(let x = 0; x < this.grid.size; x++)for(let y = 0; y < this.grid.size; y++){
            const cell = document.createElement("div");
            cell.classList.add("hexagonal-cell");
            const xPos = y * (cellSize + cellMargin) + (x % 2 === 0 ? 0 : cellSize / 2 + cellMargin / 2);
            const yPos = x * (3 / 4 * cellSize + cellMargin);
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.style.left = `${xPos}px`;
            cell.style.top = `${yPos}px`;
            const tile = this.grid.cellContent({
                x,
                y
            });
            if (tile) {
                const tileElement = document.createElement("div");
                tileElement.classList.add("tile");
                if (tile instanceof (0, _tileJs.ObstacleTile)) {
                    tileElement.classList.add("obstacle-tile");
                    tileElement.innerText = "O"; // You can replace "O" with an obstacle icon or symbol
                } else if (tile instanceof (0, _tileJs.TransformationTile)) {
                    tileElement.classList.add("transformation-tile");
                    tileElement.innerText = "T"; // You can replace "T" with a transformation icon or symbol
                } else {
                    tileElement.classList.add("color-tile");
                    tileElement.style.backgroundColor = tile.color;
                }
                cell.appendChild(tileElement);
            }
            gridContainer.appendChild(cell);
        }
        // Update score
        const scoreElement = document.getElementById("score");
        scoreElement.innerText = this.currentScore;
        // Update timer
        this.updateTimer();
        // Update power-ups
        this.powerUpManager.powerUps.forEach((powerUp)=>{
            const powerUpElement = document.querySelector(`#power-up-${powerUp.type}`);
            powerUpElement.querySelector(".count").innerText = powerUp.count;
        });
    }
}
// Add the updateTimer method here, within the Game class
updateTimer();
const now = new Date();
const elapsedTime = Math.floor((now - undefined.startTime) / 1000);
const minutes = Math.floor(elapsedTime / 60);
const seconds = elapsedTime % 60;
timerElement.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
restart();
// ... restart logic
undefined.updateUI();
// ... other methods and game logic
exports.default = Game;

},{"./tile.js":"V1Pge","./powerUp.js":"9gUXS","./inputManager.js":"6J22J","./scoreboard.js":"4wxdE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./hexGrid.js":"aIDz4"}],"V1Pge":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tile", ()=>Tile);
parcelHelpers.export(exports, "ObstacleTile", ()=>ObstacleTile);
parcelHelpers.export(exports, "TransformationTile", ()=>TransformationTile);
class Tile {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    }
    updatePosition(position) {
        this.x = position.x;
        this.y = position.y;
    }
    canMergeWith(tile) {
        return this.color !== tile.color;
    }
    mergeWith(tile) {
        const mergedColor = this.getMergedColor(this.color, tile.color);
        return new Tile(this.x, this.y, mergedColor);
    }
    getMergedColor(color1, color2) {
        const colorMap = {
            "red": {
                "green": "yellow",
                "blue": "magenta",
                "red": "red"
            },
            "green": {
                "red": "yellow",
                "blue": "cyan",
                "green": "green"
            },
            "blue": {
                "red": "magenta",
                "green": "cyan",
                "blue": "blue"
            },
            "yellow": {
                "red": "white",
                "green": "yellow",
                "blue": "white"
            },
            "magenta": {
                "red": "magenta",
                "green": "white",
                "blue": "blue"
            },
            "cyan": {
                "red": "white",
                "green": "green",
                "blue": "cyan"
            }
        };
        return colorMap[color1][color2];
    }
}
class ObstacleTile extends Tile {
    constructor(x, y){
        super(x, y, null); // No color for obstacle tiles
    }
    // Override the merge method so that obstacle tiles cannot merge
    canMergeWith() {
        return false;
    }
}
class TransformationTile extends Tile {
    constructor(x, y){
        super(x, y, null); // No color for transformation tiles
        this.isTransformationTile = true;
    }
    // Override the merge method so that transformation tiles cannot merge
    canMergeWith() {
        return false;
    }
}
exports.default = Tile;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9gUXS":[function(require,module,exports) {
class PowerUp {
    constructor(type, effect){
        this.type = type;
        this.effect = effect;
    }
    activate(grid) {
        this.effect(grid);
    }
}
// Export the PowerUp class
if (0, module.exports) module.exports = PowerUp;

},{}],"6J22J":[function(require,module,exports) {
// Input Handler Class
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class InputHandler {
    constructor(){
        this.touchStartX = null;
        this.touchStartY = null;
        this.mouseDown = false;
        this.callbacks = {};
        this.setupKeyboardControls();
        this.setupTouchControls();
        this.setupMouseControls();
    }
    on(event, callback) {
        this.callbacks[event] = callback;
    }
    off(event) {
        delete this.callbacks[event];
    }
    emit(event, ...args) {
        if (this.callbacks[event]) this.callbacks[event](...args);
    }
    // Keyboard Controls
    setupKeyboardControls() {
        document.addEventListener("keydown", (event)=>{
            let direction = null;
            switch(event.key){
                case "ArrowUp":
                case "w":
                    direction = "up";
                    break;
                case "ArrowDown":
                case "s":
                    direction = "down";
                    break;
                case "ArrowLeft":
                case "a":
                    direction = "left";
                    break;
                case "ArrowRight":
                case "d":
                    direction = "right";
                    break;
            }
            if (direction) this.emit("move", direction);
        });
    }
    // Touch Controls
    setupTouchControls() {
        document.addEventListener("touchstart", (event)=>{
            if (event.touches.length !== 1) return;
            this.touchStartX = event.touches[0].clientX;
            this.touchStartY = event.touches[0].clientY;
        });
        document.addEventListener("touchmove", this.onTouchMove.bind(this));
    }
    // Mouse Controls
    setupMouseControls() {
        document.addEventListener("mousedown", (event)=>{
            this.mouseDown = true;
            this.touchStartX = event.clientX;
            this.touchStartY = event.clientY;
        });
        document.addEventListener("mousemove", this.onMouseMove.bind(this));
        document.addEventListener("mouseup", this.onMouseUp.bind(this));
    }
    onTouchMove(event) {
        if (event.touches.length !== 1) return;
        const touchEndX = event.touches[0].clientX;
        const touchEndY = event.touches[0].clientY;
        const deltaX = touchEndX - this.touchStartX;
        const deltaY = touchEndY - this.touchStartY;
        const direction = this.getDirectionFromDelta(deltaX, deltaY);
        if (direction) {
            this.emit("move", direction);
            event.preventDefault();
        }
    }
    onMouseMove(event) {
        if (!this.mouseDown) return;
        const touchEndX = event.clientX;
        const touchEndY = event.clientY;
        const deltaX = touchEndX - this.touchStartX;
        const deltaY = touchEndY - this.touchStartY;
        const direction = this.getDirectionFromDelta(deltaX, deltaY);
        if (direction) {
            this.mouseDown = false;
            this.emit("move", direction);
        }
    }
    onMouseUp(event) {
        this.mouseDown = false;
    }
    getDirectionFromDelta(deltaX, deltaY) {
        const threshold = 50;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > threshold) return "right";
            else if (deltaX < -threshold) return "left";
        } else {
            if (deltaY > threshold) return "down";
            else if (deltaY < -threshold) return "up";
        }
        return null;
    }
}
// Export the InputHandler class
exports.default = InputHandler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wxdE":[function(require,module,exports) {
class Scoreboard {
    constructor(){
        this.scores = this.loadScores() || [];
    }
    loadScores() {
        const scoresJSON = localStorage.getItem("colorMergeScores");
        return scoresJSON ? JSON.parse(scoresJSON) : [];
    }
    saveScores() {
        const scoresJSON = JSON.stringify(this.scores);
        localStorage.setItem("colorMergeScores", scoresJSON);
    }
    addScore(user, score) {
        const currentDate = new Date().toDateString();
        const entry = {
            date: currentDate,
            user,
            score
        };
        this.scores.push(entry);
        this.scores.sort((a, b)=>b.score - a.score);
        this.saveScores();
    }
    getDailyScores() {
        const currentDate = new Date().toDateString();
        return this.scores.filter((entry)=>entry.date === currentDate);
    }
    displayDailyScores() {
        const dailyScores = this.getDailyScores();
        const scoreList = document.getElementById("scoreList");
        scoreList.innerHTML = "";
        dailyScores.forEach((scoreEntry)=>{
            const listItem = document.createElement("li");
            listItem.textContent = `${scoreEntry.user}: ${scoreEntry.score}`;
            scoreList.appendChild(listItem);
        });
    }
}
if (0, module.exports) module.exports = Scoreboard;

},{}],"aIDz4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HexGrid", ()=>HexGrid);
var _tileJs = require("./tile.js");
class HexGrid {
    constructor(size){
        this.size = size;
        this.cells = this.empty();
    }
    // Create an empty grid
    empty() {
        const cells = [];
        for(let x = 0; x < this.size; x++){
            const row = [];
            cells.push(row);
            for(let y = 0; y < this.size; y++)row.push(null);
        }
        return cells;
    }
    // Add a new tile to the grid
    addTile(tile) {
        this.cells[tile.x][tile.y] = tile;
    }
    // Add a new tile with a random color to an empty cell
    addRandomTile() {
        const availableColors = [
            "red",
            "green",
            "blue"
        ];
        const emptyCells = [];
        for(let row = 0; row < this.size; row++){
            for(let col = 0; col < this.size; col++)if (this.isCellEmpty(row, col)) emptyCells.push({
                row,
                col
            });
        }
        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const randomCell = emptyCells[randomIndex];
            const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
            const newTile = new (0, _tileJs.Tile)(randomCell.row, randomCell.col, randomColor);
            this.addTile(newTile);
        }
    }
    // Check if there are any available cells in the grid
    cellsAvailable() {
        for(let row = 0; row < this.size; row++)for(let col = 0; col < this.size; col++){
            if (this.isCellEmpty(row, col)) return true;
        }
        return false;
    }
    isCellEmpty(row, col) {
        return this.cells[row][col] === null;
    }
    isCellWithinBounds(cell) {
        return cell.x >= 0 && cell.x < this.size && cell.y >= 0 && cell.y < this.size;
    }
    // Merge tiles color logic
    getMergedColor(color1, color2) {
        const colorMap = {
            "red": {
                "green": "yellow",
                "blue": "magenta",
                "red": "red"
            },
            "green": {
                "red": "yellow",
                "blue": "cyan",
                "green": "green"
            },
            "blue": {
                "red": "magenta",
                "green": "cyan",
                "blue": "blue"
            },
            "yellow": {
                "red": "white",
                "green": "yellow",
                "blue": "white"
            },
            "magenta": {
                "red": "magenta",
                "green": "white",
                "blue": "blue"
            },
            "cyan": {
                "red": "white",
                "green": "green",
                "blue": "cyan"
            }
        };
        return colorMap[color1][color2];
    }
    // Add movement and merging logic for hexagonal grid
    move(direction) {
        // Movement logic implementation based on the given direction.
        // The logic should consider the hexagonal structure and the six possible directions.
        let moved = false;
        const directions = {
            up: {
                x: 0,
                y: -1
            },
            down: {
                x: 0,
                y: 1
            },
            left: {
                x: -1,
                y: 0
            },
            right: {
                x: 1,
                y: 0
            },
            upLeft: {
                x: -1,
                y: -1
            },
            upRight: {
                x: 1,
                y: -1
            }
        };
        const vector = directions[direction];
        const traverseCells = (callback)=>{
            const reverse = direction === "down" || direction === "right" || direction === "upRight";
            for(let x = 0; x < this.size; x++)for(let y = 0; y < this.size; y++){
                const row = reverse ? this.size - x - 1 : x;
                const col = reverse ? this.size - y - 1 : y;
                callback(row, col);
            }
        };
        const findFarthestPosition = (cell, vector)=>{
            let previous;
            do {
                previous = cell;
                cell = {
                    x: previous.x + vector.x,
                    y: previous.y + vector.y
                };
            }while (this.isCellWithinBounds(cell) && this.isCellEmpty(cell.x, cell.y));
            return {
                farthest: previous,
                next: cell
            };
        };
        const moveTile = (tile, cell)=>{
            this.cells[tile.x][tile.y] = null;
            this.cells[cell.x][cell.y] = tile;
            tile.updatePosition(cell);
        };
        const mergeTiles = (tile, targetTile, mergedColor)=>{
            const newTile = new (0, _tileJs.Tile)(targetTile.x, targetTile.y, mergedColor);
            this.cells[tile.x][tile.y] = null;
            this.cells[targetTile.x][targetTile.y] = newTile;
        };
        traverseCells((x, y)=>{
            const tile = this.cells[x][y];
            if (tile) {
                const positions = findFarthestPosition({
                    x,
                    y
                }, vector);
                const next = this.cells[positions.next.x][positions.next.y];
                if (next && next.color === tile.color) {
                    const mergedColor = this.getMergedColor(tile.color, next.color);
                    mergeTiles(tile, next, mergedColor);
                    moved = true;
                } else if (!this.isCellEmpty(positions.farthest.x, positions.farthest.y)) {
                    moveTile(tile, positions.farthest);
                    moved = true;
                }
            }
        });
        if (moved) this.addRandomTile();
    }
}
exports.default = HexGrid;

},{"./tile.js":"V1Pge","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3eBdr","8QaIK"], "8QaIK", "parcelRequiree40c")

//# sourceMappingURL=index.dbfa172c.js.map
