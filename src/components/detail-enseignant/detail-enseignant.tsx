import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';



@Component({
    tag: 'detail-enseignant',
    styleUrl: 'detail-enseignant.scss'
})
export class DetailEnseignant {
    @Prop() match: MatchResults;

    @Prop()   retour : RouterHistory;

    @State() data :any;  
        
        load() {
        
          fetch(`https://api-dosispi.cleverapps.io/enseignants/${this.match.params.noEnseignant}`).then(rsp => {
            return   rsp.json();
        
          }).then(data => {
            this.data = data;
            console.log(this.data)
        
          }).catch((err) => {
            console.error('Could not load data', err);
          }); 
        }
    

        componentWillLoad() { 
            console.log('Component is being rendered');
        
            this.load();
          }
  
          retourner(){
            this.retour.goBack();
          }

            
            deleteEnseignant(data) {
                return fetch("https://api-dosispi.cleverapps.io/enseignants/", { 
                    method: 'DELETE',
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                  
                })
                  .then(function(data) {
                    console.log(JSON.stringify(data));
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }

              
    render() {
        if(this.data != null) {
        return (
            <section class="section" id="enseignant">


<div class="hero-body has-text-centered">
<h3 class="title is-2">L'enseignant {this.data.nom} {this.data.prenom}</h3>
<h4 class="subtitle is-5">Université de Bretagne Occidentale </h4>

</div>


    {

        <div class="container portfolio-container">
             <div class="columns">
                  <div class="column is-12">
                    <div class="card">
                       <header class="card-header">
                      <p class="card-header-title">
                      <h3 class="title is-4">{this.data.nom}  {this.data.prenom}</h3>
                     </p>    
                    </header>
                     <div class="card-content">

                     

<div class="content">
  <table class="table-profile">
     <tr>
      <th>Nom:</th>
      <td>{this.data.nom}</td>
    </tr>
    <tr>
      <th>Prénom</th>
      <td>{this.data.prenom}</td>
    </tr>
    <tr>
      <th>Adresse:</th>
      <td>{this.data.adresse}</td>
    </tr>
    <tr>
      <th>Code postale</th>
      <td>{this.data.codePostal}</td>
    </tr>
    <tr>
      <th>Ville</th>
      <td>{this.data.ville}</td>
    </tr>
    <tr>
      <th>Pays:</th>
      <td>{this.data.pays}</td>
    </tr>
    <tr>
      <th>Email de UBO:</th>
      <td>{this.data.emailUbo}</td>
    </tr>
    <tr>
      <th>Téléphone:</th>
      <td> {this.data.telephone}</td>
    </tr>
    
    <tr>
      <th>Mobile:</th>
      <td>{this.data.mobile}</td>
    </tr>
    <tr>
      <th>Type:</th>
      <td>{this.data.type}</td>
    </tr>
    <tr>
      <th>Email Personnel:</th>
      <td>   {this.data.emailPerso}</td>
    </tr>
    
  </table>
</div>
</div>
                       
        
                    <footer class="card-footer">
                    
                    <stencil-route-link class="card-footer-item" url="/ens/" >    
                        <button class="button is-link" >Retour</button> 
                    </stencil-route-link>
                  
                

                     <stencil-route-link class="card-footer-item" url={`/ens/`}>   
                                     
                        <button class="button is-danger" onClick={() => this.deleteEnseignant(this.data)} ><span > <i class="fas fa-trash-alt"></i> Supprimer </span></button> 
                    </stencil-route-link>

                         
                      
                       
                     </footer>
                     </div>
                 </div>
        </div>
     </div>
        
    }

</section> 



         
            
            
        );
    }
}
}

        
        