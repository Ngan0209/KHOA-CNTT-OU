

function loadChuongtrinh() {
    fetch("../data/ctDaotao/KHMT_HTTT.json").then((res) => res.json()).then((data) => {
        let k = "";
        for(let q of data)
            k += `
            <div class="program">
                <a href="${q.link}">
                    <p><i class="fa-solid fa-desktop"></i></p>
                    <h3>Chương trình đào tạo khóa ${q.year}</h3>
                    <p>Xem chi tiết</p>
                </a>
            </div>
            `;
        let e1 = document.getElementById("KHMT");
        if(e1 !== null)
            e1.innerHTML = k;
    });

    fetch("../data/ctDaotao/KHMT_HTTT.json").then((res) => res.json()).then((data) => {
        let h = "";
        for(let l of data)
            h += `
            <div class="program">
                <a href="${l.link}">
                    <p><i class="fa-solid fa-desktop"></i></p>
                    <h3>Chương trình đào tạo khóa ${l.year}</h3>
                    <p>Xem chi tiết</p>
                </a>
            </div>
            `;
        let e4 = document.getElementById("HTTT");
        if(e4 !== null)
            e4.innerHTML = h;
    });

    

    fetch("../data/ctDaotao/CNTT.json").then((res) => res.json()).then((data) => {
        let n = "";
        for(let r of data)
            n += `
            <div class="program">
            <a href="${r.link}">
                <p><i class="fa-solid fa-desktop"></i></p>
                <h3>Chương trình đào tạo khóa ${r.year}</h3>
                <p>Xem chi tiết</p>
            </a>
        </div>
            `;
        let e2 = document.getElementById("ctCNTT");
        if(e2 !== null)
            e2.innerHTML = n;
    });

    fetch("../data/ctDaotao/chKHMT.json").then((res) => res.json()).then((data) => {
        let m = "";
        for(let p of data)
            m += `
            <div class="program">
            <a href="${p.link}">
                <p><i class="fa-solid fa-desktop"></i></p>
                <h3>Chương trình đào tạo khóa ${p.year}</h3>
                <p>Xem chi tiết</p>
            </a>
        </div>
            `;
        let e3 = document.getElementById("chKHMT");
        if(e3 !== null)
            e3.innerHTML = m;
    });
}
window.onload = function(){
    loadChuongtrinh();
}