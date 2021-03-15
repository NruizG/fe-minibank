import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-summary',
  templateUrl: './transfer-summary.component.html',
  styleUrls: ['./transfer-summary.component.scss']
})
export class TransferSummaryComponent implements OnInit {
  public currentStep: number;
  public tranferForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    
  }
}
