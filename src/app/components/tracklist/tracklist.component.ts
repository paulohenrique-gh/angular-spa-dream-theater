import { Component, Input } from '@angular/core';
import { Track } from '../../models/track';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracklist.component.html',
  styleUrl: './tracklist.component.css',
  host: {
    class: `flex h-fit max-h-full w-fit flex-grow flex-col gap-1 overflow-y-auto
            rounded border-2 border-gray-600 border-opacity-30 bg-zinc-950 p-2`,
  },
})
export class TracklistComponent {
  @Input() tracks: Track[] = [];
}
