import { IPizzaAcrescimo } from './../models/IPizzaAcrescimo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veganinha',
  templateUrl: './veganinha.page.html',
  styleUrls: ['./veganinha.page.scss'],
})
export class VeganinhaPage implements OnInit {

  listaAcrescimo: IPizzaAcrescimo[] = [
    {
      cartaz: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/04/Pizza-vegana.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
