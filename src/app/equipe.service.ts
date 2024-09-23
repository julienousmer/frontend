import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from './models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private apiUrl = 'https://localhost:7224/api/Equipe';

  constructor(private http: HttpClient) { }

  // GET - Récupérer toutes les équipes
  getEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl);
  }

  // POST - Ajouter une équipe
  addEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl, equipe);
  }

  // PUT - Mettre à jour une équipe
  updateEquipe(id: number, equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.apiUrl}/${id}`, equipe);
  }

  // DELETE - Supprimer une équipe
  deleteEquipe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
