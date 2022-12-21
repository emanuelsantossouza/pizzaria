import { IPizzaAcrescimo } from './../models/IPizzaAcrescimo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calabre',
  templateUrl: './calabre.page.html',
  styleUrls: ['./calabre.page.scss'],
})
export class CalabrePage implements OnInit {

  listaAcrescimo: IPizzaAcrescimo[] = [
    {
      cartaz: 'https://t4.ftcdn.net/jpg/02/96/96/71/360_F_296967135_DAjY06XgRvqzYr3WYzHvmQp4C66QxM00.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
