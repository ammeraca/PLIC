import { UsernameService } from './username.service';
import { Username } from './username.entity';
export declare class UsernameController {
    private readonly usernameService;
    constructor(usernameService: UsernameService);
    getAll(): Promise<Username[]>;
    createEmployee(newUsername: any): void;
    updateEmployee(usernameToUpdate: any): void;
    deleteEmployee(id: any): void;
}
