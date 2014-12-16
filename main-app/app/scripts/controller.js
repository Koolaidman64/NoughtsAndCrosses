
angular.module('noughtsAndCrossesApp')
    .controller('NoughtsAndCrossesController',['$scope','gameModel','gameAPI', function ($scope,gameModel,gameAPI) {

        $scope.gameModel = gameModel;
        $scope.playerType1 = 'human';
        $scope.playerType2 = 'random';
        $scope.playerTurn = 2;
        $scope.playerTurn = 1;

        $scope.startNewGame = function () {
            gameAPI.startNewGame($scope.playerType1, $scope.playerType2);
        };

        $scope.makeMove = function (chosenSquare) {
            gameAPI.makeMove($scope.playerTurn, chosenSquare);
        };
    }
]);