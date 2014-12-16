
angular.module('noughtsAndCrossesApp')
    .service('gameAPI',['$http','gameModel', function($http,gameModel) {

    var serverPost = {
        method: 'post',
        url: '',
        'withCredentials': 'true',

        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },

        data: ''
    };

    var server = function () {
        $http(serverPost).
            success(function (data) {
                gameModel.gameboard = data.gameboard;
                gameModel.outcome = data.outcome;
                gameModel.winner = data.winner;
            });
    };

    this.startNewGame = function(playerType1,playerType2) {

        serverPost.url = 'http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame';
        serverPost.data = {'player1': playerType1,'player2': playerType2};
        server();
    };

     this.makeMove = function(playerTurn,chosenSquare) {

        serverPost.url = 'http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove';
        serverPost.data = {playerNumber:playerTurn, chosenSquare:chosenSquare};
        server();
    };

}]);