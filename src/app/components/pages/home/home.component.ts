import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from '../../../models/subscription';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  isFormVisible: boolean = true;
  isConfirmationVisible: boolean = false;
  subscription: Subscription = {
    name: '',
    email: ''
  }

  onSubmit(): void {
    this.isConfirmationVisible = true;
  }

  onClose(): void {
    this.isFormVisible = false;
  }
}
