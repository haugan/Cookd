import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectionEvent = new EventEmitter<string>();

  onNavSelect(userSelection: string) {
    this.selectionEvent.emit(userSelection);
  }
}
