import { User } from './User';
import { Location } from './Location';
export interface ProfilleUserViewModel {
    id?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    status?: number;
    connected?: User[];
    locations: Location[];
}
