const form = document.getElementById("registerForm");
const errorEl = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorEl.textContent = "";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://127.0.0.1:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      errorEl.textContent = data.message || "Registration failed";
      return;
    }

    window.location.href = "login.html";
  } catch {
    errorEl.textContent = "Server error";
  }
});
