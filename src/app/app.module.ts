import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/search/search.component';
import { AboutComponent } from './component/about/about.component';
import { ArtistComponent } from './component/artist/artist.component';
import { AlbumComponent } from './component/album/album.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

import { SpotifyService } from './service/spotify.service';

const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: '**', component: PageNotFoundComponent }   
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent,
    PageNotFoundComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
