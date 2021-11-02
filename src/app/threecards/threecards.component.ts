import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-threecards',
  templateUrl: './threecards.component.html',
  styleUrls: ['./threecards.component.css']
})
export class ThreecardsComponent implements OnInit {

  constructor(private dbl:ServiceService) { }
  Rm=this.dbl.read
  ngOnInit(): void {
  }

}
