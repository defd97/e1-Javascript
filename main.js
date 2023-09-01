 
 
                        //ejercicio n°1
                        
let ParImpar = 97

const parOImpar = (n) => {
if (n%2===0) {
 console.log('El numero es Par') 
} else{
console.log('El numero es impar')
}
}
parOImpar(ParImpar)







                        //ejercicio n°2


let numeroA = 25;
let numeroB = 20;
                        
const numeroMayorMenor = (n1,n2)=> {
if (n1===n2) {
return console.log('Los numeros del ejercicio dos son iguales')
} else if (n1 > n2) {
 return console.log('El primer numero ingresado es mayor al segundo')
                            
} else {
return console.log('El segundo numero ingresado es mayor al primero')
}
};
numeroMayorMenor(numeroA,numeroB)



 



                            //ejercicio n°3


let Multiplode5 = 55;

const esMultiploDe5 = (n) => {
if (n%5===0) {
return console.log(`El numero ${n} es multiplo de 5`)
} else {
return console.log(`El numero ${n} no es multiplo de 5`)
}
}
esMultiploDe5(Multiplode5)




    


                             
  
                                 //ejercicio n°4


let ciclo = 8;   //para en el numero indicado

const contador = (n) => {
for (let i = 0; i <= n; i++) {
console.log(i)
}
return
}
contador(ciclo)


                                 //ejercicio n°5
           
 let palabra = 'quierola7ma';
 let numero = 98
const imprimirPalabraynum = (n,palabra) => {
for (let i = 1; i <= n; i++) {
console.log(palabra)
}
 return
}
imprimirPalabraynum(numero,palabra)







                               //ejercicio n°6

let array = [12,'boquita', 'quierola7ma']

const imprimirValoresArray = (array) => {
array.forEach((i, num) => {
console.log(`En el parametro ${num} el siguiente valor es: ${i}`)        
});
}
imprimirValoresArray(array)



                               //ejercicio n°7
 
let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const saltearEl5 = (array) => {
 for (let i = 0; i < array.length; i++) {
 if (i === 4) {  
continue;
}
console.log(array[i]);
}
}
                               
saltearEl5(Numeros);



                  //ejercicio n°8
let Multiplicarnumeros = [1,2,3,4,5,6,7,8,9,10]
 let multiplicar = 7

 const multiplicarparametrosArray = (array, b) => {
    array.forEach((a) =>{
        console.log(`${a} x ${b} = ${a*b}`)
    })
 }
 multiplicarparametrosArray(Multiplicarnumeros, multiplicar)






 
