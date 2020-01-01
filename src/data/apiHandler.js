export default class ApiHandler {
    static async sepeteEkle() {
        let response = await fetch("http://localhost/api/api/sepet?id=" + 4);
        let data = await response.json();
        if (response.status) {
            return data;
        } else {
            return null;
        }
    }

    static async sepettenCikar() {
        let response = await fetch("http://localhost/api/api/sepet", {
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