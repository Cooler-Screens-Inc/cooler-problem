import {
  getMetadataArgsStorage,
  useExpressServer,
  RoutingControllersOptions,
} from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { defaultMetadataStorage as classTransformerMetadataStorage } from 'class-transformer/cjs/storage';
import swaggerUi from 'swagger-ui-express';

import express from 'express';
import { HomeController } from './home';
import { StatusController } from './status';

const OPTIONS: RoutingControllersOptions = {
  routePrefix: '',
  controllers: [HomeController, StatusController],
};

export function useControllers(app: express.Application) {
  // TODO: Use createExpressServer instead?
  useExpressServer(app, OPTIONS);

  const spec = openApiSpec();

  app.use(
    `${OPTIONS.routePrefix}/docs`,
    swaggerUi.serve,
    swaggerUi.setup(spec)
  );
}

export function openApiSpec(): ReturnType<typeof routingControllersToSpec> {
  const schemas = validationMetadatasToSchemas({
    classTransformerMetadataStorage,
    refPointerPrefix: '#/components/schemas/',
  });

  const openAPISpec = routingControllersToSpec(
    getMetadataArgsStorage(),
    OPTIONS,
    {
      components: {
        schemas,
      },
    }
  );

  return openAPISpec;
}
