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

export interface Repository {
    name: string;
    url: string;
    description: string;
    primaryLanguage: {
        name: string;
    };
}

export interface CardRepoProps {
    repo: Repository;
}
