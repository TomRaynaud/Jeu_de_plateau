const MyButton1 = document.querySelector("#boutton1")

/**function reactionClick() {
    let clickme1 = document.getElementById("boutton1")
    clickme1.innerHTML="Commenter"
    document.getElementById("boutton1").style.backgroundColor = "dodgerblue"
} */

MyButton1.addEventListener("click", reactionClick)


const MyButton2 = document.querySelector("#boutton2")

/**function reactionClick1() {
    let clickme2 = document.getElementById("boutton2")
    clickme2.innerHTML="Commenter"
    document.getElementById("boutton2").style.backgroundColor = "dodgerblue"
} */

MyButton2.addEventListener("click", reactionClick1) 


const avatar =  document.querySelector(".avatar")
const cartes = document.querySelectorAll(".card")
const lien = document.querySelectorAll(".lien")

function ChangeRotationCard(event){

    lien[2].classList.add("ChangeColor")

    cartes.forEach((carte) => {
        carte.style.transform = "rotate(360deg)"
    })
}

avatar.addEventListener("click", ChangeRotationCard)