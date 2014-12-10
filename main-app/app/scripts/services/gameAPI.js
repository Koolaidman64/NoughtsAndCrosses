
angular.module('noughtsAndCrossesApp')
    .service('gameAPI',['$http', function($http) {

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
                me.winner = data.winner;
            });
    };

    this.startNewGame = function() {

        serverPost.url = 'http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame';
        serverPost.data = {'player1': 'random', 'player2': 'random'};
        server();
    };
}]);