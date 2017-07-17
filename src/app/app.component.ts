import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNav = 'recipes';

  onNavSelected(currentSelection: string) {
    this.selectedNav = currentSelection;
  }
}
