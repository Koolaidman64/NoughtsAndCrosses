
module.exports = function(config){
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [],

        exclude: [],

        preprocessors: {},

        port: '9877',

        reporters: ['nyan'],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DISABLE,

        browsers: ['PhantomJS'],

        autoWatch: true,

        colors: true,

        singleRun: true

    })
};

