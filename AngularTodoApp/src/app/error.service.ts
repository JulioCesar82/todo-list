import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'

@Injectable({
providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

    public error = new Subject<Error>();

    constructor(private injector: Injector) 
    {

    }

    handleError(error: any): void {
        console.log('ERROR', error);
  
        if (Error instanceof HttpErrorResponse)
            console.log(error.status);
  
        this.error.next(error);
    }
}
