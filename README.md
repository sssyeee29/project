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

  
프로젝트의 주요 클래스 구조를 나타낸 것입니다.  
패키지별 역할(Controller, Service, Mapper, VO 등)과 클래스 간 구성 흐름을 중심으로 정리되었습니다.  
(직접적인 연결선은 생략되었지만, 각 구성요소의 배치를 통해 전체 구조를 파악할 수 있습니다.)

</details>

---

# 6. 화면 예시
<details>
<summary><h3>화면구성 보기</h3></summary>

---

<h3><메인 페이지 화면></h3>

<img width="1896" height="930" alt="메인페이지" src="https://github.com/user-attachments/assets/f632551a-56ac-4e0d-abfc-a1e0ada224ed" />

* **상단 메뉴바**를 통해 심리테스트, 게시판 등 다양한 기능 페이지로 이동할 수 있습니다.  
* 로그인 / 회원가입 버튼과 로고 클릭 시 **메인 페이지**로 돌아올 수 있습니다.  
* 하단에는 **베스트 심리테스트 리스트**가 노출되어 사용자 접근성을 높였습니다.

---
 
<h3><심리테스트 질문 & 결과 화면></h3>

<img width="1888" height="942" alt="심리테스트 질문 화면" src="https://github.com/user-attachments/assets/55e2b891-c1fa-438f-8fdd-6780ea57f7fd" />
<img width="1889" height="936" alt="심리테스트 결과 화면" src="https://github.com/user-attachments/assets/ef6eb5fd-a791-43f6-86df-ee1b205e70ea" />

* 사용자는 심리테스트 목록에서 항목을 선택한 후 질문에 응답하며 테스트를 진행할 수 있습니다.  
* 모든 문항에 답변을 완료하면 점수를 기반으로 유형이 자동 분류됩니다.  
* 결과 페이지에서 해당 유형에 맞는 설명과 이미지를 확인할 수 있습니다.  
* **비회원 사용자도 로그인 없이 자유롭게 테스트에 참여할 수 있어 누구나 쉽게 이용할 수 있습니다.**

---

<h3><띠별 운세 기능 화면></h3>

<img width="1889" height="938" alt="image" src="https://github.com/user-attachments/assets/06264bbc-2d38-44ac-984b-be25b5c8035a" />
<img width="1892" height="924" alt="image" src="https://github.com/user-attachments/assets/4ad47930-ffac-4d78-8035-47b30d3819b2" />
<img width="1889" height="943" alt="image" src="https://github.com/user-attachments/assets/917d4979-ba48-4683-9d3e-9bd0337ebf9f" />

* 상단 메뉴에서 **'운세'** 항목을 선택하면 다양한 운세 기능으로 이동할 수 있습니다.  
* **'띠별 운세'**를 클릭하면 사용자의 태어난 연도를 입력할 수 있는 창이 나타납니다.  
* 연도를 입력하고 확인 버튼을 누르면 해당 띠의 운세 결과가 출력됩니다.  
* 회원가입 없이도 누구나 간편하게 이용 가능하도록 구성되어 있습니다.

---

<h3><포춘쿠키 기능 화면></h3>

<img width="1919" height="939" alt="image" src="https://github.com/user-attachments/assets/c74904f4-2f63-4995-85d1-80e196715d63" />
<img width="1919" height="962" alt="image" src="https://github.com/user-attachments/assets/519f8394-fb6c-4678-b9b9-ecb84ad015bf" />

* 상단 메뉴에서 **'포춘쿠키'** 버튼을 클릭하면, 모달 창으로 귀여운 포춘쿠키 모양이 등장합니다.  
* 포춘쿠키를 **한 번 클릭**하면 쿠키가 깨지며,  
* 그 안에서 **연예인 명언 또는 어록**이 랜덤으로 출력됩니다.  
* 누구나 가볍게 클릭만으로 이용 가능하며, 소소한 위로와 재미를 줄 수 있도록 구성된 기능입니다.

---

<h3><회원가입></h3>

<img width="1894" height="930" alt="image" src="https://github.com/user-attachments/assets/ccd8d745-986e-4f05-a29e-b24e3b8852da" />
<img width="572" height="801" alt="image" src="https://github.com/user-attachments/assets/9c99ed93-ea3b-4a58-8487-359cc6da3866" />
<img width="517" height="586" alt="image" src="https://github.com/user-attachments/assets/4dd2c80a-b9b5-44ce-89dc-4404b9c7280c" />


* 우측 상단의 **회원가입** 버튼을 클릭하면, 회원정보를 입력할 수 있는 회원가입 창이 표시됩니다.  
* **아이디**를 입력하고 **중복 확인** 버튼을 누르면,  
  해당 아이디가 사용 가능한지 여부를 알려주는 **모달창**이 표시됩니다.  
* 아이디 중복 확인 후에는 **비밀번호, 닉네임, 이메일** 등의 정보를 입력할 수 있습니다.  
* 모든 항목 입력 후 **가입하기** 버튼을 클릭하면,  
  자동으로 **로그인 페이지**로 이동하며 회원가입이 완료됩니다.  
* 로그인 페이지로 이동하면 회원가입이 **성공적으로 처리**된 것입니다.

---

<h3><로그인></h3>

<img width="1890" height="936" alt="image" src="https://github.com/user-attachments/assets/c5054f58-390c-4b74-8627-950aa2365bd5" />
<img width="1891" height="934" alt="image" src="https://github.com/user-attachments/assets/07efd64c-a938-4ff8-9b6e-5aee723b844c" />
<img width="1891" height="147" alt="image" src="https://github.com/user-attachments/assets/c9bca41d-440d-4997-b36e-9e57798d9843" />

* 우측 상단의 **로그인** 버튼을 클릭하면 아이디와 비밀번호를 입력할 수 있는 로그인 창이 표시됩니다.  
* 로그인 정보를 입력하고 **로그인 버튼**을 누르면,  
  로그인 전에는 **"로그인 / 회원가입"**으로 표시되던 상단 버튼이 **"로그아웃"**으로 변경됩니다.  
* 로그인 후에는 각 심리테스트 결과에 **댓글을 작성**할 수 있으며,  
  **문의 게시판에 글 등록** 기능도 활성화됩니다.  
* 회원만 사용할 수 있는 기능들을 통해 더욱 풍부한 사용자 경험을 제공합니다.

---

<h3><댓글 작성></h3>

<img width="1670" height="948" alt="image" src="https://github.com/user-attachments/assets/bee3ad6b-183e-4759-84d2-fe42db695b07" />
<img width="1676" height="941" alt="image" src="https://github.com/user-attachments/assets/931f16a0-0fd9-4ef9-a551-e1fcfbde8662" />
<img width="582" height="684" alt="image" src="https://github.com/user-attachments/assets/70405d4a-dff5-4bc5-8609-5a54ce77357d" />

* 각 심리테스트 결과 페이지 하단에는 **댓글 작성란**이 제공되어,  
  사용자가 테스트 결과에 대한 의견을 남길 수 있습니다.  
* **로그인하지 않은 사용자**가 댓글을 작성하려고 할 경우,  
  **로그인 요청 모달창**이 자동으로 표시되어 로그인 후 이용하도록 유도됩니다.  
* 로그인한 사용자가 댓글을 입력한 뒤 **작성 버튼**을 누르면,  
  **"댓글 작성 완료"**라는 메시지가 모달창에 표시되며,  
  곧바로 화면에 **작성한 댓글이 반영**됩니다.  

---

<h3><문의게시판></h3>

<img width="1891" height="913" alt="image" src="https://github.com/user-attachments/assets/f2dd76e0-4db5-4d2d-93b6-72a0d45a37f7" />
<img width="1895" height="924" alt="image" src="https://github.com/user-attachments/assets/f5d9bd19-74c0-485b-b4b1-820be0b42dfa" />
<img width="1886" height="938" alt="image" src="https://github.com/user-attachments/assets/4acaea9a-22f3-4dd3-bd0a-c0608e03a6e4" />

* **문의게시판은 로그인한 사용자만 접근 및 작성**할 수 있도록 설정되어 있습니다.  
* 로그인 후, 상단 메뉴에서 **'문의게시판'**을 클릭하면  
  **제목, 내용, 이미지**를 입력할 수 있는 작성 페이지로 이동합니다.  
* 작성 후 **등록 버튼**을 클릭하면 게시글이 정상적으로 등록되며,  
  문의게시판 목록에서 확인할 수 있습니다.  
* 등록된 게시글은 **수정 및 삭제**도 가능하여,  
  사용자 스스로 작성한 문의글을 쉽게 관리할 수 있습니다.

</details>

---

# 7. Trouble Shooting

- [ ] 테스트 결과 저장 및 히스토리 조회
- [ ] 사용자별 성향 통계 시각화
- [ ] 관리자 페이지 UI 고도화
- [ ] 사용자 로그인 및 개인화 기능

---

# 8. 개선사항 및 프로젝트 소감

