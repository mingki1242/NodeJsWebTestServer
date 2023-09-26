class PhoneBook{
    constructor() {
        this.contact = {};
    }
    toString(){
        let msg = "";
        for(let [key,value] of Object.entries(this.contact))
        {
            msg+=`${key}\n전화번호 : ${value.phone}\n 이메일 : ${value.email}`
        }
        return msg
    }
    add(name , phone , email){
        this.contact[name] = {phone , email};

    }
    get(name)
    {
        return this.contact[name]
    }
}

pb = new PhoneBook();
pb.add("Cho" , "010-1111-1111" , "cho@gmail.com")
pb.add("Park" , "010-1111-1121" , "park@gmail.com")
console.log(String(pb))
console.log("Cho의 주소록 = " , pb.get("Cho"));