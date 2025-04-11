let cart = [];
let total = 0;
function addToCart(name, price){
    cart.push({name, price});
    total += price;
    updateCart();
}
function updateCart(){
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");

    cartList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} Euro`;
        cartList.appendChild(li);
    });
    cartTotal.textContent = total;
}