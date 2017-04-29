#!/bin/bash
cd ../ && zip -r csirtg-chrome.zip csirtg-chrome -x "*/.git/*" "*/.idea/*" "*/pack.sh" "*/.gitignore"
