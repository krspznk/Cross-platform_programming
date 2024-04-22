import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MyForm } from '../myform/MyForm';
import { ValidationService } from './servise/validation.service';
@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent  implements OnInit {

  @Input() myform!: MyForm;
  @Output() myformUpdatedEvent: EventEmitter<MyForm> =
    new EventEmitter<MyForm>();
  myformForm!: FormGroup;
  validation!: ValidationService;

  constructor(private fb: FormBuilder, private validator: ValidationService) {
    this.validation = validator;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.myformForm = this.fb.group({
      name: [this.myform.name, Validators.required],
      unit: [this.myform.unit, Validators.required],
      amount: [
        this.myform.amount,
        [Validators.required, this.validation.positiveNumber],
      ],
      price: [
        this.myform.price,
        [Validators.required, this.validation.positiveNumber],
      ],
      producers: this.fb.array(this.initProducers()),
    });
  }

  initProducers() {
    const producersArray: any[] = [];
    if (this.myform.producers) {
      this.myform.producers.forEach((producer: any) => {
        producersArray.push(
          this.fb.group({
            name: [producer, Validators.required],
          })
        );
      });
    }
    return producersArray;
  }

  get producersControls() {
    return (this.myformForm.get('producers') as FormArray).controls;
  }

  addProducer() {
    const producersControls = this.fb.group({
      name: ['', Validators.required],
    });
    (this.myformForm.get('producers') as FormArray).push(producersControls);
  }

  deleteProducer(index: number) {
    (this.myformForm.get('producers') as FormArray).removeAt(index);
  }

  onSubmit() {
    if (this.myformForm.valid) {
      const updatedMyForm = new MyForm(
        this.myformForm.value.name,
        this.myformForm.value.unit,
        this.myformForm.value.amount,
        this.myformForm.value.price,
        this.myformForm.value.producers.map(
          (producer: { name: any }) => producer.name
        )
      );
      this.myformUpdatedEvent.emit(updatedMyForm);
    }
  }

}
