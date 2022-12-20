1.	Stwórz projekt z Vite w folderze Projects (lub w inny sposób)

Npm create vite@latest
Wybierz React i typescript z SWC

2.	Stwórz repo githubowe
git init
git add README.md
git commit -m "first commit"
# tu twoje repo podstaw
git remote add origin https://github.com/Emil2301/vite-2.git
git push -u origin master
3.	Wejdź na githubie w zakładkę actions i kliknij u góry „set up a workflow yourself”
Stwórz plik build-and-deploy.yml

Wklej do niego: 

Name: Build and Deploy
on:
	push:
	     branches:
-	master
               jobs:
	build-and-deploy: 
	    runs-on: ubuntu-latest
	    concurrency: ci-${{ github.ref }}
	  steps: 
-	name: Checkout
uses: actions/checkout@v2

-	name: Configure Node
uses: actions/setup-node@v2
with: 
    node-version: ‘16’

-	name: Install and Build
uses: actions/checkout@v2
run:   |
    npm ci
	   npm run build

-	name: Deploy
uses: JamesIves/github-pages-deploy-action@v4
with:
    folder: dist (folder, w którym masz builda po puszczeniu komendy npm run build)
4.	Wejdź na githuba w to repo, zakładka Settings, Pages po lewej, wybierz opcję Deploy from a branch. Wybierz brancza gh-pages i kliknij save
5.	W projekcie w pliku vite.config.js dodaj linię
base: ‘/nazwa-projektu-na-githubie/’


