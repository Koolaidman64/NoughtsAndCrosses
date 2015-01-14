
angular.module('noughtsAndCrossesApp')
    .controller('NoughtsAndCrossesController',['$scope','gameModel','gameAPI', function ($scope,gameModel,gameAPI) {

        $scope.gameModel = gameModel;


        $scope.startNewGame = function () {
            gameAPI.startNewGame($scope.gameModel.player1, $scope.gameModel.player2);
        };

        $scope.makeMove = function (chosenSquare) {
            gameAPI.makeMove($scope.gameModel.player1, chosenSquare);
        };

        $scope.changePlayer1 = function () {
            $scope.gameModel.changePlayer1();
        };

        $scope.changePlayer2 = function () {
            $scope.gameModel.changePlayer2();
        };
    }]);