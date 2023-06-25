import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import DBCard from './DBCard';
import DBFilter from './DBFilter';

function Database() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('https://sheetdb.io/api/v1/vv1l83xybuwf3')
    const [resultCount, setResultCount] = useState(0);
    // const [nextUrl, setNextUrl] = useState();
    // const [prevUrl, setPrevUrl] = useState();

    const [formatList, setFormatList] = useState([]);
    const [contList, setContList] = useState([]);
    const [catList, setCatList] = useState([]);

    const dataFun = async()=>{
        setLoading(true);
        const res = await axios.get(url);
        setLoading(false);
        setData(res.data);
        setResultCount(data.length)
    }

    useEffect(() => {
        dataFun();
    }, [url])
    
    return (
    <div className='db top-margin'>
        <div className="db-content filter-wrapper">
            <DBFilter
                formatList = {formatList}
                setFormatList = {setFormatList}
                contList = {contList}
                setContList = {setContList}
                catList = {catList}
                setCatList = {setCatList}
            />
        </div>
        <div className='vl'></div>
        <div className='db-content'>
            <div className="sort-categories">
                <ul>
                    <li><p>Featured</p></li>
                    <li><p>Date Added</p></li>
                    <li><p>Title</p></li>
                </ul>
                <p>{`${resultCount} results`}</p>
            </div>
            <DBCard 
                formatList = {formatList}
                contList = {contList}
                catList = {catList}
                setResultCount = {setResultCount}
                data = {data} 
                loading = {loading} 
            />
        </div>
    </div>
    )
}

export default Database