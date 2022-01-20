function Card(props) {
    return (
        <div className="per-card">
            <center>
                <h1>
                    {props.Header}
                </h1>
            </center>
        </div>
    )
}
export default Card;