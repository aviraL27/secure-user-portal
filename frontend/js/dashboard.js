const welcomeEl = document.getElementById("welcome");
const logoutBtn = document.getElementById("logoutBtn");

const loadUser = async () => {
  const res = await fetch("https://secure-user-portal-backend.onrender.com/api/auth/me", {
    credentials: "include"
  });

  if (!res.ok) {
    window.location.href = "login.html";
    return;
  }

  const user = await res.json();
  welcomeEl.textContent = `Welcome, ${user.name}`;
};

logoutBtn.addEventListener("click", async () => {
  await fetch("https://secure-user-portal-backend.onrender.com/api/auth/logout", {
    method: "POST",
    credentials: "include"
  });

  window.location.href = "login.html";
});

loadUser();
