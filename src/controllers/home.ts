import { JsonController, Get } from 'routing-controllers';
import { ResponseSchema, OpenAPI } from 'routing-controllers-openapi';
import { IsString } from 'class-validator';
import { Sample } from '../entity/sample';
import { AppDataSource } from '../db';

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

  @Get('/samples')
  @OpenAPI({ summary: 'Return samples to demonstrate DB' })
  @ResponseSchema(Sample, { isArray: true })
  allSamples(): Promise<Sample[]> {
    return AppDataSource.getRepository(Sample).find();
  }
}
