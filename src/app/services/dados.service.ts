import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  dados: any = [];

  constructor() { }

  guardaDados(index: string, dados: any): boolean {
    if (index) {
      this.dados[index] = dados;
      return true;
    } else {
      return false;
    }
  }

  pegarDados(index: string): any {
    if (index) {
      return this.dados[index];
    } else {
      return null;
    }
  }

  deletarDados(index: string): boolean {
    return delete this.dados[index];
  }
}
