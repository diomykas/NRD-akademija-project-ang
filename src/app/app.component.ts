import { Component, AfterViewInit, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit(){
    this.router.navigate(['home']); 
  }

  constructor(private router: Router) {
  }

  routeToKnyguPasaulis(){
    this.router.navigate(['KnyguPasaulis']);
  }

}
