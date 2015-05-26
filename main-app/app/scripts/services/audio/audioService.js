(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.audioSprite')
        .service('audio', function ($document, $timeout) {

            var audioSprite,

                createSprite = function(){
                    audioSprite = angular.element('<audio/>');
                    audioSprite.append(angular.element('<source src="audio/audioSprite.mp3" type="audio/mp3"/>'));
                    $document[0].body.appendChild(audioSprite[0]);
                };

            var playAudio = function (start, duration) {
                audioSprite[0].currentTime = start;
                audioSprite[0].play();
                $timeout(function(){
                    audioSprite[0].pause ();
                }, duration * 1000);
            };

            this.startNewGameAudio = function () {
                playAudio(0, 4.5);
            };

            this.makeMoveAudio = function () {
                playAudio(4.5, 4.55);
            };

            createSprite();
        });
})();

//var audioSprite;
//var createSprite = function () {
//
//    var document = $document[0];
//    audioSprite = document.createElement('audio');
//
//    var audioSource = document.createElement('source');
//    audioSource.src = 'audio/audioSprite.mp3';
//    audioSource.type = 'audio/mp3';
//
//    audioSprite.appendChild(audioSource);
//    document.body.appendChild(audioSprite);
//
//};
//
//var playAudio = function (start, duration) {
//    audioSprite.currentTime = start;
//
//    $timeout(function () {
//        audioSprite.pause();
//    }, duration);
//
//    audioSprite.play();
//};