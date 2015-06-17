
(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.audio')
        .service('audioSprite', function ($document, $timeout) {

            var me = this;
            var audioSprite,

                createSprite = function () {
                    audioSprite = angular.element('<audio/>');
                    audioSprite.append(angular.element('<source src="audio/audioSprite.mp3" type="audio/mp3"/>'));
                    $document[0].body.appendChild(audioSprite[0]);
                };

            me.playAudio = function (start, duration) {
                audioSprite[0].currentTime = start;
                audioSprite[0].play();
                $timeout(function () {
                    audioSprite[0].pause();
                }, duration * 1000);
            };

            createSprite();
        });
})();