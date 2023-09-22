import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudvidPage } from './audvid.page';

const routes: Routes = [
  {
    path: '',
    component: AudvidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudvidPageRoutingModule {}
