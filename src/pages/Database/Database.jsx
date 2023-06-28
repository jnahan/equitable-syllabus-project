import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import DBCard from "./DBCard";
import Filter from "./Filter";

function Database() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://sheetdb.io/api/v1/vv1l83xybuwf3")
    const [resultCount, setResultCount] = useState(0);
    // const [nextUrl, setNextUrl] = useState();
    // const [prevUrl, setPrevUrl] = useState();

    const [formatList, setFormatList] = useState([]);
    const [contList, setContList] = useState([]);
    const [catList, setCatList] = useState([]);

    const dataFun = async()=>{
        setLoading(true);
        const res = await axios.get(url);
        console.log(res.data);
        res.data.map((item) => {
            item.Category = item.Category.split("; ")
            item.Continent = item.Continent.split(", ")
        })
        setLoading(false);
        setData(res.data);
        setResultCount(data.length)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        dataFun();
    }, [url])
    
    return (
    <div className="db section--top">
        <div className="db__section db__section--filter">
            <Filter
                formatList = {formatList}
                setFormatList = {setFormatList}
                contList = {contList}
                setContList = {setContList}
                catList = {catList}
                setCatList = {setCatList}
            />
        </div>
        <div className="db__vl"></div>
        <div className="db__section">
            <div className="db__tab tab">
                <ul className="tab__list">
                    <li className="tab__item"><p>Featured</p></li>
                    <li className="tab__item"><p>Date Added</p></li>
                    <li className="tab__item"><p>Title</p></li>
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