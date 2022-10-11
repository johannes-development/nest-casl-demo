import { Controller, Get, UseGuards } from '@nestjs/common';
import { CheckPolicies } from "../casl/check.policy";
import { PoliciesGuard } from "../casl/policy.guard";
import { ReadArticlePolicyHandler } from "./policies/read.policy";

import { ArticlesService } from "./articles.service";
import { Article } from "./interface/article.interface";

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {} 

  @Get()
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ReadArticlePolicyHandler())
  findAll() {
    return this.articlesService.findAll();
  }

}
