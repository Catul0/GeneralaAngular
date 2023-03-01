import { Component, OnInit } from '@angular/core';
import { PuntajesService } from 'src/app/services/puntajes.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(public resultado:PuntajesService) { }

  ngOnInit(): void {
  }

}
