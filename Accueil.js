
const titre = document.querySelectorAll('h1');

const btns = document.querySelectorAll('.btn1');

const logo = document.querySelector('.logo1');

const reseau = document.querySelectorAll('.bulles');

const nom = document.querySelectorAll('h2');

const Soratra = document.querySelectorAll('h3 span');


window.addEventListener('load' , () => {
	
	const TL = gsap.timeline({paused: true});
	
	TL
	.staggerFrom(nom, 1, {top: -10,  ease: "power2.out"}, '-=2')
	.staggerFrom(titre, 1,{top: 20, opacity: 0, ease: "power2.out"}, 1)
	.from(logo, 1.5, {transform: "scale(0)", ease: "power2.out"}, '-=2')
	.staggerFrom(Soratra, 0.5,{ opacity: 0, ease: "power2.out"}, 1)
	.staggerFrom(btns, 0.5, {opacity: 0, ease: "power2.out"}, 0.3, '-=1') 
    .staggerFrom(reseau, 1, {right: -200, ease: "power2.out"}, 0.3, '-=2')
    

	TL.play();
	
}) 