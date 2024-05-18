import { Component, OnInit } from '@angular/core';
import { StudentList } from './service/StudentList';
import { SpecList } from './service/SpecList';
import { Student } from './service/Student';
import { Spec } from './service/Spec';
import { ConfigService } from './service/config.service';
import { Observable, BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {

  specs = new SpecList();

  private configService = new ConfigService();

  private subscriptions: Subscription[] = [];

  studentList = new StudentList(this.configService); 

  spec: Spec = new Spec();

  count = 0

  constructor() { }

  ngOnInit() {
    const specSub = this.configService.spec$
    .subscribe(() => {this.spec = this.configService.spec$.value});
    this.subscriptions.push(specSub);
  }

  nextSpec(){
    if (this.count < this.specs.spec.size - 1){
      this.count ++;
    }
    else this.count = 0;
    this.configService.setSpec(this.specs.spec.get(this.count));
  }

  addStudent(first: any, last: any, sex: any, birthday: any, group: any ){
    let student = new Student();
    student.first = first;
    student.last = last;
    student.sex = sex;
    student.birthday = new Date(birthday); 
    student.group = group;
    student.spec_id = this.spec.id;
    this.studentList.add(student);
    
  }

  addSpec(spec:any){
    let s = new Spec();
    s.id = this.specs.spec.size;
    s.name = spec;
    this.specs.addSpec(s); 
  }
  ngOnDestroy(){
    this.subscriptions.forEach(s=> s.unsubscribe);
  }
}
