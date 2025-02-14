import { useEffect, useState } from "react";

const Card = ({ title, actor }) => {
    const [count, setCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);

    useEffect(() => {
        console.log("The component has successfully been mounted!");
    }, []);

    return (
        <>
            <div className="title" onClick={() => setCount(c => c + 1)}>{title} {count || null}</div>
            <p className="data">
                First Name: {actor.firstName}<br />
                Last Name: {actor.lastName}
            </p>
            <button onClick={() => setHasLiked(!hasLiked)}>{hasLiked ? "❤️" : "🤍"}</button>
        </>
    )
}

export default Card