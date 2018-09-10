import { Component, OnInit } from '@angular/core';
import { SportsmanService } from '../sportsman.service';
import { Sportsman } from '../sportsman';

@Component({
  selector: 'app-sportsman-list',
  templateUrl: './sportsman-list.component.html',
  styleUrls: ['./sportsman-list.component.css']
})
export class SportsmanListComponent implements OnInit {

  /**
     * Constructor for the component
     * @param sportsmanService The sportsman's services provider
     */
  constructor(private sportsmanService:SportsmanService) { }


  /**
     * The list of sportsman which belong to the BookStore
     */
    sportspeople: Sportsman[];

     /**
     * Asks the service to update the list of sportsman
     */
    getSportspeople(): void {
      this.sportsmanService.getSportspeople()
          .subscribe(sportspeople => this.sportspeople = sportspeople);
  }

   /**
     * This will initialize the component by retrieving the list of sportsman from the service
     * This method will be called when the component is created
     */
  ngOnInit() {
    this.getSportspeople();
  }

}
