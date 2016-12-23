import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SpotifyService } from '../../service/spotify.service';
import { Artist, Album } from '../../interface/artist.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
  
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];
  
  constructor(private _spotifyService: SpotifyService,
        private _route: ActivatedRoute) { }
  
  ngOnInit(){
    this._route.params
    .map(params => params['id'])
    .subscribe(album_id => {
      this._spotifyService.getAlbum(album_id)
      .subscribe(album => this.album = album )
    })
    
  }
  
}
