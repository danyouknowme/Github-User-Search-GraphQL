export interface NotifyProps {
    message: string;
    active: boolean;
}

export interface CardProfileProps {
    user: User;
}

export interface User {
    name: string;
    email?: string;
    company?: string;
    bio?: string;
    avatarUrl?: string;
    followers: {
        totalCount: number;
    };
    following: {
        totalCount: number;
    };
}
