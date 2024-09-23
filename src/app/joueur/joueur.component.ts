import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JoueurService } from '../joueur.service';
import { Joueur } from '../models/joueur';

@Component({
  selector: 'app-joueur',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,

  ],
   templateUrl: './joueur.component.html',
   styleUrl: './joueur.component.scss'
})
export class JoueurComponent implements OnInit {

  joueurs: Joueur[] = [];
  newJoueur: Joueur = {prenom: '', nom: '', image: '' }; // Initialiser un nouveau joueur


  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.getJoueurs();
  }

  // Récupérer tous les joueurs
  getJoueurs(): void {
    this.joueurService.getJoueurs().subscribe(joueurs => {
      this.joueurs = joueurs;
    });
  }

  // Ajouter un nouveau joueur
  addJoueur(): void {
    this.joueurService.addJoueur(this.newJoueur).subscribe(() => {
      this.getJoueurs(); // Rafraîchir la liste après l'ajout
      this.newJoueur = {prenom: '', nom: '', image: '' }; // Réinitialiser le formulaire
    });
  }

  // Supprimer une équipe
  deleteJoueur(id: number): void {
    this.joueurService.deleteJoueur(id).subscribe(() => {
      this.getJoueurs(); // Rafraîchir la liste après la suppression
    });
  }
}
