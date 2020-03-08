import { CssTestComponent } from './pages/css-test/css-test.component';
import { SvgTestComponent } from './pages/svg-test/svg-test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SvgTestComponent
  },
  {
    path: 'svg',
    component: SvgTestComponent
  },
  {
    path: 'css',
    component: CssTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
