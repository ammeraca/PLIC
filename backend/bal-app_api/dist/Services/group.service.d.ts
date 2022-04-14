import { Group } from 'src/Entity/group.entity';
import { Repository } from 'typeorm';
export declare class GroupService {
    private groupRepo;
    constructor(groupRepo: Repository<Group>);
    update(infoForModification: any): Promise<void>;
}
