const users = [
  {
    profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Passionate traveler and food lover sharing unique experiences.",
    username: "wanderlust123",
    fullName: "Aarav Sharma",
    mediaUploadedCount: 120,
    followersCount: 4500,
    followingCount: 320,
    coverPhoto: "https://images.unsplash.com/photo-1684061578510-80d12e70d1ee?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=2506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tech geek and gadget reviewer with honest opinions.",
    username: "techGuru",
    fullName: "Ishita Patel",
    mediaUploadedCount: 85,
    followersCount: 8700,
    followingCount: 250,
    coverPhoto: "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fitness enthusiast inspiring a healthy lifestyle daily.",
    username: "fitLife",
    fullName: "Rohan Mehta",
    mediaUploadedCount: 150,
    followersCount: 12000,
    followingCount: 180,
    coverPhoto: "https://images.unsplash.com/photo-1680536425297-59f8a22e4a76?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Artist showcasing creativity through vibrant artworks and sketches.",
    username: "artisticSoul",
    fullName: "Ananya Singh",
    mediaUploadedCount: 60,
    followersCount: 6000,
    followingCount: 300,
    coverPhoto: "https://images.unsplash.com/photo-1684001162075-54901abdaa25?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Photographer capturing moments that tell captivating stories.",
    username: "lensMaster",
    fullName: "Kabir Das",
    mediaUploadedCount: 200,
    followersCount: 15000,
    followingCount: 400,
    coverPhoto: "https://images.unsplash.com/photo-1680539593018-1bab59cafc8f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bookworm sharing reviews and literary adventures online.",
    username: "readersHaven",
    fullName: "Priya Kapoor",
    mediaUploadedCount: 40,
    followersCount: 3000,
    followingCount: 150,
    coverPhoto: "https://images.unsplash.com/photo-1695311510443-a616195bec72?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];



var sum =''
users.forEach(function(elem){
  sum=sum+` <div class="card">
          <div class="cover"> 
              <img id="img1" src="https://images.unsplash.com/photo-1734187333557-e359385a237a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="">
              <img src="https://images.unsplash.com/photo-1731076274484-e3882b02d523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="">
              <img src="https://plus.unsplash.com/premium_photo-1732661449056-d107ca58ca24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="">
          </div>
          <img id="profile" src="https://images.unsplash.com/photo-1733175697085-aa500b61ac74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" alt="">
       <h2>${elem.fullName}</h2>
       <h4>${elem.username}</h4>
       <p>${elem.description}</p>
       <div class="line"></div>
       <div class="social">
          <div>
              <h6>${elem.mediaUploadedCount}</h6>
              <h5>Meadia</h5>
          </div>
          <div>
              <h6>${elem.followersCount}</h6>
              <h5>Followers</h5>
          </div>
          <div>
              <h6>${elem.followersCount}</h6>
              <h5>Following</h5>
          </div>
       </div>
      </div>`
  console.log(sum);
})
var main = document.querySelector('#main')
main.innerHTML = sum
  