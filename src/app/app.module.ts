import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { RegistercompComponent } from './registercomp/registercomp.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { RatingcompComponent } from './ratingcomp/ratingcomp.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogincompComponent,
    RegistercompComponent,
    DashboardComponent,
    HomeComponent,
    ListProductsComponent,
    ProductcardComponent,
    RatingcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    AngularFireAuthModule,
    NgbRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
