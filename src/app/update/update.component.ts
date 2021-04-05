import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TrackerService } from '../providers/service/tracker.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id: any = 0;

  trackerForm: FormGroup = this.fb.group({
    description: [''],
    severity: [''],
    createdDate: [''],
    updateDate: [''],
    status: ['']
  });


  constructor(public fb: FormBuilder,
    private router: Router,
    public trackerService: TrackerService) { }


  ngOnInit() {
    
  }

  submitForm() {
    this.trackerService.update(this.id, this.trackerForm.value).subscribe(res => {
      console.log('Tracker Update!')
      this.router.navigateByUrl('/home/')
    });
  }


}
