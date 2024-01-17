// 배열 타입을 정의하는 방법 1
// 배열 요소의 타입을 적어준 후 배열임을 알리기 위해 [] 작성
let numArr: number[] = [1, 2, 3];

let StrArr: string[] = ["a", "b", "c"];

// 배열 타입을 정의하는 방법 2
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 요소가 문자 또는 숫자 라는 의미이므로 (string | number)[] 순서 바뀌어도 됨
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
// 배열 안에 배열.. 배열 안에 배열 안에 배열.. 2차,3차
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜플이 유용한 경우
// 인덱스의 위치에 따라서 넣어야되는 값들이 정해져 있고, 그 순서를 지키는 게 중요할 때
const users: [string, number][] = [
  ["이아무개", 1],
  ["김아무개", 2],
  ["박아무개", 3],
  ["최아무개", 4],
  // [5, "강아무개"],
];
