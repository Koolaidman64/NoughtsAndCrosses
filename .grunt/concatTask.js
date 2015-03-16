module.exports = {
    scripts: {

        src: [

            'main-app/app/scripts/modules.js',
            'main-app/app/scripts/controller.js',
            'main-app/app/scripts/*.js',
            'main-app/app/scripts/controller.js',
            'main-app/app/scripts/directives/*.js',
            'main-app/app/scripts/services/audio/*.js',
            'main-app/app/scripts/services/game-api-proxy/gameApiProxyConstants.js',
            'main-app/app/scripts/services/game-api-proxy/gameApiProxy.js',
            'main-app/app/scripts/services/game-model/*.js'
        ],

        dest: '.build/main-app/app/scripts/built.js'

    }};