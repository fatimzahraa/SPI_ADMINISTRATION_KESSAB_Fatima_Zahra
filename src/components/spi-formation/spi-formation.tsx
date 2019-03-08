import { Component, State } from '@stencil/core';


@Component({
    tag: 'spi-formation',
    styleUrl: 'spi-formation.scss'
})
export class SpiFormation {

    @State() data: any[];
    
    componentWillLoad() {
        return fetch("https://dosispi.cleverapps.io/formations")
            .then(response => response.json())
            .then(AllFormation => {
                this.data = AllFormation;
                console.log(this.data);
            });
    }
    render() {

        if (this.data && this.data.length > 0) {

            return (
                <section class="section">
                <div class="container">

                <div class="hero-body has-text-centered">
                <h3 class="title is-2">Les formations </h3>
                <h4 class="subtitle is-5">Département Informatique de l'UBO</h4>

                <stencil-route-link url={`/ens/NewEnseignant`} > 
                
                <span class="button is-primary is-rounded  is-medium">
                <span class="icon">
                     <i class="fas fa-plus"></i>
                     </span>
                    
                    </span>
                </stencil-route-link>

                
                <br></br><br><br></br></br>

            

                </div>
                <div class="row columns is-multiline">

{
    this.data.map((data) =>
            
    

    <div class="column is-4">

        <div class="box">
            <div class="content">
              <h4 class="title is-5"><span class="has-text-primary fa-lg">
                    <i class="fas fa-tools" />
                  </span>{"   "}Formation {data.codeFormation} </h4>
                  {data.nomFormation} <br></br>
                  
            </div>
          </div>



                                                            
                                 </div> 
                       
                     
                        )
                    }
                 </div> <br></br>
           
           </div>
           </section>
          
             ) }
        else {

            return (" Couldn't render the data!!!! ops ");

        }

    }
}