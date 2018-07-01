import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GithubService} from '../../services/github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  user: string;

  @Output() talk: EventEmitter<string> = new EventEmitter<string>();

  constructor(private githubService: GithubService) { }

  onClick(usernameInputValue: string) {
    this.user = usernameInputValue;
    this.talk.emit(usernameInputValue);
  }

}
