import { FC } from "react"

export let AboutPage: FC = () => {
    return (
        <>
            <h1 className="section_heading">What is this app about?</h1>
            <p>This app was built in case of learning how to use TypeScript with React</p>
            <p>You can find source code right <a href="https://github.com/dhelfy/ts-course">here</a></p>
        </>
    )
}