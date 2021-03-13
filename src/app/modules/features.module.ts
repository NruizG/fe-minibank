import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { RoleModuleService } from 'gungnir-role-utils';

@NgModule({
  declarations: [],
  imports: [
    FeaturesRoutingModule,
    OverlayModule
  ],
  providers: [RoleModuleService]
})
export class FeaturesModule { }
