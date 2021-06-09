# Deploy react app to ec2

## Pre-requisites

...

## Setup
### Create ssh key-pair

### Launch ec2 instance

### Install requisites

#### Nodejs
    sudo apt-get install nodejs

#### serve
    npm install -g serve

#### pm2
    npm install -g pm2

#### Nginx
    sudo apt-get install nginx

### Configure Nginx


## Deploy
### ssh into ec2
    ssh -i dollup.pem ubuntu@<public_ip>
    example: ssh -i dollup.pem ubuntu@ec2-54-254-219-81.ap-southeast-1.compute.amazonaws.com	

### Clone repo into ec2 instance
    git clone https://github.com/hongyang-work/dollfront.git

### Change directory into source code folder
    cd dollfront

### Install dependencies
    npm install

### Build
    npm run build

### Run
    pm2 serve build 3000 --spa --name dollfront


### Update code
```
pm2 delete dollfront
npm run build
pm2 serve build 3000 --spa --name dollfront
```
