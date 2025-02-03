import ReactMarkdown from "react-markdown"
export default function Recipe(props){
    return(
        <section className="suggested-recipe-container">
            <h2>The Cooking Compass Recommends:</h2>
            <ReactMarkdown>{props.ans}</ReactMarkdown>
        </section>
    )
}