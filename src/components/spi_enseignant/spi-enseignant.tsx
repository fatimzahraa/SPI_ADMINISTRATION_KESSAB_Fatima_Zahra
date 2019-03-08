
import { Component, State } from '@stencil/core';


@Component({
    tag: 'spi-enseignant',
    styleUrl: 'spi-enseignant.scss'
})
export class SpiEnseignant {

    @State() data: any[];
    
    componentWillLoad() {
        return fetch("https://api-dosispi.cleverapps.io/enseignants")
            .then(response => response.json())
            .then(AllEns => {
                this.data = AllEns;
                console.log(this.data);
            });
    }render() {

        if (this.data && this.data.length > 0) {

            return (
                
              
            
                 <div class="container">

                <div class="hero-body has-text-centered">
                <h3 class="title is-2">Les enseignants </h3>
                <h4 class="subtitle is-5">Université de Bretagne Occidentale </h4>

                <stencil-route-link url={`/ens/NewEnseignant`} > 
                
                <span class="button is-primary is-rounded  is-medium">
                <span class="icon">
                     <i class="fas fa-plus"></i>
                     </span>
                    <span>Ajouter Enseignant</span>
                    </span>
                </stencil-route-link>
                <br></br><br><br></br></br>

                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input class="input has-text-centered" type="search" placeholder="Rechercher" />
                    </div>
                    <div class="control">
                    <stencil-route-link url={`/ens/`} > <a class="button is-info">Search</a></stencil-route-link>
                    </div>
                </div>
                  


                </div>
                <div class="row columns is-multiline">

                    {
                        this.data.map((data) =>
                                
                        

                <div class="column is-4">
                                                            <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/icon/prof2.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{data.nom}  {data.prenom}</p>
        <p class="subtitle is-6">{data.emailUbo} </p>
      </div>
    </div>

    <div class="content">
   
        
                                        <b>Adresse:</b>    {data.adresse} <br></br>
                                      <b>Téléphone:</b>    {data.telephone} <br></br>
                                     <b>Pays:</b>     {data.pays}  
     
    </div>
  </div>
  <footer class="card-footer">
                                    <stencil-route-link class="card-footer-item" url={`/ens/${data.noEnseignant}`} >   
                                        <span > <i class="fas fa-plus"></i> Détails</span>
                                     </stencil-route-link>

 
                                     </footer>
</div>
                                 </div> 
                       
                     
                        )
                    }
                 </div> <br></br>
           
           </div>
          

            )
            
        }
        else {

            return (" Couldn't render the data!!!! ops ");

        }

    }
}

                    