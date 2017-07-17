import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap';


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
    LevelUserComponent, ShopComponent, MoneyComponent
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
    ProgressbarModule.forRoot(),
  ],
  providers: [LoginService, CheckLogin,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
