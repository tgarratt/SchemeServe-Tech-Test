import React from "react";
import PostcodeForm from "../components/Home/PostcodeForm";
import PostcodeProvider from "../providers/PostcodeProvider";
import Content from "../components/Home/Content";


function Home() {
    return (
        <>
            <PostcodeProvider>
                <PostcodeForm />
                <Content />
            </PostcodeProvider>
        </>
    )
}

export default Home