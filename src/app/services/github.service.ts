import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  gitHubUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {

   }

   getUser(username: string) {
    return this.http.get(this.gitHubUrl + '/users/' + username);
   }

   getRepos(username: string) {
    return this.http.get(this.gitHubUrl + '/users/' + username + '/repos');
   }

   getLastCommits(username: string, repoName: string) {
    return this.http.get(this.gitHubUrl + '/repos/' + username + '/' + repoName + '/commits');
   }
}
