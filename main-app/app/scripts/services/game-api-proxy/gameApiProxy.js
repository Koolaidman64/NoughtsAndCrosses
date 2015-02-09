
angular.module('tombola.noughtsAndCrosses.gameAPI')
    .service('gameAPI',['$http','$q', function($http,$q) {

        var serverPost = function (url, data) {
            return {
                method: 'post',
                url: url,
                'withCredentials': 'true',
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
                data: data
            };
        };

        var makeServerCall = function (serverPostData) {
            var deferred = $q.defer();
            $http(serverPostData).
                success(function (data) {
                    deferred.resolve(data);

                })
                .error(function(data, status){
                    deferred.reject({status: status, message: data});
                });

            return deferred.promise;
        };

        this.startNewGame = function(player1,player2) {

            var newGameServerPost = new serverPost ('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
                {'player1': player1,'player2': player2}
            );
            return makeServerCall(newGameServerPost);

        };

        this.makeMove = function(currentPlayer,chosenSquare) {
            var moveServerPost = new serverPost ('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove',
                {playerNumber:currentPlayer, chosenSquare:chosenSquare}
            );
            return makeServerCall(moveServerPost);
        };

    }]);