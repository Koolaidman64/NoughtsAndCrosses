
angular.module('noughtsAndCrossesApp')
    .service('gameAPI',['$http','gameModel','$q', function($http,gameModel,$q) {

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

                    var winnerOutcome = function() {
                        var deferred = $q.defer();

                        setTimeout(function () {
                            if (gameModel.outcome === 'Win') {
                                deferred.resolve();
                            } else {
                                deferred.reject();
                            }
                        }, 100);

                        return deferred.promise;
                    };

                    var promise = winnerOutcome();
                    promise.then(function() {
                        winnerDisplay();
                    }, function() {
                        drawDisplay();
                    });
                });
        };

        var winnerDisplay = function() {
            if (gameModel.winner === '1') {
                document.getElementById('winner1').style.visibility = 'visible';
            }
            else if (gameModel.winner === '2') {
                document.getElementById('winner2').style.visibility = 'visible';
            }
        };

        var drawDisplay = function() {

            if (gameModel.outcome === 'Draw') {
                document.getElementById('player1Draw').style.visibility = 'visible';
                document.getElementById('player2Draw').style.visibility = 'visible';
            }
        };

        this.startNewGame = function(player1,player2) {

            serverPost.url = 'http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame';
            serverPost.data = {'player1': player1,'player2': player2};
            server();
            document.getElementById('winner1').style.visibility = 'hidden';
            document.getElementById('winner2').style.visibility = 'hidden';
            document.getElementById('player1Draw').style.visibility = 'hidden';
            document.getElementById('player2Draw').style.visibility = 'hidden';
        };

        this.makeMove = function(chosenSquare) {

            serverPost.url = 'http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove';
            serverPost.data = {playerNumber:gameModel.currentPlayer, chosenSquare:chosenSquare};
            server();
        };

    }]);