import { Create, Subscriptions, Image, EventNote, CalendarViewDay } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import firebase from 'firebase'
import InputOption from '../../components/InputOption'
import Post from '../../components/Post'
import './styles.scss'
import { selectUser } from '../../../features/userSlice'
import { useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser)

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy("timestamp").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("")
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className= "feed__input">
                    <Create />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={Image} title="Photo" color="#70B5f9" />
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDay} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
                {posts.sort((post) => post.data.timestamp).reverse().map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed;
