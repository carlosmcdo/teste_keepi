//Importando dependências

import { Component } from '@angular/core';
import { GithubService } from '../services/github.services';
import { Http } from  '@angular/http';

//Componentes
@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: `github.component.html`,
  providers: [GithubService]
})

//Class GithubComponent
export class GithubComponent  {
    
  //Variáveis
  user: any;
  repos: any;
  username: string;
    
  //Construtor exibindo mensagem para teste
  constructor (private _githubService: GithubService) {
    console.log('Iniciando GithubComponent ....');
  }

  /* Função search() responsável por pegar o username e realizar a busca na API */

  search() {


    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user =  user;
    });

    this._githubService.getRepos().subscribe(repos => {
      //console.log(users);
      this.repos =  repos;
    });*/

    return {
        username: this.username
    };
  }
}
