import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav 
        class="navbar is-shady"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
           
            <span class="navbar-item">
              <a href="/">
                <img src="../assets/icon/edu.png" width="50" height="120"/>
                <span></span></a>
                <span><b>SPI-ADMINISTRATION</b></span> 
            </span>                
            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-content"
              onClick={() => this.toggleBurger()}
              ref={el => (this.burger = el)}>
              <span aria-hidden="true" />
              
            </a>
            
          </div>

          <div
            id="navbar-content"
            class="navbar-menu"
            ref={el => (this.menu = el)} >

            <div class="navbar-start">
              
            </div>

            <span class="navbar-item">
                <stencil-route-link url="/formation/" activeClass="none">
                  <span class="has-text-primary fa-lg">
                    <i class="fas fa-tools" />
                  </span>{" "}
                  Formation
                </stencil-route-link>
              </span>

            <span class="navbar-item">
                <stencil-route-link url="/ens/" activeClass="none">
                  <span class="has-text-primary">
                    <i class="fas fa-user-alt fa-lg"></i>
                  </span>{" "}
                  Enseignant
                </stencil-route-link>
              </span>

            <span class="navbar-item">
                <stencil-route-link url="/candidat/" activeClass="none">
                  <span class="has-text-primary fa-lg">
                    <i class="fas fa-graduation-cap"></i>
                  </span>{" "}
                  Candidat
                </stencil-route-link>
              </span>

              <span class="navbar-item">
                <stencil-route-link url="/promotion/" activeClass="none">
                  <span class="has-text-primary fa-lg">
                    <i class="fas fa-book"></i>

                  </span>{" "}
                  Promotion
                </stencil-route-link>
              </span>
              <span class="navbar-item">
              
              <stencil-route-link url="/login" >
              <a class="button is-small is-primary is-outlined" href="/login">
              <p class="control">
										<span class="icon">
											<i class="fa fa-user"></i>
										</span>
										<span>Login</span>
									
								</p>
                </a>
                </stencil-route-link>
                </span>

          </div>
        </div>
      </nav>
    );
  }
}


