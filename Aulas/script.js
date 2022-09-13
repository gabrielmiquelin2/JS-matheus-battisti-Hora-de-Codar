
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



    //ESTRUTURAS CONDICIONAIS  //É uma condição ou questionamento
                               //Em javascript  é representado pelo IF que na tradução da SE.   

   const a = 10
   if (a > 12){
    console.log("A é maior que 8")
   }else{  //se não
    console.log("Não é maior que 8!")
   }                             
   // >,<,>=,<=
   const b = "Gabriel"

   if(b === "Lucas"){
    console.log("O nome é joão")
   }else if (b === "Pedro"){
    console.log("O nome é Pedro")
   }else{
    console.log ("Não encotramos o nome do usuário")
   }


  //IF TERNÁRIO
  //IF ternário é basicamente um if que pode ser feito em uma linha só
    const someNumber = 14
    let testingAnumber = someNumber < 20 ? 'Yes' : 'No' //utilzando if ternário
    console.log(testingAnumber)


  
  //ESTRUTURAS DE REPETIÇÔES ou seja loop (vai e volta)
  const mylist = [1,2,3,4,5]
  let counter = 0

  while(counter < mylist.length){ //loop while ou seja"ENQUANTO"
    console.log('Imprimindo: ' + mylist[counter]) //concateni ou seja juntei utilizando o sinal de "+"
    //counter = counter + 1
    counter++ //forma resumida de descrever oq está acima
  }

  //LOOP FOR digamos que é uma forma mais resumida em relação ao "WHILE""
  const mySecindList = ['a','b','c','d','e']
  
  for(let counter = 0; counter < mySecindList.length; counter++){
   console.log(`imrprimindo: ${mySecindList[counter]}`)
  }


  //Métodos de ARRAY -> repetição
  //esses métodos de array é uma forma de substituir os loops for,while etc ...

  const names = ["Gabriel","Rafael","Pedro","Maria"]

  names.forEach(function(name){
    console.log(`O nome é: ${name}`)

  })

  //método MAP
  const modifiedNames = names.map(function(name){
    if(name === "Gabriel"){
      return(name = "SR Gabriel")
    }else{
      return name
    }
  })
  console.log(modifiedNames)

  //método filter ou seja filtrar
  const bigNumbers = [1,2,3,4,5,10,100].filter(function(number){
    return number >= 5
  })
  console.log(bigNumbers)

  //método reduce ou seja reduzir
  const sumAll = [10,20,30,40,50].reduce(function(total,number){
    return total + number
  })
  console.log(sumAll)



  //FUNÇÕES
  //Bloco de códigos que podem ser utilizados em várias partes do programa
  //Se o código está repetindo muito,o certo é colocalo em alguma função

  function minhaFuncao(){
     console.log("Olá função")
  }
  minhaFuncao()//executei a função para que aparece na tela
  minhaFuncao()

///////////////////////////////////////////////////////////////////////////////////////

  function nomeCompleto(nome, sobrenome){ //coloquei parametro na função ou seja      declarei variaveis dentro das aspas acima
    return`O Nome completo é: ${nome} ${sobrenome}`
  }
  console.log (nomeCompleto("Gabriel","Miquelin"))
  console.log (nomeCompleto("Lucas","Ferreira"))

 ///////////////////////////////////////////////////////////////////////////////////////

  const primeiroNome = "Maria"
  const segundoNome = "Matos"
  const meuNomeCompleto = nomeCompleto(primeiroNome, segundoNome)
  console.log(meuNomeCompleto)
  
  //////////////////////////////////////////////////////////////////////////////////////

  //arrow functions // é uma fomra de sintaxe mais resumida
  const myArrowFunction = (a,b) =>{
    return a + b
  }
  console.log(myArrowFunction(2,5))

//forma resumida de fazer a mesma coisa do que está feito ali encima
  const mySimpleArrowFunction = (a,b) => a + b
  console.log(mySimpleArrowFunction (5,5))

 //////////////////////////////////////////////////////////////////////////////////////

 //CLASSEs
