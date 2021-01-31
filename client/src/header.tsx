import React from 'react';
import './header.scss'
type HeaderProps = {
    travel: string;
}

//선택한 나라에 따라서 이미지가 바뀌는 것
const Header = ({ travel }: HeaderProps) => {
    return (
        <div className="header">
            <p>{travel}</p>
            <nav className="logoNavi">
                <li>로고</li>
                <li>유튜브</li>
                <li>깃헙</li>
            </nav>
            <div className="title">여행 예산 계산기</div>
        </div>
    )
};

export default Header;