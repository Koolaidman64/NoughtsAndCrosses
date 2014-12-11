
angular.module('noughtsAndCrossesApp')
    .service('gameAPI',['$http','gameModel', function($http) {

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
        var me = this;
        $http(serverPost).
            success(function (data) {
                me.gameboard = data.gameboard;
                me.outcome = data.outcome;
                me.winner = data.outcome;
            });
    };

    this.startNewGame = function(player1,player2) {

        serverPost.url = 'http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame';
        serverPost.data = {'player1': player1,'player2': player2};
        server();
    };
}]);