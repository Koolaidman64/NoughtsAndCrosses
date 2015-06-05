
angular.module('tombola.noughtsAndCrosses.audioSprite',[]);
angular.module('tombola.noughtsAndCrosses.audioService',[]);
angular.module('tombola.noughtsAndCrosses.gameAPI',[]);
angular.module('tombola.noughtsAndCrosses.gameModel',[]);
angular.module('tombola.noughtsAndCrosses.directive',[]);
angular.module('tombola.noughtsAndCrosses.controller',[]);
angular.module('tombola.noughtsAndCrosses.gameModelConstants',[]);
angular.module('tombola.noughtsAndCrosses',
    ['tombola.noughtsAndCrosses.audioService',
        'tombola.noughtsAndCrosses.gameAPI',
        'tombola.noughtsAndCrosses.gameModel',
        'tombola.noughtsAndCrosses.directive',
        'tombola.noughtsAndCrosses.controller',
        'tombola.noughtsAndCrosses.gameModelConstants',
        'tombola.noughtsAndCrosses.audioSprite']);