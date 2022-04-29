import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { io } from 'socket.io-client'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	room_key: string;
	username: string;
	userid: string;
	@Output() onLogin: EventEmitter<any> = new EventEmitter();

	private makeid = (length: number) => {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() *
				charactersLength));
		}
		return result;
	}

	constructor() { }

	ngOnInit(): void {
	}

	onClick(): void {
		this.userid = this.makeid(16);
		this.onLogin.emit(
			{
				"username": this.username,
				"roomkey": this.room_key,
				"userid": this.userid
			}
		)
	}
}
