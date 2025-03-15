export interface Item {
    id: string;
    title: string;
    description: string;
    status: 'lost' | 'found';
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}