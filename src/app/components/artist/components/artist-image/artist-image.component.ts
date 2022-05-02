import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations'

@Component({
	selector: 'app-artist-image',
	templateUrl: './artist-image.component.html',
	styleUrls: ['./artist-image.component.css'],
	animations: [
		trigger('change', [
			transition('* => void', [
				animate(1000, style({
					opacity: 0,
				})),
			]),
			transition('void => *', [
				animate(1000, style({
					opacity: 1,
				}))
			]),
		]),
	]
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
