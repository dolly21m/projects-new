var btn = document.querySelector('.btn')
var h1 = document. querySelector('.percentage')
var growth = document.querySelector('.growth')

var grow = 0
btn.addEventListener('click',function(){
     
    var growInterval =setInterval(function(){
        grow++
        h1.innerHTML= grow + '%'
        growth.style.width = `${grow}%`
    },80)
    
    setTimeout(function(){
        clearInterval(growInterval)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity= 0.2
        btn.style.pointerEvents = 'none'
    },8000)
})