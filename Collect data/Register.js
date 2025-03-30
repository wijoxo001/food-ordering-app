function saveAndGo() {
  const name = document.getElementById("restaurantName").value;
  const owner = document.getElementById("ownerName").value;
  const email = document.getElementById("email").value;

  if (!name || !owner || !email) {
    alert("Please fill in all fields!");
    return;
  }

  // Save data to localStorage
  localStorage.setItem("restaurantName", name);
  localStorage.setItem("ownerName", owner);
  localStorage.setItem("email", email);

  // Redirect to next page
  window.location.href = "menu.html";
}
