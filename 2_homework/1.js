class Course{
    constructor(course , point) {
        this.course = course;
        this.point = point;
    }

    toString() {
        return `(${this.course}, ${this.point})`;
    }
}
class Student{
    constructor(name , std_num) {
        this.courses = [];
        this.name = name;
        this.std_num = std_num;
    }
    enroll(course_info)
    {
        this.courses.push(course_info);
    }

    toString()
    {
        return `학생 이름 = ${this.name} , 학번 = ${this.std_num} , 수강과목 = ${this.courses.join(', ')}`;
    }

}
class Department{
    constructor(dep) {
        this.dep = dep;
        this.course = [];
    }
    add_course(course , point){
        let crse = new Course(course,point);
        this.course.push(crse);
        return crse
    }
    toString() {
        return `학과 이름 = ${this.dep}, 개설 과목 = [${this.course.join(', ')}]`;
    }

}

dept = new Department("컴퓨터공학과");
c1 = dept.add_course("대학생활의설계", 1);
c2 = dept.add_course("데이터베이스", 3);
c3 = dept.add_course("웹프로그래밍", 3);
console.log(String(dept));

st = new Student("홍길동", 2020001);
st.enroll(c2);
st.enroll(c3);
console.log(String(st))

