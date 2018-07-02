import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GithubService} from '../../services/github.service';
import { User } from '../../models/UserModel';
import { RepoModel } from '../../models/RepoModel';
import { UserSearchComponent } from '../user-search/user-search.component';
import { CommitModel } from '../../models/CommitModel';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
  providers: [GithubService]
})
export class GithubComponent implements AfterViewInit {

  allRepos: RepoModel[];
  selectedRepo: string;

  user: User;
  showInfo: boolean;
  errorMessage: string;

  constructor(private githubService: GithubService) {
    this.showInfo = false;
  }

  ngAfterViewInit() {
    this
      .githubService
      .getUser('EmilianaDy')
      .subscribe((data: User) => {
        this.user = data;
        this.showAllUserRepos();
      },
      error => this.handleError(error));
  }


  onSearchClicked(username: string) {
    this
      .githubService
      .getUser(username)
      .subscribe((data: User) => {
        this.user = data;
        this.errorMessage = null;
        this.showAllUserRepos();
      },
      error => this.handleError(error));
  }

  showAllUserRepos() {
    this
      .githubService
      .getRepos(this.user.login)
      .subscribe((data: RepoModel[]) => {
        this.allRepos = data;
    },
    error => this.handleError(error));
  }

  showRepoInfo(event, repo: RepoModel) {
    if (this.selectedRepo === repo.name) {
      this.selectedRepo = null;
    } else {
      this.selectedRepo = repo.name;

      this
      .githubService
      .getLastCommits(this.user.login, repo.name)
      .subscribe((data) => {
        repo.lastCommit = data[0].commit;
      },
      error => this.handleError(error));
    }
  }

  handleError(error: any) {
    if (error && error.statusText) {
      this.errorMessage = error.statusText;
    } else {
      this.errorMessage = 'Unknown error';
    }
  }
}
