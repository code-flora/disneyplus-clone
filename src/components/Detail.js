import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUserId } from '../features/user/userSlice';
import { useParams, useNavigate } from 'react-router-dom';
import db from '../firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';


function Detail() {
    //creating states
    const [movie, setMovie] = useState();
    const [open, setOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("Movie added to your watch list!");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");
    const [addedToList, setAddedToList] = useState(false)
    //other variables
    let navigate = useNavigate();
    let userId = useSelector(selectUserId);
    const { id } = useParams();

    //SNACKBAR integration
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        async function fetchData() {
            // Grab movie info from DB
            const docSnap = await getDoc(doc(db, "movies", id))
            if (docSnap.data()) {
                let data = { ...docSnap.data() };
                setMovie(data);
            } else {
                // redirect to homepage
            }

            let docCheck = await getDoc(doc(db, "users", userId));
            let currentWatchList = docCheck.data().watchList.map((movie) => movie.movieId);

            if (currentWatchList.includes(id)) {
                setAddedToList(true)
            }
        };
        fetchData();
    }, []) // [] dependency array, tells useeffect to trigger only when the dependency array changes

    async function addToWatchlist() {
        //1. User logged in? if logged in:
        if (userId) {
            let docSnap = await getDoc(doc(db, "users", userId));
            let userRef = doc(db, "users", userId);
            let tinyMovieData = {
                name: movie.name,
                thumbnailUrl: movie.thumbnailUrl,
                movieId: id
            }
            // if no data in "users" db, add user and current movie data
            if (!docSnap.data()) {
                await setDoc(userRef, {
                    watchList: [{ ...tinyMovieData }]
                })
            } else {
                //if user exists in "users" db
                if (!addedToList) {
                    // If movie is not in current watch list, add to list. Add notification that it is added
                    await updateDoc(userRef, {
                        watchList: arrayUnion(tinyMovieData)
                    })
                    setOpen(true);
                    setSnackbarMessage("Movie added to your watch list!");
                    setSnackbarSeverity("success");
                    setAddedToList(true);
                } else {
                    // If movie IS in current watch list, change function to delete from watch list. Add notification that it is deleted
                    await updateDoc(userRef, {
                        watchList: arrayRemove(tinyMovieData)
                    })
                    setOpen(true);
                    setSnackbarMessage("Movie is removed from your watch list.")
                    setSnackbarSeverity("info")
                    setAddedToList(false);
                }
            }
        } else {
            //1. if user not logged in
            navigate("/login");
        }
    }

    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img src={movie.bgImgUrl} alt="" />
                    </Background>
                    <ImageTitle>
                        <img src={movie.logoUrl} alt={movie.name} />
                    </ImageTitle>
                    <Controls>
                        <RowWrap>
                            <PlayButton>
                                <img src="https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Fplay-icon-black.png?alt=media&token=12e7b74e-bf81-482c-80de-9ec7f46c3ed1" alt="" /> <span>PLAY</span>
                            </PlayButton>
                            <TrailerButton>
                                <img src="https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Fplay-icon-white.png?alt=media&token=6cfacd2a-f028-4230-b62c-13943c2d592b" alt="" /> <span>TRAILER</span>
                            </TrailerButton>
                        </RowWrap>
                        <RowWrap>
                            <AddButton onClick={addToWatchlist} addedToList={addedToList} >
                                {addedToList ? <DoneIcon /> : <AddIcon />}
                            </AddButton>                           <GroupWatchButton>
                                <img src="https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Fgroup-icon.png?alt=media&token=edc64bca-bb34-4516-a7d2-b2e75e02049c" alt="" />
                            </GroupWatchButton>
                        </RowWrap>
                    </Controls>
                    <Subtitle>
                        <span>
                            {movie.year} ● {movie.duration} ● {movie.genre.join(', ')}
                        </span>
                    </Subtitle>
                    <Description>
                        <span>
                            {movie.description}
                        </span>
                    </Description>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                            {snackbarMessage}
                        </Alert>
                    </Snackbar>
                </>
            )}
        </Container >
    )
}

export default Detail

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    margin-top: 70px;
    margin-bottom: 30px;
    height: 20vh;
    min-height: 170px;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: left;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 15px;
    }
`

const RowWrap = styled.div`
    display: flex;

`

const PlayButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0 24px;
    margin-right: 22px;
    height: 48px;
    border: none;
    border-radius: 4px;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    background-color: rgb(249,249,249);
    cursor: pointer;

    &:hover{
        background-color: rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`

const AddButton = styled.button`
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.3);
    ${({ addedToList }) => addedToList == true && 'background-color: rgba(249,249,249,0.9);'}
    border: 1px solid rgb(249,249,249);
    color: white;
    ${({ addedToList }) => addedToList == true && 'color: black;'}
    cursor: pointer;
    
    svg {
        height: 1.2em;
        width: 1.2em;
    }


`

const GroupWatchButton = styled.button`
margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: rgb(0,0,0);
    color: white;
    border: 1px solid rgb(249,249,249);
    cursor: pointer;
`

const Subtitle = styled.div`
    margin-top: 26px;
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
`

const Description = styled.div`
    width: 33vw;
    margin-top: 5px;
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249,249,249);

    @media(max-width: 1400px){
        width: 60vw;
    }

    @media(max-width: 800px){
        width: 70vw;
    }

    @media(max-width: 576px){
        width: 90vw;
    }
`