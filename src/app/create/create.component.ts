import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TrackerService } from '../providers/service/tracker.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

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
    this.trackerService.Create(this.trackerForm.value).subscribe(res => {
      console.log('Tracker created!')
      this.router.navigateByUrl('/home/')
    });
  }

}
