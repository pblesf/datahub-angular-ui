/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2016 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */
var datahub = angular.module('datahubUI', ['ngRoute', 'smart-table', 'ui.bootstrap']);

datahub.config(function ($routeProvider) {
	$routeProvider
		.when('/manageFeeds', {
			templateUrl: 'feeds.html',
			controller: 'FeedsController'
		})
		.when('/managePools', {
			templateUrl: 'pools.html',
			controller: 'PoolsController'
		})
});

datahub.controller('FeedsController', ['$scope', '$http', function ($scope, $http) {
	$scope.feeds = [];

	$scope.getFeeds = function () {
		$http({
			method: 'GET',
			url: 'http://localhost:9797/datahub-webapp/v1/data-feeds',
			headers: {'Content-Type': 'application/json', 'x-tenantId': 'single'}
		})
			.success(function (data) {
				$scope.feeds = data;
				console.log($scope.feeds)
			})
	}

	$scope.viewby = 10;
	$scope.totalItems = $scope.feeds.length;
	$scope.currentPage = 1;
	$scope.itemsPerPage = $scope.viewby;
	$scope.maxSize = 5;

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	$scope.setItemsPerPage = function(num) {
		$scope.itemsPerPage = num;
		$scope.currentPage = 1; //reset to first paghe
	}

	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
}]);

datahub.controller('PoolsController', ['$scope', '$http', function ($scope, $http) {
	$scope.pools = [];

	$scope.getPools = function () {
		$http({
			method: 'GET',
			url: 'http://localhost:9797/datahub-webapp/v1/pools',
			headers: {'Content-Type': 'application/json', 'x-tenantId': 'single'}
		})
			.success(function (data) {
				$scope.pools = data;
				console.log($scope.pools)
			})
	}
}]);