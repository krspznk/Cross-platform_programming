import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MyForm } from '../myform/MyForm';
import { ValidationService } from './servise/validation.service';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {
  @Input() myform!: MyForm;
  myformForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private validator: ValidationService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.myformForm = this.fb.group({
      name: [this.myform.name, Validators.required],
      unit: [this.myform.unit, Validators.required],
      amount: [this.myform.amount, [Validators.required, Validators.min(0), Validators.max(100)]],
      price: [this.myform.price, [Validators.required, Validators.min(0)]],
      producers: this.fb.array(this.initProducers()),
    });

    this.disableForm(); // Вимикаємо всі поля за замовчуванням
  }

  initProducers() {
    const producersArray: any[] = [];
    if (this.myform.producers) {
      this.myform.producers.forEach((producer: any) => {
        producersArray.push(
          this.fb.group({
            name: [producer.name, Validators.required],
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

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      this.enableForm(); // Увімкнути всі поля для редагування
    } else {
      this.disableForm(); // Вимкнути всі поля
    }
  }

  enableForm() {
    this.myformForm.enable();
  }

  disableForm() {
    this.myformForm.disable();
  }

  onSubmit() {
    if (this.myformForm.valid) {
      const updatedMyForm = new MyForm(
        this.myformForm.value.name,
        this.myformForm.value.unit,
        this.myformForm.value.amount,
        this.myformForm.value.price,
        this.myformForm.value.producers.map((producer: any) => producer.name)
      );
      console.log(updatedMyForm);
      // Ось де ви могли б зробити щось із `updatedMyForm`, наприклад, відправити його на сервер або зберегти локально.
      this.toggleEditMode();
    }
  }
}
