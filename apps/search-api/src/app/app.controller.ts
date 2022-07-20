import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import {ElasticSearchAPI} from './datasources/elasticsearch'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService , private readonly elasticSearchAPI : ElasticSearchAPI) {}

  @Get()
  getData() {
    return this.elasticSearchAPI.getProducts();
  }
}
