let cart = [];

function addToCart(itemName) {
  let price = 0;
  if (itemName === 'Keychain') price = 99;
  if (itemName === 'Flower') price = 149;
  if (itemName === 'Bouquet') price = 299;
  if (itemName === 'Cover') price = 199;

  cart.push({ name: itemName, price: price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cartItems");
  const total = document.getElementById("totalAmount");
  cartList.innerHTML = "";
  let sum = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    sum += item.price;
  });

  total.textContent = `Total: ₹${sum}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "Hello! I want to order:\n";
  cart.forEach(item => {
    message += `• ${item.name} - ₹${item.price}\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `Total: ₹${total}`;

  const whatsappLink = `https://wa.me/91YOURNUMBER?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, "_blank");
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
}
