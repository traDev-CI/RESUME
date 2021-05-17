class cardEdu extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =  `
    <article role="form" class="conta">
                <div class="wrapper">
                    <div class="no-gutters">
                        <div class="container-contact">
                            <div class="ajus">
                                <div class="container-form">
                                    <h1>Contact</h1>
                                    <form action="#">
                                        <div class="form-group">
                                            <input class="form-control" placeholder="Name" type="text" id="name" name="name" required>    
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control"placeholder="Email" type="email" name="email" id="email" placeholder="example@exam.domain" pattern="[A-Z][a-z]+s\[A-Z][a-z]+" required>   
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" name="message" id="message" cols="30" rows="5"  placeholder="Message" required></textarea>
                                        </div>
                                        <button  type="submit" style="padding: 5px; margin: 5px">Send</button>
                                    </form> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
`;

  }
}

window.customElements.define('card-education', cardEdu)
