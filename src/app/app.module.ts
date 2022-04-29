import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DetectiveComponent } from './components/detective/detective.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistImageComponent } from './components/artist/components/artist-image/artist-image.component';
import { ChatComponent } from './components/detective/components/chat/chat.component';
import { DetectiveImageComponent } from './components/detective/components/detective-image/detective-image.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetectiveComponent,
    ArtistComponent,
    ArtistImageComponent,
    ChatComponent,
    DetectiveImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
