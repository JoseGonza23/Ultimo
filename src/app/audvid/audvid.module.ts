import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudvidPageRoutingModule } from './audvid-routing.module';

import { AudvidPage } from './audvid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudvidPageRoutingModule
  ],
  declarations: [AudvidPage]
})
export class AudvidPageModule {}
