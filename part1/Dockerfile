#A imagem que usaremos de base.
FROM node
#Informar o diretório padrão.
WORKDIR /
#São as variáveis de ambiente durante o build do Dockerfile.
ARG PORT=3000
#Variável de ambiente da aplicação.
ENV PORT=$PORT
#Para deixar a porta da máquina visível.
EXPOSE $PORT
#Copiar os arquivos do terminal que estamos para a imagem que estammos criando.
COPY ./ .
#Comando em bash para pré inicializar a aplicação.
RUN npm install
#Executa o comando para iniciar a aplicação.
ENTRYPOINT npm start