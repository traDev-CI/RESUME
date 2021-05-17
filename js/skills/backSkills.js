import './skill-card.js';
import skillsData from '../data/skillsData.js';

window.addEventListener("load", () =>{
    fetchSkills();
});

const fetchSkills =  () =>{
    const mainS = document.querySelector('#grid-card');
    skillsData.skills.forEach((skill) => {
        const element = document.createElement('skill-card');
        element.skill = skill;
        mainS.appendChild(element);
    });
}