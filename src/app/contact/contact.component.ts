import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formContact = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    age: new FormControl(''),
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
    console.log(this.formContact.getRawValue());
  }
  
  onSubmit() {
    alert('Le formulaire est valide');
  }
}
