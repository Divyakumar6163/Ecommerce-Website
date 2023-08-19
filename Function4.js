const cart = [];
let totalAmount = 0;

function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    totalAmount += price;

    updateCartUI();
}

function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    totalAmount -= removedItem.price;

    updateCartUI();
}

function updateCartUI() {
    const cartElement = document.getElementById("cart");
    const totalElement = document.getElementById("total");

    cartElement.innerHTML = "";

    cart.forEach((item, index) => {
            var t=item;
            console.log(t.productName);
        const li = document.createElement("li");
        const img = document.createElement("img");
        if (t.productName == "Casual Shoe"){
        //     console.log(productName);
            img.src = `https://m.media-amazon.com/images/I/714vBJ3XwtL._UY575_.jpg`;
        }
        else if(t.productName=="iQOO Z7s"){
            img.src = `https://m.media-amazon.com/images/I/41qfg4Hs3TL._SX300_SY300_QL70_FMwebp_.jpg`;
        }
        else if(t.productName=="Maeve Ladies Sandal"){
            img.src = `https://m.media-amazon.com/images/I/41-VjjvpCgL.jpg`;
        }
        else if(t.productName=="Boult Audio Maverick"){
            img.src = `https://m.media-amazon.com/images/I/61dDIKxp6sL._SX679_.jpg`;
        }
        else if(t.productName=="BATA Womens Sandal"){
            img.src = `https://m.media-amazon.com/images/I/41nJJibT5yL._UY695_.jpg`;
        }
        else if(t.productName=="Cello Dinner Set"){
            img.src = `https://m.media-amazon.com/images/I/51PcHKIViOL._SX300_SY300_QL70_FMwebp_.jpg`;
        }
        else if(t.productName=="HP v236w PenDrive"){
            img.src = `https://m.media-amazon.com/images/I/31febYa30qL._SX300_SY300_QL70_FMwebp_.jpg`;
        }
        else if(t.productName=="Vincent Chase Sunglasses"){
            img.src = `https://m.media-amazon.com/images/I/61lZ7g4r3BL._UX679_.jpg`;
        }
        else if(t.productName=="Apple AirPods"){
            img.src = `https://m.media-amazon.com/images/I/7120GgUKj3L._SL1500_.jpg`;
        }
        else if(t.productName=="HP Laptop 15s"){
            img.src = `https://m.media-amazon.com/images/I/61aaFLxqFKL._SX679_.jpg`;
        }
        else if(t.productName=="Apple iPhone 14 Pro Max"){
            img.src = `https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg`;
        }
        else if(t.productName=="SHAMPOO,CONDITIONER & FACEWASH KIT"){
            img.src = `https://www.tresemme.in/cdn/shop/products/Keratin-smooth-1L-_-keratin-smooth--335-ml-conditioner-_-keratin-smooth-serum-60ml-_-keratin-smooth-mask-300ml_1a7d16b5-dc42-4493-b688-ef6668fef42e_640x.jpg?v=1660276463`;
        }
        else if(t.productName=="Boldfit Stainless Steel Water Bottle"){
            img.src = `https://m.media-amazon.com/images/I/410yXpanMoL._SX300_SY300_QL70_FMwebp_.jpg`;
        }
        img.alt = item.productName;
            li.appendChild(img);

        const textSpan = document.createElement("div");
        textSpan.textContent = `${item.productName} - $${item.price}`;
        li.appendChild(textSpan);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);

        cartElement.appendChild(li);
    });

    totalElement.textContent = totalAmount;
}