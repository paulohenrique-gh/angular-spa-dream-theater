import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from '../../models/subscription';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css'
})
export class SubscriptionFormComponent {
  isFormVisible: boolean = true;
  isConfirmationVisible: boolean = false;
  subscription: Subscription = {
    name: '',
    email: ''
  }

  constructor(private formService: FormService) {}

  onSubmit(): void {
    this.isConfirmationVisible = true;
  }

  onClose(): void {
    this.isFormVisible = false;
    this.formService.hideForm();
  }
}
