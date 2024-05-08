FROM ibm-semeru-runtimes:open-8-jre

WORKDIR /root

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone

ARG JAR_FILE=./zfile-release.jar

COPY ${JAR_FILE} app.jar
EXPOSE 8080

ENTRYPOINT java $JAVA_OPTS -Xshareclasses -Xquickstart -jar /root/app.jar
