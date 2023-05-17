import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../header/Header';
import Item from '../item/Item';
import "./main.css"

const Main = () => {

    const [wargame,setWargame]=useState([]);
    const [oldgold,setOldgold]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:1337/api/war-games')
        .then((wargame)=>{
            setWargame(wargame.data.data)
        })
        .catch(()=>{

        })
        .finally(()=>{

        })

        axios.get('http://localhost:1337/api/old-golds')
        .then((oldgold)=>{
            setOldgold(oldgold.data.data)
        })
        .catch(()=>{

        })
        .finally(()=>{

        })
    },[])
  return <>
  <Header />
  <section>
    <article className='names'>WAR-GAME</article>
    {wargame.map((item,key)=>{
       return <Item item={item.attributes} key={key}/>
    })}
    <article className='names'>OLD-GOLD</article>
    {oldgold.map((item,key)=>{
       return <Item item={item.attributes} key={key}/>
    })}
  </section>
  </>
}

export default Main
