// Global
(function () {
  let dac = document.querySelector('.dynamicAdvertContainer');

  if (isDevEnv()) {
    console.log('On Orca');
    addClickout(devClickout);
    addGsap();
  } else {
    addClickout(exitClickHandler);
    // gsap should be added in shell in live environment
  }

  function isDevEnv() {
    return (
      window.location.href.indexOf('orca.adylic.com') > 0 ||
      window.location.href.indexOf('template.adylicorca.com') > 0 ||
      window.location.href.indexOf('saturn.adylic.com') > 0 ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname === 'localhost'
    );
  }

  function addClickout(callback) {
    dac.addEventListener('click', callback);
  }

  function devClickout() {
    console.log('Clickout works');
  }

  function addGsap() {
    let s1 = document.createElement('script');
    // Update src to latest version of vendor specific GSAP CDN: i.e. Doubleclick, Sizmek
    s1.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js'
    );
    define = null;
    dac.appendChild(s1);
  }
})();

// Start frame
KGZ1bmN0aW9uICgpIHsKICBmdW5jdGlvbiBpc0RldkVudigpIHsKICAgIHJldHVybiAoCiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ29yY2EuYWR5bGljLmNvbScpID4gMCB8fAogICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCd0ZW1wbGF0ZS5hZHlsaWNvcmNhLmNvbScpID4gMCB8fAogICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdzYXR1cm4uYWR5bGljLmNvbScpID4gMCB8fAogICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICcxMjcuMC4wLjEnIHx8CiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcKICAgICk7CiAgfQoKICBmdW5jdGlvbiBkZXZMb2cobWVzc2FnZSkgewogICAgaWYgKGlzRGV2RW52KCkpIGNvbnNvbGUubG9nKG1lc3NhZ2UpOwogIH0KCiAgZnVuY3Rpb24gY2hlY2tGb3JHc2FwKGNhbGxiYWNrKSB7CiAgICBsZXQgREVBRExJTkVfTVMgPSAxMDAwMDsKICAgIGxldCBSRVRSWV9NUyA9IDEwMDsKICAgIGxldCBpbnRlcnZhbDsKCiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gewogICAgICBjbGVhckludGVydmFsKGludGVydmFsKTsKICAgICAgZGV2TG9nKCdHU0FQIGZhaWxlZCB0byBsb2FkIGFmdGVyICcgKyBERUFETElORV9NUyAvIDEwMDAgKyAnIHNlY29uZChzKS4nKTsKICAgIH0sIERFQURMSU5FX01TKTsKCiAgICB0cnkgewogICAgICBpZiAoZ3NhcCkgewogICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTsKICAgICAgICBjYWxsYmFjaygpOwogICAgICB9CiAgICB9IGNhdGNoIHsKICAgICAgZGV2TG9nKCdJbml0aWFsIEdTQVAgbG9hZCBmYWlsZWQuIFRyeWluZyBhZ2Fpbi4nKTsKICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7CiAgICAgICAgdHJ5IHsKICAgICAgICAgIGlmIChnc2FwKSB7CiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTsKICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7CiAgICAgICAgICAgIGNhbGxiYWNrKCk7CiAgICAgICAgICB9CiAgICAgICAgfSBjYXRjaCB7fQogICAgICB9LCBSRVRSWV9NUyk7CiAgICB9CiAgfQoKICBmdW5jdGlvbiBpbml0R2xvYmFsQW5pbWF0aW9ucygpIHsKICAgIGNvbnN0IERVUkFUSU9OID0gMC41OwogICAgY29uc3QgT1ZFUkFMTF9EVVJBVElPTiA9IDMuNTsKCiAgICBjb25zdCBjdXJyZW50RnJhbWUgPSAnLnN0YXJ0LWZyYW1lJzsKCiAgICAvLyAgRGVmaW5lIGVsZW1lbnQgc2VsZWN0b3JzCiAgICBjb25zdCBoZWFkbGluZVNlbGVjdG9yID0gYCR7Y3VycmVudEZyYW1lfSAuaGVhZGxpbmVgOwogICAgY29uc3Qgc3ViaGVhZGxpbmVTZWxlY3RvciA9IGAke2N1cnJlbnRGcmFtZX0gLnN1YmhlYWRsaW5lYDsKICAgIGNvbnN0IHNpZ25TZWxlY3RvciA9IGAke2N1cnJlbnRGcmFtZX0gLnNpZ25gOwogICAgY29uc3QgYWNjZW50U2VsZWN0b3IgPSBgJHtjdXJyZW50RnJhbWV9IC5hY2NlbnRgOwogICAgY29uc3QgYmFja2dyb3VuZEltYWdlU2VsZWN0b3IgPSBgJHtjdXJyZW50RnJhbWV9IC5iYWNrZ3JvdW5kSW1hZ2UtY29udGFpbmVyYDsKCiAgICBnc2FwLnRvKGJhY2tncm91bmRJbWFnZVNlbGVjdG9yLCB7CiAgICAgIHNjYWxlOiAxLjEsCiAgICAgIGR1cmF0aW9uOiBPVkVSQUxMX0RVUkFUSU9OLAogICAgfSk7CgogICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7CgogICAgdGwuZnJvbVRvKAogICAgICBoZWFkbGluZVNlbGVjdG9yLAogICAgICB7CiAgICAgICAgb3BhY2l0eTogMCwKICAgICAgICBzY2FsZTogMCwKICAgICAgfSwKICAgICAgewogICAgICAgIG9wYWNpdHk6IDEsCiAgICAgICAgc2NhbGU6IDEsCiAgICAgICAgZHVyYXRpb246IERVUkFUSU9OLAogICAgICB9CiAgICApIC8vIGVuZCB0aW1lOiAwLjUKICAgICAgLmZyb21UbygKICAgICAgICBzaWduU2VsZWN0b3IsCiAgICAgICAgewogICAgICAgICAgb3BhY2l0eTogMCwKICAgICAgICAgIHNjYWxlOiAwLAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgb3BhY2l0eTogMSwKICAgICAgICAgIHNjYWxlOiAxLAogICAgICAgICAgZHVyYXRpb246IERVUkFUSU9OLAogICAgICAgIH0KICAgICAgKSAvLyBlbmQgdGltZTogMQogICAgICAudG8oc2lnblNlbGVjdG9yLCB7CiAgICAgICAgcm90YXRlOiAzOTAsCiAgICAgICAgZHVyYXRpb246IDEsCiAgICAgIH0pIC8vIGVuZCB0aW1lOiAyCiAgICAgIC50byhzaWduU2VsZWN0b3IsIHsKICAgICAgICByb3RhdGU6ICctPTMwJywKICAgICAgICBkdXJhdGlvbjogRFVSQVRJT04sCiAgICAgIH0pIC8vIGVuZCB0aW1lOiAyLjUKICAgICAgLmZyb21UbygKICAgICAgICBzdWJoZWFkbGluZVNlbGVjdG9yLAogICAgICAgIHsKICAgICAgICAgIG9wYWNpdHk6IDAsCiAgICAgICAgICB5OiAyMCwKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgIG9wYWNpdHk6IDEsCiAgICAgICAgICB5OiAwLAogICAgICAgICAgZHVyYXRpb246IERVUkFUSU9OLAogICAgICAgIH0sCiAgICAgICAgJy09MScKICAgICAgKQogICAgICAuZnJvbVRvKAogICAgICAgIGFjY2VudFNlbGVjdG9yLAogICAgICAgIHsKICAgICAgICAgIG9wYWNpdHk6IDAsCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICBvcGFjaXR5OiAxLAogICAgICAgIH0sCiAgICAgICAgJy09MC41JwogICAgICApOwogIH0KCiAgY2hlY2tGb3JHc2FwKGluaXRHbG9iYWxBbmltYXRpb25zKTsKfSkoKTs=

// Middle
// (function () {
//   setTimeout(function () {
//     function initGlobalAnimations() {
//       const DURATION = 0.5;
//       const tl = gsap.timeline();
//       const currentFrame = '.middle-frame';

//       //  Define element selectors
//       const headlineSelector = `${currentFrame} .headline`;
//       const subheadlineSelector = `${currentFrame} .subheadline`;
//       const signSelector = `${currentFrame} .sign`;
//       const accentSelector = `${currentFrame} .accent`;
//       const carouselSelector = `${currentFrame} .carousel`;

//       tl.to(currentFrame, {
//         visibility: 'visible',
//         duration: 0,
//       })
//         .to(currentFrame, {
//           height: '100%',
//           duration: 1,
//         })
//         .fromTo(
//           headlineSelector,
//           {
//             opacity: 0,
//             scale: 0,
//           },
//           {
//             opacity: 1,
//             scale: 1,
//           }
//         )
//         .fromTo(
//           signSelector,
//           {
//             opacity: 0,
//             scale: 0,
//           },
//           {
//             opacity: 1,
//             scale: 1,
//           }
//         )
//         .to(signSelector, {
//           rotate: 390,
//           duration: 1,
//         })
//         .to(signSelector, {
//           rotate: '-=30',
//         })
//         .fromTo(
//           subheadlineSelector,
//           {
//             opacity: 0,
//             y: 20,
//           },
//           {
//             opacity: 1,
//             y: 0,
//           },
//           '-=1'
//         )
//         .fromTo(
//           accentSelector,
//           {
//             opacity: 0,
//           },
//           {
//             opacity: 1,
//           },
//           '-=0.5'
//         )
//         .fromTo(
//           carouselSelector,
//           {
//             opacity: 0,
//             y: 20,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//           },
//           '-=0.5'
//         );

//       const TOTAL_IMAGES = 3;

//       for (let i = 0; i < TOTAL_IMAGES; i++) {
//         tl.to(carouselSelector, {
//           x: '-=100%',
//           duration: 1
//         }, '+=1');
//       }
//     }

//     initGlobalAnimations();
//   }, 3500);
// })();
