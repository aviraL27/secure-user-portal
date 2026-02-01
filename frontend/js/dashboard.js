const welcomeEl = document.getElementById("welcome");
const logoutBtn = document.getElementById("logoutBtn");

const loadUser = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/auth/me", {
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
  await fetch("http://127.0.0.1:5000/api/auth/logout", {
    method: "POST",
    credentials: "include"
  });

  window.location.href = "login.html";
});

loadUser();
