"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[40367],{148050:function(be,Sn,o){o.d(Sn,{Z:function(){return Q}});var Ln=o(168400),C=o.n(Ln),Pn=o(667294),w=o(186548),Fn=o(65630),cn=o(879587),yn=o(785893),m,d="https://github.com/ant-design/ant-design/edit/master/",$=(0,Fn.kc)(function(y){var W=y.token,Dn=y.css,p=W.colorIcon,F=W.colorText,D=W.iconCls;return{editButton:Dn(m||(m=C()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),D,p,F)}});function Q(y){var W=y.title,Dn=y.filename,p=$(),F=p.styles;return(0,yn.jsx)(cn.Z,{title:W,children:(0,yn.jsx)("a",{className:F.editButton,href:"".concat(d).concat(Dn),target:"_blank",rel:"noopener noreferrer",children:(0,yn.jsx)(w.Z,{})})})}},244011:function(be,Sn,o){o.r(Sn),o.d(Sn,{default:function(){return Dr}});var Ln=o(805574),C=o.n(Ln),Pn=o(294184),w=o.n(Pn),Fn=o(727484),cn=o.n(Fn),yn=o(533852),m=o(385956),d=o(667294),$=o(715778),Q=o(75529),y=o(302559),W=o(438746),Dn=o(168400),p=o.n(Dn),F=o(370917),D=o(65630),n=o(785893),oe,Qn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},dn=function(){var e=(0,D.Fg)(),t=function s(c){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return x<=10?`
.palette-`.concat(c,"-").concat(x,` {
  background: `).concat(e["".concat(c,"-").concat(x)],`;
}
`).concat(s(c,x+1),`
    `):""},a=function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return c<=13?`
.palette-gray-`.concat(c,` {
  background: `).concat(Qn[c],`;
}
`).concat(s(c+1),`
    `):""};return(0,n.jsx)(F.xB,{styles:(0,F.iv)(oe||(oe=p()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),a())})},ue=dn,Yn,Xn=function(){return(0,n.jsx)(F.xB,{styles:(0,F.iv)(Yn||(Yn=p()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},qn,re=function(){var i=(0,D.Fg)();return(0,n.jsx)(F.xB,{styles:(0,F.iv)(qn||(qn=p()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),i.colorText,i.fontSize,i.fontFamily,i.lineHeight,i.colorBgContainer)})},Zn,me=function(){var i=(0,D.Fg)(),e=i.anchorTop;return(0,n.jsx)(F.xB,{styles:(0,F.iv)(Zn||(Zn=p()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),e)})},Rn=o(510274),Hn,_n=function(){var e=(0,D.Fg)(),t=e.antCls,a=e.colorPrimary;return(0,n.jsx)(F.xB,{styles:(0,F.iv)(Hn||(Hn=p()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.colorText,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,a,new Rn.C(a).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new Rn.C(a).setAlpha(.75).toHexString(),t,t,new Rn.C(a).setAlpha(.75).toHexString(),t,t,t,t,new Rn.C(a).setAlpha(.6).toHexString(),t,t,t)})},pe=_n,ne,ae=function(){var i=(0,D.Fg)();return(0,n.jsx)(F.xB,{styles:(0,F.iv)(ne||(ne=p()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),i.colorText,i.fontSize,i.borderRadius)})},ie,ge=function(){var e=(0,D.Fg)(),t=e.antCls,a=e.iconCls;return(0,n.jsx)(F.xB,{styles:(0,F.iv)(ie||(ie=p()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,a,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,a,e.colorBgContainer,a,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},ee=ge,Mn,un=function(){var i=(0,D.Fg)(),e=i.antCls,t=i.iconCls;return(0,n.jsx)(F.xB,{styles:(0,F.iv)(Mn||(Mn=p()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,i.colorPrimary,t,e)})},l,r=function(){var i=(0,D.Fg)(),e=i.iconCls;return(0,n.jsx)(F.xB,{styles:(0,F.iv)(l||(l=p()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),i.colorIcon,i.colorIconHover,i.colorBorder,i.colorTextSecondary,e,i.colorLinkHover)})},u,h=function(){return(0,n.jsx)(F.xB,{styles:(0,F.iv)(u||(u=p()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},z,k=function(){var i=(0,D.Fg)();return(0,n.jsx)(F.xB,{styles:(0,F.iv)(z||(z=p()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),i.screenLG,i.colorBgContainer,i.colorSplit,i.colorLink,i.colorBgContainer)})},I,L=function(){var i=(0,D.Fg)();return(0,n.jsx)(F.xB,{styles:(0,F.iv)(I||(I=p()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary)})},v,T=function(){var i=(0,D.Fg)();return(0,n.jsx)(F.xB,{styles:(0,F.iv)(v||(v=p()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),i.colorPrimary,i.colorError,i.colorText,i.colorTextSecondary,i.colorBgContainer,i.borderRadius,i.colorBgContainer,i.colorBgContainer)})},G,Y="dumi-default-",on=function(){var i=(0,D.Fg)();return(0,n.jsx)(F.xB,{styles:(0,F.iv)(G||(G=p()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),Y,i.colorText,i.colorBgContainer,i.colorBgContainer,i.colorTextPlaceholder,Y,i.colorBgElevated,i.colorBgElevated,Y,i.controlItemBgActive,i.controlItemBgHover,i.colorText,i.colorText)})},hn,an=function(){return(0,n.jsx)(F.xB,{styles:(0,F.iv)(hn||(hn=p()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},ln=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(re,{}),(0,n.jsx)(me,{}),(0,n.jsx)(pe,{}),(0,n.jsx)(ae,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(un,{}),(0,n.jsx)(r,{}),(0,n.jsx)(h,{}),(0,n.jsx)(k,{}),(0,n.jsx)(L,{}),(0,n.jsx)(T,{}),(0,n.jsx)(an,{}),(0,n.jsx)(ue,{}),(0,n.jsx)(Xn,{}),(0,n.jsx)(on,{})]})},V=ln,mn=o(97857),B=o.n(mn),sn=o(9783),K=o.n(sn),rn=o(660532),In=o(344682),On=o(11739),Gn=o(664095),kn=o(883458),nn=o(722449),wn=o(316165),$n="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",le="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",An=function(e){return(0,n.jsx)(wn.Z,B()(B()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?$n:le})})}))},Kn=An,te=o(562925),zn=o(373638),Jn=o(438199),ye,he,Ge=(0,D.kc)(function(i){var e=i.token,t=i.css,a=e.headerHeight,s=e.colorTextHeading,c=e.fontFamily,x=e.mobileMaxWidth;return{logo:t(ye||(ye=p()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),a,s,c,a,s,x),title:t(he||(he=p()([`
      line-height: 32px;
    `])))}}),se=function(e){var t=e.isZhCN,a=(0,m.useLocation)(),s=a.search,c=Ge(),x=c.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(m.Link,{to:zn.J1("/",t,s),className:x.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:x.title,children:"Ant Design"})]})})},Ke=se,Je=o(719632),fn=o.n(Je),ke=o(923232),Ee,ze,Ie,Pe,ce=(0,D.kc)(function(i){var e=i.css,t=i.token;return{smallStyle:e(Ee||(Ee=p()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(ze||(ze=p()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(Ie||(Ie=p()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(Pe||(Pe=p()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),we=function(){var e=ce(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(m.FormattedMessage,{id:"app.implementation.community"}),")"]})},Fe=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(m.FormattedMessage,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(m.FormattedMessage,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(m.FormattedMessage,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(we,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(we,{})]}),key:"vue"}]},tt=function(e){var t=e.isRTL,a=ce(),s=a.styles;return _jsx(Dropdown,{menu:{items:Fe()},placement:"bottomRight",children:_jsxs(Button,{size:"small",children:[_jsx(FormattedMessage,{id:"app.header.menu.more"}),_jsx(DownOutlined,{className:classnames(t?s.downOutlinedRTL:s.downOutlined,s.down)})]})})},ot=null,Wn=o(472638),je,Ce,De={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},Qe=(0,D.kc)(function(i){var e=i.token,t=e.antCls,a=e.iconCls,s=e.fontFamily,c=e.headerHeight,x=e.menuItemBorder,f=e.colorPrimary,b=e.colorText;return{nav:(0,D.iv)(je||(je=p()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),s,t,t,t,40+12*2,c,c,x,b,t,a,t,f,t,t),popoverMenuNav:(0,D.iv)(Ce||(Ce=p()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),Ye=function(i){var e,t,a=i.isZhCN,s=i.isMobile,c=i.responsive,x=i.directionText,f=i.onLangChange,b=i.onDirectionChange,g=(0,m.useLocation)(),S=g.pathname,N=g.search,P=(0,y.Z)(De),H=C()(P,1),O=H[0],Z=(0,m.useFullSidebarData)(),A=((e=Z["/docs/blog"])===null||e===void 0||(e=e[0])===null||e===void 0?void 0:e.children)||[],R=Qe(),M=R.styles,j=s?"inline":"horizontal",_=S.split("/").filter(function(Nn){return Nn}).slice(0,-1).join("/"),gn=_||"home";S.startsWith("/changelog")?gn="docs/react":S.startsWith("/docs/resources")&&(gn="docs/resources");var bn,jn=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(m.FormattedMessage,{id:"app.header.lang"}),onClick:f,key:"switch-lang"},{label:x,onClick:b,key:"switch-direction"}].concat(fn()(Fe()));s?bn=jn:c==="crowded"&&(bn=[{label:(0,n.jsx)(rn.Z,{}),key:"additional",children:fn()(jn)}]);var Bn=[{label:(0,n.jsx)(Wn.Z,{to:zn.J1("/docs/spec/introduce",a,N),children:O.design}),key:"docs/spec"},{label:(0,n.jsx)(Wn.Z,{to:zn.J1("/docs/react/introduce",a,N),children:O.development}),key:"docs/react"},{label:(0,n.jsx)(Wn.Z,{to:zn.J1("/components/overview/",a,N),children:O.components}),key:"components"},A.length?{label:(0,n.jsx)(Wn.Z,{to:zn.J1(A.sort(function(Nn,E){var en,tn;return((en=Nn.frontmatter)===null||en===void 0?void 0:en.date)>((tn=E.frontmatter)===null||tn===void 0?void 0:tn.date)?-1:1})[0].link,a,N),children:O.blog}),key:"docs/blog"}:null].concat(fn()((t=bn)!==null&&t!==void 0?t:[]));return(0,n.jsx)(ke.Z,{mode:j,selectedKeys:[gn],className:M.nav,disabledOverflow:!0,items:Bn,style:{borderRight:0}})},Ze=o(879587),Re,He,Te,Oe,U,q="1.2em",pn=(0,D.kc)(function(i){var e=i.token,t=i.css,a=e.colorText,s=e.colorBorder,c=e.colorBgContainer,x=e.colorBgTextHover,f=e.borderRadius,b=e.controlHeight,g=e.motionDurationMid;return{btn:t(Re||(Re=p()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),a,s,b,b,f,g,g,x,q,q,q),innerDiv:t(He||(He=p()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),q,q),labelStyle:t(Te||(Te=p()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),q,a,a),label1Style:t(Oe||(Oe=p()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,c),label2Style:t(U||(U=p()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),Vn=function(e){var t=e.label1,a=e.label2,s=e.tooltip1,c=e.tooltip2,x=e.value,f=e.pure,b=e.onClick,g=pn(),S=g.styles,N=S.btn,P=S.innerDiv,H=S.labelStyle,O=S.label1Style,Z=S.label2Style,A=(0,n.jsx)("button",{onClick:b,className:N,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[f&&(x===1?t:a),!f&&(0,n.jsxs)("div",{className:P,children:[(0,n.jsx)("span",{className:w()(H,x===1?O:Z),children:t}),(0,n.jsx)("span",{className:w()(H,x===1?Z:O),children:a})]})]})},"lang-button");return s||c?(0,n.jsx)(Ze.Z,{title:x===1?s:c,children:A}):A},Tn=Vn,Se,fe,Un,de,Be,Ne,rt=1120,at=1200,no={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},eo=(0,D.kc)(function(i){var e=i.token,t=i.css,a="#ced4d9";return{header:t(Se||(Se=p()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,a,a,a),menuRow:t(fe||(fe=p()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(Un||(Un=p()([`
      width: 16px;
    `]))),popoverMenu:K()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:t(de||(de=p()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:t(Be||(Be=p()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:t(Ne||(Ne=p()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),to=function(){var e=(0,y.Z)(no),t=C()(e,2),a=t[0],s=t[1],c=(0,d.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),x=C()(c,2),f=x[0],b=x[1],g=(0,d.useContext)(Jn.Z),S=g.direction,N=g.isMobile,P=g.bannerVisible,H=g.updateSiteConfig,O=(0,d.useRef)(null),Z=(0,m.useLocation)(),A=Z.pathname,R=Z.search,M=eo(),j=M.styles,_=(0,d.useCallback)(function(){b(function(En){return B()(B()({},En),{},{menuVisible:!1})})},[]),gn=(0,d.useCallback)(function(){b(function(En){return B()(B()({},En),{},{windowWidth:window.innerWidth})})},[]),bn=(0,d.useCallback)(function(){b(function(En){return B()(B()({},En),{},{menuVisible:!0})})},[]),jn=(0,d.useCallback)(function(En){b(function(ve){return B()(B()({},ve),{},{menuVisible:En})})},[]),Bn=function(){H({direction:S!=="rtl"?"rtl":"ltr"})},Nn=function(){H({bannerVisible:!1}),zn.Fy()&&localStorage.setItem(te.ANT_DESIGN_NOT_SHOW_BANNER,cn()().toISOString())};(0,d.useEffect)(function(){_()},[Z]),(0,d.useEffect)(function(){return gn(),window.addEventListener("resize",gn),function(){window.removeEventListener("resize",gn),O.current&&clearTimeout(O.current)}},[]);var E=(0,d.useCallback)(function(){var En="".concat(window.location.protocol,"//"),ve=window.location.href.slice(En.length);zn.Fy()&&localStorage.setItem("locale",zn.KE(A)?"en-US":"zh-CN"),window.location.href=En+ve.replace(window.location.pathname,zn.J1(A,!zn.KE(A),R).pathname)},[Z]),en=(0,d.useMemo)(function(){return S!=="rtl"?"RTL":"LTR"},[S]),tn=f.menuVisible,vn=f.windowWidth,Cn=f.searching,Xe=["","index","index-cn"].includes(A),X=s==="cn",J=S==="rtl",xn=null;vn<rt?xn="crowded":vn<at&&(xn="narrow");var Me=w()(j.header,"clearfix",{"home-header":Xe}),Qt={isZhCN:X,isRTL:J},Yt=(0,n.jsx)(Ye,B()(B()({},Qt),{},{responsive:xn,isMobile:N,directionText:en,onLangChange:E,onDirectionChange:Bn}),"nav"),Ae=[Yt,(0,n.jsx)(Tn,{onClick:E,value:zn.KE(A)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Tn,{onClick:Bn,value:S==="rtl"?2:1,label1:(0,n.jsx)(Kn,{className:j.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Kn,{className:j.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction")];vn<rt?Ae=Cn?[]:[Yt]:vn<at&&(Ae=Cn?[]:Ae);var qt=Xe?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Me,children:[N&&(0,n.jsx)(In.Z,{overlayClassName:j.popoverMenu,placement:"bottomRight",content:Ae,trigger:"click",open:tn,arrow:{arrowPointAtCenter:!0},onOpenChange:jn,children:(0,n.jsx)(rn.Z,{className:"nav-phone-icon",onClick:bn})}),X&&P&&(0,n.jsx)(Q.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,n.jsx)(On.Z,{className:j.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:N?a.shortMessage:a.message}),(0,n.jsx)("a",{className:j.link,href:a.link,target:"_blank",rel:"noreferrer",onClick:function(){var ve,_t;(ve=(_t=window).gtag)===null||ve===void 0||ve.call(_t,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:a.link})},children:a.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Nn})}),(0,n.jsxs)(Gn.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(kn.Z,B()(B()({},qt[0]),{},{children:(0,n.jsx)(Ke,B()(B()({},Qt),{},{location:Z}))})),(0,n.jsxs)(kn.Z,B()(B()({},qt[1]),{},{className:j.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(nn.ZP,{})}),!N&&Ae]}))]})]})},oo=to,Zr=o(945462),ro=o(513769),ao=o.n(ro),io=["children"],lo=function(e){var t=e.children,a=ao()(e,io);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Helmet,{children:[(0,n.jsx)("title",{children:a.title}),(0,n.jsx)("meta",{property:"og:title",content:a.title}),a.desc&&(0,n.jsx)("meta",{name:"description",content:a.desc})]}),(0,n.jsx)("div",{style:{minHeight:"100vh"},children:t})]})},so=lo,co=o(86198),$e=o(185209),uo=function(){var e=(0,m.useRouteMeta)(),t=(0,d.useMemo)(function(){var x;if(!e.frontmatter.subtitle&&!e.frontmatter.title)x="404 Not Found - Ant Design";else{var f;x="".concat(e.frontmatter.subtitle||""," ").concat(((f=e.frontmatter)===null||f===void 0?void 0:f.title)||""," - Ant Design")}var b=e.frontmatter.description||"";return[x,b]},[e]),a=C()(t,2),s=a[0],c=a[1];return(0,n.jsxs)(m.Helmet,{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{property:"og:title",content:s}),c&&(0,n.jsx)("meta",{name:"description",content:c})]})},it=uo,lt=o(148050),mo=o(857278),po=o(430932),go=o(985093),We=o(115668),ho=o(642207),fo=o(301210),st=o(13923),qe=o(825035),xo=o(937993),vo=o(448118),bo=o(938545),yo=o(569980),wo=o(391298),jo=o(630770),ct=o(693399),Ve="ant-where-checker",Co={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function So(){var i=(0,y.Z)(Co),e=C()(i,1),t=e[0],a=d.useState(!0),s=C()(a,2),c=s[0],x=s[1];return d.useEffect(function(){var f=document.createElement("p");f.className=Ve,f.style.position="fixed",f.style.pointerEvents="none",f.style.visibility="hidden",f.style.width="0",document.body.appendChild(f),(0,ct.updateCSS)(`
:where(.`.concat(Ve,`) {
  content: "__CHECK__";
}
    `),Ve);var b=getComputedStyle(f),g=b.content;x(String(g).includes("CHECK")),document.body.removeChild(f),(0,ct.removeCSS)(Ve)},[]),c?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var dt,ut,ko={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},zo=function(){var e=(0,d.useContext)(Jn.Z),t=e.isMobile;return(0,D.kc)(function(a){var s=a.token,c=a.css,x=new Rn.C((0,jo.Z)("#f0f3fa","#fff")).onBackground(s.colorBgContainer).toHexString();return{holder:c(dt||(dt=p()([`
      background: `,`;
    `])),x),footer:c(ut||(ut=p()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),x,s.colorTextSecondary,s.colorText,t?60:0,t?20:0,s.marginXXL,s.fontSize)}})()},To=function(){var e=(0,W.Z)(),t=(0,y.Z)(ko),a=C()(t,2),s=a[0],c=a[1],x=zo(),f=x.styles,b=e.getLink,g=d.useMemo(function(){var S=c==="cn",N={title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:S?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:S?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:S?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},P={title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(mo.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(po.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(go.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(We.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(We.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};S&&P.items.push({icon:(0,n.jsx)(ho.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.work_with_us"}),url:b("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:m.Link});var H={title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(fo.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(st.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.change-log"}),url:b("/changelog"),LinkComponent:m.Link},{icon:(0,n.jsx)(qe.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.faq"}),url:b("/docs/react/faq"),LinkComponent:m.Link},{icon:(0,n.jsx)(xo.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(vo.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(bo.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(qe.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(qe.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},O={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.galacean"}),description:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(yo.Z,{}),title:(0,n.jsx)(m.FormattedMessage,{id:"app.footer.theme"}),url:b("/theme-editor"),LinkComponent:m.Link}]};return[N,P,H,O]},[c,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(wo.Z,{columns:g,className:f.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:s.owner})]})}),(0,n.jsx)(So,{})]})},Bo=To,No=o(823493),Lo=o.n(No),Mo=o(468990),Ao=o(658192),mt,pt,gt,ht=["scroll","resize"],Eo=(0,D.kc)(function(i){var e=i.token,t=i.css,a=e.boxShadowSecondary,s=e.antCls;return{affixTabs:t(mt||(mt=p()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),a,s,s,s),affixTabsFixed:t(pt||(pt=p()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(gt||(gt=p()([`
      text-transform: capitalize;
    `])))}}),ft=32,Io=function(){var e=d.useRef(null),t=d.useRef([]),a=d.useState(!1),s=C()(a,2),c=s[0],x=s[1],f=d.useState(void 0),b=C()(f,2),g=b[0],S=b[1],N=Eo(),P=N.styles,H=P.affixTabs,O=P.affixTabsFixed,Z=P.span;function A(M){var j=document.getElementById(M);if(j){var _=j.offsetTop-e.current.offsetHeight-ft;(0,Ao.Z)(_)}}d.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(M){var j=M.id;return j}),x(!0)},[]),d.useEffect(function(){var M=decodeURIComponent((location.hash||"").slice(1));M&&A(M)},[c]);var R=d.useMemo(function(){function M(){for(var j=window,_=j.scrollY,gn=e.current.offsetHeight,bn=t.current.length-1;bn>=0;bn-=1){var jn=t.current[bn],Bn=document.getElementById(jn),Nn=Bn.offsetTop-gn-ft;if(Nn<=_){S(jn);return}}S(void 0)}return Lo()(M)},[]);return d.useEffect(function(){return ht.forEach(function(M){return window.addEventListener(M,R)}),R(),function(){ht.forEach(function(M){return window.removeEventListener(M,R)})}},[]),(0,n.jsx)("div",{className:w()(H,g&&O),ref:e,children:(0,n.jsx)(Mo.Z,{activeKey:g,onChange:A,items:t.current.map(function(M){return{key:M,label:(0,n.jsx)("span",{className:Z,children:M.replace(/-/g," ")})}})})})},Po=Io,xt,vt,bt,yt=40,Ue=1208,_e=24,Fo=(0,D.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{resourcePage:t(xt||(xt=p()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),Ue),resourceContent:t(vt||(vt=p()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),yt,Ue,_e,a),banner:t(bt||(bt=p()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),yt,Ue,Ue,_e,_e)}}),Do=function(e){var t,a=e.children,s=Fo(),c=s.styles,x=(0,m.useRouteMeta)();return(0,n.jsx)(Q.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(co.Z,{children:[(0,n.jsx)(it,{}),(0,n.jsxs)("div",{id:"resources-page",className:c.resourcePage,children:[(0,n.jsx)(Po,{}),(0,n.jsxs)("div",{className:c.banner,children:[(0,n.jsxs)($e.Z.Title,{style:{fontSize:30},children:[(t=x.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(lt.Z,{title:(0,n.jsx)(m.FormattedMessage,{id:"app.content.edit-page"}),filename:x.frontmatter.filename})]}),(0,n.jsx)("section",{children:x.frontmatter.description})]}),(0,n.jsx)("div",{className:c.resourceContent,children:a}),(0,n.jsx)(Bo,{})]})]})})},Zo=Do,Ro=o(720841),Ho=o(538294),wt=o(575054),jt=o(796586),Oo=o(605071),nt=o(945016),$o=o(217187),Le=o(618073),Ct=o(206171),Wo=o(844183),Vo=o(566254),Uo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,m.useFullSidebarData)(),a=(0,W.Z)(),s=a.pathname,c=a.search,x=(0,m.useSidebarData)(),f=e.before,b=e.after,g=(0,d.useMemo)(function(){var S,N=fn()(x!=null?x:[]);if(s.startsWith("/docs/spec")){var P=N.splice(0,1);N.push.apply(N,fn()(P))}if(s.startsWith("/docs/react")){var H,O=(H=Object.entries(t).find(function(M){var j=C()(M,1),_=j[0];return _.startsWith("/changelog")}))===null||H===void 0?void 0:H[1];O&&N.splice(1,0,O[0])}if(s.startsWith("/changelog")){var Z,A=(Z=Object.entries(t).find(function(M){var j=C()(M,1),_=j[0];return _.startsWith("/docs/react")}))===null||Z===void 0?void 0:Z[1];A&&(N.unshift(A[0]),N.push.apply(N,fn()(A.slice(1))))}var R=function(j){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return j&&_&&(0,n.jsx)(Wo.Z,{color:j==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:j.replace("VERSION",Vo.Z)})};return(S=N==null?void 0:N.reduce(function(M,j){if(j!=null&&j.title)if(s.startsWith("/docs/spec")){var _,gn,bn=j.children.reduce(function(E,en){var tn,vn,Cn=(tn=(vn=en.frontmatter)===null||vn===void 0?void 0:vn.type)!==null&&tn!==void 0?tn:"default";return E[Cn]||(E[Cn]=[]),E[Cn].push(en),E},{}),jn=[];jn.push.apply(jn,fn()((_=(gn=bn.default)===null||gn===void 0?void 0:gn.map(function(E){return{label:(0,n.jsxs)(Wn.Z,{to:"".concat(E.link).concat(c),children:[f,E==null?void 0:E.title,b]}),key:E.link.replace(/(-cn$)/g,"")}}))!==null&&_!==void 0?_:[])),Object.entries(bn).forEach(function(E){var en=C()(E,2),tn=en[0],vn=en[1];tn!=="default"&&jn.push({type:"group",label:tn,key:tn,children:vn==null?void 0:vn.map(function(Cn){return{label:(0,n.jsxs)(Wn.Z,{to:"".concat(Cn.link).concat(c),children:[f,Cn==null?void 0:Cn.title,b]}),key:Cn.link.replace(/(-cn$)/g,"")}})})}),M.push({label:j==null?void 0:j.title,key:j==null?void 0:j.title,children:jn})}else{var Bn;M.push({type:"group",label:j==null?void 0:j.title,key:j==null?void 0:j.title,children:(Bn=j.children)===null||Bn===void 0?void 0:Bn.map(function(E){var en,tn;return{label:(0,n.jsxs)(Wn.Z,{to:"".concat(E.link).concat(c),style:{display:"flex",alignItems:"center"},children:[f,(0,n.jsx)("span",{children:E==null?void 0:E.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(en=E.frontmatter)===null||en===void 0?void 0:en.subtitle},"chinese"),R((tn=E.frontmatter)===null||tn===void 0?void 0:tn.tag,!f&&!b),b]}),key:E.link.replace(/(-cn$)/g,"")}})})}else{var Nn=j.children||[];Nn.every(function(E){var en;return E==null||(en=E.frontmatter)===null||en===void 0?void 0:en.date})&&Nn.sort(function(E,en){var tn,vn;return((tn=E.frontmatter)===null||tn===void 0?void 0:tn.date)>((vn=en.frontmatter)===null||vn===void 0?void 0:vn.date)?-1:1}),M.push.apply(M,fn()(Nn.map(function(E){return{label:(0,n.jsxs)(Wn.Z,{to:"".concat(E.link).concat(c),style:{display:"flex",alignItems:"center"},children:[f,E==null?void 0:E.title,R(E.frontmatter.tag,!f&&!b),b]}),key:E.link.replace(/(-cn$)/g,"")}})))}return M},[]))!==null&&S!==void 0?S:[]},[x,t,s,c,e]);return[g,s]},St=Uo,kt,zt,Tt,Bt,Xo=(0,D.kc)(function(i){var e=i.token,t=i.css,a=e.colorSplit,s=e.iconCls,c=e.fontSizeIcon;return{prevNextNav:t(kt||(kt=p()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),a),pageNav:t(zt||(zt=p()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),s,c),prevNav:t(Tt||(Tt=p()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(Bt||(Bt=p()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Go=function i(e){return Array.isArray(e)?e.reduce(function(t,a){if(!a)return t;if("children"in a&&a.children){var s;return t.concat((s=i(a.children))!==null&&s!==void 0?s:[])}return t.concat(a)},[]):null},Ko=function(e){var t=e.rtl,a=Xo(),s=a.styles,c={className:"footer-nav-icon-before"},x={className:"footer-nav-icon-after"},f=t?(0,n.jsx)(Le.Z,B()({},c)):(0,n.jsx)(Ct.Z,B()({},c)),b=t?(0,n.jsx)(Ct.Z,B()({},x)):(0,n.jsx)(Le.Z,B()({},x)),g=St({before:f,after:b}),S=C()(g,2),N=S[0],P=S[1],H=(0,d.useContext)(Jn.Z),O=H.isMobile,Z=(0,d.useMemo)(function(){var j=Go(N);if(!j)return[null,null];var _=-1;return j.forEach(function(gn,bn){gn&&gn.key===P&&(_=bn)}),[j[_-1],j[_+1]]},[N,P]),A=C()(Z,2),R=A[0],M=A[1];return O?null:(0,n.jsxs)("section",{className:s.prevNextNav,children:[R&&d.cloneElement(R.label,{className:w()(s.pageNav,s.prevNav,R.className)}),M&&d.cloneElement(M.label,{className:w()(s.pageNav,s.nextNav,M.className)})]})},Jo=Ko,xe=o(988872),Qo=o(302281),Yo=o(15060),qo=o(154098),_o=o.n(qo);function nr(i){var e=i;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status==="pending"||(e.status="pending",e.then(function(t){e.status="fulfilled",e.value=t},function(t){e.status="rejected",e.reason=t})),e)}var er=nr,tr=o(912444),or=o.n(tr),rr=o(272004),ar=o.n(rr),ir=function(){function i(){or()(this,i),K()(this,"cache",new Map)}return ar()(i,[{key:"get",value:function(t){return this.cache.get(t)}},{key:"set",value:function(t,a){this.cache.set(t,a)}},{key:"promise",value:function(t,a){var s=this.get(t);if(s)return s;var c=a();return this.set(t,c),c}}]),i}(),lr=new ir,sr=function(e){var t,a;return typeof e=="string"?(t=function(){return _o()(e).then(function(c){return c.json()})},a=e):(t=e.request,a=e.key),er(lr.promise(a,t))},cr=sr,Nt,Lt,Mt,dr=(0,D.kc)(function(i){var e=i.token,t=i.css;return{history:t(Nt||(Nt=p()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t(Lt||(Lt=p()([`
    // white-space: pre;
  `]))),ref:t(Mt||(Mt=p()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),ur={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function mr(i){var e=i.changelog,t=e===void 0?"":e,a=i.refs,s=a===void 0?[]:a,c=i.styles,x=d.useMemo(function(){for(var f=[],b=!1,g="",S=0;S<t.length;S+=1){var N=t[S];if(N!=="`")g+=N;else{var P=g;b&&(P=(0,n.jsx)("code",{children:P})),f.push(P),g="",b=!b}}return f.push(g),f},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:x}),s==null?void 0:s.map(function(f){var b;return(0,n.jsxs)("a",{className:c.ref,href:f,target:"_blank",rel:"noreferrer",children:["#",(b=f.match(/^.*\/(\d+)$/))===null||b===void 0?void 0:b[1]]},f)})]})}function pr(i,e){var t=cr(e==="cn"?{key:"component-changelog-cn",request:function(){return o.e(32104).then(o.t.bind(o,332104,19))}}:{key:"component-changelog-en",request:function(){return o.e(65212).then(o.t.bind(o,365212,19))}});return(0,d.useMemo)(function(){var a=i.replace(/-/g,""),s=Object.keys(t).find(function(c){return c.toLowerCase()===a.toLowerCase()});return t[s]},[t,i])}function gr(i){var e,t=i.pathname,a=t===void 0?"":t,s=(0,y.Z)(ur),c=C()(s,2),x=c[0],f=c[1],b=d.useState(!1),g=C()(b,2),S=g[0],N=g[1],P=dr(),H=P.styles,O=((e=a.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",Z=pr(O,f),A=d.useMemo(function(){var R={};return Z==null||Z.forEach(function(M){R[M.version]=R[M.version]||[],R[M.version].push(M)}),Object.keys(R).map(function(M){var j=R[M];return{children:(0,n.jsxs)($e.Z,{children:[(0,n.jsx)("h4",{children:M}),(0,n.jsx)("ul",{children:j.map(function(_,gn){return(0,n.jsx)("li",{className:H.li,children:(0,n.jsx)(mr,B()(B()({},_),{},{styles:H}))},gn)})})]})}})},[Z]);return!Z||!Z.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(xe.ZP,{className:H.history,icon:(0,n.jsx)(st.Z,{}),onClick:function(){N(!0)},children:x.changelog}),(0,n.jsx)(Qo.Z,{title:x.changelog,extra:(0,n.jsx)(Wn.Z,{style:{fontSize:14},to:"/changelog".concat(f==="cn"?"-cn":""),children:x.full}),open:S,width:"40vw",onClose:function(){N(!1)},destroyOnClose:!0,children:(0,n.jsx)(Yo.Z,{items:A})})]})}var hr=function(i){return(0,n.jsx)(d.Suspense,{fallback:null,children:(0,n.jsx)(gr,B()({},i))})},fr=o(524229),At=o(211646),xr=o(294047),Et=o(315816),vr=function(e){var t=e.className,a=e.style;return(0,n.jsx)("svg",{className:t,style:a,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},It=vr,Pt,Ft,Dt,Zt,Rt,Ht,Ot,et="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",br=(0,D.kc)(function(i){var e=i.token,t=i.css;return{card:t(Pt||(Pt=p()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Ft||(Ft=p()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Dt||(Dt=p()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Zt||(Zt=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Rt||(Rt=p()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Ht||(Ht=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(Ot||(Ot=p()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),yr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},wr=function(e){var t=e.zhihuLink,a=e.yuqueLink,s=e.juejinLink,c=(0,y.Z)(yr),x=C()(c,1),f=x[0],b=br(),g=b.styles,S=g.card,N=g.bigTitle,P=g.cardBody,H=g.left,O=g.title,Z=g.subTitle,A=g.btn;return!t&&!a&&!s?null:(0,n.jsxs)(xr.Z,{className:S,bordered:!1,children:[(0,n.jsx)("h3",{className:N,children:f.bigTitle}),t&&(0,n.jsxs)("div",{className:P,children:[(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)("img",{src:et,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:O,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(We.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(Le.Z,{className:"arrowIcon"}),(0,n.jsx)(xe.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:f.zhiHu})]})]})]}),(0,n.jsx)(xe.ZP,{type:"primary",className:A,icon:(0,n.jsx)(We.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:f.buttonText})]}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Et.Z,{}),(0,n.jsxs)("div",{className:P,children:[(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)("img",{src:et,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:O,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(At.Z,{className:"logo yuque-logo"}),(0,n.jsx)(Le.Z,{className:"arrowIcon"}),(0,n.jsx)(xe.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:f.yuQue})]})]})]}),(0,n.jsx)(xe.ZP,{type:"primary",className:A,icon:(0,n.jsx)(At.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:a,children:f.buttonText})]})]}),s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Et.Z,{}),(0,n.jsxs)("div",{className:P,children:[(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)("img",{src:et,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:O,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(It,{className:"logo juejin-logo"}),(0,n.jsx)(Le.Z,{className:"arrowIcon"}),(0,n.jsx)(xe.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:f.junjin})]})]})]}),(0,n.jsx)(xe.ZP,{type:"primary",className:A,icon:(0,n.jsx)(It,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:s,children:f.buttonText})]})]})]})},jr=wr,$t,Wt,Vt,Ut,Xt,Cr=(0,D.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{contributorsList:t($t||($t=p()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),a,a,e.motionDurationSlow,a),listMobile:t(Wt||(Wt=p()([`
      margin: 1em 0 !important;
    `]))),toc:t(Vt||(Vt=p()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),a,a),tocWrapper:t(Ut||(Ut=p()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(Xt||(Xt=p()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),Sr=function(e){var t=e.num,a=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:a}).map(function(s,c){return(0,n.jsx)(wt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:c===0?0:-8}},c)})})},kr=function(e){var t=e.name,a=e.avatar,s=(0,d.useState)(!0),c=C()(s,2),x=c[0],f=c[1],b=(0,d.useState)(!1),g=C()(b,2),S=g[0],N=g[1];return(0,d.useLayoutEffect)(function(){var P=new Image;P.src=a,P.onload=function(){return f(!1)},P.onerror=function(){return N(!0)}},[]),S?null:x?(0,n.jsx)(wt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(jt.C,{size:"small",src:a,alt:t,children:t})},zr=function(e){var t,a,s,c,x,f,b=e.children,g=(0,m.useRouteMeta)(),S=(0,m.useTabMeta)(),N=(0,W.Z)(),P=N.pathname,H=N.hash,O=(0,m.useIntl)(),Z=O.formatMessage,A=Cr(),R=A.styles,M=(0,D.Fg)(),j=(0,d.useContext)(Jn.Z),_=j.direction,gn=j.isMobile,bn=(0,$o.Z)(!1),jn=C()(bn,2),Bn=jn[0],Nn=jn[1],E=(0,d.useMemo)(function(){var X;return((X=g.toc)===null||X===void 0?void 0:X.filter(function(J){return J._debug_demo}).map(function(J){return J.id}))||[]},[g]),en=E.includes(H.slice(1));(0,d.useLayoutEffect)(function(){Nn(en)},[]);var tn=(0,d.useMemo)(function(){return{showDebug:Bn,setShowDebug:Nn}},[Bn,E]),vn=(0,d.useMemo)(function(){return((S==null?void 0:S.toc)||g.toc).reduce(function(X,J){if(J.depth===2)X.push(B()({},J));else if(J.depth===3){var xn=X[X.length-1];xn&&(xn.children=xn.children||[],xn.children.push(B()({},J)))}return X},[])},[S==null?void 0:S.toc,g.toc]),Cn=_==="rtl",Xe=(0,d.useMemo)(function(){var X=g.frontmatter.author;return X?typeof X=="string"?X.split(",").map(function(J){return{name:J,avatar:"https://github.com/".concat(J,".png")}}):Array.isArray(X)?X:[]:[]},[g.frontmatter.author]);return(0,n.jsx)(fr.Z.Provider,{value:tn,children:(0,n.jsxs)(kn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!g.frontmatter.toc&&(0,n.jsx)("section",{className:R.tocWrapper,children:(0,n.jsx)(Oo.Z,{className:R.toc,affix:!1,targetOffset:M.anchorTop,showInkInFixed:!0,items:vn.map(function(X){var J;return{href:"#".concat(X.id),title:X.title,key:X.id,children:(J=X.children)===null||J===void 0?void 0:J.filter(function(xn){return Bn||!E.includes(xn.id)}).map(function(xn){return{key:xn.id,href:"#".concat(xn.id),title:(0,n.jsx)("span",{className:w()(E.includes(xn.id)&&"toc-debug"),children:xn==null?void 0:xn.title})}})}})})}),(0,n.jsxs)("article",{className:w()(R.articleWrapper,{rtl:Cn}),children:[(t=g.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)($e.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(nt.Z,{size:"small",children:[(a=g.frontmatter)===null||a===void 0?void 0:a.title,(s=g.frontmatter)===null||s===void 0?void 0:s.subtitle,!P.startsWith("/components/overview")&&(0,n.jsx)(lt.Z,{title:(0,n.jsx)(m.FormattedMessage,{id:"app.content.edit-page"}),filename:g.frontmatter.filename})]}),P.startsWith("/components/")&&(0,n.jsx)(hr,{pathname:P})]}):null,g.frontmatter.date||g.frontmatter.author?(0,n.jsx)($e.Z.Paragraph,{children:(0,n.jsxs)(nt.Z,{children:[g.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Ro.Z,{})," ",cn()(g.frontmatter.date).format("YYYY-MM-DD")]}),Xe.map(function(X){return(0,n.jsx)("a",{href:"https://github.com/".concat(X.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(nt.Z,{size:3,children:[(0,n.jsx)(kr,{name:X.name,avatar:X.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",X.name]})]})},X.name)})]})}):null,!g.frontmatter.__autoDescription&&g.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:b}),(((c=g.frontmatter)===null||c===void 0?void 0:c.zhihu_url)||((x=g.frontmatter)===null||x===void 0?void 0:x.yuque_url)||((f=g.frontmatter)===null||f===void 0?void 0:f.juejin_url))&&(0,n.jsx)(jr,{zhihuLink:g.frontmatter.zhihu_url,yuqueLink:g.frontmatter.yuque_url,juejinLink:g.frontmatter.juejin_url}),g.frontmatter.filename&&(0,n.jsx)(Ho.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:w()(R.contributorsList,K()({},R.listMobile,gn)),fileName:g.frontmatter.filename,renderItem:function(J,xn){var Me;return!J||xn?(0,n.jsx)(Sr,{}):(Me=J.username)!==null&&Me!==void 0&&Me.includes("github-actions")?null:(0,n.jsx)(Ze.Z,{mouseEnterDelay:.3,title:"".concat(Z({id:"app.content.contributors"}),": ").concat(J.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(J.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(jt.C,{size:"small",src:J.url,alt:J.username,children:J.username})})})},J.username)}})]}),(0,n.jsx)(Jo,{rtl:Cn})]})})},Tr=zr,Br=o(650010),Gt,Kt,Nr=(0,D.kc)(function(i){var e=i.token,t=i.css,a=e.antCls,s=e.fontFamily,c=e.colorSplit;return{asideContainer:t(Gt||(Gt=p()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),s,a,a,a,a,a,a,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),mainMenu:t(Kt||(Kt=p()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),Lr=function(){var e=(0,m.useSidebarData)(),t=(0,d.useContext)(Jn.Z),a=t.isMobile,s=t.theme,c=Nr(),x=c.styles,f=St(),b=C()(f,2),g=b[0],S=b[1],N=s.includes("dark"),P=(0,D.Fg)(),H=P.colorBgContainer,O=(0,n.jsx)(Q.ZP,{theme:{components:{Menu:{itemBg:H,darkItemBg:H}}},children:(0,n.jsx)(ke.Z,{items:g,inlineIndent:30,className:x.asideContainer,mode:"inline",theme:N?"dark":"light",selectedKeys:[S],defaultOpenKeys:e==null?void 0:e.map(function(Z){var A=Z.title;return A}).filter(function(Z){return Z})})});return a?(0,n.jsx)(Br.Z,{children:O},"Mobile-menu"):(0,n.jsx)(kn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:x.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:O})})},Mr=Lr,Jt,Ar=(0,D.kc)(function(i){var e=i.css,t=i.token;return{main:e(Jt||(Jt=p()([`
    display: flex;
    margin-top: `,`px;
  `])),t.contentMarginTop)}}),Er=function(e){var t=e.children,a=Ar(),s=a.styles;return(0,n.jsxs)("main",{className:s.main,children:[(0,n.jsx)(it,{}),(0,n.jsx)(Mr,{}),(0,n.jsx)(Tr,{children:t})]})},Ir=Er,Pr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Fr=function(){var e=(0,m.useOutlet)(),t=(0,W.Z)(),a=t.pathname,s=t.search,c=t.hash,x=(0,y.Z)(Pr),f=C()(x,2),b=f[0],g=f[1],S=(0,d.useRef)(null),N=(0,d.useContext)(Jn.Z),P=N.direction,H=(0,m.useSiteData)(),O=H.loading;(0,d.useLayoutEffect)(function(){g==="cn"?cn().locale("zh-cn"):cn().locale("en")},[]),(0,d.useEffect)(function(){var A=document.getElementById("nprogress-style");A&&(S.current=setTimeout(function(){var R;(R=A.parentNode)===null||R===void 0||R.removeChild(A)},0))},[]),(0,d.useEffect)(function(){var A,R=c.replace("#","");R&&((A=document.getElementById(decodeURIComponent(R)))===null||A===void 0||A.scrollIntoView())},[O,c]),(0,d.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+s)},[t]);var Z=(0,d.useMemo)(function(){return["","/"].some(function(A){return A===a})||["/index"].some(function(A){return a.startsWith(A)})?(0,n.jsx)(so,{title:b.title,desc:b.description,children:e}):a.startsWith("/docs/resource")?(0,n.jsx)(Zo,{children:e}):a.startsWith("/theme-editor")?e:(0,n.jsx)(Ir,{children:e})},[a,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Helmet,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:g==="cn"?"zh-CN":g,"data-direction":P,className:w()({rtl:P==="rtl"})}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{property:"og:description",content:b.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(Q.ZP,{direction:P,locale:g==="cn"?$.Z:void 0,children:[(0,n.jsx)(V,{}),(0,n.jsx)(oo,{}),Z]})]})},Dr=Fr},647727:function(be,Sn,o){o.d(Sn,{Z:function(){return Ln.Z}});var Ln=o(582485)},605071:function(be,Sn,o){o.d(Sn,{Z:function(){return Mn}});var Ln=o(97857),C=o.n(Ln),Pn=o(9783),w=o.n(Pn),Fn=o(719632),cn=o.n(Fn),yn=o(805574),m=o.n(yn),d=o(667294),$=o(294184),Q=o.n($),y=o(656790),W=o(517423),Dn=o(982673),p=o(658192),F=o(252901),D=o(73287),n=o(670544),oe=d.createContext(void 0),Qn=oe,dn=o(785893),ue=function(l){var r=l.href,u=l.title,h=l.prefixCls,z=l.children,k=l.className,I=l.target,L=l.replace,v=d.useContext(Qn),T=v||{},G=T.registerLink,Y=T.unregisterLink,on=T.scrollTo,hn=T.onClick,an=T.activeLink,ln=T.direction;d.useEffect(function(){return G==null||G(r),function(){Y==null||Y(r)}},[r]);var V=function(kn){L&&(kn.preventDefault(),window.location.replace(r)),hn==null||hn(kn,{title:u,href:r}),on==null||on(r)};if(!1)var mn;var B=d.useContext(D.E_),sn=B.getPrefixCls,K=sn("anchor",h),rn=an===r,In=Q()("".concat(K,"-link"),k,w()({},"".concat(K,"-link-active"),rn)),On=Q()("".concat(K,"-link-title"),w()({},"".concat(K,"-link-title-active"),rn));return(0,dn.jsxs)("div",{className:In,children:[(0,dn.jsx)("a",{className:On,href:r,title:typeof u=="string"?u:"",target:I,onClick:V,children:u}),ln!=="horizontal"?z:null]})},Yn=ue,Xn=o(900210),qn=o(548073),re=o(286665),Zn=o(986943),me=function(l){var r,u,h=l.componentCls,z=l.holderOffsetBlock,k=l.motionDurationSlow,I=l.lineWidthBold,L=l.colorPrimary,v=l.lineType,T=l.colorSplit,G=l.calc;return w()({},"".concat(h,"-wrapper"),(u={marginBlockStart:G(z).mul(-1).equal(),paddingBlockStart:z},w()(u,h,C()(C()({},(0,qn.Wf)(l)),{},w()({position:"relative",paddingInlineStart:I},"".concat(h,"-link"),(r={paddingBlock:l.linkPaddingBlock,paddingInline:"".concat((0,Xn.unit)(l.linkPaddingInlineStart)," 0"),"&-title":C()(C()({},qn.vS),{},{position:"relative",display:"block",marginBlockEnd:l.anchorTitleBlock,color:l.colorText,transition:"all ".concat(l.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},w()(r,"&-active > ".concat(h,"-link-title"),{color:l.colorPrimary}),w()(r,"".concat(h,"-link"),{paddingBlock:l.anchorPaddingBlockSecondary}),r)))),w()(u,"&:not(".concat(h,"-wrapper-horizontal)"),w()({},h,w()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat((0,Xn.unit)(I)," ").concat(v," ").concat(T),content:'" "'}},"".concat(h,"-ink"),w()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(k," ease-in-out"),width:I,backgroundColor:L},"&".concat(h,"-ink-visible"),{display:"inline-block"})))),w()(u,"".concat(h,"-fixed ").concat(h,"-ink ").concat(h,"-ink"),{display:"none"}),u))},Rn=function(l){var r,u=l.componentCls,h=l.motionDurationSlow,z=l.lineWidthBold,k=l.colorPrimary;return w()({},"".concat(u,"-wrapper-horizontal"),w()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"".concat((0,Xn.unit)(l.lineWidth)," ").concat(l.lineType," ").concat(l.colorSplit),content:'" "'}},u,(r={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},w()(r,"".concat(u,"-link:first-of-type"),{paddingInline:0}),w()(r,"".concat(u,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(h," ease-in-out, width ").concat(h," ease-in-out"),height:z,backgroundColor:k}),r)))},Hn=function(l){return{linkPaddingBlock:l.paddingXXS,linkPaddingInlineStart:l.padding}},_n=(0,re.I$)("Anchor",function(un){var l=un.fontSize,r=un.fontSizeLG,u=un.paddingXXS,h=un.calc,z=(0,Zn.TS)(un,{holderOffsetBlock:u,anchorPaddingBlockSecondary:h(u).div(2).equal(),anchorTitleBlock:h(l).div(14).mul(3).equal(),anchorBallSize:h(r).div(2).equal()});return[me(z),Rn(z)]},Hn);function pe(){return window}function ne(un,l){if(!un.getClientRects().length)return 0;var r=un.getBoundingClientRect();return r.width||r.height?l===window?(l=un.ownerDocument.documentElement,r.top-l.clientTop):r.top-l.getBoundingClientRect().top:r.top}var ae=/#([\S ]+)$/,ie=function(l){var r,u,h=l.rootClassName,z=l.prefixCls,k=l.className,I=l.style,L=l.offsetTop,v=l.affix,T=v===void 0?!0:v,G=l.showInkInFixed,Y=G===void 0?!1:G,on=l.children,hn=l.items,an=l.direction,ln=an===void 0?"vertical":an,V=l.bounds,mn=l.targetOffset,B=l.onClick,sn=l.onChange,K=l.getContainer,rn=l.getCurrentAnchor,In=l.replace;if(!1)var On;var Gn=d.useState([]),kn=m()(Gn,2),nn=kn[0],wn=kn[1],$n=d.useState(null),le=m()($n,2),An=le[0],Kn=le[1],te=d.useRef(An),zn=d.useRef(null),Jn=d.useRef(null),ye=d.useRef(!1),he=d.useContext(D.E_),Ge=he.direction,se=he.anchor,Ke=he.getTargetContainer,Je=he.getPrefixCls,fn=Je("anchor",z),ke=(0,n.Z)(fn),Ee=_n(fn,ke),ze=m()(Ee,2),Ie=ze[0],Pe=ze[1],ce=(r=K!=null?K:Ke)!==null&&r!==void 0?r:pe,we=JSON.stringify(nn),Fe=(0,y.zX)(function(U){nn.includes(U)||wn(function(q){return[].concat(cn()(q),[U])})}),tt=(0,y.zX)(function(U){nn.includes(U)&&wn(function(q){return q.filter(function(pn){return pn!==U})})}),ot=function(){var q,pn=(q=zn.current)===null||q===void 0?void 0:q.querySelector(".".concat(fn,"-link-title-active"));if(pn&&Jn.current){var Vn=Jn.current.style,Tn=ln==="horizontal";Vn.top=Tn?"":"".concat(pn.offsetTop+pn.clientHeight/2,"px"),Vn.height=Tn?"":"".concat(pn.clientHeight,"px"),Vn.left=Tn?"".concat(pn.offsetLeft,"px"):"",Vn.width=Tn?"".concat(pn.clientWidth,"px"):"",Tn&&(0,W.Z)(pn,{scrollMode:"if-needed",block:"nearest"})}},Wn=function(q){var pn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Vn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,Tn=[],Se=ce();if(q.forEach(function(Un){var de=ae.exec(Un==null?void 0:Un.toString());if(de){var Be=document.getElementById(de[1]);if(Be){var Ne=ne(Be,Se);Ne<pn+Vn&&Tn.push({link:Un,top:Ne})}}}),Tn.length){var fe=Tn.reduce(function(Un,de){return de.top>Un.top?de:Un});return fe.link}return""},je=(0,y.zX)(function(U){if(te.current!==U){var q=typeof rn=="function"?rn(U):U;Kn(q),te.current=q,sn==null||sn(U)}}),Ce=d.useCallback(function(){if(!ye.current){var U=Wn(nn,mn!==void 0?mn:L||0,V);je(U)}},[we,mn,L]),De=d.useCallback(function(U){je(U);var q=ae.exec(U);if(q){var pn=document.getElementById(q[1]);if(pn){var Vn=ce(),Tn=(0,Dn.Z)(Vn,!0),Se=ne(pn,Vn),fe=Tn+Se;fe-=mn!==void 0?mn:L||0,ye.current=!0,(0,p.Z)(fe,{getContainer:ce,callback:function(){ye.current=!1}})}}},[mn,L]),Qe=Q()(Pe,ke,h,"".concat(fn,"-wrapper"),(u={},w()(u,"".concat(fn,"-wrapper-horizontal"),ln==="horizontal"),w()(u,"".concat(fn,"-rtl"),Ge==="rtl"),u),k,se==null?void 0:se.className),Ye=Q()(fn,w()({},"".concat(fn,"-fixed"),!T&&!Y)),Ze=Q()("".concat(fn,"-ink"),w()({},"".concat(fn,"-ink-visible"),An)),Re=C()(C()({maxHeight:L?"calc(100vh - ".concat(L,"px)"):"100vh"},se==null?void 0:se.style),I),He=function U(q){return Array.isArray(q)?q.map(function(pn){return(0,d.createElement)(Yn,C()(C()({replace:In},pn),{},{key:pn.key}),ln==="vertical"&&U(pn.children))}):null},Te=(0,dn.jsx)("div",{ref:zn,className:Qe,style:Re,children:(0,dn.jsxs)("div",{className:Ye,children:[(0,dn.jsx)("span",{className:Ze,ref:Jn}),"items"in l?He(hn):on]})});d.useEffect(function(){var U=ce();return Ce(),U==null||U.addEventListener("scroll",Ce),function(){U==null||U.removeEventListener("scroll",Ce)}},[we]),d.useEffect(function(){typeof rn=="function"&&je(rn(te.current||""))},[rn]),d.useEffect(function(){ot()},[ln,rn,we,An]);var Oe=d.useMemo(function(){return{registerLink:Fe,unregisterLink:tt,scrollTo:De,activeLink:An,onClick:B,direction:ln}},[An,B,De,ln]);return Ie((0,dn.jsx)(Qn.Provider,{value:Oe,children:T?(0,dn.jsx)(F.Z,{offsetTop:L,target:ce,children:Te}):Te}))},ge=ie,ee=ge;ee.Link=Yn;var Mn=ee},86198:function(be,Sn,o){o.d(Sn,{Z:function(){return un}});var Ln=o(719632),C=o.n(Ln),Pn=o(9783),w=o.n(Pn),Fn=o(805574),cn=o.n(Fn),yn=o(513769),m=o.n(yn),d=o(97857),$=o.n(d),Q=o(667294),y=o(294184),W=o.n(y),Dn=o(518475),p=o(73287),F=o(121790),D=o(45598),n=o(296708);function oe(l,r,u){if(typeof u=="boolean")return u;if(l.length)return!0;var h=(0,D.default)(r);return h.some(function(z){return z.type===n.Z})}var Qn=o(900210),dn=o(286665),ue=function(r){var u,h=r.componentCls,z=r.bodyBg,k=r.lightSiderBg,I=r.lightTriggerBg,L=r.lightTriggerColor;return w()({},"".concat(h,"-sider-light"),(u={background:k},w()(u,"".concat(h,"-sider-trigger"),{color:L,background:I}),w()(u,"".concat(h,"-sider-zero-width-trigger"),{color:L,background:I,border:"1px solid ".concat(z),borderInlineStart:0}),u))},Yn=ue,Xn=function(r){var u,h,z=r.antCls,k=r.componentCls,I=r.colorText,L=r.triggerColor,v=r.footerBg,T=r.triggerBg,G=r.headerHeight,Y=r.headerPadding,on=r.headerColor,hn=r.footerPadding,an=r.triggerHeight,ln=r.zeroTriggerHeight,V=r.zeroTriggerWidth,mn=r.motionDurationMid,B=r.motionDurationSlow,sn=r.fontSize,K=r.borderRadius,rn=r.bodyBg,In=r.headerBg,On=r.siderBg;return h={},w()(h,k,$()($()((u={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:rn,"&, *":{boxSizing:"border-box"}},w()(u,"&".concat(k,"-has-sider"),w()({flexDirection:"row"},"> ".concat(k,", > ").concat(k,"-content"),{width:0})),w()(u,"".concat(k,"-header, &").concat(k,"-footer"),{flex:"0 0 auto"}),w()(u,"".concat(k,"-sider"),{position:"relative",minWidth:0,background:On,transition:"all ".concat(mn,", background 0s"),"&-children":w()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(z,"-menu").concat(z,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:an},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:an,color:L,lineHeight:(0,Qn.unit)(an),textAlign:"center",background:T,cursor:"pointer",transition:"all ".concat(mn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:G,insetInlineEnd:r.calc(V).mul(-1).equal(),zIndex:1,width:V,height:ln,color:L,fontSize:r.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:On,borderStartStartRadius:0,borderStartEndRadius:K,borderEndEndRadius:K,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(B," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(B),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:r.calc(V).mul(-1).equal(),borderStartStartRadius:K,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:K}}}}),u),Yn(r)),{},{"&-rtl":{direction:"rtl"}})),w()(h,"".concat(k,"-header"),w()({height:G,padding:Y,color:on,lineHeight:(0,Qn.unit)(G),background:In},"".concat(z,"-menu"),{lineHeight:"inherit"})),w()(h,"".concat(k,"-footer"),{padding:hn,color:I,fontSize:sn,background:v}),w()(h,"".concat(k,"-content"),{flex:"auto",minHeight:0}),h},qn=function(r){var u=r.colorBgLayout,h=r.controlHeight,z=r.controlHeightLG,k=r.colorText,I=r.controlHeightSM,L=r.marginXXS,v=r.colorTextLightSolid,T=r.colorBgContainer,G=z*1.25;return{colorBgHeader:"#001529",colorBgBody:u,colorBgTrigger:"#002140",bodyBg:u,headerBg:"#001529",headerHeight:h*2,headerPadding:"0 ".concat(G,"px"),headerColor:k,footerPadding:"".concat(I,"px ").concat(G,"px"),footerBg:u,siderBg:"#001529",triggerHeight:z+L*2,triggerBg:"#002140",triggerColor:v,zeroTriggerWidth:z,zeroTriggerHeight:z,lightSiderBg:T,lightTriggerBg:T,lightTriggerColor:k}},re=(0,dn.I$)("Layout",function(l){return[Xn(l)]},qn,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),Zn=o(785893),me=["prefixCls","suffixCls","className","tagName"],Rn=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function Hn(l){var r=l.suffixCls,u=l.tagName,h=l.displayName;return function(z){var k=Q.forwardRef(function(I,L){return(0,Zn.jsx)(z,$()({ref:L,suffixCls:r,tagName:u},I))});return k}}var _n=Q.forwardRef(function(l,r){var u=l.prefixCls,h=l.suffixCls,z=l.className,k=l.tagName,I=m()(l,me),L=Q.useContext(p.E_),v=L.getPrefixCls,T=v("layout",u),G=re(T),Y=cn()(G,2),on=Y[0],hn=Y[1],an=h?"".concat(T,"-").concat(h):T;return on((0,Zn.jsx)(k,$()({className:W()(u||an,z,hn),ref:r},I)))}),pe=Q.forwardRef(function(l,r){var u,h=Q.useContext(p.E_),z=h.direction,k=Q.useState([]),I=cn()(k,2),L=I[0],v=I[1],T=l.prefixCls,G=l.className,Y=l.rootClassName,on=l.children,hn=l.hasSider,an=l.tagName,ln=l.style,V=m()(l,Rn),mn=(0,Dn.default)(V,["suffixCls"]),B=Q.useContext(p.E_),sn=B.getPrefixCls,K=B.layout,rn=sn("layout",T),In=oe(L,on,hn),On=re(rn),Gn=cn()(On,2),kn=Gn[0],nn=Gn[1],wn=W()(rn,(u={},w()(u,"".concat(rn,"-has-sider"),In),w()(u,"".concat(rn,"-rtl"),z==="rtl"),u),K==null?void 0:K.className,G,Y,nn),$n=Q.useMemo(function(){return{siderHook:{addSider:function(An){v(function(Kn){return[].concat(C()(Kn),[An])})},removeSider:function(An){v(function(Kn){return Kn.filter(function(te){return te!==An})})}}}},[]);return kn((0,Zn.jsx)(F.V.Provider,{value:$n,children:(0,Zn.jsx)(an,$()($()({ref:r,className:wn,style:$()($()({},K==null?void 0:K.style),ln)},mn),{},{children:on}))}))}),ne=Hn({tagName:"div",displayName:"Layout"})(pe),ae=Hn({suffixCls:"header",tagName:"header",displayName:"Header"})(_n),ie=Hn({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(_n),ge=Hn({suffixCls:"content",tagName:"main",displayName:"Content"})(_n),ee=ne,Mn=ee;Mn.Header=ae,Mn.Footer=ie,Mn.Content=ge,Mn.Sider=n.Z,Mn._InternalSiderContext=n.D;var un=Mn},715778:function(be,Sn,o){o.d(Sn,{Z:function(){return y}});var Ln=o(174219),C=o(97857),Pn=o.n(C),w=o(585369),Fn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},cn=Fn,yn={lang:Pn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},w.Z),timePickerLocale:Pn()({},cn)};yn.lang.ok="\u786E\u5B9A";var m=yn,d=m,$="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",Q={locale:"zh-cn",Pagination:Ln.Z,DatePicker:m,TimePicker:cn,Calendar:d,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:$,method:$,array:$,object:$,number:$,date:$,boolean:$,integer:$,float:$,regexp:$,email:$,url:$,hex:$},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},y=Q},15060:function(be,Sn,o){o.d(Sn,{Z:function(){return un}});var Ln=o(97857),C=o.n(Ln),Pn=o(805574),w=o.n(Pn),Fn=o(513769),cn=o.n(Fn),yn=o(667294),m=o(294184),d=o.n(m),$=o(73287),Q=o(9783),y=o.n(Q),W=o(900210),Dn=o(548073),p=o(286665),F=o(986943),D=function(r){var u,h,z,k,I,L,v=r.componentCls,T=r.calc;return y()({},v,C()(C()({},(0,Dn.Wf)(r)),{},(L={margin:0,padding:0,listStyle:"none"},y()(L,"".concat(v,"-item"),{position:"relative",margin:0,paddingBottom:r.itemPaddingBottom,fontSize:r.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:r.itemHeadSize,insetInlineStart:T(T(r.itemHeadSize).sub(r.tailWidth)).div(2).equal(),height:"calc(100% - ".concat((0,W.unit)(r.itemHeadSize),")"),borderInlineStart:"".concat((0,W.unit)(r.tailWidth)," ").concat(r.lineType," ").concat(r.tailColor)},"&-pending":(u={},y()(u,"".concat(v,"-item-head"),{fontSize:r.fontSizeSM,backgroundColor:"transparent"}),y()(u,"".concat(v,"-item-tail"),{display:"none"}),u),"&-head":{position:"absolute",width:r.itemHeadSize,height:r.itemHeadSize,backgroundColor:r.dotBg,border:"".concat((0,W.unit)(r.dotBorderWidth)," ").concat(r.lineType," transparent"),borderRadius:"50%","&-blue":{color:r.colorPrimary,borderColor:r.colorPrimary},"&-red":{color:r.colorError,borderColor:r.colorError},"&-green":{color:r.colorSuccess,borderColor:r.colorSuccess},"&-gray":{color:r.colorTextDisabled,borderColor:r.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:T(r.itemHeadSize).div(2).equal(),insetInlineStart:T(r.itemHeadSize).div(2).equal(),width:"auto",height:"auto",marginBlockStart:0,paddingBlock:r.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:T(T(r.fontSize).mul(r.lineHeight).sub(r.fontSize)).mul(-1).add(r.lineWidth).equal(),marginInlineStart:T(r.margin).add(r.itemHeadSize).equal(),marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(h={},y()(h,"> ".concat(v,"-item-tail"),{display:"none"}),y()(h,"> ".concat(v,"-item-content"),{minHeight:T(r.controlHeightLG).mul(1.2).equal()}),h)}),y()(L,"&".concat(v,`-alternate,
        &`).concat(v,`-right,
        &`).concat(v,"-label"),y()({},"".concat(v,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:T(r.marginXXS).mul(-1).equal(),"&-custom":{marginInlineStart:T(r.tailWidth).div(2).equal()}},"&-left":y()({},"".concat(v,"-item-content"),{insetInlineStart:"calc(50% - ".concat((0,W.unit)(r.marginXXS),")"),width:"calc(50% - ".concat((0,W.unit)(r.marginSM),")"),textAlign:"start"}),"&-right":y()({},"".concat(v,"-item-content"),{width:"calc(50% - ".concat((0,W.unit)(r.marginSM),")"),margin:0,textAlign:"end"})})),y()(L,"&".concat(v,"-right"),y()({},"".concat(v,"-item-right"),(z={},y()(z,"".concat(v,`-item-tail,
            `).concat(v,`-item-head,
            `).concat(v,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((0,W.unit)(T(T(r.itemHeadSize).add(r.tailWidth)).div(2).equal()),")")}),y()(z,"".concat(v,"-item-content"),{width:"calc(100% - ".concat((0,W.unit)(T(r.itemHeadSize).add(r.marginXS).equal()),")")}),z))),y()(L,"&".concat(v,`-pending
        `).concat(v,`-item-last
        `).concat(v,"-item-tail"),{display:"block",height:"calc(100% - ".concat((0,W.unit)(r.margin),")"),borderInlineStart:"".concat((0,W.unit)(r.tailWidth)," dotted ").concat(r.tailColor)}),y()(L,"&".concat(v,`-reverse
        `).concat(v,`-item-last
        `).concat(v,"-item-tail"),{display:"none"}),y()(L,"&".concat(v,"-reverse ").concat(v,"-item-pending"),(k={},y()(k,"".concat(v,"-item-tail"),{insetBlockStart:r.margin,display:"block",height:"calc(100% - ".concat((0,W.unit)(r.margin),")"),borderInlineStart:"".concat((0,W.unit)(r.tailWidth)," dotted ").concat(r.tailColor)}),y()(k,"".concat(v,"-item-content"),{minHeight:T(r.controlHeightLG).mul(1.2).equal()}),k)),y()(L,"&".concat(v,"-label"),(I={},y()(I,"".concat(v,"-item-label"),{position:"absolute",insetBlockStart:T(T(r.fontSize).mul(r.lineHeight).sub(r.fontSize)).mul(-1).add(r.tailWidth).equal(),width:"calc(50% - ".concat((0,W.unit)(r.marginSM),")"),textAlign:"end"}),y()(I,"".concat(v,"-item-right"),y()({},"".concat(v,"-item-label"),{insetInlineStart:"calc(50% + ".concat((0,W.unit)(r.marginSM),")"),width:"calc(50% - ".concat((0,W.unit)(r.marginSM),")"),textAlign:"start"})),I)),y()(L,"&-rtl",y()({direction:"rtl"},"".concat(v,"-item-head-custom"),{transform:"translate(50%, -50%)"})),L)))},n=function(r){return{tailColor:r.colorSplit,tailWidth:r.lineWidthBold,dotBorderWidth:r.wireframe?r.lineWidthBold:r.lineWidth*3,dotBg:r.colorBgContainer,itemPaddingBottom:r.padding*1.25}},oe=(0,p.I$)("Timeline",function(l){var r=(0,F.TS)(l,{itemHeadSize:10,customHeadPaddingVertical:l.paddingXXS,paddingInlineEnd:2});return[D(r)]},n),Qn=o(670544),dn=o(785893),ue=["prefixCls","className","color","dot","pending","position","label","children"],Yn=function(r){var u,h=r.prefixCls,z=r.className,k=r.color,I=k===void 0?"blue":k,L=r.dot,v=r.pending,T=v===void 0?!1:v,G=r.position,Y=r.label,on=r.children,hn=cn()(r,ue),an=yn.useContext($.E_),ln=an.getPrefixCls,V=ln("timeline",h),mn=d()("".concat(V,"-item"),y()({},"".concat(V,"-item-pending"),T),z),B=/blue|red|green|gray/.test(I||"")?void 0:I,sn=d()("".concat(V,"-item-head"),(u={},y()(u,"".concat(V,"-item-head-custom"),!!L),y()(u,"".concat(V,"-item-head-").concat(I),!B),u));return(0,dn.jsxs)("li",C()(C()({},hn),{},{className:mn,children:[Y&&(0,dn.jsx)("div",{className:"".concat(V,"-item-label"),children:Y}),(0,dn.jsx)("div",{className:"".concat(V,"-item-tail")}),(0,dn.jsx)("div",{className:sn,style:{borderColor:B,color:B},children:L}),(0,dn.jsx)("div",{className:"".concat(V,"-item-content"),children:on})]}))},Xn=Yn,qn=o(719632),re=o.n(qn),Zn=o(100628),me=o.n(Zn),Rn=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],Hn=["className"],_n=function(r){var u,h=r.prefixCls,z=r.className,k=r.pending,I=k===void 0?!1:k,L=r.children,v=r.items,T=r.rootClassName,G=r.reverse,Y=G===void 0?!1:G,on=r.direction,hn=r.hashId,an=r.pendingDot,ln=r.mode,V=ln===void 0?"":ln,mn=cn()(r,Rn),B=function(wn,$n){return V==="alternate"?wn==="right"?"".concat(h,"-item-right"):wn==="left"||$n%2===0?"".concat(h,"-item-left"):"".concat(h,"-item-right"):V==="left"?"".concat(h,"-item-left"):V==="right"||wn==="right"?"".concat(h,"-item-right"):""},sn=re()(v||[]),K=typeof I=="boolean"?null:I;I&&sn.push({pending:!!I,dot:an||(0,dn.jsx)(me(),{}),children:K}),Y&&sn.reverse();var rn=sn.length,In="".concat(h,"-item-last"),On=sn.filter(function(nn){return!!nn}).map(function(nn,wn){var $n,le=wn===rn-2?In:"",An=wn===rn-1?In:"",Kn=nn.className,te=cn()(nn,Hn);return(0,yn.createElement)(Xn,C()(C()({},te),{},{className:d()([Kn,!Y&&I?le:An,B(($n=nn==null?void 0:nn.position)!==null&&$n!==void 0?$n:"",wn)]),key:(nn==null?void 0:nn.key)||wn}))}),Gn=sn.some(function(nn){return!!(nn!=null&&nn.label)}),kn=d()(h,(u={},y()(u,"".concat(h,"-pending"),!!I),y()(u,"".concat(h,"-reverse"),!!Y),y()(u,"".concat(h,"-").concat(V),!!V&&!Gn),y()(u,"".concat(h,"-label"),Gn),y()(u,"".concat(h,"-rtl"),on==="rtl"),u),z,T,hn);return(0,dn.jsx)("ul",C()(C()({},mn),{},{className:kn,children:On}))},pe=_n,ne=o(45598);function ae(l,r){return l&&Array.isArray(l)?l:(0,ne.default)(r).map(function(u){var h,z;return C()({children:(h=u==null||(z=u.props)===null||z===void 0?void 0:z.children)!==null&&h!==void 0?h:""},u.props)})}var ie=ae,ge=["prefixCls","children","items","className","style"],ee=function(r){var u=yn.useContext($.E_),h=u.getPrefixCls,z=u.direction,k=u.timeline,I=r.prefixCls,L=r.children,v=r.items,T=r.className,G=r.style,Y=cn()(r,ge),on=h("timeline",I);if(!1)var hn;var an=(0,Qn.Z)(on),ln=oe(on,an),V=w()(ln,2),mn=V[0],B=V[1],sn=ie(v,L);return mn((0,dn.jsx)(pe,C()(C()({},Y),{},{className:d()(k==null?void 0:k.className,T,an),style:C()(C()({},k==null?void 0:k.style),G),prefixCls:on,direction:z,items:sn,hashId:B})))};ee.Item=Xn;var Mn=ee,un=Mn}}]);
