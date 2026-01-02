const Page1 = () => {
    const onclick= () => {location.href = 'Select.html';}
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
	      <tr className="cursor-pointer" onClick={onclick}>
	        <td>스티븐</td>
	        <td>jobs@shellfolder.com</td>
	        <td>2023-02-28</td>
	      </tr>
	      <tr className="cursor-pointer" onClick={onclick}>
	        <td>에브릴</td>
	        <td>lavigne@shellfolder.com</td>
	        <td>2023-02-27</td>
	      </tr>
	    </tbody>
	  </table>
	</div>
)
}

export default Page1