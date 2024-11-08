interface Profile{
    name: string;
    age: number;
    email:string;

}

function updateProfile(profile: Profile, update:Partial<Profile> ): Profile{
    return {...profile, ...update};
}


