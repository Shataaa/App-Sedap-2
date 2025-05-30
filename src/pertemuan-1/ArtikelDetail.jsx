export default function ArtikelDetail(){
    return(
        <div>
            <Text/>
            <Gambar/>
            <QuoteText/>
            <Bagian/>
            
        </div>
    )

    function Text(){
        return(
            <h1>Pengaruh bermain game online terhadap kesehatan</h1>
        )
    }

    function QuoteText() {
        const text = "Hidup itu ibarat gim, jadi kamu tinggal pilih dan jalani pilihanmu. Apa pun yang kamu pilih itu sudah risiko kamu. Ending-nya kita tentukan sendiri mau bahagia atau sedih.";
        const text2 = "Tidak ada yang lebih buruk daripada kalah tanpa mempelajarinya.";
        return (
            <div>
                <hr/>
                <i>
                    <p>{text.toUpperCase()}</p>
                    <p>{text2.toUpperCase()}</p>
                </i>
                
            </div>
        )
    }

    function Bagian(){
        return(
            <section class="article-content">
                <h1><u>Dampak Positif</u></h1>
                <h2>Mengurangi Stress</h2>
                <p>Suntuk dengan rutinitas pekerjaan yang membosankan? Kamu perlu refreshing sejenak dengan kegiatan yang disukai. Bermain game online dapat menjadi hiburan yang membantu mengurangi stres. Bermain game online dapat merangsang produksi hormon dopamin di tubuh. Suasana hati dapat meningkat dan kamu akan merasa lebih bahagia. Setelah bermain game secukupnya kamu bisa kembali beraktivitas dengan pikiran yang lebih segar.</p>
                <br />
                <h2>Meningkatkan Konsentrasi</h2>
                <p>Bermain game online bermanfaat untuk meningkatkan konsentrasi. Bukan hanya untuk anak-anak, manfaat ini bisa dirasakan orang dewasa dan lansia yang butuh latihan otak guna menurunkan risiko demensia. Beberapa game bahkan telah dirancang khusus untuk melatih otak dan meningkatkan konsentrasi, contohnya game Peak, Elevate, Lumosity, Fit Brain Trainer, dan semacamnya.</p>
                <br />
                <h2>Melatih Pengendalian Emosi</h2>
                <p>Dampak positif game online lainnya adalah melatih pengendalian emosi. Saat bermain game online kita dihadapkan dengan tantangan-tantangan yang memacu adrenalin. Kemenangan dan kekalahan yang dialami dalam permainan game online dapat melatih pengendalian emosi. Anak-anak yang bermain game emosinya dapat lebih stabil dalam menghadapi kejadian di dunia nyata. Sehingga respons yang ditampilkan lebih rileks serta tidak mudah  cemas saat menangani masalah.</p>
                <br />
                <h2>Meningkatkan Kreativitas</h2>
                <p>Salah satu manfaat bermain game online yaitu meningkatkan kreativitas. Orang yang terbiasa bermain game akan terlatih menyusun strategi dan berpikir kreatif agar bisa memenangkan permainan. Terdapat game online yang dirancang khusus untuk mengasah kreativitas anak-anak, seperti game menggambar, mewarnai, sampai game membangun perkotaan lengkap dengan segala fasilitasnya.</p>
                <br />
                <h2>Melatih Pengambilan Keputusan</h2>
                <p>Melatih pengambilan keputusan dengan cepat dan tepat merupakan salah satu dampak positif game online yang sangat penting. Dengan bermain game kita akan terbiasa mengambil keputusan dengan cepat agar tidak kehilangan momentum yang menguntungkan.</p>
                <br />
                <h2>Menghasilkan Uang</h2>
                <p>Bisakah game menghasilkan uang? Tentu saja. Untuk ranah profesional, kamu bisa berkarir di industri game sebagai game designer, game programmer, game tester, creative editor, atlet esports, dan lain-lain. Menjadikan game sebagai sumber penghasilan tambahan juga dapat dilakukan. Ada beberapa game menghasilkan uang yang bisa kamu mainkan, diantaranya Hago, ClipClap, Market Glory, Coin republic, dan semacamnya.</p>
                <br />
                <h1><u>Dampak Negatif</u></h1>
                <br />
                <h2>Mengganggu Kesehatan Mata</h2>
                <p>Salah satu risiko yang mengintai jika terlalu lama bermain game online adalah terganggunya kesehatan mata. Menatap layar smartphone dan komputer tanpa jeda karena keasyikan bermain game dapat membuat mata lelah, kering, dan otot mata menjadi tegang. Dalam jangka panjang bisa terjadi masalah kesehatan mata yang lebih serius. Sebaiknya kamu disiplin mengistirahatkan mata secara berkala ketika bekerja maupun bermain game di depan laptop maupun smartphone. Alihkan pandangan dari layar gadget selama 20 detik setiap 20 menit sekali. Kemudian setelah menatap layar monitor selama 2 jam, istirahatkan mata selama 15 menit</p>
                <br />
                <h2>Munculnya Masalah Otot dan Persendian</h2>
                <p>Dampak negatif game online lainnya adalah munculnya masalah otot dan persendian. Terlalu lama duduk apalagi dengan posisi kepala menunduk rentan menimbulkan otot kaku, nyeri sendi, serta gangguan kesehatan lainnya. Sangat disarankan untuk menggunakan kursi ergonomis yang sesuai dengan postur tubuhmu agar tidak cepat lelah saat bermain game online. Ada baiknya kamu juga memasang pengingat setiap 30 menit untuk berdiri sejenak dan berjalan sebentar.</p>
                <br />
                <h2>Kurang Bersosialisasi Tatap Muka</h2>
                <p>Terlalu fokus bermain game membuat seseorang sulit terlepas dari gadget-nya. Bahkan bisa jadi malah melakukan phubbing, yakni mengabaikan orang lain di hadapannya karena asyik sendiri memainkan gadget. Kurang bersosialisasi tatap muka merupakan dampak negatif game online yang perlu diwaspadai. Bagaimanapun kita tetap membutuhkan interaksi secara langsung dengan orang di sekitar kita. Sebaiknya kita batasi penggunaan gadget saat sedang bersama orang lain.</p>
                <br />
                <h2>Memicu Halusinasi</h2>
                <p>Dampak negatif game online selanjutnya yakni memicu halusinasi. Mengutip Detik.com, sebuah survei menyebutkan bahwa lebih dari 1200 orang yang bermain game online rentan mengalami halusinasi. Angelica Ortiz de Gortari dari Nottingham Trent University Inggris mengungkapkan bahwa pikiran para gamer seolah melihat dan mendengarkan apa yang mereka harapkan dari game yang dimainkan. Hal ini dikarenakan objek dan peristiwa yang terstimulasikan pada game online berubah menjadi objek yang evokatif.</p>
                <br />
                <h2>Insomnia</h2>
                <p>Insomnia atau kesulitan tidur menjadi ancaman tersendiri jika bermain game online secara berlebihan. Hal ini disebabkan terlalu lama menatap layar gadget dapat menghambat produksi hormon melatonin yang berfungsi mengatur jadwal tidur. Akibatnya seseorang dapat mengalami insomnia pada malam harinya. Sangat penting untuk mengetahui batas toleransi tubuh dalam melakukan sesuatu. Bermain game terlalu lama hingga kecanduan tentu tidak baik untuk kesehatan secara keseluruhan. Berikan jeda yang cukup saat bermain game agar terhindar dari insomnia. Berkarir di bidang game online adalah keputusan yang bisa dipilih jika kamu ingin menekuninya. Berbagai manfaat bermain game online dapat dirasakan, sekaligus bisa mendatangkan cuan. Tidak ada salahnya juga jika kamu bermain game online sebatas untuk hiburan. Namun perlu diingat untuk tetap memperhatikan dampak negatif game online agar kesehatan fisik dan mentalmu tidak terganggu.</p>
                <br />

            </section>
        )
    }

    function Gambar(){
        return(
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67-FuggdfFg-6Z0vZEtq0eBURG5fQfw3J8Q&s" alt="" />
        )
    }

}