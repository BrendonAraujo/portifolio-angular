import { Component, inject, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {


  public arrayExperiencies = signal<IExperience[]>([
    {
      summary:{
        strong: "Software Development Jr",
        p: "DC Logistics Brasil | April 2022 - now"
      },
      text : `
        <p></p>Delopment of softwares in Windows enviroment. <br> 
        Tencnologies: Delph, C#, Maker (Softwell Solutions - NO CODE) </p>
      `
    },
    {
      summary:{
        strong: "Logistics Software Implementation Consultor",
        p: "Escalasoft | May 2019 - March 2022"
      },
      text : `
        <p></p>Configuration of ERP and TMS sistems to companies. <br> 
        Help the costumers to get better process </p>
      `
    }
  ])
}
