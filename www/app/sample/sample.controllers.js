'use strict';

angular
    .module('sample.module')
    .controller('SampleCtrl', function ($scope, SampleService) {
    	SampleService.GetSomething().then(function(data){
    		$scope.list = data;
    	})
    });