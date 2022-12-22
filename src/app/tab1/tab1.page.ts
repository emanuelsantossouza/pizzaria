import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { IPizza } from '../models/IPizza.models';
import { Router } from '@angular/router';
import { IPizzaAcrescimo } from '../acrescimo/models/IPizzaAcrescimo';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  listaPizza: IPizza[] = [
    {
      nomePizza: 'Calabresa',
      cartaz: 'https://t4.ftcdn.net/jpg/02/96/96/71/360_F_296967135_DAjY06XgRvqzYr3WYzHvmQp4C66QxM00.jpg',
      incredientes: ['Calabresa', 'Cebola', 'Azeitona', 'Orégano', 'Azeite'],
      routa: '/calabre'
    },
    {
      nomePizza: 'Cogumelo',
      cartaz: 'https://www.pingodoce.pt/wp-content/uploads/2020/03/pizza-massa-integral-cogumelos.jpg',
      incredientes: ['Cogumelo', 'Mussarela', 'Pimenta', 'Calabresa'],
      routa: '/cogumelo'
    },
    {
      nomePizza: 'Pepperoni',
      cartaz: 'https://www.mulherportuguesa.com/wp-content/uploads/2016/10/Receita-de-Pizza-Pepperoni.jpg',
      incredientes: ['Salame', 'Italiano', 'Pimentão em Rodelas'],
      routa: '/pepperoni'
    },
    {
      nomePizza: 'Mussarela',
      cartaz: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/07/37/73/pizza-gran-queijo-mussarela.jpg',
      incredientes: ['Mussarela', 'Requeijão', 'Tomate', 'e', 'Orégano'],
      routa: '/mussarela'
    },
    {
      nomePizza: 'Frango',
      cartaz: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2019/08/Pizza_frango_requeijao-1.jpg',
      incredientes: ['Frango', 'Tomate', 'Queijo', 'Pimentão', 'Pimenta'],
      routa: '/frango'
    },
    {
      nomePizza: 'Veganinha',
      cartaz: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/04/Pizza-vegana.jpg',
      incredientes: ['Azeite', 'Queijo', 'Azeitona', 'Cocumelo', 'pimentão'],
      routa: '/veganinha'
    }
  ];
  data: any;
  results: any;

  constructor(
    public dadosService: DadosService,
    public route: Router) { }

  exibirPizza(pizza: IPizzaAcrescimo) {
    this.dadosService.guardaDados('pizza', pizza);
    this.route.navigateByUrl('/dados-pizza');
  }
}
