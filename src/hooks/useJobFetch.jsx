import { useState, useEffect } from "react";

// fetch data using custom Hook
const fetchJobHook = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const getData = await fetch(url);
                const resData = await getData.json();
                setData(resData)
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchJob();
    }, [url])

    return {data, loading}


}

export default fetchJobHook;