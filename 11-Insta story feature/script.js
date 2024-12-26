var arr = [
  {
    dp: "https://images.unsplash.com/photo-1734312621516-3d258db95e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1734426561130-9e060ae9b03c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    username: "anglepriya",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1726876906074-8c68f867b0ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Devilboy",
  },
  {
    dp: "https://images.unsplash.com/photo-1732492211739-16eea9575e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1731432248469-8e16b091c7d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
    username: "itz_Chapri",
  },
  {
    dp: "https://images.unsplash.com/photo-1734192209674-e38b0eb4ff1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1719125217488-be5eab036dd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
    username: "officialBoy",
  },
  {
    dp: "https://images.unsplash.com/photo-1734534015529-31a65c29880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1732621745411-85e13660257a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D",
    username: "its_me",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1732221560326-f6c8cb063e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
    username: "innocentBoy",
  },
];
var sum = "";
arr.forEach(function (elem, idx) {
  sum =
    sum +
    `<div class="story">
            <img id ="${idx}" src="${elem.dp}" alt="">
          </div>`;
});
var storiyan = document.querySelector(".storiyan");
var full = document.querySelector(".full");
var fullUser = document.querySelector(".full h2");
var growth = document.querySelector(".growth");
storiyan.innerHTML = sum;

storiyan.addEventListener("click", function (dets) {
  var grow = 0;
  var gold = arr[dets.target.id];

  var int = setInterval(function () {
    grow++;
    growth.style.width = grow + "%";
  }, 30);
  full.style.display = "block";
  full.style.backgroundImage = `url(${gold.story})`;
  fullUser.innerHTML = gold.username;
  setTimeout(function () {
    full.style.display = "none";
    clearInterval(int);
  }, 3000);
});
