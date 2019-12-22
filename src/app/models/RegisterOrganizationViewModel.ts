import { AddressViewModel } from "./AddressViewModel";
export interface RegisterOrganizationViewModel {
    name?: string;
    country?: string;
    industry?: string;
    registrationCode?: string;
    address?: AddressViewModel;
}
