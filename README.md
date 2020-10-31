<p align="center">
    <img src="https://user-images.githubusercontent.com/19200664/96371041-e0dabf00-119a-11eb-972e-ecda3c0a5b6a.png" alt="CodeSquare Logo">
</p>
<p align="center">
    <a href="#">
        <img src="https://img.shields.io/github/license/osamhack2020/WEB_CodeSquare_AmongUs">
        <img src="https://img.shields.io/github/issues/osamhack2020/WEB_CodeSquare_AmongUs">
        <img src="https://img.shields.io/badge/OSAM_Hackathon_2020-In_progress-blue">
    </a>
</p>

코드스퀘어(CodeSquare)는 군 복무 중인 개발자를 위한 국방망용 오픈소스 통합 개발 플랫폼입니다.

## 기능 설계

[Figma](http://figma.com/)를 사용하여 화면 설계 및 디자인, 프로토타이핑을 진행하였습니다.

<table>
    <tr>
        <td width="50%">
            <img src="https://user-images.githubusercontent.com/19200664/97776386-cf39e400-1baa-11eb-963f-63c867992a34.PNG">
        </td>
        <td width="50%">
            <img src="https://user-images.githubusercontent.com/19200664/97776387-d06b1100-1baa-11eb-8c52-c4ffeaa5d58f.PNG">
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://www.figma.com/file/dZctafF9pSgbQbYhQYhP7O/Wireframe?node-id=4%3A98">화면설계 및 와이어프레임</a>
        </td>
        <td align="center">
            <a href="https://www.figma.com/file/7xEZdSH228mjjPT0HgKZjC/Design?node-id=0%3A1">최종 디자인 및 프로로타이핑</a>
        </td>
    </tr>
</table>

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
### 일반 사용자 (End User)
- ECMAScript 6 지원 브라우저 사용
- Google Chrome 77 이상을 권장합니다.

### 서버 최소 사양
- Operating Systems
    - Ubuntu (16.04/18.04/20.04)
    - Debian (9/10)
- Hardware Requirements
    - OpenStack Controller Node: 1 core processor, 4GB RAM, and 5GB storage
    - OpenStack Compute Node: 1 core processor, 2GB RAM, and 10GB storage
    - GitLab: 4 cores processor, 4GB RAM

## 기술 스택 (Technique Used)
### Server(back-end)
- Java Spring Boot
- MariaDB
- Redis

### Front-end
- Typescript
- React.js
- Emotion (CSS-in-JS)
- SockJS with STOMP

### Infra/Cloud
- Docker
- OpenStack
- OpenStack Heat
- OpenStack Zun (dockerized containers) + Virtual-Kubelet
- OpenStack Keystone
- NGINX (reverse proxy)
- node.js
- Google Cloud DNS

### Git
- GitLab CE
- Docker

### Documentation
- Docusaurus
- React.js
- GitHub Actions
- GitHub Pages

## 설치 및 프로젝트 사용법 (Installation & Getting Started)

```
$ git clone https://github.com/osamhack2020/WEB_CodeSquare_AmongUs
$ docker-compose up -d
```

CodeSquare는 WEB, Cloud, Infra 등 여러 분야가 융합된 프로젝트입니다. 프로젝트를 설치하기 위해서는 먼저 충분한 서버가 준비되어 있어야 하며, OpenStack 관련 설정도 진행되어야 합니다. 이를 위한 자세한 가이드라인은 [CodeSquare Docs](https://docs.codesquare.space)의 Getting Started 문서를 참고하시기 바랍니다.

## Among Us 팀 정보

Among Us팀은 "우리 군에 오픈소스 문화를 이끌어갈 개발자가 숨어 있다"라는 의미에서 지어진 팀입니다. 군 복무중인 개발자 장병들에게 더 편리한 개발 환경을 제공하고, 군에 오픈소스 문화가 자리잡을 수 있는 미래를 꿈꾸고 있습니다.

- [Chanyoung Oh](https://github.com/shydah): 팀장, 구조 설계 및 디자인, 문서화 작업 등
- [CirnoV](https://github.com/CirnoV): 프론트엔드 개발 담당
- [namkyu1999](https://github.com/namkyu1999): 백엔드 서버 개발 담당
- [Snowapril](https://github.com/Snowapril): OpenStack Cloud 담당
- [lijm1358](https://github.com/lijm1358): 인프라, VM 담당

## 저작권 및 사용 정보 (Copyleft / End User License)
- [MIT](https://github.com/osamhack2020/WEB_CodeSquare_AmongUs/blob/master/README.md)
