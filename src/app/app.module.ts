import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DetectiveComponent } from './components/detective/detective.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistImageComponent } from './components/artist/components/artist-image/artist-image.component';
import { ChatComponent } from './components/detective/components/chat/chat.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DetectiveComponent,
		ArtistComponent,
		ArtistImageComponent,
		ChatComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		MatSliderModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatCardModule,
		MatDialogModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
