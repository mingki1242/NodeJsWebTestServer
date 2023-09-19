function Student(id , name , grade)
{
    this.id = id
    this.name = name
    this.grade = grade

    this.toString = function () {return `(${this.id} ${this.name} ${this.grade})`}
    this.toJSON = function () {return this.toString();}
}


const s1 = new Student(1234,"홍길동" , 3.14)
const s2 = new Student(1224,"이순신" , 2.14)
const s3 = new Student(1233,"김철수" , 4.14)

const A = [s1 , s2 , s3]


A.sort((x,y) => {
    if(x.name < y.name)
        return -1
    if(x.name > y.name)
        return 1
    else
        return 0
})

console.log(JSON.stringify(A))


