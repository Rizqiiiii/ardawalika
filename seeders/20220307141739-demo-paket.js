"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pakets",
      [
        {
          name_paket: "Anniversary",
          harga_paket: 11300000,
          img_url: "https://ik.imagekit.io/ardawalika/kor_card1_ng_aJ4Pf6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668454122",
          ket_paket: "Paket lengkap dengan konsep unik untuk rayakan anniversary perusahaan kamu",
          des_paket:
            "Paket Aniversary kantor lengkap dengan menawarkan spesifikasi layanan yang dibutuhkan dalam perencanaan perayaan ulang tahun kantor. Mulai dari pembuatan konsep acara, undangan, rundown acara, segala perlengkapan yang dibutuhkan saat hari H dan pendampingan (support) selama acara berlangsung",
          dekorasi_id: 1,
          catering_id: 1,
          rias_id: 1,
          category_id: 1,
          dokumentasi_id: 1,
          entertainment_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_paket: "Seminar",
          harga_paket: 1000000,
          img_url: "https://ik.imagekit.io/ardawalika/kor_card2_CsAHli4_Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668454221",
          ket_paket: "Paket lengkap mulai dari pembuatan konsep acara, brosur acara hingga teknis pelaksanaan",
          des_paket:
            "Manfaatkan jasa EO Ardawalika untuk kelancaran acara seminar Anda. Beberapa keunggulan menggunakan jasa Event Organizer (EO) untuk seminar seperti hemat biaya dan waktu. Selain itu, Anda tidak akan memikirkan konsep seminar apa yang tepat. Team kami sendiri akan memberikan beberapa konsep seminar yang tepat",
          dekorasi_id: 1,
          catering_id: 1,
          rias_id: 2,
          category_id: 1,
          dokumentasi_id: 2,
          entertainment_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_paket: "Perfect Platinum",
          harga_paket: 130000000,
          img_url: "https://ik.imagekit.io/ardawalika/wed_card1_xFneIPZS2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668477254",
          ket_paket: "Paket pernikahan super lengkap dengan semua kemewahan  dengan spesifikasi layanan paling tinggi.",
          des_paket:
            "Paket pernikahan All In dengan paketan catering 1000 pax untuk konsep acara normal. Biasanya digunakan untuk acara gedung atau venue yang cukup luas di area Bandung. Dengan segala sesuatunya yang tetap mengikuti protokol kesehatan. Demi keamanan dan kenyamanan bersama :) ",
          dekorasi_id: 1,
          catering_id: 1,
          rias_id: 1,
          category_id: 2,
          dokumentasi_id: 1,
          entertainment_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_paket: "Luxury Gold",
          harga_paket: 110000000,
          img_url: "https://ik.imagekit.io/ardawalika/wed_card2_-Ju9qzP2k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668478319",
          ket_paket: "Paket pernikahan spesial dengan konsep bermutu tinggi dan meninggalkan kesan terbaik.",
          des_paket:
            "Paket pernikahan tanpa paketan catering dengan konsep acara normal. Biasanya digunakan untuk acara gedung atau venue yang cukup luas di area Bandung. Dengan segala sesuatunya yang tetap mengikuti protokol kesehatan. Demi keamanan dan kenyamanan bersama :) ",
          dekorasi_id: 1,
          catering_id: 1,
          rias_id: 2,
          category_id: 2,
          dokumentasi_id: 2,
          entertainment_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_paket: "Sprinkle Silver",
          harga_paket: 95000000,
          img_url: "https://ik.imagekit.io/ardawalika/wed_card3_iC8Ovy622.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668478752",
          ket_paket: "Paket pernikahan lengkap untuk pernikahan istimewa dan berharga.",
          des_paket:
            "Paket pernikahan dengan konsep intimate wedding yang hanya keluarga inti beserta kerabat dekat ataupun sahabat dari pengantin yang hadir. Paket ini sudah All In dengan Catering sebanyak 300 pax dan bisa di upgrade hingga 500 pax jika situasi memungkinkan. Kamu tinggal menyewa venue seperti villa, hotel atau gedung skala kecil di area Bandung yang melayani acara pernikahan intimate. Setidaknya bisa dihadiri oleh 100 - 150 undangan ( 300 orang ) dengan segala sesuatunya yang tetap mengikuti protokol kesehatan. Demi keamanan dan kenyamanan bersama :)",
          dekorasi_id: 1,
          catering_id: 2,
          rias_id: 2,
          category_id: 2,
          dokumentasi_id: 2,
          entertainment_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_paket: "Nova Bronze",
          harga_paket: 95000000,
          img_url: "https://ik.imagekit.io/ardawalika/wed_card4_pPAFkBtshH73.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668478779",
          ket_paket: "Paket pernikahan spesial dengan konsep simpel dan efisien tanpa menghilangkan esensi sakral pernikahan.",
          des_paket:
            "Paket pernikahan dengan konsep intimate wedding yang hanya keluarga inti beserta kerabat dekat yang hadir. Kamu bisa menyewa venue seperti resto atau hotel di area Bandung yang melayani acara intimate dengan paketan catering didalamnya.Setidaknya bisa dihadiri oleh 100 - 150 undangan ( 300 orang ) dengan segala sesuatunya yang tetap mengikuti protokol kesehatan. Demi keamanan dan kenyamanan bersama :)",
          dekorasi_id: 3,
          catering_id: 3,
          rias_id: 3,
          category_id: 2,
          dokumentasi_id: 1,
          entertainment_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_paket: "Ulang Tahun",
          harga_paket: 5000000,
          img_url: "https://ik.imagekit.io/ardawalika/kel_card1_CfHXXzxJ1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668448284",
          ket_paket: "Paket lengkap untuk merayakan ulang tahun anak/orang dewasa bersama dengan orang - orang terkasih.",
          des_paket:
            "Paket ulang tahun lengkap menawarkan spesifikasi layanan yang akan dibutuhkan dalam perencanaan perayaan ulang tahun. Mulai dari pembuatan konsep acara, undangan, rundown acara , segala perlengkapan yang dibutuhkan saat hari H hingga persiapan souvenir kepada orang - orang terkasih.",
          dekorasi_id: 1,
          catering_id: 1,
          rias_id: 1,
          category_id: 3,
          dokumentasi_id: 1,
          entertainment_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_paket: "Reuni Keluarga",
          harga_paket: 5600000,
          img_url: "https://ik.imagekit.io/ardawalika/kel_card2_P9-LSvsjZYTU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668448879",
          ket_paket: "Paket All In terbaik untuk menjalin silaturahmi antar keluarga besar dengan konsep menarik dan meriah.",
          des_paket:
            "Paket reuni keluarga terlengkap untuk anda yang ingin berbagi keceriaan dan kehangatan bersama keluarga, menawarkan spesifikasi layanan terbaik dari setiap layanan yang ditawarkan, mulai dari merancang konsep dan tema acara, persiapan teknikal meeting dengan pihak keluarga,rundown acara, dokumentasi, dekorasi dan katering.",
          dekorasi_id: 1,
          catering_id: 2,
          rias_id: 2,
          category_id: 3,
          dokumentasi_id: 2,
          entertainment_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Pakets", null, {});
  },
};
