export interface NavbarElements {
    name: string;
    visibility: boolean;
    id?: string;
    path?: string;
    action?: () => void;
    tooltip?: string;
}
