export default function Header ({score, bestScore}) {
    return (
        <header>
            <h1>Memory Card</h1>
            <div className="score-container">
                <div className="curr-score">Score: {score} </div>
                <div className="best-score">Best Score: {bestScore}</div>
            </div>
        </header>
    )
}