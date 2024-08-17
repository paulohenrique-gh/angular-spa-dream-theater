import { Component, OnInit } from '@angular/core';
import { BandMember } from '../../../models/band-member';
import { ActivatedRoute } from '@angular/router';
import { BandMemberService } from '../../../services/band-member.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-band-member-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './band-member-details.component.html',
  styleUrl: './band-member-details.component.css',
})
export class BandMemberDetailsComponent implements OnInit {
  bandMember: BandMember | undefined;

  constructor(
    private route: ActivatedRoute,
    private bandMemberService: BandMemberService
  ) {}

  ngOnInit(): void {
    this.loadBandMember();
  }

  loadBandMember(): void {
    const memberId = this.route.snapshot.paramMap.get("memberId")
    this.bandMemberService.getBandMemberDetails(Number(memberId)).subscribe(
      {
        next: (data) => this.bandMember = data,
        error: (error) => console.error(error)
      }
    );
  }
}
