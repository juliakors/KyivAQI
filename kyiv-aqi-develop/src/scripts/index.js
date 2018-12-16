// import * as ee from '@google/earthengine';
// import * as privateKey from '../../privatekey.json';
// // import * as googleapis from 'googleapis';

// console.log(ee);
// console.log(privateKey);

// ee.data.authenticateViaOauth('e1454a7d084ae8e70c7fe075b6f810fcde5711e9');
// ee.data.authenticateViaPrivateKey(privateKey);

// ee.initialize();

// // Run an Earth Engine script.
// var image = new ee.Image('srtm90_v4');
// image.getMap({min: 0, max: 1000}, function(map) {
//   //console.log(map);
// });


if (!window.location.href.includes('register') && !window.location.href.includes('login'))
$('input[name="dates"]').daterangepicker();

const socket = io.connect();

if (window.location.href=='http://localhost:3000/') {
    document.getElementById('logoutBtn').addEventListener('click', () => {
        fetch('logout')
        .then(res => {
            return res.text()
        })
        .then(()=>{
            localStorage.setItem('isAuth', false);
            window.location = '/';
        });
    });
    
    window.onload = () => {
        if (localStorage.getItem('isAuth') == 'true') {
            document.getElementById('loginBtn').style.display = 'none';
            document.getElementById('logoutBtn').style.display = 'block';
        } else if (localStorage.getItem('isAuth') == 'false'){
            document.getElementById('loginBtn').style.display = 'block';
            document.getElementById('logoutBtn').style.display = 'none';
        }
    }
}

if (window.location.href=='http://localhost:3000/login') {
    document.getElementById('userLogin').addEventListener('click', () => {
        let userData = {
            username: document.getElementById('userName').value,
            password: document.getElementById('userPassword').value
        }
        fetch('login', {
            method : "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: document.getElementById('userName').value,
                password: document.getElementById('userPassword').value
            })
        }).then(res => {
            return res.text()
        })
        .then(()=>{
            localStorage.setItem('isAuth', true);
            window.location = '/';
        })
    });
}
