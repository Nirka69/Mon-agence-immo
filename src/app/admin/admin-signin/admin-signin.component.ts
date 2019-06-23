import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';     // rajouter NgForm pour le mode template et l enlever pour le mode réactive
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.scss']
})
export class AdminSigninComponent implements OnInit {

  adminSignInForm: FormGroup;     // à rajouter pour le formulaire méthode réactive.
  errMsg: string;

  constructor(private formBuilder: FormBuilder, 
              private authenticationService: AuthenticationService,       // à rajouter pour le formulaire méthode réactive (private formBuilder: FormBuilder).
              private router: Router) { }    


  ngOnInit() {
    this.initForm();     // à rajouter pour le formulaire méthode réactive.
  }


  // à rajouter pour le formulaire méthode réactive.

  initForm() {     
    this.adminSignInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }


  // Formulaire méthode réactive

  onAuth() {     
    const email = this.adminSignInForm.get('email').value;
    const password = this.adminSignInForm.get('password').value;
    this.authenticationService.signInUser(email, password).then( () => {
      this.router.navigate(['/admin', 'dashboard']);
    },
    (error) => {
      this.errMsg = error;
      alert(this.errMsg);
    }
    );
  }


  // FORMULAIRE METHODE TEMPLATE
  
  // onAuth(form: NgForm) {
  //   const email = form.value['email'];
  //   const password = form.value['password'];
  //   console.log(email + ' ' + password);
  // }

}
