const images = [
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg",
    "images/img-4.jpg",
    "images/img-5.jpg",
    "images/img-6.jpg",
    "images/img-7.jpg",
    "images/img-8.jpg"
]
let imgIndex = 0;
const imgElement = document.getElementById('img-slider')
setInterval( ()=>{
   if(imgIndex>=images.length){
       imgIndex = 0;
   }
   const imgUrl = images[imgIndex]
   imgElement.setAttribute('src', imgUrl)
   imgIndex++;
}, 2000)