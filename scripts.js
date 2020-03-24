const modal0verlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for ( let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modal0verlay.classList.add('active')
        modal0verlay.querySelector("iframe").src = `https://youtube.com/embed/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
modal0verlay.classList.remove("active")
modal0verlay.querySelector("iframe").src = ""
})
