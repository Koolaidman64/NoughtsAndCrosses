
angular.module('noughtsAndCrossesApp')
    .directive('gameSquare', function  () {

        return {
            restrict: 'E',
            replace: 'true',
            template: function (scope, attr) {
              return '<img src="/images/Blank.png" class="gridSquare imageDisplay{{ gameModel.gameboard[' + attr.number +']}}" ng-click="makeMove(' + attr.number +')"></img>';
            }
        };
    });
