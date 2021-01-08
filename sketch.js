//Create variables here
var dog, dogImage;
var happyDog, happyDogImage;
var database;
var foodS;
var foodStock;

function preload() {
  //load images here
  dogImage = loadImage("dog.png");
  happyDogImage = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1200, 1000);

  dog = createSprite(250,500);
  dog.addImage(dogImage);
  

  foodStock = database.ref('food')
  foodStock.on("value", (data =>{
    foodS=data.val();
  }))
}


function draw() {
  background(46, 139, 87)

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDogImage)

    //database.ref('food/value').set({
    //'value': value-1
    //})
  }


  drawSprites();
  //add styles here
  text  ("NOTE:Press UP_ARROW key to feed Drago the milk ",450,250)
  fill("red")
}
  //function readStock(data) {
    //foodS = data.val();
  //}

  function writeStock(x) {
    if (x <= 0) {
      x = 0
    } else {
      x = x - 1
    }
    database.ref('/').update({
      food: x
    })
  }




