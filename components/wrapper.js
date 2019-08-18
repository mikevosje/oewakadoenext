function Wrapper(props) {
  return (
    <div className="container" id="wrapper">
      <div className="row">
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper;
