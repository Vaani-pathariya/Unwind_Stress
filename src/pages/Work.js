const urlParams= new URLSearchParams(window.location.search)
        const time=urlParams.get('time')   
const Work=()=>{
    return (
        <div className="settings">
            <div className="wrapper-settings">
            <button><h2>Start Here</h2></button>
            </div>
        </div>
    )
}
export default Work