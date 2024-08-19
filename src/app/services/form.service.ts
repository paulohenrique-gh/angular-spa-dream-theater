import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private isFormVisible = true;

  hideForm(): void {
    this.isFormVisible = false;
  }

  isVisible(): boolean {
    return this.isFormVisible;
  }
}
