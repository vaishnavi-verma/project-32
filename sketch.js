var canva;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

 

  this.input1 = createInput("Name");
  this.button1 = createButton('Play')
  this.greeting = createElement('h2');
  this.title1 = createElement('h1');
  this.title1.html("HISTORY OF INDIA QUIZ");
  this.title2 = createElement('h3')
  this.title2.html("1. Quit Indian Movement was started by")
  this.input2 = createInput("Answer");
  this.button2 = createButton('Submit')
  this.title3 = createElement('h1')
  this.title3.html("GOOD JOB")
  this.title4 = createElement('h2')
  this.title4.html("Correct Answer is")
  this.title5 = createElement('h3')
  this.title5.html("Mahatama Gandhi")
  this.button3 = createButton('GoAhead')
  this.title6 = createElement('h2')
  this.title6.html("2. The first women Prime Minister of India ")
  this.input3 = createInput("Answer");
  this.button4 = createButton('Submit')
  this.title7 = createElement('h1')
  this.title7.html("GOOD JOB")
  this.title8 = createElement('h2')
  this.title8.html("Correct Answer is")
  this.title9 = createElement('h3')
  this.title9.html("Indira Ghandhi")
  this.button5 = createButton('GoAhead')
  this.title10 = createElement('h2')
  this.title10.html("3. The first secret ruler who issued coins")
  this.input4 = createInput("Answer");
  this.button6 = createButton('Submit')
  this.title11 = createElement('h1')
  this.title11.html("GOOD JOB")
  this.title12 = createElement('h2')
  this.title12.html("Correct Answer is")
  this.title13 = createElement('h3')
  this.title13.html("Samudragupta")
  this.button7= createButton('GoAhead')
  this.title14 = createElement('h1')
  this.title14.html("THANKS FOR PLAYING")
  this.title15 = createElement('h2')
  this.title15.html("Made By Vaishnavi")
 
 
 
}


function draw(){
  this.input1.position(400, 200);
    this.button1.position(535, 220);
    this.title1.position(260,50)
    
   

  this.button1.mousePressed(()=>{
    
    this.input1.hide();
    this.button1.hide();
    this.title1.hide();
    this.title2.position(150,100)
    this.input2.position(200,180)
    this.button2.position(325,200)

   
    
    this.greeting.html(" Lets Get Started")
    this.greeting.position(100, 50); 
    
  });
this.button2.mousePressed(()=>{
  this.title2.hide()
  this.greeting.hide();
   this.input2.hide();
   this.button2.hide();
   this.title3.position(150,100)
   this.title4.position(190,200)
   this.title5.position(180,240)
   this.button3.position(400,300)
})

this.button3.mousePressed(()=>{
  this.title3.hide()
   this.button3.hide();
   this.title3.hide()
   this.title4.hide()
   this.title5.hide()
   this.title6.position(190,100)
   this.input3.position(200,180)
   this.button4.position(325,200)
   
})

this.button4.mousePressed(()=>{
  this.title6.hide()
   this.input3.hide();
   this.button4.hide();
   this.title7.position(150,100)
   this.title8.position(190,200)
   this.title9.position(180,240)
   this.button5.position(400,300)
  
})

this.button5.mousePressed(()=>{
  this.title7.hide()
   this.title8.hide();
   this.title9.hide();
   this.button5.hide();
   this.title10.position(190,100)
   this.input4.position(200,180)
   this.button6.position(325,200)
   
  
})
this.button6.mousePressed(()=>{
  this.title10.hide()
   this.button6.hide();
  this.input4.hide();
  this.title11.position(150,100)
  this.title12.position(190,200)
  this.title13.position(180,240)
  this.button7.position(400,300)
})

this.button7.mousePressed(()=>{
  this.title14.position(150,200)
  this.title11.hide();
  this.title12.hide();
  this.title13.hide();
  this.button7.hide();
  this.title15.position(300,350)
})

  
  background("pink");

  drawSprites();
  


  


}
