import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';
import { Equipe } from '../models/equipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [
      CommonModule,
      FormsModule
  ],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent implements OnInit {

  equipes: Equipe[] = [];
  newEquipe: Equipe = {nom: '', championnat: '' }; // Initialiser une nouvelle équipe

  constructor(private equipeService: EquipeService) {}

  ngOnInit(): void {
    this.getEquipes();
  }

    // Récupérer toutes les équipes
    getEquipes(): void {
      this.equipeService.getEquipes().subscribe(equipes => {
        this.equipes = equipes;
      });
    }
  
    // Ajouter une nouvelle équipe
    addEquipe(): void {
      this.equipeService.addEquipe(this.newEquipe).subscribe(() => {
        this.getEquipes(); // Rafraîchir la liste après l'ajout
        this.newEquipe = {nom: '', championnat: '' }; // Réinitialiser le formulaire
      });
    }
  
    // Supprimer une équipe
    deleteEquipe(id: number): void {
      this.equipeService.deleteEquipe(id).subscribe(() => {
        this.getEquipes(); // Rafraîchir la liste après la suppression
      });
    }


}
