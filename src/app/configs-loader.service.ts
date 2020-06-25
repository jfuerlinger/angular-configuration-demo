import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigsLoaderService {

  private configs: Configuration;
  constructor(private http: HttpClient) {
  }
  get WebApiUrl() {
    return this.configs.WebApiUrl;
  }
  get ConfigsLoadedFrom() {
    return this.configs.ConfigLoadedFrom;
  }
  public async loadConfigs(): Promise<any> {
    console.log("loadConfigs() ....");
    return this.http.get('assets/config.json').pipe(settings => settings)
      .toPromise()
      .then(settings => {
        this.configs = settings as Configuration;
      });
  }
}

export interface Configuration {
  WebApiUrl: string;
  ConfigLoadedFrom: string
}
