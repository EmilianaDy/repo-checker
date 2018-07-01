import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private clientId = '9df07b24e6fd74b8fecf';
  private clientSecret = '9ebf54f71e8140df68f9d8bb561babcebbc06d48';
  public username = 'EmilianaDy';

  constructor(private http: HttpClient) {

   }

   getUser() {
    return this.http.get('https://api.github.com/users/' + this.username);
   }

   updateService(newUser) {
    this.username = newUser;
    return this.http.get('https://api.github.com/users/' + this.username);
   }

   getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos');
   }

   getLastCommits(repoName: string) {
    return this.http.get('https://api.github.com/repos/' + this.username + '/' + repoName + '/commits');
   }

}
