var box = document.querySelector('.box');
var btn = document.querySelector('.button');
const imageArray = [
    'https://images.unsplash.com/photo-1732823170284-0d3da1fce106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',   
    'https://images.unsplash.com/photo-1732823095399-6edc1c4919e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',  
    'https://images.unsplash.com/photo-1732878946664-9209edbf6b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',  
    'https://images.unsplash.com/photo-1731354233513-60e9edaddc5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',  
    'https://images.unsplash.com/photo-1732601471603-404af59bc450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D'
];
btn.addEventListener("click",() => {
   const randomIndex = Math.floor(Math.random() * imageArray.length);
 const randomImage = imageArray[randomIndex];

 box.style.backgroundImage = `url('${randomImage}')`;
 box.style.backgroundSize = 'cover';
 box.style.backgroundPosition = 'center';
});

  