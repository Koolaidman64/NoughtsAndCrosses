
(function() {
    'use strict';
    describe('AudioSprite tests', function () {

        var $timeout,
         $document,
         audioSprite;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.audio');

            inject(function ($injector) {
                $timeout = $injector.get('$timeout');
                $document = $injector.get('$document');
                audioSprite = $injector.get('audioSprite');
            });
        });

        it("Ensure audioSprite it set correctly", function() {
            var createSprite = function() {

                var body = $document[0].body;
                var lastElement= $document[0].body.children[body.children.length -1];
                var innerElement = lastElement.children[0];

                assert.equal(innerElement.localName, 'source');
                assert.equal(lastElement.localName, 'audio');
                assert.equal(lastElement.children.length, 1);
            };

            createSprite();
        });
    });
})();