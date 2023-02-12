import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { RegistercompComponent } from './registercomp/registercomp.component';
import { AuthGuard } from './service/auth.guard';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {path: 'login', component: LogincompComponent},
  {path: 'register', component: RegistercompComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent,  canActivate:[AuthGuard]},
  {path: 'products', component: ListProductsComponent},
  {path: 'products/all', component: ListProductsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
