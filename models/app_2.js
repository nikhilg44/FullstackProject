import { TwitterClient } from 'twitter-api-client'
import { get } from 'axios'

const twitterClient = new TwitterClient({
    apiKey: "3PjCyxmmbhmjGBe8p8mtZLBMY",
    apiSecret: "nnf0t1LGbIJwHc8MBtn8oOvn7jteDAPXG1gw2IRswxfTC0nj4V",
    accessToken: "728184389058748417-IhP7fAKpFCdYlfh6iyev33Yc0q1Xj8E",
    accessTokenSecret: "K8ttGGpmWGFTuIyytQoikmKaU7T4oaOeUXQzagtwAsEXu"
})

    twitterClient.tweets.statusesUpdate({
        status: "My automated tweet"
    }).then (response => {
        console.log("Tweeted!", response)
    }).catch(err => {
        console.error(err)
    })
