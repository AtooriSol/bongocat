import React, {useState} from "react";
import './assets/scss/style.scss';

export default function App() {
    const [model, setModel] = useState(0);

    const [picker, setColorPicker] = useState(-1);

    const [colorBody, setColorBody] = useState("#FFFFFF");
    const [colorFace, setColorFace] = useState("#000000");
    const [colorBackground, setColorBackground] = useState("#000000");

    const [colorFirstBody, setFirstColorBody] = useState("#FFFFFF");
    const [colorSecondBody, setSecondColorBody] = useState("#FFFFFF");

    const [colorFirstBackground, setFirstColorBackground] = useState("#000000");
    const [colorSecondBackground, setSecondColorBackground] = useState("#000000");

    function getRandomNumber(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    const getRgb = () => Math.floor(Math.random() * 256);

    const rgbToHex = (r, g, b) =>
        '#' +
        [r, g, b]
            .map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            })
            .join('');

    const handleGenerate = () => {
        const color_1 = {
            r: getRgb(),
            g: getRgb(),
            b: getRgb(),
        };

        const color_2 = {
            r: getRgb(),
            g: getRgb(),
            b: getRgb(),
        };

        const color_3 = {
            r: getRgb(),
            g: getRgb(),
            b: getRgb(),
        };

        const color_4 = {
            r: getRgb(),
            g: getRgb(),
            b: getRgb(),
        };

        const color_5 = {
            r: getRgb(),
            g: getRgb(),
            b: getRgb(),
        };

        const color_6 = {
            r: getRgb(),
            g: getRgb(),
            b: getRgb(),
        };

        const color_7 = {
            r: getRgb(),
            g: getRgb(),
            b: getRgb(),
        };

        setColorBody(rgbToHex(color_1.r, color_1.g, color_1.b));
        setColorFace(rgbToHex(color_2.r, color_2.g, color_2.b));
        setColorBackground(rgbToHex(color_3.r, color_3.g, color_3.b));
        setFirstColorBody(rgbToHex(color_4.r, color_4.g, color_4.b));
        setSecondColorBody(rgbToHex(color_5.r, color_5.g, color_5.b));
        setFirstColorBackground(rgbToHex(color_6.r, color_6.g, color_6.b));
        setSecondColorBackground(rgbToHex(color_7.r, color_7.g, color_7.b));
        setModel(getRandomNumber(0, 2))
    };

    function download() {
        const svg = document.querySelector('svg');
        const data = (new XMLSerializer()).serializeToString(svg);
        const canvas = document.createElement('canvas');
        canvg(canvas, data, {
            renderCallback: function () {
                canvas.toBlob(function (blob) {
                    console.log(window.URL.createObjectURL(blob));
                    if (window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveBlob(blob, "bongo cat avatar.png");
                    }
                    else {
                        const elem = window.document.createElement('a');
                        elem.href = window.URL.createObjectURL(blob);
                        elem.download = "bongo cat avatar.png";
                        document.body.appendChild(elem);
                        elem.click();
                        document.body.removeChild(elem);
                    }
                });
            }
        });
    }

  return (
      <div className="App">
          <header className="header">
              BONGO CAT
              <br/>
              AVATAR GENERATOR
          </header>
          <div className="model">
              {model === 0 ? <svg className="avatar_to_download"
                                  width="1024"
                                  height="1024"
                                  viewBox="0 0 1024 1024"
                                  xmlns="http://www.w3.org/2000/svg">

                  <defs>
                      <linearGradient id="gradient_body" x1="0" y1="0" x2="1" y2="1">
                          <stop id="first" stopColor={colorFirstBody} offset="0%"/>
                          <stop id="second" stopColor={colorSecondBody} offset="100%"/>
                      </linearGradient>

                      <linearGradient id="gradient_background" x1="0" y1="0" x2="1" y2="1">
                          <stop id="first" stopColor={colorFirstBackground} offset="0%"/>
                          <stop id="second" stopColor={colorSecondBackground} offset="100%"/>
                      </linearGradient>
                  </defs>

                  <rect id="background"
                        width="1024"
                        height="1024"
                        fill={picker === 1 ? "url(#gradient_background)": colorBackground}/>

                  <path id="body"
                        d="M492.5 383.5C482.524 363.304 475.944 354.326 464 343C451.737 352.61 432.357 379.001 431.5 379.5C430.643 379.999 430.106 380.226 429 380.5C392.364 393.024 372.987 402.985 341 426C302.228 455.058 282.536 473.546 251 510.5C244.571 518.144 242.164 522.889 238.5 532.5C237.349 539.334 237.365 543.166 238.5 550C241.448 558.922 245.308 562.208 255.5 565.5C263.886 566.508 268.711 566.465 277.5 565.5C304.467 560.249 318.678 555.276 342.5 543L342.563 542.963C344.636 541.752 345.971 540.972 349.5 542L545 591.5C548.079 592.418 549.535 592.184 551.5 590C556.603 584.26 558.137 582.671 564 577.5C566.744 575.62 567.745 575.252 570.5 577.5C572.736 579.613 573.078 581.264 571 583C559.296 592.892 554.993 599.229 551.5 612C550.922 616.474 550.929 619.104 551.5 624C553.793 633.432 557.301 636.491 567.5 638C577.265 638.569 582.739 638.569 592.5 638C617.84 634.71 631.287 631.277 654 622.5C659.791 620.063 663.191 619.321 669.5 619H688C690.867 619.147 691.305 620.18 691.5 622.5C691.832 624.819 691.157 625.834 688 627C710.306 633.234 722.785 636.183 745 640.5C745.604 604.06 737.034 581.204 705.5 536C721.985 494.887 726.187 473.091 724.5 436.5C701.508 440.479 690.032 445.553 672 459.5C605.309 417.715 566.15 399.768 492.5 383.5Z"
                        fill={picker === 1 ? "url(#gradient_body)": colorBody}
                        stroke={picker === 1 ? "url(#gradient_body)": colorBody}/>

                  <circle id="left_eye" cx="395" cy="486" r="13" fill={colorFace}/>
                  <circle id="right_eye" cx="556" cy="537" r="13" fill={colorFace}/>

                  <path id="face"
                        d="M463.624 504.682C461.445 497.42 458.975 496.057 452.352 499.515C449.196 501.106 447.279 501.695 443.428 501.864C438.869 501.905 437.252 500.768 435.913 496.697C435.277 493.178 434.272 492.12 431.216 492C427.651 492.262 426.246 493.199 425.11 496.697C424.885 498.993 424.987 500.328 425.58 502.803C427.42 507.569 428.716 508.754 434.504 511.727C440.289 513.02 444.883 512.507 450.473 511.258C453.109 510.921 454.697 509.794 456 513C457.303 516.206 458.854 517.923 462.86 520.864C464.807 522.247 466.154 522.81 468.5 523H475H481.003C486.208 522.416 488.257 520.832 488.988 516.424C488.461 511.213 486.697 511.02 481 512C478.348 512.536 476.825 512.645 474 512.5C467.44 512.03 465.135 510.824 463.624 504.682Z"
                        fill={colorFace}/>
              </svg> : ""}

              {model === 1 ? <svg className="avatar_to_download"
                                  width="1024"
                                  height="1024"
                                  viewBox="0 0 1024 1024"
                                  xmlns="http://www.w3.org/2000/svg">

                  <defs>
                      <linearGradient id="gradient_body" x1="0" y1="0" x2="1" y2="1">
                          <stop id="first" stopColor={colorFirstBody} offset="0%"/>
                          <stop id="second" stopColor={colorSecondBody} offset="100%"/>
                      </linearGradient>
                      <linearGradient id="gradient_background" x1="0" y1="0" x2="1" y2="1">
                          <stop id="first" stopColor={colorFirstBackground} offset="0%"/>
                          <stop id="second" stopColor={colorSecondBackground} offset="100%"/>
                      </linearGradient>
                  </defs>

                  <rect id="background"
                        width="1024"
                        height="1024"
                        fill={picker === 1 ? "url(#gradient_background)": colorBackground}/>

                  <path id="body"
                        d="M492.5 383.5C482.524 363.304 475.944 354.326 464 343C451.737 352.61 432.357 379.001 431.5 379.5C430.643 379.999 430.106 380.226 429 380.5C392.364 393.024 372.987 402.985 341 426C302.228 455.058 282.536 473.546 251 510.5C244.571 518.144 242.164 522.889 238.5 532.5C237.349 539.334 237.365 543.166 238.5 550C241.448 558.922 245.307 562.208 255.5 565.5C263.886 566.508 268.711 566.465 277.5 565.5C304.467 560.249 318.678 555.276 342.5 543L342.563 542.963C344.636 541.752 345.971 540.972 349.5 542L545 591.5C548.079 592.418 549.535 592.184 551.5 590C556.603 584.26 558.137 582.671 564 577.5C566.744 575.62 567.744 575.252 570.5 577.5C572.736 579.613 573.078 581.264 571 583C559.296 592.892 554.993 599.229 551.5 612C550.922 616.474 550.929 619.104 551.5 624C553.793 633.432 557.301 636.491 567.5 638C577.265 638.569 582.739 638.569 592.5 638C617.84 634.71 631.287 631.277 654 622.5C659.791 620.063 663.191 619.321 669.5 619H688C690.867 619.147 691.305 620.18 691.5 622.5C691.832 624.819 691.157 625.834 688 627C710.306 633.234 722.785 636.183 745 640.5C745.604 604.06 737.034 581.204 705.5 536C721.985 494.887 726.187 473.091 724.5 436.5C701.508 440.479 690.032 445.553 672 459.5C605.309 417.715 566.15 399.768 492.5 383.5Z"
                        fill={picker === 1 ? "url(#gradient_body)": colorBody}
                        stroke={picker === 1 ? "url(#gradient_body)": colorBody}/>

                  <circle id="left_eye" cx="395" cy="486" r="13" fill={colorFace}/>
                  <circle id="right_eye" cx="556" cy="537" r="13" fill={colorFace}/>

                  <path id="face"
                        d="M463.624 504.682C461.445 497.42 458.975 496.057 452.352 499.515C449.196 501.106 447.279 501.695 443.428 501.864C438.869 501.905 437.252 500.768 435.913 496.697C435.277 493.178 434.272 492.12 431.216 492C427.651 492.262 426.246 493.199 425.11 496.697C424.885 498.993 424.987 500.328 425.58 502.803C427.42 507.569 428.716 508.754 434.504 511.727C440.289 513.02 444.883 512.507 450.473 511.258C453.109 510.921 454.697 509.794 456 513C457.303 516.206 458.854 517.923 462.86 520.864C464.807 522.247 466.154 522.81 468.5 523H475H481.003C486.208 522.416 488.257 520.832 488.988 516.424C488.461 511.213 486.697 511.02 481 512C478.348 512.536 476.825 512.645 474 512.5C467.44 512.03 465.135 510.824 463.624 504.682Z"
                        fill={colorFace}/>

                  <path d="M655.387 371.938C655.342 370.57 654.164 369.527 652.798 369.617C555.909 376.109 516.408 335.245 511.917 341.642C498.545 360.685 494.198 363.532 505.64 371.883C555.245 408.091 651.792 410.074 653.517 403.419C655.814 394.56 655.592 378.177 655.387 371.938Z" fill="#DE8028"/>
                  <path d="M747.22 468.697C732.659 461.43 717.088 451.136 702.976 441.024C690.503 432.089 672.638 430.303 656.441 412.256C650.046 405.13 642.516 419.137 564.941 400.973C503.393 386.561 498.373 365.547 489.244 364.432C476.55 362.88 430.8 357.713 404.103 360.335C375.769 363.116 382.639 370.067 398.571 395.465C408.616 411.479 411.101 409.256 423.054 409.758C426.936 409.921 428.875 412.294 425.959 417.835C425 419.657 422.548 421.245 428.767 426.168C467.621 456.921 481.545 460.535 497.894 467.014C536.118 482.162 573.021 503.885 604.003 504.078C608.417 504.105 610.107 499.938 615.259 494.216C618.446 490.676 625.643 487.662 628.857 498.599C632.508 511.026 631.825 511.275 640.762 511.951C668.991 514.085 677.538 518.811 704.331 515.279C712.93 514.145 720.373 513.251 725.615 509.214C745.159 494.167 816.932 503.492 747.22 468.697Z" fill="#1A1A1A"/>
                  <path d="M517.638 337.544C591.568 372.99 643.315 366.621 653.611 364.79C656.93 364.199 654.355 364.721 659.259 313.531C665.987 243.321 659.075 264.902 669.097 221.389C691.061 126.028 693.654 133.509 639.842 186.017C597.528 227.305 606.646 232.002 588.362 246.838C551.342 276.867 537.916 303.315 516.704 333.969C515.856 335.194 516.294 336.9 517.638 337.544Z" fill="#1A1A1A"/>
              </svg> : ""}

              {model === 2 ? <svg className="avatar_to_download"
                                  width="1024"
                                  height="1024"
                                  viewBox="0 0 1024 1024"
                                  xmlns="http://www.w3.org/2000/svg">

                  <defs>
                      <linearGradient id="gradient_body" x1="0" y1="0" x2="1" y2="1">
                          <stop id="first" stopColor={colorFirstBody} offset="0%"/>
                          <stop id="second" stopColor={colorSecondBody} offset="100%"/>
                      </linearGradient>
                      <linearGradient id="gradient_background" x1="0" y1="0" x2="1" y2="1">
                          <stop id="first" stopColor={colorFirstBackground} offset="0%"/>
                          <stop id="second" stopColor={colorSecondBackground} offset="100%"/>
                      </linearGradient>
                  </defs>

                  <rect id="background"
                        width="1024"
                        height="1024"
                        fill={picker === 1 ? "url(#gradient_background)": colorBackground}/>

                  <path id="body"
                        d="M492.5 383.5C482.524 363.304 475.944 354.326 464 343C451.737 352.61 432.357 379.001 431.5 379.5C430.643 379.999 430.106 380.226 429 380.5C392.364 393.024 372.987 402.985 341 426C302.228 455.058 282.536 473.546 251 510.5C244.571 518.144 242.164 522.889 238.5 532.5C237.349 539.334 237.365 543.166 238.5 550C241.448 558.922 245.307 562.208 255.5 565.5C263.886 566.508 268.711 566.465 277.5 565.5C304.467 560.249 318.678 555.276 342.5 543L342.563 542.963C344.636 541.752 345.971 540.972 349.5 542L545 591.5C548.079 592.418 549.535 592.184 551.5 590C556.603 584.26 558.137 582.671 564 577.5C566.744 575.62 567.744 575.252 570.5 577.5C572.736 579.613 573.078 581.264 571 583C559.296 592.892 554.993 599.229 551.5 612C550.922 616.474 550.929 619.104 551.5 624C553.793 633.432 557.301 636.491 567.5 638C577.265 638.569 582.739 638.569 592.5 638C617.84 634.71 631.287 631.277 654 622.5C659.791 620.063 663.191 619.321 669.5 619H688C690.867 619.147 691.305 620.18 691.5 622.5C691.832 624.819 691.157 625.834 688 627C710.306 633.234 722.785 636.183 745 640.5C745.604 604.06 737.034 581.204 705.5 536C721.985 494.887 726.187 473.091 724.5 436.5C701.508 440.479 690.032 445.553 672 459.5C605.309 417.715 566.15 399.768 492.5 383.5Z"
                        fill={picker === 1 ? "url(#gradient_body)": colorBody}
                        stroke={picker === 1 ? "url(#gradient_body)": colorBody}/>

                  <circle id="left_eye" cx="395" cy="486" r="13" fill={colorFace}/>
                  <circle id="right_eye" cx="556" cy="537" r="13" fill={colorFace}/>

                  <path id="face"
                        d="M463.624 504.682C461.445 497.42 458.975 496.057 452.352 499.515C449.196 501.106 447.279 501.695 443.428 501.864C438.869 501.905 437.252 500.768 435.913 496.697C435.277 493.178 434.272 492.12 431.216 492C427.651 492.262 426.246 493.199 425.11 496.697C424.885 498.993 424.987 500.328 425.58 502.803C427.42 507.569 428.716 508.754 434.504 511.727C440.289 513.02 444.883 512.507 450.473 511.258C453.109 510.921 454.697 509.794 456 513C457.303 516.206 458.854 517.923 462.86 520.864C464.807 522.247 466.154 522.81 468.5 523H475H481.003C486.208 522.416 488.257 520.832 488.988 516.424C488.461 511.213 486.697 511.02 481 512C478.348 512.536 476.825 512.645 474 512.5C467.44 512.03 465.135 510.824 463.624 504.682Z"
                        fill={colorFace}/>

                  <path d="M464.364 363.439C476.294 344.019 488.224 324.597 500.154 305.177C502.63 301.144 505.233 296.982 509.186 294.39C513.572 291.515 519.027 290.95 524.25 290.482C564.583 286.869 605.015 284.328 645.487 282.871C656.291 282.482 667.507 282.244 677.422 286.55C686.573 290.525 693.686 297.975 700.43 305.321C724.254 331.258 746.857 358.32 768.136 386.385C771.382 390.664 774.676 395.137 775.887 400.371C776.99 405.152 776.256 410.141 775.503 414.986C764.483 485.729 749.831 555.906 731.63 625.146C728.806 628.945 722.329 627.693 719.418 623.964C716.505 620.234 728.253 601.768 728.017 597.039C725.075 538.517 712.934 495.121 707.092 434.877" fill="#ED2F2F"/>
                  <path d="M734.824 415.901L727.733 370.643C727.633 369.996 726.695 370.037 726.673 370.69C725.964 395.398 715.471 443.881 704.211 481.259C699.099 475.678 695.079 468.736 684.423 458.049C647.447 420.968 604.858 396.181 553.621 385.373C557.677 383.311 559.528 382.292 563.588 380.229C535.906 366.792 522.04 362.191 492.153 354.876C487.132 353.648 460.9 354.162 451.1 358.877L694.637 509.623C691.878 516.732 700.605 501.893 698.214 505.777L719.864 494.196C738.48 461.187 742.363 473.98 738.024 436.333" fill="#DD281F"/>
                  <path d="M720.753 457.458C708.647 439.401 744.799 401.237 728.696 403.148C718.663 404.342 685.236 405.219 663.503 399.031C671.059 398.19 674.512 397.725 682.069 396.881C633.231 375.184 604.212 361.507 548.849 354.115C532.339 351.908 492.138 350.198 473.914 351.974" fill="#DD281F"/>
                  <path d="M761.876 492.724L728.049 594.935L727.9 595.181C727.934 595.807 727.981 596.411 728.015 597.041C728.251 601.767 716.506 620.234 719.417 623.963C722.33 627.693 728.804 628.944 731.627 625.148C743.141 581.348 753.225 537.177 761.876 492.724Z" fill="#DD281F"/>
                  <path d="M739.84 460.189C733.136 439.68 712.226 428.543 691.402 422.897C696.943 420.022 698.756 420.705 704.298 417.828C678.87 416.509 627.248 388.063 603.389 379.176C553.399 360.556 497.037 351.495 481.283 350.35C484.323 348.551 489.439 347.379 494.16 346.015C477.292 342.568 465.989 340.956 450.216 342.378C445.761 342.779 437.364 344.175 433.094 345.505C411.313 352.285 393.983 372.81 399.259 411.293C401.884 403.623 404.715 401.758 406.755 401.015C402.946 410.595 406.244 420.665 408.284 424.91C415.518 439.97 436.308 447.279 435.61 446.491C432.68 443.185 431.291 439.287 432.046 436.794C449.492 449.639 477.142 463.738 507.617 476.13C505.684 473.42 503.928 470.582 502.513 467.573C517.15 473.76 526.653 482.341 551.806 492.57C589.175 505.083 619.255 510.816 644.241 510.292L634.927 501.122C650.671 495.83 698.345 530.308 715.041 518.36C713.154 516.35 691.934 512.794 722.349 502.963C733.896 498.524 747.487 483.594 739.84 460.189Z" fill="#EDEDED"/>
                  <path d="M739.84 460.189C733.848 441.849 716.486 431.018 697.992 424.893C711.711 432.684 738.494 460.2 715.123 484.9C699.112 501.819 661.182 492.091 656.849 491.075C634.2 485.768 611.552 480.461 588.904 475.151C592.147 478.164 603.15 487.502 606.394 490.512C587.795 494.513 560.483 485.343 542.475 479.208C524.465 473.074 507.731 463.763 491.11 454.503L493.182 460.74C467.704 452.228 443.565 439.728 421.907 423.838C421.508 426.818 421.945 429.905 423.158 432.658C406.112 419.112 406.755 401.015 406.755 401.015C402.946 410.595 406.244 420.665 408.286 424.91C415.518 439.97 436.308 447.279 435.61 446.491C432.68 443.185 431.291 439.287 432.046 436.794C449.492 449.639 477.142 463.739 507.617 476.13C505.684 473.42 503.928 470.582 502.513 467.573C517.15 473.76 526.653 482.341 551.806 492.57C589.176 505.083 619.256 510.816 644.241 510.292L634.927 501.122C650.672 495.83 698.345 530.308 715.041 518.36C713.154 516.35 691.934 512.794 722.349 502.963C733.896 498.524 747.487 483.594 739.84 460.189Z" fill="#DDDDDD"/>
                  <path d="M731.76 590.281C738.349 590.342 753.346 598.117 757.613 603.132C762.678 609.089 764.817 615.965 766.28 622.386C763.814 621.567 761.348 620.748 758.882 619.929C765.134 628.98 764.47 642.016 761.035 652.467C757.6 662.918 754.777 667.523 741.993 675.65C729.575 681.485 726.232 682.001 714.944 681.363C703.654 680.724 691.457 675.161 686.304 665.098C688.788 665.127 691.272 665.154 693.756 665.183C676.234 651.559 670.466 624.892 680.791 605.247C682.614 613.467 682.435 616.127 689.182 621.167C686.901 616.809 692.853 601.426 705.379 595.121C712.073 591.753 720.203 589.404 727.694 589.661" fill="#EDEDED"/>
                  <path d="M762.261 651.59C765.192 640.987 765.135 628.982 758.883 619.93C758.883 619.93 759.503 623.956 759.516 629.631C758.277 636.629 754.551 643.194 749.024 647.677C751.705 647.883 754.407 647.81 757.08 647.521C755.115 653.805 751.696 659.754 745.802 663.575C733.012 671.868 712.009 670.344 705.525 663.427C708.128 661.272 709.999 658.249 710.762 654.955C704.333 656.234 697.565 653.397 692.91 648.782C688.255 644.169 685.624 640.229 682.982 634.229C680.365 628.278 678.041 622.472 680.431 606.019C670.649 625.589 676.46 651.736 693.755 665.183C691.271 665.154 688.787 665.125 686.303 665.098C691.458 675.162 702.594 681.058 713.846 682.174C725.021 683.282 731.279 682.834 742.945 676.996C757.915 666.959 759.69 660.905 762.261 651.59Z" fill="#DDDDDD"/>
              </svg> : ""}
          </div>
          <br/>
          <button className="button_download" onClick={() => download()}>
              <span className="button_icon">
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="#3F3351" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 9.17448H15.7163V0H6.28375V9.17448H0L11 19.8792L22 9.17448V9.17448ZM0 22.9396V26H22V22.9396H0Z"/>
                  </svg>
              </span>
              <span className="button_text">Download</span>
          </button>
          <br/>
        <div className="buttons_group_1">
            <button className={model === 0 ? "button_active" : "button_color"}
                    onClick={() => {setModel(0)}}>
                <span className="button_icon">
                    <svg width="28" height="16" viewBox="0 0 28 16" fill="#3F3351" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0642 2.17815C13.5137 1.09198 13.1506 0.609131 12.4915 0C11.8147 0.516814 10.7452 1.93621 10.698 1.96303C10.6507 1.98984 10.621 2.0021 10.56 2.01681C8.53824 2.69034 7.46893 3.22608 5.70374 4.46387C3.5641 6.02665 2.47739 7.02095 0.737112 9.0084C0.382324 9.41952 0.249502 9.67469 0.047305 10.1916C-0.0162056 10.5592 -0.0153354 10.7652 0.047305 11.1328C0.209996 11.6126 0.422971 11.7894 0.985446 11.9664C1.44823 12.0206 1.71447 12.0183 2.19951 11.9664C3.68765 11.684 4.47188 11.4165 5.78652 10.7563L5.79 10.7543C5.90437 10.6892 5.97808 10.6472 6.17281 10.7025L16.9614 13.3647C17.1313 13.4141 17.2117 13.4015 17.3201 13.284C17.6017 12.9753 17.6864 12.8899 18.0099 12.6118C18.1614 12.5107 18.2166 12.4909 18.3686 12.6118C18.492 12.7254 18.5109 12.8142 18.3962 12.9076C17.7503 13.4396 17.5129 13.7804 17.3201 14.4672C17.2882 14.7079 17.2886 14.8493 17.3201 15.1126C17.4467 15.6199 17.6403 15.7844 18.2031 15.8655C18.742 15.8962 19.044 15.8961 19.5827 15.8655C20.9811 15.6886 21.7231 15.504 22.9766 15.0319C23.2961 14.9009 23.4838 14.8609 23.8319 14.8437H24.8528C25.011 14.8516 25.0352 14.9072 25.046 15.0319C25.0643 15.1566 25.027 15.2113 24.8528 15.2739C26.0838 15.6092 26.7724 15.7678 27.9984 16C28.0317 14.0402 27.5588 12.811 25.8186 10.3798C26.7283 8.16873 26.9602 6.9965 26.8671 5.02857C25.5983 5.24254 24.965 5.51545 23.9699 6.26555C20.2895 4.01829 18.1286 3.05308 14.0642 2.17815Z"/>
                    </svg>
                </span>
                <span className="button_text">Default</span>
            </button>

            <button className={model === 1 ? "button_active" : "button_color"}
                    onClick={() => {setModel(1)}}>
                <span className="button_icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#3F3351" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.4 5.05263C6.564 5.05263 7.644 5.68421 8.532 6.79579C9.192 6.05053 9.972 5.50737 10.8 5.24211V2.52632C10.8 1.8563 11.0529 1.21372 11.5029 0.739941C11.953 0.266165 12.5635 0 13.2 0H15.6V2.52632H13.2V5.24211C14.028 5.50737 14.808 6.05053 15.468 6.79579C16.356 5.68421 17.436 5.05263 18.6 5.05263C21.6 5.05263 24 9.29684 24 14.5263C24 19.7558 21.6 24 18.6 24C17.436 24 16.356 23.3684 15.468 22.2568C14.496 23.3684 13.296 24 12 24C10.704 24 9.504 23.3684 8.532 22.2568C7.644 23.3684 6.564 24 5.4 24C2.4 24 0 19.7558 0 14.5263C0 9.29684 2.4 5.05263 5.4 5.05263Z"/>
                    </svg>
                </span>
                <span className="button_text">Halloween</span>
            </button>

            <button className={model === 2 ? "button_active" : "button_color"}
                    onClick={() => {setModel(2)}}>
                <span className="button_icon">
                    <svg width="28" height="18" viewBox="0 0 28 18" fill="#3F3351" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.4433 8.21571C27.1887 7.18714 26.5014 6.23571 25.5213 5.70857L24.9867 3.52286C25.5977 3.31714 26.1832 3.09857 26.7305 2.86714V0C24.1849 1.37571 19.7682 2.61 14.0023 2.61C8.23646 2.61 3.81978 1.37571 1.27415 0V2.86714C1.82146 3.09857 2.40696 3.31714 3.01791 3.52286L2.48332 5.70857C1.50326 6.23571 0.815935 7.18714 0.561371 8.21571C-0.119586 11.0186 -0.78145 15.8271 2.44514 16.6243C3.81978 16.9714 6.36542 16.5729 7.98189 10.0543C8.22373 9 8.05826 7.86857 7.43458 6.93L7.96916 4.71857C9.08924 4.89857 10.2475 5.01429 11.4567 5.09143V7.38C10.6294 8.13857 10.1839 9.21857 10.1839 10.2857C10.1839 13.1657 10.6803 18 14.0023 18C15.4279 18 17.8208 16.9971 17.8208 10.2857C17.8208 9.21857 17.3753 8.13857 16.5479 7.38V5.09143C17.7571 5.01429 18.9154 4.89857 20.0355 4.71857L20.5701 6.93C19.9464 7.86857 19.7809 9 20.0227 10.0543C21.6392 16.5729 24.1849 16.9714 25.5595 16.6243C28.7797 15.8271 28.1179 11.0186 27.4433 8.21571ZM6.12358 9.60429C6.12358 9.60429 4.76167 15.2229 2.90335 14.7857C1.04504 14.2971 2.41968 8.67857 2.41968 8.67857C2.41968 8.67857 2.8779 6.80143 4.72348 7.26429C6.56907 7.72714 6.12358 9.60429 6.12358 9.60429ZM14.0023 16.0714C12.0931 16.0714 12.0931 10.2857 12.0931 10.2857C12.0931 10.2857 12.0931 8.35714 14.0023 8.35714C15.9115 8.35714 15.9115 10.2857 15.9115 10.2857C15.9115 10.2857 15.9115 16.0714 14.0023 16.0714ZM25.1013 14.7857C23.2557 15.2229 21.8811 9.60429 21.8811 9.60429C21.8811 9.60429 21.4228 7.71429 23.2812 7.26429C25.1395 6.81429 25.585 8.67857 25.585 8.67857C25.585 8.67857 26.9596 14.2971 25.1013 14.7857Z"/>
                    </svg>
                </span>
                <span className="button_text">Christmas</span>
            </button>
        </div>
          <div className="buttons_group_2">
              <button className={picker === 0 ? "button_active" : "button_color"}
                      onClick={() => {setColorPicker(0)}}>
                  <span className="button_icon">
                      <svg width="29" height="27" viewBox="0 0 29 27" fill="#3F3351" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.7782 18.2647C25.7782 18.2647 22.5564 21.7112 22.5564 23.8235C22.5564 25.5706 24.0062 27 25.7782 27C27.5502 27 29 25.5706 29 23.8235C29 21.7112 25.7782 18.2647 25.7782 18.2647ZM3.56409 15.8824L11.2802 8.27471L18.9964 15.8824H3.56409ZM21.8477 14.1988L7.44633 0L5.17498 2.23941L9.00889 6.01941L0.712818 14.1988C-0.237606 15.0882 -0.237606 16.6288 0.712818 17.5659L9.5727 26.3012C10.0399 26.7618 10.6681 27 11.2802 27C11.8924 27 12.5206 26.7618 12.9878 26.3012L21.8477 17.5659C22.7981 16.6288 22.7981 15.0882 21.8477 14.1988Z"/>
                      </svg>
                  </span>
                  <span className="button_text">Color</span>
              </button>

              <button className={picker === 1 ? "button_active" : "button_gradient"}
                      onClick={() => {setColorPicker(1)}}>
                  <span className="button_icon">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="#3F3351" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.33333 15.5556V12.4444H12.4444V15.5556H9.33333ZM12.4444 18.6667V15.5556H15.5556V18.6667H12.4444ZM12.4444 12.4444V9.33333H15.5556V12.4444H12.4444ZM9.33333 9.33333V6.22222H12.4444V9.33333H9.33333ZM9.33333 21.7778V18.6667H12.4444V21.7778H9.33333ZM0 3.11111V24.8889C0 26.6 1.4 28 3.11111 28H24.8889C26.6 28 28 26.6 28 24.8889V3.11111C28 1.4 26.6 0 24.8889 0H3.11111C1.4 0 0 1.4 0 3.11111ZM23.3333 18.6667V21.7778H20.2222V18.6667H23.3333ZM23.3333 12.4444V15.5556H20.2222V12.4444H23.3333ZM23.3333 6.22222V9.33333H20.2222V6.22222H23.3333ZM12.4444 3.11111V6.22222H15.5556V3.11111H18.6667V6.22222H15.5556V9.33333H18.6667V12.4444H15.5556V15.5556H18.6667V18.6667H15.5556V21.7778H18.6667V24.8889H15.5556V21.7778H12.4444V24.8889H3.11111V3.11111H12.4444Z"/>
                      </svg>
                  </span>
                  <span className="button_text">Gradient</span>
              </button>

              <button className={picker === 2 ? "button_active" : "button_gradient"}
                      onClick={handleGenerate}>
                  <span className="button_icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#3F3351" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.88749 7.75625L2.1125 0L0 2.1125L7.75625 9.86871L9.88749 7.75625ZM15.75 0L18.8125 3.0625L0 21.8875L2.1125 24L20.9375 5.1875L24 8.25V0H15.75ZM16.2437 14.1125L14.1313 16.225L18.825 20.9187L15.75 24H24V15.75L20.9375 18.8125L16.2437 14.1125Z"/>
                      </svg>
                  </span>
                  <span className="button_text">Random</span>
              </button>
          </div>
          <br/>
          <div className="picker">
              {picker === 0 ? <table className="color">
                  <tr>
                      <th>Body</th>
                      <th><input type="color"
                                 value={colorBody}
                                 onInput={(ev) => setColorBody(ev.target.value)}/></th>
                  </tr>
                  <tr>
                      <th>Face</th>
                      <th><input type="color"
                                 value={colorFace}
                                 onInput={(ev) => setColorFace(ev.target.value)}/></th>
                  </tr>
                  <tr>
                      <th>Background</th>
                      <th><input type="color"
                                 value={colorBackground}
                                 onInput={(ev) => setColorBackground(ev.target.value)}/></th>
                  </tr>
              </table> : ""}
              {picker === 1 ? <table className="gradient">
                  <tr>
                      <th>Body first color</th>
                      <th><input type="color"
                                 value={colorFirstBody}
                                 onInput={(ev)  => setFirstColorBody(ev.target.value)}/></th>
                  </tr>
                  <tr>
                      <th>Body second color</th>
                      <th><input type="color"
                                 value={colorSecondBody}
                                 onInput={(ev)  => setSecondColorBody(ev.target.value)}/></th>
                  </tr>
                  <tr>
                      <th>Face</th>
                      <th><input type="color"
                                 value={colorFace}
                                 onInput={(ev) => setColorFace(ev.target.value)}/></th>
                  </tr>
                  <tr>
                      <th>Background first color</th>
                      <th><input type="color"
                                 value={colorFirstBackground}
                                 onInput={(ev) => setFirstColorBackground(ev.target.value)}/></th>
                  </tr>
                  <tr>
                      <th>Background second color</th>
                      <th><input type="color"
                                 value={colorSecondBackground}
                                 onInput={(ev) => setSecondColorBackground(ev.target.value)}/></th>
                  </tr>
              </table> : ""}
              <span className="footer_span">
                  <a href="https://discord.gg/2fjtBMPHuZ" id="link">
                      <svg id="logo_discord" width="38" height="29" fill="white" viewBox="0 0 38 29"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M32.1896 2.4287C29.7298 1.29411 27.0996 0.469489 24.3499 0C24.0122 0.60191 23.6177 1.41148 23.3457 2.05552C20.4226 1.62215 17.5264 1.62215 14.6572 2.05552C14.3852 1.41148 13.9817 0.60191 13.641 0C10.8883 0.469489 8.25511 1.29712 5.7953 2.43472C0.833854 9.82617 -0.511118 17.034 0.161368 24.1396C3.45206 26.5623 6.64114 28.0339 9.77642 28.997C10.5505 27.9467 11.2409 26.8301 11.8357 25.6534C10.703 25.229 9.61801 24.7054 8.59284 24.0974C8.86483 23.8988 9.13083 23.6912 9.38787 23.4775C15.6405 26.3606 22.4341 26.3606 28.612 23.4775C28.872 23.6912 29.138 23.8988 29.407 24.0974C28.3789 24.7084 27.2909 25.232 26.1582 25.6564C26.7529 26.8301 27.4404 27.9497 28.2175 29C31.3557 28.0369 34.5478 26.5653 37.8385 24.1396C38.6275 15.9024 36.4905 8.76079 32.1896 2.4287ZM12.6875 19.7697C10.8106 19.7697 9.27131 18.0422 9.27131 15.9386C9.27131 13.8349 10.7777 12.1044 12.6875 12.1044C14.5974 12.1044 16.1366 13.8319 16.1038 15.9386C16.1068 18.0422 14.5974 19.7697 12.6875 19.7697ZM25.3123 19.7697C23.4353 19.7697 21.8961 18.0422 21.8961 15.9386C21.8961 13.8349 23.4025 12.1044 25.3123 12.1044C27.2222 12.1044 28.7614 13.8319 28.7286 15.9386C28.7286 18.0422 27.2222 19.7697 25.3123 19.7697Z"/>
                      </svg>
                  </a>
              </span>
          </div>
      </div>
  );
}