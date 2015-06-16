
(function(){
    'use strict';
    describe('Directive tests',function() {
        var $compile,
         $rootScope;

        beforeEach(module('tombola.noughtsAndCrosses.directive'));

        beforeEach(inject(function(_$compile_,_$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('Directive Works', function() {
            var element = $compile('<game-square number="7"></game-square>')($rootScope);
            $rootScope.$digest();

            expect(element[0].toString()).to.be.equal('[object HTMLImageElement]');
            expect(element.attr('number')).to.be.equal('7');
            expect(element.attr('src')).to.be.equal('/images/Blank.png');
            expect(element.attr('class')).to.be.equal('gridSquare imageDisplay');
            expect(element.attr('ng-click')).to.be.equal('makeMove(7)');
        });
    });
}());