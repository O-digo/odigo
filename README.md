# [3조] 어디고_테오의 스프린트 17기

<div align="middle">
  <img src="https://github.com/O-digo/odigo/assets/11751089/59423d7b-8436-4e4d-a29c-454b1a671631">
</div>

<br >
<br >

# 💼 서비스 소개
```jsx
지하철 이용 중 현재 역이 어디인지 알고 싶어 두리번거렸던 경험,
한 번쯤 있지 않으신가요?

현재 역과 다음 역을 다이나믹 아일랜드에서 보여 주어 하차 타이밍을 놓치지 않고,
편하게 스마트폰을 사용할 수 있도록 도와주는 서비스입니다.
```

<div align="middle">
  <img src="https://github.com/O-digo/odigo/assets/11751089/89ad244e-ea4b-49c1-a8d8-bb2cedb846b2">
</div>

### 실행 명령어
```bash
npm install    // 설치 
npm run start  // npx expo start
               // QR코드가 생성되면 Expo Go App으로 실행
```
### 빌드 명령어 (Android 지원)
```bash
npm install -g eas-cli // eas-cli 설치
eas login
eas build:configure
eas build -p android --profile preview // Adroid용 apk 파일 생성
```

<br >
<br >

# 🗓️ 개발 기간

```jsx
24.04.03(수) ~ 24.04.08(월)
```

<br >
<br >

# 💻 핵심 기능

```jsx
현재 위치한 지하철역의 이름을 다이나믹 아일랜드에서 실시간으로 보여 줍니다.
도착역을 설정했다면 남은 역의 수와 환승역을 알려 줍니다.
```
|                **메인 페이지**           |     **검색 페이지**   |     **설정 페이지**     |
| :----------------------------------: | :--------------: | :--------------: |
| <img src="https://github.com/O-digo/odigo/assets/11751089/d82b31ce-b6db-4764-81d7-d607b2546f8e" width=258 height=458>| <img src="https://github.com/O-digo/odigo/assets/11751089/62911dfa-e0ac-47df-ab8e-8a61d6691930" width=258 height=458> | <img src="https://github.com/O-digo/odigo/assets/11751089/08e64e3a-6d25-4f0a-bb45-3d6d662f66fb" width=258 height=458> | 


### 메인 페이지
- **현재 역**과 **가고 싶은 역**을 볼 수 있어요!
- **자주 가는 역**을 편집하고 선택이 가능해요!
- **원하는 경로**를 선택하고 여정을 시작해보세요!

### 검색 페이지
- **원하는 호선**을 검색하거나 직접 찾아보아요!
- **자주 가는 역**을 바로바로 추가할 수 있어요!

### 설정 페이지
- **알림(진동)기능**을 통해 빠르게 하차해보아요!
- **자주 가는 역**을 추가하고 편집해보아요!

<br >
<br >

# 👨‍👩‍👧‍👦 팀 소개
|                Design                |     Backend      |     Frontend     |     Frontend     |
| :----------------------------------: | :--------------: | :--------------: | :--------------: |
|<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Artist.png" alt="Man Artist" width="100" height="100" />|<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Mage.png" alt="Mage" width="100" height="100" />|<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Astronaut.png" alt="Man Astronaut" width="100" height="100" />|<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png" alt="Bear" width="100" height="100" />|
| [울박](https://github.com/yohanux) | [워니](https://github.com/hyew-kim) | [시티](https://github.com/twoong01) | [곰곰](https://github.com/redcontroller) |
<br>
<br>

# ⚙️ 기술 스택

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Juggling.png" alt="Man Juggling" width="50" height="50" /> 프론트엔드
<div align="left">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=Expo&logoColor=white">
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/ZUSTAND-20232A?style=for-the-badge&logo=zustand&logoColor=61DAFB">
</div>

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Mage.png" alt="Man Mage" width="50" height="50" /> 백엔드
<div align="left">
  <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
  <img src="https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white">
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
  <img src="https://img.shields.io/badge/MyBatis-430098?style=for-the-badge&logo=mybatis&logoColor=white">
</div>

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Artist.png" alt="Artist" width="50" height="50" /> 디자인
<div align="left">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
</div>

<br/>
<br/>
