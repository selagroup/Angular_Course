import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConfirmService } from './confirm.service';
import {MovieDetailsContainerComponent} from "../movies/movie-details-container/movie-details-container.component";

@Injectable()
export class MoviesCanDeactivateGuard implements CanDeactivate<MovieDetailsContainerComponent> {

    constructor(private confirmDialog:ConfirmService){

    }
    canDeactivate(component: MovieDetailsContainerComponent): Observable<boolean> | Promise<boolean> | boolean {
        if(component.hasChanged){
          return this.confirmDialog.confirm('Discard Changes');
        }

        return true;
    }


}
