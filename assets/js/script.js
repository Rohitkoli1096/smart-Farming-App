// ===== NAVBAR TOGGLE =====

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const body = document.body;

navOpenBtn.addEventListener("click", () => {
  navbar.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("nav-active");
});

navCloseBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("nav-active");
});

overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("nav-active");
});

// ===== LOGOUT FUNCTION =====

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userMobile");
    window.location.href = "language.html"; // or whatever your login file is
  });
}

// ===== ACCOUNT WELCOME MESSAGE =====

const currentUserEmail = localStorage.getItem("userMobile");
if (!currentUserEmail) {
  window.location.href = "language.html"; // Block access if not logged in
} else {
  const userData = JSON.parse(localStorage.getItem("user_" + currentUserEmail));
  document.getElementById("welcomeMsg").textContent = `Welcome, ${userData.name}!`;
}
