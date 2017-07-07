import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FarmComponent } from './farm.component';
import { RecycleMultiSortableComponent } from './test.component';
import { SignUpComponent } from './SignUp/sign-up.component';

const appRoutes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'my-farm', component: FarmComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FarmComponent,
    RecycleMultiSortableComponent,
    SignUpComponent,
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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
