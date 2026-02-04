# Variables
APP_NAME = express-app
PORT ?= 3000

.PHONY: help
help:
	@echo 'Available commands:'
	@echo "  make install   Install dependencies"
	@echo "  make dev       Run app in development mode"
	@echo "  make build     Build app" 

.PHONY: install
install:
	npm install

.PHONY: dev
dev:
	PORT=$(PORT) npm run dev

.PHONY: build
build:
	PORT=$(PORT) node app/index.js