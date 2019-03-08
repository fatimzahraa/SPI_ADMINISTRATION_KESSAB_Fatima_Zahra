import { Component } from '@stencil/core';


@Component({
    tag: 'spi-login',
    styleUrl: 'spi-login.scss'
})
export class SpiLogin {
    
    render() {
        return (
<div class="container">

<div class="hero-body has-text-centered">
            
                <div class="column is-4 is-offset-4">
                    <h3 class="title ">Se connecter</h3>
                    <p class="subtitle ">Vous devez se connecter pour accéder.</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="../assets/icon/ava.png"/>
                        </figure>
                        <br></br>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Email" autofocus=""/>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Mot de passe"/>
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox"/>
                  Se rappeller
                </label>
                            </div>
                            
                            <button class="button is-block is-primary is-large is-fullwidth">Se connecter</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">S'enregistrer</a> &nbsp;·&nbsp;
                        <a href="../">Mot de passe oublié</a> &nbsp;·&nbsp;
                        <a href="../">Aide?</a>
                    </p>
                </div>
            </div>
        </div>
 
       
        );
    }
}