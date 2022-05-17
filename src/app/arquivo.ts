// arquivo.ts

/* Criação da interface tipagem Lista */
interface Lista {
  nome: String;
  ru: String;
  curso: String;
  dataNasc: String;
}

/* Exportando array Objeto Listagem de Alunos */
export const LISTAGEM: Lista[] = [
  {
    nome: 'Bruno Amorim Menoita',
    ru: '3461985',
    curso: 'Análise e Desenvolvimento de Sistemas',
    dataNasc: '02/02/1981'
  },
  {
    nome: 'João Carlos Moreira',
    ru: '5425485',
    curso: 'Direito',
    dataNasc: '18/05/2002'
  },
  {
    nome: 'Emilia Souza',
    ru: '3878455',
    curso: 'Medicina',
    dataNasc: '22/09/1995'
  },
  {
    nome: 'Viviane Airosa',
    ru: '4025878',
    curso: 'Nutrição',
    dataNasc: '07/04/1980'
  },
  {
    nome: 'Cristiano Nascimento',
    ru: '2076871',
    curso: 'Jornalismo',
    dataNasc: '29/09/1999'
  }
];