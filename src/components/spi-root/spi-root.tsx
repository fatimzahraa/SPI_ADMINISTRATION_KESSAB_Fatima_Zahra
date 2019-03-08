import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        
        
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="spi-home" exact={true} />
            <stencil-route url="/ens/NewEnseignant" component="add-ens" exact={true}/>

            <stencil-route url="/ens/" component="spi-enseignant" exact={true} />
            <stencil-route url="/ens/:noEnseignant" component="detail-enseignant"/>
            
            <stencil-route url="/login" component="spi-login"/>


            <stencil-route url="/formation" component="spi-formation" />
            <stencil-route url="/candidat" component="spi-candidat" />
            <stencil-route url="/promotion" component="spi-promotion" />

            </stencil-route-switch>
          </stencil-router>
      
      </div>
    );
  }
}

<main class="container"></main>
