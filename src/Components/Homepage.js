import Header from "./Header"
import Topics from "./Topics"
import Articles from "./Articles"
import {useState} from 'react'

const Homepage = (props) => {
    const {user} = props
    const [topic, setTopic] = useState();

    return (
        <main className="homepage-grid">
            <Header user={user} />
            <Topics setTopic={setTopic} topic={topic} />
            <Articles topic={topic} />

        </main>
    )
}

export default Homepage