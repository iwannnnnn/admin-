import { RegisterUserViewModel } from './RegisterUserViewModel';
import { RegisterOrganizationViewModel } from './RegisterOrganizationViewModel';
import { ContactInfo } from './ContactInfo';
import { ClientDeviceViewModel } from './ClientDeviceViewModel';
export interface RegisterViewModel {
    userinfo?: RegisterUserViewModel;
    requestdateUTC?: string;
}

