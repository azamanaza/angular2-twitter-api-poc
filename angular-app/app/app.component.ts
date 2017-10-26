import { Component } from "@angular/core";
import { TwitterService } from "./twitter.service";

@Component({
    selector: "app",
    template: require('./app.component.html'),
    styles: [
        require('./app.component.css')
    ]
})
export class AppComponent {
    userDisplayName: string;
    tweets: any;

    constructor(private twitterService: TwitterService) {
        this.userDisplayName = "prattprattpratt";
        this.tweets = [];
    }

    fetchTweets(): void {
        this.twitterService.getUserTweets(this.userDisplayName)
            .subscribe((res: Response) => {
                console.log(res);
                this.tweets = res.json();
            });

    }

    getUserTweets(): any[] {
        return this.tweets;
    }
}
