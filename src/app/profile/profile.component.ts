//--------Angular Imports---------//
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//--------Other Imports----------//
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

    constructor(private auth: AuthService) {}

    ngOnInit() {

    }
    
}