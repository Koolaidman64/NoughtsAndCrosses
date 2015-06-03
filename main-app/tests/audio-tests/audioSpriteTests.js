
(function() {
    'use strict';
    describe('AudioSprite tests', function () {

        var $timeout;
        var $document;
        var audioSprite;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.audioSprite');

            inject(function ($injector) {
                $timeout = $injector.get('$timeout');
            });
        });



    });
})();