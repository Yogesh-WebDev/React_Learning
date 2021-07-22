import { useEffect } from 'react';

export default function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;

        return () => {
            //componentWillUnmount Logic
            console.log("Clean up");
        }
    })
}