git pull
yarn build
cp ./404.html ./docs/404.html
# cp ./CNAME ./docs/CNAME

git add -A
git commit -m 'deploy push'
git push