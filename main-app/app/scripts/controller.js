
angular.module('noughtsAndCrossesApp')
    .controller('NoughtsAndCrossesController',['$scope','gameModel','gameAPI', function ($scope,gameModel,gameAPI) {

        $scope.gameModel = gameModel;

        $scope.startNewGame = function() {
            gameAPI.startNewGame($scope.playerType1, $scope.playerType2);
        };

        $scope.makeMove = function() {
            gameAPI.makeMove($scope.playerNumber, $scope.chosenSquare);
        };
    }
]);