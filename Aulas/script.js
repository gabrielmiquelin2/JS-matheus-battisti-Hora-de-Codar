
//TIPOS DE  CONSOLE
  console.error("Este é um erro!")
  console.warn("Este é um aviso!")
  console.log("Esta é uma mensagem!")

  /*
   O console mais utilizado é o "console.log" que 
   serve para ver se ele entrou num determinado trecho 
   do código.
  */



   //VARIÁVEIS
   var x = 10
   //Boas práticas 
   let y = 15
   const z = 20  //palavra reservada,não tem como alterar seu valor

   if (1){
     let y = 55
   }

   console.log(x)
   console.log(y)
   console.log(z)

   y = 25
    console.log(y)



   //TIPOS DE DADOS
   //string,number, booleano and object

   //TIPO STRING ou TEXTO
    const name = "Gabriel"
    console.log(name)
    console.log(typeof name)  //typeof ele vai especificar o tipo do dado    
                             // ou seja vai falar se é uma string ou número
                   
   //TIPO NUMBER ou NUMERO                          
    const camiseta = 5
    console.log(camiseta)
    console.log(typeof camiseta)

    const decimal = 12.4
    console.log(decimal)
    console.log(typeof decimal)

  //BOOLEANO TRUE and FALSE
   const aprovado = false
   console.log(aprovado)
   console.log(typeof aprovado)

   //TIPO NULL ou seja AINDA não tem valor mas pode ter ao longo do programa
    
   //No exemplo abaixo a variavel tinha um valor "null"
   //mas ao decorrer do programa ela virou uma string
   let sobrenome = null
   console.log(sobrenome)
   console.log(typeof sobrenome)
  //virou string
   sobrenome = "Miquelin"
    console.log(sobrenome)
    console.log(typeof sobrenome)

  //TIPO UNDEFINED  usado quando não temos uma definição para a variavel
  //Mas não é interessante fazer isso o certo mesmo é usaro o dado "null"
   let sla 
   console.log(sla)
   console.log(typeof sla)

   sla = 30 
   console.log(sla)
   console.log(typeof sla)

   //TIPO ARRAY é como se fosse uma lista representada pelos []
   const languages =['PHP', 'Python', 'C' ]
   console.log(languages)
   console.log(typeof languages)

   //TIPO OBJETOS representado pelas {}
   const user = {email: 'gabriel@gabriel.com',
    passaword:'teste123', idade:17          
  }
  console.log(user)
  console.log(typeof user)



  //MÉTODOS DE STRING
   const fullName = "Gabriel Miquelin"
   console.log(fullName)
   console.log(fullName.length) //Mostra quantos caracteres tem essa string

  //separando a string em list ou seja array
   const stringToArray = fullName.split('')
   console.log(stringToArray)

   console.log(fullName.toLocaleLowerCase())//deixa tudo em letra minuscolo
   console.log(fullName.toUpperCase())//dexa tudo em letra MAIUSCULA

   //encontrando uma palavra em uma string
   console.log(fullName.indexOf('Miquelin'))

   //resgatar ou extrair uma parte de uma string 
    console.log(fullName.slice(0,5))


  //MÉTODOS DE ARRAY
    const list = ['a','b','c','d','e']
    console.log(list.length)
    console.log(list[2])

    list[5] = 'f'//criei um novo indice e atribui que indice 5 é igual a 'f'
    console.log(list)

    console.log(list[list.length - 1]) //como pegar o ultimo elemento de
                                        //uma lista (sempre subtrair por 1)

   //adcionando um elemento a partir de um método
    list.push('g')  //push adciona um elemento ao FINAL da lista
    console.log(list)

    list.pop() //remove um elemento do FINAL da lista
    console.log(list)

    list.shift()//remove o PRIMEIRO elemento da lista
    console.log(list)

    list.unshift('aa') //adciona um elemendo no INICIO da lista
    console.log(list)



    //OBJETOS  //como se fosse uma lista de coisas 
    const produto = {
      name: 'camiseta',
      preço: 15.99,
      stock:false,
      tamano:['P','M','G']
    }
    console.log(produto.name)
    
    
    //destructuring //consigo extrari variaveis por meio de um objeto
                    //funciona em objetos e arrays tbm            
    const {preço,stock} = produto
    console.log(preço)
    console.log(stock)

   const [n1, n2] = list

   console.log(n1)
   console.log(n2)



   //JSON significa javascript objetc notation
   //a sintaxe (modo como escreve) do json é pareceido com a do objeto
   //sempre com aspas duplas!!!
    const dog = {
     name: 'Bidu',
     age:10
    }

    const json = JSON.stringify(dog)
    console.log(json)

   const obj = JSON.parse(json) //"parse" converto o json em objeto javascript
    console.log(obj)

    const jsonErrado= '{"name":"Teste", "surname":"Testando"}'

    const obj2 = JSON.parse(jsonErrado)

    console.log(obj2)