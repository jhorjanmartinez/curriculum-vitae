import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css',
})
export class MySkillsComponent {
  public skills: { name: string; level: number }[] = [
    { name: 'Typescript', level: 3 },  // Avanzado
    { name: 'Angular', level: 3 },     // Avanzado
    { name: 'Nestjs', level: 2 },      // Medio
    { name: 'PostgreSql', level: 2 },  // Medio
    { name: 'TailwindCss', level: 3 }, // Avanzado
    { name: 'Docker', level: 1 },      // Básico
  ];
}
