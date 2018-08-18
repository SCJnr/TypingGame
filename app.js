window.addEventListener('load',init);
let time=30;
let marks=0;
let isplaying=true;
var arr=['wierd','accomodate','handkerchief','indite','cemetary','conscence','rythm','playwrite','embaress','millenium','pharoh','liason','convalece','supercede','ecstacy','carribean','harrass','maintainence','pronounciation','artic','occured','reccommend','deductable','published','categories','visual'];
var word=document.querySelector("#header");
var wordinput = document.querySelector("#inp");
var timing=document.querySelector('#timing');
const message=document.querySelector('#message');
const score=document.querySelector('#score');
function init()
{
  showword(arr);  
  addEventListener("input",startmatch);
  setInterval(countdown,1000);
  setInterval(checkstatus,50);
}
function showword(arr)
{
 const i = Math.floor(Math.random()*arr.length);
 word.innerHTML=arr[i];
}
function startmatch()
{
  if(matchword())
  {
   isplaying=true;
   showword(arr);
   wordinput.value='';
   marks++;
  } 
  score.innerHTML=marks;
  
}
function matchword()
{ 
  if(wordinput.value==word.innerHTML)
  {
    message.innerHTML='Correct!!';
    return true;
  } 
  else{
      message.innerHTML='';
      isplaying=false;
  }
}
function countdown()
{
  if(time > 0)
  {
    time--;   
  }  
  else if(time === 0)
  {
   isplaying = false;   
  }
  timing.innerHTML=time;
}
function checkstatus()
{
  if(!isplaying && time == 0)
  {
    message.innerHTML='Game Over!!';
    wordinput.value="";
  }  
} 
