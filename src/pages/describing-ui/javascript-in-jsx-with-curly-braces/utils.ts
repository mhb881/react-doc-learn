import type { Person } from "../../../types/types";

export function getImageUrl(person: Person) {
    if (!person.imageSize) {
        person.imageSize = 's';
    }
    return (
        'https://i.imgur.com/' +
        person.imageId +
        person.imageSize +
        '.jpg'
    );
}
