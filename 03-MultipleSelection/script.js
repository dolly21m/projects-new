var btns=document.querySelectorAll('button');
var body=document.querySelector('body');
btns.forEach (function(elem){
  elem.addEventListener('click',function(){
   //console.log(elem.innerHTML);
   var color=elem.innerHTML
   body.style.backgroundColor=color
  })
})