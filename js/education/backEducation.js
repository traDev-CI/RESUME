import './education-card.js'
import educationData from '../data/edicationData.js';
console.log(educationData);
window.addEventListener("load", () => {
    fetchEducation();
})

const fetchEducation = () =>{
    const mainE = document.querySelector('#grid-edu');
    educationData.institutions.forEach((intitution) => {
        const element = document.createElement('education-card');
        element.intitution = intitution;
        mainE.appendChild(element);
    })
}