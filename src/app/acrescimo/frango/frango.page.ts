import { Component, OnInit } from '@angular/core';
import { IPizzaAcrescimo } from '../models/IPizzaAcrescimo';

@Component({
  selector: 'app-frango',
  templateUrl: './frango.page.html',
  styleUrls: ['./frango.page.scss'],
})
export class FrangoPage implements OnInit {

  listaAcrescimo: IPizzaAcrescimo[] = [
    {
      cartaz: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2019/08/Pizza_frango_requeijao-1.jpg',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
