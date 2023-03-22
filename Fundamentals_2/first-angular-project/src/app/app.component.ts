import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'first-angular-project';
	isAliveCheckSample: boolean = true;
	isAliveCard: boolean = true;

	disposeCheckSample(): void {
		this.isAliveCheckSample = !this.isAliveCheckSample;
	}
}
