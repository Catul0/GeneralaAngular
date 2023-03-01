import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  dices: number[]=[];
  constructor() { }
  resetDices(){
    let newDices=[0,0,0,0,0];
    return newDices;
  }
  getDices(){
    this.dices=[0,0,0,0,0];
    for( let i=0; i<5; i++)[
      this.dices[i]=Math.floor(Math.random() * 6)+1
    ]
    
    return this.dices.sort();
  }
  cambiarDados(nuevos:number[]){
    if(nuevos[0]!=0) nuevos[0]=Math.floor(Math.random() * 6)+1;
    if(nuevos[1]!=0) nuevos[1]=Math.floor(Math.random() * 6)+1;
    if(nuevos[2]!=0) nuevos[2]=Math.floor(Math.random() * 6)+1;
    if(nuevos[3]!=0) nuevos[3]=Math.floor(Math.random() * 6)+1;
    if(nuevos[4]!=0) nuevos[4]=Math.floor(Math.random() * 6)+1;
      
    return nuevos;
  }
  
  
}
