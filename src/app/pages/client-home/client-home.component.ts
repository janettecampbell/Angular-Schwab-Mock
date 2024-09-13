import { Component, ChangeDetectionStrategy, signal, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './client-home.component.html',
  styleUrl: './client-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientHomeComponent implements OnInit{
  constructor(private formBuilder: FormBuilder){}

  // Initialize FormGroup
  login = new FormGroup({
    loginID: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  // Show/Hide password
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.login = this.formBuilder.group({
      loginID: ["", Validators.required],
      password: ["", Validators.required]
    })
    
  }

  onSubmit () {
    this.login.markAllAsTouched();
    const isFormValid = this.login.valid;
    let isLoggedin = false;
    if (isFormValid) {
      
    }
    const loginValue = this.login.value;
    
  }
}
