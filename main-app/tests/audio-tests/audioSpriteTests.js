
(function() {
    'use strict';
    describe('AudioSprite tests', function () {
        var $timeout,
         $document,
         audioSprite,
         audioSpriteMock,
         sandbox;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.audio');

            inject(function ($injector) {
                sandbox = sinon.sandbox.create();
                audioSpriteMock = sinon.sandbox.mock(mocks.audioSprite);
                $timeout = $injector.get('$timeout');
                $document = $injector.get('$document');
                audioSprite = $injector.get('audioSprite');
            });
        });

        it("Ensure audioSprite it set correctly", function() {
            var lastElement= $document[0].body.children[$document[0].body.children.length -1];
            var innerElement = lastElement.children[0];

            assert.equal(innerElement.localName, 'source');
            assert.equal(lastElement.localName, 'audio');
            assert.equal(lastElement.children.length, 1);
        });

        //Works in Chrome - PhantomJS does not support playing of audio elements.
        it.skip("Test", function() {
            var lastElement= $document[0].body.children[$document[0].body.children.length -1];
            var audioMock = sinon.sandbox.mock(lastElement);

            audioMock
                .expects('play')
                .once();
            audioSprite.playAudio(0.1,0.2);
            audioMock.verify();
        });

        afterEach(function () {
            audioSpriteMock.verify();
            sandbox.restore();
        });
    });
})();