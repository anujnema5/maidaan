import {customAlphabet} from 'nanoid'

export const nanoid = (length = 6)=> {
    const alphabets = "0123456789ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz"
    return customAlphabet(alphabets, length)();
}