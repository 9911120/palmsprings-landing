/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const gradient_background = css`
    position:absolute;
    top:0;
    background-image:url('/images/home_bg_gradient.png');
    width:100%;
    height:734px;
    background-repeat: no-repeat;
    background-size: cover;
    z-index:-10;
    @media (max-width:575px){
        display:none;
    };
`;
const main = css`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    margin:160px 0 280px 0;
    @media (max-width:575px){
        margin-top:140px;
    }
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
const feature_image_container = css`
    cursor:default;
    transition: all 0.2s linear;
    &:hover{transform:scale(1.08);}
    display:flex;
    align-items:center;
    gap:48px;
    flex-wrap:wrap;
    &>div:nth-of-type(2){
        text-align:left;
    }
    @media (max-width:575px){
        flex-direction:column-reverse;
        gap:10px;
        &>div:nth-of-type(2){
            text-align:center !important;
        }
    }
`;
const feature_title = css`
    width:500px;
    font-size:36px;
    font-weight:700;
    line-height:140%;
    @media (max-width:575px){
        width:100%;
        font-size:28px;
    }
`;
const link_container = css`
    &>h1{
        font-size:52px;
        font-weight:bold;
        margin:60px 0 0 0;
    }
    @media(max-width:575px){
        &>h1{
            width:90%;
            font-size:36px;
            margin:40px auto 0 auto;
        }
    }
`;
const link_wrapper = css`
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
        width:100%;
        flex-wrap:wrap;
        gap:10px;
        &>a{
            padding:10px 16px;
            font-size:18px;
            border-radius:16px;
        }
    }
`;
const feature_image = css`
    width:480px;
    height:320px;
    border-radius:24px;
    background-repeat:no-repeat;
    background-size: cover;
    @media (max-width:575px){
        position:relative;
        width:93%;
        height:62%;
        padding-bottom:62%;
        margin:0 auto;
    }
`;
const why_they_use_container = css`
    margin-top:80px;
    display:flex;
    justify-content:center;
    gap:32px;
    &>div{
        width:440px;
        border-radius:24px;
        box-shadow:0 0 16px 0 rgba(0,0,0,0.08);
        padding:76px 0;
        text-align:center;
    }
    @media (max-width:575px){
        flex-direction:column;
        &>div{
            width:90%;
            margin:0 auto;
            padding:60px 0;
        }
    }
`;

const Home=()=>{

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400
        });
    })

    return (
        <div style={{width:'100%'}}>
            <div css={gradient_background}/>
            <Header/>
            <main css={main}>
                <h3 data-aos="fade-up" data-aos-duration="800" css={subtitle}>성장하는 조직을 위한 팀 블로그 빌더</h3>
                <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" css={title}>우리 팀 이야기를<br/>세상에 전달하는 방법</h1>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="1200" css={css`display:flex;flex-direction:column;align-items:center;`}>
                    <img src="/images/landing-main-image.png" alt="example image" css={example_image}/>
                    <a href="https://tally.so/r/npd4MJ" target="_blank" rel="noopener noreferrer">
                        <button css={main_button}>
                            팀 블로그 만들기
                        </button>
                    </a>
                </div>
                <div css={css`margin-top:220px;`}>
                    <div css={link_container} data-aos="fade-up">
                        <div css={link_wrapper}>
                            <a href="https://naver.worksmobile.com/blog/" target="_blank" rel="noopener noreferrer" css={css`color:#008000;background:#EBF5EB;border:1px solid #BCDEBC;`}>네이버</a>
                            <a href="https://blog.kakaopay.com/" target="_blank" rel="noopener noreferrer" css={css`color:#A8761A;background:#FFFBEB;border:1px solid #FFC700;`}>카카오</a>
                            <a href="https://engineering.linecorp.com/ko/blog" target="_blank" rel="noopener noreferrer" css={css`color:#008000;background:#EBF5EB;border:1px solid #BCDEBC;`}>라인</a>
                            <a href="https://about.daangn.com/blog/" target="_blank" rel="noopener noreferrer" css={css`color:#CD4A00;background:#FBEDE6;border:1px solid #EDBCA1;`}>당근마켓</a>
                            <a href="https://story.baemin.com/" target="_blank" rel="noopener noreferrer" css={css`color:#007C6D;background:#E6F2F1;border:1px solid #8AC3BC;`}>배달의민족</a>
                            <a href="https://toss.tech/" target="_blank" rel="noopener noreferrer" css={css`color:#0000A1;background:#E6E6F6;border:1px solid #B8B8E5;`}>토스</a>
                            <a href="https://sendbird.com/ko/blog" target="_blank" rel="noopener noreferrer" css={css`color:#420084;background:#EDE6F3;border:1px solid #CBB8DD;`}>센드버드</a>
                        </div>
                        <h1>요즘 잘 나가는 팀들이 자체 블로그를 쓰는 이유</h1>
                    </div>
                    <div css={why_they_use_container} data-aos="fade-up">
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
                <div css={[css`margin-top:220px;@media(max-width:575px){margin-top:180px;}`,feature_image_container]} data-aos="fade-up">
                    <div css={[css`background-image:url('/images/blog-graphic.png');`,feature_image]}></div>
                    <div>
                        <div css={feature_title}>군더더기 없이 심플한 블로그에 팀원들과 함께 기록을 남겨보세요.</div>
                        <div css={css`margin-top:20px;font-size:24px;`}></div>
                    </div>
                </div>
                <div css={[feature_image_container,css`margin-top:140px;flex-direction:row-reverse;`]} data-aos="fade-up">
                    <div css={[css`background-image:url('/images/editor-graphic.png');`,feature_image]}></div>
                    <div css={css`text-align:right;@media(max-width:575px){text-align:center;width:94%;margin:0 auto;}`}>
                        <div css={[css`width:480px;`,feature_title]}>노션처럼 쉽고 강력한 에디터로 검색 엔진 최적화까지 누려보세요.</div>
                        <div css={css`margin-top:20px;font-size:24px;`}></div>
                    </div>
                </div>
                <div css={[css`margin-top:140px;`,feature_image_container]} data-aos="fade-up">
                    <div css={[css`background-image:url('/images/custom-domain-graphic.png');`,feature_image]}></div>
                    <div>
                        <div css={[css`width:520px;@media(max-width:575px){font-size:26px;}`,feature_title]}>우리 팀만의 커스텀 도메인을 통해 완전히 독립적인 블로그로 꾸며보세요.</div>
                        {/* <div css={css`margin-top:20px;font-size:24px;`}></div> */}
                    </div>
                </div>
                <div css={css`margin-top:280px;@media (max-width:575px){margin-top:180px;}`} data-aos="fade-up">
                    <h1 css={[title,css`font-size:64px;`]}>이제, 우리 팀 이야기를 세상에 알려보세요.</h1>
                    <a href="https://tally.so/r/npd4MJ" target="_blank" rel="noopener noreferrer">
                        <button css={main_button}>
                            팀 블로그 만들기
                        </button>
                    </a>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Home;