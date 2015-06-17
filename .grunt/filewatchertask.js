
module.exports = {

    scripts: {
        files: 'main-app/app/scripts/*.js',
        tasks: ['jshint', 'clean:scripts', 'concat:scripts'],
        options: {
            spawn: false
        }
    },

    images: {
        files: 'main-app/app/images/*.*',
        tasks: ['clean:images', 'copy:images'],
        options: {
            spawn: false
        }
    },

    grunt: {
        files: '.grunt/*.js',
        tasks: ['nostart'],
        options: {
            spawn: false
        }
    },

    less: {
        files: 'main-app/app/less/*.*',
        tasks: ['clean:css', 'less'],
        options: {
            spawn: false
        }
    },

    html: {
        files: 'main-app/app/index.html',
        tasks: ['clean:html', 'copy:html'],
        options: {
            spawn: false
        }
    },

    angular: {
        files: 'angular/*',
        tasks: ['nostart'],
        options: {
            spawn: false
        }
    },

    audio: {
        files: 'main-app/app/scripts/services/audio/*.*',
        tasks: ['nostart'],
        options: {
            spawn: false
        }
    },

    gameAPI: {
        files: 'main-app/app/scripts/services/game-api-proxy/*',
        tasks: ['nostart'],
        options: {
            spawn: false
        }
    },

    gameModel: {
        files: 'main-app/app/scripts/services/game-model/*',
        tasks: ['nostart'],
        options: {
            spawn: false
        }
    },

    directives: {
        files: 'main-app/app/scripts/directives/*.js',
        tasks: ['nostart'],
        options: {
            spawn: false
        }
    },

    tests: {
        files: './main-app/tests/**/*.js',
        tasks: ['nostart'],
        options: {
            spawn: false
        }
    }

};