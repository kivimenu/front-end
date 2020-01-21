export default class ApiHandler {
    static async sepeteEkle() {
        let response = await fetch("http://localhost/api4/api/sepet?id=" + 4);
        let data = await response.json();
        if (response.status) {
            return data;
        } else {
            return null;
        }
    }

    static async kullaniciBilgi() {
        let response = await fetch("http://localhost/api4/api/sepet", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Ad: "Minus",
                Soyad: "App",
                Email: "minusapp@hotmail.com",
                Telefon: 5458798711
            })
        });
        let data = await response.json();
        if (response.status) {
            return data;
        } else {
            return null;
        }
    }

    static async sepettenCikar() {
        let response = await fetch("http://localhost/api4/api/sepet", {
            method: "POST",
            body: JSON.stringify({
                urunIsim: "Nike",
                adet: 2
            })
        });
        let data = await response.json();
        if (response.status) {
            return data;
        } else {
            return null;
        }
    }
}