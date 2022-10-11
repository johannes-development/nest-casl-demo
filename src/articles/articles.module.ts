import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { CaslModule } from "../casl/casl.module";

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [CaslModule],
})
export class ArticlesModule {}
