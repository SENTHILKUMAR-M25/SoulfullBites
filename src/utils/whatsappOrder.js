export const sendWhatsAppOrder = (cart, customer, deliveryCharge) => {

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "Hello Soulfull Bites,%0A%0A";
  message += "I would like to place an order:%0A%0A";

  let total = 0;

  cart.forEach((item, index) => {

    message += `${index + 1}. ${item.name} (${item.option}) - ₹${item.price}%0A`;

    total += item.price;

  });

  if (customer.method === "delivery") {
    total += deliveryCharge;
  }

  message += `%0ATotal Amount: ₹${total}%0A%0A`;

  message += `Customer Name: ${customer.name}%0A`;
  message += `Address: ${customer.address}%0A`;
  message += `Delivery Date: ${customer.deliveryDate}%0A`;

  if (customer.method === "pickup") {
    message += `Pickup Time: ${customer.pickupTime}%0A`;
  }

  if (customer.method === "delivery") {
    message += `Delivery Charge: ₹${deliveryCharge}%0A`;
  }

  message += `Referred By: ${customer.referredBy}%0A`;

  const phone = "919790586747";

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
};