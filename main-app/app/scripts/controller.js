
angular.module('noughtsAndCrossesApp')
    .controller('NoughtsAndCrossesController',['$scope','gameModel','gameAPI', function ($scope,gameModel,gameAPI) {

        $scope.gameModel = gameModel;


        $scope.startNewGame = function () {
            gameAPI.startNewGame($scope.gameModel.player1, $scope.gameModel.player2);
        };

        $scope.makeMove = function (chosenSquare) {
            gameAPI.makeMove(chosenSquare);
        };

        $scope.changePlayerType1 = function () {
            $scope.gameModel.changePlayerType1();
        };

        $scope.changePlayerType2 = function () {
            $scope.gameModel.changePlayerType2();
        };

        $scope.switchPlayer = function () {
            $scope.gameModel.switchPlayer();
        };
    }]);