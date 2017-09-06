import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmService {

    confirm(message?:string):Promise<Boolean>{
        return new Promise<Boolean>(resolve=> resolve(window.confirm(message || 'Is this Ok?' )))
    }
}