import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeListComponent } from './cafe/cafe-list/cafe-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CafeListComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
