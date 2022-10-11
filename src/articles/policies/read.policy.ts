import { IPolicyHandler } from "../../casl/handler.policy";
import { AppAbility } from "../../casl/casl-ability.factory";
import { Action } from "../../casl/action.enum";
import { Article } from "../article.entity";

export class ReadArticlePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, Article, 'id');
  }
}
