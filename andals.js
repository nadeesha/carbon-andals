'use strict';

carbon.registerModule('carbon.andals');

angular.module('carbon.andals', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider.state('andalsHome', {
            url: '/andals',
            templateUrl: 'components/carbon-andals/main.html',
            controller: 'andalsCtrl',
            permissions: ['andals'],
            navigationBar: {
                name: 'Andals',
                glyphicon: 'cloud',
                weight: 0
            }
        });
    })
    .controller('andalsCtrl', function ($scope, carbonApiProvider) {
        $http.get(carbonApiProvider.url('/andalssay')).success(function (data) {
            $scope.apiSays = data;
        });
    });