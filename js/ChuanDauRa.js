

function loadDaura() {
    fetch("../data/ChuanDauRa/KHMT.json").then((res) => res.json()).then((data) => {
        let k = "";
        for(let q of data)
            k += `
            <div class="program">
            <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/${q.link}" target="_blank">
                <p><i class="fa-solid fa-desktop"></i></p>
                <h3>Chuẩn đầu ra khóa ${q.year}</h3>
                <p>Xem chi tiết</p>
            </a>
        </div>
            `;
        let e1 = document.getElementById("KHMT");
        if(e1 !== null)
            e1.innerHTML = k;
    });

    fetch("../data/ChuanDauRa/HTTT.json").then((res) => res.json()).then((data) => {
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

    

    fetch("../data/ChuanDauRa/CNTT.json").then((res) => res.json()).then((data) => {
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
        let e2 = document.getElementById("CNTT");
        if(e2 !== null)
            e2.innerHTML = n;
    });
}
window.onload = function(){
    loadDaura();
}