import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/home/movieSlice'

function Home() {
    const dispatch = useDispatch();

    //get data from store, saving data in redux
    useEffect(() => {
        async function fetchData() {
            const snapshot = await getDocs(collection(db, "movies"));
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            dispatch(setMovies(tempMovies));
        };
        fetchData();
    }, []);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    padding-bottom: 100px;
    overflow-x: hidden;
    
    :before {
        background: url("https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Fhome-background.png?alt=media&token=5590ed3b-d09b-4256-bf40-2bc98fc044df") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`