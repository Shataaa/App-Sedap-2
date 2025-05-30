export default function FormQnA(){
    return(
        <div>
            <Gambar/>
            <Text/>
            <Body/>
        </div>
    )

    function Text(){
        return(
            <div>
                <h2>Form QnA</h2>
                <p>Silakan ajukan pertanyaan di bawah ini, pastikan singkat dan jelas.</p>
            </div>
        )
    }

    function Body(){
        return(
            <div>
                <h4>Nama</h4>
                <input type="text" placeholder="Masukkan Nama"/>
                <h4>E-Mail</h4>
                <input type="email" placeholder="Masukkan Email"/>
                <h4>Seberapa Penting Pertanyaan kamu</h4>
                <select name="" id="">
                    <option value="low">Rendah</option>
                    <option value="medium">Sedang</option>
                    <option value="high">Tinggi</option>
                    <option value="urgent">Sangat Tinggi</option>
                </select>
                <h4>Question</h4>
                <input type="text" placeholder="Masukkan Pertanyaan"/>
                <br />
                <br />
                <button className="bg-purple-500 text-white px-4 py-2 rounded w-full">Kirim</button>
            </div>
        )
    }

    function Gambar(){
        return(
            <img src="https://www.pngmart.com/files/10/QNA-Transparent-PNG.png" alt="" />
        )
    }
}