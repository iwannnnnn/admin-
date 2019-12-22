
export interface Location {
    address?: string;
    date?: string;
    time?: string;
}
export interface GetLocationViewModel {
    totalRows?: number;
    result?: Location[];
}
