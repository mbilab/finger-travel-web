#!/bin/sh
/usr/bin/curl -LO https://github.com/Semantic-Org/Semantic-UI/archive/master.zip
/usr/bin/unzip master.zip
mv Semantic-UI-master node_modules/semantic-ui
/bin/rm master.zip
