import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  xd:any;
  constructor(private prueba:DadosService) { }

  ngOnInit(): void {
    this.xd=this.prueba.getDices();
    console.log(this.xd)
  }

}
