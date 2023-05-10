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
let currentSlide = 0

const tagLine = document.querySelector('.banner-tagline')
let currentDots = 0
console.log(tagLine)

const leftArrow = document.querySelector(".arrow_left")
leftArrow.addEventListener('click', function (){
	 currentSlide = currentSlide-1
	bannerImg.src="assets/images/slideshow/"+slides[currentSlide].image
	tagLine.innerHTML=slides[currentSlide].tagLine
})

const rightArrow = document.querySelector(".arrow_right")
rightArrow.addEventListener('click', function (){
	currentSlide = currentSlide+1
	bannerImg.src="assets/images/slideshow/"+slides[currentSlide].image
	tagLine.innerHTML=slides[currentSlide].tagLine
})



const nbSlides = slides.length
console.log(nbSlides)
const dots = document.querySelector('.dots')
console.log (dots.innerHTML)

for(let i = 0; i < nbSlides; i++){
	if(i == 0){
		dots.innerHTML += '<div class="dot dot_selected"> </div>'
	}
	else{
		dots.innerHTML += '<div class="dot"> </div>'
	}
}
/*
document.querySelector('.dots');
    let elements = Array.from(container.children);
    console.log(elements);
    let dotdot = click ;
    let dotselect = elements[dotdot];
    console.log(dotselect);
    dotselect.classList.add('dot_selected');


function bulletsBack(){
	currentDots = currentDots-1
	dots[currentDots] += '<div class="dot dot_selected"> </div>'
}

function bulletsNext(){
	currentDots = currentDots+1
	dots[currentDots] += '<div class="dot dot_selected"> </div>'
}




document.querySelector('.dots');
    let elements = Array.from(container.children);
    console.log(elements);
    let dotdot = click ;
    let dotselect = elements[dotdot];
    console.log(dotselect);
    dotselect.classList.add('dot_selected');


let dotadd = click ;
    let dotrm =click -1;
    let dotselect = elements[dotadd];
    let dotremove =elements[dotrm];
    console.log(dotselect);
    dotselect.classList.add('dot_selected');
    dotremove.classList.remove('dot_selected');

*/