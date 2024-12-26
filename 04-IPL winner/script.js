var box = document.querySelector('.container');
var btn = document.querySelector('.button');
var resultText = document.querySelector('.result');
const teams = ['CSK', 'KKR', 'RCB', 'PBKS','MI'];
const imageArray = [
    'https://cricxtasy.com/wp-content/uploads/2024/10/5705f26a1c533f22eeb1bbfb38585f09-scaled.webp',   
    'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/381500/381554.jpg',  
    'https://wallpapercave.com/wp/wp2506526.jpg',  
    'https://www.zapcricket.com/cdn/shop/articles/WhatsApp_Image_2024-02-01_at_02.39.18.webp?v=1706736247',  
    'https://wallpapers.com/images/hd/mumbai-indians-team-celebration-photograph-0d49kq5o57i5mdm5.jpg'
];
let prevIndex = 0;
btn.addEventListener("click",() => {
 let randomIndex = Math.floor(Math.random() * imageArray.length);

 if(randomIndex == prevIndex){
    return btn.click();
 }

 console.log(randomIndex);
 
  const randomImage = imageArray[randomIndex];
  const randomTeam = teams[randomIndex];
  
 box.style.backgroundImage = `url('${randomImage}')`;
 box.style.backgroundSize = 'cover';
 box.style.backgroundPosition = 'center';
 resultText.innerHTML = `<span>${randomTeam}</span>`;
 prevIndex = randomIndex
});