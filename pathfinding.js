const importantNodes = [
    { id: 'Kolej Kerawang', x: 450, y: 500, lat: 5.26091, lon: 103.16593, edges: [] }, 
    { id: 'Dewan Lestari', x: 450, y: 185, lat: 5.262432, lon: 103.165938, edges: [] },
    { id: "Cafe", x: 450, y: 150, lat: 5.262686, lon: 103.165842, edges: [] },
    { id: 'Surau UiTM', x: 450, y: 340, lat: 5.261557, lon: 103.165987, edges: [] },
    { id: 'Blok E', x: 420, y: 320, lat: 5.261725, lon: 103.165722, edges: [] },
    { id: 'Blok D', x: 445, y: 70, lat: 5.263061, lon: 103.165811, edges: [] },
    { id: 'Blok B', x: 330, y: 70, lat: 5.263102, lon: 103.165157, edges: [] },
    { id: 'Blok C', x: 380, y: 40, lat: 5.263313, lon: 103.165514, edges: [] },
    { id: 'Blok A', x: 380, y: 120, lat: 5.262846, lon: 103.165473, edges: [] },
    { id: "Pejabat Petadbiran", x: 320, y: 175, lat: 5.262513, lon: 103.165094, edges: [] }
];

const graph = {
    "Tar": { id: "Tar", x: 260, y: 370, lat: 5.261423, lon: 103.164759, edges: [] },
    "Tar2": { id: "Tar2", x: 340, y: 220, edges: [] },
    "Tar3": { id: "Tar3", x: 345, y: 150, edges: [] },
    "Tar4": { id: "Tar4", x: 430, y: 150, edges: [] },
    "Tar5": { id: "Tar5", x: 440, y: 140, edges: [] },
    "Tar6": { id: "Tar6", x: 440, y: 225, edges: [] },
    "Tar7": { id: "Tar7", x: 425, y: 225, edges: [] },
    "Tar8": { id: "Tar8", x: 455, y: 415, edges: [] },
    "Tar9": { id: "Tar9", x: 340, y: 200, edges: [] },

    "AG": { id: "AG", x: 330, y: 120, edges: [] },
    "AG2": { id: "AG2", x: 330, y: 40, edges: [] },
    "AG3": { id: "AG3", x: 400, y: 360, edges: [] },
    "AG4": { id: "AG4", x: 400, y: 340, edges: [] },
    "AG5": { id: "AG5", x: 440, y: 120, edges: [] },
    "AG6": { id: "AG6", x: 445, y: 40, edges: [] },
    "AG7": { id: "AG7", x: 321, y: 200, edges: [] },

    "Gate Pejabat": { id: "Gate Pejabat", x: 260, y: 220, lat: 5.262192, lon: 103.164790, edges: [] },
    "Pondok Polis Bantuan": { id: "Pondok Polis Bantuan", x: 280, y: 230, edges: [] },
    "Pondok Polis Bantuan 2": { id: "Pondok Polis Bantuan 2", x: 470, y: 425, edges: [] },
    "Pejabat Kolej": { id: "Pejabat Kolej", x: 455, y: 445, edges: [] },

    "Kolej Kerawang": { id: "Kolej Kerawang", x: 450, y: 500, lat: 5.26069, lon: 103.16591, edges: [] },
    "MASMED": { id: "MASMED", x: 455, y: 535, edges: [] },
    "Blok Kasa": { id: "Blok Kasa", x: 455, y: 445, lat: 5.26091, lon: 103.16593, edges: [] },
    "Blok Sutera": { id: "Blok Sutera", x: 455, y: 535, lat: 5.26039, lon: 103.16593, edges: [] }, 

    "Gate Kolej Kerawang": { id: "Gate Kolej Kerawang", x: 443, y: 400, lat: 5.261204, lon: 103.165841, edges: [] },
    "Gate Blok E":  { id: "Gate Blok E", x: 420, y: 375, lat: 5.261307, lon: 103.165733, edges: [] },
    "Dewan Lestari": { id: "Dewan Lestari", x: 450, y: 185, lat: 5.262432, lon: 103.165938, edges: [] },
    "Dataran Lestari": { id: "Dataran Lestari", x: 430, y: 185, edges: [] },

    "Cafe": { id: "Cafe", x: 450, y: 150, lat: 5.262686, lon: 103.165842, edges: [] },
    "Kiosk": { id: "Kiosk", x: 400, y: 255, edges: [] },

    "Surau UiTM": { id: "Surau UiTM", x: 450, y: 340, lat: 5.261557, lon: 103.165987, edges: [] },
    "Blok E": { id: "Blok E", x: 420, y: 320, lat: 5.261725, lon: 103.165722, edges: [] },
    
    "Bilik Pensyarah 1": { id: "Bilik Pensyarah 1", x: 420, y: 340, edges: [] },
    "Bilik Pensyarah 2": { id: "Bilik Pensyarah 2", x: 420, y: 320, edges: [] },
    "Bilik Pensyarah 3": { id: "Bilik Pensyarah 3", x: 421, y: 300, edges: [] },
    "Pejabat Ketua Pusat Pengajian": { id: "Pejabat Ketua Pusat Pengajian", x: 422, y: 280, edges: [] },

    "MK E1(Aras 1)": { id: "MK E1(Aras 1)", x: 420, y: 340, edges: [] },
    "MK E2(Aras 1)": { id: "MK E2(Aras 1)", x: 420, y: 320, edges: [] },
    "MK E3(Aras 1)": { id: "MK E3(Aras 1)", x: 421, y: 300, edges: [] },
    "Bilik Pensyarah 5(Aras 1)": { id: "Bilik Pensyarah 5(Aras 1)", x: 422, y: 280, edges: [] },

    "Bilik Pensyarah 6(Aras 2)": { id: "Bilik Pensyarah 6(Aras 2)", x: 420, y: 340, edges: [] },
    "Bilik Pensyarah 7(Aras 2)": { id: "Bilik Pensyarah 7(Aras 2)", x: 420, y: 320, edges: [] },
    "Bilik Pensyarah 8(Aras 2)": { id: "Bilik Pensyarah 8(Aras 2)", x: 421, y: 300, edges: [] },
    "Bilik Pensyarah 9(Aras 2)": { id: "Bilik Pensyarah 9(Aras 2)", x: 422, y: 290, edges: [] },
    "Bilik Pensyarah 10(Aras 2)": { id: "Bilik Pensyarah 10(Aras 2)", x: 422, y: 280, edges: [] },

    "Kabin 1": { id: "Kabin 1", x: 372, y: 340, edges: [] },
    "Kabin 2": { id: "Kabin 2", x: 360, y: 340, edges: [] },
    "Kabin 3": { id: "Kabin 3", x: 345, y: 340, edges: [] },
    "Kabin 4": { id: "Kabin 4", x: 330, y: 340, edges: [] },
    
    "Blok D": { id: "Blok D", x: 445, y: 70, lat: 5.263061, lon: 103.165811, edges: [] },
    "MK D3(Aras 2)": { id: "MK D3(Aras 2)", x: 445, y: 95, edges: [] },
    "MK D2(Aras 2)": { id: "MK D2(Aras 2)", x: 445, y: 80, edges: [] },
    "MK D1(Aras 2)": { id: "MK D1(Aras 2)", x: 445, y: 60, edges: [] },

    "Bilik Seminar 2(Aras 1)": { id: "Bilik Seminar 2(Aras 1)", x: 445, y: 80, edges: [] },
    "Bilik Seminar 1": { id: "Bilik Seminar 1", x: 445, y: 60, edges: [] },

    "Blok B": { id: "Blok B", x: 330, y:70, lat: 5.263102, lon: 103.165157, edges: [] },
    "Smart Classroom": { id: "Smart Classroom", x: 330, y: 55, edges: [] },
    "MK B1(Aras 1)": { id: "MK B1(Aras 1)", x: 330, y: 95, edges: [] },
    "MK B2(Aras 1)": { id: "MK B2(Aras 1)", x: 330, y: 80, edges: [] },
    "MK B3(Aras 1)": { id: "MK B3(Aras 1)", x: 330, y: 65, edges: [] },
    "MK B4(Aras 1)": { id: "MK B4(Aras 1)", x: 330, y: 50, edges: [] },

    "B3-1(Aras 2)": { id: "B3-1(Aras 2)", x: 330, y: 95, edges: [] },
    "B3-2(Aras 2)": { id: "B3-2(Aras 2)", x: 330, y: 80, edges: [] },
    "B3-3(Aras 2)": { id: "B3-3(Aras 2)", x: 330, y: 65, edges: [] },
    "B3-4(Aras 2)": { id: "B3-4(Aras 2)", x: 330, y: 50, edges: [] },
    "B3-5(Aras 2)": { id: "B3-4(Aras 2)", x: 330, y: 40, edges: [] },

    "Blok C": { id: "Blok C", x: 380, y: 40, lat: 5.263313, lon: 103.165514, edges: [] },
    "C1-1": { id: "C1-1", x: 360, y: 40, edges: [] },
    "C1-2": { id: "C1-2", x: 370, y: 40, edges: [] },
    "C1-3": { id: "C1-3", x: 390, y: 40, edges: [] },
    "C1-4": { id: "C1-4", x: 405, y: 40, edges: [] },
    "C1-5": { id: "C1-5", x: 420, y: 40, edges: [] },

    "MK C1(Aras 1)": { id: "MK C1(Aras 1)", x: 360, y: 40, edges: [] },
    "MK C2(Aras 1)": { id: "MK C1(Aras 1)", x: 390, y: 40, edges: [] },
    "MK C3(Aras 1)": { id: "MK C1(Aras 1)", x: 405, y: 40, edges: [] },
    "Bilik Pensyarah Blok C(Aras 1)": { id: "Bilik Pensyarah Blok C(Aras 1)", x: 420, y: 40, edges: [] },

    "C3-1(Aras 2)": { id: "C3-1(Aras 2)", x: 360, y: 40, edges: [] },
    "C3-2(Aras 2)": { id: "C3-2(Aras 2)", x: 370, y: 40, edges: [] },
    "C3-3(Aras 2)": { id: "C3-3(Aras 2)", x: 390, y: 40, edges: [] },
    "C3-4(Aras 2)": { id: "C3-4(Aras 2)", x: 405, y: 40, edges: [] },
    "C3-5(Aras 2)": { id: "C3-5(Aras 2)", x: 420, y: 40, edges: [] },

    "Blok A": { id: "Blok A", x: 380, y: 120, lat: 5.262846, lon: 103.165473, edges: [] },
    "Pejabat HEA": { id: "Pejabat HEA", x: 380, y: 120, edges: [] },
    "Perpustakaan(Aras 1)": { id: "Perpustakaan(Aras 1)", x: 380, y: 120, edges: [] },

    "Bilik Pensyarah 11(Aras 2)": { id: "Bilik Pensyarah 11(Aras 2)", x: 410, y: 120, edges: [] },
    "Bilik Pensyarah 12(Aras 2)": { id: "Bilik Pensyarah 12(Aras 2)", x: 395, y: 120, edges: [] },
    "A3-4(Aras 2)": { id: "A3-4(Aras 2)", x: 380, y: 120, edges: [] },
    "A3-3(Aras 2)": { id: "A3-3(Aras 2)", x: 370, y: 120, edges: [] },
    "A3-2(Aras 2)": { id: "A3-2(Aras 2)", x: 360, y: 120, edges: [] },
    "A3-1(Aras 2)": { id: "A3-1(Aras 2)", x: 350, y: 120, edges: [] },
     
    "Pejabat Pentadbiran": { id: "Pejabat Pentadbiran", x: 320, y: 175, lat: 5.262513, lon: 103.165094, edges: [] },
    "Pejabat HEP": { id: "HEP", x: 320, y: 150, edges: [] },
    "Bilik Mesyuarat": { id: "Bilik Mesyuarat", x: 320, y: 170, edges: [] },
    "Pejabat Bendahari": { id: "Bendahari", x: 320, y: 190, edges: [] },
    "Big Data Lab(Aras 1)": { id: "Big Data Lab(Aras 1)", x: 320, y: 170, edges: [] }
};

const walkablePaths = [
    //Kolej from/to Blok E & Surau
    { from: "Blok Sutera", to: "Kolej Kerawang", weight: 40 },
    { from: "MASMED", to: "Kolej Kerawang", weight: 50 },
    { from: "Kolej Kerawang", to: "Blok Kasa", weight: 60 },
    { from: "Kolej Kerawang", to: "Pejabat Kolej", weight: 60 },
    { from: "Blok Kasa", to: "Tar8", weight: 40 },
    { from: "Blok Kasa", to: "Pondok Polis Bantuan 2", weight: 40 },
    { from: "Pejabat Kolej", to: "Tar8", weight: 40 },
    { from: "Pondok Polis Bantuan 2", to: "Tar8", weight: 40 },
    { from: "Tar8", to: "Gate Kolej Kerawang", weight: 20 },
    { from: "Gate Kolej Kerawang", to: "Gate Blok E", weight: 40 },
    { from: "Gate Blok E", to: "Surau UiTM", weight: 50 },
    { from: "Gate Blok E", to: "Blok E", weight: 50 },
    //Gate Blok E from/to Blok E classses 
    { from: "Gate Blok E", to: "Bilik Pensyarah 1", weight: 50 },
    { from: "Gate Blok E", to: "Bilik Pensyarah 2", weight: 50 },
    { from: "Gate Blok E", to: "Bilik Pensyarah 3", weight: 50 },
    { from: "Gate Blok E", to: "Pejabat Ketua Pusat Pengajian", weight: 50 },

    { from: "Gate Blok E", to: "MK E1(Aras 1)", weight: 50 },
    { from: "Gate Blok E", to: "MK E2(Aras 1)", weight: 50 },
    { from: "Gate Blok E", to: "MK E3(Aras 1)", weight: 50 },
    { from: "Gate Blok E", to: "Bilik Pensyarah 5(Aras 1)", weight: 50 },

    { from: "Gate Blok E", to: "Bilik Pensyarah 6(Aras 2)", weight: 50 },
    { from: "Gate Blok E", to: "Bilik Pensyarah 7(Aras 2)", weight: 50 },
    { from: "Gate Blok E", to: "Bilik Pensyarah 8(Aras 2)", weight: 50 },
    { from: "Gate Blok E", to: "Bilik Pensyarah 9(Aras 2)", weight: 50 },
    { from: "Gate Blok E", to: "Bilik Pensyarah 10(Aras 2)", weight: 50 },
        //Blok E from/to Blok E classses 
        { from: "Blok E", to: "Bilik Pensyarah 1", weight: 50 },
        { from: "Blok E", to: "Bilik Pensyarah 2", weight: 50 },
        { from: "Blok E", to: "Bilik Pensyarah 3", weight: 50 },
        { from: "Blok E", to: "Pejabat Ketua Pusat Pengajian", weight: 50 },
    
        { from: "Blok E", to: "MK E1(Aras 1)", weight: 50 },
        { from: "Blok E", to: "MK E2(Aras 1)", weight: 50 },
        { from: "Blok E", to: "MK E3(Aras 1)", weight: 50 },
        { from: "Blok E", to: "Bilik Pensyarah 5(Aras 1)", weight: 50 },
    
        { from: "Blok E", to: "Bilik Pensyarah 6(Aras 2)", weight: 50 },
        { from: "Blok E", to: "Bilik Pensyarah 7(Aras 2)", weight: 50 },
        { from: "Blok E", to: "Bilik Pensyarah 8(Aras 2)", weight: 50 },
        { from: "Blok E", to: "Bilik Pensyarah 9(Aras 2)", weight: 50 },
        { from: "Blok E", to: "Bilik Pensyarah 10(Aras 2)", weight: 50 },
    //Blok E classes to/from Dewan Lestari
    { from: "Tar7", to: "Bilik Pensyarah 1", weight: 50 },
    { from: "Tar7", to: "Bilik Pensyarah 2", weight: 50 },
    { from: "Tar7", to: "Bilik Pensyarah 3", weight: 50 },
    { from: "Tar7", to: "Pejabat Ketua Pusat Pengajian", weight: 50 },

    { from: "Tar7", to: "MK E1(Aras 1)", weight: 50 },
    { from: "Tar7", to: "MK E2(Aras 1)", weight: 50 },
    { from: "Tar7", to: "MK E3(Aras 1)", weight: 50 },
    { from: "Tar7", to: "Bilik Pensyarah 5(Aras 1)", weight: 50 },

    { from: "Tar7", to: "Bilik Pensyarah 6(Aras 2)", weight: 50 },
    { from: "Tar7", to: "Bilik Pensyarah 7(Aras 2)", weight: 50 },
    { from: "Tar7", to: "Bilik Pensyarah 8(Aras 2)", weight: 50 },
    { from: "Tar7", to: "Bilik Pensyarah 9(Aras 2)", weight: 50 },
    { from: "Tar7", to: "Bilik Pensyarah 10(Aras 2)", weight: 50 },
    //Kabin
    { from: "Gate Blok E", to: "AG3", weight: 50 },
    { from: "AG3", to: "AG4", weight: 50 },
    { from: "AG4", to: "Kabin 1", weight: 50 },
    { from: "AG4", to: "Kabin 2", weight: 50 },
    { from: "AG4", to: "Kabin 3", weight: 50 },
    { from: "AG4", to: "Kabin 4", weight: 50 },
     //alternative path
    { from: "AG4", to: "Kiosk", weight: 40 },
    { from: "Tar7", to: "Kiosk", weight: 30 },
    { from: "Tar7", to: "Dataran Lestari", weight: 30 },
    { from: "Dataran Lestari", to: "Tar4", weight: 50 },
    //Blok E to Dewan Lestari
    { from: "Surau UiTM", to: "Blok E", weight: 50 },
    { from: "Blok E", to: "Tar7", weight: 50 },
    { from: "Tar7", to: "Tar6", weight: 10 },
    { from: "Tar6", to: "Dewan Lestari", weight: 50 },
    { from: "Dewan Lestari", to: "Dataran Lestari", weight: 50 },
    { from: "Dewan Lestari", to: "Cafe", weight: 50 },
   //Paved road Kolej to Pejabat
    { from: "Gate Blok E", to: "Tar", weight: 230 },
    { from: "Tar", to: "Gate Pejabat", weight: 250 },
    { from: "Gate Pejabat", to: "Tar2", weight: 100 },
    { from: "Gate Pejabat", to: "Pondok Polis Bantuan", weight: 100 },
    { from: "Tar2", to: "Tar3", weight: 120 },
    { from: "Tar2", to: "Tar7", weight: 120 },
    { from: "Tar3", to: "Tar4", weight: 120 },
    { from: "Tar4", to: "Dewan Lestari", weight: 50 },
    { from: "Tar4", to: "Cafe", weight: 20 },
    { from: "Tar5", to: "Dewan Lestari", weight: 50 },
    { from: "Tar5", to: "Cafe", weight: 20 },
    { from: "Tar4", to: "Tar5", weight: 20 },
    //Tar5 to Blok D classes
    { from: "AG5", to: "Blok D", weight: 50 },
    { from: "Tar5", to: "AG5", weight: 40 },
    { from: "AG5", to: "MK D3(Aras 2)", weight: 50 },
    { from: "AG5", to: "MK D2(Aras 2)", weight: 50 },
    { from: "AG5", to: "MK D1(Aras 2)", weight: 50 },
    { from: "AG5", to: "Bilik Seminar 2(Aras 1)", weight: 50 },
    { from: "AG5", to: "Bilik Seminar 1", weight: 50 },
    //Blok D classes to AG
    { from: "AG6", to: "Blok D", weight: 50 },
    { from: "AG6", to: "AG5", weight: 40 },
    { from: "AG6", to: "MK D3(Aras 2)", weight: 50 },
    { from: "AG6", to: "MK D2(Aras 2)", weight: 50 },
    { from: "AG6", to: "MK D1(Aras 2)", weight: 50 },
    { from: "AG6", to: "Bilik Seminar 2(Aras 1)", weight: 50 },
    { from: "AG6", to: "Bilik Seminar 1", weight: 50 },
        //Blok D classes to Blok D
        { from: "Blok D", to: "MK D3(Aras 2)", weight: 50 },
        { from: "Blok D", to: "MK D2(Aras 2)", weight: 50 },
        { from: "Blok D", to: "MK D1(Aras 2)", weight: 50 },
        { from: "Blok D", to: "Bilik Seminar 2(Aras 1)", weight: 50 },
        { from: "Blok D", to: "Bilik Seminar 1", weight: 50 },
    //Tar5 to Blok A classes 
    { from: "AG5", to: "Blok A", weight: 50 },
    { from: "AG5", to: "Pejabat HEA", weight: 50 },
    { from: "AG5", to: "Perpustakaan(Aras 1)", weight: 50 },
    { from: "AG5", to: "Bilik Pensyarah 11(Aras 2)", weight: 50 },
    { from: "AG5", to: "Bilik Pensyarah 12(Aras 2)", weight: 50 },
    { from: "AG5", to: "A3-4(Aras 2)", weight: 50 },
    { from: "AG5", to: "A3-3(Aras 2)", weight: 50 },
    { from: "AG5", to: "A3-2(Aras 2)", weight: 50 },
    { from: "AG5", to: "A3-1(Aras 2)", weight: 50 },
    //Blok A classes to AG 
    { from: "AG", to: "Blok A", weight: 50 },
    { from: "AG", to: "Pejabat HEA", weight: 50 },
    { from: "AG", to: "Perpustakaan(Aras 1)", weight: 50 },
    { from: "AG", to: "Bilik Pensyarah 11(Aras 2)", weight: 50 },
    { from: "AG", to: "Bilik Pensyarah 12(Aras 2)", weight: 50 },
    { from: "AG", to: "A3-4(Aras 2)", weight: 50 },
    { from: "AG", to: "A3-3(Aras 2)", weight: 50 },
    { from: "AG", to: "A3-2(Aras 2)", weight: 50 },
    { from: "AG", to: "A3-1(Aras 2)", weight: 50 },
        //Blok A classes to Blok A
        { from: "Blok A", to: "Pejabat HEA", weight: 50 },
        { from: "Blok A", to: "Perpustakaan(Aras 1)", weight: 50 },
        { from: "Blok A", to: "Bilik Pensyarah 11(Aras 2)", weight: 50 },
        { from: "Blok A", to: "Bilik Pensyarah 12(Aras 2)", weight: 50 },
        { from: "Blok A", to: "A3-4(Aras 2)", weight: 50 },
        { from: "Blok A", to: "A3-3(Aras 2)", weight: 50 },
        { from: "Blok A", to: "A3-2(Aras 2)", weight: 50 },
        { from: "Blok A", to: "A3-1(Aras 2)", weight: 50 },

    //AG to Blok B classes
    { from: "AG", to: "Blok B", weight: 50 },
    { from: "AG", to: "Smart Classroom", weight: 50 },
    { from: "AG", to: "MK B1(Aras 1)", weight: 50 },
    { from: "AG", to: "MK B2(Aras 1)", weight: 50 },
    { from: "AG", to: "MK B3(Aras 1)", weight: 50 },
    { from: "AG", to: "MK B4(Aras 1)", weight: 50 },
    { from: "AG", to: "B3-1(Aras 2)", weight: 50 },
    { from: "AG", to: "B3-2(Aras 2)", weight: 50 },
    { from: "AG", to: "B3-3(Aras 2)", weight: 50 },
    { from: "AG", to: "B3-4(Aras 2)", weight: 50 },
    { from: "AG", to: "B3-5(Aras 2)", weight: 50 },
        //Blok B to Blok B classes
        { from: "Blok B", to: "Smart Classroom", weight: 50 },
        { from: "Blok B", to: "MK B1(Aras 1)", weight: 50 },
        { from: "Blok B", to: "MK B2(Aras 1)", weight: 50 },
        { from: "Blok B", to: "MK B3(Aras 1)", weight: 50 },
        { from: "Blok B", to: "MK B4(Aras 1)", weight: 50 },
        { from: "Blok B", to: "B3-1(Aras 2)", weight: 50 },
        { from: "Blok B", to: "B3-2(Aras 2)", weight: 50 },
        { from: "Blok B", to: "B3-3(Aras 2)", weight: 50 },
        { from: "Blok B", to: "B3-4(Aras 2)", weight: 50 },
        { from: "Blok B", to: "B3-5(Aras 2)", weight: 50 },

    //Blok B classes to AG2
    { from: "AG2", to: "Blok B", weight: 50 },
    { from: "AG2", to: "Smart Classroom", weight: 50 },
    { from: "AG2", to: "MK B1(Aras 1)", weight: 50 },
    { from: "AG2", to: "MK B2(Aras 1)", weight: 50 },
    { from: "AG2", to: "MK B3(Aras 1)", weight: 50 },
    { from: "AG2", to: "MK B4(Aras 1)", weight: 50 },
    { from: "AG2", to: "B3-1(Aras 2)", weight: 50 },
    { from: "AG2", to: "B3-2(Aras 2)", weight: 50 },
    { from: "AG2", to: "B3-3(Aras 2)", weight: 50 },
    { from: "AG2", to: "B3-4(Aras 2)", weight: 50 },
    { from: "AG2", to: "B3-5(Aras 2)", weight: 50 },
    //AG6 to Blok C classes
    { from: "AG6", to: "Blok C", weight: 50 },
    { from: "AG6", to: "C1-1", weight: 50 },
    { from: "AG6", to: "C1-2", weight: 50 },
    { from: "AG6", to: "C1-3", weight: 50 },
    { from: "AG6", to: "C1-4", weight: 50 },
    { from: "AG6", to: "C1-5", weight: 50 },
    { from: "AG6", to: "MK C1(Aras 1)", weight: 50 },
    { from: "AG6", to: "MK C2(Aras 1)", weight: 50 },
    { from: "AG6", to: "MK C3(Aras 1)", weight: 50 },
    { from: "AG6", to: "C3-1(Aras 2)", weight: 50 },
    { from: "AG6", to: "C3-2(Aras 2)", weight: 50 },
    { from: "AG6", to: "C3-3(Aras 2)", weight: 50 },
    { from: "AG6", to: "C3-4(Aras 2)", weight: 50 },
    { from: "AG6", to: "C3-5(Aras 2)", weight: 50 },
        //Blok C to Blok C classes
        { from: "Blok C", to: "C1-1", weight: 50 },
        { from: "Blok C", to: "C1-2", weight: 50 },
        { from: "Blok C", to: "C1-3", weight: 50 },
        { from: "Blok C", to: "C1-4", weight: 50 },
        { from: "Blok C", to: "C1-5", weight: 50 },
        { from: "Blok C", to: "MK C1(Aras 1)", weight: 50 },
        { from: "Blok C", to: "MK C2(Aras 1)", weight: 50 },
        { from: "Blok C", to: "MK C3(Aras 1)", weight: 50 },
        { from: "Blok C", to: "C3-1(Aras 2)", weight: 50 },
        { from: "Blok C", to: "C3-2(Aras 2)", weight: 50 },
        { from: "Blok C", to: "C3-3(Aras 2)", weight: 50 },
        { from: "Blok C", to: "C3-4(Aras 2)", weight: 50 },
        { from: "Blok C", to: "C3-5(Aras 2)", weight: 50 },
    //AG2 to Blok C classes
    { from: "AG2", to: "Blok C", weight: 50 },
    { from: "AG2", to: "C1-1", weight: 50 },
    { from: "AG2", to: "C1-2", weight: 50 },
    { from: "AG2", to: "C1-3", weight: 50 },
    { from: "AG2", to: "C1-4", weight: 50 },
    { from: "AG2", to: "C1-5", weight: 50 },
    { from: "AG2", to: "MK C1(Aras 1)", weight: 50 },
    { from: "AG2", to: "MK C2(Aras 1)", weight: 50 },
    { from: "AG2", to: "MK C3(Aras 1)", weight: 50 },
    { from: "AG2", to: "C3-1(Aras 2)", weight: 50 },
    { from: "AG2", to: "C3-2(Aras 2)", weight: 50 },
    { from: "AG2", to: "C3-3(Aras 2)", weight: 50 },
    { from: "AG2", to: "C3-4(Aras 2)", weight: 50 },
    { from: "AG2", to: "C3-5(Aras 2)", weight: 50 },
    //Tar2 to Pejabat Pentadbiran
    { from: "Tar2", to: "Tar9", weight: 50 },
    { from: "Tar9", to: "AG7", weight: 50 },
    { from: "AG7", to: "Pejabat Pentadbiran", weight: 50 },
    { from: "AG7", to: "Pejabat Bendahari", weight: 50 },
    { from: "AG7", to: "Bilik Mesyuarat", weight: 50 },
    { from: "AG7", to: "Pejabat HEP", weight: 50 },
    { from: "AG7", to: "Big Data Lab(Aras 1)", weight: 50 },
    { from: "Pejabat HEP", to: "Tar3", weight: 120 },
        //Pejabat Pentadbiran its classses
        { from: "Pejabat Pentadbiran", to: "Pejabat Bendahari", weight: 50 },
        { from: "Pejabat Pentadbiran", to: "Bilik Mesyuarat", weight: 50 },
        { from: "Pejabat Pentadbiran", to: "Pejabat HEP", weight: 50 },
        { from: "Pejabat Pentadbiran", to: "Big Data Lab(Aras 1)", weight: 120 },
    //Pejabat Pentadbiran to AG
    { from: "Pejabat HEP", to: "Pejabat Pentadbiran", weight: 50 },
    { from: "Pejabat HEP", to: "Pejabat Bendahari", weight: 30 },
    { from: "Pejabat HEP", to: "Bilik Mesyuarat", weight: 20 },
    { from: "Pejabat HEP", to: "Big Data Lab(Aras 1)", weight: 20 },
    { from: "AG", to: "Pejabat HEP", weight: 50 },
    { from: "Tar3", to: "Pejabat HEP", weight: 50 }
];

    function viewCafeInfo() {
        // Redirect user to cafe.html
        window.location.href = "cafe.html";
    }

     // Add edges to the graph nodes
     for (let path of walkablePaths) {
        let { from, to, weight } = path;
        graph[from].edges.push({ node: graph[to], weight: weight });
        graph[to].edges.push({ node: graph[from], weight: weight });
    }

    // Function to calculate the Euclidean distance between two points (x, y)
    function distance(node1, node2) {
        return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
    }

    // Function to calculate the distance between two geographic coordinates (lat, lon)
    function geoDistance(lat1, lon1, lat2, lon2) {
        const toRad = x => x * Math.PI / 180;
        const R = 6371; // Radius of the Earth in km

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }

    // Function to find the nearest node to a given latitude and longitude
    function findNearestNode(lat, lon) {
        let minDistance = Infinity;
        let nearestNode = null;

        for (let nodeId in graph) {
            let node = graph[nodeId];
            let dist = geoDistance(lat, lon, node.lat, node.lon);
            if (dist < minDistance) {
                minDistance = dist;
                nearestNode = node;
            }
        }
        return nearestNode;
    }

    // A* pathfinding algorithm(calculate the weight)
    function findShortestPath(graph, startNodeId, endNodeId) {
    // Reset graph nodes
    for (let nodeId in graph) {
        graph[nodeId].distanceFromStart = Infinity;
        graph[nodeId].distanceToEnd = Infinity;
        graph[nodeId].parent = null;
    }

    let openList = [graph[startNodeId]];
    let closedList = [];

    graph[startNodeId].distanceFromStart = 0;
    graph[startNodeId].distanceToEnd = distance(graph[startNodeId], graph[endNodeId]);

    while (openList.length > 0) {
        let currentNode = openList.reduce((acc, node) => node.distanceToEnd < acc.distanceToEnd ? node : acc, openList[0]);

        if (currentNode.id === endNodeId) {
            // Found the path
            let path = [];
            while (currentNode) {
                path.push(currentNode);
                currentNode = currentNode.parent;
            }
            return path.reverse();
        }

    openList = openList.filter(node => node !== currentNode);
    closedList.push(currentNode);

    for (let edge of currentNode.edges) {
        let neighbor = edge.node;
        if (closedList.includes(neighbor)) continue;

        let tentativeDistanceFromStart = currentNode.distanceFromStart + edge.weight;
        if (!openList.includes(neighbor)) {
            openList.push(neighbor);
        } else if (tentativeDistanceFromStart >= neighbor.distanceFromStart) {
            continue;
        }

        neighbor.parent = currentNode;
        neighbor.distanceFromStart = tentativeDistanceFromStart;
        neighbor.distanceToEnd = neighbor.distanceFromStart + distance(neighbor, graph[endNodeId]);
    }
}
return null; // No path found
}


    // Draw the nodes and paths on the canvas
    function drawPath(ctx, path) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        drawNodes(ctx); // Draw the nodes (buildings)
        ctx.beginPath();
        for (let i = 0; i < path.length; i++) {
            let node = path[i];
            if (i === 0) {
                ctx.moveTo(node.x, node.y);
            } else {
                ctx.lineTo(node.x, node.y);
            }
        }
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Function to draw nodes (buildings) on the canvas
    function drawNodes(ctx) {
        for (let nodeId in importantNodes) {
            let node = importantNodes[nodeId];
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'white';
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.strokeText(node.id, node.x + 10, node.y);
            ctx.fillText(node.id, node.x + 10, node.y);
        }
    }

    // Function to find the path based on user input
    function findPath() {
        let startNodeId = document.getElementById('start').value;
        let endNodeId = document.getElementById('end').value;

        if (graph[startNodeId] && graph[endNodeId]) {
            let path = findShortestPath(graph, startNodeId, endNodeId);
            if (path) {
                let ctx = document.getElementById('canvas').getContext('2d');
                drawPath(ctx, path);
            } else {
                alert("No path found");
            }
        } else {
            alert("Invalid node ID(s)");
        }
    }

    // Function to get user's current position and orientation
    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;
                console.log("User Location:", { lat: userLat, lon: userLon });

                // Display user location in latitude and longitude
                document.getElementById('location-info').innerText = `Your Location: Latitude: ${userLat}, Longitude: ${userLon}`;

                // Find the nearest node to the user's location
                let nearestNode = findNearestNode(userLat, userLon);
                if (nearestNode) {
                    document.getElementById('start').value = nearestNode.id;
                    document.getElementById('nearest-node-info').innerText = `Nearest Node: ${nearestNode.id}`;
                } else {
                    alert("No nearest node found");
                }
            }, error => {
                console.error("Error getting user location:", error);
                alert("Error getting user location. Please check your browser settings and allow location access.");
            });

            // Watch device orientation
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', handleOrientation, false);
            } else {
                alert("Device orientation not supported.");
            }
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // Function to handle device orientation changes
    function handleOrientation(event) {
        let alpha = event.alpha;
        if (alpha !== null) {
            let direction = getDirection(alpha);
            document.getElementById('direction-info').innerText = `Your device is pointing ${direction}.`;
        }
    }

    // Function to get cardinal direction based on device alpha value
    function getDirection(alpha) {
        if (alpha >= 315 || alpha < 45) {
            return 'north';
        } else if (alpha >= 45 && alpha < 135) {
            return 'east';
        } else if (alpha >= 135 && alpha < 225) {
            return 'south';
        } else {
            return 'west';
        }
    }

    // Find and display the nearest node to the specified coordinates
    document.addEventListener('DOMContentLoaded', () => {
        
        let nearestNode = findNearestNode(userLat, userLon);
        if (nearestNode) {
            document.getElementById('nearest-node-info').innerText = `Nearest Node to Lat: ${userLat}, Lon: ${userLon} is ${nearestNode.id}`;
        }
        let ctx = document.getElementById('canvas').getContext('2d');
        drawNodes(ctx); // Draw the nodes (buildings) on page load
    });
