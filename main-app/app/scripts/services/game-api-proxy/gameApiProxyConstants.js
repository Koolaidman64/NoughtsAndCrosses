
(function(){
    angular.module('tombola.noughtsAndCrosses.gameAPI')
        .constant('gameApiProxyConstants', {
            newGame:'http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame',
            makeMove:'http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove'
        });
}());