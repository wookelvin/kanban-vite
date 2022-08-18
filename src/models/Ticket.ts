export interface Ticket { 
    id: string;
    title: string;
    code: string;
    description: string;
    subTasks: string[];
    status: string;
}