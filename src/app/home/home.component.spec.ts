import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackerDetails } from '../providers/models/tracker-details';
import { TrackerService } from '../providers/service/tracker.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockTrackerService: TrackerService;
  let mockdata: TrackerDetails[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HomeComponent],
      providers: [
        { provide: TrackerService, useValue: mockTrackerService }
      ],
      schemas:[
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    mockTrackerService = jasmine.createSpyObj("TrackerService", ["delete"]);
    (mockTrackerService.delete as jasmine.Spy).and.returnValue("Deleted Successfully");
    mockTrackerService = jasmine.createSpyObj("TrackerService", ["getAll"]);
    (mockTrackerService.getAll as jasmine.Spy).and.returnValue(mockdata);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Click delete button', () => {
    expect(component.delete).toHaveBeenCalled();
  });
});
