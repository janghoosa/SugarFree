import React, {useState} from 'react';
//import { useHistory } from 'react-router-dom';
//import axios from 'axios';

const InputInfo = ({userInfo, onChangeUserInfo, onClickSave}) =>{
    
    //입력창에 보이는 값이 바뀔 때, state 변경
    const handleChange = (e) =>{
        const {name, value} = e.target;
        onChangeUserInfo({
            ...userInfo,
            [name] : [value]
        });
    }

    //중복 검사 버튼 클릭 시, 중복인지 아닌지 확인
    const handleCheckDuplicate = (e) =>{
        //db에서 같은 아이디가 있는지 검사하고 없다면 onChangeUserInfo로 id_duplicate true로 변경
        e.preventDefault()
    }

    //저장
    const handleClick = () =>{
        //save시 작동
        onClickSave();
    }

    // 비밀번호 visibility 변경
    const pwVisibility = () =>{
        let pwd = document.getElementById("pwdInput");
        if(pwd.type === "password"){
            pwd.type = "text"
        }else{
            pwd.type = "password";
        }
    }

    return(
        <form>
            <b>ID</b>
            <br/>
            <input
                type="text"
                placeholder='ID' 
                name="id" 
                onChange={handleChange}
                value={userInfo.id}
            />
            <button onClick={handleCheckDuplicate}>check</button>
            <br/>
            <b>PASSWORD</b>
            <br/>
            <input
                id='pwdInput'
                type="password"
                placeholder='PWD' 
                name="pw" 
                onChange={handleChange}
                value={userInfo.pw}
            />
            <input type="checkbox" onClick={pwVisibility}/>Show Password
            <br/>
            <b>NickName</b>
            <br/>
            <input
                type="text"
                placeholder='NICKNAME'
                name="nickname"
                onChange={handleChange}
                value={userInfo.nickname}
            />
            <br/>
            <button onClick={handleClick}>Sign Up</button>
        </form>
    );
}

const RegisterPage = () =>{
    const [userInfo, setUserInfo] = useState({
        "id" : "",
        "pw" : "",
        "nickname" : "",
        "que" : "",
        "id_duplicate" : false
    });

    const onClickSave = () =>{
        //axios로 db에 전송
    }

    return(
        <div id='register-div'>
            <fieldset>
                <legend>Input Yout Information to Sign Up</legend>
                <InputInfo 
                userInfo = {userInfo} 
                onChangeUserInfo={setUserInfo} 
                onClickSave = {onClickSave}
                />
            </fieldset>
        </div>
    );
}

export default RegisterPage; 