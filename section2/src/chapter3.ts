// object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

user = {
  name: "아무개",
};

// -------
// 값을 수정하면 안되는 프로퍼티의 경우 readonly 를 작성하자
let config: {
  readonly apiKey: string;
} = {
  apiKey: "my api key",
};
