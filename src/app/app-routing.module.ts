import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';

const routes: Routes = [
{path: "", component:LibraryComponent },
{path: "aboutus", component:AboutusComponent},
{path: "login", component:LoginComponent},
{path: "mylibrary", component:MylibraryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
