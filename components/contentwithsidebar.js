function ContentWithSidebar(props) {
  return (
    <div className="content col-md-9  col-xs-12 pull-right">
      {props.children}
    </div>
  )
}

export default ContentWithSidebar;
