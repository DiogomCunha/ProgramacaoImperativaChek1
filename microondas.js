let pipoca = 10
let macarrao = 8
let carne = 15
let feijao = 12
let brigadeiro = 8


function menu (tempo,comida2){

    switch (comida2){
        case "pipoca":
        microondas(tempo,pipoca);
        break;
    
        case "macarrao":
         microondas(tempo,macarrao);
        break;
  
        case "carne":
         microondas(tempo,carne);
         break;
    
        case "feijao":
         microondas(tempo,feijao);
        break;
    
        case "brigadeiro":
         microondas(tempo,brigadeiro);
        break;

    default:
        console.log("Prato Inexistente");
  
}
}

function microondas (tempo,comida){

    if(tempo == comida){

        return console.log("Prato pronto, bom apetite!!!");
    }
    else if (tempo >= comida * 2 && tempo < comida * 3){
        
        return console.log("Comida Queimou");
    }
    else if(tempo < comida){

        return console.log("Tempo Insulficiente");
    }
    else if(tempo >= comida *3){

        return console.log("Kabumm");
    }
 
}


menu (30,"pipoca")
menu (16,"macarrao")
menu (10,"carne")
menu (12,"feijao")
menu (16,"brigadeiro")
menu (10,"podrao")