//
//(function(){
//    'use strict';
//    describe('Controller Tests', function(){
//        var scope;
//        var controller;
//        var sandbox;
//        var viewModelProxyMock;
//        var sinon;
//
//        beforeEach(module('tombola.noughtsAndCrosses'));
//
//        beforeEach(inject(function($rootScope, $controller, $q){
//
//            mocks.gameApiProxy.getResults = function(){
//                return $q.when({winner: '1', gameboard:'111111111'});
//            };
//
//            sandbox = sinon.sandbox.create();
//            viewModelProxyMock = sinon.sandbox.mock(mocks.viewModel);
//
//            scope = $rootScope.$new();
//
//            controller = $controller('myController', {
//                $scope: scope,
//                viewModel: mocks.viewModel,
//                apiProxy: mocks.apiProxy
//            });
//        }));
//
//    });
//}());