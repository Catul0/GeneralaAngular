import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuntajesService {
  public puntajeH:number=0;
  public punajeJArvis:number=0;
  public sumatoria: number = 0;
  public sumatoriajarvis: number = 0;
  public restricciones = [["generala", 0, 0], ["poker", 0, 0], ["full", 0, 0], ["escalera", 0, 0], ["1", 0, 0], ["2", 0, 0], ["3", 0, 0], ["4", 0, 0], ["5", 0, 0], ["6", 0, 0]];
  mensaje: string = "";
  msj: string = "";
  constructor() { }

  getPoints(dices: number[], verficacion: boolean, jarvis: boolean) {
    if (dices[0] == dices[4] && this.restricciones[0][1] == 0) {
      if (jarvis) {
        this.sumatoriajarvis += 65;
        this.restricciones[0][2] = 65;
        this.mensaje = "GENERALA SERVIDA PARA JARVIS +65 PUNTOS";
      } else {
        if (verficacion) {
          this.sumatoria += 65;
          this.restricciones[0][1] = 65;
          this.mensaje = "GENERALA SERVIDA +65 PUNTOS";
        } else {
          this.sumatoria += 60;
          this.restricciones[0][1] = 60;
          this.mensaje = "GENERALA ARMADA +60 PUNTOS";
        }
      }

    } else if ((dices[0] == dices[3] && dices[0] != dices[4] && this.restricciones[1][1] == 0 && !jarvis)
      || (dices[0] == dices[3] && dices[0] != dices[4] && this.restricciones[1][2] == 0 && jarvis)
      || (dices[1] == dices[4] && dices[0] != dices[1] && this.restricciones[1][1] == 0 && !jarvis)
      || (dices[1] == dices[4] && dices[0] != dices[1] && this.restricciones[1][2] == 0 && jarvis)
      ) {
      if (jarvis) {
        this.sumatoriajarvis += 45;
        this.restricciones[1][2] = 45;
        this.mensaje = "POKER SERVIDO PARA JARVIS +45 PUNTOS";
      } else {
        if (verficacion) {
          this.sumatoria += 45;
          this.restricciones[1][1] = 45;
          this.mensaje = "POKER SERVIDO +45 PUNTOS";
        } else {
          this.sumatoria += 40;
          this.restricciones[1][1] = 40;
          this.mensaje = "POKER ARMADO +40 PUNTOS";
        }
      }

    } else if ((dices[0] == dices[2] && dices[3] == dices[4] && dices[0] != dices[4] && this.restricciones[2][1] == 0 && !jarvis)
    || (dices[0] == dices[1] && dices[2] == dices[4] && dices[0] != dices[4] && this.restricciones[2][1] == 0 && !jarvis)
    || (dices[0] == dices[2] && dices[3] == dices[4] && dices[0] != dices[4] && this.restricciones[2][2] == 0 && jarvis)
    || (dices[0] == dices[1] && dices[2] == dices[4] && dices[0] != dices[4] && this.restricciones[2][2] == 0 && jarvis)) {
      if (jarvis) {
        this.sumatoriajarvis += 35;
        this.restricciones[2][2] = 35;
        this.mensaje = "FULL SERVIDO PARA JARVIS +35 PUNTOS";
      } else {
        if (verficacion) {
          this.sumatoria += 35;
          this.restricciones[2][1] = 35;
          this.mensaje = "FULL SERVIDO +35 PUNTOS";
        } else {
          this.sumatoria += 30;
          this.restricciones[2][1] = 30;
          this.mensaje = "FULL ARMADO +30 PUNTOS";
        }
      }

    } else if (
      ((dices[0] + 1) == dices[1] && (dices[0] + 2) == dices[2] && (dices[0] + 3) == dices[3] && (dices[0] + 4) == dices[4] && this.restricciones[3][1] == 0 && !jarvis)
      || ((dices[0] + 1) == dices[1] && (dices[0] + 2) == dices[2] && (dices[0] + 3) == dices[3] && (dices[0] + 4) == dices[4] && this.restricciones[3][2] == 0 && jarvis)
      ) {
      if (jarvis) {
        this.sumatoriajarvis += 25;
        this.restricciones[3][2] = 25;
        this.mensaje = "ESCALERA SERVIDA PARA JARVIS +25 PUNTOS";
      } else {
        if (verficacion) {
          this.sumatoria += 25;
          this.restricciones[3][1] = 25;
          this.mensaje = "ESCALERA SERVIDA +25 PUNTOS";
        } else {
          this.sumatoria += 20;
          this.restricciones[3][1] = 20;
          this.mensaje = "ESCALERA ARMADA +20 PUNTOS";
        }
      }

    } else {
      this.mensaje = this.valoresNumericos(dices, jarvis);
    }
    return this.mensaje;
  }
  valoresNumericos(dices: number[], jarvis: boolean) {
    let auxiliar: number = this.sumatoria;
    let auxiliarJ: number = this.sumatoriajarvis;
    if(jarvis){
      this.msj = "JARVIS no obtuvo puntaje xD";
    }else{
      this.msj = "No obtuviste puntaje D:";
    }

    if (dices[3] == dices[4] && dices[3] == dices[2]) { //chequea los tres ultimos numeros
      if ((dices[2] == 6 && this.restricciones[9][1] == 0 && !jarvis)
      || (dices[2] == 6 && this.restricciones[9][2] == 0 && jarvis)) {
        if (jarvis) {
          this.sumatoriajarvis += 18;
          this.restricciones[9][2] = 18;
          this.msj = "JARVIS OBTUVO: 18";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[9][1] = 18;
          this.msj = "Obtuviste valor numerico: 18";
        }
      } else if (dices[2] == 5 && this.restricciones[8][1] == 0 && !jarvis || (dices[2] == 5 && this.restricciones[8][2] == 0 && jarvis)) {
        if (jarvis) {
          this.sumatoriajarvis += 15;
          this.restricciones[8][2] = 15;
          this.msj = "JARVIS OBTUVO: 15";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[8][1] = 15;
          this.msj = "Obtuviste valor numerico: 15";
        }
      } else if (dices[2] == 4 && this.restricciones[7][1] == 0 && !jarvis || (dices[2] == 4 && this.restricciones[7][2] == 0 && jarvis)) {
        if (jarvis) {
          this.sumatoriajarvis += 12;
          this.restricciones[7][2] = 12;
          this.msj = "JARVIS OBTUVO: 12";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[7][1] = 12;
          this.msj = "Obtuviste valor numerico: 12";
        }
      } else if (dices[2] == 3 && this.restricciones[6][1] == 0 && !jarvis || dices[2] == 3 && this.restricciones[6][2] == 0 && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 9;
          this.restricciones[6][2] = 9;
          this.msj = "JARVIS OBTUVO: 9";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[6][1] = 9;
          this.msj = "Obtuviste valor numerico: 9";
        }
      } else if (dices[2] == 2 && this.restricciones[5][1] == 0 && !jarvis || dices[2] == 2 && this.restricciones[5][2] == 0 && jarvis) {
        if (jarvis) {
          this.sumatoriajarvis += 6;
          this.restricciones[5][2] = 6;
          this.msj = "JARVIS OBTUVO: 6";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[5][1] = 6;
          this.msj = "Obtuviste valor numerico: 6";
        }
      }
    } else if (dices[3] == dices[1] && dices[3] == dices[2]) { //chequea los 3 numeros del medio
      if (dices[2] == 6 && this.restricciones[9][1] == 0 && !jarvis || dices[2] == 6 && this.restricciones[9][2] == 0 && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 18;
          this.restricciones[9][2] = 18;
          this.msj = "JARVIS OBTUVO: 18";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[9][1] = 18;
          this.msj = "Obtuviste valor numerico: 18";
        }
      } else if (dices[2] == 5 && this.restricciones[8][1] == 0 && !jarvis || dices[2] == 5 && this.restricciones[8][2] == 0 && jarvis) {
        if (jarvis) {
          this.sumatoriajarvis += 15;
          this.restricciones[8][2] = 15;
          this.msj = "JARVIS OBTUVO: 15";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[8][1] = 15;
          this.msj = "Obtuviste valor numerico: 15";
        }
      } else if (dices[2] == 4 && this.restricciones[7][1] == 0  && !jarvis ||dices[2] == 4 && this.restricciones[7][2] == 0  && jarvis  ) {
        if (jarvis) {
          this.sumatoriajarvis += 12;
          this.restricciones[7][2] = 12;
          this.msj = "JARVIS OBTUVO: 12";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[7][1] = 12;
          this.msj = "Obtuviste valor numerico: 12";
        }
      } else if (dices[2] == 3 && this.restricciones[6][1] == 0  && !jarvis ||dices[2] == 3 && this.restricciones[6][2] == 0  && jarvis  ) {
        if (jarvis) {
          this.sumatoriajarvis += 9;
          this.restricciones[6][2] = 9;
          this.msj = "JARVIS OBTUVO: 9";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[6][1] = 9;
          this.msj = "Obtuviste valor numerico: 9";
        }
      } else if (dices[2] == 2 && this.restricciones[5][1] == 0  && !jarvis ||dices[2] == 2 && this.restricciones[5][2] == 0  && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 6;
          this.restricciones[5][2] = 6;
          this.msj = "JARVIS OBTUVO: 6";
        } else {
          this.sumatoria += (dices[2] * 3);
          this.restricciones[5][1] = 6;
          this.msj = "Obtuviste valor numerico: 6";
        }
      }
    } else if (dices[0] == dices[1] && dices[0] == dices[2] ) {

      if (dices[0] == 5 && this.restricciones[8][1] == 0  && !jarvis || dices[0] == 5 && this.restricciones[8][2] == 0  && jarvis  ) {
        if (jarvis) {
          this.sumatoriajarvis += 15;
          this.restricciones[8][2] = 15;
          this.msj = "JARVIS OBTUVO: 15";
        } else {
          this.sumatoria += (dices[0] * 3);
          this.restricciones[8][1] = 15;
          this.msj = "Obtuviste valor numerico: 15";
        }
      } else if (dices[0] == 4 && this.restricciones[7][1] == 0  && !jarvis ||dices[0] == 4 && this.restricciones[7][2] == 0  && jarvis  ) {
        if (jarvis) {
          this.sumatoriajarvis += 12;
          this.restricciones[7][2] = 12;
          this.msj = "JARVIS OBTUVO: 12";
        } else {
          this.sumatoria += (dices[0] * 3);
          this.restricciones[7][1] = 12;
          this.msj = "Obtuviste valor numerico: 12";
        }
      } else if (dices[0] == 3 && this.restricciones[6][1] == 0  && !jarvis ||dices[0] == 3 && this.restricciones[6][2] == 0  && jarvis  ) {
        if (jarvis) {
          this.sumatoriajarvis += 9;
          this.restricciones[6][2] = 9;
          this.msj = "JARVIS OBTUVO: 9";
        } else {
          this.sumatoria += (dices[0] * 3);
          this.restricciones[6][1] = 9;
          this.msj = "Obtuviste valor numerico: 9";
        }
      } else if (dices[0] == 2 && this.restricciones[5][1] == 0  && !jarvis || dices[0] == 2 && this.restricciones[5][2] == 0  && jarvis  ) {
        if (jarvis) {
          this.sumatoriajarvis += 6;
          this.restricciones[5][2] = 6;
          this.msj = "JARVIS OBTUVO: 6";
        } else {
          this.sumatoria += (dices[0] * 3);
          this.restricciones[5][1] = 6;
          this.msj = "Obtuviste valor numerico: 6";
        }
      } else if (dices[0] == 1 && this.restricciones[4][1] == 0  && !jarvis ||dices[0] == 1 && this.restricciones[4][2] == 0  && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 3;
          this.restricciones[4][2] = 3;
          this.msj = "JARVIS OBTUVO: 3";
        } else {
          this.sumatoria += (dices[0] * 3);
          this.restricciones[4][1] = 3;
          this.msj = "Obtuviste valor numerico: 3";
        }
      } //aca puede ir la validacon de los 3 6 pero es casi imposible que se de eso
    }
    if (dices[3] == dices[4] && this.sumatoria == auxiliar && this.sumatoriajarvis==auxiliarJ) { //comparando si solo los ultimos 2 dados son iguales
      if (dices[3] == 6 && this.restricciones[9][1] == 0  && !jarvis ||dices[3] == 6 && this.restricciones[9][2] == 0  && jarvis  ) {
        if (jarvis) {
          this.sumatoriajarvis += 12;
          this.restricciones[9][2] = 12;
          this.msj = "JARVIS OBTUVO: 12";
        } else {
          this.sumatoria += (dices[3] * 2);
          this.restricciones[9][1] = 12;
          this.msj = "Obtuviste valor numerico: 12";
        }
      } else if (dices[3] == 5 && this.restricciones[8][1] == 0  && !jarvis || dices[3] == 5 && this.restricciones[8][2] == 0  && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 10;
          this.restricciones[8][2] = 10;
          this.msj = "JARVIS OBTUVO: 10";
        } else {
          this.sumatoria += (dices[3] * 2);
          this.restricciones[8][1] = 10;
          this.msj = "Obtuviste valor numerico: 10";
        }
      } else if (dices[3] == 4 && this.restricciones[7][1] == 0  && !jarvis || dices[3] == 4 && this.restricciones[7][2] == 0  && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 8;
          this.restricciones[7][2] = 8;
          this.msj = "JARVIS OBTUVO: 8";
        } else {
          this.sumatoria += (dices[3] * 2);
          this.restricciones[7][1] = 8;
          this.msj = "Obtuviste valor numerico: 8";
        }
      } else if (dices[3] == 3 && this.restricciones[6][1] == 0  && !jarvis ||dices[3] == 3 && this.restricciones[6][2] == 0  && jarvis  ) {
        if (jarvis) {
          this.sumatoriajarvis += 6;
          this.restricciones[6][2] = 6;
          this.msj = "JARVIS OBTUVO: 6";
        } else {
          this.sumatoria += (dices[3] * 2);
          this.restricciones[6][1] = 6;
          this.msj = "Obtuviste valor numerico: 6";
        }
      } else if (dices[3] == 2 && this.restricciones[5][1] == 0  && !jarvis ||dices[3] == 2 && this.restricciones[5][2] == 0  && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 4;
          this.restricciones[5][2] = 4;
          this.msj = "JARVIS OBTUVO: 4";
        } else {
          this.sumatoria += (dices[3] * 2);
          this.restricciones[5][1] = 4;
          this.msj = "Obtuviste valor numerico: 4";
        }
      }
    }
    if (dices[3] == dices[2] && this.sumatoria == auxiliar && this.sumatoriajarvis==auxiliarJ) { //comparando si los ados 3 y 4 son iguales
      if (dices[3] == 5 && this.restricciones[8][1] == 0  && !jarvis ||dices[3] == 5 && this.restricciones[8][2] == 0  && jarvis  ) {
        if (jarvis) {
          this.sumatoriajarvis += 10;
          this.restricciones[8][2] = 10;
          this.msj = "JARVIS OBTUVO: 10";
        } else {
          this.sumatoria += (dices[3] * 2);
          this.restricciones[8][1] = 10;
          this.msj = "Obtuviste valor numerico: 10";
        }
      } else if (dices[3] == 4 && this.restricciones[7][1] == 0  && !jarvis || dices[3] == 4 && this.restricciones[7][2] == 0  && jarvis) {
        if (jarvis) {
          this.sumatoriajarvis += 8;
          this.restricciones[7][2] = 8;
          this.msj = "JARVIS OBTUVO: 8";
        } else {
          this.sumatoria += (dices[3] * 2);
          this.restricciones[7][1] = 8;
          this.msj = "Obtuviste valor numerico: 8";
        }
      } else if (dices[3] == 3 && this.restricciones[6][1] == 0  && !jarvis || dices[3] == 3 && this.restricciones[6][2] == 0  && jarvis) {
        if (jarvis) {
          this.sumatoriajarvis += 6;
          this.restricciones[6][2] = 6;
          this.msj = "JARVIS OBTUVO: 6";
        } else {
          this.sumatoria += (dices[3] * 2);
          this.restricciones[6][1] = 6;
          this.msj = "Obtuviste valor numerico: 6";
        }
      } else if (dices[3] == 2 && this.restricciones[5][1] == 0  && !jarvis || dices[3] == 2 && this.restricciones[5][2] == 0  && jarvis) {
        if (jarvis) {
          this.sumatoriajarvis += 4;
          this.restricciones[5][2] = 4;
          this.msj = "JARVIS OBTUVO: 4";
        } else {
          this.sumatoria += (dices[3] * 2);
          this.restricciones[5][1] = 4;
          this.msj = "Obtuviste valor numerico: 4";
        }
      }
    }
    if (dices[1] == dices[2] && this.sumatoria == auxiliar && this.sumatoriajarvis==auxiliarJ) { //comparando si los ados 2 y 3 son iguales
      if (dices[1] == 5 && this.restricciones[8][1] == 0  && !jarvis ||dices[1] == 5 && this.restricciones[8][2] == 0  && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 10;
          this.restricciones[8][2] = 10;
          this.msj = "JARVIS OBTUVO: 10";
        } else {
          this.sumatoria += (dices[1] * 2);
          this.restricciones[8][1] = 10;
          this.msj = "Obtuviste valor numerico: 10";
        }
      } else if (dices[1] == 4 && this.restricciones[7][1] == 0  && !jarvis || dices[1] == 4 && this.restricciones[7][2] == 0  && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 8;
          this.restricciones[7][2] = 8;
          this.msj = "JARVIS OBTUVO: 8";
        } else {
          this.sumatoria += (dices[1] * 2);
          this.restricciones[7][1] = 8;
          this.msj = "Obtuviste valor numerico: 8";
        }
      } else if (dices[1] == 3 && this.restricciones[6][1] == 0  && !jarvis || dices[1] == 3 && this.restricciones[6][2] == 0  && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 6;
          this.restricciones[6][2] = 6;
          this.msj = "JARVIS OBTUVO: 6";
        } else {
          this.sumatoria += (dices[1] * 2);
          this.restricciones[6][1] = 6;
          this.msj = "Obtuviste valor numerico: 6";
        }
      } else if (dices[1] == 2 && this.restricciones[5][1] == 0  && !jarvis || dices[1] == 2 && this.restricciones[5][2] == 0  && jarvis ) {
        if (jarvis) {
          this.sumatoriajarvis += 4;
          this.restricciones[5][2] = 4;
          this.msj = "JARVIS OBTUVO: 4";
        } else {
          this.sumatoria += (dices[1] * 2);
          this.restricciones[5][1] = 4;
          this.msj = "Obtuviste valor numerico: 4";
        }
      }
    }
    if (dices[1] == dices[0] && this.sumatoria == auxiliar && this.sumatoriajarvis==auxiliarJ) { //comparando si los ados 2 y 1 son iguales
      if (dices[1] == 5 && this.restricciones[8][1] == 0  && !jarvis || dices[1] == 5 && this.restricciones[8][2] == 0  && jarvis) {
        if (jarvis) {
          this.sumatoriajarvis += 10;
          this.restricciones[8][2] = 10;
          this.msj = "JARVIS OBTUVO: 10";
        } else {
          this.sumatoria += (dices[1] * 2);
          this.restricciones[8][1] = 10;
          this.msj = "Obtuviste valor numerico: 10";
        }
      } else if (dices[1] == 4 && this.restricciones[7][1] == 0  && !jarvis || dices[1] == 4 && this.restricciones[7][2] == 0  && jarvis ) {
        if(jarvis){
          this.sumatoriajarvis += 8;
          this.restricciones[7][2] = 8;
          this.msj = "JARVIS OBTUVO: 8";
        }else{
        this.sumatoria += (dices[1] * 2);
        this.restricciones[7][1] = 8;
        this.msj = "Obtuviste valor numerico: 8";}
      } else if (dices[1] == 3 && this.restricciones[6][1] == 0  && !jarvis || dices[1] == 3 && this.restricciones[6][2] == 0  && jarvis ) {
        if(jarvis){
          this.sumatoriajarvis += 6;
          this.restricciones[6][2] = 6;
          this.msj = "JARVIS OBTUVO: 6";
        }else{
        this.sumatoria += (dices[1] * 2);
        this.restricciones[6][1] = 6;
        this.msj = "Obtuviste valor numerico: 6";}
      } else if (dices[1] == 2 && this.restricciones[5][1] == 0  && !jarvis || dices[1] == 2 && this.restricciones[5][2] == 0  && jarvis) {
        if(jarvis){
          this.sumatoriajarvis += 4;
          this.restricciones[5][2] = 4;
          this.msj = "JARVIS OBTUVO: 4";
        }else{
        this.sumatoria += (dices[1] * 2);
        this.restricciones[5][1] = 4;
        this.msj = "Obtuviste valor numerico: 4";}
      } else if (dices[1] == 1 && this.restricciones[4][1] == 0  && !jarvis || dices[1] == 1 && this.restricciones[4][2] == 0  && jarvis) {
        if(jarvis){
          this.sumatoriajarvis += 2;
          this.restricciones[4][2] = 2;
          this.msj = "JARVIS OBTUVO: 2";
        }else{
        this.sumatoria += (dices[0] * 2);
        this.restricciones[4][1] = 2;
        this.msj = "Obtuviste valor numerico: 2";}
      }
    }


    return this.msj;
  }

  resetGame(){
    this.puntajeH=this.sumatoria;
    this.punajeJArvis=this.sumatoriajarvis;
    this.sumatoria=0;
    this.sumatoriajarvis=0;
    this.restricciones = [["generala", 0, 0], ["poker", 0, 0], ["full", 0, 0], ["escalera", 0, 0], ["1", 0, 0], ["2", 0, 0], ["3", 0, 0], ["4", 0, 0], ["5", 0, 0], ["6", 0, 0]];
  }

}
