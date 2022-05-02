import { Group } from 'src/Entity/group.entity';
import { GroupService } from 'src/Services/group.service';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    updateEmployee(infoForModification: Group): void;
}
