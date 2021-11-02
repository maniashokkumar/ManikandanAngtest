import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
/*Dependeny injection inside constructor and for routing by click event imported router module*/ 
  constructor(private dbl:ServiceService,private route:Router) { }
  dis="block";
  readmore="blue";
 fa="fa fa-chevron-down"
  Rm=this.dbl.read;
  mainlogo="../../assets/IETLS.svg";

  place=" IELTS for the UK";
  ngOnInit(): void {
  }
  display(){
   this.dis="flex";
   this.fa="fa fa-chevron-up";
   
  }
  display1(){
    this.dis="none";
    this.fa="fa fa-chevron-down";
    
  }
  routee(){
    this.route.navigateByUrl("booktest")
  }

  

}
