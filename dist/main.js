/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aznq.js":
/*!*********************!*\
  !*** ./src/aznq.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Aznq; });\n/* harmony import */ var _dot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dot.js */ \"./src/dot.js\");\n/* harmony import */ var _faction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faction.js */ \"./src/faction.js\");\n/* harmony import */ var _weapon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weapon.js */ \"./src/weapon.js\");\n\r\n\r\n\r\nclass Aznq{\r\n  constructor(config){\r\n    this.config = Object.assign(config, {\r\n      element: document.body,\r\n      backgroundColor: 'rgba(247,247,247,0.2)',\r\n      peerColor: '#272727',\r\n      waveSpeed: 3000\r\n    })\r\n\r\n    this.init()\r\n    this.build()\r\n    this.bind()\r\n\r\n    this.factions = [\r\n      new _faction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, \"#4285f4\", { x: this.c.width / 2, y: this.c.height - 10 }),\r\n      new _faction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, '#ea4335', { x: this.c.width / 2, y: 10 }),\r\n      // new Faction(2, '#FFBC05', { x: this.c.width / 2, y: 10 }),\r\n      // new Faction(3, '#34A853', { x: 10, y: this.c.height / 2 }),\r\n      // new Faction(4, '#4285f4', { x: this.c.width - 10, y: this.c.height / 2 }),\r\n    ]\r\n\r\n    this.character = new _dot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.c.width/2, this.c.height/2, false, 0)\r\n    this.dots = [this.character]\r\n    this.shots = []\r\n    setInterval(()=>{\r\n      this.addFoe()\r\n    }, this.config.waveSpeed)\r\n  }\r\n\r\n  init(){}\r\n  build(){\r\n    this.c = document.createElement('canvas')\r\n    this.c.width = window.innerWidth\r\n    this.c.height = window.innerHeight\r\n    this.ctx = this.c.getContext('2d')\r\n    this.config.element.appendChild(this.c)\r\n  }\r\n  bind(){\r\n    this.c.addEventListener('mousedown', (e)=>{\r\n      this.mouse = 'down'\r\n    })\r\n    this.c.addEventListener('mouseup', ()=>{ this.mouse = 'up' })\r\n    this.c.addEventListener('touchstart', (e)=>{\r\n      this.mouse = 'down'\r\n    })\r\n    this.c.addEventListener('touchend', ()=>{ this.mouse = 'up' })\r\n    this.c.addEventListener('mousemove', (e)=>{\r\n      this.cursX = e.clientX\r\n      this.cursY = e.clientY\r\n    })\r\n    this.c.addEventListener('touchmove', (e)=>{\r\n      this.cursX = e.clientX\r\n      this.cursY = e.clientY\r\n    })\r\n  }\r\n  start(){\r\n    this.isRunning = true\r\n    this.loop()\r\n  }\r\n  stop(){\r\n    this.isRunning = false\r\n  }\r\n  loop(){\r\n    let loop = ()=>{this.loop()}\r\n    this.run()\r\n    if(this.isRunning) requestAnimationFrame(loop)\r\n  }\r\n  run(){\r\n    this.clear()\r\n    this.dots.map( dot => {\r\n      this.doDot(dot)\r\n      this.drawDot(dot)\r\n    })\r\n    this.shots.map( shot =>{\r\n      if(!shot.live) return false\r\n      this.doShot(shot)\r\n      this.drawDot(shot)\r\n    } )\r\n    this.cleanEntities(this.dots)\r\n    this.cleanEntities(this.shots)\r\n    this.drawScores()\r\n    if(this.mouse == 'down') this.moveDot(this.character, this.cursX, this.cursY)\r\n  }\r\n  cleanEntities(entities){\r\n    let deadEntities = []\r\n    entities.map((e, i)=>{\r\n      if(!e.live) deadEntities.push(i)\r\n    })\r\n    deadEntities.map((dIndex, i)=>{\r\n      entities.splice(dIndex+i, 1)\r\n    })\r\n  }\r\n\r\n  clear(){\r\n    this.ctx.fillStyle = this.config.backgroundColor\r\n    this.ctx.fillRect(0, 0, this.c.width, this.c.height)\r\n  }\r\n  drawDot(dot){\r\n    this.ctx.fillStyle = this.factions[dot.faction].color\r\n    this.ctx.beginPath()\r\n    this.ctx.arc(dot.x, dot.y, dot.size, 0, 2*Math.PI)\r\n    this.ctx.fill()\r\n  }\r\n\r\n  addFoe(faction){\r\n    faction = faction || Math.floor(Math.random() * (this.factions.length))\r\n    this.newDot(this.factions[faction].spawn.x, this.factions[faction].spawn.y, faction)\r\n  }\r\n  newDot(x, y, faction){\r\n    let newDot = new _dot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, false, faction)\r\n    newDot.weapon = this.factions[faction].getWeapon()\r\n    this.dots.push(newDot)\r\n  }\r\n  newShot(dot, spx, spy){\r\n    let newShot = new _dot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dot.x, dot.y, dot.weapon.bulletSize, dot.faction, dot)\r\n    newShot.spx = spx\r\n    newShot.spy = spy\r\n    this.shots.push(newShot)\r\n  }\r\n  moveDot(dot, x, y){\r\n    let totx = x - dot.x\r\n    let toty = y - dot.y\r\n    let tot = Math.abs(totx) + Math.abs(toty)\r\n    let spx = totx / tot\r\n    let spy = toty / tot\r\n    dot.spx += spx\r\n    dot.spy += spy\r\n  }\r\n  wanderDot(dot, dist){\r\n    let x = dot.x + (2 * Math.random() - 1) * dist\r\n    let y = dot.y + (2 * Math.random() - 1) * dist\r\n    if(x > 0 && x < this.c.width && y > 0 && y < this.c.height) this.moveDot(dot, x, y)\r\n  }\r\n  doDot(dot){\r\n    dot.x += dot.spx * dot.speed\r\n    dot.y += dot.spy * dot.speed\r\n    dot.spx *= 0.9\r\n    dot.spy *= 0.9\r\n    if(dot.weapon) this.dotShoot(dot)\r\n    if(dot != this.character && Math.random() < 0.3) {\r\n      this.wanderDot(dot, 200)\r\n    }\r\n  }\r\n  dotShoot(dot){\r\n    // fire shot at nearest ennemy\r\n    if(Date.now() - dot.weapon.lastFire < dot.weapon.fireRate) return false\r\n    dot.weapon.lastFire = Date.now()\r\n    let target = this.getNearestOpponent(dot)\r\n    if(!target) return false\r\n    let totx = target.x - dot.x\r\n    let toty = target.y - dot.y\r\n    let tot = Math.abs(totx) + Math.abs(toty)\r\n    let spx = totx / tot * dot.weapon.shotSpeed\r\n    let spy = toty / tot * dot.weapon.shotSpeed\r\n    this.newShot(dot, spx, spy)\r\n  }\r\n  doShot(shot){\r\n    shot.x += shot.spx * shot.speed\r\n    shot.y += shot.spy * shot.speed\r\n    if(  shot.x + shot.size < 0\r\n      || shot.x - shot.size > this.c.width\r\n      || shot.y + shot.size < 0\r\n      || shot.y - shot.size > this.c.height\r\n    ) shot.live = false\r\n    let nearest = this.getNearestOpponent(shot)\r\n    if(this.getDist(shot, nearest) < shot.size * 2){\r\n       nearest.live = false\r\n       shot.live = false\r\n       this.factions[shot.faction].addPoint(1)\r\n       shot.origin.weapon = new this.factions[shot.faction].weapons[this.factions[shot.faction].weapons.length-1]\r\n    }\r\n  }\r\n\r\n  getDist(a, b){\r\n    return Math.sqrt( (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) )\r\n  }\r\n  getNearestOpponent(dot){\r\n    let opponents = this.dots.filter(d=>{ return (dot.faction != d.faction) })\r\n    let nearestDist = 1000\r\n    let nearestDot = false\r\n    opponents.map(o=>{\r\n      let dist = this.getDist(dot, o)\r\n      if ( dist < nearestDist ){\r\n        nearestDist = dist\r\n        nearestDot = o\r\n      }\r\n    })\r\n    return nearestDot\r\n  }\r\n\r\n  drawScores(){\r\n    let factions = JSON.parse(JSON.stringify(this.factions)).sort((a,b)=>{return b.totalPoints - a.totalPoints})\r\n    factions.map((f,i)=>{\r\n      this.ctx.fillStyle = f.color\r\n      this.ctx.fillText(\"Faction \"+ f.id + \" lvl \" + f.level + \" : \" + f.totalPoints, 10, i * 20 + 20)\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/aznq.js?");

/***/ }),

/***/ "./src/dot.js":
/*!********************!*\
  !*** ./src/dot.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dot; });\n/* harmony import */ var _weapon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon.js */ \"./src/weapon.js\");\n\r\nclass Dot{\r\n  constructor(x, y, size, faction, origin){\r\n    this.x = x || 0\r\n    this.y = y || 0\r\n    this.size = size || 5\r\n    this.spx = 0\r\n    this.spy = 0\r\n    this.speed = 1\r\n    this.faction = faction ? faction : 0\r\n    this.live = true\r\n    this.weapon = new _weapon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    this.origin = origin || false\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/dot.js?");

/***/ }),

/***/ "./src/faction.js":
/*!************************!*\
  !*** ./src/faction.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Faction; });\n/* harmony import */ var _weapon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon.js */ \"./src/weapon.js\");\n\r\n\r\n\r\nclass Faction{\r\n  constructor(id, color, spawn){\r\n    this.id = id\r\n    this.points = 0\r\n    this.totalPoints = 0\r\n    this.color = color\r\n    this.spawn = spawn\r\n    this.weaponTable = [_weapon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _weapon_js__WEBPACK_IMPORTED_MODULE_0__[\"Rifle\"], _weapon_js__WEBPACK_IMPORTED_MODULE_0__[\"Bazooka\"], _weapon_js__WEBPACK_IMPORTED_MODULE_0__[\"Laser\"]]\r\n    this.level = 0\r\n    this.weapons = [this.weaponTable[0]]\r\n    this.nextLevel = 10\r\n  }\r\n  addPoint(point){\r\n    this.points += point\r\n    this.totalPoints += point\r\n    if(this.points > this.nextLevel) this.levelUp()\r\n  }\r\n  levelUp(){\r\n    this.points = 0\r\n    this.level++\r\n    console.log('Faction '+this.id+' get to lvl '+this.level+' !')\r\n    this.nextLevel = Math.round(this.nextLevel * 1.3)\r\n    if(this.weaponTable[this.level]) this.weapons.push(this.weaponTable[this.level])\r\n  }\r\n  getWeapon(){\r\n    return new this.weapons[ Math.floor(Math.random() * this.weapons.length) ]\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/faction.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aznq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aznq.js */ \"./src/aznq.js\");\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n  let aznq = new _aznq_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    element: document.body\r\n  })\r\n  aznq.start()\r\n  window.aznq = aznq\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/weapon.js":
/*!***********************!*\
  !*** ./src/weapon.js ***!
  \***********************/
/*! exports provided: default, Rifle, Bazooka, Laser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Weapon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rifle\", function() { return Rifle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bazooka\", function() { return Bazooka; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Laser\", function() { return Laser; });\nclass Weapon{\r\n  constructor(bulletSize, fireRate, shotSpeed){\r\n    this.shotSpeed = shotSpeed || 5\r\n    this.fireRate = fireRate || 1000\r\n    this.bulletSize = bulletSize || 3\r\n    this.lastFire = 0\r\n  }\r\n}\r\n\r\nclass Rifle extends Weapon{\r\n  constructor(){\r\n    super(2, 500, 5)\r\n  }\r\n}\r\n\r\nclass Bazooka extends Weapon{\r\n  constructor(){\r\n    super(10, 1500, 4)\r\n  }\r\n}\r\n\r\nclass Laser extends Weapon{\r\n  constructor(){\r\n    super(5, 1000, 20)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/weapon.js?");

/***/ })

/******/ });