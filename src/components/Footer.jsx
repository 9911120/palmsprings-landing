/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footer = css`
    width:100%;
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

const Footer=()=>{
    return(
        <footer css={footer}>
            Made by Palmspring with ☕️ and 💕<br/><br/>
            <span css={css`font-weight:600;`}>© 팜스프링 Palmspring</span>
        </footer>
    );
}

export default Footer;