import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinqueGComponent } from './cinque-g/cinque-g.component';
import { TempoCorrenteComponent } from './tempo-corrente/tempo-corrente.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'tempo-corrente', component:TempoCorrenteComponent }, 
  { path: 'cinque-g', component: CinqueGComponent}, 
  { path: 'Home', component: HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
