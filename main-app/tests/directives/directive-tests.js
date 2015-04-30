
(function(){
    'use strict';
    describe('Directive tests',function() {
        var compile;
        var rootScope;

        beforeEach(
            module(function($provide) {
                    $provide.value('tombola.noughtsAndCrosses.directive', function (value) {
                        return value;
                    });
                }));
        beforeEach(inject(function($compile,$rootScope) {
            compile = $compile;
            rootScope = $rootScope;
        }));

        it('Directive Works', function() {
            var directiveElementHtml = '<game-square number="7"></game-square>';

            var element = compile(directiveElementHtml)(rootScope);
            rootScope.$digest();

            expect(element[0].toString()).to.be.equal('[object HTMLElement]');
            expect(element.attr('number')).to.be.equal('7');

        });
    })
}());