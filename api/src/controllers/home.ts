import { JsonController, Get } from 'routing-controllers';
import { ResponseSchema, OpenAPI } from 'routing-controllers-openapi';
import { IsString } from 'class-validator';

class HomeResponse {
  @IsString()
  message = 'hello world';
}

@JsonController('')
export class HomeController {
  @Get('/')
  @OpenAPI({ summary: 'Default home controller' })
  @ResponseSchema(HomeResponse)
  home(): HomeResponse {
    return { message: 'hello world' };
  }
}
