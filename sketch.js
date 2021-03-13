let freqX, freqY, modx, mody, param

function setup() {
  createCanvas(1000, 1000).parent("canvas").mouseClicked(randomOne);
  noFill();
  background(0);
  frameRate(30)

  params = new URLSearchParams(window.location.search)

  if(params.get("fx") && params.get("fy") && params.get("mx") && params.get("my") && params.get("mp")) {
    freqX = params.get("fx");
    freqY = params.get("fy");
    modx = params.get("mx");
    mody = params.get("my");
    param = parseInt(params.get("mp"));
    updateLink()
  } else {
    randomOne()
  }
}

function randomOne() {
  background(0);
  freqX = random(-10, 10)
  freqY = random(-10, 10)
  modx = random(-10, 10)
  mody = random(-10, 10)
  param = random([-1, 0,  1]);
  updateLink()
}

function updateLink () {
  
  const link = `https://weightan.github.io/LissajousCurvesJS?fx=${freqX}&fy=${freqY}&mx=${modx}&mp=${param}&my=${mody}`
  
  select("#permalink").html(link).attribute("href", link)
}

function addVert(i) {
  if (param == 1){
  curveVertex(
    sin(i * freqX ) * cos(i * modx) * 0.9*width/2 ,
    sin(i * freqY + radians(frameCount*3)) * cos(i * mody) * 0.9*height/2
  )
  } else if (param == -1) {
    curveVertex(
    sin(i * freqX + radians(frameCount*3)) * cos(i * modx) * 0.9*width/2 ,
    sin(i * freqY ) * cos(i * mody) * 0.9*height/2
  )
  }else if (param == 0) {
    curveVertex(
    sin(i * freqX + radians(frameCount*3)) * cos(i * modx) * 0.9*width/2 ,
    sin(i * freqY + radians(frameCount*3)) * cos(i * mody) * 0.9*height/2
  )
  }
}

function draw() {
  //background(240);
  translate(width / 2, height / 2)
  //stroke(2*a*cos(4*dt*t) + a*cos(t) , 2*a*sin(t) - a*cos(3*dt*t) , 100, 10); 
  
  beginShape()
  let i = 0
  stroke(255, 10);
  addVert(i)
  for (i; i < TWO_PI; i += TWO_PI / 360){
    //stroke(2*200*cos(4*i) + 200*cos(i) , 2*200*sin(i) - 200*cos(3*i) , 230, 10);
    addVert(i);
  }
  addVert(i)
  endShape()
}


