import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    pathMatch: 'prefix',
    children: 
    [
      {
        path: '',
        redirectTo : 'home',
        pathMatch : 'full'
      },
      
      {
        path : 'terrestrial',
        loadChildren: () =>
          import("../terrestrial/terrestrial.module").then(m => m.TerrestrialModule)
      },
      {
        path : 'home',
        loadChildren: () =>
          import("../home/home.module").then(m => m.HomeModule)
      },
      {
        path : 'customs',
        loadChildren: () =>
          import("../customs/customs.module").then(m => m.CustomsModule)
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
