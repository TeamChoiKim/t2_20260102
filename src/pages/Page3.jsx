import { useNavigate } from "react-router"



const Page1 = () => {
    
    let info = {};
    const navigate = useNavigate()

    const onclickP2 = () => navigate('page2')
    const onclickP3 = () => navigate('page3')

    const arr = [
        { "name": "스티븐", "email": "jabs@naver.com", "regData": "2023-02-21" },
        { "name": "에이브릴", "email": "vvv@naver.com", "regData": "2025-02-21" },
    ]
    const styles = {
        "cursor" : "pointer"
    }    
    return (
        <div className="container mt-3">
            <h1 className="display-1 text-center">사용자 목록</h1>
            <div className="btn-group">
                <button  className="btn btn-primary">사용자 추가</button>
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
                        arr.map((v, i) => {
                            return (
                                <tr style={styles} key={i} onClick={() => {
                                    return (
                                        info = arr[i],
                                        console.log(info)
                                    )
                                    
                                }}>
                                    
                                    <td>{v.name}</td>
                                    <td>{v.email}</td>
                                    <td>{v.regData}</td>
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