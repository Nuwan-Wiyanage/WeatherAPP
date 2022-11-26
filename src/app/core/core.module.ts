import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlerService } from './services/error-handler.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{provide: ErrorHandler, useClass: ErrorHandlerService}, HttpClientModule],
})
export class CoreModule { }
