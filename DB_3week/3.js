
class Animal{
    constructor(age) {
        this.age = age;
    }
}

class Cat extends Animal {
    constructor(name, age, breed) {
        super(age);
        this.name = name;
        this.breed = breed;
    }

    toString() {
        return `이름 : ${this.name} 나이 : ${this.age} 종 : ${this.breed}`;
    }
}
function get_oldest_cat(...cats)
{
    const max_age = Math.max(...cats.map(o => o.age));
    return cats.find(o=>o.age == max_age);
}
function sorted(cats)
    {
        return cats.sort((x,y) => x.age - y.age);
    }



c1 = new Cat("야옹이" , 4 , "페르시안");
c2 = new Cat("나비" , 2 , "아비시니안");
c3 = new Cat("프린세스" , 5 , "러시안블루");
console.log("가장 나이 많은 고양이" , String(get_oldest_cat(c1,c2,c3)));

for(let cat of sorted([c1 , c2 , c3]))
{
    console.log(String(cat));
}
