import React from 'react'

const TodoPresenter = ({
    number,
    onClickCounter,
    double,
    onClickDobleCounter
}) => {
    return(
        <div style={{margin:'100px auto', width:'500px', height:'500px', backgroundColor:'#eef'}}>
            <div style={{padding:'10px 20px 0px ', borderBottom:'0.5px solid #999'}}><h1>Todolist</h1></div>
            <section id='input' style={{textAlign:'center', padding:20,display:'flex' }}>
                <input style={{justifyContent:'space-around'}}></input>
            </section>
            <section style={{borderBottom:'0.5px solid #999',  alignItems:'center',flexDirection:'colum' }}>
                <text style={{alignItems:'center', height:'100px',}}>할일</text>
                <text style={{alignItems:'center', height:'100px',}}>할일</text>
                <text style={{alignItems:'center', height:'100px',}}>할일</text>
                <text style={{alignItems:'center', height:'100px',}}>할일</text>
                <text style={{alignItems:'center', height:'100px',}}>할일</text>

            </section>
        </div>
    )
  
}

export default TodoPresenter

//뿌려주기만ㄴ 함
//return (
//     <div style={{width:'500px', height:'500px', backgroundColor:'#ffe' }}>
//         <div >{number}</div>
//         <button onClick={onClickCounter}>counter</button>
//         <div >{double}</div>
//         <button onClick={onClickDobleCounter}>counter</button>
//     </div>
//   )