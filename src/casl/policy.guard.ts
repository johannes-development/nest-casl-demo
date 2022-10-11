import { AppAbility } from '../casl/casl-ability.factory';
import { PolicyHandler } from "./handler.policy";
import { CaslAbilityFactory } from "./casl-ability.factory";
import { CHECK_POLICIES_KEY } from "./check.policy";


import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from "@nestjs/core";

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const policyHandlers =
      this.reflector.get<PolicyHandler[]>(
        CHECK_POLICIES_KEY,
        context.getHandler(),
      ) || [];

    // const { user } = context.switchToHttp().getRequest();
    const user = {
      id: 999,
      isAdmin: false,
    };

    const ability = this.caslAbilityFactory.createForUser(user);

    return policyHandlers.every((handler) =>
      this.execPolicyHandler(handler, ability),
    );
  }

  private execPolicyHandler(handler: PolicyHandler, ability: AppAbility) {
    if (typeof handler === 'function') {
      return handler(ability);
    }
    return handler.handle(ability);
  }
}
