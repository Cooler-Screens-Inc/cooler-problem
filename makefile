docker-comp:=docker-compose -f docker-compose.yml --env-file .env.dev

run: node_modules
	$(info ~~~~~~~~~~ STARTING API IN DEV MODE ~~~~~~~~~)
	npm run dev

install: node_modules

up:
	$(info ~~~~~~~~~~~ STARTING DEPENDENCIES ~~~~~~~~~~~)
	${docker-comp} up -d
	npm run seed
	npm run dev

test-it:
	scripts/integration-tests.sh

test:
	npm test

test-up:
	$(info ~~~~~~~~~~~ STARTING TEST DEPENDENCIES ~~~~~~~~~~~)
	${docker-comp} -f docker-compose.test.yml up --build -d

down:
	$(info ~~~~~~~~~~ STOPPING DEPENDENCIES ~~~~~~~~~)
	${docker-comp} down -v

test-down:
	$(info ~~~~~~~~~~ STOPPING TEST DEPENDENCIES ~~~~~~~~~)
	${docker-comp} -f docker-compose.test.yml down -v

seed-db:
	$(info ~~~~~~~~~~ SEEDING LOCAL DB ~~~~~~~~~~)
	npm run seed

node_modules: package.json package-lock.json
	$(info ~~~~~~~~~~ INSTALLING NODE DEPENDENCIES ~~~~~~~~~)
	npm ci --legacy-peer-deps

.PHONY: install up down run seed-db