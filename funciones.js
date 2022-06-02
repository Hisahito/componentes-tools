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
  // Funcion que agrega una propiedad taxes al objeto con su valor. 
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
  // Funcion que suma los numeros de un array
  function solution2(numbers){
   return numbers.reduce((a, b) => a + b )
  }
  
  solution2([2, 4, 8]) //14

  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  // Funcion que suma el total de las ordenes del objeto solution3
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
    return total //total orders: 220
  }

  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  // Funcion que regresa true or false si alguno de los numeros es par o divisibles entre 2
  function solution4(numbers){
    return numbers.some(number => number % 2 == 0)
  }
  
  solution4([1, 3, 5]) //false

  /////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // ejemplo del uso de metodo spread, aqui el metodo me dividie el string en un array de/por cada letra
  const nombre = "Victor Isai";
  console.log([...nombre])

  /////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // Funcion que regresa el index del array si encuentra concidencia con alguno del array
  function solution5(words){
    const index = words.findIndex((item) => item === 'myKey')
       return index !== -1 ? index : false;
  }
  
  solution5(["diamonds", "myKey", "spades", "AS"]) //"myKey"

  //////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  // Funcion que remplaza los espacios por un gion -
  function solution6(title){
    return title.replaceAll(" ", "-")
  }
  
  solution6("curso de arrays") // "curso-de-arrays"
  
  ///////////////////////////////////////////////////
  //////////////////////////////////////////////////
  // Funcion que genera un #HashTag de twitter al darle un string cualquiera
  function hashtagGenerator(words){
    return `#${words.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("")}`;
        
  }
  
  hashtagGenerator("Javascript challenge") // "#JavascriptChallange"
  
  /////////////////////////////////////////////////
  ////////////////////////////////////////////////
  // Funcion que cuenta el total de palabras en un string o parrafo
  function contadorDePalabras(lines){
    return lines.flatMap(line => line.split(' ')).length
  }
  
  contadorDePalabras([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]); // 20
  
  ////////////////////////////////////////////////
  ///////////////////////////////////////////////
  // Funcion que acomoda un array de numero de mayor a menor
  function deMayorAMenor(array){
    let arr = array.sort(function(a,b){
      return a - b
    })
    return arr.reverse()
  }
  
  deMayorAMenor([3, 1, 11, 5, 2, 7, 8]) //[ 11, 8, 7, 5, 3, 2, 1 ]
  
  ////////////////////////////////////////////////
  ///////////////////////////////////////////////
  // Funcion que acomoda un array de string por de menor a mayor por su tamaño o cantidad de palabras 
  function arrayDeMenorAMayor(array){
      return array.sort((a,b) => a.length - b.length)
  }
  
  arrayDeMenorAMayor([
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
  ]) // [ 'Sol', 'Hola', 'Viajar', 'Aprender' ]

  ///////////////////////////////////////////////
  //////////////////////////////////////////////
  // Funcion que acomoda un array por fechas decendentes 
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

  ///////////////////////////////////////////////////
  //////////////////////////////////////////////////
  // Funcion que acomoda un array por orden alfabetico en los apellidos
  function apellidoPorAlfabeto(array){
    return array
                      //.map(arr => arr.split(" "))
                        .sort((a,b) => a > b ? 1 : -1)
      
      
  }
  
  apellidoPorAlfabeto(["Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Andrea Amador"]) // [ 'Andrea Amador', 'Andrea Perez', 'Nicolas Molina', 'Zulema Vicente' ]
  
    ////////////////////////////////////////////////
  /////////////////////////////////////////////////
  // Funcion que retorna los numeros de un array por orden decendente y sin repetirse
  function valoresUnicos(array){
    let arr = array.sort((a,b) => a > b ? 1 : -1)
    let a = new Set(arr)
    let result = [...a]
    return result
  }
  
  valoresUnicos([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]) // [ -3, -1, 1, 2, 4, 45 ]
  
  /////////////////////////////////////////////////
  ////////////////////////////////////////////////
  // Funcion quer cuenta las veces que un valor se repite
  function contador(array){
    return array.reduce((obj, item) => {
          obj[item] ? obj[item] += 1 : obj[item] = 1;
           return obj;
       }, {});
  }
  
  contador([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]) /* {
    '1': 2,
    '2': 2,
    '4': 2,
    '45': 1,
    '-3': 1,
    '-1': 2
  }
  */