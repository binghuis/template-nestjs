import { Controller, Get, Header, HttpCode, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param() param: any): Observable<string> {
    console.log(param);
    return of(this.appService.getHello());
  }
}
