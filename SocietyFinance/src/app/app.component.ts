// app.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule // <<<< And here
  ],
})

export class AppComponent {
  numberOfTimes: number = 0;
  helloArray: string[] = [];

  generateHelloWorlds() {
    this.helloArray = new Array(this.numberOfTimes).fill("Hello World");
  }
}
