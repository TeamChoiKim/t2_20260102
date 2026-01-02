import {useNavigate} from 'react-router'   /* hook기술:화면 전환 */

const Page1 = () => {
    const navigate = useNavigate()  //React Router(v6 이상)에서 페이지를 프로그래밍 방식으로 //이동//시킬 때 사용하는 Hook이다
    // const onclick = (data) => {    //data가 매개변수이고 이것으로 기존의 3번째 줄을 대체한다
    //     //location.href = 'Select.html';
    //     // console.log(data)
    //     navigate("page2",{state:data})  //arr의 행마다의 값을 전부 받는다; 보내는 방법
    //     //state는 특정 페이지로 이동할 때 해당 페이지에 전달하고 싶은 커스텀 데이터(상태 값)를 의미
    //     //Navigation: onclick 함수 내부에서 navigate("page2", { state: data })가 실행되어, '스티븐'의 모든 정보가 page2로 전달됩니다.
    // }
    const onclick = data => navigate('page2', {state: data})
    const arr = [   //다른 페이지 값들을 모두 포함해야 한다
        { "key":1, "name":"스티븐", "email":"jobs@shellfolder.com", "regDate":"2023-02-28", "pwd": "1", "gender": true },
        { "key":2, "name":"에브릴", "email":"lavigne@shellfolder.com", "regDate":"2023-02-27", "pwd": "2", "gender": false },
    ]
    // const styles = {
    //     "cursor":"pointer"
    // }
    const styles = { "cursor":"pointer" }
    return(
    <div className="container mt-3">
        <h1 className="display-1 text-center">사용자 목록</h1>
        <div className="btn-group">
            <a href="Create.html" className="btn btn-primary">사용자 추가</a>
        </div>
        <table className="table table-hover mt-3">
            <thead className="table-dark">
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((v,i) => {   //.map은 무조건 (value, index)형식
                        return(
                            <tr style = {styles} onClick = {() => onclick(v)} key={i}>  {/* v는 5줄의 data가 받는다; 왜냐면 특정 행을 클릭하는 순간, 그 행에 묶여있던 v(객체 데이터)가 onclick 함수의 첫 번째 인자인 data 자리로 전달 */}
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>{v.regDate}</td>
                            </tr> 
                        )
                        
                    })
                }
                
            </tbody>
        </table>
    </div>
    )
}
export default Page1