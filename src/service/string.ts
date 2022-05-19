function toCapitalize(str: string): string {
    return str && str[0].toUpperCase() + str.slice(1);
}

export function parseRepoName(repoName: string): string {
    return repoName.split('-').map((word) => toCapitalize(word)).join(' ');
}
