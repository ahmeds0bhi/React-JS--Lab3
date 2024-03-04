import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
        axios
            .get(url)
            .then((res) => {
            setData(res.data);
            })
            .catch((err) => {
                console.err("Error fetching data:", err);
            });
        };
        fetchData();
    }, [url]);

    return { data };
};

export default useFetch;