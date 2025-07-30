
const approvedUsers = {
  "Cole243": null,
  "Test123": null
};

function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  if (!approvedUsers.hasOwnProperty(username)) {
    message.innerText = "Access Denied: Invalid username.";
    return;
  }

  if (!localStorage.getItem(username)) {
    localStorage.setItem(username, btoa(password));
    message.innerText = "Password created! Please log in again.";
    return;
  }

  const storedPassword = localStorage.getItem(username);
  if (btoa(password) === storedPassword) {
    window.location.href = "roster.html";
  } else {
    message.innerText = "Incorrect password.";
  }
}
