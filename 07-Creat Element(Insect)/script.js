var btn = document.querySelector('button');
var body=document.querySelector('body')
    
var images=['https://www.freepnglogos.com/uploads/bug-png/bug-png-transparent-images-4.png','https://pngimg.com/d/roach_PNG12145.png','https://static.vecteezy.com/system/resources/thumbnails/038/451/350/small/ai-generated-bloodsucker-mosquito-isolated-on-transparent-background-file-png.png','https://static.vecteezy.com/system/resources/thumbnails/024/589/182/small/bee-side-view-with-ai-generated-free-png.png'];

btn.addEventListener('click', function() {
    var valueX=Math.random()*96
    var valueY=Math.random()*96  
    var rotate=Math.random()*360 

    var img=document.createElement('img')
    var randomIndex = Math.floor(Math.random() * images.length);
    img.setAttribute('src', images[randomIndex]);
    // img.setAttribute('src','https://pngimg.com/d/roach_PNG12145.png')
    // img.setAttribute('src','https://static.vecteezy.com/system/resources/thumbnails/038/451/350/small/ai-generated-bloodsucker-mosquito-isolated-on-transparent-background-file-png.png')
    img.style.height='100px'
    img.style.position='absolute'
    img.style.left=valueX +'%'
    img.style.top=valueY +'%'
    img.style.rotate=rotate +'deg'
    img.style.position='absolute'
    


    document.body.appendChild(img);
});



// btn.addEventListener('click', function() {
//     var valueX=Math.random()*96
//     var valueY=Math.random()*96  
//     var rotate=Math.random()*360 

//     var img=document.createElement('img')
//     // img.setAttribute('src', 'https://www.freepnglogos.com/uploads/bug-png/bug-png-transparent-images-4.png');
//     // img.setAttribute('src','https://pngimg.com/d/roach_PNG12145.png')
//     // img.setAttribute('src','https://static.vecteezy.com/system/resources/thumbnails/038/451/350/small/ai-generated-bloodsucker-mosquito-isolated-on-transparent-background-file-png.png')
//     img.style.height='100px'
//     img.style.position='absolute'
//     img.style.left=valueX +'%'
//     img.style.top=valueY +'%'
//     img.style.rotate=rotate +'%'
//     img.style.position='absolute'
    


//     document.body.appendChild(img);
// });