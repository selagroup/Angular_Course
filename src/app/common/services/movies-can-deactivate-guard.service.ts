import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MovieDetailsComponent } from '../../movies/movieDetails.component';
import { ConfirmService } from './confirm.service';

@Injectable()
export class MoviesCanDeactivateGuard implements CanDeactivate<MovieDetailsComponent> {

    constructor(private confirmDialog: ConfirmService){

    }
    canDeactivate(component: MovieDetailsComponent): Observable<boolean> | Promise<boolean> | boolean {
        if(component.editTitle!=component.selectedMovie.title ||
            component.editYear!=component.selectedMovie.year){
                return this.confirmDialog.confirm('Discard Changes');
            }
            return true;
    }


}
