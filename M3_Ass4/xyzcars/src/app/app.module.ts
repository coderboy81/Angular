import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { OnsaleComponent } from './onsale/onsale.component';

import { CarproductService } from './carproduct.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    OnsaleComponent,
    WelcomeComponent,
    DetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarproductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
