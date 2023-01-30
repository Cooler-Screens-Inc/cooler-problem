docker-comp:=docker-compose -f docker-compose.yml --env-file .env.dev

run: node_modules
	$(info ~~~~~~~~~~ STARTING API IN DEV MODE ~~~~~~~~~)
	npm run dev

install: node_modules

test: install
	npm test

node_modules: package.json package-lock.json
	$(info ~~~~~~~~~~ INSTALLING NODE DEPENDENCIES ~~~~~~~~~)
	npm ci --legacy-peer-deps

.PHONY: install up down run seed-db