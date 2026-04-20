import {PostService} from './05-dependency-b';
import {FetchProvider, JsonDataBaseService, LocalDataBaseService, WebPostProvider} from "./05-dependency-c.ts";


// Main
(async () => {

    //const provider = new LocalDataBaseService();
    const fetchProvider = new FetchProvider();
    const provider = new WebPostProvider(fetchProvider);
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({posts})


})();
