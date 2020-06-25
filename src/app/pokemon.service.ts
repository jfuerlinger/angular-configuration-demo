import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigsLoaderService } from './configs-loader.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
    private configuration: ConfigsLoaderService) {
  }

  public getPokemonDitto(): Observable<any> {
   return this.http.get(`${this.configuration.WebApiUrl}/pokemon/ditto`);//in your service class
  }
}
