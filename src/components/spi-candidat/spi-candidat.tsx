import { Component, State } from '@stencil/core';


@Component({
    tag: 'spi-candidat',
    styleUrl: 'spi-candidat.scss'
})
export class SpiCandidat {

    @State() data: any[];
    
    componentWillLoad() {
        return fetch("https://dosispi.cleverapps.io/candidats")
            .then(response => response.json())
            .then(AllCan => {
                this.data = AllCan;
                console.log(this.data);
            });
    }
    render() {

        if (this.data && this.data.length > 0) {

            return (

                <div >
                    {
                        this.data.map((data) =>
                            <div>
                                <h3>Nom : {data.nom}</h3>

                                <p> Prenom : {data.prenom}</p>

                                <h6>No Candidat : {data.noEnseignant}</h6>
                                <hr />
                            </div>)
                    }

                </div>
            )

        }
        else {

            return (" Couldn't render the data!!!! ops ");

        }

    }
}

