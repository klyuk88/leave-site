        function leaveWebsite() {
            const html = document.querySelector('html');
            const overlay = document.querySelector('.overLay');
            let view = false;
            html.addEventListener('mouseleave', function (e) {
                if (e.clientY < 0 && view == false) {
                    overlay.style.display = 'flex';
                    view = true;
                }

            })
        }
        leaveWebsite();
