import { IonicErrorHandler } from 'ionic-angular';

import { Pro } from '@ionic/pro';

import { Injectable, ErrorHandler, Injector } from '@angular/core';


 
// initializing the Ionic Pro client
const IonicPro = Pro.init('0b9cde1a', {
 appVersion: "0.0.1"
});
 
@Injectable()
export class AppErrorHandlerProvider implements ErrorHandler {
  debugger

 ionicErrorHandler: IonicErrorHandler;
 constructor(injector: Injector) {
   try {
     this.ionicErrorHandler = injector.get(IonicErrorHandler);
   } catch(e) {
     // Unable to get the IonicErrorHandler provider, ensure
     // IonicErrorHandler has been added to the providers list below
   }
 }
 handleError(err: any): void {
  debugger
   IonicPro.monitoring.handleNewError(err); // Remove this if you want to disable Ionic's auto exception handling in development mode.
   this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);

 }
}