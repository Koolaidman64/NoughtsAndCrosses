
angular.module('tombola.noughtsAndCrosses.audio')
    .service('audio',function($document,$timeout) {

        var audioSprite;
        var createSprite = function() {

            var document = $document[0];
            audioSprite = document.createElement('audio');

            var audioSource = document.createElement('source');
            audioSource.src = 'audio/audioSprite.mp3';
            audioSource.type = 'audio/mp3';

            audioSprite.appendChild(audioSource);
            document.body.appendChild(audioSprite);

        };

        var playAudio = function(duration) {
            $timeout(pauseSprite,duration);

            function pauseSprite() {
                audioSprite.pause();
            }

            audioSprite.play();
        };

        this.startNewGameAudio = function() {
            playAudio(4300);
        };

        createSprite();
    });