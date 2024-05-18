import { Component, OnInit } from '@angular/core';
import { StudentList } from './service/StudentList';
import { SpecList } from './service/SpecList';
import { Student } from './service/Student';
import { Spec } from './service/Spec';
import { ConfigService } from './service/config.service';
import { Observable, BehaviorSubject, Subscription} from 'rxjs';
import { FirebaseService } from './firebase.service';
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
  bdStudent = 'Student'
  bdSpec = 'Spec'
  constructor(private fbService: FirebaseService) { }

  ngOnInit() {
    this.fetchTask(this.bdStudent, true);

    let taskRes = this.fbService.getRecordList(this.bdStudent, true);
    taskRes.snapshotChanges().subscribe();

    this.fetchTask(this.bdSpec, false);
    let taskRes1 = this.fbService.getRecordList(this.bdSpec, false);
    taskRes1.snapshotChanges().subscribe();

    console.log("Good");
    
    const citySub = this.configService.spec$.subscribe(() => {
      this.spec = this.configService.spec$.value;
    });
    this.subscriptions.push(citySub);

    console.log("Error");
  }

  fetchTask(bd: any, op: any) {
    this.fbService
      .getRecordList(bd, op)
      .valueChanges()
      .subscribe((res) => {
        console.log("Res: " + res);
        if (op) {
          this.studentList.studentList = res;
        } else {
          this.specs.spec = res;
          this.spec = this.specs.spec[this.count];
          this.studentList.search(this.spec.id);
        }
      });
  }

  nextSpec(){
    if (this.count < this.specs.spec.length - 1){
      this.count ++;
    }
    else this.count = 0;
    this.configService.setSpec(this.specs.spec[this.count]);
  }

  addSpec(spec:any){
    let s = new Spec();
    s.id = this.specs.spec.length +1;
    s.name = spec;
    this.fbService.createSpec(s); 
  }


  addStudent(first: any, last: any, sex: any, birthday: any, group: any ){
    let student = new Student();
    student.first = first;
    student.last = last;
    student.sex = sex;
    student.birthday = new Date(birthday); 
    student.group = group;
    student.spec_id = this.spec.id;

    this.fbService.createStudent(student);
    this.studentList.search(this.spec.id);
    this.studentList.add(student);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(s=> s.unsubscribe);
  }
}
