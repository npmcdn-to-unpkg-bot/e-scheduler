export interface Profile{
    picture:string;
    name: string;
    email: string;
}

export interface LoginResponse extends Profile{
    success:boolean;
    auth_token: string;
    profile: Profile;
}