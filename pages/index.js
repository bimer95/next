import {useState, useEffect} from 'react'

const Index = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function load(){
           const response = await fetch("http://localhost:4200/posts")
           const json = await response.json()
           setPosts(json)
        }
        load()
    }, [])
      
    return (
        <div>
            <a href="/asdsa"> Pages1</a>
            <pre>{JSON.stringify(posts)}</pre>
            
            
        </div>
    )
}

export default Index;