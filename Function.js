var dl=new Date("Sep 19,2023 23:59:59").getTime();
var x=setInterval(function(){
    var n=new Date().getTime();
    var t=dl-n;
    var days=Math.floor(t/(60*60*24*1000));
    var hours=Math.floor((t%(60*60*24*1000))/(1000*60*60));
    var min=Math.floor((t%(60*60*1000))/(1000*60));
    var sec=Math.floor((t%(60*1000))/(1000));
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("mins").innerHTML=min;
    document.getElementById("sec").innerHTML=sec; 
    if(t<0){
        clearInterval(x);
        // document.getElementById("over").innerHTML="Offer Expired";
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("mins").innerHTML="00";
        document.getElementById("sec").innerHTML="00";
    }},1000);


var dl1=new Date("Aug 30,2023 23:59:59").getTime();
var x1=setInterval(function(){
    var n1=new Date().getTime();
    var t1=dl1-n1;
    var days1=Math.floor(t1/(60*60*24*1000));
    var hours1=Math.floor((t1%(60*60*24*1000))/(1000*60*60));
    var min1=Math.floor((t1%(60*60*1000))/(1000*60));
    var sec1=Math.floor((t1%(60*1000))/(1000));
    document.getElementById("days1").innerHTML=days1;
    document.getElementById("hours1").innerHTML=hours1;
    document.getElementById("mins1").innerHTML=min1;
    document.getElementById("sec1").innerHTML=sec1; 
    if(t1<0){
        clearInterval(x1);
        // document.getElementById("over").innerHTML="Offer Expired";
        document.getElementById("days1").innerHTML="00";
        document.getElementById("hours1").innerHTML="00";
        document.getElementById("mins1").innerHTML="00";
        document.getElementById("sec1").innerHTML="00";
    }},1000);




    // const sl =document.querySelectorAll(".dodz")
    // var c=0;
    // // console.log(dodz)
    // sl.forEach(( dodz,index)=> {
    //     dodz.style.left=`${index*100}%`
    // })

    // const goPrev=()=>{
    //     c--;
    //     slideImage()
    // }

    // const goNext=()=>{
    //     c++;
    //     slideImage()
    // }

    // const slideImage =()=>{
    //     sl.forEach(
    //         (dodz)=>{
    //             dodz.style.transform=`translateX(-${c*100}%)`
    //         }
    //     )
    // }
// Card Slider Start
    // const productContainers=document.getElementById("product-container1");
    // const nxtBtn=document.getElementById("nxt-btn1");
    // const preBtn=document.getElementById("pre-btn1");
    // productContainers.forEach((item,i)=>{
    //     let containerDimensions=item.getBoundingClientRect();
    //     let containerWidth=containerDimensions.width;

    //     nxtBtn[i].addEventListener('click',()=>{
    //         item.scrollLeft +=containerWidth;
    //     })
    //     preBtn[i].addEventListener('click',()=>{
    //         item.scrollLeft -=containerWidth;
    //     })
    // })

//End of Slider

// Add to Cart




// const product1=[
//     {
//     id:0,
//     image:'https://m.media-amazon.com/images/I/714vBJ3XwtL._UY575_.jpg',
//     title:'Casual Shoe',
//     price:1999,
//     },
//     {
//         id:1,
//         image:'https://m.media-amazon.com/images/I/41qfg4Hs3TL._SX300_SY300_QL70_FMwebp_.jpg',
//         title:'Redmi Note 12 Pro',
//         price:23999,
//         }
// ];
// const categories = [...new Set(product1.map((item)=>
//     {return item}))]
//     let i=0;
//     document.getElementById('root11').innerHTML=categories.map((item)=>
//     {
//         var{image,title,price}=item;
//         return{
//             `<div class='box1'>
//                 <div class='img-box'>
//                     <img class='images1' src=${image}></img>
//                 </diV>
//             <div class='bottom1'>
//             <p>${title}</p>
//             <h2>${price}.00</h2>`+
//             "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
//             `</div>
//             </div>`
//         }
//     }).join('')

       