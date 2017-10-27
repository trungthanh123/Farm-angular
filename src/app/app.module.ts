import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProgressbarModule, PopoverModule, TooltipModule  } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import {MdProgressSpinnerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FarmComponent } from './farm.component';
import { RecycleMultiSortableComponent } from './test.component';
import { SignUpComponent } from './SignUp/sign-up.component';
import { LevelUserComponent } from './level-user/level.component';
import { ShopComponent } from './shop/shop.component';
import { MoneyComponent } from './money/money.component';

import { AppService } from './services/app.service';
import { LoginService } from './services/login.service';
import { CheckLogin } from './guards/check-login.guard';
import { PagerService } from './services/pagination.service';
import { FilterPipe } from './pipes/filter.pipe'

const appRoutes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'my-farm', component: FarmComponent, },
];
// canActivate: [CheckLogin]
@NgModule({
  declarations: [
    AppComponent,
    FarmComponent,
    RecycleMultiSortableComponent,
    SignUpComponent,
    LevelUserComponent, ShopComponent, MoneyComponent, FilterPipe
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ProgressbarModule.forRoot(), BrowserAnimationsModule, MdInputModule, MdProgressSpinnerModule,
    PopoverModule.forRoot(), TooltipModule.forRoot()
  ],
  providers: [LoginService, CheckLogin,AppService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
