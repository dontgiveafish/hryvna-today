APP_NAME = Hryvna

# Run make help by default
.DEFAULT_GOAL = help

# Public targets

up:
	docker-compose up -d

restart:
	docker-compose stop && docker-compose up -d

bash:
	docker-compose exec app bash

migrate:
	docker-compose exec app php yii migrate


help:
	@echo ''
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@echo ''
	@echo '  help          Show this help and exit'
	@echo '  up            Starts and attaches to containers for a service'
	@echo '  restart       Stop and up docker-compose'
	@echo '  bash          Go to bash of main container'
	@echo '  migrate       Migrate database'
	@echo ''

%:
	@:
