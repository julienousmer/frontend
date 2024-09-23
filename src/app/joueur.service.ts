import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joueur } from './models/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  private apiUrl = 'https://localhost:7224/api/Joueur';

  constructor(private http: HttpClient) { }


  // GET - Récupérer tous les joueurs
  getJoueurs(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(this.apiUrl);
  }

  // POST - Ajouter un joueur
  addJoueur(joueur: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(this.apiUrl, joueur);
  }

  // PUT - Mettre à jour un joueur
  updateJoueur(id: number, joueur: Joueur): Observable<Joueur> {
    return this.http.put<Joueur>(`${this.apiUrl}/${id}`, joueur);
  }

  // DELETE - Supprimer un joueur
  deleteJoueur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
