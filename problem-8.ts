function validateKeys<T extends object>(obj: T, keys: (keyof T)[]):boolean{
    if(keys.every(k=> k in obj)){
        return true;
    }else{
        return false;
    }
}

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));