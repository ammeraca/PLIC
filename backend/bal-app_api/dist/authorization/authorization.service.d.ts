import { HttpService } from '@nestjs/axios';
export declare class AuthorizationService {
    private httpService;
    constructor(httpService: HttpService);
    getToken(): Promise<any>;
}
