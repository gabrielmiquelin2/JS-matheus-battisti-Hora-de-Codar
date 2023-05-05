const objs = [
 
  {
 nome:'Gabriel',
 idade: 17,
 esta_trabalhando:true,
 detallhes_profissao:{
  profissao:'programado',
  empresa:'empresa x'  
 },
 hobbies:['programar','correr','ler'],
  },

  {
    nome:'Lucas',
    idade: 37,
    esta_trabalhando:false,
    detallhes_profissao:{
     profissao:null,
     empresa: null,
    },
    hobbies:['jogar','academia'],
     }
]

console.log(objs)
//JSON
//converteno esse código ai de cimpa para json
const jsonData = JSON.stringify(objs)//garantir que meu json seja válido
console.log(jsonData)
console.log(typeof jsonData)

//CONVERTENDO JSON PARA OBJETO
const objData = JSON.parse(jsonData);
console.log(objData)
console.log(typeof objData) //Typeof vai mostrar qual tipo de dado é number...

objData.map((pessoa) =>{
 console.log(pessoa.nome)
});

