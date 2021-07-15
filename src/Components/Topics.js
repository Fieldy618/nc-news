import { useEffect, useState } from "react"

const Topics = (props) => {
    const {topic, setTopic} = props
    const [topics, setTopics] = useState([])

    useEffect(() => {
        fetch("https://kvwn-news.herokuapp.com/api/topics")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setTopics(data.topics)
        })
    }, [])

    return (
        <section className="topics-section">
            {topics.map((item) => {
        return (
                    <button
                    key={item.topics}
                    className="topics-button"
                    onClick={() => {
                        setTopic(item.slug)
                    }}
                    >
                        {item.slug}
                    </button>

                );
            })}
            {topic && (
                <button 
                className="topics-button"
                onClick={() => {
                    setTopic(undefined)
                }}
                >
                    Clear Topics
                </button>
            )}
        </section>
    )
}


export default Topics