//Importando dependências
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()

export class GithubService {
    
    //Informações para autênticar o acesso na API --acesso limitado  
    private username = 'carlosmcdo';
    private client_id = "c56f78249f15f0dff6e1";
    private cliente_secret = "f8b9e56f740912dd2f9050df6a826a7d27b07765";
    
    //Construtor informando messagem para teste
    constructor(private _http:Http) {
      console.log('GitHub service init...');
    }
    
    //Obtendo informações dos usuários e os mapeando
    getUser() {
      return this._http.get('https://api.github.com/users/' + this.username)
        .map(res=> res.json());
    }
    
    //Obtendo informações do usuário e seus repositórios
    getRepos() {
      return this._http.get('https://api.github.com/users/' + this.username + '/repos')
        .map(res=> res.json());
    }
    
    //Atualizando busca de acordo com o input do usuário
    updateUsername(username: string) {
      this.username = username;
    }
}
