import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SpotifyService } from '../../service/spotify.service';
import { Artist, Album } from '../../interface/artist.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'

})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];
  constructor(private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) { }

  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe( (id) =>{
        this._spotifyService.getArtist(id).subscribe(artist => this.artist = artist);
        // this._spotifyService.getAlbums(id).subscribe(albums => this.albums = albums);
      });
    
    this._route.params
      .map(params => params['id'])
      .subscribe( (id) =>{
        this._spotifyService.getAlbums(id).subscribe(albums => this.albums = albums.items);
        // this._spotifyService.getAlbums(id).subscribe(albums => this.albums = albums);
      });


    
  }
}
