export function spinalCase(title: string): string {
    return title.replace(/(?!^)([A-Z])/g, ' $1')
        .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
}