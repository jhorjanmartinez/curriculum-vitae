import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css',
})
export class MySkillsComponent {
  public skills: { name: string; porcentaje: string }[] = [
    { name: 'Typescript', porcentaje: '90%' },
    { name: 'Angular', porcentaje: '90%' },
    { name: 'Nestjs', porcentaje: '90%' },
    { name: 'PostgreSql', porcentaje: '90%' },
    { name: 'TailwindCss', porcentaje: '90%' },
    { name: 'Docker', porcentaje: '90%' },
  ];
}
