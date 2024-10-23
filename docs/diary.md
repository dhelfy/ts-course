# 13.10.2024

* Узнал как создавать компоненты и типизировать их.

``` tsx
interface ComponentProps {
    height: string;
}

let Card: FC<ComponentProps> = ({height}) => {
    return (
        <div>
        </div>
    )
}
```

В примере выше создаем компонент и указываем, что он является функциональным. В дженерике говорит пропсы какого типа он должен принимать.

* Узнал как обозначить `props.children` в типизации

Делается это следующим образом:

``` tsx
interface CardProps {
    height: string;
    width: string;
    children?: React.ReactNode
}
```

# 15.10.2024

* Поработал с `enum`, узнал как делать типизацию через `enum`
* Поработал с пропа под функцию

Пример:

```tsx
export enum CardVariant {
    bordered = "bordered",
    filled = "filled"
}

interface CardProps {
    variant: CardVariant;
    clickEvent?: () => void; // говорим что у функции нет аргументов и она ничего не возвращает
}

let Card: FC<ComponentProps> = ({variant, clickEvent}) => {
    return (
        <div onClick={clickEvent}>
        </div>
    )
}
```

При создании компонента передаем функцию

```tsx
<Card clickEvent={() => alert('Clicked!')}>
        
</Card>
```

# 18.10.2024

* Научился типизировать `useState`
* Научился типизировать ответ с сервера от `axios`

## Пример типизации useState

``` tsx
interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}

let [users, setUsers] = useState<IUser[]>([])
```

В примере выше создаем `useState` и говорим, что его начальным значением будет пустой массив, а в дженерике дополнительно указываем что типом значения `useState` будет массив сущностей типа `IUser`

## Пример типизации ответа с сервера

```tsx
async function fetchUser () {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (error) {
      console.error(error);
    }
}
```

В примере выше функция делает запрос на сервер, а в дженерике мы указываем, что ответ с сервера придет в виде массива сущностей, которые соответствуют интерфейсу `iUser`

# 21.10.2024

* Научился создавать гибкие компоненты с обобщенными типами на дженериках

Как пример был сделан компонент `<List />`:

```tsx
import { ReactNode } from "react";
import styles from "./List.module.css"

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode
}

export function List<T>(props: ListProps<T>) {
    return (
        <div className={styles.list}>
            {props.items.map(props.renderItem)}
        </div>
    )
}
```

В этом примере мы создаем интерфейс с дженериком, тип в него будет подстановлен в момент вызова компонента.

У интерфейса есть два поля, первое это просто массив определенных элементов, а второе это функция, которая принимает на вход какой-то элемент определенного типа и возвращает `ReactNode`.

У компонента также используется дженерик и мы также типизируем пропсы, указывая что они будут типа `ListProps`. Значение в дженерик компонента будет передано во время его вызова и указания пропсов, какого типа будут пропсы, такой тип и будет подставлен в дженерик.

# 23.10.2024

* Научился типизировать события
* Научился типизировать хук `useRef`

## Типизация событий

Когда нам нужно типизировать событие мы указываем что это за событие, в примере ниже это `React.ChangeEvent`, а в дженерике указываем на каком элементе это событие вызывается.

```tsx
import React, { FC, useRef, useState } from "react";

export let EventsExample: FC = () => {
    let [inputValue, setinputValue] = useState<string>('')

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setinputValue(e.currentTarget.value)
    }

    return (
        <div>
            <input value={inputValue} onChange={changeHandler} />
        </div>
    )
}
```

## Типизация useRef

В случае когда мы создаем ссылку на элемент через `useRef` мы также можем его типизировать. Для этого после объявления хука ставится дженерик в который передается тип элемента.

Когда мы передаем значение рефа в `console.log` у свойства `current` ставится `?`, т.к. ссылка может быть в том числе пустой (`null`). Есть и другие способы и случаи использования `useRef`, как их типизировать можно прочитать тут 

https://my-js.org/docs/cheatsheet/react-typescript/

```tsx
import React, { FC, useRef, useState } from "react";

export let EventsExample: FC = () => {
    let inputRef = useRef<HTMLInputElement>(null)

    function clickHandler() {
        alert(inputValue)
        console.log(inputRef.current?.value)
    }

    return (
        <div>
            <input ref={inputRef} placeholder="Неуправляемый" />
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
```