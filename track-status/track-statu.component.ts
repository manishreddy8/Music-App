import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-track-statu',
  templateUrl: './track-statu.component.html',
  styleUrls: ['./track-statu.component.scss']
})
export class TrackStatuComponent implements OnInit {

  trackStatusForm: FormGroup;
  submitted = false;
  display = false;
  updateButton = true;
  closeButton = false;
  status = false;
  rejectionReason = false;
  InternalNotes = false;
  reasonDetails = false;
  notify = false;
  statusOptionValue: string="Pending";
selectedReason: string;
  constructor(private formBuilder: FormBuilder) { }

rejectionReasons = [
  {value: 'missingVersion', viewValue: 'Missing Version'},
  {value: 'productionValue', viewValue: 'Production Value'},
  {value: 'editedIncorrectly', viewValue: 'Edited Incorrectly'},
  {value: 'other', viewValue: 'Other'}
];
// rejectionReasons = new FormControl();

  ngOnInit() {

//     this.trackStatusForm = this.formBuilder.group({
//       status: [''],
//       reason: [''],
//       reasonDetails: [''],
//       notify: [''],
//       InternalNotes: ['']
//     });


  }
//   get f() { return this.trackStatusForm.controls; }
  closeForm() {
    this.display = false;
    this.closeButton = false;
    this.updateButton = true;
  }

  openForm() {

    this.closeButton = true;
    this.updateButton = false;
    this.display = true;
    this.status = true;
    this.InternalNotes = true;
    this.rejectionReason = false;
    this.notify = false;
this.reasonDetails = false;
  }

getRejectionReasons(event: {
  isUserInput: any;
  source: { value: any; selected: any };
}) {
  if (event.isUserInput) {
    if (event.source.selected === true && event.source.value == "other") {
      console.log(event.source.value)
      this.reasonDetails = true;
     this.notify = true;
    } else {
      console.log(event.source.value )
    }
    if (event.source.selected === false && event.source.value == "other") {
      this.reasonDetails = false;
      this.notify = false;
  }
}}


  onReasonSelection() {

    this.statusOptionValue = this.selectedReason;
    console.log(this.selectedReason);
    if (this.selectedReason == "Reject") {
      this.rejectionReason = true;
    }
    else {
      this.rejectionReason = false;
      this.reasonDetails = false;
      this.notify = false;
    }
  }
  // addReasonFocus() {
  //   this.notify = true;
  // }
  // addReasonfocusOut() {
  //   this.notify = false;
  // }

//   onSubmit() {
//     this.submitted = true;
//     // display form values on success
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.trackStatusForm.value, null, 4));
//   }


}
