const btn = document.querySelector(".scroll");
const nav = document.querySelector("nav");
const navigation = document.querySelector("nav").offsetHeight;

// form validation
const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
const emailError = document.querySelector(".emailError");

// scroll to top navigation
window.onscroll = () => {
  scrollFunction();
};

let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
    nav.classList.add("bb");
  } else {
    btn.style.display = "none";
    nav.classList.remove("bb");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function handleValidation(e) {
  if (email.value === "") {
    email.classList.add("error");
    emailError.innerHTML = "Looks like you forgot your email";
  } else if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    emailError.innerHTML = "Looks like this isn't a valid email";
  } else {
    email.classList.remove("error");
    emailError.innerHTML = "";
  }

  email.addEventListener("focus", () => {
    email.classList.remove("error");
    emailError.innerHTML = "";
  });

  e.preventDefault();
  return true;
}

submit.addEventListener("click", (e) => {
  handleValidation(e);
});

// scroll to behavour
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigation + 3 + "px"
);
