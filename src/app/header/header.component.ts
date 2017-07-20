import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navSelectedEvent = new EventEmitter<string>();

  onNavSelect(userSelection: string) {
    this.navSelectedEvent.emit(userSelection);
  }
}
