
angular.module('noughtsAndCrossesApp')
    .controller('NoughtsAndCrossesController',['$scope','gameModel','gameAPI', function ($scope,gameModel,gameAPI) {

        $scope.gameModel = gameModel;


        $scope.startNewGame = function () {
            gameAPI.startNewGame($scope.player1, $scope.player2);
        };

        $scope.makeMove = function (chosenSquare) {
            gameAPI.makeMove($scope.gameModel.currentPlayer, chosenSquare);
        };

        $scope.changePlayer1 = function () {
            $scope.gameModel.changePlayer1();
        };

        $scope.changePlayer2 = function () {
            $scope.gameModel.changePlayer2();
        };
    }]);