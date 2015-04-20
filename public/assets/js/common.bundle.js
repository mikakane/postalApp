/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var app;

	app = angular.module('postalApp', ["ui.bootstrap"]);

	app.controller("postalCtrl", [
	  "$scope", "$http", function($scope, $http) {
	    $scope.postalCode = "";
	    $scope.address = "";
	    $scope.alerts = [];
	    $scope.closeAlert = function(index) {
	      return $scope.alerts.splice(index, 1);
	    };
	    $scope.loadAddress = function() {
	      var http;
	      if ($scope.postalCode.length === 7) {
	        http = $http.get("/api/code/" + $scope.postalCode);
	        http.success(function(data) {
	          var i, len, msg, ref, results, value;
	          console.log(data);
	          ref = data.addressList;
	          results = [];
	          for (i = 0, len = ref.length; i < len; i++) {
	            value = ref[i];
	            msg = value.postalCode + " " + value.pref + " " + value.city + " " + value.address;
	            results.push($scope.alerts.push({
	              type: 'success',
	              msg: msg
	            }));
	          }
	          return results;
	        });
	        return http.error(function(data) {
	          return $scope.alerts.push({
	            type: 'danger',
	            msg: '指定の郵便番号は見つかりませんでした。'
	          });
	        });
	      } else {
	        return $scope.alerts = [];
	      }
	    };
	    return console.log("hogehoge");
	  }
	]);


/***/ }
/******/ ])