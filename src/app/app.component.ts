import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  name: string = '';

  log(eventType: 'blur' | 'focus'): void {
    console.log(eventType);
  }
}
