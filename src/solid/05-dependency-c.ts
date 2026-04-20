import localPosts from '../data/local-database.json'
import type {Post} from "./05-dependency-b.ts";


export abstract class PostProvider {
    abstract getPosts(): Promise<Post[]>;
}

export interface HttpProvider {
    get(url: string): Promise<any>;
}

export class FetchProvider implements HttpProvider {
    async get(url: string): Promise<any> {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }

}

export class LocalDataBaseService implements PostProvider {

    constructor() {
    }

    getPosts(): Promise<Post[]> {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }];
    }

}

export class JsonDataBaseService implements PostProvider {
    async getPosts() {
        return localPosts;
    }
}

export class WebPostProvider implements PostProvider {

    constructor(
        private http: HttpProvider,
    ) {
    }

    getPosts(): Promise<Post[]> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

}
