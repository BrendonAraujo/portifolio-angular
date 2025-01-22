import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProject } from '../../interface/IProject';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProject[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Fullstack life',
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Know blog',
          hre: ''
        }
      ]
    }
  ])
}
