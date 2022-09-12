export interface TwitterResponse<T> { data: T }

export interface ITwitter {
  tweets: ITweets[]
  user: IUser
}

export interface ITweets {
  id: string
  text: string
  public_metrics: {
    like_count: number
    quote_count: number
    reply_count: number
    retweet_count: number
  }
}

interface ITweet {
  id: string
  text: string
}

interface IMeta {
  newest_id: string
  oldest_id: string
  result_count: number
  next_token: string
}

export interface ITweetFetched {
  data: ITweet[]
  meta: IMeta
}

export interface IUser {
  data: {
    id: string
    username: string
    name: string
    profile_image_url?: string
  }
}
