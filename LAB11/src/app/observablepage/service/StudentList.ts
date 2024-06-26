import { ConfigService } from "./config.service";
import { Student } from "./Student";

export class StudentList {

    studentList = new Array();
    searchStudent = new Array();
    searchStudentResult: string[] | undefined;

    specSub = this.configService.spec$.subscribe(() => {
        let spec = this.configService.spec$.value;
        this.search(spec.id);
    });

    constructor(private configService: ConfigService) {}

    add(student: Student) {
        this.studentList.push(student);
        this.search(student.spec_id);
        
    }

    search(id_spec: number) {
        this.searchStudent = this.studentList.filter((student) => {
            return student.spec_id === id_spec;
        });
    }

    delete(id: number) {
        const index = this.studentList.findIndex(student => student.id === id);
        if (index !== -1) {
            this.studentList.splice(index, 1);
            this.search(this.configService.spec$.value.id);
        }
    }
    
    
}
