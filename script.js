const sqcont = document.querySelector('#squares');
const nossq = 16;
let i = 0;
let sq1, sq2;
let clkcnt = 0;
let score = 0;
const plbtn = document.querySelector('button');
document.querySelector('#scr').style.visibility = 'hidden';
plbtn.style.visibility='hidden';
plbtn.addEventListener('click',plag);
let colours =[
  "#1ecbe1",
  "#e1341e",
  "#d61ee1",
  "#29e11e",
  "#e7e318",
  "#181ce7",
  "#ffffff",
  "#000000",
  "#1ecbe1",
  "#e1341e",
  "#d61ee1",
  "#29e11e",
  "#e7e318",
  "#181ce7",
  "#ffffff",
  "#000000"  
];

function selcol(){
  const ran = Math.floor(Math.random()*colours.length);
  const sel = colours[ran];
  colours.splice(ran,1);
  return sel;
}

function sqclk(){
  if(sq1==this) return;
  clkcnt++;
  if(clkcnt > 2) return;
  clkcnt === 1 ? (sq1=this) : (sq2 = this);
  console.log(sq1,sq2)
  if(clkcnt === 1){
    sq1.style.background = sq1.getAttribute("dt-cl");}
  else{
    sq2.style.background= sq2.getAttribute("dt-cl"); 
    chkmtch();
  }
}


while(i < nossq){
  const square = document.createElement("li");
  const colour = selcol();
  //square.style.background = colour;
  square.setAttribute("dt-cl",colour)
  sqcont.appendChild(square);

  i++;  
}
function plag(){
  window.location.reload();  
}

function chkmend(){
  const tgt = nossq / 2;
  const gmov = score === tgt ? true : false;
  if (gmov){
   plbtn.style.visibility='visible' 
    
  }
}


function mtch(){
  score++;
  sq1.style.border="none";
  sq2.style.border="none";
  sq1.removeEventListener("click",sqclk)
  sq2.removeEventListener("click",sqclk)
  clkcnt = 0;
  console.log('a')
  document.querySelector("#scr").innerText=score
  document.querySelector('#scr').style.visibility='visible';
  
}
function nmtch(){
  sq1.style.background="";
  sq2.style.background="";
  sq1="";
  sq2="";
  clkcnt = 0;
  console.log('b')
}


function chkmtch(){
  let mt = sq1.getAttribute('dt-cl') === sq2.getAttribute('dt-cl');
  if(!mt){
    setTimeout(function() {
      nmtch();
    },500)
  }
  else{
    mtch();
    chkmend();
  } 
}


const sqs = document.querySelectorAll('li');
for(const sq of sqs){
  sq.addEventListener("click", sqclk);}