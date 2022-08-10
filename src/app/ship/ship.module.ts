import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShipRoutingModule } from './ship-routing.module';
import { ShipComponent } from './ship.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ShipComponent,
    
  ],
  imports: [
    CommonModule,
    ShipRoutingModule,
    NgbModule
  ],
  providers: []
})
export class ShipModule { }

