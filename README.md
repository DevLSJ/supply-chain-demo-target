# supply-chain-demo-target

캡스톤 프로젝트 **supply-chain-watch**(LLM 기반 오픈소스 커밋 실시간 악성 행위 탐지 시스템)의 시연 대상 레포지토리입니다.

작은 문자열 유틸리티 npm 패키지 형태로, 시연 중 데모용 의심 커밋이 푸시되고 탐지 시스템이 이를 실시간으로 분석·경보하는 과정을 보여줍니다. 모든 데모 커밋은 실제 유해 동작이 없는 무해한 패턴 재현용입니다.

## 사용

```js
const { capitalize, kebabCase, truncate } = require('@devlsj/demo-string-utils');
```

## 테스트

```bash
npm test
```
