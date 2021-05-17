import './experience-card.js'
import expData from '../data/expData.js';
console.log(expData);
window.addEventListener("load", () =>{
    fetchExp();
})

const fetchExp = () =>{
    const mainEx = document.querySelector('#grid-exp');
    expData.experiences.forEach(experience => {
        const element = document.createElement('experience-card');
        element.experience = experience;
        mainEx.appendChild(element);
    })
}