const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg,time;
var response,responseJson,datetime, hour

function preload() {
    // create getBackgroundImg( ) here
     backgroundImg()
}

function setup(){
     canvas = createCanvas(1200,700);
    
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
     background(bg);
     

 Engine.update(engine);

}

async function backgroundImg(){

    // write code to fetch time from API
     response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
     responseJson = await response.json()
     datetime = responseJson.datetime;
    // write code slice the datetime
     hour = datetime.slice(11,13)
    // add conditions to change the background images from sunrise to sunset
    if(hour <= 8 && hour >= 6){
         bg = "sunrise1.png";
    }
    else if(hour <= 10 && hour >= 8){
         bg = "sunrise2.png";
    }
    else if(hour <= 12 && hour >= 10){
         bg = "sunrise4.png";
    }
    else if(hour <= 14 && hour >= 12){
         bg = "sunrise5.png";
    }
    else if(hour <= 16 && hour >= 14){
         bg = "sunset7.png";
    }
    else if(hour <= 18 && hour >= 16){
         bg = "sunset10.png";
    }
    else if(hour <= 20 && hour >= 18){
         bg = "sunset12.png";
    }
    

    
    

     // write code to display time in correct format here
     if(hour < 12 && hour > 0){
          time = " AM ";
      }
      else {
          time = " PM ";
      };
      textSize(35);
      stroke("blue")
      fill("orange")
      text("TIME : " + hour + time,50,90);
      background = loadImage(bg)
     
}
