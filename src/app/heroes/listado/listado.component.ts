import { Component, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] =['spiderman', 'huk', 'batman', 'gonzalo'];
  heroeBorrado:string = '';


  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Heroe Borrado..');

  }

}

