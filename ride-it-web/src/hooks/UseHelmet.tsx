import { useEffect } from "react";




export const UseHelmet = (pageTitle : string) => {
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);
};
