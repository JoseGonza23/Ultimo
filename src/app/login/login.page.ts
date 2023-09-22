import { Component, OnInit } from '@angular/core';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionLogin!: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router
    ){

    this.ionLogin! = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })


  }

  ngOnInit() {
  }

  async ingresar() {
    if (this.ionLogin!.valid) {
      // Acciones a realizar cuando el formulario es válido
      const nombre = this.ionLogin!.value.nombre;
      const password = this.ionLogin!.value.password;

      // Lógica de validación de credenciales
      if (nombre === "luci" && password === "1234") {
        // Credenciales válidas
        console.log("Credenciales válidas");
          this.router.navigate(['/home']);
        // Aquí puedes redirigir a la página deseada o realizar otras acciones

      } else {
        // Credenciales inválidas
        console.log("Credenciales inválidas");
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Credenciales inválidas. Por favor, inténtalo nuevamente.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      // El formulario no es válido
      console.log("Formulario inválido");

  
    }

  }
}
