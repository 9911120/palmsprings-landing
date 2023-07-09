/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const header = css`
    width:100%;
    border-bottom: 1px solid #EEE;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    background: transparent;
    backdrop-filter: blur(18px);
    z-index: 10;
`;
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
        padding:0 20px;
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
    @media (max-width:1200px){
        display:none;
    }
`;
const main = css`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    margin-top:160px;
    @media (max-width:575px){
        margin-top:140px;
    }
`;
const title = css`
    margin:20px 0 0 0;
    font-size:60px;
    font-weight:700;
    line-height:1.3;
    letter-spacing:-0.8px;
    word-break:keep-all;
    @media (max-width:575px){
        font-size:40px;
    }
`;
const subtitle = css`
    font-weight:500;
    font-size:24px;
    color:var(--gray200);
`;
const main_button = css`
    margin-top:48px;
    border-radius:20px;
    background:var(--gray100);
    padding:20px 30px;
    font-weight:600;
    font-size:24px;
    color:#FFF;
    transition:.3s;
    &:hover{
        filter:drop-shadow(0 0 10px rgba(0,0,0,0.16));
    }
    @media (max-width:575px){
        font-size:20px;
        padding:18px 26px;
    }
`;
const example_image = css`
    margin-top:60px;
    width:92%;
    max-width:1000px;
    border-radius:20px;
    filter:drop-shadow(0 0 20px rgba(0,0,0,0.16));
    @media (max-width:575px){
        display:none;
    }
`;
const footer = css`
    width:100%;
    margin-top:100px;
    background:#f2f4f6;
    padding:90px 0;
    text-align:center;
    color:#868B94;
    font-size:14px;
    @media (max-width:575px){
        padding:60px 0;
        font-size:12px;
    }
`;

function App() {

    const [remainingSeconds, setRemainingSeconds] = useState(0);

    useEffect(() => {
        const targetDate = new Date('2023-07-10T18:00:00');
        const now = new Date();
        const difference = Math.floor((targetDate - now) / 1000); // 밀리초를 초로 변환
        if (difference > 0) {
            setRemainingSeconds(difference);
            const intervalId = setInterval(() => {
            setRemainingSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
            return () => {
                clearInterval(intervalId);
            };
        }
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    


    return (
        <>
            {/* <header css={header}>
                <div css={header_inside}>
                    <div css={logo}>
                        <img src="/images/palmspring_new_logo.png" alt="palmtree" />
                    </div>
                    <div>
                        <a href="https://tally.so/r/npd4MJ" target="_blank" rel="noopener noreferrer">
                            <button css={header_button}>
                                팀 블로그 만들기
                            </button>
                        </a>
                    </div>
                </div>
            </header>
            <main css={main}>
                <h3 css={subtitle}>성장하는 조직을 위한 팀 블로그 빌더</h3>
                <h1 css={title}>우리 팀 이야기를<br/>세상에 전달하는 방법</h1>
                <a href="https://tally.so/r/npd4MJ" target="_blank" rel="noopener noreferrer">
                    <button css={main_button}>
                        팀 블로그 만들기
                    </button>
                </a>
                <div css={[example_image]} />
            </main>
            <footer css={footer}>
                서울특별시 마포구 마포대로 122 프론트원 18층<br/><br/>
                <span style={{fontWeight:'bold'}}>© 팜스프링 Palmspring</span>
            </footer> */}
            <div css={css`margin-top:140px;font-size:68px;font-weight:700;text-align:center;`}>
                {formatTime(remainingSeconds)}
            </div>
            <div css={css`text-align:center;`}>
                <img css={css`margin-top:40px;height:24px;`} src="/images/palmspring_new_logo.png" alt="palmtree" />
            </div>
        </>
    );
}

export default App;
