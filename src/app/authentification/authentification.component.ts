import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { error } from 'util';
import { ok } from 'assert';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  
  

  constructor() { }

  ngOnInit() {
  } 
  /*authenticate() {
    const { email, password } = body;
    const compte = comptes.find(x => x.email === email && x.password === password);
    if (!compte) return error('email or password is incorrect');
    return ok({
        id: compte.id,
        email: compte.email,
        firstName: compte.firstName,
        lastName: compte.lastName,
        token: 'fake-jwt-token'
    })
}*/
  

}
