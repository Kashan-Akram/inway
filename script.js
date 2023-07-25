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

const whatsappNumber = "919667851118";

document
  .getElementById("whatsapp_button")
  .addEventListener("click", function () {
    const defaultMessage = "Hello! I have a question!!!";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  });

const openFileButton_1 = document.getElementById("get_in_touch_1");

openFileButton_1.addEventListener("click", function () {
  window.location.href = "contact_us.html";
});

const openFileButton_2 = document.getElementById("get_in_touch_2");

openFileButton_2.addEventListener("click", function () {
  window.location.href = "contact_us.html";
});
