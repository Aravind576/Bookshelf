import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTreeModule} from '@angular/material/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";




@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    AboutusComponent,
    LoginComponent,
    MylibraryComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
