import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from '../../../models/subscription';
import { SubscriptionFormComponent } from "../../subscription-form/subscription-form.component";
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, SubscriptionFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isFormVisible: boolean = true;
  isConfirmationVisible: boolean = false;
  subscription: Subscription = {
    name: '',
    email: ''
  }

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.isFormVisible = this.formService.isVisible();
  }
}
