//stack 클래스 구현 실습
class Stack
{
    constructor() {
        this.data = [];
    }
    pop(){
        if(this.data.length === 0) return null;
        return this.data.pop();
    }
    push(e){
        return this.data.push(e);
    }
    top(){
        if(this.data.length === 0) return null;
        return this.data[this.data.length-1];
    }
    length(){
        return this.data.length;
    }
}

S = new Stack();
S.push(1)
S.push(5)
S.push(3)
console.log(S.length());
console.log(S.pop());
console.log(S.top());