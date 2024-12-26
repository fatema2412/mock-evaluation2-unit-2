import { baseUrl } from "./baseurl.js"
let form= document.getElementById("form")
form.addEventListener("submit",  async function (event){
    console.log("yes")
    event.preventDefault()
    let Question=form.Question.value
    let OptionA=form.OptionA.value
    let OptionB=form.OptionB.value
    let OptionC=form.OptionC.value
     let OptionD=form.OptionD.value
    let correct=form.correct.value
    let Quizobj={Question,OptionA,OptionB,OptionC,OptionD,correct, status:false}
    try{
     await fetch(`${baseUrl}/quiz`,{
       method :"POST",
       headers:{
     "content-type":"application/json"
       },
       body:JSON.stringify(Quizobj) 
    })
    alert("Question Added")
}
catch(error){
    console.log(error)
    alert("Something went wrong !!")
}

})
getData()
  
async function getData(){
    try{
        let res= await fetch(`${baseUrl}/quiz`,{
       method :"GET",
       headers:{
       "content-type":"application/json"
       },
    })
    let data= await res.json()
    //    console.log(data)
       displayData(data)
    }
    catch (error){
      console.log(error)
    }
}

 async function displayData(arr){
 let card= document.getElementById("cart")
 card.innerHTML=""
 arr.map((ele)=>{
  let quest =document.createElement("h3")
  quest.innerHTML=ele.Question
  let buton1=document.createElement("button")
  buton1.innerHTML="Review Question"
  buton1.addEventListener("click", function(){
    alert("Are you sure to review the question?")
})
    let buton2=document.createElement("button")
    buton2.innerHTML="Delete Question"
    buton2.addEventListener("click",  async function(){
    //    confirm ("Are you sure to Delete the question?")
 let confirmDelete = confirm("Are you sure you want to delete this question?");
 if(confirmDelete){
   try{
   await fetch(`${baseUrl}/quiz}`,{
    method :"DELETE",
    headers :{
        "content-type":"application/json"    
    }
   })
   getData()
   console.log(data )
   }
   catch(erro){
    console.log(erro)
    alert("Something went wrong ")
   }
 }

      
    }) 
    card.append(quest, buton1, buton2);
        document.body.append(card)
  

 })

}
window.onload =()=>{
    getData ()

}

 