import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private trainees: any[] = [];

  setTrainees(trainees: any[]): void {
    console.log('Setting trainees:', trainees); // Debug log
    this.trainees = trainees;
  }

  getTrainees(): any[] {
    console.log('Getting trainees:', this.trainees); // Debug log
    return this.trainees;
  }
}
