import { Injectable } from '@angular/core';
import { JugadorUnoService } from './jugador-uno.service';

@Injectable({
  providedIn: 'root'
})
export class JugadorDosService {
  public puntajeDos: number = 0;
  public sumatoriaJugadorDos: number = 0;
  mensaje: string = "";
  msj: string = "";
  constructor(public  jugadorUno:JugadorUnoService) { }

  getPoints(dices: number[], verficacion: boolean) {
    if (dices[0] == dices[4] && this.jugadorUno.restricciones[0][2] == 0) {
      if (verficacion) {
        this.sumatoriaJugadorDos += 65;
        this.jugadorUno.restricciones[0][2] = 65;
        this.mensaje = "GENERALA SERVIDA +65 PUNTOS";
      } else {
        this.sumatoriaJugadorDos += 60;
        this.jugadorUno.restricciones[0][2] = 60;
        this.mensaje = "GENERALA ARMADA +60 PUNTOS";
      }
    } else if ((dices[0] == dices[3] && dices[0] != dices[4] && this.jugadorUno.restricciones[1][2] == 0)
      || (dices[1] == dices[4] && dices[0] != dices[1] && this.jugadorUno.restricciones[1][2] == 0)
    ) {
      if (verficacion) {
        this.sumatoriaJugadorDos += 45;
        this.jugadorUno.restricciones[1][2] = 45;
        this.mensaje = "POKER SERVIDO +45 PUNTOS";
      } else {
        this.sumatoriaJugadorDos += 40;
        this.jugadorUno.restricciones[1][2] = 40;
        this.mensaje = "POKER ARMADO +40 PUNTOS";
      }
    } else if ((dices[0] == dices[2] && dices[3] == dices[4] && dices[0] != dices[4] && this.jugadorUno.restricciones[2][2] == 0)
      || (dices[0] == dices[1] && dices[2] == dices[4] && dices[0] != dices[4] && this.jugadorUno.restricciones[2][2] == 0)) {
      if (verficacion) {
        this.sumatoriaJugadorDos += 35;
        this.jugadorUno.restricciones[2][2] = 35;
        this.mensaje = "FULL SERVIDO +35 PUNTOS";
      } else {
        this.sumatoriaJugadorDos += 30;
        this.jugadorUno.restricciones[2][2] = 30;
        this.mensaje = "FULL ARMADO +30 PUNTOS";
      }

    } else if (
      ((dices[0] + 1) == dices[1] && (dices[0] + 2) == dices[2] && (dices[0] + 3) == dices[3] && (dices[0] + 4) == dices[4] && this.jugadorUno.restricciones[3][2] == 0)
    ) {
      if (verficacion) {
        this.sumatoriaJugadorDos += 25;
        this.jugadorUno.restricciones[3][2] = 25;
        this.mensaje = "ESCALERA SERVIDA +25 PUNTOS";
      } else {
        this.sumatoriaJugadorDos += 20;
        this.jugadorUno.restricciones[3][2] = 20;
        this.mensaje = "ESCALERA ARMADA +20 PUNTOS";
      }
    } else {
      this.mensaje = this.valoresNumericos(dices);
    }
    return this.mensaje;
  }
  valoresNumericos(dices: number[]) {
    let auxiliar: number = this.sumatoriaJugadorDos;
    this.msj = "No obtuviste puntaje D:";
    if (dices[3] == dices[4] && dices[3] == dices[2]) { //chequea los tres ultimos numeros
      if ((dices[2] == 6 && this.jugadorUno.restricciones[9][2] == 0)) {
        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[9][2] = 18;
        this.msj = "Obtuviste valor numerico: 18";
      } else if (dices[2] == 5 && this.jugadorUno.restricciones[8][2] == 0) {
        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[8][2] = 15;
        this.msj = "Obtuviste valor numerico: 15";
      } else if (dices[2] == 4 && this.jugadorUno.restricciones[7][2] == 0) {

        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[7][2] = 12;
        this.msj = "Obtuviste valor numerico: 12";
      } else if (dices[2] == 3 && this.jugadorUno.restricciones[6][2] == 0) {

        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[6][2] = 9;
        this.msj = "Obtuviste valor numerico: 9";
      } else if (dices[2] == 2 && this.jugadorUno.restricciones[5][2] == 0) {
        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[5][2] = 6;
        this.msj = "Obtuviste valor numerico: 6";
      }
    } else if (dices[3] == dices[1] && dices[3] == dices[2]) { //chequea los 3 numeros del medio
      if (dices[2] == 6 && this.jugadorUno.restricciones[9][2] == 0) {
        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[9][2] = 18;
        this.msj = "Obtuviste valor numerico: 18";
      } else if (dices[2] == 5 && this.jugadorUno.restricciones[8][2] == 0) {
        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[8][2] = 15;
        this.msj = "Obtuviste valor numerico: 15";
      } else if (dices[2] == 4 && this.jugadorUno.restricciones[7][2] == 0) {
        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[7][2] = 12;
        this.msj = "Obtuviste valor numerico: 12";
      } else if (dices[2] == 3 && this.jugadorUno.restricciones[6][2] == 0) {
        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[6][2] = 9;
        this.msj = "Obtuviste valor numerico: 9";
      } else if (dices[2] == 2 && this.jugadorUno.restricciones[5][2] == 0) {
        this.sumatoriaJugadorDos += (dices[2] * 3);
        this.jugadorUno.restricciones[5][2] = 6;
        this.msj = "Obtuviste valor numerico: 6";
      }
    } else if (dices[0] == dices[1] && dices[0] == dices[2]) {
      if (dices[0] == 5 && this.jugadorUno.restricciones[8][2] == 0) {
        this.sumatoriaJugadorDos += (dices[0] * 3);
        this.jugadorUno.restricciones[8][2] = 15;
        this.msj = "Obtuviste valor numerico: 15";
      } else if (dices[0] == 4 && this.jugadorUno.restricciones[7][2] == 0) {
        this.sumatoriaJugadorDos += (dices[0] * 3);
        this.jugadorUno.restricciones[7][2] = 12;
        this.msj = "Obtuviste valor numerico: 12";
      } else if (dices[0] == 3 && this.jugadorUno.restricciones[6][2] == 0) {
        this.sumatoriaJugadorDos += (dices[0] * 3);
        this.jugadorUno.restricciones[6][2] = 9;
        this.msj = "Obtuviste valor numerico: 9";
      } else if (dices[0] == 2 && this.jugadorUno.restricciones[5][2] == 0) {
        this.sumatoriaJugadorDos += (dices[0] * 3);
        this.jugadorUno.restricciones[5][2] = 6;
        this.msj = "Obtuviste valor numerico: 6";
      } else if (dices[0] == 1 && this.jugadorUno.restricciones[4][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[0] * 3);
          this.jugadorUno.restricciones[4][2] = 3;
          this.msj = "Obtuviste valor numerico: 3";
      } //aca puede ir la validacon de los 3 6 pero es casi imposible que se de eso
    }
    if (dices[3] == dices[4] && this.sumatoriaJugadorDos == auxiliar) { //comparando si solo los ultimos 2 dados son iguales
      if (dices[3] == 6 && this.jugadorUno.restricciones[9][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[3] * 2);
          this.jugadorUno.restricciones[9][2] = 12;
          this.msj = "Obtuviste valor numerico: 12";
      } else if (dices[3] == 5 && this.jugadorUno.restricciones[8][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[3] * 2);
          this.jugadorUno.restricciones[8][2] = 10;
          this.msj = "Obtuviste valor numerico: 10";
      } else if (dices[3] == 4 && this.jugadorUno.restricciones[7][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[3] * 2);
          this.jugadorUno.restricciones[7][2] = 8;
          this.msj = "Obtuviste valor numerico: 8";
      } else if (dices[3] == 3 && this.jugadorUno.restricciones[6][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[3] * 2);
          this.jugadorUno.restricciones[6][2] = 6;
          this.msj = "Obtuviste valor numerico: 6";
      } else if (dices[3] == 2 && this.jugadorUno.restricciones[5][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[3] * 2);
          this.jugadorUno.restricciones[5][2] = 4;
          this.msj = "Obtuviste valor numerico: 4";
      }
    }
    if (dices[3] == dices[2] && this.sumatoriaJugadorDos == auxiliar ) { //comparando si los ados 3 y 4 son iguales
      if (dices[3] == 5 && this.jugadorUno.restricciones[8][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[3] * 2);
          this.jugadorUno.restricciones[8][2] = 10;
          this.msj = "Obtuviste valor numerico: 10";
      } else if (dices[3] == 4 && this.jugadorUno.restricciones[7][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[3] * 2);
          this.jugadorUno.restricciones[7][2] = 8;
          this.msj = "Obtuviste valor numerico: 8";
      } else if (dices[3] == 3 && this.jugadorUno.restricciones[6][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[3] * 2);
          this.jugadorUno.restricciones[6][2] = 6;
          this.msj = "Obtuviste valor numerico: 6";
      } else if (dices[3] == 2 && this.jugadorUno.restricciones[5][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[3] * 2);
          this.jugadorUno.restricciones[5][2] = 4;
          this.msj = "Obtuviste valor numerico: 4";
      }
    }
    if (dices[1] == dices[2] && this.sumatoriaJugadorDos == auxiliar ) { //comparando si los ados 2 y 3 son iguales
      if (dices[1] == 5 && this.jugadorUno.restricciones[8][2] == 0) {
          this.sumatoriaJugadorDos += (dices[1] * 2);
          this.jugadorUno.restricciones[8][2] = 10;
          this.msj = "Obtuviste valor numerico: 10";
      } else if (dices[1] == 4 && this.jugadorUno.restricciones[7][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[1] * 2);
          this.jugadorUno.restricciones[7][2] = 8;
          this.msj = "Obtuviste valor numerico: 8";
      } else if (dices[1] == 3 && this.jugadorUno.restricciones[6][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[1] * 2);
          this.jugadorUno.restricciones[6][2] = 6;
          this.msj = "Obtuviste valor numerico: 6";
      } else if (dices[1] == 2 && this.jugadorUno.restricciones[5][2] == 0) {
          this.sumatoriaJugadorDos += (dices[1] * 2);
          this.jugadorUno.restricciones[5][2] = 4;
          this.msj = "Obtuviste valor numerico: 4";
        }
    }
    if (dices[1] == dices[0] && this.sumatoriaJugadorDos == auxiliar ) { //comparando si los ados 2 y 1 son iguales
      if (dices[1] == 5 && this.jugadorUno.restricciones[8][2] == 0) {
          this.sumatoriaJugadorDos += (dices[1] * 2);
          this.jugadorUno.restricciones[8][2] = 10;
          this.msj = "Obtuviste valor numerico: 10";
      } else if (dices[1] == 4 && this.jugadorUno.restricciones[7][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[1] * 2);
          this.jugadorUno.restricciones[7][2] = 8;
          this.msj = "Obtuviste valor numerico: 8";
      } else if (dices[1] == 3 && this.jugadorUno.restricciones[6][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[1] * 2);
          this.jugadorUno.restricciones[6][2] = 6;
          this.msj = "Obtuviste valor numerico: 6";
      } else if (dices[1] == 2 && this.jugadorUno.restricciones[5][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[1] * 2);
          this.jugadorUno.restricciones[5][2] = 4;
          this.msj = "Obtuviste valor numerico: 4";
      } else if (dices[1] == 1 && this.jugadorUno.restricciones[4][2] == 0 ) {
          this.sumatoriaJugadorDos += (dices[0] * 2);
          this.jugadorUno.restricciones[4][2] = 2;
          this.msj = "Obtuviste valor numerico: 2";
      }
    }
    return this.msj;
  }

  resetGame() {
    this.puntajeDos = this.sumatoriaJugadorDos;
    this.sumatoriaJugadorDos = 0;
  }
}
