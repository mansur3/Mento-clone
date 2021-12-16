import {useState, useEffect, createContext} from "react";
import WebFont from 'webfontloader';

import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [lesson, setLesson] = useState([]);
    const [comment, setComment] = useState([]);
    const getLesson = async () => {
        let {data} = await axios.get("http://localhost:2345/courses");
        setLesson(data.Course)
    }
    const getComment = async () =>{
        let {data} = await axios.get("http://localhost:2345/comment");
        setComment(data.items);
        // console.log(data);
    }

    useEffect(() => {
        getComment();
        getLesson();
        WebFont.load({
            google: {
                families: [ "Poppins, sans-serif", "Roboto Slab", "Roboto Condensed"]
            }
        })
    })


    return (
        <AppContext.Provider value = {{lesson, comment}}>{children}</AppContext.Provider>
    )
}