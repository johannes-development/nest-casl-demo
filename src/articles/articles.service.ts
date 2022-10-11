import { Injectable } from '@nestjs/common';

import { Article } from "./interface/article.interface";

@Injectable()
export class ArticlesService {

  findAll(): Article[] {
    return [];
  }

}
