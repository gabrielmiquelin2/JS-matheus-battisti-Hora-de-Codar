
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