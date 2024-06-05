function draw() {
    fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);
  
    if(mouseIsPressed){
        cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    }
}

function draw() {
    fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);
    
    posicaoHorizontal+= random(0,3);
    
    if(mouseIsPressed){
        cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    }
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  posicaoHorizontal+= random(0,3);
  posicaoVertical+= random(-3,3);
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
  
}

function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 0;
  posicaoVertical = random(height);
}

let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

let posicaoHorizontal2; // x
let posicaoVertical2; // y

function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  posicaoHorizontal = 0;
  posicaoVertical = random(height);
  posicaoHorizontal2 = 0;
  posicaoVertical2 = random(height);
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  circle(posicaoHorizontal2, posicaoVertical2, 50);
  
  posicaoHorizontal+= random(0,3);
  posicaoVertical+= random(-3,3);
  posicaoHorizontal2+= random(0,3);
  posicaoVertical2+= random(-3,3);
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}



let circuloX; // horizontal


function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  circuloX = [0, 0];
  posicaoHorizontal = 0; 
  posicaoVertical = random(height);
  posicaoHorizontal2 = 0; 
  posicaoVertical2 = random(height);
}

function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  circuloX = [0, 0];
  posicaoVertical = random(height);
  posicaoVertical2 = random(height);
}

circle(circuloX[0], posicaoVertical, 50);
circle(circuloX[1], posicaoVertical2, 50);


function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  circuloX = [0, 0];
  circuloY = [random(height), random(height)];
  posicaoVertical = random(height);
  posicaoVertical2 = random(height);
}

function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  circuloX = [0, 0];
  circuloY = [random(height), random(height)];
}

circle(circuloX[0], circuloY[0], 50);
circle(circuloY[1], circuloY[1], 50);

function draw() {

  fill(cor);
  circle(circuloX[0], circuloY[0], 50);
  circle(circuloX[1], circuloY[1], 50);
  
  circuloX[0]+= random(0,3);
  circuloY[0]+= random(-3,3);
  circuloX[1]+= random(0,3);
  circuloY[1]+= random(-3,3);
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}

circuloX = [0, 0, 0];
circuloY = [random(height), random(height), random(height)];

circle(circuloX[0], circuloY[0], 50);
circle(circuloX[1], circuloY[1], 50);
circle(circuloX[2], circuloY[2], 50);

circuloX[0]+= random(0,3);
circuloY[0]+= random(-3,3);
  
circuloX[1]+= random(0,3);
circuloY[1]+= random(-3,3);
  
circuloX[2]+= random(0,3);
circuloY[2]+= random(-3,3);

for(let contador in circuloX) {

}

for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);
}

for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);    
    circuloX[contador]+= random(0,3);
    circuloY[contador]+= random(-3,3); 
}

function draw() {
  
  fill(cor);
  
  for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);    
    circuloX[contador]+= random(0,3);
    circuloY[contador]+= random(-3,3); 
  }
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}

if(circuloX[contador] >= width){
    
}

if(circuloX[contador] >= width){
    circuloX[contador] = 0;   
}

if(circuloX[contador] >= width){
    circuloX[contador] = 0;
    circuloY[contador] = random(height);
}


function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}

function draw() {
  
  fill(cor);
  
  for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);    
    circuloX[contador]+= random(0,3);
    circuloY[contador]+= random(-3,3); 
    
    if(circuloX[contador] >= width){
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}


  