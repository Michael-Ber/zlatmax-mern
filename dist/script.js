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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/catalog.js":
/*!**********************************!*\
  !*** ./src/assets/js/catalog.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', () => {
  // PRICE SCROLL BAR
  function scrollBar() {
    const scrollWrapper = document.querySelector('.main__subwrapper');
    const scrollTracks = Array.from(scrollWrapper.children);
    scrollTracks.forEach(item => {
      item.insertAdjacentHTML('afterend', `<span class=" main__actual">${item.value}</span>`);
    });
    let average1 = 0;
    let average2 = 50;
    let average1perc = average1 + '%';
    let average2perc = average2 + '%';
    scrollTracks[0].style.background = `linear-gradient(90deg, #eaeaea 0% ${average1perc}, #ffcda5 ${average1perc} ${average2perc}, #eaeaea ${average2perc} 100%)`;
    scrollTracks[0].addEventListener('input', e => {
      const elem = e.target;
      const actual = document.querySelectorAll('.main__actual')[0];
      const max = 200000;
      average1 = Math.floor(elem.value * 100 / max);
      average1perc = average1 + '%';
      average2perc = average2 + '%';
      actual.innerHTML = elem.value;
      elem.style.background = `linear-gradient(90deg, #eaeaea 0% ${average1 > average2 ? average2perc : average1perc}, #ffcda5 ${average1 > average2 ? average2perc : average1perc} ${average2 < average1 ? average1perc : average2perc}, #eaeaea ${average2 < average1 ? average1perc : average2perc} 100%)`;
    });
    scrollTracks[1].addEventListener('input', e => {
      const elem = e.target;
      const actual = document.querySelectorAll('.main__actual')[1];
      const max = 200000;
      average2 = Math.floor(elem.value * 100 / max);
      average1perc = average1 + '%';
      average2perc = average2 + '%';
      actual.innerHTML = elem.value;
      scrollTracks[0].style.background = `linear-gradient(90deg, #eaeaea 0% ${average1 > average2 ? average2perc : average1perc}, #ffcda5 ${average1 > average2 ? average2perc : average1perc} ${average2 < average1 ? average1perc : average2perc}, #eaeaea ${average2 < average1 ? average1perc : average2perc} 100%)`;
    });
  }

  scrollBar();

  function setInputsToZero() {
    const inputs = document.querySelectorAll('.main__filter-input');
    window.addEventListener('click', e => {
      if (!e.target.classList.contains('main__filter-input')) {
        inputs.forEach(input => {
          input.value = '';
        });
      } else {}
    });
  }

  setInputsToZero(); // END PRICE SCROLL BAR
  // CATALOG ACCORDEON

  function accordeon() {
    const trig = document.querySelectorAll('.main__accordeon-accord-btn');
    trig.forEach(item => {
      item.addEventListener('click', e => {
        const btnACtive = e.target.classList.contains('main__accordeon-accord-btn_active') || e.target.parentNode.parentNode.classList.contains('main__accordeon-accord-btn_active');

        if (e.target.classList.contains('main__accordeon-accord-btn_active') || e.target.parentNode.parentNode.classList.contains('main__accordeon-accord-btn_active')) {
          item.parentNode.nextElementSibling.style.display = 'none';
          item.classList.remove('main__accordeon-accord-btn_active');
        } else {
          item.parentNode.nextElementSibling.style.display = 'block';
          item.classList.add('main__accordeon-accord-btn_active');
        }
      });
    });
  }

  accordeon(); // END CATALOG ACCORDEON
  // CATALOG SORT ITEMS

  function sortItems() {
    const trig = document.querySelectorAll('.popular__sort-btn');
    const contentTile = document.querySelector('.popular__list-slider-tile');
    const contentList = document.querySelector('.popular__list-slider-list');

    function clearBtns() {
      trig.forEach(item => {
        item.classList.remove('popular__sort-btn_active');
      });
    }

    trig.forEach(item => {
      item.addEventListener('click', () => {
        clearBtns();
        item.classList.add('popular__sort-btn_active');

        if (item.classList.contains('popular__sort-btn_tile')) {
          contentTile.style.display = 'flex';
          contentList.style.display = 'none';
        } else if (item.classList.contains('popular__sort-btn_list')) {
          contentList.style.display = 'block';
          contentTile.style.display = 'none';
        }
      });
    });
  }

  sortItems(); // END CATALOG SORT ITEMS
});

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog */ "./src/assets/js/catalog.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_catalog__WEBPACK_IMPORTED_MODULE_0__);



window.addEventListener('DOMContentLoaded', () => {
  // CATALOG BURGER
  try {
    function burger(trig, menu, trigActive, menuActive, closeTrig) {
      const trigger = document.querySelector(trig);
      const popup = document.querySelector(menu);
      const close = document.querySelector(closeTrig);
      const body = document.querySelector('body');
      trigger.addEventListener('click', function () {
        if (!this.classList.contains(trigActive)) {
          this.classList.add(trigActive);
          popup.classList.add(menuActive);
          trigger.style.paddingLeft = '5px'; // overlay.classList.add('overlay__burger_active');
          // body.style.overflow = "hidden";
          // body.style.paddingRight = `${offset}px`;
        } else {
          this.classList.remove(trigActive);
          popup.classList.remove(menuActive);
          trigger.style.paddingLeft = '0'; // overlay.classList.remove('overlay__burger_active');
          // body.style.overflow = 'unset';
          // body.style.paddingRight = 'unset';
        }
      });

      if (close) {
        close.addEventListener('click', () => {
          trigger.classList.remove(trigActive);
          popup.classList.remove(menuActive);
          trigger.style.paddingLeft = '0';
        });
      }
    }

    burger('.catalog__burger', '.main__popup', 'catalog__burger_active', 'main__popup_active', '.main__popup-close');
    burger('.burger-btn', '.burger-menu', 'burger-btn_active', 'burger-menu_active'); //SLIDER MAIN

    function mainSlider() {
      const slider = tns({
        container: '.main__slider',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        nav: true,
        navContainer: '.slider__photos',
        controls: false
      });
    }

    mainSlider(); //END SLIDER MAIN
    //SLIDER POPULAR

    function popularSlider() {
      const slider = tns({
        container: '.popular__list-slider',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        nav: false,
        controlsContainer: '.popular__arrows'
      });
    }

    popularSlider(); //END SLIDER POPULAR
    //SLIDER SPONSORS

    function sponsorsSlider() {
      const slider = tns({
        container: '.sponsors__slider',
        items: 5,
        slideBy: 1,
        mouseDrag: false,
        nav: false,
        controlsContainer: '.sponsors__arrows',
        responsive: {
          992: {
            items: 4
          },
          768: {
            items: 3
          },
          576: {
            items: 2
          },
          320: {
            items: 1
          }
        }
      });
    }

    sponsorsSlider(); //END SLIDER SPONSORS
  } catch {
    console.log('error');
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map