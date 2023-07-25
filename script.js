const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Replace 'your_predefined_number' with the actual WhatsApp Business number, including the country code.
const whatsappNumber = "919667851118";

document
  .getElementById("whatsapp_button")
  .addEventListener("click", function () {
    // Replace 'your_predefined_message' with the default message you want to send.
    const defaultMessage = "Hello! I have a question!!!";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  });
