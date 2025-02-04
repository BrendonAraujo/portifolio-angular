import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProject } from '../../../interface/IProject';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule,],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    private _dialogRef : MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data : IProject
  ){

  }

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public getData = signal<IProject | null >(null)

  public closeModal(){
    this._dialogRef.close();
  }
}
