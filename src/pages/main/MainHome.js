import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function MainHome() {
    let navigate = useNavigate();

    function subclick() {
        navigate("/SubHome");
    }




    return (
        <>
            <h1>메인화면</h1>

            <button onClick={subclick}>서브화면</button>
            <Link to="/SubHome">서브화면으로 넘어가기</Link>
        </>
    );
}