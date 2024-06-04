import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatSelectModule,MatInputModule,MatFormFieldModule,FlexLayoutModule,MatButtonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor(){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

}
