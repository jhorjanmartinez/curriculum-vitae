import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './jhorjanDev/pages/home-page/home-page.component';
import { AboutMePageComponent } from './jhorjanDev/pages/about-me-page/about-me-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
