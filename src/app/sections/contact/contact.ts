import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm: FormGroup;
 submitted = false;
 constructor(private fb: FormBuilder) {
   this.contactForm = this.fb.group({
     name: [
       '',
       [
         Validators.required,
         Validators.minLength(2)
       ]
     ],
     email: [
       '',
       [
         Validators.required,
         Validators.email
       ]
     ],
     subject: [
       '',
       [
         Validators.required,
         Validators.minLength(3)
       ]
     ],
     message: [
       '',
       [
         Validators.required,
         Validators.minLength(10)
       ]
     ]
   });
 }

 get name() {
   return this.contactForm.get('name');
 }

 get email() {
   return this.contactForm.get('email');
 }

 get subject() {
   return this.contactForm.get('subject');
 }

 get message() {
   return this.contactForm.get('message');
 }

 onSubmit(): void {
   this.submitted = true;
   if (this.contactForm.invalid) {
     this.contactForm.markAllAsTouched();
     return;
   }

   console.log(
     'Contact Form:',
     this.contactForm.value
   );
   alert(
     'Thank you for reaching out. I will get back to you soon.'
   );
   this.contactForm.reset();
   this.submitted = false;
 }

}
