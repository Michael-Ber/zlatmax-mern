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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalObjects */ "./src/assets/js/globalObjects.js");



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

  try {
    scrollBar();
  } catch (e) {
    console.log(e);
  }

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
  // CATALOG CHANGE LOCATION ITEMS

  function changeLocationItems() {
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
          contentList.style.display = 'flex';
          contentTile.style.display = 'none';
        }
      });
    });
  }

  changeLocationItems(); // END CATALOG CHANGE LOCATION ITEMS

  function test(wrapper) {
    return wrapper.innerHTML;
  } // SELECT NUMBER OF ELEMENTS ON CATALOG SLIDER


  function selectNumberOfElements() {
    const selectElements = document.querySelectorAll('.popular__pagination-catalog-select');
    const slider = document.querySelectorAll('.popular__list-slider_page-catalog');
    const slideList = document.querySelectorAll('.popular__list-item-list');
    const slideTile = document.querySelectorAll('.popular__list-item-tile');
    const sliderWrapper = document.querySelectorAll('.popular__list-slider-wrapper');
    const navContainerGlobal = document.querySelectorAll('.popular__nav-container');
    const maxItemsOnPage = 9;
    let a = [];
    sliderWrapper.forEach(wrapper => {
      a.push(test(wrapper));
    });
    selectElements.forEach((item, i, arr) => {
      item.addEventListener('input', () => {
        _globalObjects__WEBPACK_IMPORTED_MODULE_0__["default"].enable = true;
        changeToInitialisedWrapper(sliderWrapper, a);
        const slideItemsParent = document.querySelectorAll('.popular__list-item_page-catalog_active');
        slideItemsParent.forEach(parent => {
          let deletedItems = [];

          for (let i = 0; i < item.value; i++) {
            Array.from(parent.children)[i].style.display = 'flex';
          }

          for (let j = maxItemsOnPage - 1; j >= item.value; j--) {
            deletedItems.push(Array.from(parent.children)[j]);
            parent.removeChild(Array.from(parent.children)[j]);
          }

          function createNewUl(deleted, selected) {
            const ulElement = document.createElement('ul');
            ulElement.classList.add('popular__list-item', 'popular__list-item-tile', 'popular__list-item_page-catalog');
            ulElement.style.minWidth = window.getComputedStyle(parent).minWidth;

            if (deleted.length > 1 && !(deleted.length % 2 == 0) && selected % 2 == 0 && selected < deleted.length) {
              ulElement.appendChild(deleted[0]);
              deleted.splice(0, 1);
            } else if (deleted.length > 2 && selected < deleted.length) {
              for (let i = 0; i < selected; i++) {
                ulElement.appendChild(deleted[0]);
                deleted.splice(0, 1);
              }

              ;
            } else if (selected > deleted.length) {
              const max = deleted.length;

              for (let i = 0; i < max; i++) {
                ulElement.appendChild(deleted[0]);
                deleted.splice(0, 1);
              }

              ;
            } else {
              for (let i = 0; i < selected; i++) {
                ulElement.appendChild(deleted[0]);
                deleted.splice(0, 1);
              }

              ;
            }

            return ulElement;
          }

          for (let k = 1; k < Math.ceil(maxItemsOnPage / item.value); k++) {
            parent.insertAdjacentElement('afterend', createNewUl(deletedItems, item.value));
          }
        });
        arr.forEach(elem => elem.value = item.value);
        paginationMenu(); // mainCatalogSlider();

        sliderInit(slider, sliderWrapper, slideList, navContainerGlobal);
      });
    });

    function changeToInitialisedWrapper(sliderWrapper, arrHtml) {
      sliderWrapper.forEach((wrapper, i) => {
        Array.from(wrapper.children).forEach(child => {
          wrapper.removeChild(child);
        });
        wrapper.innerHTML = arrHtml[i];
      });
    }
  }

  try {
    selectNumberOfElements();
  } catch (e) {
    console.log(e);
  } // END SELECT NUMBER OF ELEMENTS ON CATALOG SLIDER
  // CATALOG SLIDER PAGINATION


  function paginationMenu() {
    const navContainer = document.querySelectorAll('.popular__nav-container');
    const sliderWrapper = document.querySelectorAll('.popular__list-slider-wrapper')[0];
    let num = 0;
    const numberOfElems = sliderWrapper.children.length; //Each time should to clean nav-container

    navContainer.forEach(container => {
      Array.from(container.children).forEach(child => {
        container.removeChild(child);
      });
    });

    for (let i = 1; i <= numberOfElems; i++) {
      if (numberOfElems <= 6) {
        navContainer.forEach(container => {
          if (i === 1) {
            container.innerHTML += `<li class="popular__pagination-catalog-number popular__pagination-catalog-number_active" data-num=${num}>${i}</li>`;
          } else {
            container.innerHTML += `<li class="popular__pagination-catalog-number" data-num=${num}>${i}</li>`;
          }
        });
        num += 100 / numberOfElems;
      } else {
        navContainer.forEach(container => {
          if (i === 1) {
            container.innerHTML += `<li class="popular__pagination-catalog-number popular__pagination-catalog-number_active" data-num=${num}>${i}</li>`;
          } else if (i > 1 && i < 6) {
            container.innerHTML += `<li class="popular__pagination-catalog-number" data-num=${num}>${i}</li>`;
          } else if (i == 6) {
            let numHidden = num;
            let s = i;

            for (let k = 0; k < numberOfElems - 6; k++) {
              container.innerHTML += `<li class="popular__pagination-catalog-number hidden" data-num=${numHidden}>${s++}</li>`;
              numHidden += 100 / numberOfElems;
            }

            container.innerHTML += `<span class="popular__dots">...</span>`;
          } else if (i === numberOfElems) {
            container.innerHTML += `<li class="popular__pagination-catalog-number" data-num=${num}>${numberOfElems}</li>`;
          }
        });
        num += 100 / numberOfElems;
      }
    }

    ;
  } // END CATALOG SLIDER PAGINATION
  // CATALOG POPULAR SLIDER


  function mainCatalogSlider() {
    // set amount of slides on pagination numbers
    const slider = document.querySelectorAll('.popular__list-slider_page-catalog');
    const slideTile = document.querySelectorAll('.popular__list-item-tile');
    const slideList = document.querySelectorAll('.popular__list-item-list');
    const sliderWrapper = document.querySelectorAll('.popular__list-slider-wrapper');
    const arrowsPrev = document.querySelectorAll('.popular__prev_page-catalog');
    const arrowsNext = document.querySelectorAll('.popular__next_page-catalog');
    const navContainerGlobal = document.querySelectorAll('.popular__nav-container');
    let objFromSelectFunc;
    const alwaysVisibleNumbers = 6;
    let offset = 0;
    let numberWidth = 0; // let num = 0;

    paginationMenu();
    sliderInit(slider, sliderWrapper, slideList, navContainerGlobal);
    window.addEventListener('resize', () => {
      sliderInit(slider, sliderWrapper, slideList, navContainerGlobal);
    });
    const paginationItems = document.querySelectorAll('[data-num]');
    paginationItems.forEach(item => {
      item.addEventListener('click', () => {
        offset = -item.getAttribute('data-num');
        sliderWrapper.forEach(wrapper => {
          wrapper.style.transform = `translateX(${offset}%)`;
        });
        paginationItems.forEach(elem => {
          elem.classList.remove('popular__pagination-catalog-number_active');

          if (elem.getAttribute('data-num') === item.getAttribute('data-num')) {
            elem.classList.add('popular__pagination-catalog-number_active');
          }
        });
      });
    });
    arrowsPrev.forEach(prev => {
      prev.addEventListener('click', () => {
        const navContainer = document.querySelectorAll('.popular__nav-container');
        const paginationDots = document.querySelectorAll('.popular__dots');
        const paginationNumbers = document.querySelectorAll('[data-num]');
        let paginationNumbersCont1 = Array.from(paginationNumbers).slice(0, paginationNumbers.length / 2);
        let paginationNumbersCont2 = Array.from(paginationNumbers).slice(paginationNumbers.length / 2, paginationNumbers.length);
        let paginationNumbersActive = 0;
        const paginDiffer = paginationNumbersCont1.length - alwaysVisibleNumbers + 1;
        paginationNumbersCont1.forEach((item, i) => {
          if (item.classList.contains('popular__pagination-catalog-number_active')) {
            paginationNumbersActive = i;
          }
        });
        offset += 100 / sliderWrapper[0].children.length;

        if (offset >= 1) {
          if (paginationDots[0]) {
            numberWidth = +window.getComputedStyle(paginationNumbersCont1[0]).width.slice(0, -2) * paginDiffer;
            paginationNumbers.forEach(number => {
              number.classList.remove('hidden');
            });
            navContainer.forEach(item => {
              item.style.transform = `translateX(-${numberWidth}px)`;
            });
          }

          offset = -100 + 100 / sliderWrapper[0].children.length;
        } else if (offset > Math.ceil(-100 / sliderWrapper[0].children.length)) {
          offset = 0;
        }

        sliderWrapper.forEach(wrapper => {
          wrapper.style.transform = `translateX(${offset}%)`;
        });
        paginationNumbersCont1.forEach((elem, i) => {
          elem.classList.remove('popular__pagination-catalog-number_active');

          if (Math.round(-elem.getAttribute('data-num')) === Math.round(offset)) {
            elem.classList.add('popular__pagination-catalog-number_active');

            if (i >= 0 && i < paginationNumbersCont1.length - alwaysVisibleNumbers && paginationDots[0]) {
              paginationNumbersCont1[i + 5].classList.add('hidden');
            }

            if (i >= paginationNumbersCont1.length - alwaysVisibleNumbers && paginationDots[0]) {
              paginationDots[0].classList.add('hidden');
              paginationDots[1].classList.add('hidden');
            } else if (paginationDots[0]) {
              paginationDots[0].classList.remove('hidden');
              paginationDots[1].classList.remove('hidden');
            }
          }
        });
        paginationNumbersCont2.forEach((elem, i) => {
          elem.classList.remove('popular__pagination-catalog-number_active');

          if (Math.round(-elem.getAttribute('data-num')) === Math.round(offset)) {
            elem.classList.add('popular__pagination-catalog-number_active');

            if (i >= 0 && i < paginationNumbersCont2.length - alwaysVisibleNumbers && paginationDots[0]) {
              paginationNumbersCont2[i + 5].classList.add('hidden');
            }

            if (i >= paginationNumbersCont1.length - alwaysVisibleNumbers && paginationDots[0]) {
              paginationDots[0].classList.add('hidden');
              paginationDots[1].classList.add('hidden');
            } else if (paginationDots[0]) {
              paginationDots[0].classList.remove('hidden');
              paginationDots[1].classList.remove('hidden');
            }
          }
        });

        if (paginationNumbersCont1.length - paginationNumbersActive > 5) {
          numberWidth = numberWidth - +window.getComputedStyle(paginationNumbersCont1[0]).width.slice(0, -2);
          navContainer.forEach(item => {
            item.style.transform = `translateX(-${numberWidth}px)`;
          });
        }
      });
    });
    arrowsNext.forEach(next => {
      next.addEventListener('click', () => {
        if (_globalObjects__WEBPACK_IMPORTED_MODULE_0__["default"].enable) {
          offset = 0;
          numberWidth = 0;
          _globalObjects__WEBPACK_IMPORTED_MODULE_0__["default"].enable = false;
        }

        const navContainer = document.querySelectorAll('.popular__nav-container');
        const paginationDots = document.querySelectorAll('.popular__dots');
        const paginationNumbers = document.querySelectorAll('[data-num]');
        const hiddenNumbers = document.querySelectorAll('.hidden');
        let paginationNumbersCont1 = Array.from(paginationNumbers).slice(0, paginationNumbers.length / 2);
        let paginationNumbersCont2 = Array.from(paginationNumbers).slice(paginationNumbers.length / 2, paginationNumbers.length);
        let hiddenNumbersCont1 = Array.from(hiddenNumbers).slice(0, hiddenNumbers.length / 2);
        let hiddenNumbersCont2 = Array.from(hiddenNumbers).slice(hiddenNumbers.length / 2, hiddenNumbers.length);
        let paginationNumbersActive = 0;
        paginationNumbersCont1.forEach((item, i) => {
          if (item.classList.contains('popular__pagination-catalog-number_active')) {
            paginationNumbersActive = i;
          }
        });
        paginationNumbersCont2.forEach((item, i) => {
          if (item.classList.contains('popular__pagination-catalog-number_active')) {
            paginationNumbersActive = i;
          }
        });
        offset -= 100 / sliderWrapper[0].children.length;

        if (offset <= -100) {
          offset = 0;
          navContainer.forEach(item => {
            item.style.transform = `translateX(0px)`;
          });
          numberWidth = 0;
          paginationMenu();
        }

        sliderWrapper.forEach(wrapper => {
          wrapper.style.transform = `translateX(${offset}%)`;
        });

        if (hiddenNumbersCont1.length > 0) {
          hiddenNumbersCont1[0].classList.remove('hidden');
          hiddenNumbersCont2[0].classList.remove('hidden');
        }

        paginationNumbersCont1.forEach((elem, i) => {
          elem.classList.remove('popular__pagination-catalog-number_active');

          if (Math.floor(-elem.getAttribute('data-num')) == Math.floor(offset)) {
            elem.classList.add('popular__pagination-catalog-number_active');

            if (i >= paginationNumbersCont1.length - alwaysVisibleNumbers && paginationDots[0]) {
              paginationDots[0].classList.add('hidden');
              paginationDots[1].classList.add('hidden');
            } else if (paginationDots[0]) {
              paginationDots[0].classList.remove('hidden');
              paginationDots[1].classList.remove('hidden');
            }
          }
        });
        paginationNumbersCont2.forEach((elem, i) => {
          elem.classList.remove('popular__pagination-catalog-number_active');

          if (Math.floor(-elem.getAttribute('data-num')) == Math.floor(offset)) {
            elem.classList.add('popular__pagination-catalog-number_active');

            if (i >= paginationNumbersCont1.length - alwaysVisibleNumbers && paginationDots[0]) {
              paginationDots[0].classList.add('hidden');
              paginationDots[1].classList.add('hidden');
            } else if (paginationDots[0]) {
              paginationDots[0].classList.remove('hidden');
              paginationDots[1].classList.remove('hidden');
            }
          }
        });

        if (paginationNumbersCont1.length - paginationNumbersActive > alwaysVisibleNumbers) {
          numberWidth += +window.getComputedStyle(paginationNumbers[0]).width.slice(0, -2);
          navContainer.forEach(item => {
            item.style.transform = `translateX(-${numberWidth}px)`;
          });
        }
      });
    });
  }

  try {
    mainCatalogSlider();
  } catch (e) {
    console.log(e);
  } // END CATALOG POPULAR SLIDER
  // SEARCH POPUP MENU


  function searchPopup() {
    const searchPopup = document.querySelector('.search__popup');
    const searchInput = document.querySelector('#search');
    searchInput.addEventListener('click', () => {
      searchPopup.style.display = 'block';
      window.addEventListener('click', e => {
        const target = e.target;

        if (target.classList.contains('search__overlay') || !target.classList.contains('search__popup-list') && !target.classList.contains('slide__input')) {
          searchPopup.style.display = 'none';
        }
      });
    });
  }

  searchPopup(); //END SEARCH POPUP MENU
  //HELPFUL FUNCTIONS

  function sliderInit(slider, sliderWrapper, slideList, paginNavCont) {
    const slideWidth = window.getComputedStyle(slider[0]).width;
    slider.forEach(elem => {
      elem.style.overflow = 'hidden';
    });
    Array.from(sliderWrapper[0].children).forEach(item => {
      item.style.minWidth = slideWidth;
    });
    Array.from(sliderWrapper[1].children).forEach(item => {
      item.style.minWidth = '848px';
    });
    paginNavCont.forEach(nav => {
      nav.style.transform = 'translateX(0)';
    });
    sliderWrapper.forEach(wrapper => {
      wrapper.style.minWidth = `${sliderWrapper[0].children.length * 100}%`;
      wrapper.style.transform = 'translateX(0%)';
      slideList.forEach(item => {
        item.style.minWidth = slideWidth;
        Array.from(item.children).forEach(elem => {
          elem.style.width = '100%';
        });
      });
    });
  } //END HELPFULL FUNCTIONS

});

/***/ }),

/***/ "./src/assets/js/cort.js":
/*!*******************************!*\
  !*** ./src/assets/js/cort.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', () => {
  try {
    //CORT TABS=======================================================>
    function tabs(tabsSelector, tabsContentSelector, tabsActive, contentActive) {
      const tabs = document.querySelectorAll(tabsSelector);
      const content = document.querySelectorAll(tabsContentSelector);
      tabs.forEach(tab => {
        tab.addEventListener('click', e => {
          const target = e.target;
          const targetAttr = target.getAttribute('data-order');
          tabs.forEach(elem => {
            elem.classList.remove(tabsActive);
          });
          tab.classList.add(tabsActive);
          content.forEach(item => {
            item.classList.remove(contentActive);

            if (item.getAttribute('data-order') === targetAttr) {
              item.classList.add(contentActive);
            }
          });
        });
      });
    }

    tabs('.tabs-order__btn', '.order-main__form', 'tabs-order__btn_active', 'order-main__form_active'); //END CORT TABS=======================================================>
    //YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>

    function changeWidth() {
      const parent = document.querySelector('.wrapper-cort');
      const oldWrapper = document.querySelector('.order-main__content');
      const yourOrderWrapper = document.querySelectorAll('.yourOrder-main');
      const toParentOrder = yourOrderWrapper[0];

      function init() {
        if (window.matchMedia('(max-width: 991px)').matches && window.screen.availWidth) {
          Array.from(oldWrapper.children).forEach((item, i) => {
            if (item.contains(yourOrderWrapper[i])) {
              item.removeChild(yourOrderWrapper[i]);
            }
          });
          parent.insertAdjacentElement('beforeend', yourOrderWrapper[0]);
        } else if (parent.children.length > 2 && window.matchMedia('(min-width: 992px)').matches) {
          Array.from(oldWrapper.children).forEach((item, i) => {
            item.insertAdjacentElement('beforeend', yourOrderWrapper[i]);
          });
        }
      }

      window.addEventListener('resize', () => {
        if (window.matchMedia('(max-width: 991px)').matches && window.screen.availWidth) {
          Array.from(oldWrapper.children).forEach((item, i) => {
            if (item.contains(yourOrderWrapper[i])) {
              item.removeChild(yourOrderWrapper[i]);
            }
          });
          parent.insertAdjacentElement('beforeend', yourOrderWrapper[0]);
        } else if (parent.children.length > 2 && window.matchMedia('(min-width: 992px)').matches) {
          Array.from(oldWrapper.children).forEach((item, i) => {
            item.insertAdjacentElement('beforeend', yourOrderWrapper[i]);
          });
        }
      });
      init();
    }

    changeWidth(); //END YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>
  } catch (e) {
    console.log(e);
  }

  ;
});

/***/ }),

/***/ "./src/assets/js/globalObjects.js":
/*!****************************************!*\
  !*** ./src/assets/js/globalObjects.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const slidersToZero = {
  enable: true
};
/* harmony default export */ __webpack_exports__["default"] = (slidersToZero);

/***/ }),

/***/ "./src/assets/js/good.js":
/*!*******************************!*\
  !*** ./src/assets/js/good.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _cort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cort */ "./src/assets/js/cort.js");
/* harmony import */ var _cort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _good__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./good */ "./src/assets/js/good.js");
/* harmony import */ var _good__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_good__WEBPACK_IMPORTED_MODULE_2__);





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