const h = window.App.h;

class DetailSearch {
    componentWillLoad() {
        return fetch(`https://api-dosispi.cleverapps.io/enseignants/nom/${this.match.params.nom}`)
            .then(response => response.json())
            .then(AllEns => {
            this.data = AllEns;
            console.log(this.data);
        });
    }
    render() {
        if (this.data && this.data.length > 0) {
            return (h("div", { class: "container" },
                h("div", { class: "hero-body has-text-centered" },
                    h("h3", { class: "title is-2" }, "Les enseignants "),
                    h("h4", { class: "subtitle is-5" }, "Universit\u00E9 de Bretagne Occidentale "),
                    h("stencil-route-link", { url: `/ens/NewEnseignant` },
                        h("span", { class: "button is-primary is-rounded  is-medium" },
                            h("span", { class: "icon" },
                                h("i", { class: "fas fa-plus" })),
                            h("span", null, "Ajouter Enseignant"))),
                    h("br", null),
                    h("br", null,
                        h("br", null))),
                h("div", { class: "row columns is-multiline" }, this.data.map((data) => h("div", { class: "column is-4" },
                    h("div", { class: "card" },
                        h("div", { class: "card-image" },
                            h("figure", { class: "image is-4by3" },
                                h("img", { src: "../assets/icon/prof2.png", alt: "Placeholder image" }))),
                        h("div", { class: "card-content" },
                            h("div", { class: "media" },
                                h("div", { class: "media-left" },
                                    h("figure", { class: "image is-48x48" },
                                        h("img", { src: "https://bulma.io/images/placeholders/96x96.png", alt: "Placeholder image" }))),
                                h("div", { class: "media-content" },
                                    h("p", { class: "title is-4" },
                                        data.nom,
                                        "  ",
                                        data.prenom),
                                    h("p", { class: "subtitle is-6" },
                                        data.emailUbo,
                                        " "))),
                            h("div", { class: "content" },
                                h("b", null, "Adresse:"),
                                "    ",
                                data.adresse,
                                " ",
                                h("br", null),
                                h("b", null, "T\u00E9l\u00E9phone:"),
                                "    ",
                                data.telephone,
                                " ",
                                h("br", null),
                                h("b", null, "Pays:"),
                                "     ",
                                data.pays)),
                        h("footer", { class: "card-footer" },
                            h("stencil-route-link", { class: "card-footer-item", url: `/ens/${data.noEnseignant}` },
                                h("span", null,
                                    " ",
                                    h("i", { class: "fas fa-plus" }),
                                    " D\u00E9tails"))))))),
                " ",
                h("br", null)));
        }
        else {
            return (" Couldn't render the data!!!! ops ");
        }
    }
    static get is() { return "detail-search"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "match": {
            "type": "Any",
            "attr": "match"
        }
    }; }
}

export { DetailSearch };
