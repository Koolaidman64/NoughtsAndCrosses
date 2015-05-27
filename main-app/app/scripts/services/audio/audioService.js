(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.audioService')
        .service('audioService', function (audioSprite) {

            this.startNewGameAudio = function () {
                audioSprite.playAudio(0, 4.5);
            };

            this.makeMoveAudio = function () {
                audioSprite.playAudio(4.5, 4.55);
            };


        });
})();