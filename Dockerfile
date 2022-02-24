FROM circleci/node:14.15

USER root

RUN apt update
RUN apt install nano software-properties-common zsh

RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
RUN apt-add-repository https://cli.github.com/packages
RUN apt update
RUN apt install -y gh

# RUN npm install -g npm
RUN npm install -g serverless ts-node typescript

USER circleci

RUN git clone -b docker --single-branch https://github.com/AtlasRW/dotfiles.git ~/tmp
RUN for file in ~/tmp/.*; do mv $file ~; done
RUN rm -Rf ~/tmp

COPY . ~/app