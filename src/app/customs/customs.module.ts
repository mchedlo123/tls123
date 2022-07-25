import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomsRoutingModule } from './customs-routing.module';
import { CustomsComponent } from './customs.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CustomsComponent,
  ],
  imports: [
    CommonModule,
    CustomsRoutingModule,
    NgbModule
  ],
  providers: []
})
export class CustomsModule { }
