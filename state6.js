demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#FFa500';
        console.log('state6');
        addChangeStateEventListeners();
    },
    update: function(){}
};
