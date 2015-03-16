
angular.module('tombola.noughtsAndCrosses.audio',[]);
angular.module('tombola.noughtsAndCrosses.gameAPI',[]);
angular.module('tombola.noughtsAndCrosses.gameModel',[]);
angular.module('tombola.noughtsAndCrosses.directive',[]);
angular.module('tombola.noughtsAndCrosses.controller',[]);
angular.module('tombola.noughtsAndCrosses.gameModelConstants',[]);
angular.module('tombola.noughtsAndCrosses',
    ['tombola.noughtsAndCrosses.audio',
        'tombola.noughtsAndCrosses.gameAPI',
        'tombola.noughtsAndCrosses.gameModel',
        'tombola.noughtsAndCrosses.directive',
        'tombola.noughtsAndCrosses.controller',
        'tombola.noughtsAndCrosses.gameModelConstants']);