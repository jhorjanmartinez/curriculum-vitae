import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './jhorjanDev/pages/home-page/home-page.component';
import { AboutMePageComponent } from './jhorjanDev/pages/about-me-page/about-me-page.component';
import { MySkillsComponent } from './jhorjanDev/pages/my-skills/my-skills.component';
import { MyProjectsComponent } from './jhorjanDev/pages/my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMePageComponent,
    MySkillsComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
