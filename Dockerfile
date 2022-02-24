FROM circleci/node:12

USER root

COPY . /home/circleci/app
RUN chown -R circleci /home/circleci

RUN apt update
RUN apt install nano software-properties-common zsh

RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
RUN apt-add-repository https://cli.github.com/packages
RUN apt update
RUN apt install -y gh

RUN npm install -g serverless ts-node typescript

USER circleci
WORKDIR /home/circleci/app

RUN git clone -b docker --single-branch https://github.com/AtlasRW/dotfiles.git ~/tmp
RUN for file in ~/tmp/.*; do mv $file ~; done
RUN rm -Rf ~/tmp