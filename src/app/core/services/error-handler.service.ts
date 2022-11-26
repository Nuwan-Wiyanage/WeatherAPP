import { Injectable } from '@angular/core';

//Global Error Handler
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }
  handleError(error: any): void {
    alert(error);
  }
}
