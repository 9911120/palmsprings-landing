/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
        filter: invert(58%) sepia(14%) saturate(3901%) hue-rotate(118deg) brightness(101%) contrast(60%);
    }
    & > span {
        font-family:'Black Han Sans',sans-serif;
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
    font-size:50px;
    font-weight:700;
    line-height:1.4;
    word-break:keep-all;
    @media (max-width:575px){
        font-size:40px;
    }
`;
const description = css`
    text-align:left;
    font-size:22px;
    line-height:1.6;
    margin-top:36px;
    @media (max-width:575px){
        font-size:18px;
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
const example_phone_image = css`
    margin-top:60px;
    width:90%;
    filter:drop-shadow(0 0 20px rgba(0,0,0,0.16));
    border-radius:20px;
    @media (min-width:576px){
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
    return (
        <>
            <header css={header}>
                <div css={header_inside}>
                    <div css={logo}>
                        <img src="/images/palmtree_icon.png" alt="palmtree" />
                        <span style={{color:'var(--green100)',marginLeft:'4px'}}>palm</span>
                        <span>springs</span>
                    </div>
                    <div>
                        <button css={header_button}>
                            팀 블로그 만들기
                        </button>
                    </div>
                </div>
            </header>
            <main css={main}>
                <h1 css={title}>세상에서 가장 심플한<br/>공동집필 <span style={{color:'var(--green100)'}}>팀 블로그</span>를 소개합니다.</h1>
                <div css={description}>
                    <span style={{fontFamily:'Tossface'}}>✅</span> 가장 심플하고 깔끔한 디자인<br/>
                    <span style={{fontFamily:'Tossface'}}>✅</span> 팀원들 추가하여 공동 집필 가능<br/>
                    <span style={{fontFamily:'Tossface'}}>✅</span> 마크다운 작성 & 파일 불러오기<br/>
                    <span style={{fontFamily:'Tossface'}}>✅</span> 유입/유지 관련 통계 데이터 제공<br/>
                    <span style={{fontFamily:'Tossface'}}>✅</span> 네이버/구글 검색엔진 최적화
                </div>
                <button css={main_button}>
                    팀 블로그 만들기
                </button>
                <img src="/images/example.png" alt="palmspring example" css={example_image} />
                <img src="/images/example_phone.png" alt="palmspring example" css={example_phone_image} />
            </main>
            <footer css={footer}>
                서울특별시 마포구 마포대로 122 프론트원 18층<br/><br/>
                <span style={{fontWeight:'bold'}}>© 팜스프링 Palmsprings</span>
            </footer>
        </>
    );
}

export default App;
