import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JoueurComponent } from "./joueur/joueur.component";
import { EquipeComponent } from "./equipe/equipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    JoueurComponent,
    EquipeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
