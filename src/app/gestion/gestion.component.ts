import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {
  formAnswer: any;

  constructor(){
    const formData = localStorage.getItem('formAnswer');
    if (formData) {
      this.formAnswer = JSON.parse(formData);
    }
  }
}
