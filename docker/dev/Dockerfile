FROM frontendinterview_app:latest

USER root
RUN echo "deb http://packages.linuxmint.com debian import" | tee /etc/apt/sources.list.d/firefox.list && \
    apt-get update && apt-get install -y --force-yes --no-install-recommends \
    # common dev tools
    vim htop openssh-client zsh tmux wget curl w3m less \
    # common x11 client dependencies
    firefox \
    # better fonts
    ttf-wqy-microhei \
    # certificate
    ca-certificates \
    # some ides need machine-id info like atom/eclipse
    dbus gconf2 gconf-service libgtk2.0-0 libnotify4 libxtst6 libnss3 gvfs-bin xdg-utils libxss1 libasound2 libxkbfile1 && \
    dbus-uuidgen > /etc/machine-id && \
    rm -rf /var/lib/apt/lists/* && \
    chsh -s /bin/zsh node

RUN wget https://atom.io/download/deb -O atom-amd64.deb && \
    dpkg -i atom-amd64.deb && \
    rm atom-amd64.deb
USER node
RUN git clone -b personalize https://github.com/teanoon/oh-my-zsh.git ~/.oh-my-zsh && \
    ln -s ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
