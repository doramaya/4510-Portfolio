//menu page//

// On line 14, I started my index at 3 because I submitted three test inputs
//that I did not want featured on my final site

const menuUrl = "https://ict4510.herokuapp.com/api/menus?api_key=58574dfbc9c819d007e6b72fa8443ed2"

fetch(menuUrl)
.then(response => response.json())
.then(response => displayMenuItems(response))
.catch(error => console.error(error));

function displayMenuItems(menuData) {
  const data = menuData.menu;
  for (let index = 0; index < data.length; index++) {
    console.log(data[index].item);
    const createNewMenu = document.querySelector(".newItems");
    const createItemTitle = document.createElement("h2");
    createItemTitle.textContent = `${data[index].item}`;
    createNewMenu.append(createItemTitle);

    console.log(data[index].description);
    const createItemDescription = document.createElement("p");
    createItemDescription.classList.add("pleft");
    createItemDescription.textContent = `${data[index].description}`;
    createNewMenu.append(createItemDescription);

    console.log(data[index].price);
    const createItemPrice = document.createElement("p");
    createItemPrice.classList.add("pleft");
    createItemPrice.textContent = `${data[index].price}`;
    createNewMenu.append(createItemPrice);
  }
}// JavaScript Document