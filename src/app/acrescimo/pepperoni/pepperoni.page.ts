import { IPizzaAcrescimo } from './../models/IPizzaAcrescimo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pepperoni',
  templateUrl: './pepperoni.page.html',
  styleUrls: ['./pepperoni.page.scss'],
})
export class PepperoniPage implements OnInit {

  listaAcrescimo: IPizzaAcrescimo[] = [
    {
      cartaz: 'https://www.mulherportuguesa.com/wp-content/uploads/2016/10/Receita-de-Pizza-Pepperoni.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
