
// ANIMACIÓN SCROLL

const reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll", () => {

reveals.forEach(el => {

const top = el.getBoundingClientRect().top
const windowHeight = window.innerHeight

if(top < windowHeight - 100){

el.classList.add("visible")

}

})

})



// TESTIMONIOS CARRUSEL

let index = 0

const testimonials = document.querySelectorAll(".testimonial")

function rotateTestimonials(){

testimonials.forEach(t => t.classList.remove("active"))

index++

if(index >= testimonials.length){

index = 0

}

testimonials[index].classList.add("active")

}

setInterval(rotateTestimonials,4000)