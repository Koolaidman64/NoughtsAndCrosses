
noughtsAndCrossesApp.controller('noughtsAndCrossesController', function($scope,gameModel) {
    $scope.gameModel = gameModel;
    $scope.newGame = function () {

        gameModel.startNewGame();
    };
});
