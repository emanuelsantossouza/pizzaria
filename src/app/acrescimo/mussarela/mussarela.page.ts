import { IPizzaAcrescimo } from './../models/IPizzaAcrescimo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mussarela',
  templateUrl: './mussarela.page.html',
  styleUrls: ['./mussarela.page.scss'],
})
export class MussarelaPage implements OnInit {

  listaAcrescimo: IPizzaAcrescimo[] = [
    {
      cartaz: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/07/37/73/pizza-gran-queijo-mussarela.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
