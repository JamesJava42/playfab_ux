import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MattableComponent } from './mattable/mattable.component'
import { LocationComponent } from './pages/location/location.component';
const routes: Routes = [
 { path:'home', component: MattableComponent},
 { path: '', redirectTo: '/home' , pathMatch: 'full'},
 {path: 'main' , component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
