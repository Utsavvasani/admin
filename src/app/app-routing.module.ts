import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminAddAnimeComponent } from './admin-add-anime/admin-add-anime.component';
import { AdminViewSignInComponent } from './admin-view-sign-in/admin-view-sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdminIndexComponent },
  { path: 'add-anime', component: AdminAddAnimeComponent },
  { path: 'view-signIn', component: AdminViewSignInComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
