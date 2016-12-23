import { Component } from '@angular/core';
import { Artist } from '../../interface/artist.model';

import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  
})
export class SearchComponent {
  private searchStr: string ='';
  private searchRes: Artist[];

  constructor(private _spotifyService: SpotifyService){}

  onSearchMusic(){
    this._spotifyService.searchArtist(this.searchStr).subscribe(
      res => {
        this.searchRes = res.artists.items;
      }
    )
  }
}
