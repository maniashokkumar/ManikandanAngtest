import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
star="../../assets/star.png"
testimonial="../../assets/testimonial.svg"
  constructor() { }
name="Terezia T.";
place="- IELTS Centre";
  ngOnInit(): void {
  }

}
