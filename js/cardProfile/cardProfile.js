class cardProfile extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML =`
        <div class="card_container">
        <figure>
            <img src="./assets/FB_IMG_1605061745503.jpg" width="100" height="100" alt="about me">
        </figure>
        <div>
            <h3>Alfredo Rivas Jimenez</h3>
            <h6>Guadalajara, Jalisco</h6>
            <p>Front-end developer</p>
            <div class="btns">
                <button class="btn_primary">
                    RESUME
                </button>
                <button class="btn_primary_o">
                    GITHUB
                </button>
            </div>
            <div class="skills">
                <h6>Skills</h6>
                <ul>
                    <li>UI / UX</li>
                    <li>Front End Development</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </div>
           
        </div>
    </div>
        `
    }
}

window.customElements.define('card-profile', cardProfile);