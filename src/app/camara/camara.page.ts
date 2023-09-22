import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { NgModel } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  imageSource: string[] = [];
  formularioRegistro: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
    })};

  ngOnInit() {}

  async takePicture () {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
    if (image.dataUrl) {
      this.imageSource.push(image.dataUrl);
    }

  }
 
}
