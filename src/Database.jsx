import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import DBCard from './DBCard';

function Database() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('https://sheetdb.io/api/v1/vv1l83xybuwf3')
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const dataFun = async()=>{
        setLoading(true);
        const res = await axios.get(url);
        setLoading(false);
        setData(res.data);
        console.log(data);
    }

    useEffect(() => {
        dataFun();
    }, [url])

    return (
    <div>
        <div className="sort-categories">
            <p>Featured</p>
            <p>Date Added</p>
            <p>Title</p>
            <p>{`${data.length} results`}</p>
        </div>
        <DBCard data = {data} loading = {loading} />
    </div>
    )
}

export default Database