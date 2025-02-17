export enum cardGameItemsFruitName {
    'APPLE' = 'apple',
    'ORANGE' = 'orange',
    'BANANA' = 'banana',
    'STRAWBERRY' = 'strawberry',
    'PEAR' = 'pear',
    'GRAPE' = 'grape',
}

export enum cardGameItemsAnimalName {
    'DOG' = 'dog',
    'CAT' = 'cat',
    'ELEPHANT' = 'elephant',
    'TIGER' = 'tiger',
    'GIRAFFE' = 'giraffe',
    'BEAR' = 'bear',
}

export interface CardItemsI {
    name: string;
}

export enum gameVariant {
    'FRUIT' = 'fruit',
    'ANIMAL' = 'animal',
}
