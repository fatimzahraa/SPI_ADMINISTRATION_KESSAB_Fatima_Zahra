import { Component } from "@stencil/core";

@Component({
  tag: "spi-home",
  styleUrl: "spi-home.scss"
})
export class SpiHome {
  render() {
    return (
       
  <div>
      <section class="hero is-primary">
    <div class="hero-body has-text-centered">
    <p class="title">
    Bienvenue sur l'interface du SPI !
    </p>

  </div>
</section>
<section class="hero" id="sec">
        <figure class="image">
        <img src="../assets/icon/af.jpg"/>
            
        </figure>
    </section>
 
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="box">
            <div class="content">
              <h4 class="title is-5"><span class="has-text-primary fa-lg">
                    <i class="fas fa-tools" />
                  </span>{"   "}Formations</h4>
              Develop Front End formations using bulma standards with HTML5/CSS3 with added funtionality using JavaScript.
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <div class="content">
              <h4 class="title is-5"><span class="has-text-primary">
                    <i class="fas fa-user-alt fa-lg"></i>
                  </span>{"   "}Enseignanats</h4>
              Develop Front End Enseignants using bulma standards with HTML5/CSS3 with added funtionality using JavaScript.
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="box">
            <div class="content">
              <h4 class="title is-5"><span class="has-text-primary fa-lg">
                    <i class="fas fa-graduation-cap"></i>
                  </span>{"   "}Candidats</h4>
              Develop Front End candidats using bulma standards with HTML5/CSS3 with added funtionality using JavaScript.
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <div class="content">
              <h4 class="title is-5"><span class="has-text-primary fa-lg">
                    <i class="fas fa-book"></i>

                  </span>{"    "} Promotions</h4>
              Develop Front End Promotions using bulma standards with HTML5/CSS3 with added funtionality using JavaScript.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
 
      
    );
  }
}

<div class="spi-home">
        <div class="container is-large has-text-centered">
          <h1 class="title is-bold">Bienvenue sur l'interface du SPI !</h1>
          <h2 class="subtitle">Pour continuer veuillez-vous identifier.</h2>
        </div>
 </div>