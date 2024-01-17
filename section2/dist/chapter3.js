// object
let user = {
    id: 1,
    name: "홍길동",
};
user = {
    name: "아무개",
};
// -------
// 값을 수정하면 안되는 프로퍼티의 경우 readonly 를 작성하자
let config = {
    apiKey: "my api key",
};
export {};
