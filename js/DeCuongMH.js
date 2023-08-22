

function loadChuongtrinh() {
    fetch("../data/DeCuongMH/KHMT.json").then((res) => res.json()).then((data) => {
        let k = "";
        for(let q of data){
            let g ="";
            for(let b of q.MH)
                g += `
                    <li><a href="${b.link}">${b.Mon}</a></li>
                `;
            k += `
            <div class="program">
                        <div>
                            <h3>${q.HK}</h3>
                            <ol>
                                ${g}
                            </ol>
                        </div>
                    </div>
            `;
        let e1 = document.getElementById("KHMT");
        if(e1 !== null)
            e1.innerHTML = k;
        }
    });

    fetch("../data/DeCuongMH/HTTT.json").then((res) => res.json()).then((data) => {
        let h = "";
        for(let l of data){
            let w ="";
            for(let b of l.MH)
                w += `
                    <li><a href="${b.link}">${b.Mon}</a></li>
                `;
            h += `
            <div class="program">
                        <div>
                            <h3>${l.HK}</h3>
                            <ol>
                                ${w}
                            </ol>
                        </div>
                    </div>
            `;
        let e2 = document.getElementById("HTTT");
        if(e2 !== null)
            e2.innerHTML = h;
        }
    });
    

    fetch("../data/DeCuongMH/CNTT.json").then((res) => res.json()).then((data) => {
        let n = "";
        for(let r of data){
            let p ="";
            for(let b of r.MH)
                p += `
                    <li><a href="${b.link}">${b.Mon}</a></li>
                `;
            n += `
            <div class="program">
                        <div>
                            <h3>${r.HK}</h3>
                            <ol>
                                ${p}
                            </ol>
                        </div>
                    </div>
            `;
        let e3 = document.getElementById("CNTT");
        if(e3 !== null)
            e3.innerHTML = n;
        }
    });

    fetch("../data/DeCuongMH/KHMT_CLC.json").then((res) => res.json()).then((data) => {
        let m = "";
        for(let a of data){
            let t ="";
            for(let b of a.MH)
                t += `
                    <li><a href="${b.link}">${b.Mon}</a></li>
                `;
            m += `
            <div class="program">
                        <div>
                            <h3>${a.HK}</h3>
                            <ol>
                                ${t}
                            </ol>
                        </div>
                    </div>
            `;
        let e4 = document.getElementById("KHMT_CLC");
        if(e4 !== null)
            e4.innerHTML = m;
        }
    });
}
window.onload = function(){
    loadChuongtrinh();
}