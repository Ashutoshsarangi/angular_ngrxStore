import { Component, OnInit } from '@angular/core';

// ngrxStore
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.action';
// End
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    constructor(private store: Store<any>) { }

    addTutorial(name, url) {
        console.log('step 1');
        this.store.dispatch(new TutorialActions.AddTutorial({ name, url }));
    }


    ngOnInit() {
    }

}
