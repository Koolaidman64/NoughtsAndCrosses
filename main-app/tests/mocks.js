
var mocks = {
    gameApiProxyConstants: {
        newGameUrl: 'fakeNewGameUrl',
        makeMoveUrl: 'fakeMakeMoveUrl'
    },

    gameAPI: {
        startNewGame: function(){ },
        makeMove: function(){ }
    },

    gameModel: {
        updateModel: function(){ },
        firstPlayer: function(){ },
        changePlayerNumber: function(){ }
    },

    audioService: {
        startNewGameAudio: function(){ },
        makeMoveAudio: function(){ }
    },

    audioSprite: {
        playAudio: function(){ },
        play: function(){ },
        pause: function(){ }
    }

};