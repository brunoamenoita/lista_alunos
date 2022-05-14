import { Component } from '@angular/core';
import { LISTAGEM } from './arquivo'; // importação do componente listagem de alunos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Lista de Alunos';
  listagem = LISTAGEM; // atribuindo a variável listagem, o array de objetos Listagem de Alunos
}
