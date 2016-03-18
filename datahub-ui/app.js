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
var datahub = angular.module('datahubUI', []);

datahub.controller('ExampleController', ['$scope','$http', function ($scope, $http) {
	$scope.applicationName = "Datahub UI";
}]);

datahub.controller('FeedsController', ['$scope','$http', function ($scope, $http) {
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
}]);

datahub.controller('PoolsController', ['$scope','$http', function ($scope, $http) {
	$scope.feeds = [];

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