const mechanicsBtn = document.getElementById("mechanics-btn");
const mechanicsBox = document.getElementById("mechanics-box");

mechanicsBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (mechanicsBox.style.display === "none") {
    mechanicsBox.style.display = "block";
    mechanicsBox.innerHTML = `
      <p>🎮 <strong>Game Mechanics</strong></p>
      <p> Nine numbered circles (1-9) will be displayed in a random order for a short time before disappearing.
        The player must recall their position and click the circles in the correct numerical sequence.
        Points are on accuracy. </p>
    `;
  } else {
    mechanicsBox.style.display = "none";
  }
});

const lastUser = localStorage.getItem("lastUser");
if (lastUser) {
  alert("Welcome back, " + lastUser + "!");
}

const userBtn = document.getElementById("enter-user-btn");
userBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = prompt("Please enter your username:");
  if (!username) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.includes(username)) {
    alert("Welcome back, " + username + "!");
  } else {
    users.push(username);
    localStorage.setItem("users", alert("Welcome, " + username + "!");
  }

  localStorage.setItem("lastUser", username);
});
