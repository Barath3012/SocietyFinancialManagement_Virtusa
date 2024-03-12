import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import fam from './data.json' ;


interface Family{
  id: string,
  Name: string;
  Members: number;
  Rent: number;
  Carpark:string;
  Phonenumber:number;
}
console.log(fam);
@Component({
  selector: 'app-root',
  imports:[FormsModule,CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textInput: string = '';
  fam: Family[] = fam;
}


