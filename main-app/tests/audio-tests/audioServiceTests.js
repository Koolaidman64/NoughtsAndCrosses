
(function(){
    'use strict';
    describe('AudioService Tests', function(){
        var $document;
        var $timeout;
        var audioSprite;

        beforeEach(module('tombola.noughtsAndCrosses.audio'));

        inject(function($injector) {
            $timeout = $injector.get('$timeout');
            $document = $injector.get('$document');
            audioSprite = $injector.get('audioSprite');

        });
    });
}());