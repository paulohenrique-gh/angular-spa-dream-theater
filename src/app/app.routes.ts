import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DiscographyComponent } from './components/pages/discography/discography.component';
import { BandComponent } from './components/pages/band/band.component';
import { AlbumDetailsComponent } from './components/pages/album-details/album-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Dream Theater - Home Page',
  },
  {
    path: 'discography',
    component: DiscographyComponent,
    title: 'Dream Theater - Discography',
  },
  {
    path: 'discography/:id',
    component: AlbumDetailsComponent,
  },
  {
    path: 'band',
    component: BandComponent,
    title: 'Dream Theater - Band',
  },
];
