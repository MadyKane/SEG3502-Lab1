import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculatrice } from './calculatrice/calculatrice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculatrice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab1-calculatrice');
}
