import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  trails: any = [
  ];

  constructor() { }

  add(label: string, path: string) {
    console.log(label + " : " + path);
    this.trails.push({ label, path });
  }
}
