const h = window.App.h;

class SpiPromotion {
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
            return (h("div", null, this.data.map((data) => h("div", null,
                h("h3", null,
                    "Sigle Formation: ",
                    data.siglePromotion),
                h("p", null,
                    " Lieu de rentr\u00E9e : ",
                    data.lieuRentree),
                h("p", null,
                    " Formation : ",
                    data.id.codeFormation),
                h("h6", null,
                    "Ann\u00E9e Universitaire: ",
                    data.id.anneeUniversitaire),
                h("hr", null)))));
        }
        else {
            return (" Couldn't render the data!!!! ops ");
        }
    }
    static get is() { return "spi-promotion"; }
    static get properties() { return {
        "data": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

export { SpiPromotion };
