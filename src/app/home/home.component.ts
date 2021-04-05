import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TrackerDetails } from '../providers/models/tracker-details';
import { TrackerService } from '../providers/service/tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trackerDetails: TrackerDetails[] = [];

  constructor(private trackerService: TrackerService) { }

  ngOnInit(): void {

    this.trackerService.getAll().subscribe((data: TrackerDetails[]) => {
      console.log(data);
      this.trackerDetails = data;
    });
  }

  delete(id: any): void {
    this.trackerService.delete(id).subscribe(data => {
      console.log(data);
    });
  }

}
