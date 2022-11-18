import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Stage1Component } from './stage1/stage1.component';
import { Stage2Component } from './stage2/stage2.component';

const routes: Routes = [
  { path: 'stage1', component: Stage1Component },
  { path: 'stage2', component: Stage2Component },
  { path: '',   redirectTo: '/stage1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
