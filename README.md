# 🧠 sim_plane - 성격유형 기반 심리테스트 웹 플랫폼

(25.06.09 ~ 25.06.30)
1주차 : DB 설계 및 프로젝트 구조 잡기 
2주차 : 문의글 게시판 crud 구현, 이미지 업로드 기능 구현
3주차 : 댓글 구현, 검색/필터링 기능 추가 
4주차 : 시큐리티(로그인) 기능 추가 
5주차 : 심리테스트 구현 

---
# 📚목차📚
1. 프로젝트 개요
2. 프로젝트 소개
3. 프로젝트 참여자
4. 개발환경
5. 기술소개
6. DB 테이블 구성(다이어그램)
7. 화면 예시
8. Trouble Shooting
9. 개선사항 및 프로젝트 소감 

---

# 🔍 1. 프로젝트 개요

요즘 사람들은 MBTI처럼 자신의 성격유형을 알아보는 테스트에 큰 흥미를 가지고 있습니다.
저 역시 이러한 흐름 속에서 자연스럽게 관심을 가지게 되었고,
간단한 클릭 몇 번으로 자신의 유형을 파악할 수 있다는 점이 큰 매력이라고 느끼게 되어 
그래서 누구나 쉽게 참여하고 결과를 확인할 수 있는 성격유형 기반 심리테스트 플랫폼을 직접 만들어보고자 이 프로젝트를 시작하게 되었습니다.

**SimPlane**은 "심리테스트 안에서 자유롭게 날아다녀라"라는 뜻을 가진 성격유형 테스트입니다.  
성격유형을 기반으로 사용자의 성향을 분석하고, 다양한 주제의 심리테스트를 제공하는 웹 기반 심리테스트 플랫폼입니다.  
테스트, 질문, 보기, 결과를 모두 DB로 관리하며, 사용자는 쉽고 빠르게 테스트에 집줓하고 결과를 확인할 수 있습니다.

---

# 2. 프로젝트 소개

## 로고 
![Image](https://github.com/user-attachments/assets/7dbc2aae-3220-4dc7-a1e8-52b4e7408302)
- 로고에도 하늘을 나는 귀여운 비행기를 사용해 사용자가 자신의 내면을 가볍고 자유롭게 탐색하고,
  마음껏 즐기며 심리여행을 떠나도록 의미를 담았습니다. 
  비행기의 웃는 표정은 편안함과 친근함, "FLY HIGH"라는 문구는 심리적 성장과 긍정적인 에너지를 상징합니다.
- 사용자가 SimPlane과 함께 자신만의 심리 여정을 자유롭게 탐색하고, 더 높이 비상하길 바라는 마음을 담았습니다.

---

## ✨ 주요 기능

### ✅ 1. 심리테스트 시스템
- 다양한 성격유형 기반 테스트 지원 (예: 스트레스 해소 유형, 대인관계 유형 등)
- 질문 및 보기 데이터 DB 관리 (sim_question / sim_answer)
- 점수 계산을 통해 유형 분류 (ex: E/I, S/N, T/F, J/P)
- 테스트 결과에 따른 설명 및 이미지 출력
- 띠별운세 결과는 JSON 형식으로 저장하고, 사용자가 테스트를 마치면 해당 JSON 데이터를 불러와 결과 페이지에 출력

### ✅ 2. 결과 페이지
- 테스트 응답 후 즉시 결과 유형(MBTI 등) 출력
- 유형별 상세 설명 및 이미지, 해석 제공
- 향후 테스트 기록 저장 기능 확장 가능

### ✅ 3. 관리자 기능 (기초 구현)
- 테스트, 질문, 보기, 결과 데이터 직접 삽입 및 조회 가능
- DB 일관된 ID 규칙에 따라 관리

---

## 3. 👩‍💻 참여자

| 이름 | 역할 |
|------|------|
| 이연수 | 백엔드 개발, DB 설계, 테이블 정의서, 심리테스트 로직 구현|
외 3명과 함께 개발했습니다. 


## 🛠 사용 기술 스택

| 분야 | 기술 |
|------|------|
| **백엔드** | Java, Spring Framework, MyBatis |
| **프론트엔드** | HTML, CSS, JavaScript, Thymeleaf |
| **데이터베이스** | MySQL |
| **개발 도구** | IntelliJ, Git, GitHub |

---
## 개발 환경 

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Framework](https://img.shields.io/badge/Spring_Framework-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![JUnit](https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=JUnit5&logoColor=white)
![MyBatis](https://img.shields.io/badge/MyBatis-000000?style=for-the-badge&logo=mybatis&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)

---

## 📂 DB 테이블 구성

| 테이블명 | 설명 |
|----------|------|
| `sim_test` | 심리테스트 정보 (테스트 ID, 제목 등) |
| `sim_question` | 각 테스트별 질문 목록 |
| `sim_answer` | 질문에 대한 보기 및 점수 방향 (예: E/I) |
| `sim_result` | 결과 유형 및 설명, 이미지 경로 등 |

---

## 📸 화면 예시

> ✨ 테스트 시작 페이지, 질문 진행 화면, 결과 페이지 등은 캡처 이미지로 첨부하거나  
> 실제 링크/데모가 있을 경우 아래에 포함시켜 주세요.

---

## 📌 향후 확장 예정 기능

- [ ] 테스트 결과 저장 및 히스토리 조회
- [ ] 사용자별 성향 통계 시각화
- [ ] 관리자 페이지 UI 고도화
- [ ] 사용자 로그인 및 개인화 기능


