import { Component, Input, OnInit } from '@angular/core';
import { Socket } from 'socket.io-client';

@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
	mainImageURI: string = 'https://i.imgur.com/8nLFCVP.png';
	image_uri: string[] = ['https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 'https://images.pexels.com/photos/3726525/pexels-photo-3726525.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 'https://images.pexels.com/photos/978947/pexels-photo-978947.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',];
	@Input() socket: Socket;
	constructor() { }

	ngOnInit(): void {
		this.socket.on(
			'art-addpic',
			(data: string) => {
				let json_data = JSON.parse(data);
				console.log('art-addpic');
				console.log(json_data);
				if (json_data['url'].length !== 0) {
					this.image_uri.push(json_data['url'])
					this.image_uri.splice(0, 1);
				}
			}
		);
	}

	onImageClick(uri: string) {
		this.mainImageURI = uri;
		let index: number = this.image_uri.findIndex((value) => (value === uri));
		this.socket.emit('setpic', { "url": uri, })
	}
}
