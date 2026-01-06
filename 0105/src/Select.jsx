import { useLocation, useNavigate } from "react-router"
import { useState, useEffect } from "react";

const Select = () => {
    const location = useLocation();
    const user = location.state
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [gender, setGender] = useState(true);

    useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPwd(user.pwd || "");
      setGender(user.gender || "");
    }
    }, [user]);
    
    const clean = ()=>{
        setName('')
        setEmail('')
        setPwd('')
        setGender(null)
    }

    return(
        <div className="container mt-3">
	  <h1 className="display-1 text-center">사용자 정보</h1>
		<form>
		  <div className="mb-3 mt-3">
		    <label htmlFor="name" className="form-label">이름:</label>
		    <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
		  </div>
		  <div className="mb-3 mt-3">
		    <label htmlFor="email" className="form-label">이메일:</label>
		    <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
		  </div>
		  <div className="mb-3">
		    <label htmlFor="pwd" className="form-label">비밀번호:</label>
		    <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
		  </div>
			<div className="d-flex">
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio1" name="optradio" value="1" checked={gender === "1"} onChange={(e)=>setGender(e.target.value)} />남성
					<label className="form-check-label" htmlFor="radio1"></label>
				</div>
			  </div>
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio2" name="optradio" value="2" checked={gender === "2"} onChange={(e)=>setGender(e.target.value)}/>여성
					<label className="form-check-label" htmlFor="radio2"></label>
				</div>
			  </div>
			</div>
		</form>
		<div className="d-flex">
		  <div className="p-2 flex-fill d-grid">
		  	<a href="Update.html" className="btn btn-primary">수정</a>
		  </div>
		  <div className="p-2 flex-fill d-grid">
				<button onClick={clean} className="btn btn-primary">삭제</button>
		  </div>
		  <div className="p-2 flex-fill d-grid">
			<button onClick={()=>navigate("/")} className="btn btn-primary">취소</button>
		  </div>
		</div>
	</div>
    )
}

export default Select