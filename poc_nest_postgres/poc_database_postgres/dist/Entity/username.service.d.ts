import { Repository } from 'typeorm';
import { Username } from './username.entity';
export declare class UsernameService {
    private usernameRepo;
    constructor(usernameRepo: Repository<Username>);
    findAll(): Promise<Username[]>;
    create(newUsername: any): void;
    update(usernametoUpdate: any): void;
    delete(id: any): void;
}
