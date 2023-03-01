import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';
import { PuntajesService } from 'src/app/services/puntajes.service';

@Component({
  selector: 'app-tirada-uno',
  templateUrl: './tirada-uno.component.html',
  styleUrls: ['./tirada-uno.component.css']
})
export class TiradaUnoComponent implements OnInit {
  dados:number[]=[];
  dadosJarvis:number[]=[];
  variableImg: string="";
  mensaje:string="default";
  mensajeJarvis:string="default";
  nuevosDados:number[]=[0,0,0,0,0];
  mostrarTirar=true;
  repeticiones=2;
  mostrarCambiar=false;
  contadorTiradas=1;
  servido=true;
  servidojarvis=true;
  esJarvis=true;
  constructor(
    private prueba:DadosService,
    public pruebaSuma:PuntajesService,
    private puntos:PuntajesService
    ) { }

  ngOnInit(): void {
  }
  tirarDados(){
    
    this.dados=this.prueba.getDices();
    this.nuevosDados=[0,0,0,0,0];
    this.mensaje="default";
    this.mensajeJarvis="default";
    this.dadosJarvis=this.prueba.getDices();
    this.mostrarTirar=false;
  }
  obtenerImg(x:number){
    if(x==1){
      this.variableImg="assets/Images/1.png"
    }else if(x==2){
      this.variableImg="assets/Images/2.png"
    }else if(x==3){
      this.variableImg="assets/Images/3.png"
    }else if(x==4){
      this.variableImg="assets/Images/4.png"
    }else if(x==5){
      this.variableImg="assets/Images/5.png"
    }else{
      this.variableImg="assets/Images/6.png"
    }
    return this.variableImg;
  }

  sumarPuntos(dices:number[]){
    this.mensaje= this.puntos.getPoints(dices,this.servido,!this.esJarvis);
    this.dados=this.prueba.resetDices();
    this.mensajeJarvis= this.puntos.getPoints(this.dadosJarvis,this.servidojarvis,this.esJarvis);
    this.dadosJarvis=this.prueba.resetDices();
    this.mostrarTirar=true;
    this.repeticiones=2;
    this.contadorTiradas++;
    this.mostrarCambiar=false;
    this.servido=true;

  }
  obtenerDado(dice:number, indice:number){
    if(this.nuevosDados[indice]!=0 && this.nuevosDados[indice+1]!=0 && this.nuevosDados[indice+2]!=0){
      this.nuevosDados[indice+3]=dice;
      console.log("entra");
    }else if(this.nuevosDados[indice]!=0 && this.nuevosDados[indice+1]!=0){
      this.nuevosDados[indice+2]=dice;
      console.log("entra 1");
    }else if(this.nuevosDados[indice]!=0 ){
      this.nuevosDados[indice+1]=dice;
      console.log("entra 2");
    }else{
      this.nuevosDados[indice]=dice
    }
    
  }
  desplegarCambio(){
    this.mostrarCambiar=!this.mostrarCambiar;
  }
  confirmarCambio(){
    let nuevosRandoms:number[]=[];
    nuevosRandoms=this.prueba.cambiarDados(this.nuevosDados);
    if(nuevosRandoms[0]!=0) this.dados[0]=nuevosRandoms[0]
    if(nuevosRandoms[1]!=0) this.dados[1]=nuevosRandoms[1]
    if(nuevosRandoms[2]!=0) this.dados[2]=nuevosRandoms[2]
    if(nuevosRandoms[3]!=0) this.dados[3]=nuevosRandoms[3]
    if(nuevosRandoms[4]!=0) this.dados[4]=nuevosRandoms[4]

    for(let i=0; i<5; i++){
      this.nuevosDados[i]=0;
    }
    this.servido=false;
    this.repeticiones--;
    this.dados.sort();
  }
  reinicio(){
    this.pruebaSuma.resetGame();
  }

}
