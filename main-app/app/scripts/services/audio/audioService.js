
angular.module('tombola.noughtsAndCrosses.audio')
    .service('audio',function($document) {

        var audioSprite;
        var createSprite = function() {

            var document = $document[0];
            audioSprite = document.createElement('audio');

            var audioSource = document.createElement('source');
            audioSource.src = 'audio/beep.mp3';
            audioSource.type = 'audio/mp3';

            audioSprite.appendChild(audioSource);
            document.body.appendChild(audioSprite);

        };

        var playAudio = function(startTime) {
            audioSprite.currentTime = startTime;
            audioSprite.play();
        };

        this.startNewGameAudio = function() {
            playAudio(0,100);
        };

        createSprite();
    });