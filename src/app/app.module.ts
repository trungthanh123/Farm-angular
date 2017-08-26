import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProgressbarModule, TooltipModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdDialogModule, MdMenuModule } from "@angular/material";

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
import { TreeService } from './services/tree.service';
import { ShoppingService } from './services/shopping.service';

import 'hammerjs';

const appRoutes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'my-farm', component: FarmComponent, canActivate: [CheckLogin] },
];
// canActivate: [CheckLogin]
@NgModule({
  declarations: [

    AppComponent,
    FarmComponent,
    RecycleMultiSortableComponent,
    SignUpComponent,
    LevelUserComponent, ShopComponent, MoneyComponent,
  ],
  imports: [

    BrowserModule,
    DndModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ProgressbarModule.forRoot(),
    HttpModule, BrowserAnimationsModule, MdInputModule, MdMenuModule, TooltipModule.forRoot()

  ],
  providers: [LoginService, CheckLogin, AppService, TreeService, ShoppingService],
  bootstrap: [AppComponent],

})
export class AppModule { }
