import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Usuario } from '../../app/models/Usuario';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  formulario;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {
    this.formulario = new FormGroup({
      nome: new FormControl("", Validators.required)
    });
  }

  submit() {
    let usuario = new Usuario();
    usuario.setNome(this.formulario.value.nome);

    let alert = this.alertCtrl.create({
      title: 'Validação',
      subTitle: 'O nome dele é ' + usuario.getNome(),
      buttons: ['OK']
    });
    alert.present();
  }

}
