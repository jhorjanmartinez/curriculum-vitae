import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, OnDestroy {

  public isOpen: boolean = false
  private typingTimeoutId?: ReturnType<typeof setTimeout>;

  words: string[] = ['Frontend Developer', 'Developer', 'Fullstack Developer'];
  currentWord: string = '';
  wordIndex: number = 0;
  isDeleting: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.typeEffect()
  }

  ngOnDestroy(): void {
    if(this.typingTimeoutId){
      clearTimeout(this.typingTimeoutId)
    }
  }

typeEffect() {
    const currentFullWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      // Borrando letra por letra
      this.currentWord = currentFullWord.substring(0, this.currentWord.length - 1);
    } else {
      // Escribiendo letra por letra
      this.currentWord = currentFullWord.substring(0, this.currentWord.length + 1);
    }

    // Velocidades: Escribe normal (150ms), Borra rápido (50ms)
    let typeSpeed = this.isDeleting ? 50 : 150;

    if (!this.isDeleting && this.currentWord === currentFullWord) {
      // Si terminó de escribir, hace una pausa larga antes de borrar
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentWord === '') {
      // Si terminó de borrar, salta a la siguiente palabra y hace una micro pausa
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      typeSpeed = 500;
    }

    this.typingTimeoutId = setTimeout(() => this.typeEffect(), typeSpeed);
    // setTimeout(() => this.typeEffect(), typeSpeed);
  }

  menuOpen(){
    this.isOpen = !this.isOpen
  }


}
