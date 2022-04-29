import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'socket.io-client'
import { ChatComponent } from './components/chat/chat.component';

@Component({
	selector: 'app-detective',
	templateUrl: './detective.component.html',
	styleUrls: ['./detective.component.css']
})
export class DetectiveComponent implements OnInit {
	guessed_word: string;
	image_uri: string;
	@Input() userid: string;
	@Input() socket: Socket;
	@ViewChild('chatchild') chat_child: ChatComponent;

	constructor() {
	}

	ngOnInit(): void {
		this.socket.on(
			'art-addpic',
			(data: string) => {
				let json_data: JSON = JSON.parse(data);
				let word = json_data['word'];
				this.chat_child.addMessage(word);
			}
		)

		this.socket.on(
			'all-setpic',
			(data: string) => {
				this.image_uri = data;
			}
		);

		this.socket.on(
			'winner',
			(data: string) => {
				if (data === this.userid) {
					console.log('I won!');
				}
				else {
					// TODO: Implement this
					// stop playing
				}
			}
		)
	}

	onSubmitGuess(): void {
		this.socket.emit(
			'wordguess',
			{
				"word": this.guessed_word
			}
		)
	}
}
