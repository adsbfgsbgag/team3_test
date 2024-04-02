터미널에 본인이 만들 폴더위치로 가서 npx create-react-app 사용할폴더이름
터미널에 npm i yarn 설치 npm 대신 yarn 사용 yarn 은 페이스북 에서 만든 Javascript Package Manager npm 보다 속도도빠르고 안정성도 있음

앞으로 사용할 dependencies 설치 package.json보면 설치된 dependencies 볼 수 있음

yarn add mysql
yarn add express
yarn add axios
yarn add cors
yarn add jwt
yarn add scss
yarn add sass
yarn add react-router-dom

yarn add mysql express axios cors jwt scss sass react-router-dom 한번에 붙여서 설치 가능
그때그때 사용할 dependencies를 설치해서 사용

폴더 구성
/asset 이미지,스타일 파일 등 구성하는 폴더
/components 프로젝트의 주요 컨텐츠 컴포넌트를 구성하는 폴더
/pages 주소창에 검색하여 이동할 컴포넌트들을 구성하는 폴더
/server node서버와 mysql 관련 파일을 구성하는 폴더

scss 적용법
각 컴포넌트들의 스타일 파일을 style.scss 파일 한곳에 import 해놓은 후 index.js 파일에 import 후 전체적으로 적용
