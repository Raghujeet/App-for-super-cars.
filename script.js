var produts = [
    {name:  "BMW  740i     ",  headline: "Super car", image: "https://images.pexels.com/photos/8556278/pexels-photo-8556278.jpeg?auto=compress&cs=tinysrgb&w=600", price: "1,50,0000" },
    {name:  "Mustang car   ",  headline: "Super car", image: "https://images.pexels.com/photos/16584994/pexels-photo-16584994/free-photo-of-front-of-a-lamborghini-huracan.jpeg?auto=compress&cs=tinysrgb&w=600", price: "2,30,0000" },
    {name:  "Lemborgini car",  headline: "Super car", image: "https://images.pexels.com/photos/10550012/pexels-photo-10550012.jpeg?auto=compress&cs=tinysrgb&w=600", price: "6,10,0000" },
    {name:  "Farrari car"   ,  headline: "Super car", image: "https://images.pexels.com/photos/9334965/pexels-photo-9334965.jpeg?auto=compress&cs=tinysrgb&w=600", price: "7,26,0000" },
    {name:  "Farrari car"   ,  headline: "Super car", image: "https://pics.craiyon.com/2023-10-21/b0ff52a703184a758fa94a6e0cb0174f.webp", price: "7,26,0000" },

]

function addProducts(){
    var clutter = "";
        produts.forEach(function(produts , index){
            clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                <img class="object-cover w-full h-full" src="${produts.image}" />
            </div>
            <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">${produts.name}</h1>
                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">${produts.headline}</h3>
                        <h4 class="font-semibold mt-2">$${produts.price}</h4>
                    </div>
                    <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index="${index}" class="add ri-add-line"></i></button>
                </div>
            </div>
        </div>`
        })

        document.querySelector(".products").innerHTML = clutter;
}

var popular = [
    {name: "Super car" ,  headline: "Lemborgini Urus", image: "https://pics.craiyon.com/2023-10-06/8f1247a1b3ad43978a284baea7d7c016.webp", price: "1,50,0000" },
    {name: "Super car" ,  headline: "Mustang car", image: "https://images.pexels.com/photos/8556278/pexels-photo-8556278.jpeg?auto=compress&cs=tinysrgb&w=600", price: "2,30,0000" },
    {name: "Super car" ,  headline: "Lemborgini car", image: "https://pics.craiyon.com/2023-09-09/163df7120b7a43518f8423e24bc1bbaa.webp", price: "6,10,0000" },
    {name: "Super car" ,  headline: "Farrari car", image: "https://pics.craiyon.com/2023-10-21/b0ff52a703184a758fa94a6e0cb0174f.webp", price: "7,26,0000" },
    {name: "Super car" ,  headline: "Farrari car", image: "https://pics.craiyon.com/2023-10-21/b0ff52a703184a758fa94a6e0cb0174f.webp", price: "7,26,0000" },

]

function addPopular(){
    var clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
        </div>
    </div>`
    })

    document.querySelector(".populars").innerHTML = clutter;
}

var cart = [];

function addToCart(){
    document.querySelector(".products")
    .addEventListener("click" ,function(dets){
        if(dets.target.classList.contains("add")){
            var pushProducts = produts[dets.target.dataset.index];
            cart.push(pushProducts);
        }
    })
}

let expnd = document.querySelector(".cartexpnd");
let toggle = true;
function showTheCard(){
    var clutter = "";
    document.querySelector(".carticon")
    .addEventListener("click", function(){
        expnd.style.display = "block";

        cart.forEach(function(prod){
            clutter += `<div class="flex gap-2 mb-4 cursor-pointer bg-white rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-32 h-100 object-cover" src="${prod.image}" />
            </div>
            <div>
                 <h3 class="font-semibold">${prod.name}</h3>
                <h3 class=" text-sm font-semibold opacity-80">${prod.price}</h3>
            </div>
            </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}

expnd.removeEventListener("click", function(){
    toggle = false;
});

showTheCard()
addToCart()
addProducts();
addPopular()