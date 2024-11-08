function validateKeys<T extends object>(obj: T, keys: (keyof T)[]):boolean{
    if(keys.every(k=> k in obj)){
        return true;
    }else{
        return false;
    }
}

