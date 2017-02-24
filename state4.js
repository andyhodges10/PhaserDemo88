demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#0040FF';
        console.log('state4');
        addChangeStateEventListeners();
    },
    update: function(){}
};
