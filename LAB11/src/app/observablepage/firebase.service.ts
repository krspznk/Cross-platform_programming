import { Injectable } from '@angular/core';
import { Spec } from './service/Spec'; 
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Student } from './service/Student';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  studentListRef?: AngularFireList<any>;
  specListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createStudent(student: Student){
    return this.studentListRef?.push({
      frist: student.first,
      last: student.last,
      sex: student.sex,
      years:student.years,
      group: student.group,
      spec_id: student.spec_id
    })
  }

  createSpec(spec: Spec){
    return this.specListRef?.push({
      id: spec.id,
      name: spec.name
    })
  }

  getRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + id);
    console.log('bdRef=' + this.bdRef.snapshotChanges());
    return this.bdRef;
  }

  //true - student 
  //false - spec
  getRecordList(bd: string, op: boolean) {
    if (op) {
      this.studentListRef = this.db.list('/' + bd);
      console.log('students: ' + this.studentListRef);

      return this.studentListRef;
    } else {
      this.specListRef = this.db.list('/' + bd);
      console.log('spec: ' + this.specListRef);
      return this.specListRef;
    }
  }

  updateStudent(id : number, student: Student, bd: string){
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      frist: student.first,
      last: student.last,
      sex: student.sex,
      birthday:student.years,
      group: student.group,
      spec_id: student.spec_id
    })
  }

  updateSpec(id : number, spec: Spec, bd: string){
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      id: spec.id,
      name: spec.name
    })
  }

  deleteRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    this.bdRef.remove();
  }
}
