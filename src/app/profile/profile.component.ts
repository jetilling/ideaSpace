//--------Angular Imports---------//
import { Component, OnInit }                    from '@angular/core';
import { Router, ActivatedRoute, Params }       from '@angular/router';

//--------Other Imports----------//
import { Observable }                               from 'rxjs/Observable';
import { AuthService }                          from '../services/auth.service';
import { ProfileService }                       from '../services/profile.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

    constructor(private auth: AuthService,
                private profileService: ProfileService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                this.profileService.getAllWork(params.displayName)
            });

    }

    
}