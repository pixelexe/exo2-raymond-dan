import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormData } from '../../interfaces/form-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private cdr: ChangeDetectorRef) {}

  formContact = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    age: new FormControl('', Validators.min(0)),
    hasEmail: new FormControl(false),
    email: new FormControl('',  Validators.email),
    commentaire: new FormControl('', Validators.required),
  });

  addMailValidator() {
    var emailControl = this.formContact.get('hasEmail');
    if (emailControl?.value) {
      this.formContact.get('email')?.addValidators(Validators.required);
      
    }
    else {
      this.formContact.get('email')?.removeValidators(Validators.required);
      this.formContact.get('email')?.setValue('');

    }
    this.cdr.detectChanges();
  }
  
  onSubmit() {
    let formData: FormData = {
      prenom: '',
      nom: '',
      age: 0,
      commentaire: '',
      email: null
    };

    formData.prenom = String(this.formContact.getRawValue().prenom);
    formData.nom = String(this.formContact.getRawValue().nom);
    formData.age = Number(this.formContact.getRawValue().age);
    formData.email = this.formContact.getRawValue().email;
    formData.commentaire = String(this.formContact.getRawValue().commentaire);
    localStorage.clear();
    localStorage.setItem('formAnswer', JSON.stringify(formData));

    alert('Le formulaire est valide');
  }
}
