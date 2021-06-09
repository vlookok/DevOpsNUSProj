FROM alpine
MAINTAINER vlookok@gmail.com
EXPOSE 8080
RUN apk update
RUN apk add python2
COPY frontend/index.html /tmp/index.html
COPY frontend/getdata.js /tmp/getdata.js
COPY frontend/start.sh /tmp/start.sh
USER 1000
CMD ["sh","/tmp/start.sh"]