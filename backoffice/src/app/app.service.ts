import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  showLoader: boolean = false;

  constructor() {
  }
}
