import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string; 

  // Criando um array
  cursos: string[];

  // A injeção de dependencia no angular acontece dentro do construtor
  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://loiane.training';

    // Instancia de classe
    // var servico = new CursosService();
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
