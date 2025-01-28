import { Component, inject, signal } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { IProject } from '../../interface/IProject';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  
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
  ]);

  public openDialog(data : IProject){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECT
    })
  }
}
