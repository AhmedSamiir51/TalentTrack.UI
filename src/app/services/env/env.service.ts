import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  constructor() { }
  public APIUrl = "https://localhost:7068/api/"
}

