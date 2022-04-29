import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-artist-image',
	templateUrl: './artist-image.component.html',
	styleUrls: ['./artist-image.component.css']
})
export class ArtistImageComponent implements OnInit {
	@Input() m_uri: string;
	@Output() onImageClick: EventEmitter<string> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	onClick(): void {
		this.onImageClick.emit(this.m_uri);
	}
}
