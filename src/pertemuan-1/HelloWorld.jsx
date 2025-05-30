export default function HelloWorld(){
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                nama="Muhammad Rafie SHata"
                alamat="Jl. Mahang N0.09"
                tlahir="10/28/2003"
                ntelp="0895639428483"
                nim="2355301142"
                tanggal={new Date().toLocaleDateString()}
            />
            <Gambar/>
        </div>
    )

    function GreetingBinjai(){
        return(
            <small>Salam dari Binjai</small>
        )
    }

    function QuoteText() {
        const text = "Mulutmu Harimaumu";
        const text2 = "Aku ingin jadi macan";
        return (
            <div>
                <hr/>
                <p>{text.toLowerCase()}</p> 
                <p>{text2.toUpperCase()}</p>
            </div>
        )

        
    }

    function UserCard(props){
        return (
            <div>
                <hr/>
                <h3>Nama: {props.nama}</h3>
                <p>Alamat: {props.alamat}</p>
                <p>Tanggal Lahir: {props.tlahir}</p>
                <p>No. Telp: {props.ntelp}</p>
                <p>NIM: {props.nim}</p>
                <p>Tanggal: {props.tanggal}</p>
            </div>
        )
    }

    function Gambar(){
        return(
            <img src="https://www.whiteboardjournal.com/wp-content/uploads/2023/04/maxresdefault-6.jpg" alt="" />
        )
    }

    
}
