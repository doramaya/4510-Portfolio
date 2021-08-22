//admin page//
const url = "https://ict4510.herokuapp.com/api/login"

document.querySelector(".loginButton").addEventListener("click", function(event){
    event.preventDefault();
    runLogin();
});

function runLogin() {
    const loginData = {
        "username": document.querySelector("#username").value,
        "password": document.querySelector("#password").value
    };
    
    const clearUserField = document.querySelector("#username").value = "";
    const clearPassField = document.querySelector("#password").value = "";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    })

    .then(response => {
      return response.json();
  })
  
  .then(jsondata => {
    sessionStorage.setItem("jsondata", JSON.stringify(jsondata));
    const storageData = JSON.parse(sessionStorage.getItem("jsondata"));
    clearLoginForm(storageData);
  });
}

function clearLoginForm(clearedData) {
    const selectForm = document.querySelector("#login");
    selectForm.classList.add("hidden");
    const createAdminForm = document.querySelector("#adminForm")
    createAdminForm.classList.replace("hidden", "show");
    const sessionToken = clearedData.user.token
    const apiKey = clearedData.user.api_key
    document.querySelector(".submitItem").addEventListener("click", function(event){
        event.preventDefault();
        postNewMenuItem(sessionToken, apiKey);
    });
}

function postNewMenuItem(userToken, userApi) {
    const menuPartialUrl = "https://ict4510.herokuapp.com/api/menus?api_key=";
    const menuUrl = menuPartialUrl + userApi;

    const foodItemData = {
        "item": document.querySelector("#foodItem").value,
        "description": document.querySelector("#foodDescription").value,
        "price": document.querySelector("#foodPrice").value
    }

    document.querySelector("#foodItem").value = "";
    document.querySelector("#foodDescription").value = "";
    document.querySelector("#foodPrice"). value = "";

    const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": userToken
        },
        body: JSON.stringify(foodItemData)
    }

    fetch(menuUrl, postOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.error(`Error: ${error}`));

    displaySuccessMessage(foodItemData)
}

function displaySuccessMessage(foodData) {
    const successMesssage = document.querySelector(".successMessage");
    successMesssage.textContent = foodData.item + " submitted to Menu!";

document.querySelector(".logoutButton").addEventListener("click", function(event){
    event.preventDefault();
    logout();
});
}

function logout() {
    sessionStorage.removeItem("jsondata");
    const clearAdminForm = document.querySelector("#adminForm");
    clearAdminForm.classList.replace("show", "hidden");
    const revealLoginForm = document.querySelector("#login");
    revealLoginForm.classList.replace("hidden", "show");
}