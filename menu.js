function addMenuItem() {
    const menuList = document.getElementById("menuList");
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <input type="text" placeholder="Menu Name" class="menuName">
      <input type="number" placeholder="Price" class="menuPrice">
    `;
    menuList.appendChild(div);
  }
  
  function exportToExcel() {
    const restaurantName = localStorage.getItem("restaurantName");
    const ownerName = localStorage.getItem("ownerName");
    const email = localStorage.getItem("email");
  
    const menuNames = document.querySelectorAll(".menuName");
    const menuPrices = document.querySelectorAll(".menuPrice");
  
    const data = [];
  
    for (let i = 0; i < menuNames.length; i++) {
      data.push({
        "Restaurant Name": restaurantName,
        "Owner Name": ownerName,
        "Email": email,
        "Menu Item": menuNames[i].value,
        "Price": menuPrices[i].value
      });
    }
  
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "RestaurantData");
    XLSX.writeFile(workbook, "restaurant_data.xlsx");
    alert("Excel file downloaded!");
  }
  