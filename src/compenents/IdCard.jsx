const IdCard =(props) =>{
    console.log(props)
  return (
    <div>
        <div className="img">
        <img src={props.picture} alt="idPic" style={{width:"300"}}/>
        </div>
        <div className="info">
        <p>lastName:{props.lastName}</p>  
        <p>firstName:{props.firstName}</p>  
        <p>{props.birth.toLocaleDateString()}

</p>  

        </div>
    </div>
  )
}

export default IdCard