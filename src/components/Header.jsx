/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
// import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const header =(position)=>{
    return css`
        width:100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        ${position>520 && 'position: fixed;border-bottom: 1px solid #EEE;background: rgba(255,255,255,0.75);backdrop-filter: blur(18px);'}
        z-index: 10;
    `
}
const header_inside = css`
    width:100%;
    max-width:1200px;
    height:60px;
    margin:0 auto;
    padding:0 24px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width:575px){
        padding:0 8px 0 20px;
    }
`;
const logo = css`
    font-size:20px;
    color:var(--gray100);
    display:flex;
    align-items:center;
    & > img {
        height:24px;
    }
`;
const header_button = css`
    background:var(--gray100);
    color:#FFF;
    border-radius:12px;
    padding:10px 20px;
    font-weight:600;
    transition:.2s;
    &:hover{
        background:var(--green100);
    }
    @media (max-width:1200px){
        display:none;
    }
`;


const Header =()=>{

    const location = useLocation();
    const [position, setPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    function onScroll() {
        setPosition(window.scrollY);
    }

    return(
        <header css={header(position)} data-aos={location.pathname!=='/team'&&'fade'} data-aos-duration="800" data-aos-delay="2000" data-aos-once="true">
            <div css={header_inside}>
                <Link to="/">
                    <div css={logo}>
                        <img src="/images/palmspring_new_logo.png" alt="palmtree" />
                    </div>
                </Link>
                <div css={css`display:flex;gap:12px;align-items:center;@media(max-width:1200px){display:block;}`}>
                    <Link to="/team" css={[header_button,css`background:transparent;color:var(--gray100);&:hover{background:rgba(0,0,0,0.05);color:var(--green100)};@media(max-width:1200px){display:block;}`]}>팜스프링팀</Link>
                    <a href="https://tally.so/r/npd4MJ" target="_blank" rel="noopener noreferrer">
                        <button css={header_button}>온보딩 예약하기</button>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;