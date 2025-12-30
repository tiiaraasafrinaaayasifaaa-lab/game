const truths = [
  "Apa rahasia terbesar yang belum pernah kamu ceritakan ke siapapun di sini?",
  "Jika bisa berubah menjadi salah satu orang di ruangan ini selama sehari, siapa yang akan kamu pilih dan mengapa?",
  "Apa hal paling memalukan yang pernah terjadi padamu di depan banyak orang?",
  "Kapan terakhir kali kamu menangis dan mengapa?",
  "Siapa orang yang paling kamu benci dan mengapa?",
  "Apa hal yang paling kamu takutkan saat ini?",
  "Jika kamu hanya punya 24 jam lagi untuk hidup, apa yang akan kamu lakukan?",
  "Sudah pernahkah kamu menipu teman dekatmu? Apa alasannya?",
  "Siapa orang pertama yang pernah kamu suka?",
  "Apa kebiasaan burukmu yang paling sulit diubah?",
  "Jika bisa menghapus satu peristiwa dari masa lalu, apa itu?",
  "Sudah pernahkah kamu mencuri sesuatu? Apa itu?",
  "Siapa orang yang paling kamu kagumi dan mengapa?",
  "Apa impian terbesar yang belum pernah kamu ceritakan ke siapapun?",
  "Kapan terakhir kali kamu berbohong dan apa yang kamu katakan?",
  "Apa hal yang paling kamu malukan tentang diri sendiri?",
  "Jika bisa memiliki satu kekuatan super, apa itu dan mengapa?",
  "Sudah pernahkah kamu menyukai teman pacar temanmu?",
  "Apa hal yang paling kamu benci tentang diri sendiri?",
  "Jika bisa bertemu orang terkenal apapun, siapa yang akan kamu pilih dan apa yang akan kamu bicarakan?",
  "Kapan terakhir kali kamu melakukan kebaikan tanpa mengharapkan balasan?",
  "Apa kesalahan terbesar yang pernah kamu lakukan dalam hubungan?",
  "Siapa orang yang paling kamu rindukan saat ini?",
  "Sudah pernahkah kamu membenci diri sendiri? Kapan dan mengapa?",
  "Apa hal yang paling kamu senangi tentang setiap orang di ruangan ini?",
  "Jika bisa hidup di zaman mana saja, zaman mana yang akan kamu pilih dan mengapa?",
  "Kapan terakhir kali kamu mengkhianati janji?",
  "Apa hal yang paling kamu benci tentang teman dekatmu?",
  "Jika bisa mengubah satu hal tentang dunia, apa itu?",
  "Sudah pernahkah kamu melakukan sesuatu yang ilegal? Apa itu?",
  "Siapa orang yang paling berpengaruh dalam hidupmu?",
  "Apa hal yang paling kamu takutkan untuk dicoba?",
  "Kapan terakhir kali kamu merasa sangat malu sampai ingin menghilang?",
  "Apa rahasia terbesar yang kamu tahu tentang seseorang di sini?",
  "Jika kamu bisa mendapatkan jawaban untuk satu pertanyaan apapun, apa pertanyaan itu?",
  "Sudah pernahkah kamu menyukai seseorang yang tidak pernah menyukaimu kembali?",
  "Apa kebiasaan terbaikmu?",
  "Kapan terakhir kali kamu membantu orang tanpa mereka tahu?",
  "Apa hal yang paling kamu benci tentang tempat tinggalmu?",
  "Siapa orang yang paling kamu ingin bertemu lagi setelah lama tidak bertemu?",
  "Jika bisa memiliki satu barang apapun, apa itu dan mengapa?",
  "Sudah pernahkah kamu berbohong untuk melindungi seseorang?",
  "Apa hal yang paling kamu senangi tentang kehidupanmu saat ini?",
  "Kapan terakhir kali kamu merasa sangat senang sampai menangis?",
  "Apa hal yang paling kamu benci tentang pekerjaan atau sekolahmu?",
  "Siapa orang yang paling kamu takuti dan mengapa?",
  "Jika bisa melakukan perjalanan ke tempat apapun, kemana yang akan kamu pergi?",
  "Sudah pernahkah kamu melakukan sesuatu yang kamu sesal seumur hidup?",
  "Apa harapan terbesarmu untuk tahun depan?",
  "Jika kamu harus memilih satu orang untuk hidup bersamanya di pulau terpencil, siapa yang akan kamu pilih dan mengapa?"
];

const dares = [
  "Panggil teman acak dan katakan sesuatu yang sangat konyol tanpa menjelaskan.",
  "Bernyanyi lagu favoritmu dengan nada yang salah sepenuhnya.",
  "Makan campuran makanan yang aneh yang dibuat temanmu.",
  "Berjalan seperti kuda keliling ruangan selama 1 menit.",
  "Kirim pesan teks yang konyol ke orang tuamu dan tunggu jawabannya.",
  "Menari tanpa musik selama 30 detik.",
  "Menggambarkan seseorang di ruangan ini dengan tangan terbalik dan biarkan orang lain menebaknya.",
  "Makan sepotong bawang merah mentah.",
  "Berbicara dengan aksen asing selama 5 menit.",
  "Duduk di punggung seseorang di ruangan ini selama 1 menit sambil bernyanyi.",
  "Kirim pesan ke mantanmu yang hanya bertuliskan 'hai' dan tunggu jawabannya.",
  "Bernyanyi duet dengan orang yang paling kamu tidak kenal di ruangan ini.",
  "Lari keliling luar rumah sekali sambil berteriak sesuatu yang konyol.",
  "Membuat muka lucu dan jaga selama 1 menit.",
  "Minum segelas air yang dicampur dengan garam.",
  "Ceritakan lelucon yang paling buruk yang pernah kamu dengar.",
  "Berjalan seperti kucing selama 1 menit dan mengeluarkan suara 'meong'.",
  "Pakai baju terbalik selama 10 menit.",
  "Tanya orang acak di luar apakah mereka mau menikahimu.",
  "Bernyanyi lagu yang sedang populer dengan kata-kata buatan sendiri.",
  "Makan sepotong cabe rawit (jika mampu).",
  "Berbicara hanya dengan kata berawalan huruf 'A' selama 1 menit.",
  "Guling di lantai dari satu ujung ke ujung ruangan.",
  "Kirim pesan ke temanmu 'aku mencintaimu' dan lihat reaksinya.",
  "Membuat tarian konyol dan ajak semua orang ikut.",
  "Berjalan seperti tupai selama 1 menit.",
  "Minum segelas air dengan mata tertutup tanpa tangan.",
  "Ceritakan cerita yang tidak masuk akal dan yakinkan orang lain.",
  "Pakai topi lucu selama 15 menit.",
  "Bernyanyi sambil berdiri di atas kursi.",
  "Makan pisang dengan kulitnya.",
  "Berbicara dengan aksen bayi selama 5 menit.",
  "Lari di tempat sambil berteriak 'aku adalah superhero!'.",
  "Kirim pesan ke orang yang kamu suka dengan kata konyol.",
  "Membuat muka sedih 1 menit lalu tertawa tiba-tiba.",
  "Berjalan seperti kuda dan menabrak orang lain secara lembut.",
  "Minum jus dicampur soda.",
  "Ceritakan cerita cinta terburuk yang pernah kamu dengar.",
  "Pakai baju temanmu yang paling besar selama 10 menit.",
  "Bernyanyi duet dengan dirimu sendiri.",
  "Makan wortel mentah tanpa kunyah.",
  "Berbicara hanya dengan kata berawalan huruf 'B' selama 1 menit.",
  "Guling di lantai sambil berteriak 'aku adalah ikan!'.",
  "Kirim pesan 'aku lupa namamu, siapa kamu?' ke teman.",
  "Menari seperti binatang liar.",
  "Berjalan seperti kura-kura selama 1 menit.",
  "Minum segelas air hanya dengan mulut (tanpa tangan).",
  "Ceritakan pengalaman paling mengagetkan.",
  "Pakai kacamata palsu dan bertingkah seperti buta 15 menit.",
  "Bernyanyi lagu populer sambil berdiri di atas meja (jika aman)."
];

function spin() {
  document.getElementById("spinSound").play();

  const wheel = document.getElementById("wheel");
  wheel.style.transform = "rotate(" + (Math.random() * 720) + "deg)";

  setTimeout(() => {
    const isTruth = Math.random() < 0.5;
    let text;

    if (isTruth) {
      text = "🩷 TRUTH 🩷\n\n" + truths[Math.floor(Math.random() * truths.length)];
    } else {
      text = "💜 DARE 💜\n\n" + dares[Math.floor(Math.random() * dares.length)];
    }

    document.getElementById("result").innerText = text;
    document.getElementById("selectSound").play();
  }, 1000);
        }
