const RenderReserveWrite : React.FC = () => {
    let times = [];
    for (let i = 10; i < 22; i++) {
        times.push(
            <option value="{i}:00">{i}:00</option>
        )
    };

    return (
        <div>
            시작시간
            <select name="start" id="start">
                {times}
            </select>
            종료시간
            <select name="end" id="end">
                {times}
            </select>
            <br/>
            <label>
            예약자
            <input type="text" name="name" id='name' placeholder="예약자" size={10}/>
            전화번호
            <input type='text' name='phone' id='phone' placeholder="전화번호" size={10}/>
            </label>
            <br/>
            <button>예약하기</button>
        </div>
    )
};

export default RenderReserveWrite;