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
// Récupération des éléments du DOM

const bannerImage = document.querySelector(".banner-img");
const bannerTagLine = document.getElementById("banner__p");

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

const conteneurDot = document.querySelector(".dots");
const elementsDot = document.getElementsByClassName("dot"); 

let i = 0;

// Ajout des bullets points 

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div")
	dot.classList.add("dot")    
	conteneurDot.appendChild(dot)
		
}

// Fonction changement des chemin d'image et texte à l'intérieur des balises <p></p>

function slideContent() {
        
    bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
    bannerTagLine.innerHTML = `${slides[i].tagLine}`;

}

// Fonction qui permet d'ajouter et supprimmer la classe dot_selected

function addAndRemoveSelectedDot () {
    for (let i = 0 ; i < elementsDot.length; i++) {
        
        elementsDot[i].classList.remove("dot_selected");
    }
    elementsDot[i].classList.add("dot_selected")
}


addAndRemoveSelectedDot() 

// EventListener

arrowLeft.addEventListener("click", () => {
	i--
    if (i == -1)
    i = slides.length -1
    slideContent();
    addAndRemoveSelectedDot();

    
})

arrowRight.addEventListener("click", () => { 
	i++
    if (i == 4)
    i = 0	
    slideContent();
    addAndRemoveSelectedDot();

})