import { Controller, Get, Inject, Param, Query, Render } from '@nestjs/common';

import { BalanceService } from './balance.service';
import { GetBalancesQuery } from './dto/get-balances-query.dto';

@Controller()
export class BalanceController {
  constructor(@Inject(BalanceService) private readonly balanceService: BalanceService) {}

  @Get(`/apps/:appId/balances`)
  getAppBalances(@Param('appId') appId: string, @Query() query: GetBalancesQuery) {
    return this.balanceService.getBalances({ ...query, appId });
  }

  @Get(`/apps/:appId/balances.html`)
  @Render('balance')
  async renderAppBalances(@Param('appId') appId: string, @Query() query: GetBalancesQuery) {
    const data = await this.balanceService.getBalances({ ...query, appId });

    const resp = Object.entries(data).map(([address, balance]) => {
      return {
        address,
        products: balance.products,
        meta: balance.meta,
      };
    });

    return { data: resp };
  }
}
