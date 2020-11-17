//Open and connect socket
let socket = io();
let hue = 0;
let strokeWidth = document.getElementById("stroke_width");
//let strokePress =

//Listen for confirmation of connection
socket.on('connect', function () {
  console.log("Connected");
});

function setup() {
  //Create a p5 canvas based on the size of the active users window width and height
  createCanvas(windowWidth, windowHeight);
  //createCanvas(800, 600);

  //Clear out the background of this new canvas to white
  background(255);

  //Listen for messages named 'data' from the server
  socket.on('data', function (obj) {
    console.log(obj);
    //colorChoice(obj);
    drawPos(obj); //This secion is the invocation that "draws"
    //button.onhold = mousePressed(obj);

  });
}

function mouseMoved() {
  //Stores mouse Coordinates in var
  let mousePos = { x: mouseX, y: mouseY, px: pmouseX, py: pmouseY };

  //Sends mouse position object to the server
  socket.emit('data', mousePos);
}

/*function colorChoice() {
  //Stores mouse Coordinates in var
  //let color_picker = select('#pickcolor');
  let color_picker = document.getElementById("pickcolor");
  //let color_btn = select('#color-btn');
  let color_btn = document.getElementById("color-btn");
  //let color_holder = select('#color-holder');
  let colorStat = color_picker;

  color_btn.addEventListener("click", function() {
    let color = color_picker.value();
})

  //Sends color data to the server
  socket.emit('color', color);
}*/

// Adding a mousePressed listener to the stroke width button
stroke-button.addEventListener("click", function () {
  let width = parseInt(stroke_width_picker.value());
  if (width > 0) strokeWidth = width;
});

function mousePressed(pos) {
  //stroke(drawPos(pos));
  drawPos(pos);
}

function drawPos(pos) {
  //Drawing of p5 objects happens down here
  // Allows user to draw a colored, rainbow brush by default
  if (hue >= 360) {
    hue = 0;
  } else {
    hue++;
  }

  //Selects full spectrum color mode
  colorMode(HSL, 360);
  noStroke();

  // Incorporates rainbow brush into fill function
  fill(hue, 200, 200);
  //stroke(pos.x, 0, pos.y);
  strokeWeight(strokeWidth);
  ellipse(pos.x, pos.y, 10, 10);
  //ellipse(pos.x-5, pos.y-5);
  //ellipse(pos.x*-1+600, pos.y-5);
  //ellipse(pos.x*-1+600, pos.y*-1+400);
  //ellipse(pos.x-5, pos.y*-1+400);
}


