import Book from './Book.jsx'
function Library(){
    return(
        <>
        <div>(index.html ▷ main.jsx ▷ Library.jsx)</div>
        <Book name={"첫번째 책"} total={500}></Book>
        <Book name={"두번째 책"} total={352}></Book>
        <Book name={"세번째 책"} total={785}></Book>
        </>
    )
}

export default Library
