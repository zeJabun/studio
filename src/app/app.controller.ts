import { Controller, Get, Inject, NotFoundException, Param, Query, Render } from '@nestjs/common';

import { AppService } from './app.service';
import { GetAppBalancesQuery } from './dto/get-app-balances-query.dto';

@Controller('/apps')
export class AppController {
  constructor(@Inject(AppService) private readonly appService: AppService) {}

  @Get()
  getApps() {
    return this.appService.getApps();
  }

  @Get(`/:appId`)
  getApp(@Param('appId') appId: string) {
    try {
      return this.appService.getApp(appId);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Get(`/:appId/balances`)
  getAppBalances(@Param('appId') appId: string, @Query() query: GetAppBalancesQuery) {
    return this.appService.getAppBalances({ ...query, appId });
  }

  @Get(`/:appId/balances.html`)
  @Render('balance')
  async renderAppBalances(@Param('appId') appId: string, @Query() query: GetAppBalancesQuery) {
    const data = await this.appService.getAppBalances({ ...query, appId });

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
