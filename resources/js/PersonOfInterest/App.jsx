const App = () => {
    // this is how the React application reads from the blade WHAT id it should fetch the data for
    const personId = document.querySelector('input[name="person_id"]').value
    return (
        <div id="returned-app-component">
            <h2>The ID of the we want the details of person is {personId}</h2>
        </div>
    )
}

export default App