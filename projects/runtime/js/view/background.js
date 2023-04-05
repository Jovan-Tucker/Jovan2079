var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var sun;
        var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
           var backgroundFill = draw.bitmap("img/blackhole.jpg");
            background.addChild(backgroundFill);

            /*   var backgroundFill = draw.bitmap(canvasWidth,groundY,'black');*/
            
            // TODO: 3 - Add a moon and starfield
          /*  var moon = draw.bitmap("img/moon.png");//draws the image as a bitmap then stores it//
            moon.x = 200; // makes an x key for the moon//
            moon.y = groundY - 400; // makes an y key for the moon//
            moon.scaleX = 0.3; // scale the x value of the moon//
            moon.scaleY = 0.3; // scale the y value of the moon//
            background.addChild(moon); // add the moon as a child to background// */
            
          /*  for (var i = 0; i < 50; i++ ){

                var circle = draw.circle( 3, "black", "white", 1); //draws a circle and stroes it in the cicrle variable//
                circle.x = canvasWidth * Math.random() // the width of the canves multiples by a random decimal then stroes it//
                circle.y = groundY * Math.random();// the groundY of the canves multiples by a random decimal then stroes it//
                background.addChild(circle);//adds the stars as a child of the background//

            } */
            

            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            var buildingHeight = [50, 100, 40, 20, 300];//creates a varlbie named buildingheight and stroes a number as it height
            var buildingsColors = ["lightBlue", "white", 'blue', "pink", "darkRed", "lightGreen", "lightRed"]//makes a array of colors to stroe in side of the building varblue
            var building;

            for (var i = 0; i < 5; ++i) {
                
                var building = draw.circle(75, buildingHeight[i], buildingsColors[i], buildingsColors[i], 2);// draws a rectangle and stroes it //
                building.x = 500 * i; //Multiplies 200 times the current of the loop so that the buildings are 200 pixles apart. Also stores it as the x value//
                building.y = groundY - buildingHeight[i]; //subtracts building height from groundY. Also stores it as the y value//
                background.addChild(building);// add buidling as a child of background
                buildings.push(building); //adds the buildings to the array
              } 
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap("img/rocket.webp"); //draws the tree using bitmap and then stroes//
            tree.x = canvasWidth;//sets the x value of tree//
            tree.y = groundY + 20;//sets the y value of tree//
            background.addChild(tree);//adds tree to a child of background//
            
            sun = draw.bitmap("img/sun go boom.jpg"); //draws the tree using bitmap and then stroes//
            sun.x = canvasWidth;//sets the x value of tree//
            sun.y = groundY-500;//sets the y value of tree//
            background.addChild(sun);//adds tree to a child of background//
              





        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 2; //The current x position of the tree and then changes it by -1 so that it moves left.

            sun.x = sun.x - 1
            //checks if the tree goes off the canvas and if off then it goes back to the right//
            if (tree.x < -700) {
            tree.x = canvasWidth;
            }

            if (sun.x < -200) {
                sun.x = canvasWidth;
                }

            // TODO 5: Part 2 - Parallax
            
            //loops though the buildings array to access the index. This moves it and checks the position//
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                building.x = building.x -1//moves the building//
                
                if (building.x < -700) { //checks poition//
                    building.x = canvasWidth;//reset the building to the right//
                    }


              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
