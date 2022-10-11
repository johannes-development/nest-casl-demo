import { Article as iArticle} from "./interface/article.interface";

export class Article implements iArticle {
  id: number;
  isPublished: boolean;
  authorId: number;
}
