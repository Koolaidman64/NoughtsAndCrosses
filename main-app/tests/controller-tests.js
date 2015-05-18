
(function(){
    'use strict';
    describe('Controller Tests', function(){
        var scope;
        var controller;
        var sandbox;
        var q;
        var gameModelMock;
        var audioMock;

        beforeEach(module('tombola.noughtsAndCrosses'));

        beforeEach(inject(function($rootScope, $controller, $q){

            q = $q;
            sandbox = sinon.sandbox.create();
            gameModelMock = sinon.sandbox.mock(mocks.gameModel);
            audioMock = sinon.sandbox.mock(mocks.audio);

            scope = $rootScope.$new();

            controller = $controller('NoughtsAndCrossesController', {
                $scope: scope,
                gameModel: mocks.gameModel,
                gameAPI: mocks.gameAPI,
                audio: mocks.audio
            });
        }));

        it('startNewGame function is called', function() {
            var testResult = {winner:'1', gameboard:'111111111'};

            mocks.gameAPI.startNewGame = function(){
                return q.when(testResult);
            };

            gameModelMock
                .expects('updateModel')
                .withArgs(testResult)
                .once();

            gameModelMock
                .expects('firstPlayer')
                .once();

            scope.startNewGame();
        });

        afterEach(function () {
            scope.$digest();
            gameModelMock.verify();
            sandbox.restore();
        });
    });
}());