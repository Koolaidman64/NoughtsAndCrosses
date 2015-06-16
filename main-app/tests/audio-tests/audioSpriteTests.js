
(function() {
    'use strict';
    describe('AudioSprite tests', function () {

        var $timeout,
         $document,
         audioSprite;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.audioSprite');

            inject(function (_$injector_) {
                $timeout = _$injector_;
            });
        });

    });
})();