
module.exports = function(config){
    config.set({

        plugins: [
            'karma-mocha',
            'karma-PhantomJS-launcher',
            'karma-nyan-reporter'
        ],

        basePath: '',

        frameworks: ['mocha'],

        port: '9877',

        reporters: ['nyan'],

        browsers: ['PhantomJS'],

        autoWatch: true,

        colors: true,

        singleRun: true

    })
};

