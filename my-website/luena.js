// console.log('test')
const newImages = [
    'images/image2.png', 
    'images/image.png', 
    'images/image5.png'
]

// const images = document.querySelectorAll(".image");
// const button = document.getElementById('change-images');
// console.log(images)
// console.log(button)
button.addEventListener('click', () => {
    // console.log('a click happend')
    images.forEach((image, index)=>{
        if(image.classList.contains('fade')){
            image.classList.add('fade-out')
        }else if (image.classList.contains('blackout')){
            image.classList.add('blackout-out')
        } else if (image.classList.contains('slide-right')){
            image.classList.add('slide-right-out')
        }
        setTimeout(()=>{
            image.src = newImages[index]

            image.classList.remove('fade-out', 'blackout-out', 'slide-right-out')
        }, 1000)
    })
})