module.exports = {
    scripts: {

        src: [

            'main-app/app/scripts/modules.js',
            'main-app/app/scripts/controller.js',
            'main-app/app/scripts/*.js',
            'main-app/app/scripts/controller.js',
            'main-app/app/scripts/services/*.js'
        ],

        dest: '.build/main-app/app/scripts/built.js'

    }};