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

document.addEventListener("DOMContentLoaded", function () {
  const days = document.querySelectorAll("#working-hours tbody tr");
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  days[currentDayIndex].classList.add("current-day");
});

function validateForm1() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields.");
    return false; // Prevent form submission
  }

  // Additional validation logic if needed

  return true; // Allow form submission
}

function validateForm2() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var city = document.getElementById("city").value;
  var enquiry = document.getElementById("enquiry").value;
  if (
    name.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    city.trim() === "" ||
    enquiry.trim() === ""
  ) {
    alert("Please fill in all fields.");
    return false; // Prevent form submission
  }

  // Additional validation logic if needed

  return true; // Allow form submission
}
