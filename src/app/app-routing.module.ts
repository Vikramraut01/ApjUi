import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileEditerComponent } from './profile-editer/profile-editer.component';

const routes: Routes = [
  {path:'',component:ProfileEditerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
