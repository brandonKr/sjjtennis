const createClass = () =>{
    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    if (nameInput) {
        nameInput.value = '이름을 씁니다.';
    }
}

const RenderReserveWrite : React.FC = () => {
    let times = [];
    for (let i = 10; i < 22; i++) {
        times.push(
            i+":00"
        )
    };

    return (
        <div>
            시작시간
            <select name="start" id="start">
                {times.map((time,i)=>{
                    return (
                        <option 
                            key ={i}
                            value={`${times[i]}`}                                  
                        >{time} </option> 
                    )
                })}
            </select>
            종료시간
            <select name="end" id="end">
                {times.map((time,i)=>{
                    return (
                        <option 
                            key ={i}
                            value={`${times[i]}`}                                  
                        >{time} </option> 
                    )
                })}
            </select>
            <br/>
            <label>
            예약자
            <input type="text" name="name" id='name' placeholder="예약자" size={10}/>
            전화번호
            <input type='text' name='phone' id='phone' placeholder="전화번호" size={10}/>
            </label>
            <br/>
            <button onClick={createClass}>예약하기</button>
        </div>
    )
};

export default RenderReserveWrite;