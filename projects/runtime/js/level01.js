var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 2, 
            "speed": -1,
            "gameItems": [
               
               
               /* 1st wave  */
                { "type": "sawblade", "x": 290, "y": groundY -5 },         
                { "type": "sawblade", "x": 590, "y": groundY -5 },       
                { "type": "sawblade", "x": 640, "y": groundY -5 },       
               
                { "type": "reward", "x": 1100, "y": groundY -90 },
                { "type": "sawblade", "x": 850, "y": groundY -5 },
                { "type": "nerd", "x": 2500, "y": groundY -50 },
                { "type": "sawblade", "x": 900, "y": groundY -5 },
                { "type": "sawblade", "x": 950, "y": groundY -5 },             
                { "type": "troll", "x": 1200, "y": groundY - 50 },
                { "type": "enemy", "x": 1700, "y": groundY -398 },
                { "type": "sawblade", "x": 1300, "y": groundY -5 },
                


              /* 2nd wave*/
              
              { "type": "TopG", "x": 2500, "y": groundY -20 },
              { "type": "TopG", "x": 2800, "y": groundY -20 }, 
              { "type": "grass", "x": 2050, "y": groundY - 3 },
              { "type": "troll", "x": 2300, "y": groundY - 50 },
              { "type": "enemy", "x": 2600, "y": groundY -398 },
              { "type": "TopG", "x": 3230, "y": groundY -20 }, 
              { "type": "troll", "x": 3400, "y": groundY - 50 },
              { "type": "TopG", "x": 3600, "y": groundY -20 },

                /* 3rd wave*/ 
                { "type": "axel", "x": 4150, "y": groundY -50 },              
                { "type": "Saul", "x": 500, "y": groundY -50 }, 
                { "type": "troll", "x": 4050, "y": groundY - 50 }, 
                { "type": "troll", "x": 5400, "y": groundY - 50 }, 
                { "type": "ghost", "x": 4800, "y": groundY - 50 }, 
                { "type": "ghost", "x": 5700, "y": groundY - 50 }, 
                { "type": "enemy", "x": 4600, "y": groundY -50 },
                { "type": "enemy", "x": 6000, "y": groundY -50 },
                { "type": "nerd", "x": 4200, "y": groundY -50 },
                { "type": "axel", "x": 5000, "y": groundY -50 },  
                { "type": "troll", "x": 4400, "y": groundY - 398 },
                { "type": "bateman", "x": 4700, "y": groundY -20 },
                { "type": "bateman", "x": 5500, "y": groundY -20 },

                /* 4th wave*/ 

                { "type": "Saul;", "x": 6300, "y": groundY -50 },
                { "type": "troll", "x": 6450, "y": groundY - 398 },
                { "type": "axel", "x": 6800, "y": groundY -50 },  
                { "type": "troll", "x": 6850, "y": groundY - 50 },
                { "type": "bateman", "x": 6860, "y": groundY -20 },
                { "type": "axel", "x": 6600, "y": groundY -50 },
                { "type": "enemy", "x": 7000, "y": groundY -50 },
                { "type": "axel", "x": 7200, "y": groundY -50 },
                

                /* 5th */ 

                { "type": "tvGood", "x": 9300, "y": groundY -50 },
                { "type": "tvbad", "x": 9450, "y": groundY -50 },
                { "type": "tvbad", "x": 9500, "y": groundY -50 },
                { "type": "eye", "x": 9560, "y": groundY -398 },
               
                { "type": "jump", "x": 223653, "y": groundY -460 },
              
              
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(falsegit);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        
        //function creats a sawblade at any given x and y value
        
        function createSawBlade(x, y){

            var hitZoneSize = 25;//size of the hitzone//
            var damageFromObstacle = 111100; //sets the damage amount and assigns to a new variable//
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstalces//
            sawBladeHitZone.x = x; // assigns the x vaule using the argument//
            sawBladeHitZone.y = y; // assigns the y vaule using the argument//
            game.addGameItem(sawBladeHitZone) //adds the hitzone to the game//
            var obstacleImage = draw.bitmap("img/sawblade.png"); // draws the image as a bitmap and stores it//
            obstacleImage.x = -25
            obstacleImage.y = -23
            sawBladeHitZone.addChild(obstacleImage);//adds  obstacleImage as a child// 
            
        }

        function grass(x, y){

            var grass = game.createGameItem("grass");
            var hitZoneSize = 25;//size of the hitzone//
            var damageFromObstacle = 111100; //sets the damage amount and assigns to a new variable//
            var grass = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstalces//
            grass.x = x; // assigns the x vaule using the argument//
            grass.y = y; // assigns the y vaule using the argument//
            game.addGameItem(grass) //adds the hitzone to the game//
            var obstacleImage = draw.bitmap("img/grass.jpg"); // draws the image as a bitmap and stores it//
            obstacleImage.x = -55
            obstacleImage.y = -23
            grass.addChild(obstacleImage);//adds  obstacleImage as a child// 
            
        }

        
        
        





        function createTroll(x, y){

            var hitZoneSize = 350;//size of the hitzone//
            var damageFromObstacle = 0; //sets the damage amount and assigns to a new variable//
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstalces//
            sawBladeHitZone.x = x; // assigns the x vaule using the argument//
            sawBladeHitZone.y = y; // assigns the y vaule using the argument//
            game.addGameItem(sawBladeHitZone) //adds the hitzone to the game//
            var obstacleImage = draw.bitmap("img/Troll.jpg"); // draws the image as a bitmap and stores it//
            obstacleImage.x = -25
            obstacleImage.y = -23
            sawBladeHitZone.addChild(obstacleImage);//adds  obstacleImage as a child// 


        }

        


function createEnemy(x, y){

        var enemy = game.createGameItem("enemy", 320); //creaate the gameItem and store it 
        var redSquare = draw.bitmap("img/Troll.jpg"); // draws a rectangle and stores it in the game
        redSquare.x = -25;//stores a value as the x value of the gameItem//
        redSquare.y = -25;
        enemy.addChild(redSquare);//adds the gameItem as a child of enemy
        enemy.x = x;//stores the value passed as the x argument as enemy's x value
        enemy.y = y;
        game.addGameItem(enemy);// adds the enemy to the game to make it move
        enemy.velocityX = -2//speed on the x aixs//
        enemy.rotationalVelocity = 0//speed of the enemy rotating
        enemy.onPlayerCollision = function () {
            game.changeIntegrity(-111100)  //takes health away when player hits it
        };
        enemy.onProjectileCollision = function (){
            game.increaseScore(100); //increases the score//
            enemy.fadeOut();//flies the enemy 
        };

    }

    function jumpS(x, y){

        var jumpS = game.createGameItem("jump", 0); //creaate the gameItem and store it 
        var redSquare = draw.bitmap("img/jump.jpg"); // draws a rectangle and stores it in the game
        redSquare.x = -25;//stores a value as the x value of the gameItem//
        redSquare.y = -25;
        jumpS.addChild(redSquare);//adds the gameItem as a child of enemy
        jumpS.x = x;//stores the value passed as the x argument as enemy's x value
        jumpS.y = y;
        game.addGameItem(jumpS);// adds the enemy to the game to make it move
        jumpS.velocityX = -60//speed on the x aixs//
        jumpS.rotationalVelocity = 0//speed of the enemy rotating
        

    }

    function jumpS2(x, y){

        var jumpS = game.createGameItem("jump2", 0); //creaate the gameItem and store it 
        var redSquare = draw.bitmap("img/jump.jpg"); // draws a rectangle and stores it in the game
        redSquare.x = -25;//stores a value as the x value of the gameItem//
        redSquare.y = -25;
        jumpS.addChild(redSquare);//adds the gameItem as a child of enemy
        jumpS.x = x;//stores the value passed as the x argument as enemy's x value
        jumpS.y = y;
        game.addGameItem(jumpS);// adds the enemy to the game to make it move
        jumpS.velocityX = -60//speed on the x aixs//
        jumpS.rotationalVelocity = 0//speed of the enemy rotating
        

    }

    function eye(x, y){

        var eye = game.createGameItem("eye", 320); //creaate the gameItem and store it 
        var redSquare = draw.bitmap("img/eye.jpg"); // draws a rectangle and stores it in the game
        redSquare.x = -25;//stores a value as the x value of the gameItem//
        redSquare.y = -25;
        eye.addChild(redSquare);//adds the gameItem as a child of enemy
        eye.x = x;//stores the value passed as the x argument as enemy's x value
        eye.y = y;
        game.addGameItem(eye);// adds the enemy to the game to make it move
        eye.velocityX = -2//speed on the x aixs//
        eye.rotationalVelocity = 0//speed of the enemy rotating
        eye.onPlayerCollision = function () {
            game.changeIntegrity(-111100)  //takes health away when player hits it
        };
        eye.onProjectileCollision = function (){
            game.increaseScore(100); //increases the score//
            eye.fadeOut();//flies the enemy 
        };

    }


    function saul(x, y){

        var saul = game.createGameItem("Saul", 70); //creaate the gameItem and store it 
        var redSquare = draw.bitmap("img/Saul.png") // draws a rectangle and stores it in the game
        redSquare.x = -60;//stores a value as the x value of the gameItem//
        redSquare.y = -50;
        saul.addChild(redSquare);//adds the gameItem as a child of enemy
        saul.x = x;//stores the value passed as the x argument as enemy's x value
        saul.y = y;
        game.addGameItem(saul);// adds the enemy to the game to make it move
        saul.velocityX = -1//speed on the x aixs//
        saul.rotationalVelocity = 0//speed of the enemy rotating
        saul.onPlayerCollision = function () {
            game.increaseScore(-400);
        };
        saul.onProjectileCollision = function (){
            game.changeIntegrity(-1000)
            saul.fadeOut();//flies the enemy 
        };

    };

    
    function topG(x, y){

        var topG = game.createGameItem("TopG", 80); //creaate the gameItem and store it 
        var blueSquare = draw.bitmap("img/Top G 2.jpg") // draws a rectangle and stores it in the game
        blueSquare.x = -55;//stores a value as the x value of the gameItem//
        blueSquare.y = -80;
        topG.addChild(blueSquare);//adds the gameItem as a child of enemy
        topG.x = x;//stores the value passed as the x argument as enemy's x value
        topG.y = y;
        game.addGameItem(topG);// adds the enemy to the game to make it move
        topG.velocityX = -2//speed on the x aixs//
        topG.rotationalVelocity = 0//speed of the enemy rotating
        topG.onPlayerCollision = function () {
            game.changeIntegrity(-111100)  //takes health away when player hits it
        };
        topG.onProjectileCollision = function (){
            game.increaseScore(100); //increases the score//
            topG.fadeOut();//flies the enemy 
        };

    }           


    function tvBad(x, y){

        var tvBad = game.createGameItem("tvbad", 85); //creaate the gameItem and store it 
        var blueSquare = draw.bitmap("img/Tvbad.png") // draws a rectangle and stores it in the game
        blueSquare.x = -85;//stores a value as the x value of the gameItem//
        blueSquare.y = -60;
        tvBad.addChild(blueSquare);//adds the gameItem as a child of enemy
        tvBad.x = x;//stores the value passed as the x argument as enemy's x value
        tvBad.y = y;
        game.addGameItem(tvBad);// adds the enemy to the game to make it move
        tvBad.velocityX = -2//speed on the x aixs//
        tvBad.rotationalVelocity = 0//speed of the enemy rotating
        tvBad.onPlayerCollision = function () {
            game.changeIntegrity(-111100)  //takes health away when player hits it
        };
        tvBad.onProjectileCollision = function (){
            game.increaseScore(50); //increases the score//
            tvBad.fadeOut();//flies the enemy 
        };

    }  



    function bateman(x, y){

        var bateman = game.createGameItem("bateman", 80); //creaate the gameItem and store it 
        var greenSquare = draw.bitmap("img/bateman.jpg") // draws a rectangle and stores it in the game
        greenSquare.x = -55;//stores a value as the x value of the gameItem//
        greenSquare.y = -70;
        bateman.addChild(greenSquare);//adds the gameItem as a child of enemy
        bateman.x = x;//stores the value passed as the x argument as enemy's x value
        bateman.y = y;
        game.addGameItem(bateman);// adds the enemy to the game to make it move
        bateman.velocityX = -2//speed on the x aixs//
        bateman.rotationalVelocity = 0//speed of the enemy rotating
        bateman.onPlayerCollision = function () {
            game.increaseScore(-500); //increases the score//
            bateman.fadeOut();//flies the enemy 
    
        };

        bateman.onProjectileCollision = function (){
            game.changeIntegrity(-1000)
            bateman.fadeOut();//flies the enemy 
        };

    }

    function ghost(x, y){

        var ghost = game.createGameItem("ghost", 80); //creaate the gameItem and store it 
        var greenSquare = draw.bitmap("img/ghost.jpg") // draws a rectangle and stores it in the game
        greenSquare.x = -55;//stores a value as the x value of the gameItem//
        greenSquare.y = -70;
        ghost.addChild(greenSquare);//adds the gameItem as a child of enemy
        ghost.x = x;//stores the value passed as the x argument as enemy's x value
        ghost.y = y;
        game.addGameItem(ghost);// adds the enemy to the game to make it move
        ghost.velocityX = -2//speed on the x aixs//
        ghost.rotationalVelocity = 0//speed of the enemy rotating
        ghost.onPlayerCollision = function () {
            game.increaseScore(-500); //increases the score//
            ghost.fadeOut();//flies the enemy 
        
        };
    
    ghost.onProjectileCollision = function (){
        game.increaseScore(-200);
        ghost.fadeOut();//flies the enemy 
    };
    }


    function tvGood(x, y){

        var tvGood = game.createGameItem("tvGood", 80); //creaate the gameItem and store it 
        var greenSquare = draw.bitmap("img/Tvgood.jpg") // draws a rectangle and stores it in the game
        greenSquare.x = -55;//stores a value as the x value of the gameItem//
        greenSquare.y = -45;
        tvGood.addChild(greenSquare);//adds the gameItem as a child of enemy
        tvGood.x = x;//stores the value passed as the x argument as enemy's x value
        tvGood.y = y;
        game.addGameItem(tvGood);// adds the enemy to the game to make it move
        tvGood.velocityX = -2//speed on the x aixs//
        tvGood.rotationalVelocity = 0//speed of the enemy rotating
        tvGood.onPlayerCollision = function () {
            game.increaseScore(-500); //increases the score//
        };
    
        tvGood.onProjectileCollision = function (){
        game.changeIntegrity(-1000)
        tvGood.fadeOut();//flies the enemy 
    };
    }




    function axel(x, y){

        var axel = game.createGameItem("axel", 80); //creaate the gameItem and store it 
        var greenSquare = draw.bitmap("img/Aexl.jpg") // draws a rectangle and stores it in the game
        greenSquare.x = -55;//stores a value as the x value of the gameItem//
        greenSquare.y = -70;
        axel.addChild(greenSquare);//adds the gameItem as a child of enemy
        axel.x = x;//stores the value passed as the x argument as enemy's x value
        axel.y = y;
        game.addGameItem(axel);// adds the enemy to the game to make it move
        axel.velocityX = -2//speed on the x aixs//
        axel.rotationalVelocity = 0//speed of the enemy rotating
        axel.onPlayerCollision = function () {
            game.changeIntegrity(-11110)  //takes health away when player hits it
        };
        axel.onProjectileCollision = function (){
            game.increaseScore(100); //increases the score//
            axel.fadeOut();//flies the enemy 
        };

    }
    


    function createReward(x, y){

        var reward = game.createGameItem("reward", 70);
        var greenSquare = draw.bitmap("img/medkit.jpg")
        greenSquare.x = -65;
        greenSquare.y = -50;
        reward.addChild(greenSquare);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = -1 //speed on the x aixs//
        reward.rotationalVelocity = 0//speed of the reward rotating
        reward.onPlayerCollision = function () {
            game.changeIntegrity(-1111) 
           
        };

        reward.onProjectileCollision = function (){
            game.increaseScore(100); //increases the score//
            reward.fadeOut();//flies the enemy 
        };



    }

    
    function nerd(x, y){

        var nerd = game.createGameItem("nerd", 70);
        var whiteSquare = draw.bitmap("img/Nerd.png")
        whiteSquare.x = -65;
        whiteSquare.y = -50;
        nerd.addChild(whiteSquare);
        nerd.x = x;
        nerd.y = y;
        game.addGameItem(nerd);
        nerd.velocityX = -3//speed on the x aixs//
        nerd.rotationalVelocity = 0//speed of the reward rotating
        nerd.onProjectileCollision = function (){
            game.increaseScore(-300); //increases the score//
            nerd.fadeOut();//flies the enemy 
        };
        nerd.onPlayerCollision = function () {
            game.increaseScore(-300);
        };



    } 



    

    



    // the loop for gameItems
        for (var i = 0; i < levelData.gameItems.length; i++ ){
            var gameItem = levelData.gameItems[i];

            if (gameItem.type === "sawblade"){

                createSawBlade(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === "enemy"){

                createEnemy(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "eye"){

                eye(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "jump"){

                jumpS(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "reward"){

                createReward(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "troll"){

                createTroll(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "TopG"){

                topG(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "bateman"){

                bateman(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === "nerd"){

                nerd(gameItem.x, gameItem.y);
            }   

            if (gameItem.type === "axel"){

                axel(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "grass"){

                grass(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "hole"){

                hole(gameItem.x, gameItem.y);
            }
           
            if (gameItem.type === "ghost"){

                ghost(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "Saul"){

                saul(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === "tvbad"){

                tvBad(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "tvGood"){

                tvGood(gameItem.x, gameItem.y);
            }
        
        };
       

    
        // DO NOT EDIT CODE BELOW HERE

    

    }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01.js   
};
