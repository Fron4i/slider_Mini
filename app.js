const slides = document.querySelectorAll('.slide')
const slidesActive = document.querySelectorAll('active')
const body = document.body

let activeSlide = document.querySelector(".active").getAttribute("id")

setBgToBody()
addActiveClasses()

document.addEventListener('keydown', event => {
	if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
		clearActiveClasses()
		activeSlide++
		if (activeSlide > slides.length-1) activeSlide = 0
		slides[(+(activeSlide))].classList.add('active')
		setBgToBody(activeSlide)
		
	}
	if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
		clearActiveClasses()
		activeSlide--
		if (activeSlide < 0) activeSlide = +(slides.length-1)
		slides[(+(activeSlide))].classList.add('active')
		setBgToBody(activeSlide)
	}
})

function addActiveClasses() {
	slides.forEach((slide) => {
		slide.addEventListener('click', () => {
			clearActiveClasses()
			slide.classList.add('active')
			activeSlide = document.querySelector(".active").getAttribute("id")
			setBgToBody(activeSlide)
		})
	})
}

function clearActiveClasses() {
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}


function setBgToBody(activeSlide = 3) {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}