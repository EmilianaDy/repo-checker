import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GithubService} from '../../services/github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {

  showError: boolean;

  @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private githubService: GithubService) {
    this.showError = false;
  }

  onClick(usernameInputValue: string) {
    if (!usernameInputValue) {
      this.showError = true;
      return;
    }
    this.showError = false;
    this.searchClicked.emit(usernameInputValue);
  }
}
