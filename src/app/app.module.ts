import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './component/page1/page1.component';
import { Page2Component } from './component/page2/page2.component';
import { Page3Component } from './component/page3/page3.component';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componentHeroes/home/home.component';
import { AboutComponent } from './componentHeroes/about/about.component';
import { HeroesComponent } from './componentHeroes/heroes/heroes.component';
import { NavbarComponent } from './componentHeroes/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
