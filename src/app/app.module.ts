import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FarmComponent } from './farm.component';
import { RecycleMultiSortableComponent } from './test.component';
import { SignUpComponent } from './SignUp/sign-up.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
