
angular.module('noughtsAndCrossesApp')
    .controller('NoughtsAndCrossesController',['$scope','gameModel','gameAPI', function ($scope,gameModel,gameAPI) {

        $scope.gameModel = gameModel;

        $scope.startNewGame = function() {
            gameAPI.startNewGame($scope.gameModel.player1, $scope.gameModel.player2);
        };
    }
]);
