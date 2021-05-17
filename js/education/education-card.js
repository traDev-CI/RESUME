class educationCard extends HTMLElement{
    constructor(){
        super();
    }

    set intitution(intitution){
        this.innerHTML =`
        <div class="education_container">
        <div class="row_edu">
            <div class="${intitution.classC}">
                <div class="card_int">
                    <div class="container_int">
                        <div class="${intitution.class}">
                            <figure>
                                <img src="${intitution.img}" alt="about my institution">
                            </figure>
                        </div>
                        <div class="intbody">
                            <div>
                                <h2 class="title_int">${intitution.name}</h2>
                                <div class="city_int">
                                    ${intitution.date}
                                    <span>${intitution.city}</span>
                                </div>
                                <div class="topic_int">
                                    <h3>${intitution.institution}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('education-card', educationCard)