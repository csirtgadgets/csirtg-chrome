#!/bin/bash
cd ../ && zip -r whiteface-chrome.zip whiteface-chrome -x "*/.git/*" "*/.idea/*" "*/pack.sh" "*/.gitignore"
