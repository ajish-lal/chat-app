import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'emoji',
    pure: true
})

export class EmojiPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        console.log(value, args);
        if (value.includes(':)'))
            return args + " is feeling happy!";
        else if (value.includes(':('))
            return args + " is feeling sad!"
        else {
            return value;
        }
    }
};