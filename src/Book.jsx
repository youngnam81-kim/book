function Book(props) {
  return (
    <>
    <hr></hr>
    <p>(index.html ▷ main.jsx ▷ Library.jsx ▷ Book(props).jsx)</p>
    <h2>책이름 : {props.name}</h2>
    <h3>이책은 : {props.total} 페이지 입니다.</h3>
    </>
  )
}

export default Book
