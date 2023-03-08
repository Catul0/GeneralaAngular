import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './components/final/final.component';
import { HomeComponent } from './components/home/home.component';
import { JvjComponent } from './components/jvj/jvj.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { TiradaUnoComponent } from './components/rondas/tirada-uno/tirada-uno.component';

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'jugar', component:TiradaUnoComponent},
  {path: 'resultado', component:FinalComponent},
  {path: 'reglamento', component:ReglamentoComponent},
  {path: 'jvj', component:JvjComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
