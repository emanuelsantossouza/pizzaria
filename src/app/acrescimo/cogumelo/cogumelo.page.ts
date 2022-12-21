import { IPizzaAcrescimo } from './../models/IPizzaAcrescimo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cogumelo',
  templateUrl: './cogumelo.page.html',
  styleUrls: ['./cogumelo.page.scss'],
})
export class CogumeloPage implements OnInit {

  listaAcrescimo: IPizzaAcrescimo[] = [
    {
      cartaz: 'https://www.pingodoce.pt/wp-content/uploads/2020/03/pizza-massa-integral-cogumelos.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
