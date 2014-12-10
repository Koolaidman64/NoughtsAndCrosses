
angular.module('noughtsAndCrossesApp')
    .controller('noughtsAndCrossesController',['$scope','gameModel','gameAPI', function ($scope,gameModel,gameAPI) {

        $scope.gameModel = gameModel;
        $scope.startNewGame = function() {
            gameAPI.startNewGame();
        };
    }
]);
