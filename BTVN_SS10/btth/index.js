let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
];

function xemDanhSach() {
    console.log("=== DANH SÁCH ĐỘI BÓNG ===");
    squad.forEach(player => {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    });
    alert("Đã in danh sách ra console (F12 để xem)!");
}

function themCauThu() {
    let ten = prompt("Nhập tên cầu thủ:");
    if (ten === null) return; 
    let soBan = parseInt(prompt("Nhập số bàn thắng:"));
    if (isNaN(soBan)) soBan = 0;
    let viTri = prompt("Nhập vị trí (VD: FW, MF, DF, GK):");
    if (viTri === null) return;
    
    let newId = Date.now();
    let newPlayer = { id: newId, name: ten, goals: soBan, position: viTri };
    squad.push(newPlayer);
    alert(`Đã thêm cầu thủ ${ten} với ID ${newId}`);
}

function timKiemTheoID() {
    let id = parseInt(prompt("Nhập ID cầu thủ cần tìm:"));
    if (isNaN(id)) return;
    let player = squad.find(p => p.id === id);
    if (player) {
        alert(`Thông tin cầu thủ:\nMã: ${player.id}\nTên: ${player.name}\nVị trí: ${player.position}\nSố bàn: ${player.goals}`);
    } else {
        alert("Không tìm thấy cầu thủ với ID " + id);
    }
}

function capNhatBanThang() {
    let id = parseInt(prompt("Nhập ID cầu thủ vừa ghi bàn:"));
    if (isNaN(id)) return;
    let player = squad.find(p => p.id === id);
    if (player) {
        player.goals++;
        alert(`Đã cập nhật: ${player.name} hiện có ${player.goals} bàn thắng.`);
    } else {
        alert("Không tìm thấy cầu thủ với ID " + id);
    }
}

function xoaCauThu() {
    let id = parseInt(prompt("Nhập ID cầu thủ cần xóa:"));
    if (isNaN(id)) return;
    let index = squad.findIndex(p => p.id === id);
    if (index !== -1) {
        let ten = squad[index].name;
        squad.splice(index, 1);
        alert(`Đã xóa cầu thủ ${ten} khỏi đội.`);
    } else {
        alert("Không tìm thấy cầu thủ với ID " + id);
    }
}

function main() {
    let choice;
    do {
        choice = prompt(
            "--- FOOTBALL MANAGER PRO ---\n" +
            "1. Xem đội hình\n" +
            "2. Thêm cầu thủ\n" +
            "3. Tìm kiếm (theo ID)\n" +
            "4. Cập nhật bàn thắng\n" +
            "5. Xóa cầu thủ (Chuyển nhượng)\n" +
            "0. Thoát\n\n" +
            "Bạn chọn:"
        );
        
        switch(choice) {
            case '1':
                xemDanhSach();
                break;
            case '2':
                themCauThu();
                break;
            case '3':
                timKiemTheoID();
                break;
            case '4':
                capNhatBanThang();
                break;
            case '5':
                xoaCauThu();
                break;
            case '0':
                alert("Tạm biệt!");
                break;
            case null:
                choice = '0';
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while(choice !== '0');
}

main();