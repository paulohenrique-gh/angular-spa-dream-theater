import { Track } from "./track";


export interface Album {
    id: number;
    title: string;
    description: string;
    releaseYear: number;
    tracks: Track[];

}
