import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TiradaUnoComponent } from './components/rondas/tirada-uno/tirada-uno.component';
import { FinalComponent } from './components/final/final.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { JvjComponent } from './components/jvj/jvj.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiradaUnoComponent,
    FinalComponent,
    ReglamentoComponent,
    JvjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
