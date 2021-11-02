import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-authorprofile',
  templateUrl: './authorprofile.component.html',
  styleUrls: ['./authorprofile.component.css']
})
export class AuthorprofileComponent implements OnInit {

  constructor(private dbl:ServiceService) { }
  Rm=this.dbl.read
  ngOnInit(): void {
  }

}
