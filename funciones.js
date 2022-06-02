// clase Circulo para obtener la Pi ejemplo
class Circulo {
    static get pi() {
      return 3.1416
    }
  }
  console.log(Circulo.pi);

  ///////////////////////////////////////////
  //////////////////////////////////////////
// funcion que regresa el mismo array con la primer letra en mayusculas ["Alex", "Tom", "Ighmaz", "Zack"]
  const names = ["alex", "tom", "ighmaz", "zack"]
  
  const mayuscula_name = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
  })
  console.log(mayuscula_name);
////////////////////////////////////////////////
  /////////////////////////////////////////////
// Funcion que valida el pin sea correcto True or False
  function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }
  
  validatePIN("0000"); //true

  /////////////////////////////////////////
  ////////////////////////////////////////
  // funcion que agrega una propiedad taxes al objeto con su valor. 
  solution1([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    //taxes: price*0.19
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    //taxes: price*0.19
    },
  
  ]);
  
  function solution1(array) {
    array[0].taxes = 0
    array[1].taxes = 0
    array.map(arr => arr.taxes = arr.price*.19)
    return array
  }; 

  /////////////////////////////////////////////
  ////////////////////////////////////////////
  // funcion 
  function solution2(numbers){
   return numbers.reduce((a, b) => a + b )
  }
  
  solution2([2, 4, 8])
  ///////////////////////////////////////////////////////
  solution3([
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
  ]);
  function solution3(orders){
    let total = orders
    .map(order => order.total)
    .reduce((a,b) => a + b )
    return total
  }
  ///////////////////////////////////////////////////////
  function solution4(numbers){
    return numbers.some(number => number % 2 == 0)
  }
  
  solution4([1, 3, 5])
  /////////////////////////////////////////////////////////
  const nombre = "Victor Isai";
  console.log([...nombre])
  /////////////////////////////////////////////////////////
  function solution5(words){
    const index = words.findIndex((item) => item === 'myKey')
       return index !== -1 ? index : false;
  }
  
  solution5(["diamonds", "myKey", "spades", "AS"])
  //////////////////////////////////////////////////////////
  function solution6(title){
    return title.replaceAll(" ", "-")
  }
  
  solution6("curso de arrays")
  
  ///////////////////////////////////////////////////
  function hashtagGenerator(words){
    return `#${words.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("")}`;
        
  }
  
  hashtagGenerator("Javascript challenge")
  
  
  function contadorDePalabras(lines){
    return lines.flatMap(line => line.split(' ')).length
  }
  
  contadorDePalabras([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]);
  
  function deMayorAMenor(array){
    let arr = array.sort(function(a,b){
      return a - b
    })
    return arr.reverse()
  }
  
  deMayorAMenor([3, 1, 11, 5, 2, 7, 8])
  
  function arrayDeMenorAMayor(array){
      return array.sort((a,b) => a.length - b.length)
  }
  
  arrayDeMenorAMayor([
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
  ])
  
  function porFechas(array){
    return array
      .sort((a,b) => b.dateOfBirth.getTime() - a.dateOfBirth.getTime())
        .map(item => item.name)
    
  }
  
  porFechas([
    {
      name: "Nicolas",
      dateOfBirth: new Date(1993, 6, 9),
    },
    {
      name: "Santiago",
      dateOfBirth: new Date(2018, 6, 11),
    },
    {
      name: "Zulema",
      dateOfBirth: new Date(1994, 10, 7),
    },
  ])
  
  function apellidoPorAlfabeto(array){
    return array
                      //.map(arr => arr.split(" "))
                        .sort((a,b) => a > b ? 1 : -1)
      
      
  }
  
  apellidoPorAlfabeto(["Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Andrea Amador"])
  
  
  function valoresUnicos(array){
    let arr = array.sort((a,b) => a > b ? 1 : -1)
    let a = new Set(arr)
    let result = [...a]
    return result
  }
  
  valoresUnicos([1, 2, -3, -1, 2, 4, 4, 1, 45, -1])
  
  function contador(array){
    return array.reduce((obj, item) => {
          obj[item] ? obj[item] += 1 : obj[item] = 1;
           return obj;
       }, {});
  }
  
  contador([1, 2, -3, -1, 2, 4, 4, 1, 45, -1])