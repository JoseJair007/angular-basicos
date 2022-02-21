import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{ title}}</h1>
            <h1>La base es de: <strong> {{base}}</strong></h1>


            <button (click)="acomular(base)" expand="block" > {{base}}</button>
            <span> {{numero}} </span>
            <button (click)="acomular(-base)" expand="block" >  {{base}} </button>
    `
})


export class ContadorComponent{

    title: string = 'Contador APP';
    numero: number =10;
    base: number =5;
  
  
    acomular(valor:number){
      this.numero += valor;
    }

}