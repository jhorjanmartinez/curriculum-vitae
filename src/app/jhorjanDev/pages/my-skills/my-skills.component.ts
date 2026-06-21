import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css',
})
export class MySkillsComponent {
  public skills: { name: string; level: number }[] = [
    { name: 'Typescript', level: 2 },
    { name: 'Angular', level: 2 },
    { name: 'Nestjs', level: 1 },
    { name: 'PostgreSql', level: 1 },
    { name: 'TailwindCss', level: 3 },
    { name: 'Docker', level: 1 },
  ];
}
