let accordion = document.querySelector(".accordion");
let accordionChild = accordion.children
let select = document.querySelector('.Select')
let selectLista = []

function numberInputElementCreator2(element, className, id, content) {
    let newElement = document.createElement(element)
    newElement.textContent = content
    newElement.id = id
    newElement.className = className
    return newElement;
}

function create(texto, id){

    let div = numberInputElementCreator2('div', 'align-items-center', id)
    let label = numberInputElementCreator2('label', 'labelServices', id, texto)  
    select.append(div)
    div.append(label)     

}

function verify(texto, id, service)  {
    if(selectLista.includes(service)){
        selectLista.pop(service)
        document.querySelector("#" + service).remove();                                    
    }else{
        create(texto, id)                     
        selectLista.push(service) 
    }
}

let checkbox = document.querySelectorAll('.checkbox')

function Checked(value){

        switch (value){
            case "INTERNET":                
                verify(texto = 'Internet Dedicada = Callnet Premium', id = 'internet', service = 'internet')                     
            break
            
            case "BANDA":            
                verify(texto = 'Banda Larga - Callnet Banda Larga', id = 'banda', service = 'banda')                   
            break
            case "WIFI":     
                verify(texto = 'Wi-fi', id = 'wifi', service = 'wifi' )                 
            break

            case "IPBX":
                verify(texto = 'Callphone VIP - IPBX', id = 'callphone', service = 'callphone')
            break

            case "E1":
                verify(texto = 'E1', id = 'e1', service = 'e1')
            break
            
            case "SIP":
                verify(texto = 'SIP TRUNK', id = 'sip', service = 'sip')
            break

            case "0800":
                verify(texto = 'Números 0800 e 40XX', id = 'n0800', service = 'n0800')
            break
            
            case "PONTO":
                verify(texto = 'Callnet Ponto-a-Ponto', id = 'callnet', service = 'callnet')
            break
            
            case "MPLS":
                verify(texto = 'Callnet MPLS', id = 'mpls', service = 'mpls')
            break
            
            case "FIBRA":
                verify(texto = 'Fibra Apagada e Dutos', id = 'fibra', service = 'fibra')
            break

            case "LOCATION":
                verify(texto = 'Co-location', id = 'colocation', service = 'colocation')
            break
            
            case "MVNO":
                verify(texto = 'MVNO/MVNE', id = 'mvno', service = 'mvno')
            break
        }

}
