

const Card = (title, year, poster, stars) => {
    return (
        <>
            <div className="card">
                <div className="card__name">
                    {title}
                </div>
                <div className="card_year">
                    {year}
                </div>
                <div className="card__poster">
                    <img src={poster} alt="poster" />
                </div>
                <div className="stars">{stars}</div>
            </div>
        </>
    )
}

export default Card;