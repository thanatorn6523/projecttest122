// 🛍️ สินค้า
const products = [
    {id:1, name:"iPhone 15", price:35000, category:"electronics", img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569"},
    {id:2, name:"AirPods Pro", price:8900, category:"electronics", img:"https://dl.lnwfile.com/l7owwo.webp"},
    {id:3, name:"iPad Air", price:21000, category:"electronics", img:"https://www.jib.co.th/img_master/product/original/2026032008313684151_1.jpg"},
    {id:4, name:"Gaming Mouse", price:590, category:"electronics", img:"https://media-cdn.bnn.in.th/254163/Logitech-Gaming-Mouse-G-PRO-X-SUPERLIGHT-Red-6-square_medium.jpg"},
    {id:5, name:"เสื้อยืด Oversize", price:199, category:"fashion", img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
    {id:6, name:"กางเกงยีนส์", price:599, category:"fashion", img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246"},
    {id:7, name:"รองเท้าผ้าใบ", price:1290, category:"fashion", img:"https://inwfile.com/s-p/ntihf4.jpg"},
    {id:8, name:"หมวกแฟชั่น", price:150, category:"fashion", img:"https://images.unsplash.com/photo-1521369909029-2afed882baee"},
    {id:9, name:"เบอร์เกอร์ชีส", price:89, category:"food", img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
    {id:10, name:"พิซซ่า", price:199, category:"food", img:"https://www.hunts.com/sites/g/files/qyyrlu211/files/uploadedImages/img_6934_48664.jpg"},
    {id:11, name:"ชาไข่มุก", price:60, category:"food", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaKKbTpD87YVVXTY1rY9qkrrB9ojLkdqtcg&s"},
    {id:12, name:"เฟรนช์ฟรายส์", price:79, category:"food", img:"https://images.unsplash.com/photo-1576107232684-1279f390859f"}
];

// 🛒 ตะกร้า
let cart = [];

// 🔄 แสดงสินค้า
function showProducts(list){
    const el = document.getElementById("productList");
    el.innerHTML = "";

    list.forEach(p => {
        el.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>${p.price} บาท</p>
            <button onclick="addToCart(${p.id})">เพิ่ม</button>
        </div>`;
    });
}

// 🔍 กรองหมวด
function filter(category){
    if(category === "all"){
        showProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        showProducts(filtered);
    }
}

// ➕ เพิ่มสินค้า
function addToCart(id){
    const item = products.find(p => p.id === id);
    cart.push(item);
    showCart();
}

// 🧾 แสดงตะกร้า
function renderCart(){
    const list = document.getElementById("cartList");
    const totalEl = document.getElementById("total");
    const cartBtn = document.getElementById("cartBtn");

    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        list.innerHTML += `
        <li>
            ${item.name} - ${item.price} 
            <button onclick="removeItem(${index})">❌</button>
        </li>`;
        total += Number(item.price);
        
    });

    totalEl.innerText = total;

    // 🛒 อัปเดตจำนวน
    cartBtn.innerText = `🛒 (${cart.length})`;
}

// ❌ ลบสินค้า
function removeFromCart(index){
    cart.splice(index, 1);
    showCart();
}

// 🔁 เปิด/ปิดตะกร้า
function toggleCart(){
    const cartBox = document.getElementById("cart");
    cartBox.classList.toggle("hide");
}


function showCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <li>
                ${item.name} - ${item.price} บาท
                <button onclick="removeFromCart(${index})">❌</button>
            </li>
        `;
    });

    // อัปเดตราคารวม
    totalPriceEl.innerText = total;
}

// 🚀 เริ่มต้นเว็บ
showProducts(products);

document.addEventListener("DOMContentLoaded", function(){

    showProducts(products);

    document.getElementById("cartBtn").addEventListener("click", toggleCart);
    document.getElementById("closeCart").addEventListener("click", toggleCart);

});
