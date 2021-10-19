import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ClientComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
