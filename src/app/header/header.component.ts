import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navSelectionEvent = new EventEmitter<string>();

  onNavSelect(userSelection: string) {
    this.navSelectionEvent.emit(userSelection);
  }
}
