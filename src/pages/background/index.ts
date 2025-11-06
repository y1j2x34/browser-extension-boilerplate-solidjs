console.log('This is the background page.');
console.log('Put the background scripts here.');
class BackgroundService {
    say(what: string) {
        console.log('hello', what);
    }
}

new BackgroundService().say('world');
