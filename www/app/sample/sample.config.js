'use strict';

angular.module('sample.module')
    .config(function config($stateProvider) {
        $stateProvider
            .state('app.menu.sample', {
                url: '/sample',
                abstract: true,
                views: {
                    'tab-sample': {
                        templateUrl: 'app/sample/templates/layout.html'
                    },
                    'menu': {
                        templateUrl: 'app/sample/templates/layout.html'
                    }
                }
            })
            .state('app.menu.sample.list', {
                url: '/list',
                views: {
                    'sampleContent': {
                        templateUrl: 'app/sample/templates/item_list.html',
                        controller: 'SampleCtrl'
                    }
                }
            })
	});