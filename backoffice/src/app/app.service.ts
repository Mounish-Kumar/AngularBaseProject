import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  showLoader: boolean = false;

  isItalian: boolean = true;

  constructor() {
  }

  changeLanguage(e: any) {
    console.log(this.isItalian);
  }
}
