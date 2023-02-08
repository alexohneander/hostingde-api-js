export default class Client {
    Url: string;
    Token: string;
    Limit: number;

    constructor(url:string, token:string, limit:number){
        this.Url = url;
        this.Token = token;
        this.Limit = limit;
    }
}