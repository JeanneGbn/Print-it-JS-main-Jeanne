const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img')
const tagLine = document.querySelector('.banner-tagline')
const nbSlides = slides.length
const dots = document.querySelector('.dots')
let currentSlide = 0
const rightArrow = document.querySelector(".arrow_right")
const leftArrow = document.querySelector(".arrow_left")

for(let i = 0; i < nbSlides; i++){
	if(i == 0){
		dots.innerHTML += '<div class="dot dot_selected"> </div>'
	}
	else{
		dots.innerHTML += '<div class="dot"> </div>'
	}
}



leftArrow.addEventListener('click', function (){
	if(currentSlide == 0){
		currentSlide = slides.length-1
	}
	else{
		currentSlide = currentSlide-1
	}
	bannerImg.src="assets/images/slideshow/"+slides[currentSlide].image
	tagLine.innerHTML=slides[currentSlide].tagLine
	for(let i = 0; i < nbSlides; i++){
		if(i == currentSlide){
			dots.children[i].classList.add('dot_selected')
		}
		else{
			dots.children[i].classList.remove('dot_selected')
		}
	}
})


rightArrow.addEventListener('click', function (){
	if(currentSlide == slides.length-1){
		currentSlide = 0
	}
	else{
		currentSlide = currentSlide+1
	}
	bannerImg.src="assets/images/slideshow/"+slides[currentSlide].image
	tagLine.innerHTML=slides[currentSlide].tagLine
	for(let i = 0; i < nbSlides; i++){
		if(i == currentSlide){
			dots.children[i].classList.add('dot_selected')
		}
		else{
			dots.children[i].classList.remove('dot_selected')
		}
	}
})





