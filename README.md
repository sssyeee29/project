# 🧠 sim_plane - 성격유형 기반 심리테스트 웹 플랫폼

(25.06.09 ~ 25.06.30 - 약 3주)  
1주차 : DB 설계 및 프로젝트 구조 잡기  
2주차 : 문의글 게시판 crud 구현, 이미지 업로드 기능 구현  
3주차 : 댓글 구현, 검색/필터링 기능 추가  
4주차 : 시큐리티(로그인) 기능 추가   
5주차 : 심리테스트 구현 

---
# 📚목차📚
1. 프로젝트 소개
2. 프로젝트 참여자
3. 개발환경
4. 기술소개
5. 클래스 구조 
6. 화면 예시
7. Trouble Shooting
8. 개선사항 및 프로젝트 소감 

---

# 🔍 1. 프로젝트 소개
### 🛫 SimPlane이란 ? <br>
  "심리테스트 안에서 자유롭게 날아다녀라"는 의미를 가진 성격유형 기반의 심리테스트 플랫폼입니다. 웹에서 다양한 주제의 테스트를 제공하며, 질문과 결과는 모두 DB로 관리되어 쉽게 확장 가능한 구조를 가지고 있습니다. 

### 💡 기획 의도 <br>
  MBTI처럼 성격유형 테스트에 대한 사람들의 관심에서 출발한 프로젝트입니다. 평소에 심리테스트 콘텐츠에 관심이 많았고, 이를 직접 기획하고 구현해보는 과정 자체가 좋은 경험이 될 것 같아 시작하게 되었습니. 복잡한 기능보다는, 간단한 테스트라도 데이터 기반으로 설계하고, 웹에서 실제 작동하는 구조를 만드는 것에 집중했습니다. 

## 로고 의미 
![Image](https://github.com/user-attachments/assets/7dbc2aae-3220-4dc7-a1e8-52b4e7408302)
* 로고에는 하늘을 나는 귀여운 비행기를 사용해, 사용자가 자신의 내면을 가볍고 자유롭게 탐색하고, 마음껏 즐기며 심리여행을 떠나도록 의미를 담았습니다.
* 비행기의 웃는 표정은 편안함과 친근함, "FLY HIGH"라는 문구는 심리적 성장과 긍정적인 에너지를 상징합니다.
* 사용자가 SimPlane과 함께 자신만의 심리 여정을 자유롭게 탐색하고, 더 높이 비상하길 바라는 마음을 담았습니다.

---

# 2. 👩‍💻 참여자

✨ 이지혜   
  역할: 팀장 / 백엔드·프론트엔드 개발   
  담당 기능: 게시글 조회(Read), 댓글 및 페이징 처리, JSP 기반 UI, 심리테스트 기능 구현 

🛠️ **이연수 (본인)**   
역할: 백엔드 개발    
담당 기능: 게시글 등록/삭제(Create/Delete), 이미지 업로드 설계, ERD 설계

🎨 방희경    
역할: 백엔드 개발 / 디자인    
담당 기능: 게시글 수정, JSP 기반 UI, 홈페이지 디자인, 포춘쿠키 기능 구현 

🔐 차누리  
역할: 백엔드 개발    
담당 기능: Spring Security, 심리테스트 생성 기능 구현 

---

# 3. 개발환경

### 🔹 Frontend
- HTML5, CSS3, JavaScript
- JSP
- jQuery(비동기 처리)
- Bootstrap

### 🔹 Backend
- Java 11
- Spring Framework
- Spring Security
- MyBatis
- Maven
- WAR 패키징 

### 🔹 DB / WAS
- MySQL
- Apache Tomcat

### 🔹 코드 버전관리 / 프로젝트 일정관리
- Git, GitHub

--- 

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Framework](https://img.shields.io/badge/Spring_Framework-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![JUnit](https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=JUnit5&logoColor=white)
![MyBatis](https://img.shields.io/badge/MyBatis-000000?style=for-the-badge&logo=mybatis&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)

---

# 4. 기술소개 

### 🔐 Spring Security  
- 회원/관리자 역할에 따라 접근 권한을 설정하여, 게시판 작성/삭제, 테스트 생성 등 기능을 제어하였습니다.  
- 인증 처리는 커스터마이징된 로그인 기능으로 구현하였으며, 사용자 구분을 위한 Role 기반 보안을 구성하였습니다.

### 🧩 MyBatis  
- 사용자, 심리테스트, 댓글, 문의 등 다양한 도메인의 CRUD 작업을 SQL 매퍼(XML) 기반으로 처리하여 유지보수성을 높였습니다.  
- 복잡한 동적 쿼리나 조건 분기 로직도 SQL에서 명확하게 정의할 수 있었습니다.

### 🗂 JSP & JSTL  
- 테스트 진행화면, 결과 출력, 관리자 페이지 등 주요 뷰를 JSP로 구성하였고,  
  JSTL로 조건문·반복문 처리, jQuery로 비동기 통신을 구현하여 동적 UI를 완성했습니다.

### 🔄 JavaScript (jQuery)  
- 댓글 등록, 테스트 응답 등 주요 기능에 AJAX 기반 비동기 처리를 적용하였습니다.
- 특히, 띠별 운세 결과는 JSON 파일로 저장된 데이터를 jQuery를 통해 비동기로 불러와 사용자에게 보여주도록 구현하였습니다.

### 📦 Maven & WAR  
- 프로젝트는 Maven 기반으로 관리되며, 의존성 설정과 빌드가 자동화되었습니다.  
- WAR 패키징을 통해 Apache Tomcat에 배포 가능한 구조로 구성하였습니다.

---
# 5. 클래스 구조 
<details>
<summary>클래스 구조 다이어그램</summary>

<br>

<img width="7506" height="5686" alt="java" src="https://github.com/user-attachments/assets/3b44273f-5885-45b8-8f8c-f9ab7eeca729" 
  style="max-width: 100%; height: auto;"/>

  
본 프로젝트의 주요 클래스 구조를 나타낸 것입니다.  
패키지별 역할(Controller, Service, Mapper, VO 등)과 클래스 간 구성 흐름을 중심으로 정리되었습니다.  
(직접적인 연결선은 생략되었지만, 각 구성요소의 배치를 통해 전체 구조를 파악할 수 있습니다.)

</details>

---

# 6. 화면 예시
<details>
<summary>화면구성 보기</summary>
  
  <br>
  
<img width="1919" height="1079" alt="메인 페이지 이미지" src="https://github.com/user-attachments/assets/8778e9fd-4d80-43f6-a478-0d6e0ed759ef" />
<p align="center">
  <b>▲ 메인 페이지 화면</b><br>
  상단 메뉴바를 통해 다양한 기능 페이지(심리테스트, 게시판 등)로 이동할 수 있으며,<br>
  로그인 / 회원가입 버튼과 로고 클릭 시 메인으로 돌아오는 기능도 제공합니다.<br>
  하단에는 베스트 심리테스트 리스트가 노출되어 사용자 접근성을 높였습니다.
</p>

 <br>

 
</details>

---

# 7. Trouble Shooting

- [ ] 테스트 결과 저장 및 히스토리 조회
- [ ] 사용자별 성향 통계 시각화
- [ ] 관리자 페이지 UI 고도화
- [ ] 사용자 로그인 및 개인화 기능

---

# 8. 개선사항 및 프로젝트 소감

