
noughtsAndCrossesApp.service('gameModel', function ($http){
    var GameModel = function(){


        var serverPost = {
            method: 'post',
            url: '',
            'withCredentials': 'true',

            headers: {
                'content-type': 'application/json;charset=UTF-8'
            },

            data: ''
        };


        var server = function() {
            var me = this;
            $http(serverPost).
                success(function (data) {
                    me.gameboard = data.gameboard;
                    me.outcome = data.outcome;
                });
        };

        this.startNewGame = function() {

            serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame';
            serverPost.data = {'player1':this.player1, 'player2':this.player2};
            server();

        };


        this.outcome = 'continue';
        this.gameboard = '000000000';
        this.winner = 0;
        this.player1 = 'random';
        this.player2 ='random';

    };

    return new GameModel();
});