import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialModule } from '../shared/material/material.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    CardsComponent,
    FooterComponent
  ]

})
export class ComponentsModule { }
