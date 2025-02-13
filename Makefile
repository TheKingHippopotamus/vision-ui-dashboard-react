# Makefile for managing the Psychic Project
# Includes both Docker and manual operation commands

# Variables
DOCKER_COMPOSE = docker-compose
FRONTEND_DIR = vision-ui-dashboard-react
DJANGO_DIR = /Users/elmaliahmac/Documents/TwinnieApp/serverNavigator
NODE = node
NPM = npm

# Default target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "Docker commands:"
	@echo "  make up              - Start all services with Docker"
	@echo "  make down            - Stop all Docker services"
	@echo "  make build           - Build Docker images"
	@echo "  make logs            - View Docker logs"
	@echo "  make restart         - Restart all services"
	@echo ""
	@echo "Development commands:"
	@echo "  make install         - Install dependencies for both frontend and backend"
	@echo "  make start           - Start both frontend and backend in development mode"
	@echo "  make start-frontend  - Start only frontend"
	@echo "  make start-django    - Start only Django server"
	@echo "  make clean           - Clean node_modules and build artifacts"
	@echo ""
	@echo "Django commands:"
	@echo "  make django-migrate  - Run Django migrations"
	@echo "  make django-shell    - Open Django shell"
	@echo "  make django-static   - Collect static files"
	@echo "  make django-super    - Create superuser"
	@echo ""
	@echo "Maintenance commands:"
	@echo "  make test            - Run tests"
	@echo "  make lint            - Run linter"
	@echo "  make format          - Format code"

# Docker commands
.PHONY: up
up:
	$(DOCKER_COMPOSE) up -d

.PHONY: down
down:
	$(DOCKER_COMPOSE) down

.PHONY: build
build:
	$(DOCKER_COMPOSE) build

.PHONY: logs
logs:
	$(DOCKER_COMPOSE) logs -f

.PHONY: restart
restart: down up

# Development commands
.PHONY: install
install:
	cd $(FRONTEND_DIR) && $(NPM) install
	cd $(DJANGO_DIR) && pip install -r requirements.txt

.PHONY: start
start:
	@echo "Starting both frontend and Django..."
	cd $(DJANGO_DIR) && python manage.py runserver & \
	cd $(FRONTEND_DIR) && $(NPM) start

.PHONY: start-frontend
start-frontend:
	cd $(FRONTEND_DIR) && $(NPM) start

.PHONY: start-django
start-django:
	cd $(DJANGO_DIR) && python manage.py runserver

.PHONY: clean
clean:
	rm -rf $(FRONTEND_DIR)/node_modules
	rm -rf $(FRONTEND_DIR)/build
	find . -name "*.pyc" -delete
	find . -name "__pycache__" -delete

# Django commands
.PHONY: django-migrate
django-migrate:
	docker-compose exec django python manage.py migrate

.PHONY: django-shell
django-shell:
	docker-compose exec django python manage.py shell

.PHONY: django-static
django-static:
	docker-compose exec django python manage.py collectstatic --noinput

.PHONY: django-super
django-super:
	docker-compose exec django python manage.py createsuperuser

# Maintenance commands
.PHONY: test
test:
	cd $(FRONTEND_DIR) && $(NPM) test
	cd $(DJANGO_DIR) && python manage.py test

.PHONY: lint
lint:
	cd $(FRONTEND_DIR) && $(NPM) run lint

.PHONY: format
format:
	cd $(FRONTEND_DIR) && $(NPM) run format

# Environment setup
.PHONY: setup-env
setup-env:
	@if [ ! -f "$(FRONTEND_DIR)/.env" ]; then \
		echo "REACT_APP_API_URL=http://localhost:8000" > $(FRONTEND_DIR)/.env; \
	fi
	@if [ ! -f "$(DJANGO_DIR)/.env" ]; then \
		echo "DEBUG=1\nDJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]\nSQL_ENGINE=django.db.backends.postgresql\nSQL_DATABASE=psychic_db\nSQL_USER=psychic_user\nSQL_PASSWORD=psychic_password\nSQL_HOST=db\nSQL_PORT=5432" > $(DJANGO_DIR)/.env; \
	fi

# Production commands
.PHONY: build-prod
build-prod:
	cd $(FRONTEND_DIR) && $(NPM) run build

# Database commands
.PHONY: db-backup
db-backup:
	@echo "Creating database backup..."
	@mkdir -p backups
	@docker-compose exec -T mongodb mongodump --archive > backups/backup-$$(date +%Y%m%d-%H%M%S).gz

.PHONY: db-restore
db-restore:
	@echo "Please specify the backup file to restore:"
	@ls -1 backups/
	@read -p "Enter backup filename: " filename; \
	docker-compose exec -T mongodb mongorestore --archive < backups/$$filename 