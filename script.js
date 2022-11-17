<<<<<<< HEAD
let firstName = document.querySelector('#first_name');
let resName = document.querySelector('#resName');
let validName = false
=======
let accordion = document.querySelector(".accordion");
let accordionChild = accordion.children
let select = document.querySelector('.select')
let selectLista = []
>>>>>>> 69e62d22d29ca2fc43ae349ed82202185390da38

let company = document.querySelector('#company');
let resCompany = document.querySelector('#resCompany');
let validCompany = false

let telephony = document.querySelector('#telephony');
let resTelephony = document.querySelector('#resPhone');
let validTelephony = false;

let email = document.querySelector('#email');
let resEmail = document.querySelector('#resEmail');
let validEmail = false;

let messege = document.querySelector('#messege');
let resMessege = document.querySelector('#resMessege');
let validMessege = false;

let inputCadastro = document.getElementById('input-cadastro')
var respErro = document.getElementById('respErro');
var respSucesso = document.getElementById('respSucesso');

let assunto = document.querySelector('#subject');
let resAssunto = document.querySelector('#resAssunto')
let validSelect = false;

let checkbox = document.querySelector('.checkbox')
let validService = false;

let validCaptcha = false;

let btn = document.querySelector('#btn');

//eventos da validação geral
firstName.addEventListener('input', validar);
company.addEventListener('input', validar);
telephony.addEventListener('input', validar);
email.addEventListener('input', validar);
messege.addEventListener('input', validar);
checkbox.addEventListener('change', validServiceF)
checkbox.addEventListener('change', validar)



function validSubject(){

    if(assunto.value != 'disabled'){
        resAssunto.style.color = 'black';
        telephony.style.borderBlockColor = ' #008000'
        resAssunto.innerHTML='Assunto:';
        validSelect = true;    
        validar()    
    
    }else{
        telephony.style.borderBlockColor = ' #CA1C2A'
        resAssunto.innerHTML='*Assunto: ';	
        resAssunto.style.color = '#CA1C2A';
        validSelect = false;  
    } 

}

function validaName (){

    
    if(firstName.value == ''){
        firstName.style.borderBlockColor = ' #CA1C2A'
        resName.innerHTML = '*Nome: ';		
        resName.style.color = '#CA1C2A'
        firstName.focus();
    }else if (firstName.value.length < 15 || firstName.value.length >= 60 ){
        firstName.style.borderBlockColor = ' #CA1C2A'
        resName.innerHTML = '*Nome *Insira no min. 15 caracteres';
        resName.style.color = '#CA1C2A';
        validName = false;
      }else{
        resName.innerHTML='Nome: ';  
        resName.style.color = 'black'
        firstName.style.borderBlockColor = ' #008000'
        resName.style.fontSize = ' 0.9rem'
        validName = true;
      }  
}      

function validaCompany (){

    if(company.value == ''){
        company.setAttribute  = 'borderBlockColor: #CA1C2A'
        resCompany.innerHTML = '*Empresa: ';		
        resCompany.style.color = '#CA1C2A'
        company.focus();

    }else if (company.value.length < 3 || company.value.length >= 60 ){
        company.style.borderBlockColor = ' #CA1C2A'
        resCompany.innerHTML = '*Empresa:';	
        resCompany.style.color = '#CA1C2A'
        validCompany = false;

      }else{
        company.style.borderBlockColor = ' #008000'  
        resCompany.innerHTML='Empresa: ';
        resCompany.style.color = 'black';
        validCompany = true;
    }    
}    

function validaTelephony(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)

    if(telephony.value.length > 13){
        resTelephony.style.color = 'black';
        telephony.style.borderBlockColor = ' #008000'
        resTelephony.innerHTML='Telefone:';
        validTelephony = true;
    }else{
        telephony.style.borderBlockColor = ' #CA1C2A'
        resTelephony.innerHTML='*Telefone: ';	
        resTelephony.style.color = '#CA1C2A';
        validTelephony = false;  
    }    
}    
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}    
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;

}    

function validaEmail(emaill){

    let ev = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
     
       if(email.value==''){
           email.style.borderBlockColor = ' #CA1C2A'
           resEmail.innerHTML ='*Email:';		
          resEmail.style.color = '#CA1C2A' 
          email.focus();
          validEmail = false;
          //verifica se o email possui um @ e de 2 a 3 caracteres após o ponto
        } else if (!ev.test(emaill)) {
          email.style.borderBlockColor = '#CA1C2A'  
          resEmail.innerHTML = '*Email Inválido';		
          resEmail.style.color = '#CA1C2A';
        }else{
            resEmail.style.color = 'black'
            resEmail.innerHTML ='Email: ';	
            email.style.borderBlockColor = ' #008000'
            validEmail = true;
        }    
}        
function validaMessege (){
    
    if(messege.value.length == ''){
        messege.style.borderBlockColor = '#CA1C2A'
        resMessege.innerHTML = 'Mensagem: ';		
        resMessege.style.color = '#CA1C2A'
        messege.focus();
    }else{
        resMessege.innerHTML='Mensagem: ';
        resMessege.style.color = 'black'
        messege.style.borderBlockColor = ' #008000'
        resMessege.style.fontSize = ' 0.9rem'
        validMessege = true;       
    }    
}    
//formatação do regex do cnpj

//função para verificar se o campo possui apenas acentos e letras
function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }    
        if (
            
            (charCode == 32) || 
            (charCode == 63) ||
            (charCode > 64 && charCode < 91) ||
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) // letras com acentos
            ){
            return true;    
        } else {
            return false;
        }    
    } catch (err) {
        alert(err.Description);
    }    
}    


//validação geral com o evento input para veficar se cada campo está Preenchido com todos os requisitos solicitados
    function validar(){    
        if (validName && validCompany && validTelephony && validEmail && validMessege && validService && validCaptcha){  
            respSucesso.style.color = '#000'
            respSucesso.style.fontSize = '0.8rem'
            respSucesso.innerHTML = 'Formulário Preenchido'
            respErro.innerHTML ='' 
                        
            btn.disabled = false;
            btn.style = 'background-color: #CA1C2A'
            btn.style.cursor = 'pointer'
            
            
        }else{
            respErro.style.fontSize = '0.8rem'
            respErro.style.color = '#000'
            respSucesso.innerHTML = ''
            respErro.innerHTML = '*Preencha todos os campos corretamente' 

            btn.disabled = true
            btn.style.cursor = 'no-drop'
            
        }
    }
    

    let accordion = document.querySelector(".accordion");
    let accordionChild = accordion.children
    let select = document.querySelector('.Select')
    let selectLista = ['']


    //Validar se o service foi selecionado 
  
    function validServiceF(){
        if(selectLista.length == 0){
            validService = false;
            validar()     
        }else{
            validService = true;
            validar()
        }
    }
    

    function verify (texto, id, service, label){
        
        let serviceId = document.getElementById(id)        

        if (serviceId.checked == true){
            create(texto, label)                     
            selectLista.push(service) 
            validServiceF()
        }else{
            document.getElementById(label).remove();  
            selectLista.shift(service) 
            validServiceF()
        }
               
       
    }


    //Função de criação dos elementos
    
    function numberInputElementCreator2(element, className, label, content) {
        let newElement = document.createElement(element)
        newElement.textContent = content
        newElement.id = label
        newElement.className = className
        return newElement;
    }
    
    //Cria os elementos correspondentes aos itens selecionados
    
    //Verificação se há o service, se houver ele remove
    
    
    function Checked(value){
    
            switch (value){
                case "INTERNET":                
                    verify(texto = 'Internet Dedicada = Callnet Premium', id = 'checkboxInternet', service = 'internet', label = 'lDedicada')                     
                break
                
                case "BANDA":            
                    verify(texto = 'Banda Larga - Callnet Banda Larga', id = 'checkboxBanda', service = 'banda', label = 'LBanda')                   
                break
                case "WIFI":     
                    verify(texto = 'Wi-fi', id = 'checkboxWifi', service = 'wifi', label = 'LWifi' )                 
                break
    
                case "IPBX":
                    verify(texto = 'Callphone VIP - IPBX', id = 'checkboxVip', service = 'callphone' , label = 'LCallphone')
                break
    
                case "E1":
                    verify(texto = 'E1', id = 'checkboxE1', service = 'e1', label = 'LE1')
                break
                
                case "SIP":
                    verify(texto = 'SIP TRUNK', id = 'checkboxSip', service = 'sip', label = 'LSip')
                break
    
                case "0800":
                    verify(texto = 'Números 0800 e 40XX', id = 'checkbox0800', service = 'n0800' , label = 'LN0800')
                break
                
                case "PONTO":
                    verify(texto = 'Callnet Ponto-a-Ponto', id = 'checkboxPonto', service = 'callnet' , label = 'LPonto')
                break
                
                case "MPLS":
                    verify(texto = 'Callnet MPLS', id = 'checkboxMPLS', service = 'mpls', label = 'LMpls' )
                break
                
                case "FIBRA":
                    verify(texto = 'Fibra Apagada e Dutos', id = 'checkboxFibra', service = 'fibra' , label = 'Lfibra')
                break
    
                case "LOCATION":
                    verify(texto = 'Co-location', id = 'checkboxColocation', service = 'colocation', label = 'LLocation')
                break
                
                case "MVNO":
                    verify(texto = 'MVNO/MVNE', id = 'checkboxMVNO', service = 'mvno', label = 'LMvno')
                break
            }
    
    }
    
    
    function create(texto, id){
    
        let div = numberInputElementCreator2('div', 'align-items-center', id)
        let label = numberInputElementCreator2('label', 'labelServices', id, texto)  
        select.append(div)
        div.append(label)     
    
    }
    

    btn.addEventListener('click', function(){
        let title = document.querySelector('#title')
        let listString = selectLista.toString(); 
        title.value = listString
        console.log(title)
    })

    function validServiceFunction(){
        if(selectLista.value != null){
            validService = true;
        }else{
            validService = false;
        }
    }
    

    const captcha = document.querySelector(".captcha"),
    reloadBtn = document.querySelector(".reload-btn"),
    inputField = document.querySelector(".input-area input"),
    checkBtn = document.querySelector(".check-btn"),
    statusTxt = document.querySelector(".status-text");
    let wrapper = document.querySelector(".wrapper")
    //storing all captcha characters in array
    let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                         'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                         'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                         't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    function getCaptcha(){
      for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
        let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
      }
    }
    getCaptcha(); //calling getCaptcha when the page open
    //calling getCaptcha & removeContent on the reload btn click
    reloadBtn.addEventListener("click", ()=>{
      removeContent();
      getCaptcha();
    });
    
    checkBtn.addEventListener("click", e =>{
      e.preventDefault(); //preventing button from it's default behaviour
      statusTxt.style.display = "block";
      //adding space after each character of user entered values because I've added spaces while generating captcha
      let inputVal = inputField.value.split('').join(' ');
      if(inputVal == captcha.innerText){ //if captcha matched
        statusTxt.style.color = "#008000";
        statusTxt.innerText = "Confirmado, você não é um robô";
        validCaptcha = true;
        
        validar()
        setTimeout(()=>{ //calling removeContent & getCaptcha after 2 seconds
          removeContent();
          getCaptcha();          
        }, 2000);
      }else{
        statusTxt.style.color = "#ca1c2a";
        statusTxt.innerText = "O Captcha não confere. Tente novamente.";
        validCaptcha = false;
        validar()
      }
    });
    function removeContent(){
     inputField.value = "";
     captcha.innerText = "";
     statusTxt.style.display = "none";
    }