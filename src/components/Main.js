import BlogPosts from "./Blogposts";
import cards from "../data/cards-data";

function Main() {
    return (
        <main>
            <section className="cards">
                {cards.map((card, idx) => <BlogPosts card={card} key={idx}/>)}
            </section>
        </main>
    )
}

export default Main;
