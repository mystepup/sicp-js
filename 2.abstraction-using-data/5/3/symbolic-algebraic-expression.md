일반적으로 대수식을, 피연산자들과 그 에 대한 연산자들이 트리 형태로 조직화된 위계구조로 볼 수 있다. 상수와 변수 같은 \
일단의 원시 객체들에서 출발해서 그런 객체들을 더하기나 곱하기 같은 대수 연산자들로 결합해 나가다보면 얼마든지 복잡한 대수식이 만들어진다. \
'형식'이라는 개념이 표현식의 처리 방식을 명시하는 데 유용할 때가 많다.

## 다항식 산술
가장 먼저 할 일은 시스템이 다룰 다항식을 좀 더 구체적으로 정의하는 것이다.
일반적으로 다항식은 특정한 변수를 기준으로 정의된다. 그런 변수를 다항식의 부정원(indeterminate;미지수)라고 부른다.
여기서는 일변량 다항식만을 다루자.

다항식을 표현하는 다른 방법이 존재한다. \
예를 들어 인수들의 곱으로 표현할 수도 있고 \
(단변량 다항식의 경우) 뿌리 노드들의 집합으로 표현하거나 \
주어진 일단의 점들에서 다항식을 평가한 값들의 목록으로 표현할 수도 있다.