import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public isOpen: boolean = false

  constructor(private renderer: Renderer2) {}



  menuOpen(){
    this.isOpen = !this.isOpen
  }


}
