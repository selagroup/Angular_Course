import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmService {

    confirm(message?:string):Promise<boolean>{
        return new Promise<boolean>(resolve => resolve(window.confirm(message || 'Is this Ok?' )))
    }
}
