import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  shortenForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.shortenForm = this.fb.group({
      longUrl: ['', [Validators.required, Validators.pattern(/https?:\/\/.+/)]]
    });
  }

  shortenUrl(){
    if(this.shortenForm.valid){
      const url = this.shortenForm.value.longUrl;
      console.log(this.shortenForm.value);
    }
  }

}
