import { Component, State } from '@stencil/core';


@Component({
    tag: 'spi-promotion',
    styleUrl: 'spi-promotion.scss'
})
export class SpiPromotion {

    @State() data: any[];
    
    componentWillLoad() {
        return fetch("https://dosispi.cleverapps.io/promotions")
            .then(response => response.json())
            .then(AllPormation => {
                this.data = AllPormation;
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
                                <h3>Sigle Formation: {data.siglePromotion}</h3>
                                
                                <p> Lieu de rentrée : {data.lieuRentree}</p>
                                <p> Formation : {data.id.codeFormation}</p>

                                <h6>Année Universitaire: {data.id.anneeUniversitaire}</h6>
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