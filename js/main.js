window.onload = () => {
    document.querySelector('.content').style.display = 'none';
    setTimeout(function () {
        document.querySelector('.content').style.display = 'block';
        document.querySelector('.preloader').style.display = 'none';
    }, 1000);
}

window.onscroll = () => {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        document.querySelector('.navigation').style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.06)';
        document.querySelector('.navigation').style.position = 'sticky';
        document.querySelector('.navigation').style.backgroundColor = '#fff';
        document.querySelector('.top').style.transform = 'translateX(0)';
    } else {
        document.querySelector('.navigation').style.backgroundColor = 'transparent';
        document.querySelector('.navigation').style.position = 'relative';
        document.querySelector('.navigation').style.boxShadow = 'none';
        document.querySelector('.top').style.transform = 'translateX(100%)';
    }
}

document.querySelector('.top').onclick = () => {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
    });
}

document.querySelector('.nav-toggle-btn').onclick = () => {
    if (document.querySelector('.nav-content').style.transform === 'rotateX(0deg)') {
        document.querySelector('.nav-content').style.transform = 'rotateX(90deg)';
        document.querySelector('.nav-toggle-btn').className = document.querySelector('.nav-toggle-btn').className.replace(' nav-toggle-btn-rotate', '');
    } else {
        document.querySelector('.nav-content').style.transform = 'rotateX(0deg)';
        document.querySelector('.nav-toggle-btn').classList += ' nav-toggle-btn-rotate';
    }
}


document.querySelector(".send-btn").onclick = () => {
    document.querySelector(".send-btn").innerHTML = "Sending Message <i class='fa fa-spinner send-msg'></i>";
}
