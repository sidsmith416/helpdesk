const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

    setTimeout(()=> {
        eField.classList.remove("shake");
        pField.classList.remove("shake")
    }, 500)

    eInput.onkeyup = () => {checkEmail();}
    pInput.onkeyup = () => {checkPass();}

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            //let errorTxt = eField.querySelector(".error-txt");
            //(eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid")
        }
    }

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid")
            
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid")
        }
    }

    if(!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "../dashboard/dashboard.html";
    }
}

/*const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ssmith@sku2u.com" && password === "Speak440") {
        location.href = "../dashboard/dashboard.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }

})*/