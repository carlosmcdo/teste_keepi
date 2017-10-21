import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()

export class GithubService {

    private username = 'carlosmcdo';
    private client_id = "c56f78249f15f0dff6e1";
    private cliente_secret = "f8b9e56f740912dd2f9050df6a826a7d27b07765";

    constructor(private _http:Http) {
      console.log('GitHub service init...');
    }

    getUser() {
      return this._http.get('https://api.github.com/users/' + this.username)
        .map(res=> res.json());
    }

    getRepos() {
      return this._http.get('https://api.github.com/users/' + this.username + '/repos')
        .map(res=> res.json());
    }

    updateUsername(username: string) {
      this.username = username;
    }
}
