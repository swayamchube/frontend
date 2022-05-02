import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	guess_list: string[] = [];

	constructor() { }

	ngOnInit(): void {
	}

	addMessage(guess: string): void {
		this.guess_list.push(guess);
	}
}
