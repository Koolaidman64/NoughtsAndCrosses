
angular.module('noughtsAndCrossesApp')
    .controller('NoughtsAndCrossesController',['$scope','gameModel','gameAPI', function ($scope,gameModel,gameAPI) {

        $scope.gameModel = gameModel;

        $scope.startNewGame = function() {
            gameAPI.startNewGame($scope.playertype1, $scope.playertype2);
        };

        $scope.makeMove = function() {
            gameAPI.makeMove($scope.playerNumber, $scope.chosenSquare);
        };
    }
]);