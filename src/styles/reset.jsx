import {css} from '@emotion/react';

const reset = css`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.ttf') format("truetype");
        font-display: swap;
    }
    * {
        font-family: 'Pretendard',sans-serif;
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    body{
        font-size:16px;
        --gray100:#212529; //1A1E27
        --gray200:#ADB5BD;
        --green100:#3EB489;
        color:var(--gray100);
        letter-spacing:-0.2px;
        word-break: keep-all;
    }
    button{
        cursor:pointer;
        padding:0;
        border:0;
        background:unset;
        font-size:unset;
        padding: 0;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

export default reset;