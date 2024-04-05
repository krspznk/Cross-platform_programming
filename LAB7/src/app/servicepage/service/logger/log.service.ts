import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  write(logMessage: string) {
    var logString =
      '[' +
      new Date().toISOString().replace('T', ' ').replace(/\..+/, '') +
      '] - ';

    console.log(logString + logMessage);
  }
  constructor() { }
}
