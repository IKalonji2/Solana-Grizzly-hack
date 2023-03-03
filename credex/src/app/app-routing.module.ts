import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeerbidsComponent } from './pages/peerbids/peerbids.component';
import { MybidsComponent } from './pages/mybids/mybids.component';
import { LoansComponent } from './pages/loans/loans.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'loan', component: LoansComponent },
  { path: 'bid', component: MybidsComponent },
  { path: 'approve', component: PeerbidsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
