# Todo

This is a simple todo list app that includes the next tech stack

UI -> React TSX, GraphQL client (Mustation, codegen, Queries) with apollo hooks, Emotion.js 
BE -> NodeJS, Express, Apollo server, GraphQL, Apollo gateway, Scala gRPC

Docker container + docker-compose

# Instalation

First clone the project locally with `git clone https://github.com/cyberduck1/todo.git`

Clone with ssh `git clone git@github.com:cyberduck1/todo.git` _RECOMENDED_

* For running the docker container type `docker-compose up` in the root folder
* If running it the first time, a build is required so we add `--build` to the terminal execution
* For running docker in detach mode add `-d` to the execution

### All together
For running all together the best way is, in the root folder to open
terminal and type `docker-compose up -d --build`

# UI only

1. `cd ~/${project_directory}/client`
2. `yarn`
3. `yarn start`


# Nodejs only

1. `cd ~/${project_directory}/server`
2. `yarn`
3. `yarn run start:dev`
  
