const form = document.getElementById("loginForm");
const errorEl = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorEl.textContent = "";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://127.0.0.1:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // VERY IMPORTANT
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      errorEl.textContent = data.message || "Login failed";
      return;
    }

    window.location.href = "dashboard.html";

  } catch (err) {
    errorEl.textContent = "Server error";
  }
});
