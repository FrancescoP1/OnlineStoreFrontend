import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincompComponent } from './logincomp/logincomp.component';
import { RegistercompComponent } from './registercomp/registercomp.component';

const routes: Routes = [
  {path: 'login', component: LogincompComponent},
  {path: 'register', component: RegistercompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
