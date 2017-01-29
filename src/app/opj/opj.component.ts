import { Component, OnInit, Input } from '@angular/core';
import { OpjService } from './opj.service';

import { Questao } from './class/questao';

@Component({
  selector: 'opj',
  templateUrl: './opj.component.html',
  styleUrls: ['./opj.component.css'],
  providers: [OpjService]
})
export class OpjComponent implements OnInit {

  @Input() id: string;

  questao: Questao;
  errorMessage: string;
  proximoId: string;

  constructor(private opjService: OpjService) { }

  ngOnInit() {
    this.opjService.getQuestao(this.id).subscribe(
      questao => this.questao = questao,
      error => this.errorMessage = <any>error);
  }

  onSelect(id: string): void {
    this.proximoId = id;
  }
}
