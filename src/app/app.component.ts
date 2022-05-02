import { Component, ViewChild } from '@angular/core';
import { io, Socket } from 'socket.io-client'
import { ArtistComponent } from './components/artist/artist.component';

const states = {
	LAND: 0,
	ARTIST: 1,
	DET: 2
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string = 'frontend';
	state: number = states.LAND;
	userid: string;
	socket: Socket;
	chosen_word: string;
	@ViewChild('artchild') art_child: ArtistComponent;

	onLogin(json_object: JSON): void {
		let username: string = json_object['username'];
		let roomkey: string = json_object['roomkey'];
		this.userid = json_object['userid'];
		console.log(`username=${username}\nroomkey=${roomkey}\nuserid=${this.userid}`)
		this.socket = io('ws://localhost:3001', {
			query: {
				"username": username,
				"roomkey": roomkey,
				"userid": this.userid,
			}
		});

		let other_players: number = 0;
		let isArtist: boolean = false;
		this.socket.on(
			'players', (data: string) => {
				//console.log(data);
				let json_data = JSON.parse(data);
				console.log(json_data);
				for (let i = 0; i < json_data.length; ++i) {
					if (json_data[i]['userid'] !== this.userid) 
						other_players++;
					else  {
						isArtist = json_data[i]['isArtist'];
						console.log(isArtist);
					}
				}
				console.log(`There are ${other_players} players besides you`)
				this.state = (isArtist? states.ARTIST : states.DET);
			}
		);
		
		this.socket.on(
			'artist',
			(data: string) => {
				let json_data: JSON = JSON.parse(data);
				this.state = (json_data['artistid'] === this.userid? states.ARTIST : states.DET)
				if (this.state === states.ARTIST) {
					// this guy is chosen to be the artist
					while (this.chosen_word === undefined) {
						let user_response = window.prompt(`Pick one of\n${json_data['options'].join('\n')}`);
						this.chosen_word = (json_data['options'].includes(user_response)? user_response: undefined);
					}
					this.socket.emit('setword', { 'word': this.chosen_word, })
				}
			}
		)
	}
}
