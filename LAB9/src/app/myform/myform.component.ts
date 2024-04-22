import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MyForm } from './MyForm';
import { ValidationService } from './servise/validation.service';


@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {
  MyForm!: FormGroup;
  form!: MyForm;

  @Output() formAddedEvent: EventEmitter<MyForm> =
    new EventEmitter<MyForm>();

  constructor( private fb: FormBuilder,
  myFormValidationService: ValidationService
    ) {
      this.MyForm = fb.group({
        name: ['', [Validators.required]],
        unit: ['', [Validators.required, myFormValidationService.unitOfMeasurement]],
        amount: [
          '',
          [Validators.required, myFormValidationService.amountNumber],
        ],
        price: [
          '',
          [Validators.required, myFormValidationService.positiveNumber],
        ],
        producers: this.fb.array([]),
      });
     }
     addProducer() {
      console.log('Add');
      const Producer = this.fb.group({
        name: ['', Validators.required],
      });
      (this.MyForm.controls['producers'] as FormArray).push(
        Producer
      );
    }
  
    deleteProducer(i: any) {
      console.log('Delete');
      (this.MyForm.controls['producers'] as FormArray).removeAt(i);
    }
  
    getControls() {
      console.log('getControls');
      return (this.MyForm.get('producers') as FormArray).controls;
    }
  
    onSubmit() {
      if (this.MyForm.valid) {
        console.log('Submit');
        this.form = new MyForm(
          this.MyForm.value.name,
          this.MyForm.value.unit,
          this.MyForm.value.amount,
          this.MyForm.value.amount,
          this.MyForm.value.producers
        );
    
        console.log(this.form); 

        this.formAddedEvent.emit(this.form);
      }
    }
  
  ngOnInit() {}

}
