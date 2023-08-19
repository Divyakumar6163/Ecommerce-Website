// Card Slider Start
const productContainers = [...document.querySelectorAll('.product-container')];
// const nxtBtn=[...document.querySelectorAll('.nxt-btn')];
// const preBtn=[...document.querySelectorAll('.pre-btn')];
// const productContainers = document.getElementById("product-container1");
// const nxtBtn = document.getElementById("nxt-btn1");

// nxtBtn.addEventListener('click', () => {
//     console.log('5');

// })
const preBtn = document.getElementById("pre-btn1");

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    function nextbutton (){
        console.log('123450');
        item.scrollLeft += containerWidth;
    
    }
    
    // nxtBtn.addEventListener('click', () => {
    //     console.log('5');

    // })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//End of Slider