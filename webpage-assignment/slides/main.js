// Logo and background setup

const logoUrl = './assets/UoE/UoE_stacked.png';
const logoUrlLight = './assets/UoE/UoE_stacked_white.png';
const logoUrlAccent = './assets/UoE/UoE_stacked_white.png';
const darkColor = '#282828';
const highlightColor = '#428071'
const logoSize = '300px';
const logoPosition = 'top 20px right 20px';
// const logoTitleUrl = null;
const logoTitleUrl = './assets/UoE/UoE_stacked.png';
const logoTitleSize = '500px';
const logoTitlePosition = 'top 50px left 50px';

// Setup

// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
    width: 1600,
    height: 900,
    
    hash: true,
    transitionSpeed: 'fast',
    transition: 'fade',

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [ RevealMarkdown, RevealNotes, RevealZoom, RevealSearch ]
});
Reveal.configure({ pdfSeparateFragments: false });


// adding logo to sections

const selector = 'section:not(:has(section))';
let sections = document.querySelectorAll(selector);
sections.forEach(s=>s.setAttribute('data-background-image', logoUrl));
sections.forEach(s=>s.setAttribute('data-background-size', logoSize));
sections.forEach(s=>s.setAttribute('data-background-position', logoPosition));
sections = document.querySelectorAll(selector+'.dark');
sections.forEach(s=>s.setAttribute('data-background-image', logoUrlLight));
sections.forEach(s=>s.setAttribute('data-background-color', darkColor));
sections = document.querySelectorAll(selector+'.accent');
sections.forEach(s=>s.setAttribute('data-background-image', logoUrlAccent));
sections.forEach(s=>s.setAttribute('data-background-color', highlightColor));
let sectionTitle = document.querySelector(selector+'.title');
if(logoTitleUrl !== null){
    sectionTitle.setAttribute('data-background-image', logoTitleUrl);
    sectionTitle.setAttribute('data-background-size', logoTitleSize);
    sectionTitle.setAttribute('data-background-position', logoTitlePosition);
} else {
    sectionTitle.removeAttribute('data-background-image');
    sectionTitle.removeAttribute('data-background-size');
    sectionTitle.removeAttribute('data-background-position');
}


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};
includeHTML();