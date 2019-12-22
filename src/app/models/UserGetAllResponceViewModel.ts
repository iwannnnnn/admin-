
export interface UserGetAllResponceViewModel {
    id?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    status?: number;
    connected?: string[];
}

export interface UserGetAlReaponce {
    totalRows: number;
    result: UserGetAllResponceViewModel[];
}
