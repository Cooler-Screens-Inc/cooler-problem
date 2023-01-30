#!/bin/bash

health() {
  docker inspect -f {{.State.Health.Status}} $1
}

export LOCAL_PORT="${LOCAL_PORT:=4000}"
make test-up

echo "Waiting for containers to start"

for i in {1..100}; do
  if [ $(health api_under_test) == "healthy" ]
  then
    echo "Containers started"
    started=true
    break
  fi
  
  sleep 0.1;
done;

if [ "$started" != true ]; then
  echo "Failed to start test containers"
  make test-down
  exit 1
fi

npm run test:it

result=$?

make test-down

exit $result