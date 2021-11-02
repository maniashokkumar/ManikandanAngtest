import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viedocontainer',
  templateUrl: './viedocontainer.component.html',
  styleUrls: ['./viedocontainer.component.css']
})
export class ViedocontainerComponent implements OnInit {
color="red";
  constructor(private dbl:ServiceService) { }
  about=this.dbl.about;
  ngOnInit(): void {
  }

}
