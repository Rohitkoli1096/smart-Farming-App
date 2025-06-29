// ===== NAVBAR TOGGLE =====

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const body = document.body;

if (navOpenBtn && navCloseBtn && navbar && overlay) {
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
}

// ===== LOGOUT FUNCTION =====

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    // Remove user data from localStorage on logout
    localStorage.removeItem("userMobile");
    localStorage.removeItem("userName");
    localStorage.removeItem("userProfile");
    // Redirect to login or language selection page
    window.location.href = "language.html";
  });
}

// ===== LOAD USER DATA AND DISPLAY WELCOME MESSAGE =====

const currentUserMobile = localStorage.getItem("userMobile");

if (!currentUserMobile) {
  // If user is not logged in, redirect to language.html
  window.location.href = "language.html";
} else {
  // Get stored user profile data
  const userProfileString = localStorage.getItem("userProfile");
  const addressDataString = localStorage.getItem("userAddress");

  let userProfile = null;
  let addressData = null;

  try {
    userProfile = userProfileString ? JSON.parse(userProfileString) : null;
    addressData = addressDataString ? JSON.parse(addressDataString) : null;
  } catch (e) {
    console.error("Error parsing user data from localStorage", e);
  }

  if (userProfile && document.getElementById("welcomeMsg")) {
    document.getElementById("welcomeMsg").textContent = `Welcome, ${userProfile.name}`;
  }

  if (addressData && document.getElementById("address")) {
    // Construct address string safely
    const parts = [
      addressData.village,
      addressData.tehsil,
      addressData.district,
      addressData.state,
    ].filter(Boolean); // remove empty or undefined parts

    document.getElementById("address").textContent = parts.join(", ");
  }
}
