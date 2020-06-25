import { Component, OnInit } from '@angular/core';
import { ConfigsLoaderService } from './configs-loader.service';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'configuration-demo';
  public webApiUrl: string;
  public configLoadedFrom: string;
  public ditto: any;


  constructor(
    private configService: ConfigsLoaderService,
    private pokemonService: PokemonService) {
    this.webApiUrl = configService.WebApiUrl;
    this.configLoadedFrom = configService.ConfigsLoadedFrom;
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemonDitto()
      .subscribe(ditto => this.ditto = ditto);
  }
}
