
 function navbar(){
let card = `<div id="nav_container">
 <a href="index.html">
     Home Page
 </a>
 <a href="quiz.html">Quiz Page</a>
 <a href="questions.html">Question Page</a>
</div>`
 document.getElementById("navbar").innerHTML=card
}
navbar()
export {navbar}
