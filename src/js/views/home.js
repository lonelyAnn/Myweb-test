/**
 * 
 */
window.$ = require('jquery');
require('../utils/SuperSlide');
require('../utils/Flipster');
require('../utils/paged');
var homeController = require("../controllers/homeController").getInstance();
var indexLess = require('../../css/index.min.less');

homeController.init();