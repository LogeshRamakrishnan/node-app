const API = "http://localhost:5000";

// Register user
async function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch(API + "/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, email })
  });

  loadUsers();
}

// Fetch all users
async function loadUsers() {
  const res = await fetch(API + "/users");
  const users = await res.json();

  document.getElementById("users").innerHTML =
    users.map(u => `<p>${u.id}. ${u.name} (${u.email})</p>`).join("");
}

loadUsers();
