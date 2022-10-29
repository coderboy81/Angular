import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OnsaleComponent } from './onsale/onsale.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: 'nav', component:NavComponent},
  {path: 'product', component:ProductComponent},
  {path: 'onsale', component:OnsaleComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path: 'details/:id',component:DetailsComponent},
  {path: '', component:WelcomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
