const users = [
    {
      profilePic: 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODd8fHxlbnwwfHx8fHw%3D',
      timeAgo: 'Just seen',
      fullName: 'Papaji❤️'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1702884163621-ded464345868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDF8fHxlbnwwfHx8fHw%3D',
      timeAgo: '3 hours ago',
      fullName: 'Mummy❤️'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDJ8fHxlbnwwfHx8fHw%3D',
      timeAgo: '1 day ago',
      fullName: 'Tai❤️'
    },
    {
      profilePic: 'https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D',
      timeAgo: '12min ago',
      fullName: 'Bhaiya❤️'
    },
    {
      profilePic: 'https://plus.unsplash.com/premium_photo-1664879065964-20abef455f4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk3fHx8ZW58MHx8fHx8',
      timeAgo: '48 minutes ago',
      fullName: 'Home2'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1641214880602-3c9cd45eadf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
      timeAgo: '30 minutes ago',
      fullName: 'Asmita💕'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1645231886878-06478c04f9fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      timeAgo: '5 hours ago',
      fullName: 'Munmun😍'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1560857617-84149b7abe53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8',
      timeAgo: '9hr ago',
      fullName: 'Anjali💕'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww',
      timeAgo: '2min ago',
      fullName: 'Srathak Bhaiya😊'
    },
    {
      profilePic: 'https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww',
      timeAgo: '5min ago',
      fullName: 'Harsh Bhaiya😊'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1734366965576-46c11158fc3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODh8fHxlbnwwfHx8fHw%3D',
      timeAgo: '15 minutes ago',
      fullName: 'Dolly(me..🤣)'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1617922236117-2697cb394593?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
      timeAgo: '7 hours ago',
      fullName: 'Prachi✌️'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1618375279997-351e32d80a02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      timeAgo: '1min ago',
      fullName: 'Nagpur mousi🤗'
    },
    {
      profilePic: 'https://plus.unsplash.com/premium_photo-1675578732514-a528889875e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      timeAgo: '17hr ago',
      fullName: 'Sarni mousi💖'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1557446772-0985ac892643?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      timeAgo: '45 minutes ago',
      fullName: 'Thakre Jiju🤗'
    }
];

let sum = ''
users.forEach(function(elem) {
    sum = sum+  `
    <div class="user" >
        <div class="profile">
            <img src="${elem.profilePic}" alt="${elem.fullName}">
        </div>
        <div class="info">
            <h1>${elem.fullName}</h1>
            <h2>${elem.timeAgo}</h2>
        </div>
    </div>`;
});

var AllStatus=document.querySelector('.AllStatus');
AllStatus.innerHTML=sum
