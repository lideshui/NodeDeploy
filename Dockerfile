FROM node:latest

RUN apt-get update && apt-get install -y vim cron

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN chmod +x start.sh

CMD ["./start.sh"]
