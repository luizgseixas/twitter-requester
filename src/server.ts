import { AxiosError } from 'axios';
import 'dotenv/config';
import { ITwitterRequester, TwitterRequester } from './requester';
import { ITweetFetched } from './twitter';

const requester: ITwitterRequester = new TwitterRequester();

// requester.getUser('magaffafinho').then((response: AxiosResponse) => console.log(response.data)).catch((err: AxiosError) => console.error(err.message));

// requester.getLookup('magaffafinho').then((response: AxiosResponse) => console.log('response.data', response)).catch((err: AxiosError) => console.error('error:', err));

requester.searchTweets('banana').then((response: ITweetFetched) => {
  console.log('response.data', response);
}).catch((err: AxiosError) => console.error('error:', err));
