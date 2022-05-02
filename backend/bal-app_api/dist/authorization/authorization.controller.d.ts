import { AuthorizationService } from './authorization.service';
export declare class AuthorizationController {
    private readonly authorizationService;
    constructor(authorizationService: AuthorizationService);
    updateEmployee(): Promise<any>;
}
