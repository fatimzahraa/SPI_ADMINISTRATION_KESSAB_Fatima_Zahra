const h = window.App.h;

class DetailEnseignant {
    load() {
        fetch(`https://api-dosispi.cleverapps.io/enseignants/${this.match.params.noEnseignant}`).then(rsp => {
            return rsp.json();
        }).then(data => {
            this.data = data;
            console.log(this.data);
        }).catch((err) => {
            console.error('Could not load data', err);
        });
    }
    componentWillLoad() {
        console.log('Component is being rendered');
        this.load();
    }
    retourner() {
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
            .then(function (data) {
            console.log(JSON.stringify(data));
        })
            .catch(error => {
            console.log(error);
        });
    }
    render() {
        if (this.data != null) {
            return (h("section", { class: "section", id: "enseignant" },
                h("div", { class: "hero-body has-text-centered" },
                    h("h3", { class: "title is-2" },
                        "L'enseignant ",
                        this.data.nom,
                        " ",
                        this.data.prenom),
                    h("h4", { class: "subtitle is-5" }, "Universit\u00E9 de Bretagne Occidentale ")),
                h("div", { class: "container portfolio-container" },
                    h("div", { class: "columns" },
                        h("div", { class: "column is-12" },
                            h("div", { class: "card" },
                                h("header", { class: "card-header" },
                                    h("p", { class: "card-header-title" },
                                        h("h3", { class: "title is-4" },
                                            this.data.nom,
                                            "  ",
                                            this.data.prenom))),
                                h("div", { class: "card-content" },
                                    h("div", { class: "content" },
                                        h("table", { class: "table-profile" },
                                            h("tr", null,
                                                h("th", null, "Nom:"),
                                                h("td", null, this.data.nom)),
                                            h("tr", null,
                                                h("th", null, "Pr\u00E9nom"),
                                                h("td", null, this.data.prenom)),
                                            h("tr", null,
                                                h("th", null, "Adresse:"),
                                                h("td", null, this.data.adresse)),
                                            h("tr", null,
                                                h("th", null, "Code postale"),
                                                h("td", null, this.data.codePostal)),
                                            h("tr", null,
                                                h("th", null, "Ville"),
                                                h("td", null, this.data.ville)),
                                            h("tr", null,
                                                h("th", null, "Pays:"),
                                                h("td", null, this.data.pays)),
                                            h("tr", null,
                                                h("th", null, "Email de UBO:"),
                                                h("td", null, this.data.emailUbo)),
                                            h("tr", null,
                                                h("th", null, "T\u00E9l\u00E9phone:"),
                                                h("td", null,
                                                    " ",
                                                    this.data.telephone)),
                                            h("tr", null,
                                                h("th", null, "Mobile:"),
                                                h("td", null, this.data.mobile)),
                                            h("tr", null,
                                                h("th", null, "Type:"),
                                                h("td", null, this.data.type)),
                                            h("tr", null,
                                                h("th", null, "Email Personnel:"),
                                                h("td", null,
                                                    "   ",
                                                    this.data.emailPerso))))),
                                h("footer", { class: "card-footer" },
                                    h("stencil-route-link", { class: "card-footer-item", url: "/ens/" },
                                        h("button", { class: "button is-link" }, "Retour")),
                                    h("stencil-route-link", { class: "card-footer-item", url: `/ens/` },
                                        h("button", { class: "button is-danger", onClick: () => this.deleteEnseignant(this.data) },
                                            h("span", null,
                                                " ",
                                                h("i", { class: "fas fa-trash-alt" }),
                                                " Supprimer "))))))))));
        }
    }
    static get is() { return "detail-enseignant"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "match": {
            "type": "Any",
            "attr": "match"
        },
        "retour": {
            "type": "Any",
            "attr": "retour"
        }
    }; }
    static get style() { return "/**  sass error: File to import not found or unreadable: ../../../node_modules/bulma/sass/elements/table.sass .  **/"; }
}

export { DetailEnseignant };
