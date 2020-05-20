FROM sauravsehgal24/easybackendcl:2019

RUN node -v
RUN npm -v
RUN git --version
RUN mysql --version

RUN mkdir -p /home/saurav/EasyBackendCl
WORKDIR /home/saurav/EasyBackendCl
ADD . .

#Server
WORKDIR /home/saurav/EasyBackendCl/server
RUN npm install

#Entrypoint
EXPOSE 3001
EXPOSE 3000
EXPOSE 3306
CMD ["service", "mysql start"]
CMD ["node", "server.js"]
