function App() {
    return (
        <div>
            <Tweet
                name="test"
                username="test"
                date={new Date().toDateString()}
                message="test"
            />
            <Tweet
                name="test1"
                username="test1"
                date={new Date().toDateString()}
                message="test1"
            />
        </div>
    )
}