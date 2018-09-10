import { Component, OnInit } from '@angular/core';
import { SportService } from '../sport.service';
import { Sport } from '../sport';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css']
})
export class SportListComponent implements OnInit {

  constructor(private sportService: SportService) { }

   /**
     * The list of sports in the BookStore
     */
    sports: Sport[];

     /**
     * Asks the service to update the list of sports
     */
    getSports(): void {
      this.sportService.getSports()
          .subscribe(sports => this.sports = sports);
  }
  ngOnInit() {
    this.getSports();
  }

}
