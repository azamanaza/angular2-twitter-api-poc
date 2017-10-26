import {Component} from "@angular/core";

@Component({
    selector: "app",
    template: require('./app.component.html')
})
export class AppComponent {
    userDisplayName: string;
    tweets: any[];

    constructor() {
        this.userDisplayName = "prattprattpratt";
        this.tweets = [];
    }

    fetchTweets(): void {
        this.tweets = [];
    }

    getUserTweets(): any[] {
        return [];
    }
}
