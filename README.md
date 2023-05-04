## Bottom Sheet 라이브러리

TypeScript와 React로 구현한 Bottom Sheet 라이브러리입니다.

Bottom Sheet 컴포넌트를 사용할 수 있는 `Bottom Sheet`와

Bottom Sheet를 여닫을 수 있는 custom hook `useBottomSheet`가 있습니다.

## 설치 방법

```js
npm install 'hae-on-bottom-sheet'
yarn add 'hae-on-bottom-sheet'

```

## 사용 방법

### Bottom Sheet

1. Bottom Sheet 컴포넌트 불러오기

```js
import { BottomSheet } from 'hae-on-bottom-sheet';
```

2. Bottom Sheet 컴포넌트 사용하기

해당 컴포넌트는 children(React Element)을 받아서 사용합니다.

따라서 Bottom Sheet가 필요한 컴포넌트의 외부에서 사용해주세요.

```js
import { BottomSheet } from 'hae-on-bottom-sheet';

interface ExampleProps {
  onClose: () => void;
}

const Example = ({ onClose }: ExampleProps) => {
  return (
    //이곳에서 사용합니다.
    <BottomSheet onClose={onClose}>
      // Bottom Sheet 내부에 들어갑니다.
      <ExampleContainer>내용을 입력하세요</ExampleContainer>
    </BottomSheet>
  );
};

export default Example;
```

### useBottomSheet

1. useBottomSheet custom hook 불러오기

```js
import { useBottomSheet } from 'hae-on-bottom-sheet';
```

2. useBottomSheet custom hook 사용하기

```js
const { isBottomSheetOpen, handleBottomSheetOpen, handleBottomSheetClose } =
  useBottomSheet();
```

### isBottomSheetOpen

해당 bottom sheet의 여닫는 상태입니다.

isBottomSheetOpen의 상태에 따라 뒤에 오는 컴포넌트의 렌더링 여부가 결정됩니다.

예시)

```javascript
{
  isBottomSheetOpen && <BankList onClose={handleBottomSheetClose} />;
}
```

### handleBottomSheetOpen

bottom sheet를 열 수 있습니다.

props로 전달하여 사용할 수 있습니다.

예시)

```javascript
//CardList.tsx
// 사용하고자하는 컴포넌트에 props로 전달 후
<CardItem card={card} onOpen={handleBottomSheetOpen} />

//CardItem.tsx
// BankChangeBtn이 클릭되면 BottomSheet가 열립니다.
<BankChangeBtn onClick={onOpen}>{card.bankName}</BankChangeBtn>
```

### handleBottomSheetClose

bottom sheet를 닫을 수 있습니다.

props로 전달하여 사용할 수 있습니다.

예시)

```javascript
//CardList.tsx
// 사용하고자하는 컴포넌트에 props로 전달 후
<CardItem card={card} onClose={handleBottomSheetClose} />

//CardItem.tsx
// BankChangeBtn이 클릭되면 BottomSheet가 닫힙니다.
<BankChangeBtn onClick={onClose}>{card.bankName}</BankChangeBtn>
```
