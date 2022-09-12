import axios, { AxiosInstance } from 'axios';
import { ITweetFetched, IUser } from './twitter';

class HttpClient {
  static instance: AxiosInstance;

  static getInstance (): AxiosInstance {
    if (!this.instance) {
      return axios.create({
        baseURL: 'https://api.twitter.com/2/',
        headers: { Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}` }
      });
    }

    return this.instance;
  }
}

export interface ITwitterRequester {
  getUser: (username: string) => any
  searchTweets: (username: string) => any

}

export class TwitterRequester implements ITwitterRequester {
  private readonly requester: AxiosInstance;

  constructor () {
    this.requester = HttpClient.getInstance();
  }

  async getUser (username: string): Promise<IUser> {
    const { data } = await this.requester.get<IUser>(`users/by/username/${username}`);

    return data;
  }

  async searchTweets (subject: string): Promise<ITweetFetched> {
    const { data } = await this.requester.get<ITweetFetched>(`tweets/search/recent?query=${subject}&tweet.fields=author_id,created_at,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,public_metrics`);

    return data;
  }
}
