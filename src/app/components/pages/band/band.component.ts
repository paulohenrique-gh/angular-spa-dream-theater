import { Component, OnInit } from '@angular/core';
import { BandMember } from '../../../models/band-member';
import { BandMemberService } from '../../../services/band-member.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-band',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './band.component.html',
  styleUrl: './band.component.css'
})
export class BandComponent implements OnInit {
  bandMembers: BandMember[] = [];

  constructor(private bandMemberService: BandMemberService) {}

  ngOnInit(): void {
    this.loadBandMembers();
  }

  loadBandMembers(): void {
    this.bandMemberService.getAllBandMembers().subscribe(
      {
        next: (data) => this.bandMembers = data,
        error: (error) => console.error(error)
      }
    );
  }
}
