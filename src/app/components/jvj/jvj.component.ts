import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';
import { JugadorDosService } from 'src/app/services/jugador-dos.service';
import { JugadorUnoService } from 'src/app/services/jugador-uno.service';

@Component({
  selector: 'app-jvj',
  templateUrl: './jvj.component.html',
  styleUrls: ['./jvj.component.css']
})
export class JvjComponent implements OnInit {

  dadosJugadorDos:number[]=[];
  dadosJugadorUno:number[]=[];
  nuevosDadosUno:number[]=[0,0,0,0,0];
  nuevosDadosDos:number[]=[0,0,0,0,0];
  mensaje:string="default";
  mensajeDos:string="default";

  dado1:number=0;
  dado2:number=0;

  orden1:number=0;
  orden2:number=0;

  nombreUno:string="Jugador1";
  nombreDos:string="Jugador2";
  FINAL=false;
  variableImg: string="";
  mostrarTirar=true;
  repeticiones=2;
  mostrarCambiar=false;
  contadorTiradas=1;
  contadorRondas=1;
  servidoUno=true;
  servidoDos=true;
  botonArrojarInicio=true;
  msjj="";

  arrojarDados=false;
  mostrarJugar=false;

  constructor(
    private dadosService:DadosService,
    public  jugadorUno:JugadorUnoService,
    public jugadorDos:JugadorDosService,
    public resultado:JugadorUnoService,
    public resultado2:JugadorDosService
    ) { }

  ngOnInit(): void {
  }
  tirarDadosUno(){
    this.dadosJugadorUno=this.dadosService.getDices();
    this.nuevosDadosUno=[0,0,0,0,0];
    this.mensaje="default";
    this.mensajeDos="default";
    this.mostrarTirar=false;
  }
  tirarDadosDos(){
    this.dadosJugadorDos=this.dadosService.getDices();
    this.nuevosDadosDos=[0,0,0,0,0];
    this.mensajeDos="default";
    this.mensaje="default";
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

  sumarPuntosUno(dices:number[]){
    this.mensaje= this.jugadorUno.getPoints(dices,this.servidoUno);
    this.dadosJugadorUno=this.dadosService.resetDices();
    this.mostrarTirar=true;
    this.repeticiones=2;
    this.contadorTiradas++;
    if(this.contadorTiradas%2==1){
      this.contadorRondas++;
    }
    this.mostrarCambiar=false;
    this.servidoUno=true;
  }
  sumarPuntosDos(dices:number[]){
    this.mensajeDos= this.jugadorDos.getPoints(dices,this.servidoDos);
    this.dadosJugadorDos=this.dadosService.resetDices();
    this.mostrarTirar=true;
    this.repeticiones=2;
    this.contadorTiradas++;
    if(this.contadorTiradas%2==1){
      this.contadorRondas++;
    }
    this.mostrarCambiar=false;
    this.servidoDos=true;
  }
  
  obtenerDadoUno(dice:number, indice:number){
    if(this.nuevosDadosUno[indice]!=0 && this.nuevosDadosUno[indice+1]!=0 && this.nuevosDadosUno[indice+2]!=0){
      this.nuevosDadosUno[indice+3]=dice;
      console.log("entra");
    }else if(this.nuevosDadosUno[indice]!=0 && this.nuevosDadosUno[indice+1]!=0){
      this.nuevosDadosUno[indice+2]=dice;
      console.log("entra 1");
    }else if(this.nuevosDadosUno[indice]!=0 ){
      this.nuevosDadosUno[indice+1]=dice;
      console.log("entra 2");
    }else{
      this.nuevosDadosUno[indice]=dice
    }
  }
  obtenerDadoDos(dice:number, indice:number){
    if(this.nuevosDadosDos[indice]!=0 && this.nuevosDadosDos[indice+1]!=0 && this.nuevosDadosDos[indice+2]!=0){
      this.nuevosDadosDos[indice+3]=dice;
      console.log("entra");
    }else if(this.nuevosDadosDos[indice]!=0 && this.nuevosDadosDos[indice+1]!=0){
      this.nuevosDadosDos[indice+2]=dice;
      console.log("entra 1");
    }else if(this.nuevosDadosDos[indice]!=0 ){
      this.nuevosDadosDos[indice+1]=dice;
      console.log("entra 2");
    }else{
      this.nuevosDadosDos[indice]=dice
    }
  }
  desplegarCambio(){
    this.mostrarCambiar=!this.mostrarCambiar;
  }
  confirmarCambio(){
    let nuevosRandoms:number[]=[];
    nuevosRandoms=this.dadosService.cambiarDados(this.nuevosDadosUno);
    if(nuevosRandoms[0]!=0) this.dadosJugadorUno[0]=nuevosRandoms[0]
    if(nuevosRandoms[1]!=0) this.dadosJugadorUno[1]=nuevosRandoms[1]
    if(nuevosRandoms[2]!=0) this.dadosJugadorUno[2]=nuevosRandoms[2]
    if(nuevosRandoms[3]!=0) this.dadosJugadorUno[3]=nuevosRandoms[3]
    if(nuevosRandoms[4]!=0) this.dadosJugadorUno[4]=nuevosRandoms[4]
    for(let i=0; i<5; i++){
      this.nuevosDadosUno[i]=0;
    }
    this.servidoUno=false;
    this.repeticiones--;
    this.dadosJugadorUno.sort();
  }
  confirmarCambioDos(){
    let nuevosRandomsDos:number[]=[];
    nuevosRandomsDos=this.dadosService.cambiarDados(this.nuevosDadosDos);
    if(nuevosRandomsDos[0]!=0) this.dadosJugadorDos[0]=nuevosRandomsDos[0]
    if(nuevosRandomsDos[1]!=0) this.dadosJugadorDos[1]=nuevosRandomsDos[1]
    if(nuevosRandomsDos[2]!=0) this.dadosJugadorDos[2]=nuevosRandomsDos[2]
    if(nuevosRandomsDos[3]!=0) this.dadosJugadorDos[3]=nuevosRandomsDos[3]
    if(nuevosRandomsDos[4]!=0) this.dadosJugadorDos[4]=nuevosRandomsDos[4]
    for(let i=0; i<5; i++){
      this.nuevosDadosDos[i]=0;
    }
    this.servidoDos=false;
    this.repeticiones--;
    this.dadosJugadorDos.sort();
  }

  continuar(){
    this.arrojarDados=true;
  }

  dadosInicio(){
    while(this.dado1==this.dado2){
      this.dado1=Math.floor(Math.random() * 6)+1;
      this.dado2=Math.floor(Math.random() * 6)+1;
    }
    if(this.dado1>this.dado2){
      this.orden1=1;
      this.orden2=2;
    }else{
      this.orden1=2;
      this.orden2=1;
    }
    this.botonArrojarInicio=false;
  }
  iniciar(){
    this.mostrarJugar=true;
    this.arrojarDados=false
    this.FINAL=false;
  }
  finalizar(){
    this.FINAL=true;
    this.jugadorUno.resetGame();
    this.jugadorDos.resetGame();
  }
  ganador(){
    if(this.resultado.puntajeUno>this.resultado2.puntajeDos){
      this.msjj="to right, #2193b0, #6dd5ed"
    }else if(this.resultado.puntajeUno<this.resultado2.puntajeDos){
      this.msjj="to right, #f12711, #f5af19"
    }else{
      this.msjj="to top, #1f4037, #99f2c8"
    }
    return this.msjj;
  }

}

