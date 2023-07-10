//for

//function encontrarVocalA(string){
//    for(var i = 0; i < string.length; i++){
//     if(string[i] === "a"){
//        return "Encontramos la vocal a"
//     }
//    }
//    return "El string no tiene ninguna letra a"
//}
//console.log(encontrarVocalA("holooo")) 



//while

//var contador = 1;
//  while(contador < 6){
//    console.log("contador es:", contador);
//    contador++;
// }



//do while

//var contador = 1;
// do {
//    console.log("contador es:" + contador);
//      contador++;
// }
// while(contador < 6)



//switch 
  
//function diaSemana(dia) {
//    switch (dia){
//        case "lunes":
//            console.log("Hoy es lunes");
//            break;
//        case "martes":
//            console.log("Hoy es martes");
//            break;
//        case "miercoles":
//            console.log("Hoy es miercoles");
//            break;
//        case "jueves":
//            console.log("Hoy es jueves");
//            break;
//        case "viernes":
//            console.log("Hoy es viernes");
//           break;
//        default:
//            console.log("El dia no es valido")
//            break;
//    }
//}
//diaSemana("domingo")




function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    if (num <= 1){
        return false;
    }
    for(var i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
 }
 