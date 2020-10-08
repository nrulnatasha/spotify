import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AboutComponent } from '../about/about.component';
import { SearchComponent } from '../search/search.component';
import { SpotifyService } from '../app/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArtistComponent } from '../artist/artist.component';
import { AlbumBoxComponent } from '../album-box/album-box.component';
import { AlbumDetailsComponent } from '../album-details/album-details.component';
import { ResultBoxComponent } from '../result-box/result-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumBoxComponent,
    AlbumDetailsComponent,
    ResultBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }