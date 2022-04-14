import { GroupService } from 'src/Services/group.service';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    updateEmployee(infoForModification: any): void;
}
