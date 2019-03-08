import { Component } from '@stencil/core';


@Component({
    tag: 'add-ens',
    styleUrl: 'add-ens.scss'
})
export class AddEns {

  nom: string;
  prenom: string;
  adresse: string;
  codePostal: string;
  emailUbo: string;
  pays: string;
  telephone: string;
  sexe: string;
  ville : string

  creerEnseignant(e) {
    e.preventDefault();
    console.log("!");
    const nom = this.nom;
    const prenom = this.prenom;
    const adresse = this.adresse;
    const codePostal = this.codePostal;
    const emailUbo = this.emailUbo;
    const pays = this.pays;
    const telephone = this.telephone;
    const sexe = this.sexe;
    const ville = this.ville;

    const payload = {
      nom,
      prenom,
      adresse,
      codePostal,
      emailUbo,
      pays,
      telephone,
      sexe,
      ville

    };
    
   
   
    

    fetch("https://api-dosispi.cleverapps.io/enseignants", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }

    render() {
        return (
            <section class="section">
            <div class="container">
             <div class="section-heading">
                <h3 class="title is-2 ">Ajouter un nouveau enseignant</h3>
                
            </div>
        <br/><br/>
  
         <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="box">
            <form>
            <div class="field">
                <label class="label">Nom </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Entrer le nom de l'enseignant" name="nom" value="" onChange={(e:any) => (this.nom= e.target.value)}/>
                </div>
              </div>
  
              <div class="field">
                <label class="label">Prénom </label>
                <div class="control">
                  <input class="input " type="text" placeholder="Entrer le prenom de l'enseignant" name="prenom" value="" onChange={(e:any) => (this.prenom= e.target.value)}/>
                </div>
              </div>
  
              <div class="field">
                <label class="label ">Email de Ubo </label>
                <div class="control has-icons-left">
                  <input class="input" type="email" placeholder="Email " name="emailUbo" value="" onChange={(e:any) => (this.emailUbo= e.target.value)}/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
  
              <div class="field">
                <label class="label">Numéro de téléphone</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Enter le numéro de téléphone" name="telephone" value="" onChange={(e:any) => (this.telephone= e.target.value)}/>
                </div>
              </div>
  
              <div class="field">
                <label class="label ">Adresse de l'enseignant</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Enter l'adresse'de l'enseignant" name="adresse" value="" onChange={(e:any) => (this.adresse= e.target.value)}/>
                </div>
              </div>
  
              <div class="field">
                <label class="label ">Code postale </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Enter code postale" name="codePostal" value="" onChange={(e:any) => (this.codePostal= e.target.value)}/>
                </div>
              </div>
  
              <div class="field">
                <label class="label">Ville </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Enter code postale" name="ville" value="" onChange={(e:any) => (this.ville= e.target.value)}/>
                </div>
              </div>
  
              <div class="field">
                <label class="label ">Pays </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Enter le pays" name="codePostal" value="" onChange={(e:any) => (this.pays= e.target.value)}/>
                </div>
              </div>
  
          <div class="field is-grouped has-text-centered">
                <div class="control">
                <stencil-route-link url="/ens/" class="center">  
                     <button type="submit" class="button is-success" onClick={this.creerEnseignant.bind(this)}> 
                     <span class="icon">
                        <i class="fas fa-envelope"></i>
                     </span>
             <span>Ajouter </span></button>
          </stencil-route-link>
                  
                </div>
                <div class="control">
                
                <button type="reset" class="button is-link " value="Reset"><span>Cancel</span></button>
        
                  
                </div>

                 <div class="control">
                <stencil-route-link url="/ens/" class="center">  
                              <button class="button is-warning" >Retour</button> 
                           </stencil-route-link>
                           </div>


              </div>
  
              </form>
            </div>
            </div>
          </div>
          </div>
          </section>

        );
    }
 }