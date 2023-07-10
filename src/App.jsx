/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';

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
        padding:0 20px;
    }
`;
const gradient_background = css`
    position:absolute;
    top:0;
    background-image:url('/images/home_bg_gradient.png');
    width:100%;
    height:734px;
    background-repeat: no-repeat;
    background-size: cover;
    z-index:-10;
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
const main = css`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    margin-top:160px;
    @media (max-width:575px){
        margin-top:140px;
    }
    overflow-x:hidden;
`;
const title = css`
    margin:20px 0 0 0;
    font-size:80px;
    font-weight:700;
    line-height:1.3;
    word-break:keep-all;
    text-shadow: 0 0 20px rgba(0,0,0,0.08);
    @media (max-width:575px){
        font-size:40px;
    }
`;
const subtitle = css`
    font-weight:500;
    font-size:32px;
    color:#ADB5BD;
    @media (max-width:575px){
        font-size:20px;
    }
`;
const main_button = css`
    margin-top:48px;
    border-radius:20px;
    background:var(--gray100);
    padding:20px 30px;
    font-weight:600;
    font-size:24px;
    color:#FFF;
    transition:.2s;
    &:hover{
        filter:drop-shadow(0 0 10px rgba(0,0,0,0.16));
        background:var(--green100);
    }
    @media (max-width:575px){
        font-size:20px;
        padding:18px 26px;
    }
`;
const example_image = css`
    width:1002px;
    margin-top:80px;
    @media (max-width:575px){
        margin-top:40px;
        width:92%;
    }
`;
const footer = css`
    width:100%;
    margin-top:280px;
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
const zoomin_when_hover = css`
    cursor:default;
    transition: all 0.2s linear;
    &:hover{transform:scale(1.08);
`;
const link_container = css`
    display:flex;
    justify-content:center;
    gap:20px;
    &>a{
        padding:10px 16px;
        font-size:24px;
        border-radius:16px;
        box-shadow:0 0 16px 0 rgba(0,0,0,0.08);
        opacity:0.5;
        transition: all 0.1s linear;
        &:hover{
            opacity:1;
        }
    }
    @media (max-width:575px){
        gap:10px;
        &>a{
            padding:10px 16px;
            font-size:18px;
            border-radius:16px;
        }
    }
`;

function App() {

    const [position, setPosition] = useState(0);

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400
        });
    })

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    function onScroll() {
        setPosition(window.scrollY);
    }
  

    return (
        <div>
            <div css={gradient_background}/>
            <header data-aos="fade-up" data-aos-duration="800" data-aos-delay="2000" css={header(position)}>
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
                <h3 data-aos="fade-up" data-aos-duration="800" css={subtitle}>성장하는 조직을 위한 팀 블로그 빌더</h3>
                <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" css={title}>우리 팀 이야기를<br/>세상에 전달하는 방법</h1>
                <img data-aos="fade-up" data-aos-duration="800" data-aos-delay="1200" src="/images/landing-main-image.png" alt="example image" css={example_image} />
                <a href="https://tally.so/r/npd4MJ" target="_blank" rel="noopener noreferrer">
                    <button css={main_button}>
                        팀 블로그 만들기
                    </button>
                </a>
                <div css={css`margin-top:220px;`}>
                    <div data-aos="fade-up">
                        <div css={link_container}>
                            <a href="https://naver.worksmobile.com/blog/" target="_blank" rel="noopener noreferrer" css={css`color:#008000;background:#EBF5EB;border:1px solid #BCDEBC;`}>네이버</a>
                            <a href="https://blog.kakaopay.com/" target="_blank" rel="noopener noreferrer" css={css`color:#A8761A;background:#FFFBEB;border:1px solid #FFC700;`}>카카오</a>
                            <a href="https://engineering.linecorp.com/ko/blog" target="_blank" rel="noopener noreferrer" css={css`color:#008000;background:#EBF5EB;border:1px solid #BCDEBC;`}>라인</a>
                            <a href="https://story.baemin.com/" target="_blank" rel="noopener noreferrer" css={css`color:#007C6D;background:#E6F2F1;border:1px solid #8AC3BC;`}>배달의민족</a>
                            <a href="https://about.daangn.com/blog/" target="_blank" rel="noopener noreferrer" css={css`color:#CD4A00;background:#FBEDE6;border:1px solid #EDBCA1;`}>당근마켓</a>
                            <a href="https://toss.tech/" target="_blank" rel="noopener noreferrer" css={css`color:#0000A1;background:#E6E6F6;border:1px solid #B8B8E5;`}>토스</a>
                            <a href="https://sendbird.com/ko/blog" target="_blank" rel="noopener noreferrer" css={css`color:#420084;background:#EDE6F3;border:1px solid #CBB8DD;`}>센드버드</a>
                        </div>
                        <h1 css={css`font-size:52px;font-weight:bold;margin-top:60px;`}>요즘 잘 나가는 팀들이 자체 블로그를 쓰는 이유</h1>
                    </div>
                    <div css={css`margin-top:80px;display:flex;justify-content:center;gap:32px;&>div{width:440px;border-radius:24px;box-shadow:0 0 16px 0 rgba(0,0,0,0.08);padding:76px 0;text-align:center;}`} data-aos="fade-up">
                        <div css={css`transition: all 0.1s linear;background:#FFF;cursor:default;&:hover{transform:scale(1.05);&>div:nth-of-type(2){color:var(--green100);}&>div:nth-of-type(3){color:#000;}}`}>
                            <div css={css`color:#868E96;font-size:44px;font-weight:700;`}>Acquisition</div>
                            <div css={css`margin-top:16px;font-size:92px;font-weight:700;transition: all 0.1s linear;`}>+55%</div>
                            <div css={css`margin-top:24px;line-height:160%;color:#ADB5BD;transition: all 0.1s linear;`}>블로그를 운영하는 기업은 그렇지 않은 기업 대비<br/>평균적으로 웹사이트 방문자가 55% 더 많습니다.</div>
                        </div>
                        <div css={css`transition: all 0.1s linear;background:#FFF;cursor:default;&:hover{transform:scale(1.05);&>div:nth-of-type(2){color:var(--green100);}&>div:nth-of-type(3){color:#000;}}`}>
                            <div css={css`color:#868E96;font-size:44px;font-weight:700;`}>Customer</div>
                            <div css={css`margin-top:16px;font-size:92px;font-weight:700;transition: all 0.1s linear;`}>+67%</div>
                            <div css={css`margin-top:24px;line-height:160%;color:#ADB5BD;transition: all 0.1s linear;`}>블로그를 운영하는 기업은 그렇지 않은 기업 대비<br/>평균적으로 67% 더 많은 잠재 고객을 유치합니다.</div>
                        </div>
                    </div>
                </div>
                <div css={[css`margin-top:220px;`,zoomin_when_hover]} data-aos="fade-up">
                    <div css={css`display:flex;align-items:center;gap:48px;`}>
                        <div css={css`width:480px;height:320px;border-radius:24px;color:#868E96;background-image:url('/images/blog-graphic.png');background-repeat:no-repeat;background-size: cover;`}></div>
                        <div css={css`text-align:left;`}>
                            <div css={css`font-size:36px;font-weight:700;line-height:140%;`}>군더더기 없이 심플한 블로그에<br/>팀원들과 함께 기록을 남겨보세요.</div>
                            <div css={css`margin-top:20px;font-size:24px;`}></div>
                        </div>
                    </div>
                </div>
                <div css={[css`margin-top:140px;`,zoomin_when_hover]} data-aos="fade-up">
                    <div css={css`display:flex;align-items:center;gap:48px;flex-direction:row-reverse;`}>
                        <div css={css`width:480px;height:320px;border-radius:24px;color:#868E96;background-image:url('/images/editor-graphic.png');background-repeat:no-repeat;background-size: cover;`}></div>
                        <div css={css`text-align:right;`}>
                            <div css={css`font-size:36px;font-weight:700;line-height:140%;`}>노션처럼 쉽고 강력한 에디터로<br/>검색 엔진 최적화까지 누려보세요.</div>
                            <div css={css`margin-top:20px;font-size:24px;`}></div>
                        </div>
                    </div>
                </div>
                <div css={[css`margin-top:140px;`,zoomin_when_hover]} data-aos="fade-up">
                    <div css={css`display:flex;align-items:center;gap:48px;`}>
                        <div css={css`width:480px;height:320px;border-radius:24px;color:#868E96;background-image:url('/images/custom-domain-graphic.png');background-repeat:no-repeat;background-size: cover;`}></div>
                        <div css={css`text-align:left;`}>
                            <div css={css`font-size:36px;font-weight:700;line-height:140%;`}>우리 팀만의 커스텀 도메인을 통해<br/>완전히 독립적인 블로그로 꾸며보세요.</div>
                            <div css={css`margin-top:20px;font-size:24px;`}></div>
                        </div>
                    </div>
                </div>
                <div css={css`margin-top:280px;`} data-aos="fade-up">
                    <h1 css={[title,css`font-size:68px;`]}>이제, 우리 팀 이야기를 세상에 알려보세요.</h1>
                    <a href="https://tally.so/r/npd4MJ" target="_blank" rel="noopener noreferrer">
                        <button css={main_button}>
                            팀 블로그 만들기
                        </button>
                    </a>
                </div>
            </main>
            <footer css={footer}>
                서울특별시 마포구 마포대로 122 프론트원 18층<br/><br/>
                <span style={{fontWeight:'bold'}}>© 팜스프링 Palmspring</span>
            </footer>
        </div>
    );
}

export default App;
