import { IPizzaAcrescimo } from './../acrescimo/models/IPizzaAcrescimo';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pizza',
  templateUrl: './dados-pizza.page.html',
  styleUrls: ['./dados-pizza.page.scss'],
})
export class DadosPizzaPage implements OnInit {

  listaAcrescimo: IPizzaAcrescimo;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.listaAcrescimo = this.dadosService.pegarDados('pizza');
    console.log('Pizza enviada', this.listaAcrescimo);
  }

}
