class experienceCard extends HTMLElement {
    constructor(){
        super();
    }

    set experience(experience){
        this.innerHTML = `
        
        <div class="card">
            <div class="card-body">
                <h4 class="muted">${experience.name}</h4>
                <h4 class="company muted">${experience.company}</h4>
                <div class="date-meta muted">
                    ${experience.date}
                    <span>${experience.city}</span>
                </div>
                <div class="card-text">
                    <ul>
                        <li>
                            <p><strong>${experience.role.name}</strong></p>
                            <ul>
                                <li>${experience.role.info_1}</li>
                                <li>${experience.role.info_2}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        `
    }
}

customElements.define('experience-card', experienceCard)