# palpite-box
 Projeto prático da Scio Tech
## Pré-requisito
* [Docker](https://docs.docker.com/engine/install/ubuntu/)
* [Docker-compose](https://docs.docker.com/compose/install/)
* [NodeJs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Git](https://git-scm.com/)
## Verificar as versões no sistema
```
node -v  
```         
$ v12.18.2

```
npm -v  
```   
$ 6.14.8

```
docker -v
```
$ Docker version 20.10.6, build 370c289

```
docker-compose -v 
```
$ docker-compose version 1.29.2, build 5becea4c

```
git --version
```
$ git version 2.27.0
```
## Clonando o projeto
```
git clone https://github.com/dhiegopereira/palpite-box.git
```  
## Iniciando o projeto
```
cd palpite-box
npm install
docker-compose up -d
```
URL para acessar o projeto: http://localhost:3000

## Visualizar os containers do docker iniciados
```
sudo docker ps
```
## Parar o container do docker
```
sudo docker stop <CONTAINER ID>
```
## Remover o container do docker
```
sudo docker rm <CONTAINER ID>
```
## Executar os testes
```
npm run test
```
ou
```
npm run coverage
```
## Documentação da API
* [Postman](https://documenter.getpostman.com/view/3166323/TzXxkJMa)
## Protótipo dada aplicação
* [Figma](https://www.figma.com/file/NkezH1oiWFkXijx2cfyRXu/Palpite-Box?node-id=0%3A1)
## Aplicação desenvolvida com as seguintes tecnologias
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Next](https://nextjs.org/) - The React Framework for Production
* [Tailwind](https://tailwindcss.com) - Rapidly build modern websites without ever leaving your HTML.engine.
* [dockeSpreadsheet](https://console.cloud.google.com/apis/) -The Sheets API gives you full control over the content and appearence of your spreadsheet data. 
## Autor:
* **Diego Pereira** - [LinkedIn](https://www.linkedin.com/in/diegopereirati/)
## Licença
This project is licensed under the MIT license - see [LICENSE.md](LICENSE.md) for more information.
