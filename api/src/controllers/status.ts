import { IsString } from 'class-validator';
import { Get, JsonController } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';

// This is required only for the schema annotation
class Status {
  @IsString()
  status = 'ok';
}

/**
 * The status controller provides core information about the service such as health, metrics
 * and other non-domain specific functionality.
 */
@JsonController()
export class StatusController {
  @Get('/status')
  @OpenAPI({ summary: 'Returns current status of the application' })
  @ResponseSchema(Status)
  getStatus(): Status {
    return { status: 'ok' };
  }
}
