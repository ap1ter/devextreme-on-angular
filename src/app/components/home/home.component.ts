import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title: string;

    constructor() {
        this.title = 'Hello';
    }

    public say() {
        alert('Hello, Andrey!');
    }
}
