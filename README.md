# Cooler Problem

## Getting Started

Run `make up` to start the application and its dependencies.

See the makefile for other useful local-development commands

## Testing

This project provides two levels of testing that can be executed locally.

Run

```
make test
```

to execute the unit test suite

Run

```
make test-it
```

to execute the integration test suite.

The integration tests run on port 4000 by default. Use the `LOCAL_PORT` environment
variable to override this behavior, e.g.:

```
LOCAL_PORT=4001 make test-it
```

In order to debug the integration tests it is possible to start the test depencies using

```
make test-up
```

The integration tests can then be run using the jest test runner

**This project was auto-generated using the csi cloud-node-api-starter**
