let menuHamburguer = window.document.getElementById("hamburguer");

let form = window.document.querySelector("#formulario");
let nameForm = window.document.querySelector("#txtname");
let emailForm = window.document.querySelector("#txtemail");
let telForm = window.document.querySelector("#txttel");

//Incluino o menu pr s tes e mobile
menuHamburguer.addEventListener("click", () => {
    let menuNav = window.document.querySelector(".menu-main");

    menuHamburguer.classList.toggle("show");
    menuNav.classList.toggle("show");
});

//Validando o formulario

form.addEventListener("input", function(c){
    switch(c.target.id) {
        case 'txtname':
            checkName();
            break;
        case 'txtemail':
            checkEmail();
            break;
        case 'txttel':
            checkTel();
            break;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let resultCheckName = checkName();
    let resultCheckEmail = checkEmail();
    let resultCheckTel = checkTel();

    const isValid = resultCheckName && resultCheckEmail && resultCheckTel;
    
    if (isValid) {
        let xhttp = new XMLHttpRequest();
        xhttp.open('POST', 'config.php', true);
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200) {
                let res = xhttp.response;
                console.log(res);
            }
        }
        let formData = new FormData(form);
        xhttp.send(formData);
    }
});


const checkName = () => {
    let valid = false;
    let userName = nameForm.value.trim();

    if (userName === "") {
        formError(nameForm, "Por favor, escreva seu nome antes e enviar");
    } else if (userName.length < 3) {
        formError(nameForm, "Nome digitado invalido");
    } else {
        formSucesso(nameForm);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    let rg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let userEmail = emailForm.value.trim();
    

    if(userEmail === "") {
        formError(emailForm, "Por favor, escreva seu e-mail antes de enviar");
    } else if(!rg.test(userEmail)) {
        formError(emailForm, "E-mail digitado invalido");
    } else {
        formSucesso(emailForm);
        valid = true;
    }
    return valid;
};

const checkTel = () => {
    let valid = false;
    let userTel = telForm.value.trim();

    if (userTel === "") {
        formError(telForm, "Por favor, escreve um telefone para contato antes e enviar");
    } else if (userTel.length !== 11){
        formError(telForm, "Telefone invalido");
    } else if (!userTel.match(/^[0-9]{11}$/)){
        formError(telForm, "Coloque apenas números");
    } else {
        formSucesso(telForm);
        valid = true;
    }
    return valid;
};


const formError = (input, mensage) => {
    let file = input.parentElement;
    let msg = file.querySelector(".error");

    file.classList.add("error");
    file.classList.remove("sucesso");

    msg.innerText = mensage;
};

const formSucesso = (input) => {
    let file = input.parentElement;
    let msg = file.querySelector(".error");

    file.classList.remove("error");
    file.classList.add("sucesso");
    
    msg.innerText = "";
};