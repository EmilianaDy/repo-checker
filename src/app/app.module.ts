import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
