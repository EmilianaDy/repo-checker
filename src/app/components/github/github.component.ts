import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GithubService} from '../../services/github.service';
import { User } from '../../models/UserModel';
import { RepoModel } from '../../models/RepoModel';
import { UserSearchComponent } from '../user-search/user-search.component';
import { CommitModel } from '../../models/CommitModel';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})
export class GithubComponent implements AfterViewInit {

  allRepos: RepoModel[];
  selectedRepo: string;

  user: User;
  newUser: User;
  showInfo: boolean;

  @ViewChild(UserSearchComponent) child;

  constructor(private githubService: GithubService) {

    this.showInfo = false;

    this
      .githubService
      .getUser()
      .subscribe((data: User) => {
        this.user = data;
    });

    this.showAllUserRepos();

  }

  ngAfterViewInit() {
    this.user = this.child.usernameInputValue;
  }

  onClick() {
    this.newUser = this.child.user;

    this
      .githubService
      .updateService(this.newUser)
      .subscribe((data: User) => {
        this.user = data;
    });

    this.showAllUserRepos();
  }

  showAllUserRepos() {
    this
      .githubService
      .getRepos()
      .subscribe((data: RepoModel[]) => {
        this.allRepos = data;
    });
  }

  showRepoInfo(event, repo: RepoModel) {
    if (this.selectedRepo === repo.name) {
      this.selectedRepo = null;
    } else {
      this.selectedRepo = repo.name;

      this
      .githubService
      .getLastCommits(repo.name)
      .subscribe((data: CommitModel[]) => {
        repo.lastCommit = data[0];
    });
    }
  }

}
