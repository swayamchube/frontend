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
	@Input() _func: any;
	@ViewChild('chatchild') chat_child: ChatComponent;
	timer: number = 0;

	constructor() {
		setInterval(() => {if (this.timer > 0) this.timer--;}, 1000);
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
				if (data === '-1') {
					// time's up. display a suitable message
					window.alert('Time up');
				}
				else if (data === this.userid) {
					console.log('I won!');
					clearInterval(this._func);
				}
				else {
					// TODO: Implement this
					// stop playing
				}
			}
		)
	}

	onSubmitGuess(): void {
		if (this.timer != 0) {
			window.alert("you're in cooldown");
			return;
		}
		else {
			this.socket.emit(
				'wordguess',
				{
					"word": this.guessed_word
				}
			);
			this.timer = 3;
		}
	}
}
