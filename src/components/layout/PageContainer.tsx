import React, { ReactNode, FC } from "react";

interface IPageContainer {
    children: ReactNode
}

export default function PageContainer(children): FC<IPageContainer> {
    return <>
        <Navbar />
        {children}
        <Footer />
    </>
}
