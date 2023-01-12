(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannon.png');
        game.load.image('Troll', './asset/Troll.jpg');
        game.load.image('platform', './asset/platform.png');
        game.load.image('Saulform', './asset/Saulform.png');
        game.load.image('db', './asset/collectable/database.png');
        game.load.image('steve', './asset/collectable/steve-head.png');
        game.load.image('grace', './asset/collectable/grace-head.png');
        game.load.image('kennedi', './asset/collectable/kennedi-head.png');
        game.load.image('max', './asset/collectable/max-head.png');
        game.load.image('Saul', './asset/collectable/Saul.jpg');
        game.load.image('Saul2', './asset/collectable/Saul2.jpg');
        game.load.image('Him', './asset/collectable/Him.jpg');
        game.load.image('Vergil', './asset/collectable/Vergil.jpg');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
    };
})(window);
