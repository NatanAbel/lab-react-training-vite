function BoxColor(props) {
    console.log("props...",props)
  return (
    <div style={{border:"1px solid white", background:`rgb(${props.r},${props.g},${props.b})`}}>
        <p>{(props.r)},{(props.b)},{(props.g)}</p>
    </div>
  )
}

export default BoxColor