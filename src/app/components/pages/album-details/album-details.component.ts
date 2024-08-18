import { Component, OnInit } from '@angular/core';
import { Album } from '../../../models/album';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../../services/album.service';
import { CommonModule } from '@angular/common';
import { TracklistComponent } from '../../tracklist/tracklist.component';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [CommonModule, TracklistComponent],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css',
})
export class AlbumDetailsComponent implements OnInit {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('albumId');
    this.albumService.getAlbumById(Number(albumId)).subscribe({
      next: (data) => this.album = data,
      error: (error) => console.error(error)
    });
  }
}
