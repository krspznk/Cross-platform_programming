import { ConfigService } from "./config.service";
import { Student } from "./Student";

export class StudentList {

    private studentList: Student[] = [];
    private searchStudent: Student[] = [];
    searchStudentResult: string[] | undefined;

    specSub = this.configService.spec$.subscribe(() => {
        let spec = this.configService.spec$.value;
        this.search(spec.id);
    });

    constructor(private configService: ConfigService) {
        let student = new Student();
        student.first = "Христина";
        student.last = "Позняк";
        student.sex = "Жінка";
        student.birthday = new Date(2004, 6, 24); 
        student.group = 32;
        student.spec_id = 0;
        this.add(student);
        let student1 = new Student();
        student1.first = "Любомир";
        student1.last = "Білак";
        student1.sex = "Чоловік";
        student1.birthday = new Date(2004, 5, 8); 
        student1.group = 32;
        student1.spec_id = 1;
        this.add(student1);
        this.search(0);

    }

    add(student: Student) {
        this.studentList.push(student);
        this.search(student.spec_id);
        
    }

    search(id_spec: number) {
        this.searchStudent = this.studentList.filter((student) => {
            return student.spec_id === id_spec;
        });

        this.searchStudentResult = [];
        this.searchStudent.forEach(el => {
            this.searchStudentResult?.push("Ім'я: " + el.first);
            this.searchStudentResult?.push("Фамілія: " + el.last);
            this.searchStudentResult?.push("Стать: " + el.sex);
            this.searchStudentResult?.push("День народжння: " + el.birthday.toLocaleDateString());
            this.searchStudentResult?.push("Група: " + el.group);
            this.searchStudentResult?.push("Спеціальність: " + el.spec_id);
        });
    }
}
