import { StorageService } from './../services/storage.service';
import { Usuario } from './../models/Usuario';
import { comparaValidator } from './../validators/compara-validators';
import { CpfValidator } from './../validators/cpf-validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formCadastro: FormGroup;
  usuario: Usuario = new Usuario();

  mensagens = {
    nome: [
      { tipo: 'required', mensagens: 'Digite um nome, Por favor!!' },
      { tipo: 'minlength', mensagens: 'No mínimo 3 dígitos, Por favor!! ' },
    ],
    email: [
      { tipo: 'required', mensagens: 'Digite um e-mail, Por favor!' },
      { tipo: 'email', mensagens: 'Tem que ser um e-mail!!' },
      { tipo: 'minlength', mensagens: 'No mínimo 6 dígitos!!' },
    ],
    cpf: [
      { tipo: 'required', mensagens: 'Digite um CPF, Por favor!' },
      { tipo: 'minlength', mensagens: 'Um CPF tem 11 Dígitos!' },
      { tipo: 'maxlength', mensagens: 'Um CPF tem 11 Dígitos!' },
    ],
    senha: [
      { tipo: 'required', mensagens: 'Digite uma senha, Por favor!' },
      { tipo: 'minlength', mensagens: 'No mínimo 8 dígitos!' },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagens: 'Confirme a senha!' },
      { tipo: 'minlength', mensagens: 'No mínimo 8 dígitos!' },
      { tipo: 'maxlength', mensagens: 'No mínimo 8 caracteres!' },
      { tipo: 'comparacao', mensagens: 'Deve ser igual a Senha!' },
    ],
  };
  toastController: any;


  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private router: Router) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cpf: ['', Validators.compose([Validators.required, CpfValidator.cpfValido])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }, {
      validator: comparaValidator('senha', 'confirmaSenha')
    }

    );
  }

  ngOnInit() {
  }

  salvarCadastro() {
    if (this.formCadastro.valid) {
      this.usuario.nome = this.formCadastro.value.nome;
      this.usuario.nome = this.formCadastro.value.email;
      this.usuario.nome = this.formCadastro.value.cpf;
      this.usuario.nome = this.formCadastro.value.senha;
      this.storageService.set(this.usuario.cpf, this.usuario);
      this.router.navigateByUrl('/tabs1');
      alert('Cadastro bem sucedido');
      console.log('Cadastro bem sucedido!');
    } else {
      alert('Campos Invalidos');
    }
  }

}

