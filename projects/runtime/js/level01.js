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
                { "type": "Saul", "x": 1000, "y": groundY-20 },
                { "type": "reward", "x": 800, "y": groundY -90 },
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
              { "type": "grass", "x": 2200, "y": groundY - 3 },
              { "type": "troll", "x": 2400, "y": groundY - 50 },
              { "type": "grass", "x": 3100, "y": groundY - 3 },
              { "type": "enemy", "x": 2800, "y": groundY -398 },
              { "type": "troll", "x": 3400, "y": groundY - 50 },
              { "type": "TopG", "x": 3600, "y": groundY -20 },

                /* 3rd wave*/ 
                { "type": "banana", "x": 900, "y": groundY -10 },

                { "type": "axel", "x": 4200, "y": groundY -20 },              
                { "type": "troll", "x": 4050, "y": groundY - 50 },
                { "type": "troll", "x": 4800, "y": groundY - 398 },
               

              
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        
        //function creats a sawblade at any given x and y value
        
        function createSawBlade(x, y){

            var hitZoneSize = 25;//size of the hitzone//
            var damageFromObstacle = 1000; //sets the damage amount and assigns to a new variable//
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
            var damageFromObstacle = 1000; //sets the damage amount and assigns to a new variable//
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
            game.changeIntegrity(-1000)  //takes health away when player hits it
        };
        enemy.onProjectileCollision = function (){
            game.increaseScore(100); //increases the score//
            enemy.fadeOut();//flies the enemy 
        };

    }

    function saul(x, y){

        var saul = game.createGameItem("Saul", 10); //creaate the gameItem and store it 
        var redSquare = draw.bitmap("img/Saul.png") // draws a rectangle and stores it in the game
        redSquare.x = -5;//stores a value as the x value of the gameItem//
        redSquare.y = -10;
        saul.addChild(redSquare);//adds the gameItem as a child of enemy
        saul.x = x;//stores the value passed as the x argument as enemy's x value
        saul.y = y;
        game.addGameItem(saul);// adds the enemy to the game to make it move
        saul.velocityX = 0//speed on the x aixs//
        saul.rotationalVelocity = 0//speed of the enemy rotating
        saul.onPlayerCollision = function () {
            game.increaseScore(-400);
        };
        saul.onProjectileCollision = function (){
            game.changeIntegrity(-1000)
            saul.fadeOut();//flies the enemy 
        };

    } 

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
            game.changeIntegrity(-1000)  //takes health away when player hits it
        };
        topG.onProjectileCollision = function (){
            game.increaseScore(100); //increases the score//
            topG.fadeOut();//flies the enemy 
        };

    }           

/* function topG(x, y){

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
            game.changeIntegrity(-1000)  //takes health away when player hits it
        };
        topG.onProjectileCollision = function (){
            game.increaseScore(100); //increases the score//
            topG.fadeOut();//flies the enemy 
        };

    }           
*/
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
            game.changeIntegrity(-1000)  //takes health away when player hits it
        };
        bateman.onProjectileCollision = function (){
            game.increaseScore(100); //increases the score//
            bateman.fadeOut();//flies the enemy 
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
            game.changeIntegrity(-1000)  //takes health away when player hits it
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
            game.changeIntegrity(-9999999) 
           
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
        nerd.velocityX = -1//speed on the x aixs//
        nerd.rotationalVelocity = 0//speed of the reward rotating
        nerd.onProjectileCollision = function (){
            game.increaseScore(-300); //increases the score//
            nerd.fadeOut();//flies the enemy 
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
           
            if (gameItem.type === "Saul"){

                saul;(gameItem.x, gameItem.y);
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
