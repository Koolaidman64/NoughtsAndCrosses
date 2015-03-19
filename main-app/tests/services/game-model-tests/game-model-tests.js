
(function(){
    'use strict';
    describe('Game model tests',function() {
        var expect = expect.chai;
        var gameModel;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.gameModel');
            inject(function($injector) {
                gameModel = $injector.get('gameModel')
            });
        });



    });
});