/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import "aos/dist/aos.css";
import Header from "../components/Header";
import { Instagram, Linkedin, Github, Link45deg } from 'react-bootstrap-icons';
import Footer from '../components/Footer';

const ourBelovedPM = [
    {
        name:'김대덕',
        position:'Team Leader',
        desc:'세상에 도움이 되는 삶을 살고 싶어요',
        url:[
            'https://kimdaeduk.oopy.io',
            'https://dannykim.tistory.com/',
            'https://disquiet.io/@_9911120'
        ]
    },{
        name:'양정윤',
        position:'Product Manager',
        desc:'알은 새의 세계이다. 누구든지 태어나려고 하는 자는 하나의 세계를 파괴해야 한다.',
        url:[
            'https://instagram.com/zzang_yoon'
        ]
    }
];
const ourBelovedDesigner = [
    {
        name:'권윤',
        position:'UX/UI Designer',
        desc:'Product Designer @Palmspring',
        url:[
            'https://doongzi.kr/yoon'
        ]
    },{
        name:'김성은',
        position:'UX/UI Designer',
        desc:'디자이너입니다.',
        url:[
            "https://instagram.com/sungeunarchive_"
        ]
    },{
        name:'송승훈',
        position:'UX/UI Designer',
        desc:'기술과 디자인의 조화로 윤택한 삶을 만들고 싶습니다.',
        url:[
            'https://big-camel-a35.notion.site/Leo-Song-2023-29feffece20f4d1592b6630070c4adee?pvs=4'
        ]
    }
];
const ourBelovedFE = [
    {
        name:'김서현',
        position:'FE Engineer',
        desc:'사용자를 생각하는 개발자',
        url:[
            'https://github.com/seobbang'
        ]
    },{
        name:'오형근',
        position:'FE Engineer',
        desc:'개발자 꿈나무입니다! 제가 궁금하시다면 깃헙을 봐주세요.',
        url:[
            'https://github.com/Geun-Oh',
            'https://patch-strand-bb8.notion.site/F-E-Developer-7d29ae91483c4c4392d7efd31984550c?pvs=4'
        ]
    },{
        name:'이시연',
        position:'FE Engineer',
        desc:'코린이입니다! ٩(๑❛ᴗ❛๑)۶',
        url:[
            'https://github.com/SynthiaLee',
            'https://www.instagram.com/synthia_lee_/',
        ]
    },{
        name:'장명지',
        position:'FE Engineer',
        desc:'🐶발도 좋아하고 개발도 좋아합니다.',
        url:[
            'https://github.com/Dangpy',
            'https://www.instagram.com/_myundi/',
        ]
    }
];
const ourBelovedServer = [
    {
        name:'정동규',
        position:'BE Engineer',
        desc:'안녕하세요!! 하고 싶은건 일단 하고 보는 "프로 머박러"(머리박는, 대박 아닙니다,)백엔드 개발자 정동규 입니다.',
        url:[
            'https://github.com/yummygyudon',
            'https://www.linkedin.com/in/%EB%8F%99%EA%B7%9C-%EC%A0%95-8a6b25226/',
            'https://www.instagram.com/dev_gyu_99/',
        ]
    },{
        name:'장유진',
        position:'BE Engineer',
        desc:'성장중인 개발자입니다. 긴장해라 네카라쿠배. 그리고 저는.. 더보기',
        url:[
            'https://instagram.com/eu_jinchin'
        ]
    }
];

const Team =()=>{

    const main = css`
        text-align:center;
        padding:160px 0 240px 0;
        background:#F2F4F6;
        @media (max-width:800px){
            padding:160px 16px 120px 16px;
        }
    `;
    const title_container = css`
        display:flex;
        flex-direction:column;
        gap:20px;
        line-height:160%;
        & > h1 {
            font-size:40px;
        }
        & > div {
            margin-top:12px;
        }
    `;
    const profile_container = css`
        display:grid;
        width:100%;
        max-width: 1100px;
        margin:68px auto 0 auto;
        grid-template-columns:1fr 1fr 1fr 1fr;
        column-gap:20px;
        row-gap:32px;
        @media (max-width:1340px){
            max-width:calc(260px * 3 + 20px * 2);
            grid-template-columns:1fr 1fr 1fr;
        }
        @media (max-width:1060px){
            max-width:calc(260px * 2 + 20px * 1);
            grid-template-columns:1fr 1fr;
        }
        @media (max-width:800px){
            max-width:100%;
            grid-template-columns:1fr;
            row-gap:24px;
        }
    `;
    const profile_wrapper = css`
        border:1px solid #EEE;
        border-radius:20px;
        padding:16px 16px 30px 16px;
        width:100%;
        max-width:260px;
        margin:0 auto;
        // box-shadow:0 0 16px 0 rgba(0,0,0,0.08);
        box-shadow:0px 15px 20px 0px rgba(64, 71, 79, 0.08),0px 4px 8px 0px rgba(67, 78, 90, 0.04);
        background:#FFF;
        transition: all 0.2s linear;
        & > div:nth-of-type(1){
            position:relative;
            width:100%;
            height:0;
            padding-bottom:100%;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius:14px;
        }
        & > div:nth-of-type(2){
            margin-top:20px;
            font-size:20px;
            font-weight:700;
            & > span {
                font-size:16px;
                font-weight:normal;
            }
        }
        // & > div:nth-of-type(2){
        //     margin-top:12px;
        //     font-size:14px;
        // }
        & > div:nth-of-type(3){
            margin-top:30px;
            display:flex;
            gap:12px;
            justify-content:center;
            font-size:20px;
            color:#ADB5BD;
            &>a{
                transition:.3s;
            }
            &>a.instagram:hover{
                color:#FF016E;
            }
            &>a.linkedin:hover{
                color:#0066C0;
            }
            &>a.github:hover{
                color:#000000;
            }
            &>a.link:hover{
                color:#0084F5;
            }
        }
        @media (max-width:800px){
            max-width:100%;
        }
        &:hover{
            transform:scale(1.03);
            box-shadow:0px 10px 20px 0px rgba(64, 71, 79, 0.16),0px 2px 8px 0px rgba(67, 78, 90, 0.06);
        };
    `;

    const randomNumber = Math.random();
    const randomNumberForOrder = 
        ((0<=randomNumber && randomNumber<(1/6))&&1)||
        ((1/6<=randomNumber && randomNumber<(2/6))&&2)||
        ((2/6<=randomNumber && randomNumber<(3/6))&&3)||
        ((3/6<=randomNumber && randomNumber<(4/6))&&4)||
        ((4/6<=randomNumber && randomNumber<(5/6))&&5)||
        ((5/6<=randomNumber && randomNumber<(6/6))&&6);
    const randomArray =
        (randomNumberForOrder===1&&[...ourBelovedPM,...ourBelovedFE,...ourBelovedServer,...ourBelovedDesigner])||
        (randomNumberForOrder===2&&[...ourBelovedPM,...ourBelovedFE,...ourBelovedDesigner,...ourBelovedServer])||
        (randomNumberForOrder===3&&[...ourBelovedPM,...ourBelovedServer,...ourBelovedFE,...ourBelovedDesigner])||
        (randomNumberForOrder===4&&[...ourBelovedPM,...ourBelovedServer,...ourBelovedDesigner,...ourBelovedFE])||
        (randomNumberForOrder===5&&[...ourBelovedPM,...ourBelovedDesigner,...ourBelovedFE,...ourBelovedServer])||
        (randomNumberForOrder===6&&[...ourBelovedPM,...ourBelovedDesigner,...ourBelovedServer,...ourBelovedFE])

    return(
        <div style={{width:'100%'}}>
            <Header/>
            <main css={main}>
                <div css={title_container}>
                    <h1>만드는 사람들</h1>
                    <div>조직의 위대함은 개인 혼자서는 불가능한 일을 가능하게 만드는 것에 있습니다.<br/>팜스프링에서 끊임없이 도전하며 불가능을 가능케하는 11명의 팀원들을 소개합니다.</div>
                </div>
                <div css={profile_container}>
                    {
                        randomArray.map((e,i)=>{
                            return(
                                <div css={profile_wrapper} key={i}>
                                    <div css={css`background-image:url('/images/profiles/${e.name}.jpg')`}/>
                                    <div>{e.name}<br/><span>{e.position}</span></div>
                                    {/* <div>{e.desc}</div> */}
                                    <div>
                                        {
                                            e.url.map((e,i)=>{
                                                const host = 
                                                    (e.indexOf('https://instagram.com')!==-1 && 'instagram')||
                                                    (e.indexOf('https://github.com')!==-1 && 'github')||
                                                    (e.indexOf('https://www.linkedin.com')!==-1 && 'linkedin')||
                                                    'link';
                                                return(
                                                    <a key={i} className={host} href={e} target="_blank" rel="noopener noreferrer">
                                                        {host==='instagram'&&<Instagram/>}
                                                        {host==='github'&&<Github/>}
                                                        {host==='linkedin'&&<Linkedin/>}
                                                        {host==='link'&&<Link45deg/>}
                                                    </a>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                    
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Team;