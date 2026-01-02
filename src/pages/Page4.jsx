//이름에 내용을 썼을 때 저장을 누르면 밑에 저장되게(새로운 게 아래로)
//  이름인풋에 내용 받는 걸 저장할 useState text형으로 제작
// 저장한 text 저장버튼 이후에 출력



// import { useNavigate } from 'react-router'
import { useState } from 'react'

const PageList = () => {
    const[list, setList] = useState([]);
    const[txt, setTxt] = useState('');
    const[email, setEmail] = useState('');
    const[pwd, setPwd] = useState('');
    const[radio, setRadio] = useState('');
    const submitEvent = (e) => {
        e.preventDefault()
        if(txt === '' || 
           email.trim() === '' ||
           pwd.trim() === '') return
        setList(prev => [...prev, {txt, email, pwd, radio}])
       setTxt('')
       setEmail('')
       setPwd(''); 
       setRadio('')

    }

 return (
        <div className="container mt-3">
        <h1 className="display-1 text-center">사용자 수정</h1>
            <form onSubmit={submitEvent}>
            <div className="mb-3 mt-3">
                <div >
                <label htmlFor="name" className="form-label">이름:</label>
                <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요."
                 name="name" autoComplete='off'
                 value={txt} onChange={e => setTxt(e.target.value)}
                  />
                </div>
            </div>
            <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">이메일:</label>
                    <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." 
                    name="email" autoComplete='off'
                    value={email} onChange={e => setEmail(e.target.value)}/>   
            </div>
            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">비밀번호:</label>
                <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." 
                name="pwd" 
                value={pwd} onChange={e => setPwd(e.target.value)} />
            </div>
                <div className="d-flex">
                <div className="p-2 flex-fill">
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="1"
                        checked={radio === '1'} onChange={e => setRadio(e.target.value)} />남성
                        <label className="form-check-label" htmlFor="radio1"></label>
                    </div>
                </div>
                <div className="p-2 flex-fill">
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="2"
                        checked={radio === '2'} onChange={e => setRadio(e.target.value)} />여성
                        <label className="form-check-label" htmlFor="radio2"></label>
                    </div>
                </div>
                </div>
                  <div className="d-flex">
            <div className="p-2 flex-fill d-grid">
                    <button type='submit' className="btn btn-primary">저장</button>
            </div>
            <div className="p-2 flex-fill d-grid">
                <a href="Select.html" className="btn btn-primary">취소</a>
            </div>
            </div>
            <div>
                {
                list.map((v, i) => <div key ={i}>
                    <p>이름: {v.txt}</p>
                    <p>이메일: {v.email}</p>
                    <p>비밀번호: 비밀이에요🤫</p>
                    <p>성별: {v.radio === '1' ? '남자' : radio === '2' ? '여자' : ''} </p>
                    <p>위 내용이 맞는지 다시 확인해주세요</p>
                </div>)
                }
            </div>
            </form>
          
        </div>
    )
}

export default PageList