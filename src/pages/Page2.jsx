import { useEffect, useState } from 'react'
import {useNavigate, useLocation} from 'react-router'   /* hook기술 */
const Page2 = () => {    //react사용시, input은 /로 닫아주는 게 필수
    const navigate = useNavigate()
	const location = useLocation()   //useLocation 훅을 사용하여 데이터를 꺼낼 수 있다
    const onclick = () =>     //이것으로 기존의 아래 줄을 대체한다
        //location.href = 'Select.html';
        navigate("/")  /* root인 메인페이지 */

	const [data, setData] = useState({name: "", email: "", pwd: "", gender: true})  //값을 넣는 거; setData는 react-router문법이다

	useEffect(()=>{  //값을 채워주거나 확인하는 거; 이 부분은 예외처리; /page2를 입력하면 이벤트가 발생하지 않고 onclick()이벤트만 발생한다
		if(location.state === null) return onclick()  //null체크하기
		setData(location.state)  //새로운 값을 넣기  ; 받는 방법
	}, [])
    
	
    // const data = {
    //     "name":"스티븐",
    //     "email":"jobs@shellfolder.com",
    //     "pwd":"1",
    //     "gender": true,
    // }

    return(
    <div className="container mt-3">
	  <h1 className="display-1 text-center">사용자 정보</h1>
		<form>
		  <div className="mb-3 mt-3">
		    <label htmlFor="name" className="form-label">이름:</label>
		    <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." name="name" readOnly="readonly" defaultValue={data.name} />  {/* 상세페이지에 input사용하기 (디폴트 값으로 지정하기)*/}
		  </div>
		  <div className="mb-3 mt-3">
		    <label htmlFor="email" className="form-label">이메일:</label>
		    <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" readOnly="readonly" defaultValue={data.email} />
		  </div>
		  <div className="mb-3">
		    <label htmlFor="pwd" className="form-label">비밀번호:</label>
		    <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" readOnly="readonly" defaultValue={data.pwd} />
		  </div>
			<div className="d-flex">
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio1" name="gender" value="1" checked={data.gender === true} readOnly="readonly" />남성  {/* react에서 checked는 다른 의미가 있어서 사용불가 */}
					<label className="form-check-label" htmlFor="radio1"></label>
				</div>
			  </div>
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio2" name="gender" value="2" checked={data.gender === false} readOnly="readonly" />여성
					<label className="form-check-label" htmlFor="radio2"></label>
				</div>
			  </div>
			</div>
		</form>
		<div className="d-flex">
		  <div className="p-2 flex-fill d-grid">
		  	<button className="btn btn-primary" onClick={onclick}>수정</button>  {/* a태그를 button으로 수정하고 onClick을 추가한다 */}
		  </div>
		  <div className="p-2 flex-fill d-grid">
			<button className="btn btn-primary" onClick={onclick}>삭제</button>
		  </div>
		  <div className="p-2 flex-fill d-grid">
			<button className="btn btn-primary" onClick={onclick} >취소</button>
		  </div>
		</div>
	</div>
    )
    
}
export default Page2