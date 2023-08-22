
function loadTeacher() {
    fetch("../data/dsGiangvien/banlanhdao.json").then((res) => res.json()).then((data) => {
        let k = "";
        for(let q of data)
            k += `
            <div class="flex teacher" >
                <div>
                    <img alt="" src="../image/giang_vien/${q.image}" style="${q.sizeimage}" />
                </div>
                <div>
                    <table>
                        <tr>
                            <th colspan="2" style="text-align: center;">${q.ten}</th>
                        </tr>
                        <tr>
                            <th>Chức danh:</th>
                            <td>${q.chucdanh}</td>
                                        
                        </tr>
                        <tr>
                            <th>Học vị:</th>
                            <td>${q.hocvi}</td>
                        </tr>
                        <tr>
                            <th>Môn học giảng dạy:</th>
                            <td>${q.monday}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ Email:</th>
                            <td><a href="mailto:${q.email}" target="_blank">${q.email}</a></td>
                        </tr>
                        <tr>
                            <td colspan="2"><a href="#"><em>Lý lịch khoa học.</em></a></td>
                        </tr>
                    </table>
                </div>
            </div>
            `;
        let e1 = document.getElementById("lanhdao");
        if(e1 !== null)
            e1.innerHTML = k;
    });

    fetch("../data/dsGiangvien/canbo.json").then((res) => res.json()).then((data) => {
        let n = "";
        for(let r of data)
            n += `
            <div class="flex teacher" >
                <div>
                    <img alt="" src="../image/giang_vien/${r.image}" style="${r.sizeimage}" />
                </div>
                <div>
                    <table>
                        <tr>
                            <th colspan="2" style="text-align: center;">${r.ten}</th>
                        </tr>
                        <tr>
                            <th>Chức danh:</th>
                            <td>${r.chucdanh}</td>
                                        
                        </tr>
                        <tr>
                            <th>Học vị:</th>
                            <td>${r.hocvi}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ Email:</th>
                            <td><a href="mailto:${r.email}" target="_blank">${r.email}</a></td>
                        </tr>
                        <tr>
                            <td colspan="2"><a href="#"><em>Lý lịch khoa học.</em></a></td>
                        </tr>
                    </table>
                </div>
            </div>
            `;
        let e2 = document.getElementById("canbo");
        if(e2 !== null)
            e2.innerHTML = n;
    });

    fetch("../data/dsGiangvien/gvhuuco.json").then((res) => res.json()).then((data) => {
        let h = "";
        for(let p of data)
            h += `
            <div class="flex teacher" >
                <div>
                    <img alt="" src="../image/giang_vien/${p.image}" style="${p.sizeimage}" />
                </div>
                <div>
                    <table>
                        <tr>
                            <th colspan="2" style="text-align: center;">${p.ten}</th>
                        </tr>
                        <tr>
                            <th>Chức danh:</th>
                            <td>${p.chucdanh}</td>
                                        
                        </tr>
                        <tr>
                            <th>Học vị:</th>
                            <td>${p.hocvi}</td>
                        </tr>
                        <tr>
                            <th>Môn học giảng dạy:</th>
                            <td>${p.monday}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ Email:</th>
                            <td><a href="mailto:${p.email}" target="_blank">${p.email}</a></td>
                        </tr>
                        <tr>
                            <td colspan="2"><a href="#"><em>Lý lịch khoa học.</em></a></td>
                        </tr>
                    </table>
                </div>
            </div>
            `;
        let e = document.getElementById("GVhuuco");
        if(e !== null)
            e.innerHTML = h;
    });

    fetch("../data/dsGiangvien/thinhgiang.json").then((res) => res.json()).then((data) => {
        let m = "";
        for(let l of data)
            m += `
            <div class="flex teacher" >
                <div>
                    <img alt="" src="../image/giang_vien/${l.image}" style="${l.sizeimage}" />
                </div>
                <div>
                    <table>
                        <tr>
                            <th colspan="2" style="text-align: center;">${l.ten}</th>
                        </tr>
                        <tr>
                            <th>Chức danh:</th>
                            <td>${l.chucdanh}</td>
                                        
                        </tr>
                        <tr>
                            <th>Học vị:</th>
                            <td>${l.hocvi}</td>
                        </tr>
                        <tr>
                            <th>Môn học giảng dạy:</th>
                            <td>${l.monday}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ Email:</th>
                            <td><a href="mailto:${l.email}" target="_blank">${l.email}</a></td>
                        </tr>
                        <tr>
                            <td colspan="2"><a href="#"><em>Lý lịch khoa học.</em></a></td>
                        </tr>
                    </table>
                </div>
            </div>
            `;
        let e4 = document.getElementById("GVthinhgiang");
        if(e4 !== null)
            e4.innerHTML = m;
    });
}

window.onload = function(){
    loadTeacher();
}