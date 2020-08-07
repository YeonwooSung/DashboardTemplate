FROM node:12

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해 와일드카드를 사용
COPY package*.json ./

# 프로덕션을 위한 코드를 빌드하는 경우: 
#       RUN npm ci --only=production
#
# npm install로 dependency 설치
RUN npm install

# 사용할 포트번호 적용
EXPOSE 8080

# execute "node index.js"
CMD [ "node", "index.js" ]
