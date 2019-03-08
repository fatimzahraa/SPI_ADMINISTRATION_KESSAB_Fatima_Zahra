const h = window.App.h;

class SpiCandidat {
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
            return (h("div", null, this.data.map((data) => h("div", null,
                h("h3", null,
                    "Nom : ",
                    data.nom),
                h("p", null,
                    " Prenom : ",
                    data.prenom),
                h("h6", null,
                    "No Candidat : ",
                    data.noEnseignant),
                h("hr", null)))));
        }
        else {
            return (" Couldn't render the data!!!! ops ");
        }
    }
    static get is() { return "spi-candidat"; }
    static get properties() { return {
        "data": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

export { SpiCandidat };
