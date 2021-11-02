import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-midcontainer',
  templateUrl: './midcontainer.component.html',
  styleUrls: ['./midcontainer.component.css']
})
export class MidcontainerComponent implements OnInit {
image="../../assets/home_banner.jpg"
  constructor(private dbl:ServiceService) { }
about= this.dbl.about;
  ngOnInit(): void {
  }

}
