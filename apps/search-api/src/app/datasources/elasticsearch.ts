import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticSearchAPI {

    constructor(
        private readonly client: ElasticsearchService,
    ) {}

    async getProducts(): Promise<any[]> {
        const results = await this.client.search(
            { 
                index: 'product' ,
                query: {
                    match: {
                        country: 'France'
                    }
                }
            });
        console.log(results);
        return results.hits.hits.map((hit) => hit._source);
    }
}