class skillCard extends HTMLElement {
  constructor() {
    super();
  }
  set skill(skill) {
    this.innerHTML = `<div class="skill">
            <figure>
                <i class="${skill.class}"></i>
            </figure>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        </div> `;
  }
}
customElements.define("skill-card", skillCard);
