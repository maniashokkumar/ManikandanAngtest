import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-writingtaslcard',
  templateUrl: './writingtaslcard.component.html',
  styleUrls: ['./writingtaslcard.component.css']
})
export class WritingtaslcardComponent implements OnInit {

  constructor(private dbl:ServiceService) { }
  Rm=this.dbl.read;
  color="#84c3b3"
  
  ngOnInit(): void {
  }

}
