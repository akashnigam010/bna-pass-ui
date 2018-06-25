import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToastyModule} from 'ng2-toasty';

import {MaterialModule} from '../material.module';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { AppHeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, ToastyModule],
  declarations: [AppSidebarComponent, AppHeaderComponent],
  exports: [AppSidebarComponent, AppHeaderComponent]
})
export class LayoutModule {}
