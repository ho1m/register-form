const passwords = document.querySelectorAll("input[type=password]");
const form = document.getElementById("register");
const submitBtn = document.getElementById("register-btn");

function checkPassword(){
    if(passwords[0].value) {
        return passwords[0].value === passwords[1].value;
    }
}

function borderColoring(arr, color){
    arr.forEach(el => {
        el.style.border = "2px solid " + color;
    })
}

function displayAlert(e){
    e.preventDefault();
    if(checkPassword()) {
        borderColoring(passwords, "green")
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "#FCA311";
    } else {
        borderColoring(passwords, "red")
        submitBtn.style.backgroundColor = "grey";
    }
}

passwords.forEach(password => {
    password.addEventListener("keyup", displayAlert)
})