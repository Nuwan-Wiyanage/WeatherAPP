import { Injectable } from '@angular/core';

//This service used to load a spinner icon while API requests are in still pending
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading = true;

  constructor() { }

  setLoaderStatus(loadingStatus: boolean){
    this.loading = loadingStatus;
  }

  getLoaderStatus(){
    return this.loading;
  }

}
