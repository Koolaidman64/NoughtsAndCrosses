
    noughtsAndCrossesApp.factory('gameModel', function ($http){

        return {
            outcome: 'continue',
            gameboard: '000000000',
            winner: 0,
            player1: 'random',
            player2: 'random',

            serverPost: {
                method: 'post',
                url: '',
                'withCredentials': 'true',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },

                data: ''

            },

            newGame: function () {
                var me = this;

                me.serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame';
                me.serverPost.data = {'player1': me.player1, 'player2': me.player2};
                $http(me.serverPost)


                    .success(function (data) {
                        me.gameboard = data.gameboard;
                        me.outcome = data.outcome;
                    });
            }};
    });