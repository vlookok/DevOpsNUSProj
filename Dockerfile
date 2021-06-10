FROM ubuntu:18.04
MAINTAINER vlookok@gmail.com
EXPOSE 8080
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
ENV USER root
RUN npm install -g express-generator
RUN npm install express --save
RUN npm install body-parser --save
RUN npm install cors --save
RUN npm install sqlite3 --save
RUN useradd -ms /bin/bash user
COPY backend/main.js /home/user/main.js
COPY backend/database.js /home/user/database.js
COPY backend/customer.js /home/user/customer.js
COPY backend/start.sh /home/user/start.sh
RUN chmod a+x /home/user/start.sh
USER user
WORKDIR /home/user

CMD ["sh","/home/user/start.sh"]
